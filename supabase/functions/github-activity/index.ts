import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Check cache first (5 minutes)
    const { data: cached } = await supabase
      .from('github_activity')
      .select('*')
      .gte('cached_at', new Date(Date.now() - 5 * 60 * 1000).toISOString())
      .order('created_at', { ascending: false })
      .limit(10);

    if (cached && cached.length > 0) {
      return new Response(JSON.stringify({ activities: cached }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Fetch from GitHub API
    const username = 'moizahmad08';
    const response = await fetch(`https://api.github.com/users/${username}/events/public`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Portfolio-App',
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const events = await response.json();
    const activities = events.slice(0, 10).map((event: any) => {
      let activityType = 'other';
      let message = event.type;

      if (event.type === 'PushEvent') {
        activityType = 'push';
        message = `Pushed ${event.payload.commits?.length || 0} commit(s)`;
      } else if (event.type === 'CreateEvent') {
        activityType = 'create';
        message = `Created ${event.payload.ref_type}`;
      } else if (event.type === 'PullRequestEvent') {
        activityType = 'pull_request';
        message = `${event.payload.action} pull request`;
      }

      return {
        activity_type: activityType,
        repo_name: event.repo.name,
        message,
        url: `https://github.com/${event.repo.name}`,
        created_at: event.created_at,
      };
    });

    // Clear old cache and insert new
    await supabase.from('github_activity').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    await supabase.from('github_activity').insert(activities);

    return new Response(JSON.stringify({ activities }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching GitHub activity:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage, activities: [] }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

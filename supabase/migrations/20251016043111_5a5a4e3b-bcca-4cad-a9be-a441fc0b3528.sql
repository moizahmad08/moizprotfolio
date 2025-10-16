-- AI Assistant conversations
CREATE TABLE IF NOT EXISTS public.conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id TEXT NOT NULL,
  message TEXT NOT NULL,
  response TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Analytics tracking
CREATE TABLE IF NOT EXISTS public.page_views (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page TEXT NOT NULL,
  visitor_id UUID NOT NULL,
  duration INTEGER DEFAULT 0,
  viewed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Code playground saves
CREATE TABLE IF NOT EXISTS public.saved_code (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  code TEXT NOT NULL,
  language TEXT NOT NULL DEFAULT 'javascript',
  session_id TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User preferences
CREATE TABLE IF NOT EXISTS public.user_preferences (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id TEXT NOT NULL UNIQUE,
  theme_preset TEXT DEFAULT 'cyber',
  custom_colors JSONB DEFAULT '{}'::jsonb,
  voice_enabled BOOLEAN DEFAULT false,
  code_rain_enabled BOOLEAN DEFAULT true,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- GitHub activity cache
CREATE TABLE IF NOT EXISTS public.github_activity (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  activity_type TEXT NOT NULL,
  repo_name TEXT NOT NULL,
  message TEXT,
  url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL,
  cached_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.saved_code ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.github_activity ENABLE ROW LEVEL SECURITY;

-- Public read/write policies (no auth required for portfolio)
CREATE POLICY "Anyone can insert conversations" ON public.conversations FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can view conversations" ON public.conversations FOR SELECT USING (true);

CREATE POLICY "Anyone can insert page views" ON public.page_views FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can view page views" ON public.page_views FOR SELECT USING (true);

CREATE POLICY "Anyone can insert saved code" ON public.saved_code FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can view saved code" ON public.saved_code FOR SELECT USING (true);
CREATE POLICY "Anyone can update saved code" ON public.saved_code FOR UPDATE USING (true);
CREATE POLICY "Anyone can delete saved code" ON public.saved_code FOR DELETE USING (true);

CREATE POLICY "Anyone can insert preferences" ON public.user_preferences FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can view preferences" ON public.user_preferences FOR SELECT USING (true);
CREATE POLICY "Anyone can update preferences" ON public.user_preferences FOR UPDATE USING (true);

CREATE POLICY "Anyone can view github activity" ON public.github_activity FOR SELECT USING (true);
CREATE POLICY "Service can manage github activity" ON public.github_activity FOR ALL USING (true);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_conversations_session ON public.conversations(session_id);
CREATE INDEX IF NOT EXISTS idx_conversations_created ON public.conversations(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_page_views_page ON public.page_views(page);
CREATE INDEX IF NOT EXISTS idx_page_views_visitor ON public.page_views(visitor_id);
CREATE INDEX IF NOT EXISTS idx_saved_code_session ON public.saved_code(session_id);
CREATE INDEX IF NOT EXISTS idx_github_activity_created ON public.github_activity(created_at DESC);
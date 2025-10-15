import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const blogPosts = {
  "1": {
    title: "Building Scalable AI Solutions with Python",
    content: `
      <h2>Introduction</h2>
      <p>Building scalable AI solutions requires careful planning and architecture. In this comprehensive guide, we'll explore best practices for creating production-ready AI systems that can handle real-world demands.</p>
      
      <h2>Key Principles</h2>
      <p>When designing AI systems, consider these fundamental principles:</p>
      <ul>
        <li>Modularity and separation of concerns</li>
        <li>Efficient data pipeline design</li>
        <li>Model versioning and monitoring</li>
        <li>Scalable infrastructure</li>
      </ul>
      
      <h2>Implementation Strategy</h2>
      <p>Start with a solid foundation using frameworks like TensorFlow or PyTorch. Implement proper logging, monitoring, and error handling from day one. Use containerization for consistent deployment across environments.</p>
      
      <h2>Best Practices</h2>
      <p>Always validate your models thoroughly before deployment. Implement A/B testing to compare model performance. Monitor key metrics and set up alerts for anomalies.</p>
    `,
    category: "AI Development",
    date: "2024-03-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop"
  },
  "2": {
    title: "Automating Business Workflows: A Complete Guide",
    content: `
      <h2>Why Automate?</h2>
      <p>Automation transforms how businesses operate, saving time and reducing errors. This guide covers everything you need to know about workflow automation.</p>
      
      <h2>Getting Started</h2>
      <p>Begin by identifying repetitive tasks that consume significant time. Document current processes and look for bottlenecks. Prioritize automation opportunities based on ROI.</p>
      
      <h2>Tools and Technologies</h2>
      <p>Popular automation tools include Python scripts, Zapier, Make, and custom APIs. Choose based on your technical requirements and team expertise.</p>
      
      <h2>Implementation Tips</h2>
      <p>Start small with pilot projects. Measure results carefully. Iterate based on feedback. Scale gradually as you gain confidence.</p>
    `,
    category: "Automation",
    date: "2024-03-10",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&auto=format&fit=crop"
  },
  "3": {
    title: "The Future of Machine Learning in 2024",
    content: `
      <h2>Emerging Trends</h2>
      <p>The ML landscape is evolving rapidly. Large language models, multimodal AI, and edge computing are reshaping what's possible.</p>
      
      <h2>Key Developments</h2>
      <p>Foundation models are becoming more accessible. Transfer learning is enabling smaller teams to build powerful applications. AutoML is democratizing machine learning.</p>
      
      <h2>Industry Impact</h2>
      <p>From healthcare to finance, ML is transforming industries. Real-time decision making and personalization are becoming standard expectations.</p>
      
      <h2>Looking Ahead</h2>
      <p>The next year will bring advances in model efficiency, explainability, and ethical AI. Stay informed and keep experimenting.</p>
    `,
    category: "Machine Learning",
    date: "2024-03-05",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&auto=format&fit=crop"
  }
};

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <Link to="/#blog">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <article className="glass-card p-8 md:p-12 border-primary/20">
          <div className="mb-6">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>

          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />

          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
};

export default BlogPost;

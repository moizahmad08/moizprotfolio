import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Save, Download } from "lucide-react";
import Editor from "@monaco-editor/react";
import { useToast } from "@/hooks/use-toast";

const defaultCode = `// Try some React code!
function HelloWorld() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Hello from the Code Playground!</h1>
      <p>Edit this code and click Run to see changes.</p>
    </div>
  );
}

// Render the component
<HelloWorld />`;

export const CodePlayground = () => {
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('javascript');
  const { toast } = useToast();

  const runCode = () => {
    try {
      // Simple code execution simulation
      const result = eval(code);
      setOutput(String(result));
      toast({
        title: "Code executed",
        description: "Check the output tab for results",
      });
    } catch (error: any) {
      setOutput(`Error: ${error.message}`);
      toast({
        title: "Execution error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <section id="playground" className="py-20 px-4 scroll-mt-20">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Code <span className="gradient-text">Playground</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Try out code examples and experiments
        </p>

        <Card className="glass-card border-primary/30 overflow-hidden">
          <div className="p-4 border-b border-border/50 flex items-center justify-between">
            <Tabs value={language} onValueChange={setLanguage}>
              <TabsList>
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                <TabsTrigger value="typescript">TypeScript</TabsTrigger>
                <TabsTrigger value="html">HTML</TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="flex gap-2">
              <Button onClick={runCode} className="bg-gradient-to-r from-primary to-secondary">
                <Play className="mr-2 h-4 w-4" />
                Run
              </Button>
              <Button variant="outline">
                <Save className="mr-2 h-4 w-4" />
                Save
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 divide-x divide-border/50">
            <div className="h-[500px]">
              <Editor
                height="100%"
                language={language}
                value={code}
                onChange={(value) => setCode(value || '')}
                theme="vs-dark"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: 'on',
                  scrollBeyondLastLine: false,
                }}
              />
            </div>
            <div className="h-[500px] p-4 bg-card overflow-auto">
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">Output:</h3>
              <pre className="text-sm text-foreground whitespace-pre-wrap">{output || 'Click Run to see output'}</pre>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

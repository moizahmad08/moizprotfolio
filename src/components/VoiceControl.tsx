import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mic, MicOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const VoiceControl = () => {
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = false;
      recognitionInstance.lang = 'en-US';

      recognitionInstance.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        handleVoiceCommand(transcript);
      };

      recognitionInstance.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognitionInstance.onend = () => {
        setIsListening(false);
      };

      setRecognition(recognitionInstance);
    }
  }, []);

  const handleVoiceCommand = (command: string) => {
    const scrollToSection = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        toast({
          title: "Navigating...",
          description: `Going to ${id} section`,
        });
      }
    };

    if (command.includes('home')) {
      scrollToSection('home');
    } else if (command.includes('skill')) {
      scrollToSection('skills');
    } else if (command.includes('project')) {
      scrollToSection('projects');
    } else if (command.includes('experience')) {
      scrollToSection('experience');
    } else if (command.includes('contact')) {
      scrollToSection('contact');
    } else if (command.includes('blog')) {
      scrollToSection('blog');
    } else {
      toast({
        title: "Command not recognized",
        description: `Try: "Go to projects" or "Show skills"`,
        variant: "destructive",
      });
    }
  };

  const toggleListening = () => {
    if (!recognition) {
      toast({
        title: "Not supported",
        description: "Voice control is not supported in your browser",
        variant: "destructive",
      });
      return;
    }

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.start();
      setIsListening(true);
      toast({
        title: "Listening...",
        description: "Say a command like 'Go to projects'",
      });
    }
  };

  return (
    <Button
      size="icon"
      variant="outline"
      onClick={toggleListening}
      className={`fixed bottom-24 right-6 z-50 h-12 w-12 rounded-full ${
        isListening ? 'bg-gradient-to-r from-accent to-destructive animate-pulse' : 'glass-card border-primary/30'
      }`}
    >
      {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
    </Button>
  );
};

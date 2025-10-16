import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Palette, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";

const presets = [
  { name: "Cyber", primary: "200 100% 60%", secondary: "280 100% 70%", accent: "330 100% 65%" },
  { name: "Ocean", primary: "200 90% 50%", secondary: "220 85% 60%", accent: "240 80% 70%" },
  { name: "Forest", primary: "140 60% 50%", secondary: "120 55% 45%", accent: "100 50% 40%" },
  { name: "Sunset", primary: "30 100% 60%", secondary: "15 100% 55%", accent: "0 100% 50%" },
  { name: "Monochrome", primary: "0 0% 50%", secondary: "0 0% 40%", accent: "0 0% 30%" },
];

export const ThemeCustomizer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [glassmorphism, setGlassmorphism] = useState(80);

  const applyPreset = (preset: typeof presets[0]) => {
    document.documentElement.style.setProperty('--primary', preset.primary);
    document.documentElement.style.setProperty('--secondary', preset.secondary);
    document.documentElement.style.setProperty('--accent', preset.accent);
  };

  if (!isOpen) {
    return (
      <Button
        size="icon"
        variant="outline"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 h-12 w-12 rounded-full glass-card border-primary/30 hover:scale-110 transition-all duration-300"
      >
        <Palette className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 left-6 z-50 w-[350px] glass-card border-primary/30 shadow-2xl animate-fade-in">
      <div className="p-4 border-b border-border/50 flex items-center justify-between">
        <h3 className="font-semibold">Theme Customizer</h3>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setIsOpen(false)}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="p-4 space-y-4">
        <Tabs defaultValue="presets">
          <TabsList className="w-full">
            <TabsTrigger value="presets" className="flex-1">Presets</TabsTrigger>
            <TabsTrigger value="effects" className="flex-1">Effects</TabsTrigger>
          </TabsList>

          <TabsContent value="presets" className="space-y-2 mt-4">
            {presets.map((preset) => (
              <Button
                key={preset.name}
                variant="outline"
                className="w-full justify-start"
                onClick={() => applyPreset(preset)}
              >
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className={`h-4 w-4 rounded-full`} style={{ background: `hsl(${preset.primary})` }} />
                    <div className={`h-4 w-4 rounded-full`} style={{ background: `hsl(${preset.secondary})` }} />
                    <div className={`h-4 w-4 rounded-full`} style={{ background: `hsl(${preset.accent})` }} />
                  </div>
                  <span>{preset.name}</span>
                </div>
              </Button>
            ))}
          </TabsContent>

          <TabsContent value="effects" className="space-y-4 mt-4">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">
                Glassmorphism: {glassmorphism}%
              </label>
              <Slider
                value={[glassmorphism]}
                onValueChange={([value]) => setGlassmorphism(value)}
                min={0}
                max={100}
                step={10}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Card>
  );
};

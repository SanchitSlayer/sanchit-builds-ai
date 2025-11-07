import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent animate-pulse-slow" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-primary text-lg font-medium">Hi — I'm</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Sanchit Garg
            </h1>
            
            <p className="text-2xl md:text-3xl text-muted-foreground">
              AI Student & Product Strategist from{" "}
              <span className="text-primary">IIT Jodhpur</span>
            </p>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              I build ML-driven products and drive growth for early-stage startups. 
              Machine learning + product strategy → measurable product adoption.
            </p>
            
            {/* Quick highlights */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="px-4 py-2 rounded-full bg-secondary border border-border text-sm">
                IIT Jodhpur — BS Chemistry (AI minor)
              </div>
              <div className="px-4 py-2 rounded-full bg-secondary border border-border text-sm">
                Growth Intern — Inventive AI (YC S23)
              </div>
              <div className="px-4 py-2 rounded-full bg-secondary border border-border text-sm">
                Overall Coordinator — The Product Club
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-6">
              <Button 
                size="lg" 
                className="group"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="group"
              >
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </Button>
            </div>
          </div>
          
          {/* Right - Profile image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              
              {/* Image container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Sanchit Garg - AI Student & Product Strategist"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl px-4 py-2 shadow-lg animate-float">
                <p className="text-sm text-muted-foreground">Based in</p>
                <p className="font-semibold">India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Button } from "@/components/ui/button";
import { Play, Star, Download, Brain } from "lucide-react";
import heroImage from "@/assets/hero-ai.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-secondary">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 md:space-y-8 animate-fade-in text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-ai-accent/10 rounded-full border border-ai-accent/20">
                <Star className="h-4 w-4 text-ai-accent" />
                <span className="text-sm font-medium text-ai-accent">Featured Model</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Discover the Future of
                <span className="bg-gradient-primary bg-clip-text text-transparent block">
                  AI Models
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
                Access cutting-edge AI models for computer vision, natural language processing, 
                and machine learning. Deploy instantly with our seamless integration.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-primary hover:shadow-ai-glow transition-all duration-300 h-12 px-6">
                <Play className="h-5 w-5 mr-2" />
                Explore Models
              </Button>
              <Button variant="outline" size="lg" className="border-border hover:bg-ai-muted h-12 px-6">
                <Download className="h-5 w-5 mr-2" />
                Download SDK
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 md:space-x-8 pt-4">
              <div className="text-center lg:text-left">
                <div className="text-xl md:text-2xl font-bold text-foreground">5,000+</div>
                <div className="text-xs md:text-sm text-muted-foreground">AI Models</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl md:text-2xl font-bold text-foreground">2M+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Downloads</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl md:text-2xl font-bold text-foreground">150K+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Developers</div>
              </div>
            </div>
          </div>

          {/* Right content - Hero Image */}
          <div className="relative animate-scale-in order-first lg:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-ai-lg">
              <img 
                src={heroImage} 
                alt="AI Neural Network Visualization" 
                className="w-full h-[250px] md:h-[350px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
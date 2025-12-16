import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";
import maternalHealthCover from "@/assets/decks/maternal-health-risk-cover.jpg";

interface Deck {
  title: string;
  description: string;
  coverImage: string;
  downloadUrl: string;
  type: "pitch" | "case-study" | "project";
}

const decks: Deck[] = [
  {
    title: "Maternal Health Risk - ML Project",
    description: "Machine Learning project analyzing maternal health risk factors using KNN, Random Forest, and SVM classifiers.",
    coverImage: maternalHealthCover,
    downloadUrl: "/decks/MATERNAL_HEALTH_RISK.pptx",
    type: "project",
  },
];

const Decks = () => {
  return (
    <section id="decks" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Pitch Decks & Case Studies
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A collection of my project presentations, pitch decks, and case studies showcasing my work in AI and product strategy.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {decks.map((deck, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 bg-card"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                <img
                  src={deck.coverImage}
                  alt={deck.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/90 text-primary-foreground capitalize">
                    {deck.type.replace("-", " ")}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-5">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {deck.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {deck.description}
                </p>
                
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(deck.downloadUrl, '_blank')}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(deck.downloadUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Decks;

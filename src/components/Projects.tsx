import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Cryptocurrency Prediction using Sentiment Analysis",
    date: "June 2025",
    description: "Real-time Twitter sentiment analysis pipeline for cryptocurrency price prediction. Implemented async scraping and NLP processing for sentiment trend visualization.",
    tech: ["Python", "NLP", "Async", "Data Visualization"],
    challenge: "Process high-volume social media data in real-time",
    approach: "Built asynchronous scraping pipeline with sentiment analysis models",
    outcome: "Successfully visualized sentiment trends correlating with price movements",
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    title: "Vehicle Routing Problem Solver with OSRM Integration",
    date: "April 2025",
    description: "VRP solver implementing 5 optimization algorithms with interactive Streamlit visualization. Integrated OSRM API for real-world route optimization.",
    tech: ["Python", "Algorithms", "OSRM", "Streamlit", "Folium"],
    challenge: "Optimize delivery routes across multiple algorithms efficiently",
    approach: "Implemented Brute Force, Nearest Neighbour, Clarke-Wright, Simulated Annealing, and Genetic Algorithm approaches",
    outcome: "Interactive demo showcasing comparative performance of different algorithms",
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    title: "Maternal Health Risk Classification",
    date: "Oct–Nov 2024",
    description: "ML course project implementing two-method classifier using RNN and Naive Bayes with POS-weighted features for maternal health risk assessment.",
    tech: ["Python", "RNN", "Naive Bayes", "NLP", "scikit-learn"],
    challenge: "Accurately classify maternal health risk levels from medical data",
    approach: "Combined RNN deep learning with Naive Bayes using advanced NLP vectorization",
    outcome: "Achieved high accuracy with comparative model analysis",
    links: {
      github: "#"
    }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Projects</h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Case studies showcasing ML-driven products and data science projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col group"
            >
              <div className="flex-1 space-y-4">
                <div>
                  <div className="text-sm text-primary mb-2">{project.date}</div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-muted-foreground">Challenge:</span>
                    <p className="text-foreground mt-1">{project.challenge}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Approach:</span>
                    <p className="text-foreground mt-1">{project.approach}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Outcome:</span>
                    <p className="text-foreground mt-1">{project.outcome}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-secondary rounded text-xs border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2 mt-6 pt-4 border-t border-border">
                {project.links.github && (
                  <Button variant="outline" size="sm" className="flex-1 group/btn">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                    <ArrowRight className="ml-auto h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                )}
                {project.links.demo && (
                  <Button variant="outline" size="sm" className="flex-1 group/btn">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                    <ArrowRight className="ml-auto h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

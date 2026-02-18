import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - About text */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2">About Me</h2>
              <div className="h-1 w-20 bg-primary rounded-full" />
            </div>
            
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                I'm an undergraduate at IIT Jodhpur pursuing BS Chemistry with a specialization, 
                and a Minor in AI from IIT Ropar. I'm passionate about the intersection of artificial 
                intelligence and product strategy.
              </p>
              <p>
                My experience spans building ML-driven products, conducting growth experiments, 
                and leading product initiatives. As Overall Coordinator of The Product Club, I've 
                fostered a community of product-minded students and organized workshops on product 
                thinking and technology.
              </p>
              <p>
                Currently, I'm focused on leveraging machine learning and data-driven decision making 
                to create products that drive measurable adoption and business outcomes.
              </p>
            </div>
          </div>
          
          {/* Right - Quick stats & facts */}
          <div className="space-y-6">
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-3" />
                Quick Facts
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Languages:</span>
                  <span className="text-foreground">Python, C/C++, R, JavaScript</span>
                </div>
                <div className="flex justify-between">
                  <span>Focus Areas:</span>
                  <span className="text-foreground">ML, Product Strategy, Growth</span>
                </div>
                <div className="flex justify-between">
                  <span>Current Role:</span>
                  <span className="text-foreground">Product Intern @ Gumbo Tech</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-3" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "scikit-learn", "Pandas", "NumPy", "React", "Next.js", "MongoDB", "Git", "Jupyter", "Power BI"].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-secondary rounded-full text-sm border border-border hover:border-primary/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

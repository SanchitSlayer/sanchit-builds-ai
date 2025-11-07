import { Card } from "@/components/ui/card";
import { Code2, TrendingUp } from "lucide-react";

const technicalSkills = {
  "Languages": ["Python", "C/C++", "R", "JavaScript", "SQL"],
  "ML & Data": ["Pandas", "NumPy", "scikit-learn", "TensorFlow"],
  "Web Dev": ["React", "Next.js", "HTML/CSS", "MongoDB"],
  "Tools": ["Git", "Jupyter", "Power BI", "Tableau"]
};

const productSkills = [
  "Product Strategy",
  "Growth Experimentation",
  "Go-to-Market (GTM)",
  "Data-Driven Decision Making",
  "User Behavior Analysis",
  "A/B Testing",
  "Product Analytics",
  "Business Development"
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Technical Skills</h3>
            </div>
            
            <div className="space-y-6">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="text-sm font-semibold text-primary mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1.5 bg-secondary rounded-lg text-sm border border-border hover:border-primary/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
          
          {/* Product & Soft Skills */}
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Product & Strategy</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {productSkills.map((skill) => (
                <div 
                  key={skill}
                  className="px-3 py-2 bg-secondary rounded-lg text-sm border border-border hover:border-primary/50 transition-colors text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        {/* Capabilities Section */}
        <Card className="mt-8 p-8 bg-card border-border">
          <h3 className="text-2xl font-semibold mb-6">What I Work On</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="h-1 w-12 bg-primary rounded-full" />
              <h4 className="font-semibold">ML-First Products</h4>
              <p className="text-sm text-muted-foreground">
                Product strategy and development for AI/ML-driven applications
              </p>
            </div>
            <div className="space-y-2">
              <div className="h-1 w-12 bg-primary rounded-full" />
              <h4 className="font-semibold">Growth & GTM</h4>
              <p className="text-sm text-muted-foreground">
                Growth experiments and go-to-market support for early-stage startups
              </p>
            </div>
            <div className="space-y-2">
              <div className="h-1 w-12 bg-primary rounded-full" />
              <h4 className="font-semibold">Prototypes & POCs</h4>
              <p className="text-sm text-muted-foreground">
                Rapid prototyping and proof-of-concept ML systems
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;

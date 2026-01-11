import { Card } from "@/components/ui/card";
import { Briefcase, Users } from "lucide-react";

const experiences = [
  {
    title: "Product Management Intern",
    company: "Gumbo Tech",
    badge: "Ongoing",
    period: "Jan 2026 — Present",
    icon: Briefcase,
    responsibilities: [
      "Driving product strategy and roadmap development",
      "Collaborating with cross-functional teams on product initiatives",
      "Conducting market research and competitive analysis",
      "Contributing to product feature prioritization and planning"
    ]
  },
  {
    title: "Growth Intern",
    company: "Inventive AI",
    badge: "YC S23",
    period: "June 11, 2025 — Aug 2, 2025",
    icon: Briefcase,
    responsibilities: [
      "Drove product adoption through strategic growth campaigns",
      "Secured significant deals and partnerships",
      "Collaborated with product & BD teams to refine GTM strategy",
      "Analyzed user behavior to optimize conversion funnels"
    ]
  },
  {
    title: "Overall Coordinator",
    company: "The Product Club",
    badge: "Leadership",
    period: "Present",
    icon: Users,
    responsibilities: [
      "Led a community of product-minded students",
      "Organized workshops on product thinking and strategy",
      "Mentored members on product development",
      "Built partnerships with industry professionals"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Experience</h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
        </div>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-6 md:p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/30 h-fit">
                  <exp.icon className="h-8 w-8 text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-1">{exp.title}</h3>
                      <div className="flex items-center gap-2">
                        <p className="text-primary text-lg">{exp.company}</p>
                        <span className="px-2 py-0.5 bg-primary/20 border border-primary/40 rounded text-xs text-primary">
                          {exp.badge}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1.5">→</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

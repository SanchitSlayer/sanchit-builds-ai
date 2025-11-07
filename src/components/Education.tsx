import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "BS Chemistry (Specialization)",
    institution: "IIT Jodhpur",
    period: "Aug 2023 — May 2027 (expected)",
    cgpa: "7.5",
    highlights: ["Data Structures & Algorithms", "Machine Learning", "Signals & Systems"]
  },
  {
    degree: "Minor in Artificial Intelligence",
    institution: "IIT Ropar",
    period: "2025",
    cgpa: "8.5",
    highlights: ["Deep Learning", "Neural Networks", "AI Applications"]
  },
  {
    degree: "Class 12 (CBSE)",
    institution: "Senior Secondary",
    period: "May 2022",
    cgpa: "90.2%",
    highlights: []
  },
  {
    degree: "Class 10 (CBSE)",
    institution: "Secondary",
    period: "May 2020",
    cgpa: "94.6%",
    highlights: []
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Education</h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                  <p className="text-primary text-sm mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span>{edu.period}</span>
                    <span className="text-foreground font-semibold">{edu.cgpa}</span>
                  </div>
                  
                  {edu.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {edu.highlights.map((highlight, i) => (
                        <span 
                          key={i}
                          className="px-2 py-1 bg-secondary rounded text-xs border border-border"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

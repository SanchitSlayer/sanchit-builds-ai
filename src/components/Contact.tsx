import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating or discussing ML products? Let's connect.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-card border-border">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input 
                  placeholder="Your name"
                  className="bg-secondary border-border focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input 
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-secondary border-border focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  placeholder="Tell me about your project or idea..."
                  rows={5}
                  className="bg-secondary border-border focus:border-primary resize-none"
                />
              </div>
              
              <Button className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </Card>
          
          {/* Contact Info & Social */}
          <div className="space-y-6">
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-sm text-muted-foreground">sanchit@example.com</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 bg-card border-border">
              <h3 className="font-semibold mb-4">Connect on Social</h3>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="justify-start group">
                  <Github className="h-5 w-5 mr-2 group-hover:text-primary transition-colors" />
                  GitHub
                </Button>
                <Button variant="outline" className="justify-start group">
                  <Linkedin className="h-5 w-5 mr-2 group-hover:text-primary transition-colors" />
                  LinkedIn
                </Button>
                <Button variant="outline" className="justify-start group">
                  <Twitter className="h-5 w-5 mr-2 group-hover:text-primary transition-colors" />
                  Twitter
                </Button>
                <Button variant="outline" className="justify-start group">
                  <Mail className="h-5 w-5 mr-2 group-hover:text-primary transition-colors" />
                  Email
                </Button>
              </div>
            </Card>
            
            <Card className="p-6 bg-primary/10 border-primary/30">
              <p className="text-sm text-center">
                <span className="text-muted-foreground">Prefer email?</span>
                <br />
                <span className="font-semibold">sanchit@example.com</span>
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

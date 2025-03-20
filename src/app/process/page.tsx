import Header from "@/components/Header";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

export default function ProcessPage() {
  return (
    <>
      <Header />
      <div className="pt-24">
        <Section id="process" title="The Process" background="gradient">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-foreground/80">
              A methodical approach to crafting digital solutions, from initial concept to final implementation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-4">Discovery</h3>
              <p className="text-foreground/80">
                Understanding your needs through in-depth research, stakeholder interviews, and competitive analysis.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-4">Design</h3>
              <p className="text-foreground/80">
                Creating intuitive, user-focused experiences through iterative design, prototyping, and user testing.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-4">Development</h3>
              <p className="text-foreground/80">
                Building robust, scalable solutions using modern technologies and best practices in software engineering.
              </p>
            </div>
          </div>
        </Section>
      </div>
      <Footer />
    </>
  );
} 
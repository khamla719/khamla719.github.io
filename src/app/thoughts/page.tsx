import Header from "@/components/Header";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

export default function ThoughtsPage() {
  return (
    <>
      <Header />
      <div className="pt-24">
        <Section id="thoughts" title="Thought Lab" background="light">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-foreground/80">
              A collection of insights, reflections, and explorations on design, technology, and digital innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-card rounded-lg overflow-hidden border transition-all hover:shadow-md">
                <div className="aspect-video bg-foreground/5 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-foreground/40">
                    Article Image {item}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Thought Article {item}</h3>
                  <p className="text-foreground/70 text-sm mb-4">Posted on January {item}, 2023</p>
                  <p className="text-foreground/80 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                  </p>
                  <a href="#" className="text-primary hover:underline">Read more</a>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
      <Footer />
    </>
  );
} 
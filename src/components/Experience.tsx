import { personalData } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-base-100">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-16 text-center tracking-tight">Where I've Been</h2>
        <div className="space-y-12">
          {personalData.experience.map((exp, index) => (
            <div key={index} className="card bg-base-100 shadow-sm hover:shadow-lg transition-all duration-300 border border-base-200">
              <div className="card-body">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div>
                        <h3 className="card-title text-2xl">{exp.role}</h3>
                        <p className="text-primary font-medium text-lg">{exp.company}</p>
                    </div>
                    <div className="badge badge-ghost badge-lg mt-2 md:mt-0">{exp.period}</div>
                </div>
                <p className="italic text-base-content/70 mb-6 border-l-4 border-primary/30 pl-4 py-1">
                    "{exp.description}"
                </p>
                <ul className="list-disc list-outside pl-5 space-y-2 text-base-content/90">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


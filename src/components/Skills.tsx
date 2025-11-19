import { personalData } from "@/lib/content";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-base-200/50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-16 text-center tracking-tight">The Toolkit</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personalData.skills.map((skillGroup, index) => (
            <div key={index} className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="card-body">
                <h3 className="card-title text-xl mb-6 border-b pb-2 border-base-200 text-primary">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="badge badge-lg badge-outline p-4 hover:bg-primary hover:text-primary-content transition-colors duration-200 cursor-default">
                        {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


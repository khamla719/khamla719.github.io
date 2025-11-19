import { personalData } from "@/lib/content";

export default function Hero() {
  return (
    <section className="hero min-h-[90vh] bg-base-100">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
            {personalData.about.greeting}
          </h1>
          <p className="text-xl lg:text-2xl text-base-content/80 mb-8 leading-relaxed">
            {personalData.about.summary}
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#experience" className="btn btn-primary btn-lg rounded-full px-8">
              See My Work
            </a>
            <a href="#contact" className="btn btn-outline btn-lg rounded-full px-8">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


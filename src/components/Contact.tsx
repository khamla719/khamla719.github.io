import { personalData } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-base-100">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold mb-8 tracking-tight">Let's Solve Something Together</h2>
        <p className="text-xl text-base-content/80 mb-12">
          Have a complex problem that needs fixing? Or just want to talk about electric cars and APIs?
          I'm always open to new opportunities and interesting conversations.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href={`mailto:${personalData.email}`} className="btn btn-primary btn-lg rounded-full px-10 w-full sm:w-auto">
            Say Hello
          </a>
          {/* Placeholder for LinkedIn - user can update later */}
          <a href="#" className="btn btn-outline btn-lg rounded-full px-10 w-full sm:w-auto">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}


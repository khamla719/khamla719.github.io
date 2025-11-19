import { personalData } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-base-200/50">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold mb-12 text-center tracking-tight">The Backstory</h2>
        <div className="prose prose-lg mx-auto text-base-content/80">
            <p className="lead text-xl">{personalData.about.longSummary}</p>
            <p>
                My journey started at Dev Bootcamp in San Francisco, but my real education happened in the trenches of support queues and server logs.
                I don't just close tickets; I solve problems. Whether it's a car that won't start or an API that won't authenticate, the process is the same: break it down, find the root cause, fix it, and explain it so it doesn't happen again.
            </p>
        </div>
      </div>
    </section>
  );
}


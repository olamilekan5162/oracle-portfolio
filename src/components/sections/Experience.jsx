import { experiences } from "../../lib/data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Career Journey</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            My professional growth and key milestones over the years.
          </p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-3 top-0 h-full w-0.5 bg-border"></div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-10 timeline-item">
                <div className="mb-1">
                  <h3 className="text-xl font-semibold text-primary">
                    {exp.role}
                  </h3>
                  <p className="text-md font-medium text-foreground">
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

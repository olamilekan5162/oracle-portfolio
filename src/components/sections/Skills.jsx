import { skills, developerInfo } from "../../lib/data";
import Card from "../ui/Card";
import { Progress } from "../ui/Progress";

export default function SkillsSection() {
  const categorizedSkills = skills.reduce((acc, skill) => {
    (acc[skill.category] = acc[skill.category] || []).push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            A look at the technologies and tools I work with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.keys(categorizedSkills).map((category) => (
            <Card
              title={category}
              key={category}
              className="hover:shadow-primary/10 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="space-y-6">
                {categorizedSkills[category].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-sm font-medium">{skill.name}</h3>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress
                      value={skill.level}
                      aria-label={`${skill.name} proficiency`}
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

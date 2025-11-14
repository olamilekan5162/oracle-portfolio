import { skills, developerInfo } from "../../lib/data";
import { Card, CardTitle } from "../ui/Card";
import { Progress } from "../ui/Progress";
import { Code, Wrench, Package, CheckCircle } from "lucide-react";

const categoryIcons = {
  Frontend: Code,
  Tools: Wrench,
  Others: Package,
};
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
          {Object.keys(categorizedSkills).map((category) => {
            const Icon = categoryIcons[category];
            return (
              <Card
                key={category}
                className="group border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-shadow duration-300 p-6"
              >
                <div className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-3 mb-4 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{category}</CardTitle>
                </div>
                <div className="grow pt-2">
                  <ul className="space-y-3">
                    {categorizedSkills[category].map((skill) => (
                      <li
                        key={skill.name}
                        className="flex items-center gap-3 text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">
                          {skill.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

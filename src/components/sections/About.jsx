import { CheckCircle } from "lucide-react";
import { Card, CardTitle } from "../ui/Card";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Python",
  "Firebase",
  "Git",
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-secondary w-full py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">About Me</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Hello! I'm Opeyemi, a dedicated frontend developer with a knack
                for creating intuitive and performant web applications. I
                graduated with a Bachelor’s degree in Computer Engineering from
                the University of Ilorin, where I developed strong analytical
                and technical skills that now shape how I approach software
                design and problem-solving. My journey into web development grew
                from a fascination with how beautiful design and powerful
                technology can merge to create exceptional user experiences.
              </p>
              <p>
                Over the years, I've honed my skills in the modern JavaScript
                ecosystem, specializing in React and its frameworks. I am a firm
                believer in writing clean, maintainable, and scalable code. I
                enjoy collaborating with teams to bring ideas to life, and I am
                always eager to learn new technologies to stay at the forefront
                of the industry.
              </p>
              <p>
                When I'm not coding, I enjoy reading tech blogs, exploring new
                ideas, and challenging myself with problem-solving games.
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <Card className="p-6">
              <CardTitle>My Tech Stack</CardTitle>
              <ul className="grid grid-cols-2 gap-4">
                {technologies.map((tech) => (
                  <li key={tech} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="text-primary h-4 w-4" />
                    <span className="text-muted-foreground">{tech}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

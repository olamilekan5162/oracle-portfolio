import { Github, ExternalLink } from "lucide-react";
import { Badge } from "../ui/Badge";
import { projects } from "../../lib/data";
import { Card, CardTitle } from "../ui/Card";
import Button from "../ui/Button";

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Here are some of the projects I'm proud to have worked on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            return (
              <Card
                key={project.title}
                className="flex flex-col overflow-hidden group"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="group-hover:scale-105 absolute inset-0 w-full h-full transition-transform object-cover duration-500"
                  />

                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="p-6">
                  <CardTitle>{project.title}</CardTitle>

                  <div className="grow">
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 items-center mt-6">
                    {project.githubUrl && (
                      <Button variant="ghost" size="sm">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          className="flex items-center"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Source
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button variant="default" size="sm" className="flex">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          className="flex items-center"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

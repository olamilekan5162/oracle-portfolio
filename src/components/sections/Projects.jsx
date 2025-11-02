import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

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
          {project.map((project) => {
            const projectImage = PlaceHolderImages.find(
              (img) => img.id === project.imageUrlId
            );
            return (
              <Card
                key={project.title}
                className="flex flex-col overflow-hidden group"
              >
                <div className="relative overflow-hidden aspect-video">
                  {projectImage && (
                    <Image
                      src={projectImage.imageUrl}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-500"
                      data-ai-hint={projectImage.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
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
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  {project.githubUrl && (
                    <Button asChild variant="ghost" size="sm">
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Source
                      </Link>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button asChild variant="default" size="sm">
                      <Link href={project.liveUrl} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

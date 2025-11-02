import heroImage from "../../assets/headshot.jpg";
import { Download, Eye, Github, Linkedin, Twitter } from "lucide-react";
import { developerInfo } from "../../lib/data";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="bg-background w-full pt-32 pb-20 md:pt-48 md:pb-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="flex flex-col space-y-6">
            <div className="border-primary/50 relative mx-auto h-48 w-48 overflow-hidden rounded-full border-4 shadow-lg md:hidden">
              <img
                src={heroImage}
                alt={developerInfo.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <h1 className="text-center text-4xl font-extrabold tracking-tighter md:text-left md:text-5xl lg:text-6xl">
              <span className="text-muted-foreground block text-lg font-medium tracking-normal md:text-xl">
                Hello, I'm
              </span>
              {developerInfo.name}
            </h1>
            <p className="text-primary text-center text-xl font-semibold md:text-left md:text-2xl">
              {developerInfo.role}
            </p>
            <p className="text-muted-foreground max-w-xl text-center md:text-left">
              {developerInfo.bio}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
              <Button size="lg" className={"w-full sm:w-auto"}>
                <a href="#contact">Hire Me</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={"w-full sm:w-auto"}
              >
                <a href={developerInfo.resumeUrl} download>
                  <Download className="inline mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-4 pt-4 md:justify-start">
              <a
                href={developerInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="text-muted-foreground hover:text-primary h-6 w-6 transition-colors" />
              </a>
              <a
                href={developerInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-muted-foreground hover:text-primary h-6 w-6 transition-colors" />
              </a>
              <a
                href={developerInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="text-muted-foreground hover:text-primary h-5 w-5 transition-colors" />
              </a>
            </div>
          </div>
          <div className="hidden items-center justify-center md:flex">
            <div className="relative h-80 w-80 lg:h-96 lg:w-96">
              <div className="bg-primary/20 absolute inset-0 rounded-full blur-3xl"></div>
              {heroImage && (
                <img
                  src={heroImage}
                  alt={developerInfo.name}
                  width={400}
                  height={400}
                  className="border-background/50 relative h-full w-full rounded-full border-8 object-cover shadow-2xl"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

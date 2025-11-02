import { Mail, Send } from "lucide-react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { developerInfo } from "../../lib/data";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Sending..." : "Send Message"}
      <Send className="ml-2 h-4 w-4" />
    </Button>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Have a project in mind or just want to say hi? Feel free to reach
            out.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card title={"Send me a message"}>
            <form className="space-y-4">
              <input
                name="name"
                placeholder="Your Name"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                required
                minLength={10}
              />
              <Button type={"submit"} className={"w-full"}>
                Send Message
                <Send className="inline ml-2 h-4 w-4" />
              </Button>
            </form>
          </Card>
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <a
                  href={`mailto:${developerInfo.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {developerInfo.email}
                </a>
              </div>
            </div>
            <p className="text-muted-foreground">
              Prefer to email me directly? I'm always happy to connect and
              discuss potential opportunities or collaborations. I typically
              respond within 24-48 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

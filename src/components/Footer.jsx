import { developerInfo } from "../lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {currentYear} {developerInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

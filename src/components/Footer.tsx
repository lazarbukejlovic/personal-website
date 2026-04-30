export default function Footer() {
  return (
    <footer className="no-print border-t border-border py-10">
      <div className="section-container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Lazar Bukejlovic</p>
        <div className="flex gap-6">
          <a
            href="https://github.com/lazarbukejlovic"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lazar-bukejlovic"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="mailto:lazarbukejlovic@icloud.com"
            className="transition-colors hover:text-foreground"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer
      className="no-print py-10"
      style={{ borderTop: "1px solid rgba(120,180,230,0.1)" }}
    >
      <div className="section-container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p className="text-xs tracking-wide">© {new Date().getFullYear()} Lazar Bukejlovic</p>
        <div className="flex gap-6">
          <a
            href="https://github.com/lazarbukejlovic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-wide transition-colors hover:text-primary"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lazar-bukejlovic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-wide transition-colors hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href="mailto:lazarbukejlovic@icloud.com"
            className="text-xs tracking-wide transition-colors hover:text-primary"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

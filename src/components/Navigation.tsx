import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import ConnectModal from "./ConnectModal";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Interests", href: "#interests" },
];

type SocialLink = {
  label: string;
  href: string;
  icon: ReactNode;
  external?: boolean;
};

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.51 2.87 8.34 6.84 9.69.5.1.68-.22.68-.49 0-.24-.01-1.03-.02-1.86-2.78.62-3.37-1.21-3.37-1.21-.46-1.18-1.12-1.49-1.12-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.8c.85 0 1.71.12 2.51.36 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M6.94 8.5a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44ZM5.4 18.94h3.08v-9.1H5.4v9.1Zm4.81 0h3.06v-5.08c0-1.34.25-2.64 1.88-2.64 1.6 0 1.62 1.5 1.62 2.72v5h3.08v-5.63c0-2.76-.6-4.88-3.8-4.88-1.53 0-2.55.84-2.97 1.64h-.04v-1.4h-2.93v9.1Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/lazarbukejlovic",
    icon: <GitHubIcon />,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lazar-bukejlovic",
    icon: <LinkedInIcon />,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:lazarbukejlovic@icloud.com",
    icon: <EmailIcon />,
  },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setIsTop(false);
      return;
    }

    const onScroll = () => setIsTop(window.scrollY < 20);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (!isHome) {
      window.location.href = "/" + href;
      return;
    }
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const heroMode = isHome && isTop;

  return (
    <>
      <header
        className={`no-print fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-colors ${
          heroMode
            ? "border-white/10 bg-neutral-950/70"
            : "border-border/60 bg-background/80"
        }`}
      >
        <div className="section-container flex h-16 items-center justify-between">
          <Link
            to="/"
            className={`font-heading text-lg font-semibold tracking-tight ${
              heroMode ? "text-white" : "text-foreground"
            }`}
          >
            LB
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm transition-colors ${
                  heroMode
                    ? "text-white/70 hover:text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <div className="hidden items-center gap-1 sm:flex">
              {SOCIAL_LINKS.map((link) => {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    aria-label={link.label}
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-md border transition-colors ${
                      heroMode
                        ? "border-white/20 text-white/80 hover:border-primary/70 hover:text-primary"
                        : "border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
                    }`}
                  >
                    {link.icon}
                  </a>
                );
              })}
            </div>

            <ThemeToggle className={heroMode ? "text-white/75 hover:text-white" : ""} />
            <button
              onClick={() => setConnectOpen(true)}
              className="hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
            >
              Let's Connect
            </button>
            <Link
              to="/resume"
              target="_blank"
              rel="noreferrer noopener"
              className={`hidden rounded-md border px-4 py-2 text-sm font-medium transition-colors sm:inline-flex ${
                heroMode
                  ? "border-white/20 text-white hover:bg-white/10"
                  : "border-border text-foreground hover:bg-secondary"
              }`}
            >
              View Resume
            </Link>

            {/* Mobile toggle */}
            <button
              className={`ml-1 inline-flex items-center justify-center rounded-md p-2 md:hidden ${
                heroMode ? "text-white" : "text-foreground"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className={`border-t px-6 pb-6 pt-4 md:hidden ${
              heroMode ? "border-white/10 bg-neutral-950/95" : "border-border bg-background"
            }`}
          >
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left text-sm transition-colors ${
                    heroMode
                      ? "text-white/75 hover:text-white"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <div className="flex items-center gap-2 pb-1">
                {SOCIAL_LINKS.map((link) => {
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      aria-label={link.label}
                      className={`inline-flex h-9 w-9 items-center justify-center rounded-md border transition-colors ${
                        heroMode
                          ? "border-white/20 text-white/80 hover:border-primary/70 hover:text-primary"
                          : "border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
                      }`}
                    >
                      {link.icon}
                    </a>
                  );
                })}
              </div>

              <button
                onClick={() => {
                  setMobileOpen(false);
                  setConnectOpen(true);
                }}
                className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
              >
                Let's Connect
              </button>
              <Link
                to="/resume"
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => setMobileOpen(false)}
                className="rounded-md border border-border px-4 py-2 text-center text-sm font-medium text-foreground"
              >
                View Resume
              </Link>
            </nav>
          </div>
        )}
      </header>

      <ConnectModal open={connectOpen} onOpenChange={setConnectOpen} />
    </>
  );
}

import * as React from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { Icon, Icons } from "./icons"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="flex container justify-between gap-4 md:h-16 md:flex-row md:py-0">
        <div className="mt-1">
          <p className="copyright">&copy; {new Date().getFullYear()} Nabil&nbsp;Douss </p>
        </div>
        <div className="flex gap-4 mt-1">
        {
          links.map((link) => (
            <a
              href={link.href}
              key={link.text}
              target="_blank"
              rel="noreferrer"
              className="font-medium flex"
              >
                <link.icon className="mt-1 mr-2 h-4 w-4" /><span className="hidden md:flex">{link.text}</span>
              </a>
        ))}
        </div>
        <ModeToggle />
      </div>
    </footer>
  )
}

const links: { text: string; href: string; icon: Icon}[] = [
  {
    text: "Linkedin",
    href: siteConfig.links.linkedin,
    icon: Icons.linkedin,
  },
  {
    text: "StackOverflow",
    href: siteConfig.links.stackoverflow,
    icon: Icons.stackOverflow,
  },
  {
    text: "Github",
    href: siteConfig.links.github,
    icon: Icons.gitHub,
  },
  {
    text: "E-Mail",
    href: siteConfig.links.email,
    icon: Icons.mail,
  },
]
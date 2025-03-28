import * as React from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { Icon, Icons } from "./icons"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="pb-2 flex flex-col gap-y-3 items-center mt-1 sm:justify-between md:h-16 sm:flex-row-reverse md:py-0">
        <ModeToggle />
        <div className="flex justify-center gap-4">
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
        <div>
          <div className="copyright">&copy; {new Date().getFullYear()} Nabil&nbsp;Douss </div>
        </div>
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
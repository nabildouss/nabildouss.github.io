import * as React from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { Icons } from "./icons"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="flex container justify-between gap-4 md:h-16 md:flex-row md:py-0">
        <div className="">
          <p className="copyright">&copy; 2023 Nabil Douss </p>
        </div>
        <div className="flex gap-4"><a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="font-medium flex"
                >
                  <Icons.linkedin className="mt-1 mr-2 h-4 w-4" /><span>Linkedin</span>
                </a><a
                href={siteConfig.links.stackoverflow}
                target="_blank"
                rel="noreferrer"
                className="font-medium flex"
                >
                  <Icons.stackOverflow className="mt-1 mr-2 h-4 w-4" /><span>StackOverflow</span>
                </a><a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="font-medium flex"
                >
                  <Icons.gitHub className="mt-1 mr-2 h-4 w-4" /><span>Github</span>
                </a><a
                href={siteConfig.links.email}
                target="_blank"
                rel="noreferrer"
                className="font-medium flex"
                >
                  <Icons.mail className="mt-1 mr-2 h-4 w-4" /><span>E-Mail</span>
                </a>
            </div>
            <ModeToggle />
      </div>
    </footer>
  )
}
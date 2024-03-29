"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { siteConfig } from "@/config/site"
import { Icons } from "./icons"

export function NavigationBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href={siteConfig.links.linkedin} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} target="_blank" rel="noopener noreferrer">
            <Icons.linkedin className="h-4 w-4" />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={siteConfig.links.stackoverflow} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} target="_blank" rel="noopener noreferrer">
            <Icons.stackOverflow className="mr-1 h-4 w-4" />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={siteConfig.links.github} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} target="_blank" rel="noopener noreferrer">
            <Icons.gitHub className="mr-1 h-4 w-4" />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

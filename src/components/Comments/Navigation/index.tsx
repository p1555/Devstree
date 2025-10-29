'use client'

import { Link } from '@tanstack/react-router'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

export function Navbar() {
  return (
    <nav className="fixed top-0 p-3 left-0 right-6 w-full text-black text-2xl bg-white border-b shadow-sm">
      <div className="flex items-center justify-between ">
        <NavigationMenu className="w-full">
          <NavigationMenuList className="flex gap-8 justify-center">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/posts"
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  Posts
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  )
}

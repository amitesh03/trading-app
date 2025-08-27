import React from 'react'
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button"
function Navbar() {
  return (
    <div >
        <div className="flex justify-around">
          <div>
            <Image
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
            priority
            />
          </div>
          <div>
            <NavigationMenu>
              <NavigationMenuList >
                <NavigationMenuItem >
                  <Button className="bg-white text-gray-800 hover:bg-gray-400 text-base">Dashboard</Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button className="bg-white text-gray-800 hover:bg-gray-400 text-base">Markets</Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button className="bg-white text-gray-800 hover:bg-gray-400 text-base">Portfolio</Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button className="bg-white text-gray-800 hover:bg-gray-400 text-base">Orders</Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button className="bg-white text-gray-800 hover:bg-gray-400 text-base">🌙</Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
    </div>
  )
}

export default Navbar
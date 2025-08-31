import { ChevronDown } from "lucide-react";
import ButtonDemo from "./Button";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function NavigationMenuDemo() {
  return (
    <>
      <div className="container mx-auto mt-4 hidden lg:flex items-center justify-between px-32">
        <div>
          <p>
            <span className="font-bold">Tailwind</span> css
          </p>
        </div>

        <NavigationMenu>
          <NavigationMenuList className="flex gap-8 cursor-pointer">
            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="cursor-pointer font-medium border-none flex items-center">
                  Features
                  <ChevronDown className="ml-1 h-4 w-4 mt-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Action</DropdownMenuItem>
                  <DropdownMenuItem>Another Action</DropdownMenuItem>
                  <DropdownMenuItem>DropDown Submenu</DropdownMenuItem>
                  <DropdownMenuItem>404 page</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <p>About</p>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <p>Blog</p>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <p>Contact</p>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex gap-1">
          <ButtonDemo className="bg-white text-black border-1 hover:bg-indigo-100 cursor-pointer ">
            Log in
          </ButtonDemo>
          <ButtonDemo className="cursor-pointer">Sign Up</ButtonDemo>
        </div>
      </div>
      <div className="container mx-auto mt-4 flex lg:hidden items-center justify-between px-4">
        <div>
          <p>
            <span className="font-bold">Tailwind</span> css
          </p>
        </div>

        <Sheet>
          <SheetTrigger aria-label="Open menu" className="p-2">
            <Menu className="h-6 w-6" />
          </SheetTrigger>

          <SheetContent side="left" className="w-72">
            <div className="mb-6">
              <p className="text-lg font-bold">
                <span className="font-bold">Tailwind</span> css
              </p>
            </div>

            <nav className="flex flex-col gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="text-base text-left font-medium">
                  Features
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Action</DropdownMenuItem>
                  <DropdownMenuItem>Another Action</DropdownMenuItem>
                  <DropdownMenuItem>DropDown Submenu</DropdownMenuItem>
                  <DropdownMenuItem>404 page</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <button className="text-base text-left">About</button>
              <button className="text-base text-left">Blog</button>
              <button className="text-base text-left">Contact</button>
            </nav>

            <div className="mt-6 flex gap-2">
              <ButtonDemo className="bg-white text-black border-1 hover:bg-indigo-100 cursor-pointer ">
                Log in
              </ButtonDemo>
              <ButtonDemo className="cursor-pointer">Sign Up</ButtonDemo>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

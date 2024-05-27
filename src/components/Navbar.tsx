"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(" fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Courses">
  <div className="text-sm ml-36 grid grid-cols-1 sm:grid-cols-2 gap-10 p-4">
    <ProductItem
      title="Frontend Development"
      href="https://www.scaler.com/"
      src="https://assets.aceternity.com/demos/algochurn.webp"
      description="Learn HTML, CSS, JavaScript, and modern frameworks to build stunning web interfaces."
    />
    <ProductItem
      title="Tailwind Master Kit"
      href="https://tailwindmasterkit.com"
      src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
      description="Production ready Tailwind css components for your next project."
    />
    <ProductItem
      title="Backend Development"
      href="https://www.scaler.com/"
      src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
      description="Master server-side programming with Node.js, Express, databases, and more."
    
    />
    <ProductItem
      title="Kubernetes"
      href="https://www.scaler.com/"
      src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
      description="Learn container orchestration with Kubernetes and manage your microservices."
    />
  </div>
</MenuItem>

        <MenuItem setActive={setActive} active={active} item="Others">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">About Us</HoveredLink>
            <HoveredLink href="/individual">Blog</HoveredLink>
            <HoveredLink href="/team">Contact</HoveredLink>
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Login/Sign Up">
        <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/team">Login</HoveredLink>
            <HoveredLink href="/team">Sign Up</HoveredLink>
        </div>
        </MenuItem>


      </Menu>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useAccount } from "wagmi";
import { AnimatePresence } from "framer-motion";
import { MenuOverlay, AnimatedMenuLink } from "./animations";
import { useContractInteraction } from "@/hooks/useContractInteraction";

type MenuLink = {
  label: string;
  path: string;
  requiresAuth: boolean;
};

const menuLinks: MenuLink[] = [
  { label: "Multisend", path: "/multisend", requiresAuth: false },
];

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isConnected, chain } = useContractInteraction();
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === '/') {
    return null;
  }

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleLinkClick = (path: string, requiresAuth: boolean) => {
    if (requiresAuth && !isConnected) {
      router.push("/");
    } else {
      router.push(path);
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <MenuBar toggleMenu={toggleMenu} handleLinkClick={handleLinkClick} chain={chain} />
      <AnimatePresence>
        {isMenuOpen && <MenuOverlay toggleMenu={toggleMenu} handleLinkClick={handleLinkClick} />}
      </AnimatePresence>
    </>
  );
};

const MenuBar: React.FC<{ 
  toggleMenu: () => void;
  handleLinkClick: (path: string, requiresAuth: boolean) => void;
  chain: any;
}> = ({ toggleMenu, handleLinkClick, chain }) => (
  <div className="menu-bar flex justify-between items-center">
    <div className="menu-logo">
      <Link href="/" className="text-xl sm:text-2xl font-bold">Aerodump</Link>
    </div>
    <div className="text-purple-600">
      Connected to: {chain?.name}
    </div>
    <div className="hidden lg:flex space-x-6">
      {menuLinks.map((link, index) => (
        <button
          key={index}
          onClick={() => handleLinkClick(link.path, link.requiresAuth)}
          className="hover:text-blue-300 transition-colors"
        >
          {link.label}
        </button>
      ))}
    </div>
    <div id="open" className="lg:hidden" onClick={toggleMenu}>
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </div>
  </div>
);

const MenuContent: React.FC<{
  handleLinkClick: (path: string, requiresAuth: boolean) => void;
}> = ({ handleLinkClick }) => (
  <div className="menu-copy">
    <div className="menu-links space-y-6 sm:space-y-8">
      {menuLinks.map((link, index) => (
        <AnimatedMenuLink
          key={index}
          index={index}
          onClick={() => handleLinkClick(link.path, link.requiresAuth)}
        >
          {link.label}
        </AnimatedMenuLink>
      ))}
    </div>
  </div>
);

export default NavBar;


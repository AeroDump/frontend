"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useAccount } from "wagmi";
import { motion, AnimatePresence } from "framer-motion";

type MenuLink = {
  label: string;
  path: string;
  requiresAuth: boolean;
};

const menuLinks: MenuLink[] = [
  { label: "Dashboard", path: "/dashboard", requiresAuth: true },
  { label: "Register", path: "/register", requiresAuth: false },
  // Add more menu items as needed
];

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isConnected } = useAccount();
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
      <MenuBar toggleMenu={toggleMenu} handleLinkClick={handleLinkClick} />
      <AnimatePresence>
        {isMenuOpen && <MenuOverlay toggleMenu={toggleMenu} handleLinkClick={handleLinkClick} />}
      </AnimatePresence>
    </>
  );
};

const MenuBar: React.FC<{ 
  toggleMenu: () => void;
  handleLinkClick: (path: string, requiresAuth: boolean) => void;
}> = ({ toggleMenu, handleLinkClick }) => (
  <div className="menu-bar">
    <div className="menu-logo">
      <Link href="/" className="text-xl sm:text-2xl font-bold">Aerodump</Link>
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

const MenuOverlay: React.FC<{
  toggleMenu: () => void;
  handleLinkClick: (path: string, requiresAuth: boolean) => void;
}> = ({ toggleMenu, handleLinkClick }) => (
  <motion.div
    initial={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }}
    animate={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
    exit={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }}
    transition={{ duration: 0.5 }}
    className="menu-overlay"
  >
    <div className="menu-overlay-bar">
      <div className="menu-logo">
        <Link href="/" className="text-xl sm:text-2xl font-bold">Aerodump</Link>
      </div>
      <div id="close" onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </div>
    <MenuContent handleLinkClick={handleLinkClick} />
  </motion.div>
);

const MenuContent: React.FC<{
  handleLinkClick: (path: string, requiresAuth: boolean) => void;
}> = ({ handleLinkClick }) => (
  <div className="menu-copy">
    <div className="menu-links space-y-6 sm:space-y-8">
      {menuLinks.map((link, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          className="menu-link-item"
        >
          <div className="menu-link-item-holder">
            <button
              onClick={() => handleLinkClick(link.path, link.requiresAuth)}
              className="menu-link"
            >
              {link.label}
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default NavBar;


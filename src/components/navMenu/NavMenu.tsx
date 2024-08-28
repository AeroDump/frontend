"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRouter, usePathname } from "next/navigation";
import { useAccount } from "wagmi";
import "./styles.css";

type MenuLink = {
  path: string;
  label: string;
};

const menuLinks: MenuLink[] = [
  { path: "/", label: "HOME" },
  { path: "/register-event", label: "REGISTER EVENT" },
  { path: "/multisender", label: "MULTISENDER" },
  { path: "/", label: "LOGIN" },
];

const NavMenu: React.FC = () => {
  const { isConnected } = useAccount();
  const router = useRouter();
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [page, setPage] = useState<string>(pathname);
  const containerRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<GSAPTimeline>();

  useEffect(() => {
    if (!isConnected) {
      router.push("/");
    }
  }, [isConnected, router]);

  useGSAP(() => {
    gsap.set(".menu-link-item-holder", { y: 75 });
    tlRef.current = gsap
      .timeline({ paused: true })
      .to(".menu-overlay", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
      })
      .to(".menu-link-item-holder", {
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.inOut",
        delay: -0.75,
      });
  }, { scope: containerRef });

  useEffect(() => {
    if (isMenuOpen) {
      tlRef.current?.play();
    } else {
      tlRef.current?.reverse();
    }
  }, [isMenuOpen]);

  useEffect(() => {
    setPage(pathname);
  }, [pathname]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="menu-container relative z-50" ref={containerRef}>
      <div className="menu-bar">
        <div className="menu-logo">
          <Link href="/">
            <Image src="/logo.png" width={64} height={64} alt="ABES-ACM" />
          </Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <Menu id="open" color={page === "/" ? "white" : "black"} />
        </div>
      </div>
      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <Link href="/">Aerodump</Link>
          </div>
          <div className="menu-close" onClick={toggleMenu}>
            <X id="close" />
          </div>
        </div>
        <div className="menu-close-icon" onClick={toggleMenu}>
          <p>&#x2715;</p>
        </div>
        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link href={link.path} className="menu-link">
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info">
            <div className="menu-info-col">
              <a href="https://x.com/AeroDumpdotsend">Twitter/X &#8599;</a>
            </div>
            <div className="menu-info-col">
              <p>aerodrop.vercel.app</p>
            </div>
          </div>
        </div>
        <div className="menu-preview">
          <a href="https://x.com/AeroDumpdotsend">meet the devs &#8599;</a>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;

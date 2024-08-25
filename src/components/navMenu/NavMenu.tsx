"use client";
import React, { useState, useRef, useEffect } from "react";
import { useWeb3Auth } from "@/config/web3AuthProvider";
import Link from "next/link";
import "./styles.css";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type MenuLink = {
  path: string;
  label: string;
};


const menuLinks: MenuLink[] = [
  { path: "/", label: "HOME" },
  { path: "/regiser-project", label: "REGISTER PROJECT" },
  { path: "/multisender", label: "MULTISENDER" },
  { path: "/", label: "LOGIN" },
];

const NavMenu: React.FC = () => {
  const { provider, getUserInfo, logout } = useWeb3Auth();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState(null);
  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>();

  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      const info = await getUserInfo();
      setUserInfo(info);
    };

    fetchUserInfo();
  }, [getUserInfo]);

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", {
        y: 75,
      });
      tl.current = gsap
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
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div className="menu-container" ref={container}>
      <div className="menu-bar">
        <div className="menu-logo">
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              width={64}
              height={64}
              alt={"ABES-ACM"}
            />
          </Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <Menu id={"open"} />
        </div>
      </div>
      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <Link href={"/"}>Aerodump</Link>
          </div>
          <div className="menu-close" onClick={toggleMenu}>
            <X id={"close"} />
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
                  <Link
                    onClick={
                      link.label !== "LOGIN"
                        ? undefined
                        : userInfo
                          ? async () => {
                            await logout();
                            router.refresh();
                          }
                          : undefined
                    }
                    href={
                      link.label !== "LOGIN"
                        ? link.path
                        : userInfo
                          ? ""
                          : "/auth/login"
                    }
                    className="menu-link"
                  >
                    {link.label !== "LOGIN"
                      ? link.label
                      : userInfo
                        ? "LOGOUT"
                        : "LOGIN"}
                  </Link>
                </div>
              </div>
            ))}
            {/* {isAdmin && (
              <div className="menu-link-item">
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link href={"/admin"} className={"menu-link"}>
                    ADMIN PANEL
                  </Link>
                </div>
              </div>
            )} */}
          </div>
          <div className="menu-info">
            <div className="menu-info-col">
              <a href="#">X &#8599;</a>
              <a href="#">
                Instagram &#8599;
              </a>
              <a href="#">LinkedIn &#8599;</a>
              <a href="#">Facebook &#8599;</a>
            </div>
            <div className="menu-info-col">
              <p>aerodrop.vercel.app</p>
            </div>
          </div>
        </div>
        <div className="menu-preview">
          <a href="#">
            meet the devs &#8599;
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;

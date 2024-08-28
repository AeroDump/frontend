"use client";

import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const placeholderData = {
  eventNames: [
    "The Bitcoin Meetup",
    "EthOnline 2024",
    "Devcon Airdrop",
    "Dogecoin Airdrop",
  ],
  organiserNames: [
    "Vitalik",
    "EthGlobal",
    "Devfolio",
    "Ethereum Foundation"
  ],
};

const Register: React.FC = () => {
  const [slide, setSlide] = useState<number>(0);
  const [eventName, setEventName] = useState<string>('');
  const [organiserName, setOrganiserName] = useState<string>('');
  const [hasAnimated, setHasAnimated] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const headingRef = useRef<HTMLDivElement>(null);
  const subHeadingRef = useRef<HTMLDivElement>(null);
  const subheadingAndInputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animateHeading();
  }, []);

  useEffect(() => {
    animateSubHeading();
    handleSubmissionAnimation();
  }, [slide]);

  const animateHeading = () => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, delay: 1, duration: 1.5, ease: 'power3.out' }
      );
    }
  };

  const animateSubHeading = () => {
    if (subHeadingRef.current && slide < 2) {
      gsap.fromTo(
        subHeadingRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          delay: hasAnimated ? 0 : 1.5,
          duration: 1.5,
          ease: 'power3.out',
          onComplete: () => setHasAnimated(true),
        }
      );
    }
  };

  const handleSubmissionAnimation = () => {
    if (subheadingAndInputRef.current && slide === 2) {
      gsap.fromTo(
        subheadingAndInputRef.current,
        { opacity: 1 },
        {
          opacity: 0,
          delay: 1,
          duration: 1,
          ease: 'power3.out',
          onComplete: () => {
            gsap.set(subheadingAndInputRef.current, { display: "none" });
            setSubmitted(true);
          }
        }
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (slide === 0) {
      setEventName(e.target.value);
    } else if (slide === 1) {
      setOrganiserName(e.target.value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSlide((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col pt-32 items-center">
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
      <div ref={subheadingAndInputRef} className="flex flex-col gap-8 justify-center items-center w-full">
        <div ref={headingRef} className="text-4xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-neutral-300 to-neutral-500 py-8">
          Register Event
        </div>
        <p ref={subHeadingRef} className="text-4xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-neutral-300 to-neutral-500 py-8 flex flex-col gap-8 items-center w-full justify-center">
          {slide === 0 ? "Event Name" : slide === 1 ? "Organiser Name" : ""}
        </p>
        <PlaceholdersAndVanishInput
          placeholders={slide === 0 ? placeholderData.eventNames : slide === 1 ? placeholderData.organiserNames : []}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
      {submitted && (
        <div className="text-4xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-green-200 to-green-400 py-8 flex flex-col items-center gap-16">
          <p>Event Registered</p>
          <div className="rounded-3xl w-[500px] h-[300px] overflow-hidden">
            <Image
              src="/congrats.gif"
              width={500}
              height={400}
              alt="Congrats"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;

"use client";
import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const Register = () => {
  const [slide, setSlide] = useState<number>(0);
  const [EventName, setEventName] = useState<string>('');
  const [organiserName, setOrganiserName] = useState<string>('');
  const [hasAnimated, setHasAnimated] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const heading = useRef<HTMLDivElement>(null);
  const subHeading = useRef<HTMLDivElement>(null);
  const subheadingAndInput = useRef<HTMLDivElement>(null);
  const successAndImage = useRef<HTMLDivElement>(null);

  const Placeholders_0 = [
    "The Bitcoin Meetup",
    "EthOnline 2024",
    "Devcon Airdrop",
    "Dogecoin Airdrop",
  ];

  const Placeholders_1 = [
    "Vitalik",
    "EthGlobal",
    "Devfolio",
    "Ethereum Foundation"
  ];

  useEffect(() => {
    if (heading.current) {
      gsap.fromTo(
        heading.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, delay: 1, duration: 1.5, ease: 'power3.out' }
      );
    }
  }, []);

  useEffect(() => {
    if (subHeading.current && slide < 2) {
      gsap.fromTo(
        subHeading.current,
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

    if (subheadingAndInput.current && slide === 2) {
      gsap.fromTo(
        subheadingAndInput.current,
        { opacity: 1 },
        {
          opacity: 0,
          delay: 1,
          duration: 1,
          ease: 'power3.out',
          onComplete: () => {
            gsap.set(subheadingAndInput.current, { display: "none" });
            setSubmitted(true);
            // gsap.fromTo(successAndImage.current, {
            //   opacity: 0,
            // }, {
            //   opacity: 1,
            //   duration: 1,
            //   ease: 'power3.out',
            // });
          }
        }
      );
    }
  }, [slide]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (slide === 0) {
      setEventName(e.target.value);
    } else if (slide === 1) {
      setOrganiserName(e.target.value);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSlide((prev) => prev + 1);
  };

  return (
    <div className="min-h-[100vh] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col pt-32 items-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
      <div ref={subheadingAndInput} className='flex flex-col gap-8 justify-center items-center w-full'>
        <div ref={heading} className="text-4xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-neutral-300 to-neutral-500 py-8">
          Register Event
        </div>
        <p ref={subHeading} className="text-4xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-neutral-300 to-neutral-500 py-8 flex flex-col gap-8 items-center w-full justify-center">
          {slide === 0 ? "Event Name" : slide <= 2 ? "Organiser Name" : ""}
        </p>
        <PlaceholdersAndVanishInput
          placeholders={slide === 0 ? Placeholders_0 : slide === 1 ? Placeholders_1 : []}
          onChange={handleChange}
          onSubmit={onSubmit}
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
              alt="congrats"
              className="object-cover w-full h-full" // Ensure the image covers the div appropriately
            />
          </div>
        </div>

      )}
    </div>
  );
};

export default Register;

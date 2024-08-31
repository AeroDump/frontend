import React, { useRef, useEffect, useState } from 'react';
import { useInView, useAnimation } from 'framer-motion';

import { gsap } from "gsap";

export function Heading({text}: {text: string}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <h1 ref={ref} className="text-4xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-neutral-300 to-neutral-500 py-8">{text}</h1>
  )
}

export function SubHeading({text}: {text: string}) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
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
  }, [text, hasAnimated])

  return (
    <h2 ref={ref} className="text-4xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-neutral-300 to-neutral-500 py-8 flex flex-col gap-8 items-center w-full justify-center">{text}</h2>
  )
}

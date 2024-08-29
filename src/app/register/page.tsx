"use client"
import { useState } from "react";
import { Heading, SubHeading } from "@/components/animations";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { CONTRACT } from "@/contracts";
import { useWriteContract } from "wagmi";
import Image from 'next/image';

interface Slide {
  label: string;
  placeholders: string[];
}

const slides: Slide[] = [
  { label: "name", placeholders: ['Uniswap', 'Pancakeswap', 'Opensea'] },
  { label: "description", placeholders: ['Airdrop for participating in hackathon', 'Airdrop for being an early adopter of Pancakeswap'] },
  { label: "website", placeholders: ['https://uniswap.com', 'https://pancakeswap.com'] },
  { label: "twitter", placeholders: ['@uniswap', '@pancakeswap'] },
];

export default function Register() {
  const { data: hash, writeContract, error } = useWriteContract();
  const [slide, setSlide] = useState<number>(0);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    website: "",
    twitter: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      [slides[slide].label]: value,
    });
  };

  const onSubmitInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (slide === slides.length - 1) {
      
    }
    setSlide((prev) => prev + 1);
  }

  const registerProject = () => {
    const { name, description, website, twitter } = formData;
    writeContract({
      ...CONTRACT,
      functionName: 'verifyProject',
      args: [name, description, website, twitter],
    });
  }
  
  const renderForm = () => {
    if (slide === slides.length) {
      return (
        <Image
          src="/congrats.gif"
          width={500}
          height={400}
          alt="Congrats"
        />
      )
    }
    return (
      <>
        <SubHeading text={slides[slide].label} />
        <PlaceholdersAndVanishInput placeholders={slides[slide]?.placeholders} onChange={handleChange} onSubmit={onSubmitInput}/>
      </>
    )
  }

  return (
    <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col pt-32 items-center">
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]" />
      <Heading text="Register" />
      {renderForm()}
    </div>
  )
}
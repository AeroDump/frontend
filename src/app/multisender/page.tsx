"use client"
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { FileUpload } from '@/components/ui/file-upload';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { TokenTransferInfo } from './helper';
import Papa from "papaparse";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { sampleTokenTransferInfo } from './helper';

const MultiSender = () => {
  const heading = useRef<HTMLDivElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [tokenTransferInfo, setTokenTransferInfo] = useState<TokenTransferInfo[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0)

  const handleFileUpload = (newFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const parseCSVFiles = () => {
    const parsedData: TokenTransferInfo[] = [];
    files.forEach((file) => {
      Papa.parse<TokenTransferInfo>(file, {
        header: true,
        complete: (result) => {
          parsedData.push(...result.data);
        },
      });
    });
    setTokenTransferInfo(parsedData);
  };

  const handleDataChange = (index: number, key: keyof TokenTransferInfo, value: string | number) => {
    setTokenTransferInfo((prevInfo) =>
      prevInfo.map((item, i) =>
        i === index ? { ...item, [key]: value } : item
      )
    );
  };

  useEffect(() => {
    if (files.length > 0) {
      parseCSVFiles();
    }
  }, [files]);

  useEffect(() => {
    if (tokenTransferInfo.length > 0) {
      console.log("newList", tokenTransferInfo)
      setTotalAmount(
        tokenTransferInfo.reduce((acc, item) => {
          const amount = parseFloat(item.amount as unknown as string); // Convert to a number
          return acc + (isNaN(amount) ? 0 : amount); // Add to accumulator if valid number
        }, 0.0)
      );
    }
  }, [tokenTransferInfo]);




  useEffect(() => {
    if (heading.current) {
      gsap.fromTo(
        heading.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, delay: 1, duration: 1.5, ease: 'power3.out' }
      );
    }
  }, []);



  return (
    <div className="min-h-[100vh] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col pt-32 items-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
      <div className='flex flex-col gap-8 justify-center items-center w-full max-w-4xl mx-auto'>
        <div ref={heading} className="text-4xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-neutral-300 to-neutral-500 py-8">
          Multisender
        </div>

        <div className="w-full p-x border border-dashed bg-black border-neutral-800 rounded-3xl overflow-hidden">
          <FileUpload onChange={handleFileUpload} />
        </div>

      </div>
      <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto px-4 text-bold mt-8">
        <AccordionItem value="item-1">
          <AccordionTrigger className='font-semibold '>Please Make sure that the Provided CSV follows this schema</AccordionTrigger>
          <AccordionContent>
            <Table className='w-full max-w-4xl mx-auto'>
              <TableHeader>
                <TableRow>
                  <TableHead>Wallet Address</TableHead>
                  <TableHead>Chain</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead className="text-right w-[100px]">Currency</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sampleTokenTransferInfo.map((item: TokenTransferInfo, index) => (
                  <TableRow key={index} className='hover:bg-neutral-200'>
                    <TableCell className="font-medium">{item.walletAddress}</TableCell>
                    <TableCell>{item.chain}</TableCell>
                    <TableCell>{item.amount}</TableCell>
                    <TableCell className="text-right w-[100px]">{item.currency}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </AccordionContent>
        </AccordionItem>
      </Accordion>


      {tokenTransferInfo.length > 0 && (
        <Table className='w-full max-w-4xl mx-auto'>
          <TableCaption>Token Distribution Overview</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Wallet Address</TableHead>
              <TableHead>Chain</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="text-right w-[100px]">Currency</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tokenTransferInfo.map((item: TokenTransferInfo, index) => (
              <TableRow key={index} className='hover:bg-neutral-200'>
                <TableCell className="font-medium">
                  <Input
                    value={item.walletAddress}
                    onChange={(e) => handleDataChange(index, "walletAddress", e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    value={item.chain}
                    onChange={(e) => handleDataChange(index, "chain", e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    type="number"
                    value={item.amount}
                    onChange={(e) => handleDataChange(index, "amount", parseFloat(e.target.value))}
                  />
                </TableCell>
                <TableCell className="text-right w-[100px]">
                  <Input
                    value={item.currency}
                    onChange={(e) => handleDataChange(index, "currency", e.target.value)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">{totalAmount}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      )}
    </div>
  );
}

export default MultiSender;

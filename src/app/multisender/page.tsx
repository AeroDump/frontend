"use client"
import { FileUpload } from '@/components/ui/file-upload';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { supportedCurrencies, TokenTransferInfo } from './types';
import Papa from "papaparse";
import {Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from "@/components/ui/select"
import { supportedChains } from './types';
import { Plus, PlusIcon } from 'lucide-react';

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

  const addEmptyRow = () => {
    setTokenTransferInfo((prevInfo) => [...prevInfo, { walletAddress: "", chain: "", amount: 0, currency: "" }]);
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

      <div className='w-full max-w-4xl mx-auto flex justify-between items-center p-4 font-semibold'>
        <p className='text-black underline underline-offset-4 italic'>Please Make sure the providede csv follows the supported schema </p>
        <a href={"/Sample.csv"} download><Button className='bg-black text-white rounded-xl hover:bg-black hover:text-white hover:scale-[102%]'>Download Sample CSV</Button></a>
      </div>

      {tokenTransferInfo.length > 0 && (
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
            {tokenTransferInfo.map((item: TokenTransferInfo, index) => (
              <TableRow key={index} className='hover:bg-neutral-200'>
                <TableCell className="font-medium">
                  <Input
                    value={item.walletAddress}
                    onChange={(e) => handleDataChange(index, "walletAddress", e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <Select
                    value={item.chain}
                    onValueChange={(val) => handleDataChange(index, "chain", val)}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue>{item.chain}</SelectValue> {/* Display the current value */}
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className='bg-black text-white'>
                        <SelectLabel>Supported Chains</SelectLabel>
                        {supportedChains.map((chain, chainIndex) => (
                          <SelectItem value={chain} key={chainIndex}>{chain}</SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <Input
                    type="number"
                    value={item.amount}
                    onChange={(e) => handleDataChange(index, "amount", parseFloat(e.target.value))}
                  />
                </TableCell>
                <TableCell>
                  <Select
                    value={item.currency}
                    onValueChange={(val) => handleDataChange(index, "currency", val)}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue>{item.currency}</SelectValue> {/* Display the current value */}
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className='bg-black text-white'>
                        <SelectLabel>Supported Currencies</SelectLabel>
                        {supportedCurrencies.map((currency, currencyIndex) => (
                          <SelectItem value={currency} key={currencyIndex}>{currency}</SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>
                <div className='w-full max-w-4xl mx-auto flex justify-end items-center p-4 font-semibold'>
                  <Button
                    className='bg-black text-white rounded-xl hover:bg-black hover:text-white hover:scale-[102%] pl-7' onClick={addEmptyRow}>
                    Add More <PlusIcon height={20} />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3} className='text-xl font-semibold'>Total</TableCell>
              <TableCell className="text-right text-xl font-semibold">${totalAmount}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      )}
      {tokenTransferInfo.length === 0 && <div className='w-full max-w-4xl mx-auto flex justify-end items-center p-4 font-semibold'>
        <Button
          className='bg-black text-white rounded-xl hover:bg-black hover:text-white hover:scale-[102%] pl-7' onClick={addEmptyRow}>
          Add Manually <PlusIcon height={20} />
        </Button>
      </div>}
    </div>
  );
}

export default MultiSender;

"use client"
import { FileUpload } from '@/components/ui/file-upload';
import React, { useEffect, useRef, useState } from 'react';
import { TokenTransferInfo } from './types';
import Papa from "papaparse";
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import { Heading } from '@/components/animations';
import { CSVTable } from '@/components/TabularData/CSVTable';

const MultiSender = () => {
  const heading = useRef<HTMLDivElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [tokenTransferInfo, setTokenTransferInfo] = useState<TokenTransferInfo[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0)

  const handleFileUpload = (newFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    parseCSVFiles(newFiles)
  };

  const parseCSVFiles = (newFiles: File[]) => {
    const parsedDataPromises = newFiles.map((file: File) =>
      new Promise<TokenTransferInfo[]>((resolve) => {
        Papa.parse<TokenTransferInfo>(file, {
          header: true,
          complete: (result) => {
            resolve(result.data);
          },
        });
      })
    );

    // Wait for all files to be parsed
    Promise.all(parsedDataPromises).then((allParsedData) => {
      const combinedData = allParsedData.flat(); // Flatten the array of arrays
      setTokenTransferInfo((prev) => [...prev, ...combinedData]); // Update the state with the parsed data
    });
  };

  const handleDataChange = (index: number, key: keyof TokenTransferInfo, value: string | number) => {
    setTokenTransferInfo((prevInfo) =>
      prevInfo.map((item, i) =>
        i === index ? { ...item, [key]: value } : item
      )
    );
  };

  const addEmptyRow = () => {
    setTokenTransferInfo((prevInfo: TokenTransferInfo[]) => [...prevInfo, { walletAddress: "", chain: "", amount: 0, currency: "" }]);
  };

  useEffect(() => {
    if (tokenTransferInfo.length > 0) {
      setTotalAmount(
        tokenTransferInfo.reduce((acc, item) => {
          const amount = parseFloat(item.amount as unknown as string); // Convert to a number
          return acc + (isNaN(amount) ? 0 : amount); // Add to accumulator if valid number
        }, 0.0)
      );
    }
  }, [tokenTransferInfo]);

  return (
    <div className="min-h-[100vh] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
      <div className='flex flex-col gap-8 justify-center items-center w-full max-w-4xl mx-auto'>
        <Heading text="Multisender" />

        <div className="w-full p-x border border-dashed bg-black border-neutral-800 rounded-3xl overflow-hidden">
          <FileUpload onChange={handleFileUpload} heading={"Upload CSV file"} subheading={"Drag or drop your files here or click to upload"}/>
        </div>
      </div>

      <div className='w-full max-w-4xl mx-auto flex justify-between items-center p-4 font-semibold'>
        <p className='text-black underline underline-offset-4 italic'>Please Make sure the provided csv follows the supported schema </p>
        <a href={"/Sample.csv"} download><Button className='bg-black text-white rounded-xl hover:bg-black hover:text-white hover:scale-[102%]'>Download Sample CSV</Button></a>
      </div>

      <CSVTable tokenTransferInfo={tokenTransferInfo} handleDataChange={handleDataChange} addEmptyRow={addEmptyRow} totalAmount={totalAmount}/>

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

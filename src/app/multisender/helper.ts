import React from "react";
import { TokenTransferInfo } from "./types";
import Papa from "papaparse";

export const handleFileUpload = (
    newFiles: File[],
    setFiles: React.Dispatch<React.SetStateAction<File[]>>,
    parseCSVFiles: (newFiles: File[]) => void
  ) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    parseCSVFiles(newFiles);
  };

const parseCSVFiles = (
  newFiles: File[],
  setTokenTransferInfo: React.Dispatch<
    React.SetStateAction<TokenTransferInfo[]>
  >
) => {
  console.log("parser entry");

  const parsedDataPromises = newFiles.map(
    (file: File) =>
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
    console.log("loop ends");
    console.log("parsed data", combinedData);
    setTokenTransferInfo((prev) => [...prev, ...combinedData]); // Update the state with the parsed data
  });
};

export const addEmptyRow = (setTokenTransferInfo: React.Dispatch<React.SetStateAction<TokenTransferInfo[]>>) => {
  setTokenTransferInfo((prevInfo: TokenTransferInfo[]) => [...prevInfo, { walletAddress: "", chain: "", amount: 0, currency: "" }]);
};


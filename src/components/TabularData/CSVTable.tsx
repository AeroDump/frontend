"use client"
import React from "react"
import { supportedCurrencies, TokenTransferInfo } from '@/app/multisender/types';
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "../ui/table";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { supportedChains } from '@/app/multisender/types';
import { PlusIcon } from 'lucide-react';
import { CSVTablePropsType } from "./types";

export function CSVTable({ tokenTransferInfo, handleDataChange, addEmptyRow, totalAmount }: CSVTablePropsType) {
    if (tokenTransferInfo.length > 0) {
        return (
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
                    {tokenTransferInfo.map((item: TokenTransferInfo, index: number) => (
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
        )
    } else return <></>
}
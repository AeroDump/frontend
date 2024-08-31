"use client"
import React from "react"
import { TokenTransferInfo } from '@/app/multisender/types';
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "../ui/table";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import { CSVTablePropsType } from "./types";

export function CSVTable({ tokenTransferInfo, handleDataChange, addEmptyRow, totalAmount }: CSVTablePropsType) {
    if (tokenTransferInfo.length > 0) {
        return (
            <Table className='w-full max-w-4xl mx-auto'>
                <TableHeader>
                    <TableRow>
                        <TableHead>Wallet Address</TableHead>
                        <TableHead className="text-right w-[180px]">Amount</TableHead>
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
                                <Input
                                    type="number"
                                    value={item.amount}
                                    onChange={(e) => handleDataChange(index, "amount", parseFloat(e.target.value))}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell colSpan={2}>
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
                        <TableCell className='text-xl font-semibold'>Total</TableCell>
                        <TableCell className="text-right text-xl font-semibold">${totalAmount}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        )
    } else return <></>
}
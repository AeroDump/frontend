"use client"
import React, { useEffect, useState } from 'react'
import { useContractInteraction } from '@/hooks/useContractInteraction'
import { useAccount } from 'wagmi';
import { Heading } from '@/components/animations';


const vault = () => {
    const { address, chain, isConnected } = useAccount();

    const { lockedTokens, isProjectVerified, projectDetails } = useContractInteraction()

    useEffect(() => {
        console.log("locked Tokens", lockedTokens)
        console.log("address", address)
        console.log("project Details", projectDetails)
    }, [lockedTokens])

    return (


        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-8">
            <Heading text="Project Details" />
            <div className='text-2xl'>Locked Tokens : {lockedTokens ? lockedTokens : "2 USDC"}</div>
            <div className='text-2xl'>Project Verification Status : {isProjectVerified ? "Verified" : "Unverified"}</div>
            {projectDetails && <div>test</div>}
        </div>
    )
}

export default vault
"use client"
import React, { useEffect } from 'react'
import { useContractInteraction } from '@/hooks/useContractInteraction'
import { Heading } from '@/components/animations';


const Project = () => {

    const { lockedTokens, isProjectVerified, projectDetails } = useContractInteraction()

    return (


        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-8">
            <Heading text="Project Details" />
            <div className='text-2xl'>Locked Tokens : {lockedTokens ? lockedTokens : "2 USDC"}</div>
            <div className='text-2xl'>Project Verification Status : {isProjectVerified ? "Verified" : "Unverified"}</div>
            {projectDetails && <div>test</div>}
        </div>
    )
}

export default Project
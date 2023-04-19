import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { decodeBytes32String, ethers } from 'ethers';
import abiJson from "./abi.json"
const contractAddress = '0xc490efaf4C653AdaC8b963E5712745D5DFDE7EAa';
const Stats = () => {
    const [winner, setWinner] = useState("")
    const load = () =>{
        try {
            console.log("hey")
            const { ethereum } = window;
            if (!ethereum) {
              throw {
                err: "No Metamask Wallet found"
              }
            }
            const provider = new ethers.BrowserProvider(ethereum);
            const contract = new ethers.Contract(contractAddress,abiJson, provider)
            contract.winningName().then((winningName)=>{
                const me = decodeBytes32String(winningName)
                setWinner(me);
            })
            
        }catch{
            alert("Dhak teri ma ki chut")
        }
    }
    useEffect(()=>{
        load()
    })
    return (
        <Box sx={{
            width:"100vw",
            height:"100vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <Typography>{winner=="" ? <>Loading</> :<>Winner is {winner}</> }</Typography>
        </Box>
    );
}

export default Stats;

import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { decodeBytes32String, ethers } from 'ethers';
import abiJson from "./abi.json"
const contractAddress = '0x0A85557Be5c93e40B20f6D7C93fcAE0D607786fC';
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
            alert("Check Internet Connection")
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

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from '../styles/vote.module.css'
import { Box, Button, Typography } from '@mui/material';
import axios from 'axios';
import { ethers } from 'ethers';
import abiJson from "./abi.json"
import { useToast } from '@chakra-ui/react';
const contractAddress = '0x45d2002eBb4aF839c6C91C92feDeC9c1a569be91';
const Vote = () => {
    const toast = useToast()
  
    const [selectedIndex, setSelectedIndex] = useState()
    const [loading, setLoading] = useState(true)
    const options = [
      "BJP",
      "Congress",
      "AAP"
    ]
    useEffect(()=>{
      
    })
    const handleSubmit = async ()=>{

      

      const user_id = localStorage.getItem("user")
      if(selectedIndex){
        
      axios.post("/api/vote", {
        user:user_id
      }).then((response)=>{
          router.push("/footer");
      }).catch((err)=>{
        alert("error")
      })}
    }
    const handleBlockchain = () =>{
      try {
        const { ethereum } = window;
        if (!ethereum) {
          throw {
            err: "No Metamask Wallet found"
          }
        }
        const provider = new ethers.BrowserProvider(ethereum);
        const contract = new ethers.Contract(contractAddress,abiJson, provider)
        
        const name = contract.chairperson().then((
          chairperson
        )=>{
          console.log(chairperson)
        }).catch((err)=>{
          throw {
            err: "Failed to receive information from SmartContract",
            message: err
          }
        })
      }
      catch{
        toast({
          status: "error",
          position: "top-right",
          title: "Error",
          description: "No ethereum wallet found",
        })
      }
    }
    const handleClick = (index) =>{
      setSelectedIndex(index);
      toast({
        title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
      })
    }
    const router = useRouter()
    useEffect(  ()=>{
      const user_id = localStorage.getItem("user")
        if (!user_id){
            router.push("/verification");
        }else{
         axios.post("/api/validate", {
          user:user_id
        }).then((response)=>{
          if(
            response.data.didVote==true
          ){
            router.push("/footer");
          }else{
            setLoading(false)
          }
        }).catch((err)=>{
          console.log(err)
        })}
    })

    return (
       <> {!loading && <Box sx={{
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
          gap:10,
          height:"100vh"
        }}>
          <Typography variant='h3'>Vote</Typography>
          <Box
            sx={{
              display:"flex",
              width:"70%",
              justifyContent:"space-evenly",
              mt:10,
            }}
           >
            {
              options.map((option, index)=>{
                return(<Button 
                  key={index}
                  variant={!(selectedIndex==index) ? 'outlined' : 'contained'}
                  onClick={(e)=>{handleClick(index)}}
                  >
                    {option}
                </Button>
                )
              })
            }
          </Box>
          <Button variant='contained' color='success' onClick={handleSubmit}>
            Submit
          </Button>
        </Box>}</>
    );
}

export default Vote;
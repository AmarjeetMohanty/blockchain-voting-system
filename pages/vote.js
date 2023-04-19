import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from '../styles/vote.module.css'
import { Alert, Backdrop, Box, Button, Typography } from '@mui/material';
import axios from 'axios';
import { decodeBytes32String, ethers } from 'ethers';
import abiJson from "./abi.json"
const contractAddress = '0xc490efaf4C653AdaC8b963E5712745D5DFDE7EAa';
const Vote = () => {
  
    const [selectedIndex, setSelectedIndex] = useState()
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState("");
    const [errShown, setErrShown] = useState(false)
    const [pleaseWait, setPleaseWait] = useState(false)
    const [options, setOptions] = useState([])
    useEffect(()=>{
      
    })
    const push= () =>{
       
    }
    const handleSubmit = async ()=>{

      

      const user_id = localStorage.getItem("user")
      if(selectedIndex){
        handleBlockchain()
     
      }else{
        setErr("Select a Party to Vote for")
        setErrShown(true);
        setTimeout(()=>{
          setErr("");
          setErrShown(false);
        }, 3000)
      }
    }
    const handleBlockchain = async () =>{
      try {
        console.log("hey")
        const { ethereum } = window;
        if (!ethereum) {
          throw {
            err: "No Metamask Wallet found"
          }
        }
        const provider = new ethers.BrowserProvider(ethereum);
        let signer;
        await provider.getSigner().then((signer1)=>{
          signer = signer1;
        });
        setPleaseWait(true);
        const contract = new ethers.Contract(contractAddress,abiJson, signer)
        alert("Confirm the transaction in your Metamask Wallet");
        const name = contract.voting(selectedIndex)
          .then((passed)=>{
            setPleaseWait(false);
            alert(`Transaction Successfull. Hash: ${passed.hash}`);
            const user_id = localStorage.getItem("user");
            axios.post("/api/vote", {
              user:user_id
            }).then((response)=>{
                router.push("/footer");
            }).catch((err)=>{
              alert("error")
            })
          })
          .catch((err)=>{
            if(err.revert){
              alert(`Error: ${err.revert.args[0]}`)
              return setPleaseWait(false);
            }
          });
      }
      catch(err){
        setErr(err.err)
        setErrShown(true);
        setTimeout(()=>{
          setErr("");
          setErrShown(false);
        }, 3000)
      }
    }
    const handleClick = (index) =>{
      setSelectedIndex(index);
    }
    const router = useRouter()
    const addOptions = async () =>{
      try {
        const { ethereum } = window;
        if (!ethereum) {
          throw {
            err: "No Metamask Wallet found"
          }
        }
        const provider = new ethers.BrowserProvider(ethereum);
        const contract = new ethers.Contract(contractAddress,abiJson, signer)
        let option1 = await contract.proposals(0);
        let option2 = await contract.proposals(1);
        let option3 = await  contract.proposals(2);
        setOptions([decodeBytes32String(option1), decodeBytes32String(option2), decodeBytes32String(option3)])
      }
        catch{}
    }
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
      addOptions()
    })

    return (
       <> {errShown && <Alert title='Error' severity='error'>{err}</Alert>}
       <Backdrop open={pleaseWait}>Please wait while the transaction is being processed on the Ethereum Network. If the transaction is cancelled the ETH will be refunded in your account.</Backdrop>
       {!loading && <Box sx={{
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
            { options != [] &&
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
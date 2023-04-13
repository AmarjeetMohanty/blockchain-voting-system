import { Box, Button } from "@mui/material"
import axios from "axios"
import React from "react"
import { useEffect } from "react"
import { useRouter } from 'next/router'
const Footer = () => {
    const router = useRouter()
    useEffect(()=>{
        const user_id = localStorage.getItem("user")

        if (!user_id){
            router.push("/verification")
        }else{
            const user_id = localStorage.getItem("user")
        if (!user_id){
            router.push("/verification");
        }else{
         axios.post("/api/validate", {
          user:user_id
        }).then((response)=>{
          if(
            response.data.didVote==false
          ){
            router.push("/vote");
          }
        }).catch((err)=>{
          console.log(err)
        })}
        }
    })
    const handleSubmit = async (event)=>{
      event.preventDefault();
      router.push("/stats");
    }

    return (<Box sx={{
        height:"100vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        gap:7
    }}>
      
        <h2>Thanks for Voting</h2>
       
     <Button variant="contained" onClick={handleSubmit}>View Statistics</Button>



        </Box>)
}

export default Footer;
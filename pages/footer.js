import { Box } from "@mui/material"
import axios from "axios"
import React from "react"
import { useEffect } from "react"

const Footer = () => {
    
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
    },[])
    return (<Box sx={{
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }}>
        <h2>Thanks for Voting</h2>
        </Box>)
}

export default Footer;
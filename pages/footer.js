import { Box } from "@mui/material"
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
    },[])
    const handleSubmit = async (event)=>{
      event.preventDefault();
      router.push("/stats");
    }

    return (<Box sx={{
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }}>
      
      <Box sx={{
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
  }}>
        <h2>Thanks for Voting</h2>
        </Box>
        <Box sx={{
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }}>
     <button onClick={handleSubmit}>View Statistics</button>

    </Box>


        </Box>)
}

export default Footer;
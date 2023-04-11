import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from '../styles/vote.module.css'
import { Box, Button, Typography } from '@mui/material';
import axios from 'axios';

const Vote = () => {
  
    const [selectedIndex, setSelectedIndex] = useState()
    const [loading, setLoading] = useState(true)
    const options = [
      "BJP",
      "Congress",
      "AAP"
    ]
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
    const handleClick = (index) =>{
      setSelectedIndex(index);
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
    },[])

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
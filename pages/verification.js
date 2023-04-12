import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Box, Button } from "@mui/material";


export default function Verify() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send a POST request to verify the user
      const response = await axios.post("/api/verify", {
        user: username,
        password:password,
      });

      // If the verification is successful, redirect to the voting page
      if (response.status === 200) {
        console.log(response.data.data)
        localStorage.setItem("user", response.data.data._id)
        router.push("/vote");
      }
    } catch (error) {
      // If there's an error, display the error message
      setError(error.response.data.message);
    }
  };

  return (
    <Box  sx={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      gap:7,
      height:"100vh"
    }}>
      <h1>Verification Page</h1>
      <form onSubmit={handleSubmit}>
      <Box sx={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      gap:1}}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        <Button sx={{mt:3}} variant="contained" type="submit">Sign In</Button>
        </Box>
        
      </form>
      {error && <p>{error}</p>}
    </Box>
  );
}

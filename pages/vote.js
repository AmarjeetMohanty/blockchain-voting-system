import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Vote = () => {
    const router = useRouter()
    useEffect(()=>{
        const user_id = localStorage.getItem("user")
        if (!user_id){
            router.push("/verification")
        }
    })
    return (
        <div>
            
        </div>
    );
}

export default Vote;

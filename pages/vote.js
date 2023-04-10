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


      <main>
        <h1>Vote</h1>

        <form>


          <div>
            <label htmlFor="option1">Option 1</label>
            <input type="radio" id="option1" name="vote" value="option1" />
          </div>

          <div>
            <label htmlFor="option2">Option 2</label>
            <input type="radio" id="option2" name="vote" value="option2" />
          </div>

          <div>
            <label htmlFor="option3">Option 3</label>
            <input type="radio" id="option3" name="vote" value="option3" />
          </div>

          <button type="submit">Submit</button>
        </form>

      </main>           
        </div>
    );
}

export default Vote;
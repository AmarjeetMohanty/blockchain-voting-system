import connectDB from "@/backend/middleware/databse"
import User from "@/backend/models/user";

export default async function handler(req, res) {

    await connectDB();

    
    try{
        const user = await User.findById(req.body.user)     
                                .then((user)=>{
                                    return res.status(200).json({didVote:user.didVote})
                                })
    }
    catch{
        return res.status(404).json({err:"User not found"})
    }

}
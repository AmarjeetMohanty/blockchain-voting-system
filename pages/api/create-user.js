import connectDB from "@/backend/middleware/databse";
import User from "@/backend/models/user";


connectDB();
export default async function handler(req,res){
    try{
        const {
            username, password
        } = req.body
        const newUser = await User({
            user:username,
            password:password
        })
        await newUser.save();
        res.status(200).json({user: newUser._id})
    }catch{
        res.status(500).json({err: "Internal Server Error"})
    }
}
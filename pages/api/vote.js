import connectDB from "@/backend/middleware/databse"
import User from "@/backend/models/user";

export default async function handler(req, res) {
    await connectDB();
    try{
        const user = await User.findByIdAndUpdate(req.body.user, {
            didVote:true
        }).exec().then(
            res.status(200).json({
                success:"voted"
            })
        )
    }
    catch{
        return res.status(404).json({err:"User not found"})
    }
}
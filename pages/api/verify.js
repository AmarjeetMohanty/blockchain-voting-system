// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from "@/backend/middleware/databse"
import User from "@/backend/models/user";

export default async function handler(req, res) {
    await connectDB();
    try {
        const user = await User.findOne({user:req.body.user}).then((user)=>{
            if (user.password===req.body.password){
                return res.status(200).json({ success: true, data: user })
            }
            else{
                return res.status(404).json({ success: false })
            }
        })
      } catch (error) {
        res.status(400).json({ success: false })
      }
    // res.status(200).json({ name: 'John Doe' })
}
  
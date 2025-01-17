import User from "../model/user.model.js";
import bcrypt from "bcrypt";

export const signup =async (req, res) => {
    try {
        const {fullname, email, password} = req.body;
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({message: "User already exists"});
        }else {
            const salt = await bcrypt.genSalt(10);
            const hashpassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            fullname : fullname,
            email :  email,
            password: hashpassword
        });
       await newUser.save();
        res.status(200).json({message: "User created successfully"});
    }
    } catch (error) {
        console.log("error: ",error.message);
        
    }
}


export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email})
        const isMatch =await bcrypt.compare(password, user.password);
        if (!user || !isMatch) {
            return res.status(400).json({message: "Invalid credentials"});
        }
        else {
            res.status(200).json({message: "Logged in successfully", user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email
            }});
        }
    } catch (error) {
        console.log("Error : ", error.message);
        res.status(500).json({message: "Internal server error"});
    }
}
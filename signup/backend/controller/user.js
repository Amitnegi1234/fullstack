import User from "../models/user.js"
export const addUser=async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        const user=await User.create({
            name:name,
            email:email,
            password:password

        })
        res.status(201).send(`user with name ${name} added`)
    } catch (error) {
        console.log(error);
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).send("Email already exists");
        }
        res.status(500).send(error.message)
    }
}

export const loginUser=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({
            where:{
                email:email
            }
        })
        if(!user){
            return res.status(404).send("email not found");
        }
        if(user.password!==password){
            return res.status(500).send("password incorrect");
        }
        res.status(200).send("User logged in");
    } catch (error) {
        res.status(500).send("Server error");
    }
}
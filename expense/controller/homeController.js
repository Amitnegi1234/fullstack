import user from "../models/home.js";
export const homeRoute=(req,res)=>{
    res.send("sd")
}
export const addExpense=async(req,res)=>{
    try {
        const {amount,description,category}=req.body;
        const User=await user.create({
            amount:amount,
            description:description,
            category:category
        })
        res.status(201).send(`data added`);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    }
}

export const showExpense=async(req,res)=>{
    try {
        const expenses=await user.findAll();
        res.status(200).json(expenses);
    } catch (error) {
        console.log(error);
    }
}

export const editExpense=async(req,res)=>{
    try {
        const {id}=req.params;
        const {amount,description,category}=req.body;
        const User=await user.findByPk(id);
        if(!User){
            return res.status(404).send("user not found")
        }
        User.amount=amount;
        User.description=description;
        User.category=category;
        await User.save();
        res.status(201).send("updated")
    } catch (error) {
        console.log(error);
    }
}

export const deleteExpense=async(req,res)=>{
    try {
        const {id}=req.params;
         const User =await user.destroy({
            where:{
                id:id
            }
        })
        if(!User){
           return res.status(404).send("user not found"); 
        }
        res.status(200).send(`user with id ${id} deleted`);
    } catch (error) {
        console.log(error);
    }
}
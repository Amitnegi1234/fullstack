import express from "express";
import { homeRoute ,addExpense,showExpense,editExpense,deleteExpense} from "../controller/homeController.js";
const router=express.Router();
router.get("/",homeRoute)
router.get("/expense",showExpense);
router.post("/add",addExpense);
router.put("/edit/:id",editExpense);
router.delete("/delete/:id",deleteExpense);
export default router;
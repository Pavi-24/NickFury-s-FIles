import express from "express";
import { addCharachters, deleteCharachters, getAllCharachters, getCharachters, updateCharachters } from "../controller/userController.js";

const router=express.Router();

router.get("/charachter",getAllCharachters);
router.get("/charachter/:id",getCharachters);
router.post("/charachter/",addCharachters);
router.put("/charachter/:id",updateCharachters);
router.delete("/charachter/:id",deleteCharachters);

export default router;
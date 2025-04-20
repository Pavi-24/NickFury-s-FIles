import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";
import router from "./routes/userRoutes.js";
import errorHandling from "./middleware/errorHandler.js";
import creatTable from "./data/creatTable.js";

dotenv.config();

console.log("The current database is:", process.env.DB_NAME);
const app = express();
const port = process.env.PORT || 3001;

//MIDDLEWARES 

app.use(express.json());
app.use(cors());

//ROUTES
app.use("/api",router);


//ERROR HANDLING MIDDLEWARES 
app.use(errorHandling);

//CREATE TABLE BEFORE STARTING SERVER
creatTable();

//TESTING DATABASE CONNECTION
app.get("/",async(req,res)=>{
    const result=await pool.query("SELECT current_database()");
    res.send(`The current database is: ${result.rows[0].current_database}`);
});

//SERVER RUNNING
app.listen(port,()=>{
    console.log(`Server is running on localhost port ${port}`);
});
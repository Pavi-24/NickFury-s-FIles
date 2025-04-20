import pool from "../config/db.js";

const creatTable=async()=>{
    const queryText=`CREATE TABLE IF NOT EXISTS charachter(
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        aliases VARCHAR(100) NOT NULL,
        powers VARCHAR(100) NOT NULL,
        description VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
    )`;
    try{
        pool.query(queryText);
        console.log("Charachters Table is created if not exists");
    }
    catch(error)
    {
        console.log("Error creating charachters table: ",error);
    }
};
export default creatTable;

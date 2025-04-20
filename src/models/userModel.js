import pool from "../config/db.js";
export const getAllCharachter=async()=>{
    const result=await pool.query("SELECT * FROM charachter");
    return result.rows;
};
export const getCharachter=async(id)=>{
    const result=pool.query("SELECT * FROM charachter where id=$1",[id]);
    return result.rows[0];
};
export const addCharachter=async(name,aliases,powers,description)=>{
    const result=await pool.query("INSERT INTO charachter (name,aliases,powers,description) VALUES ($1,$2,$3,$4) RETURNING *",[name,aliases,powers,description]);
    return result.rows[0];
};
export const updateCharachter=async(id,name,aliases,powers,description)=>{
    const result=await pool.query("UPDATE charachter SET name=$1,aliases=$2,powers=$3,description=$4 WHERE id=$5 RETURNIING *",[name,aliases,powers,description,id]);
    return result.rows[0];
};
export const deleteCharachter=async(id)=>{
    const result=await pool.query("DELETE FROM charachter where id=$1 RETURNING *",[id]);
    return result.rows[0];
};

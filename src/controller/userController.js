import{
    addCharachter,
    getAllCharachter,
    getCharachter,
    updateCharachter,
    deleteCharachter,
} from "../models/userModel.js"
const handleResponse=(res,status,message,data=null)=>{
    res.status(status).json({
        status,
        message,
        data,
    });
};
export const addCharachters=async(req,res,next)=>{
    const{name,aliases,powers,description}=req.body;
    try{
        const newCharchter =await addCharachter(name,aliases,powers,description);
        handleResponse(res,201,"Charachter Added",newCharchter)
    }
    catch(err){
        next(err);
    }
};
export const getAllCharachters=async(req,res,next)=>{
    try{
        const allCharachters =await getAllCharachter();
        handleResponse(res,200,"All Charachters fetched Succesfully",allCharachters)
    }
    catch(err){
        next(err);
    }
};
export const getCharachters=async(req,res,next)=>{
    try{
        const charachters =await getCharachter(req.params.id);
        if(!charachters)
        return handleResponse(res,404,"User Not found");
        handleResponse(res,200,"Charachter fetched by id Successfully",charachters)
    }
    catch(err){
        next(err);
    }
};
export const updateCharachters=async(req,res,next)=>{
    const{name,aliases,powers,description}=res.body;
    
    try{
        const updCharchter =await updateCharachter(name,aliases,powers,description,req.params.id);
        if(!updCharchter)
        return handleResponse(res,404,"User Not found");
        handleResponse(res,200,"Charachters updated Succesfully",updCharachter)
    }
    catch(err){
        next(err);
    }
};
export const deleteCharachters=async(req,res,next)=>{
    try{
        const dltCharchter =await deleteCharachter(req.params.id);
        if(!dltCharchter)
        return handleResponse(res,404,"User Not found");
        handleResponse(res,200,"Charachters deleted Successfully",dltCharchter)
    }
    catch(err){
        next(err);
    }
};


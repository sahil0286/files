import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app=express();
app.use(cors());

const PORT =process.env.PORT || 8000;
const MONGODB_URI="mongodb://user:user123@ac-qljy523-shard-00-00.jchdmnj.mongodb.net:27017,ac-qljy523-shard-00-01.jchdmnj.mongodb.net:27017,ac-qljy523-shard-00-02.jchdmnj.mongodb.net:27017/?ssl=true&replicaSet=atlas-1480sz-shard-0&authSource=admin&retryWrites=true&w=majority"

app.listen(PORT,()=>{console.log(`Server is running at ${PORT}`);});


const DBconnect = async ()=>{
    try {
        await mongoose.connect(MONGODB_URI,{ useNewUrlParser:true});
        console.log("Database connected Successfully")
    } catch (error) {
        console.log(`Error while connecting to MongoDB: ${error.message}`);
    }
}

DBconnect();
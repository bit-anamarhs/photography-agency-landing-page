import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URL;
let isConnected = false;

export async function connectToDatabase(): Promise<void> {

    if(isConnected) {
        return;
    };

    try{
        await mongoose.connect(MONGO_URI as string,{
            dbName: "Photography"
        }).then((resp) => {
            console.log("Connected to MongoDB");
            isConnected = true;
        }).catch((err)=>{
            console.log("Failed to connect to MongoDB",err);
        })
        
    }catch(err){
        console.error("Error connecting to MongoDB",err);
        throw new Error("Could not connect to MongoDB");
    }
}
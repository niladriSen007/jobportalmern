import mongoose from "mongoose";

export const connectDB = async()=>{
    try{
        const connection = await mongoose.connect(`mongodb+srv://nil:nil@cluster0.agbybkg.mongodb.net/`)
        console.log(`Connection Successful`)
    }catch(e){
        console.log(`Server error occured - ${e}`)
    }
}
import mongoose from "mongoose";

export const SignUp = async(req,res,next)=>{
    const session  = await mongoose.startSession();
    session.startTransaction();

    try{

        session.abortTransaction();
        
    }catch(error){
        await session.abortTransaction();
        session.endSession();

    }


};

export const SignIn = async(req,res,next)=>{}

export const SignOut = async(req,res,next)=>{}
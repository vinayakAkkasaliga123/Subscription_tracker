import { Mongoose } from "mongoose";

import {DB_URI,NODE_ENV} from '../config/env.js';

if(!DB_URI){
    console.error("PLease define the mongo db uri environmenr variables inside the .env. files ")
}

const connectToDatabase = async()=>{
    try{
        await mongoose.connect(DB_URI);
        console.log(`Mongo db connected succesfully in ${NODE_ENV} mode`);
    }catch(error){
        console.error("please link DB_URI");
        process.exit(1);
    }
}

export default connectToDatabase;
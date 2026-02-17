import { Router } from "express";

const userRouter = Router();

userRouter.get('/',(req,res)=>res.send({title:'GET all the user'}));

userRouter.get('/:id',(req,res)=>res.send({title:'GET a user id'}));

userRouter.post('/',(req,res)=>res.send({title:'Create a user'}));

userRouter.put('/:id',(req,res)=>res.send({title:'Update a user'}));

userRouter.delete('/:id',(req,res)=>res.send({title:'delete a user'}));

export default userRouter;
import { Router } from "express";
import { SignIn, SignUp,SignOut } from "../controller/auth.controllers.js";



const authRouter = Router()

authRouter.post('/sign-up',SignUp)

authRouter.post('/sign-in',SignIn);

authRouter.post('/sign-out',SignOut);

export default authRouter;


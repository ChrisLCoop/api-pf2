import { Router } from "express";

import { ping } from "../controllers/index.controller.js";

const router = Router()

//app.get('/ping', (req,res)=> res.send('pong'));

router.get('/ping', ping );

export default router
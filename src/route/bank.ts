import { Router } from "express";
import { deleteBanco, getBanco, insertBanco, updateBanco } from "../controller/bank.controller";


const router = Router();

router.get("/getBanco", getBanco);
router.post("/insertBanco", insertBanco);
router.post("/updateBanco", updateBanco);
router.post("/deleteBanco", deleteBanco);

export { router };
import { Router } from "express";
import { getBanco, insertBanco, updateBanco } from "../controller/bank.controller";


const router = Router();

router.get("/getBanco", getBanco);
router.post("/insertBanco", insertBanco);
router.post("/updateBanco", updateBanco);

export { router };
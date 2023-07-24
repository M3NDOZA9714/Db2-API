import { Router } from "express";
import { getTecnico, insertTecnico, updateTecnico } from "../controller/technician.controller";

const router = Router();

router.get("/getTecnico", getTecnico);
router.post("/insertTecnico", insertTecnico);
router.post("/updateTecnico", updateTecnico);

export { router };
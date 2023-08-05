import { Router } from "express";
import { deleteTecnico, getTecnico, insertTecnico, payTecnico, updateTecnico } from "../controller/technician.controller";

const router = Router();

router.get("/getTecnico", getTecnico);
router.post("/insertTecnico", insertTecnico);
router.post("/updateTecnico", updateTecnico);
router.post("/deleteTecnico", deleteTecnico);
router.post("/payTecnico", payTecnico);

export { router };
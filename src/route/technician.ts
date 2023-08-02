import { Router } from "express";
import { getTecnico, insertTecnico, payTecnico, updateTecnico } from "../controller/technician.controller";

const router = Router();

router.get("/getTecnico", getTecnico);
router.post("/insertTecnico", insertTecnico);
router.post("/updateTecnico", updateTecnico);
router.post("/payTecnico", payTecnico);

export { router };
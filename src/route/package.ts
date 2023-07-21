import { Router } from "express";
import { getPaquete, getServicioPaquete, insertPaquete, updatePaquete } from "../controller/package.controller";

const router = Router();

router.get("/getPaquete", getPaquete);
router.get("/getServicioPaquete", getServicioPaquete);
router.post("/insertPaquete", insertPaquete);
router.post("/updatePaquete", updatePaquete);

export { router };
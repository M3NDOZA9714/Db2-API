import { Router } from "express";
import { getSuscripcion, insertSuscripcion, updateSuscripcion } from "../controller/suscription.controller";

const router = Router();

router.get("/getSuscripcion", getSuscripcion);
router.post("/insertSuscripcion", insertSuscripcion);
router.post("/updateSuscripcion", updateSuscripcion);

export { router };
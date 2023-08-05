import { Router } from "express";
import { deleteSuscripcion, getSuscripcion, insertSuscripcion, updateSuscripcion } from "../controller/suscription.controller";

const router = Router();

router.get("/getSuscripcion", getSuscripcion);
router.post("/insertSuscripcion", insertSuscripcion);
router.post("/updateSuscripcion", updateSuscripcion);
router.post("/deleteSuscripcion", deleteSuscripcion);

export { router };
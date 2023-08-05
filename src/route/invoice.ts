import { Router } from "express";
import { deleteFactura, getFactura, getFacturaDetalle, getServicioFactura, insertFactura, payFactura, updateFactura } from "../controller/invoice.controller";

const router = Router();

router.get("/getFactura", getFactura);
router.get("/getFacturaDetalle", getFacturaDetalle);
router.get("/getServicioFactura", getServicioFactura);
router.post("/insertFactura", insertFactura);
router.post("/updateFactura", updateFactura);
router.post("/deleteFactura", deleteFactura);
router.post("/payFactura", payFactura);

export { router };
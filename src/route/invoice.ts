import { Router } from "express";
import { getFactura, insertFactura, updateFactura } from "../controller/invoice.controller";

const router = Router();

router.get("/getFactura", getFactura);
router.post("/insertFactura", insertFactura);
router.post("/updateFactura", updateFactura);

export { router };
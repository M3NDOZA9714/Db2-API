import { Router } from "express";
import { getPago } from "../controller/payment.controller";

const router = Router();

router.get("/getPago", getPago);

export { router };
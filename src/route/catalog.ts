import { Router } from "express";
import { getCliente, insertCliente } from "../controller/catalog.controller";

const router = Router();

router.get("/getCliente", getCliente);
router.post("/insertCliente", insertCliente);

export { router };
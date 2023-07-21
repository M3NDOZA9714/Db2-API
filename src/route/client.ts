import { Router } from "express";
import { getCliente, insertCliente, updateCliente } from "../controller/client.controller";

const router = Router();

router.get("/getCliente", getCliente);
router.post("/insertCliente", insertCliente);
router.post("/updateCliente", updateCliente);

export { router };
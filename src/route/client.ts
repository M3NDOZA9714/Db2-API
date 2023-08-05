import { Router } from "express";
import { deleteCliente, getCliente, insertCliente, updateCliente } from "../controller/client.controller";

const router = Router();

router.get("/getCliente", getCliente);
router.post("/insertCliente", insertCliente);
router.post("/updateCliente", updateCliente);
router.post("/deleteCliente", deleteCliente);

export { router };
import { Router } from "express";

import { deleteServicio, getServicio, insertServicio, updateServicio } from "../controller/service.controller";

const router = Router();

router.get("/getServicio", getServicio);
router.post("/insertServicio", insertServicio);
router.post("/updateServicio", updateServicio);
router.post("/deleteServicio", deleteServicio);

export { router };
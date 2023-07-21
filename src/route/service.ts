import { Router } from "express";

import { getServicio, insertServicio, updateServicio } from "../controller/service.controller";

const router = Router();

router.get("/getServicio", getServicio);
router.post("/insertServicio", insertServicio);
router.post("/updateServicio", updateServicio);

export { router };
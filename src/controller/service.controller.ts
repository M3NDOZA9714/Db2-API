import { Request, Response } from "express"
import { handleHTTP } from "../utils/error.handle"
import { functions } from "../service/service.service"

const getServicio = async ({ body }: Request, res: Response) => {
    try {
        return res.json(await functions.getServicio());
    } catch (err) {
        handleHTTP(res, "Error Interno");
    }
}

const insertServicio = async ({ body }: Request, res: Response) => {
    try {
        const { nombre, descripcion, precio } = body;
        return res.json(await functions.insertServicio(nombre, descripcion, precio));
    } catch (err) {
        handleHTTP(res, "Error Interno");
    }
}

const updateServicio = async ({ body }: Request, res: Response) => {
    try {
        const { id, nombre, descripcion, precio } = body;
        return res.json(await functions.updateServicio(id, nombre, descripcion, precio));
    } catch (err) {
        handleHTTP(res, "Error Interno");
    }
}

export { getServicio, insertServicio, updateServicio }
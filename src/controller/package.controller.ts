import { Request, Response } from "express"
import { handleHTTP } from "../utils/error.handle"
import { functions } from "../service/package.service"

const getPaquete = async ({ body }: Request, res: Response) => {
    try {
        return res.json(await functions.getPaquete());
    } catch (err) {
        handleHTTP(res, "Error Interno");
    }
}

const getServicioPaquete = async ({ query }: Request, res: Response) => {
    try {
        const { idPaquete } = query;
        return res.json(await functions.getServicioPaquete(idPaquete));
    } catch (err) {
        handleHTTP(res, "Error Interno");
    }
}

const insertPaquete = async ({ body }: Request, res: Response) => {
    try {
        const { nombre, descripcion, precio, servicio } = body;
        return res.json(await functions.insertPaquete(nombre, descripcion, precio, servicio));
    } catch (err) {
        handleHTTP(res, "Error Interno");
    }
}

const updatePaquete = async ({ body }: Request, res: Response) => {
    try {
        const { id, nombre, descripcion, precio, servicio } = body;
        return res.json(await functions.updatePaquete(id, nombre, descripcion, precio, servicio));
    } catch (err) {
        handleHTTP(res, "Error Interno");
    }
}

const deletePaquete = async ({ body }: Request, res: Response) => {
    try {
        const { id } = body;
        return res.json(await functions.deletePaquete(id));
    } catch (err) {
        handleHTTP(res, "Error Interno");
    }
}

export { getPaquete, getServicioPaquete, insertPaquete, updatePaquete, deletePaquete }
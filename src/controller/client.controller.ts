import { Request, Response } from "express"
import { handleHTTP } from "../utils/error.handle"
import { functions } from "../service/client.service"

const getCliente = async ({ body }: Request, res: Response) => {
    try {
        return res.json(await functions.getCliente());
    } catch (err) {
        handleHTTP(res, "Error Interno");
    }
}

const insertCliente = async ({ body }: Request, res: Response) => {
    try {
        const { nombre, direccion, telefono, rtn } = body;
        return res.json(await functions.insertCliente(nombre, direccion, telefono, rtn));
    } catch (err) {
        handleHTTP(res, "Error Interno");
    }
}

const updateCliente = async ({ body }: Request, res: Response) => {
    try {
        const { id, nombre, direccion, telefono, rtn } = body;
        return res.json(await functions.updateCliente(id, nombre, direccion, telefono, rtn));
    } catch (err) {
        handleHTTP(res, "Error Interno");
    }
}

const deleteCliente = async ({ body }: Request, res: Response) => {
    try {
        const { id } = body;
        return res.json(await functions.deleteCliente(id));
    } catch (err) {
        handleHTTP(res, "Error Interno");
    }
}

export { getCliente, insertCliente, updateCliente, deleteCliente }
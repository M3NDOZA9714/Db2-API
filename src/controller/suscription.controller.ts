import { Request, Response } from "express"
import { handleHTTP } from "../utils/error.handle"
import { functions } from "../service/suscription.service"

const getSuscripcion = async ({ body }: Request, res: Response) => {
    try {
        return res.json(await functions.getSuscripcion());
    } catch (err) {
        handleHTTP(res, "Error Interno");
    }
}

const insertSuscripcion = async ({ body }: Request, res: Response) => {
    try {
        const { idPaquete, idCliente, idTecnico, horas } = body;
        return res.json(await functions.insertSuscripcion(idPaquete, idCliente, idTecnico, horas));
    } catch (err) {
        handleHTTP(res, "Error Interno");
    }
}

const updateSuscripcion = async ({ body }: Request, res: Response) => {
    try {
        const { id, idPaquete, idCliente, idTecnico, horas } = body;
        return res.json(await functions.updateSuscripcion(id, idPaquete, idCliente, idTecnico, horas));
    } catch (err) {
        handleHTTP(res, "Error Interno");
    }
}

export { getSuscripcion, insertSuscripcion, updateSuscripcion }
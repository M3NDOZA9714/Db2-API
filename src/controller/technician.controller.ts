import { Request, Response } from "express"
import { handleHTTP } from "../utils/error.handle"
import { functions } from "../service/technician.service"

const getTecnico = async ({ body }: Request, res: Response) => {
    try {
        return res.json(await functions.getTecnico());
    } catch (err) {
        handleHTTP(res, "Error Interno");
    }
}

const insertTecnico = async ({ body }: Request, res: Response) => {
    try {
        const { nombre, identidad, correo, telefono, direccion } = body;
        return res.json(await functions.insertTecnico(nombre, identidad, correo, telefono, direccion));
    } catch (err) {
        handleHTTP(res, "Error Interno");
    }
}

const updateTecnico = async ({ body }: Request, res: Response) => {
    try {
        const { id, nombre, identidad, correo, telefono, direccion } = body;
        return res.json(await functions.updateTecnico(id, nombre, identidad, correo, telefono, direccion));
    } catch (err) {
        handleHTTP(res, "Error Interno");
    }
}

const deleteTecnico = async ({ body }: Request, res: Response) => {
    try {
        const { id } = body;
        return res.json(await functions.deleteTecnico(id));
    } catch (err) {
        handleHTTP(res, "Error Interno");
    }
}

const payTecnico = async ({ body }: Request, res: Response) => {
    try {
        const { idBando, idTecnico, monto } = body;
        return res.json(await functions.payTecnico(idBando, idTecnico, monto));
    } catch (err) {
        handleHTTP(res, "Error Interno");
    }
}

export { getTecnico, insertTecnico, updateTecnico, deleteTecnico, payTecnico }
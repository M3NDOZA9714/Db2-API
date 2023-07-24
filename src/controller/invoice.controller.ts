import { Request, Response } from "express"
import { handleHTTP } from "../utils/error.handle"
import { functions } from "../service/invoice.service"

const getFactura = async ({ body }: Request, res: Response) => {
    try {
        return res.json(await functions.getFactura());
    } catch (err) {
        handleHTTP(res, "Error Interno");
    }
}

const insertFactura = async ({ body }: Request, res: Response) => {
    try {
        const { idCliente, tipo, detalleFactura } = body;
        return res.json(await functions.insertFactura(idCliente, tipo, detalleFactura));
    } catch (err) {
        handleHTTP(res, "Error Interno");
    }
}

const updateFactura = async ({ body }: Request, res: Response) => {
    try {
        const { id, idCliente, tipo, detalleFactura } = body;
        return res.json(await functions.updateFactura(id, idCliente, tipo, detalleFactura));
    } catch (err) {
        console.log(err)
        handleHTTP(res, "Error Interno");
    }
}

export { getFactura, insertFactura, updateFactura }
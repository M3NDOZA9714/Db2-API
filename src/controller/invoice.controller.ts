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

const getFacturaDetalle = async ({ query }: Request, res: Response) => {
    try {
        const { idFactura } = query;
        return res.json(await functions.getFacturaDetalle(idFactura));
    } catch (err) {
        handleHTTP(res, "Error Interno");
    }
}

const getServicioFactura = async ({ query }: Request, res: Response) => {
    try {
        const { idCliente } = query
        return res.json(await functions.getServicioFactura(idCliente));
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
        handleHTTP(res, "Error Interno");
    }
}

const payFactura = async ({ body }: Request, res: Response) => {
    try {
        const { idBanco, monto, idFactura } = body;
        return res.json(await functions.payFactura(idBanco, monto, idFactura));
    } catch (err) {
        handleHTTP(res, "Error Interno");
    }
}

export { getFactura, getFacturaDetalle, insertFactura, updateFactura, getServicioFactura, payFactura }
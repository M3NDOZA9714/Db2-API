import { Request, Response } from "express"
import { handleHTTP } from "../utils/error.handle"
import { functions } from "../service/bank.service"

const getBanco = async ({ body }: Request, res: Response) => {
    try {
        return res.json(await functions.getBanco());
    } catch (err) {
        handleHTTP(res, "Error Interno");
    }
}

const insertBanco = async ({ body }: Request, res: Response) => {
    try {
        const { nombre, cuenta } = body;
        return res.json(await functions.insertBanco(nombre, cuenta));
    } catch (err) {
        handleHTTP(res, "Error Interno");
    }
}

const updateBanco = async ({ body }: Request, res: Response) => {
    try {
        const { id, nombre, cuenta } = body;
        return res.json(await functions.updateBanco(id, nombre, cuenta));
    } catch (err) {
        handleHTTP(res, "Error Interno");
    }
}

const deleteBanco = async ({ body }: Request, res: Response) => {
    try {
        const { id } = body;
        return res.json(await functions.deleteBanco(id));
    } catch (err) {
        handleHTTP(res, "Error Interno");
    }
}

export { getBanco, insertBanco, updateBanco, deleteBanco }
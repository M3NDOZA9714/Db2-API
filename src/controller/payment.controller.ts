import { Request, Response } from "express"
import { handleHTTP } from "../utils/error.handle"
import { functions } from "../service/payment.service"

const getPago = async ({ body }: Request, res: Response) => {
    try {
        return res.json(await functions.getPago());
    } catch (err) {
        console.log(err)
        handleHTTP(res, "Error Interno");
    }
}

export { getPago }
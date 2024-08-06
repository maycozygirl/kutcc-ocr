import LineClient from "@/services/line-client";
import { Request, Response } from "express";

export const Image = (req: Request, res: Response) => {
    const client = LineClient.getMessagingClient();


    return res.json({
        "status": "success",
    });
}
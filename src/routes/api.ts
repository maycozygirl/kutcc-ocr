import { Image } from "@/controllers/image-controller";
import { middleware as lineMiddleware} from '@line/bot-sdk'
import { Request, Response, Router } from "express";
import 'dotenv/config'
import lineConfig from "@/config/line-config";


const api = Router();

api.get("/", (req: Request, res: Response) => {
    return res.json({
        "status": "success",
    });
})

api.post('/line/callback', lineMiddleware(lineConfig), (req, res) => {
  const events = req.body.events;
  console.log(events);
});


api.post("/line-image/hook", Image);



export default api;
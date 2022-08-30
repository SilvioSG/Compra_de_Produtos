import { Request, Response } from "express";
import { SendMailUseCase } from "./SendMailUseCase";

export class SendMailController {
  async send(req: Request, resp: Response) {
    const { id } = req.params;
    const { paid } = req.body;

    const sendMailUseCase = new SendMailUseCase();

    const result = await sendMailUseCase.execute({
      id: String(id),
      paid,
    });

    return resp.json(result);
  }
}

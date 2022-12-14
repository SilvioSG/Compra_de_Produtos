import { Request, Response } from "express";
import nodemailer from "nodemailer";

export async function SendMail(req: Request, resp: Response) {
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  let message = await transport.sendMail({
    from: '"Pessoa teste" <pessoa@teste.com',
    to: "teste@gmail.com",
    subject: "Email de Pagamento",
    text: "Este é um email de pagamento",
    html: "<p> Pagamento Recebido Com Sucesso<p>",
  });

  transport.sendMail(message, function (err) {
    if (err)
      return resp.status(400).json({
        error: true,
        mensagem: "Erro: Email não foi enviado",
      });
  });
  return resp.json({
    erro: false,
    mensagem: "Email enviado com sucesso!",
  });
}

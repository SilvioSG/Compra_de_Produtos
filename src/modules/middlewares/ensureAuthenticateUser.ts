import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import auth from "../../config/auth";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateUser(
  req: Request,
  resp: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return resp.status(401).json({
      message: "Token está Faltando",
    });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(token, auth.JWT_SECRET) as IPayload;

    req.id = sub;

    return next();
  } catch (err) {
    return resp.status(401).json({
      message: "Token Inválido",
    });
  }
}

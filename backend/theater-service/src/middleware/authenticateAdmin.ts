import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const authenticateAdmin = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Invalid token
      }

      next();
    });
  } else {
    res.sendStatus(401); // No token provided
  }
};

export default authenticateAdmin;

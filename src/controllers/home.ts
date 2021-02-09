import { Request, Response } from "express";

export const index: (req: Request, res: Response) => void = (req, res) => {
    res.send("<h1>Home</h1>");
};
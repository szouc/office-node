import { Request, Response } from "express";

const data = [
    {
        name: "Tom",
        age: 28
    },
    {
        name: "Jerry",
        age: 22
    }
];

export const getAllUsers: (req: Request, res: Response) => void = (req, res) => {
    res.json({ data: data });
};
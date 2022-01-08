import { Request, Response } from "express";

export default function downloadXlsx(req: Request, res: Response) {
  try {
    res.status(200).json({ data: "Working" });
  } catch (e) {
    res.status(500).json({ error: "Server error" });
  }
}

import { Request, Response } from "express";
// @ts-ignore
import * as json2xls from "json2xls";
import * as fs from "fs";

export default async function downloadXlsx(req: Request, res: Response) {
  try {
    const json = [
      { id: 1, name: "John Doe", dob: new Date(Date.now()) },
      { id: 2, name: "Jane Doe", dob: new Date(Date.now()) },
    ];
    let fileName = "test.xlsx";
    let xls = json2xls(json);
    fs.writeFileSync(fileName, xls, "binary");
    res.download(fileName, () => {
      fs.unlinkSync(fileName);
    });
  } catch (e) {
    res.status(500).json({ error: "Server error" });
  }
}

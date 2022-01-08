import { Request, Response } from "express";
import * as xlsx from "json-as-xlsx";

// // @ts-ignore
// import * as json2xls from "json2xls";
// import * as fs from "fs";

export default async function downloadXlsx(req: Request, res: Response) {
  try {
    const data: any[] = [
      {
        sheet: "Adults",
        columns: [
          { label: "Name", value: "name" },
          { label: "Age", value: "age" },
        ],
        content: [
          { name: "Monserrat", age: 21 },
          { name: "Luis", age: 22 },
        ],
      },
    ];

    const settings: any = {
      writeOptions: {
        type: "buffer",
        bookType: "xlsx",
      },
    };

    // @ts-ignore
    const buffer = xlsx(data, settings);
    res.writeHead(200, {
      "Content-Type": "application/octet-stream",
      "Content-disposition": "attachment; filename=MySheet.xlsx",
    });
    res.end(buffer);

    // const json = [
    //   { id: 1, name: "John Doe", dob: new Date(Date.now()) },
    //   { id: 2, name: "Jane Doe", dob: new Date(Date.now()) },
    // ];
    // let fileName = "test.xlsx";
    // let xls = json2xls(json);
    // fs.writeFileSync(fileName, xls, "binary");
    // res.download(fileName, () => {
    //   fs.unlinkSync(fileName);
    // });
  } catch (e) {
    res.status(500).json({ error: "Server error" });
  }
}

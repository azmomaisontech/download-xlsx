import * as express from "express";
import downloadXlsx from "./controllers/download-xlsx";

const app = express();

app.get("/", downloadXlsx);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

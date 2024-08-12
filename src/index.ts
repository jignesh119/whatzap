import express, { Request, Response, NextFunction } from "express";
import { createServer } from "http";
import path from "path";

const app = express();
const server = createServer(app);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

server.listen(3000, () => {
  console.log(`server runnin on 3000`);
});

import express from "express";
import { createServer } from "http";
import cors from "cors";
import environmentVariables from "./conf/env.conf";
const app = express();
const httpServer = createServer(app);
const port = environmentVariables.APP_PORT;

app.use(
  cors({
    origin: environmentVariables.CORS_ORIGIN,
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("the chat app backend is up and running");
});

httpServer.listen(port, () => {
  console.log("listening on port", port);
});

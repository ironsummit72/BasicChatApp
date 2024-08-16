"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const app = (0, express_1.default)();
const httpServer = (0, http_1.createServer)(app);
const port = 3000;
app.get('/', (req, res) => {
    res.send("the chat app backend is up and running");
});
httpServer.listen(port, () => {
    console.log("listening on port", port);
});

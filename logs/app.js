"use strict";
const PORT = process.env.PORT || "8080";
const express = require("express");
const log = require('./dd');
console.log(log)
const app = express();
const { countAllRequests } = require("./monitoring");
app.use(countAllRequests());
app.get("/", (req, res) => { res.send("Hello World"); });
app.listen(parseInt(PORT, 10), () => { console.log(`Listening for requests on http://localhost:${PORT}`); });
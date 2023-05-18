const express = require ("express");
const dotEnv = require("dotenv").config();

const app = express();

const port = process.env.EXP_PORT;

app.use("/api/getContact", require("./routes/contactRoutes"))

app.listen(port, () => {
    console.log(`Port hearing on ${port}`);
})
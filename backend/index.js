const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./Routes/AuthRouter");
const ProductRouter = require("./Routes/ProductRouter");

require("dotenv").config();
require("./Models/db");
const PORT = process.env.PORT || 3006;

app.get("/ping", (req, res) => {
  res.send("Poorig");
});

app.use(bodyParser.json());
app.use(cors());

app.use("/api", AuthRouter);
app.use("/products", ProductRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http//localhost:${PORT}`);
});

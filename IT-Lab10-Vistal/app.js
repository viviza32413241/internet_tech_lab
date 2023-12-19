const express = require("express");
const cors = require("cors");
const router = require("./routers/router.js");

const app = express();

app.use(cors());

app.use("/", router);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

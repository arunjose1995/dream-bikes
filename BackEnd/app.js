const express = require("express");
const db = require("./config/config.json");
const app = express();
const port = process.env.PORT || db.port;
app.listen(port, () => {
  console.log(`server is connected.... ${port}`);
});

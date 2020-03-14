const express = require("express");
const db = require("./config/mongoose");
const port = 8000;
const app = express();
app.use(express.urlencoded());

app.use("/", require("./routes"));

app.listen(port, function(error) {
  if (error) {
    console.log("Error while starting the server" + error);
    return;
  }
  console.log("Server is up and running ", port);
});

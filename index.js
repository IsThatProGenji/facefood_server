const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json({
    type: ['application/json', 'text/plain']
  }));

const userRoute = require("./routes/User");
app.use("/user", userRoute);
const uploadRoute = require("./routes/Upload");
app.use("/upload", uploadRoute);


app.listen(3001, (req, res) => {
    console.log("server running");
});
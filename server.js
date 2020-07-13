const express = require("express");
const mongoose = require("mongoose");

const app = express();

//Routes
const developers = require("./routes/api/developer");

//Set Middlewares
//Set this to parse stuffs
app.use(express.json());

//DATABSE Configuration
const DB = require("./config/keys").mongoURI;

//Connect MonggoDB
mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log("MonggoDB Connected "))
  .catch((err) => console.log(err));

//Use routes
app.use("/api/developers", developers);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () =>
  console.log(`Server connected and running on PORT ${PORT}`)
);

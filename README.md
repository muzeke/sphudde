# STEPS

```
npm i express
      concurrently
      mongoose
      axios
      react-redux
      redux
      redux-thunk
```

## Setup Express

## Setup MongoDB

## Server.js

```javascript
const express = require("express");
const mongoose = require("mongoose");

const app = express();

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

//

const PORT = process.env.PORT || 5001;

app.listen(PORT, () =>
  console.log(`Server connected and running on PORT ${PORT}`)
);
```

## Create Models

## Apply Model routes in server.js

## Create Client via CRA App

## ADD Npm scripts

```json
{
  "start": "node server",
  "server": "nodemon server",
  "client-install": "npm install --prefix client",
  "client": "npm start --prefix client",
  "dev": "concurrently \"npm run server\" \"npm run client\""
}
```

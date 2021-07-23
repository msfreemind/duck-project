const express = require("express");
const mongoose = require('mongoose');
const feedings = require("./routes/api/feedings");

const app = express();

const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/feedings", feedings);

const port = 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
const express = require("express");
const feedings = require("./routes/api/feedings");

const app = express();

app.use("/api/feedings", feedings);

const port = 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
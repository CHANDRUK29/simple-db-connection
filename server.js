require("dotenv").config();
require("./config/db").connectToPostgres();
require("./config/db").connectToMongo()
require("./model/pgmodel");

const app = require("./app");

const PORT = process.env.PORT || 2200;

app.listen(PORT, () => {
  console.log(`server is listening on Port ${PORT}`)
})
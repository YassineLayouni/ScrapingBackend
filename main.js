const express = require("express");
const searchRoute = require("./routes/searchRoute.js");

const PORT = 9300;
const app = express();

app.use(express.json());
app.use("/search",searchRoute);

app.listen(PORT,()=>{
    console.log(`Running Scraping backend on port ${PORT}`)
});
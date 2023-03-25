const dotenv = require("dotenv");
dotenv.config();

const express  = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const RegisterRoute = require("./Routes/signup");
const LoginRoute = require("./Routes/login");

const app = express();
app.use(express.json());
app.use(cors({credentials: true, origin: "http://localhost:3000"}));

let port = process.env.PORT;
let url = process.env.URL;

mongoose.set("strictQuery", true);
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Connected to DB");
})
.catch((err) => {
    console.log("Error Connecting to database", err);
})

app.get("/test", (req,res) => {
    res.json("Express Server Test => OK");
})

app.use('/api', RegisterRoute);
app.use('/api', LoginRoute);

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})
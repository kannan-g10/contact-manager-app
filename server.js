const express = require("express");
const connectDb = require("./config/dbconnection");
const errorHandler = require("./middleware/errorhandler");
const app = express();
const dotenv = require("dotenv").config();

connectDb();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoute"));
app.use("/api/users", require("./routes/userRoute"));
app.use(errorHandler);

app.listen(port, () => console.log(`server running on ${port}`));

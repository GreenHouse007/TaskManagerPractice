/* require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

// Use your MongoDB URI from .env
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error(err));

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
*/

const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require(`./db/connect`);
require("dotenv").config();
const notFound = require(`./middleware/not-found`);
const errorHandlerMiddleware = require(`./middleware/error-Handler`);

// middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use(`/api/v1/tasks`, tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();

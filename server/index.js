require("dotenv").config();
const models = require("./models/index.js");
const express = require("express");
const fileUpload = require("express-fileupload");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const sequelize = require("./db.js");
const errorMiddleware = require("./middlewares/errorMiddleware.js");
const routes = require("./routes/index.js");
const formidableMiddleware = require("express-formidable");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve("public")));
app.use(fileUpload({}));
app.use(morgan("tiny"));
app.use("/api/v1", routes);
app.use(errorMiddleware);

const run = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
    app.listen(PORT, () => {
      console.log(`server running on port: ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

run();

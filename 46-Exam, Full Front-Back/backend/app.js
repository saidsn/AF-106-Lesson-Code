import express from "express";
import "dotenv/config";
import cors from "cors";
import "./src/db/dbConnection.js";
import productRouter from "./src/routes/productRouter.js";


const port = process.env.PORT || 5001;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/products", productRouter);
app.use("/images", express.static("src/images"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

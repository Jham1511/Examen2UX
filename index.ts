import cors from "cors";
import dotenv from "dotenv";
import express from "express";
dotenv.config();
const app = express();

const port = process.env.PORT ?? 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.get("/", (req, res) =>
  res.status(200).json({
    message: "Hello World",
  })
);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
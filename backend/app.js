import express from "express";
import "express-async-errors";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", (req, res) => {
  const ip = req.ip;
  res.json({ ip });
});

app.use("api/getCurrentWeather", () => {
  res.send("current weather");
});

export default app;

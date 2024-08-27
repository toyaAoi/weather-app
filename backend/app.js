import express from "express";
import "express-async-errors";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", (req, res) => {
  const ipAddress = req.headers["x-forwarded-for"];
  if (ipAddress.startsWith("::ffff:")) {
    ipAddress = ipAddress.slice(7);
  }

  res.json({ ipAddress });
});

app.use("api/getCurrentWeather", () => {
  res.send("current weather");
});

export default app;

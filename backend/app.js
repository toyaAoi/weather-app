import express from "express";
import "express-async-errors";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", (req, res) => {
  const ip = req.ip;
  const host = req.headers["x-forwarded-for"];
  const userAgent = req.headers["user-agent"];
  const referer = req.socket.remoteAddress;
  console.log(host);

  res.json({ ip, host: "host", userAgent, referer });
});

app.use("api/getCurrentWeather", () => {
  res.send("current weather");
});

export default app;

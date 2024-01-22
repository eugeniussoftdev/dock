import bodyParser from "body-parser";
import cors from "cors";
import Express from "express";

const app = Express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.get("/", (req, res) => {
  return res.send("HELLO");
});

app.get("/test", (req, res) => {
  return res.json({ message: "Running..." });
});

app.listen(3000, () => {
  console.log("*** Node is running");
});

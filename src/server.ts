import express from "express";
import router from "./router";
import morgan from "morgan";
import cors from "cors";
import { protect } from "./modules/auth";
import { createNewUser, signin } from "./handlers/user";

const app = express();

const customLogger = (message) => (req, res, next) => {
  console.log(`custom message ${message}`);
  next();
};

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(customLogger("custom logger"));

// custom middleware
// app.use((req, res, next) => {
//   req.happy = "I am happy now";

//   res.status(401);
//   res.send("Nope");

//   next();
// });

// next in handler is used only in case to pass an error
app.get("/", (req, res, next) => {
  setTimeout(() => {
    next(new Error("hello"));
  }, 100);
  // throw new Error("error");
  // res.status(200);
  // res.json({ message: "Hello world!" });
});

app.use("/api", protect, router);

app.post("/user", createNewUser);
app.post("/signin", signin);

// always putt error handler at the last so that it catches all the errors throw from the api
app.use((err, req, res, next) => {
  if (err.type === "input") {
    res.status(400).json({
      message: "invalid input",
    });
  } else {
    res.status(400).json({
      message: "something went wrong",
    });
  }
});

export default app;

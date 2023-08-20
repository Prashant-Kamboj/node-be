import * as dotenv from "dotenv";
dotenv.config(); // should be loaded before all the handlers

import app from "./server";

app.listen(3001, () => {
  console.log("running on port 3001");
});

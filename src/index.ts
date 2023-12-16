import * as dotenv from "dotenv";
dotenv.config(); // should be loaded before all the handlers
import config from "./config";

import app from "./server";

app.listen(config.port, () => {
  console.log(`running on port ${config.port}`);
});

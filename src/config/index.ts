import merge from "lodash.merge";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const stage = process.env.STAGE || "local";

const defaultConfig = {
  stage,
  env: process.env.NODE_ENV,
  secrets: {
    jwt: process.env.JWT_SECRET,
    dbUrl: process.env.DARABASE_URL,
  },
  port: 3001,
};

console.log(stage, "stage");

let envConfig;
if (stage === "production") {
  envConfig = require("./prod").default;
} else if (stage === "testing") {
  envConfig = require("./testing").default;
} else {
  envConfig = require("./local").default;
}

export default merge(defaultConfig, envConfig);

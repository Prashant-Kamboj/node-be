export default {
  env: process.env.NODE_ENV,
  secrets: {
    jwt: process.env.JWT_SECRET,
    dbUrl: process.env.DARABASE_URL,
  },
  port: 3001,
};

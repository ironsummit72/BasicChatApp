import "dotenv/config";
const environmentVariables = {
  CORS_ORIGIN: process.env.CORS_ORIGIN,
  APP_PORT: process.env.APP_PORT,
  DB_URL: process.env.DB_URL,
  DB_NAME: process.env.DB_NAME,
};
export default environmentVariables;

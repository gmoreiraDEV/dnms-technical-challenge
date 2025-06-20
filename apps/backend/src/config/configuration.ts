export const configuration = () => ({
  NODE_ENV: process.env.NODE_ENV,
  PORT: parseInt(process.env.API_PORT, 10) || 3001,
});

import dotenv from 'dotenv';

dotenv.config();

export default {
  SERVER: {
    HTTPS_ACTIVE: false,
    PORT: process.env.PORT,
    HOST: process.env.HOST
  }
};

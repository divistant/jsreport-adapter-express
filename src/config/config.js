require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  jsreport: {
    url: process.env.JSREPORT_URL,
    username: process.env.JSREPORT_USER,
    password: process.env.JSREPORT_PASS,
  },
  token: process.env.STATIC_TOKEN,
};

import { config } from 'dotenv'
;({ config }).config()
export const port = process.env.PORT
export const jsreport = {
  url: process.env.JSREPORT_URL,
  username: process.env.JSREPORT_USER,
  password: process.env.JSREPORT_PASS,
}
export const token = process.env.STATIC_TOKEN
export default {
  port,
  jsreport,
  token,
}

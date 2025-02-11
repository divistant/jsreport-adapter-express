import { config as dotenv } from '@dotenvx/dotenvx'

const envResult = dotenv()
if (envResult.error) {
  throw new Error(envResult.error)
}

const isDev = process.env.NODE_ENV !== 'production'

/**
 * Returns a sane/normalized value for well-known env values
 * like number, boolean, null; because values from env are always string.
 *
 * @param {any} value The value from `process.env` or the env object itself.
 * @param {any} defaultValue The fallback value to return.
 */
export function parseEnv(value, defaultValue) {
  if (typeof value === 'object') {
    // Clone object
    const newValue = { ...value }
    for (const k in newValue) {
      newValue[k] = parseEnv(newValue[k])
    }
    return newValue
  }
  if (!isNaN(value)) {
    return Number(value)
  }
  switch (String(value).toLowerCase()) {
    case 'null':
      return null
    case 'true':
    case 'yes':
    case 'on':
      // case '1':
      return true
    case 'false':
    case 'no':
    case 'off':
      // case '0':
      return false
    default:
      break
  }
  return defaultValue
}

const config = {
  port: process.env.PORT,
  jsreport: {
    url: process.env.JSREPORT_URL,
    username: process.env.JSREPORT_USER,
    password: process.env.JSREPORT_PASS,

    // Whether to save output in a local directory. Useful for debugging
    saveLocal: isDev && parseEnv(process.env.JSREPORT_SAVE_LOCAL, false),
  },
  token: process.env.STATIC_TOKEN,
}

export default config

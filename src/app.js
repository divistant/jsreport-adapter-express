import express from 'express'
import config from './config/config.js'
import apiRoutes from './routes/api.js'
import authMiddleware from './middleware/authMiddleware.js'
import loggerMiddleware from './middleware/loggerMiddleware.js'
import logger from './utils/logger.js'

const app = express()

// Middleware untuk parsing JSON
app.use(express.json())

app.use(authMiddleware)
app.use(loggerMiddleware)

// Menggunakan routes API
app.use('/api/v1', apiRoutes)

// Menjalankan server dengan port dari config.js
app.listen(config.port, () => {
  logger.info(`Server is running on port ${config.port}`)
})

export default app

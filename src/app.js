const express = require('express');
const config = require('./config/config');  // Ambil konfigurasi dari config.js
const apiRoutes = require('./routes/api');  // Path yang benar untuk routes API
const authMiddleware = require('./middleware/authMiddleware');
const loggerMiddleware = require('./middleware/loggerMiddleware');
const logger = require('./utils/logger');

const app = express();

// Middleware untuk parsing JSON
app.use(express.json());

app.use(authMiddleware);
app.use(loggerMiddleware);
// Menggunakan routes API
app.use('/api/v1', apiRoutes);

// Menjalankan server dengan port dari config.js
app.listen(config.port, () => {
  logger.info(`Server is running on port ${config.port}`);
});

module.exports = app;

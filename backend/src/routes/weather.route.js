// routes/index.js
import express from 'express';
import weatherEndpoint from '../endpoint/weather.endpoint';

const router = express.Router();

/**G ET Weather */
router.get('/', weatherEndpoint.getWeather);

/** GET mock data response */
router.get('/mock', weatherEndpoint.getWeatherMock);

export default router;
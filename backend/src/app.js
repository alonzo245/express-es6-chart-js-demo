import express from 'express';
import path from 'path';
import logger from 'morgan';
import weatherRouter from './routes/weather.route';

const app = express();

//Grant access
if (process.env.NODE_ENV !== 'production') {
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    next();
  });
}


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.use(express.static(path.join(__dirname, '..', 'public')));

/** API requests */
app.use('/api/v1/weather', weatherRouter);

/** All other frontend */
app.get('*', (req, res) => {
  console.log('frontend...')
  res.sendFile(path.join(__dirname, '..', 'public', 'build', 'index.html'));
});

export default app;
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

import home from './routes/home.js';
import blog from './routes/blog.js';
import destination from './routes/destinations.js';
import about from './routes/about.js';

app.use(express.static('public'));
app.use('/public/images/', express.static('./public/images'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', home);
app.use('/blog', blog);
app.use('/destinations', destination);
app.use('/about', about);

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
})

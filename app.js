import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render('index.ejs');
});

app.get("/destinations", (req, res) => {
  res.render('destinations.ejs');
});

app.get("/about", (req, res) => {
  res.render('about.ejs');
});

app.listen(3000, () => {
  console.log('Server listening on 3000');
})

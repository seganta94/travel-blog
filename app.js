import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use('/public/images/', express.static('./public/images'));
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/countries', (req, res) => {
//   const countries = [
//     'Argentina',
//     'Austria',
//     'Bahamas',
//     'Belgium',
//     'Bolivia',
//     'Brazil',
//     'Canada',
//     'Chile',
//     'Colombia',
//     'Costa Rica',
//     'Croatia',
//     'Czechia',
//     'Denmark',
//     'Ecuador',
//     'England',
//     'Estonia',
//     'Finland',
//     'France',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Italy',
//     'Latvia',
//     'Lithuania',
//     'Luxembourg',
//     'Mexico',
//     'Monaco',
//     'Morocco',
//     'Netherlands',
//     'Norway',
//     'Peru',
//     'Poland',
//     'Portugal',
//     'Qatar',
//     'Slovakia',
//     'Slovenia',
//     'Spain',
//     'Switzerland',
//     'Turkey',
//     'United Arab Emirates',
//     'United States',
//     'Uruguay',
//     'Venezuela'
//   ];
//   res.render('destinations', { countries });
//   next();
// });

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

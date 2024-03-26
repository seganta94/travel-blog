import express from 'express';
const router = express.Router();

import countries from '../data.js';

router.get("/", (req, res) => {
  res.render('destinations.ejs', { countries });
});

export default router;

import express from 'express';
const router = express.Router();

router.get("/moroccos", (req, res) => {
  res.render('moroccos.ejs');
});

router.get("/andorra", (req, res) => {
  res.render('andorra.ejs');
});

router.get("/riodejaneiro", (req, res) => {
  res.render('riodejaneiro.ejs');
});

router.get("/dubai", (req, res) => {
  res.render('dubai.ejs');
});

router.get("/california", (req, res) => {
  res.render('california.ejs');
});

router.get("/jericoacoara", (req, res) => {
  res.render('jericoacoara.ejs');
});

export default router;

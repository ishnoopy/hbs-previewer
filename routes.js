const express = require('express');
const router = express.Router();
const handlebars = require('hbs');

router.get('/', (req, res) => {
  res.render('home');
})

router.post('/preview', (req, res) => {
  const { template, data } = req.body;

  const compiledTemplate = handlebars.compile(template);

  const result = compiledTemplate(JSON.parse(data));
  
  res.json({ result });
})

module.exports = router;
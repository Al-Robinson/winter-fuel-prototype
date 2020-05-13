const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  // Address to address found
  router.post('/sprint35d/address', (req, res) => {
    res.redirect('/sprint35d/address-1')
  });

  // Home phone number change to living with q
  router.post('/sprint35d/approve-po-box', (req, res) => {
    res.redirect('/sprint35d/living-with-po')
  });


  // Address found to move date
  router.post('/sprint35d/address-1', (req, res) => {
    res.redirect('/sprint35d/move-date')
  });

  // Move date to home phone number change
  router.post('/sprint35d/move-date', (req, res) => {
    res.redirect('/sprint35d/homephone-address')
  });

  // Home phone number change to living with q
  router.post('/sprint35d/homephone-address', (req, res) => {
    res.redirect('/sprint35d/living-with')
  });

  // Living with anyone at address change
  router.post('/sprint35d/living-with', function(req, res) {
    if (req.body['living-with'] === 'Lives with someone else of State Pension age') {
      res.redirect('living-with-age');
    } else {
      res.redirect('poa');
    }
  });

  // Living with anyone at PO box
  router.post('/sprint35d/living-with-po', function(req, res) {
    if (req.body['living-with'] === 'Lives with someone else of State Pension age') {
      res.redirect('living-with-age-po');
    } else {
      res.redirect('declaration-po');
    }
  });


  // Living with age to POA
  router.post('/sprint35d/living-with-age-po', (req, res) => {
    res.redirect('/sprint35d/poa-po')
  });

  // Living with age to POA
  router.post('/sprint35d/living-with-age', (req, res) => {
    res.redirect('/sprint35d/poa')
  });

  // Declaration to overview
  router.post('/sprint35d/declaration', (req, res) => {
    res.redirect('/sprint35d/overview-changed')
  });


  // Power of attourney
  router.post('/sprint35d/poa', function(req, res) {
    if (req.body['poa'] === 'Yes') {
      res.redirect('poa-people');
    } else {
      res.redirect('declaration');
    }
  });

  // POA to
  router.post('/sprint35d/poa-po', (req, res) => {
    res.redirect('/sprint35d/declaration-po')
  });

  // POA to
  router.post('/sprint35d/declaration-po', (req, res) => {
    res.redirect('/sprint35d/overview-po-box-approved')
  });



  module.exports = router;

const express = require('express');
const router = express.Router();

const ablySponsor = require('./ably/sponsor');
const bybitSponsorTop = require('./bybit/sponsor-top');
const bybitSponsorBottom = require('./bybit/sponsor-bottom');

router.get('/sponsors', (req, res, next) => { 
  const {sponsorName} = req.body;
  if(!sponsorName){
    return next("Input sponsorName")
  }

  switch(sponsorName){
    case 'ably':{
      res.send({
        sponsorTop: ablySponsor,
        sponsorBottom: ablySponsor
      })
      break;
    }
    case 'bybit':{
      res.send({
        sponsorTop: bybitSponsorTop,
        sponsorBottom: bybitSponsorBottom
      });
      break;
    }
      

    default: {
      res.send("Not found"); 
      break;
    }
  }
})

module.exports = router;

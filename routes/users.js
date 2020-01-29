var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");

//GET users listing. 


router.get('/:sana', (req, res) => {
  const word = req.params.sana
  console.log("Palvelin, get sana", word)
  fetch(`https://googledictionaryapi.eu-gb.mybluemix.net/?define=${word}`
  )
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Something wrong with the response');
    })
    .then(data => res.json(data))
})
module.exports = router;

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var searchResults = {
    results: [
      {
        name: 'eric',
        image: 'images/avatars/eric.png'
      },
      {
        name: 'hayley',
        image: 'images/avatars/hayley.png'
      },
      {
        name: 'lucy',
        image: 'images/avatars/lucy.png'
      },
      {
        name: 'rory',
        image: 'images/avatars/rory.png'
      },
      {
        name: 'sean',
        image: 'images/avatars/sean.png'
      },
      {
        name: 'yaw',
        image: 'images/avatars/yaw.png'
      }
    ]
  };

  res
    .type('json')
    .send(searchResults);
});

module.exports = router;

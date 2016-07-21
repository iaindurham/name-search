var _ = require('lodash');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var people = [
    {
      id: '1',
      name: 'eric',
      image: 'images/avatars/eric.png'
    },
    {
      id: '2',
      name: 'hayley',
      image: 'images/avatars/hayley.png'
    },
    {
      id: '3',
      name: 'lucy',
      image: 'images/avatars/lucy.png'
    },
    {
      id: '4',
      name: 'rory',
      image: 'images/avatars/rory.png'
    },
    {
      id: '5',
      name: 'sean',
      image: 'images/avatars/sean.png'
    },
    {
      id: '6',
      name: 'yaw',
      image: 'images/avatars/yaw.png'
    }
  ];
  var searchResults = people;

  if (req.query) {
    searchResults = _.filter(people, function (person) {
      return person.name.match(req.query.search)
    });
  }

  res
    .type('json')
    .send({
      results: searchResults
    });
});

module.exports = router;

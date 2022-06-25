const router = require('express').Router();
// const { Blog } = require('../models/');


//ADD IN MODELS REQUIRE HERE!!!!!!!!

// GET all galleries for homepage

const blogData = [
  {
      title: "MVC initials",
      contents: "It stands for Model View Controller",
      user_name: "Smithyxx"
  },
  {
      title: "Favoutite DB package",
      contents: "I always use MySQL",
      user_name: "SqlFiend"
  },
  {
      title: "Confused",
      contents: "What is peoples first step for setting up Express?",
      user_name: "Roger"
  },
];

router.get('/', async (req, res) => {
  res.render('first', {blogData});
});

module.exports = router;



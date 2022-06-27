const router = require('express').Router();
const Blog  = require('../models/blog');


//ADD IN MODELS REQUIRE HERE!!!!!!!!


// const blogData = [
//   {
//       title: "MVC initials",
//       contents: "It stands for Model View Controller",
//       user_name: "Smithyxx"
//   },
//   {
//       title: "Favoutite DB package",
//       contents: "I always use MySQL",
//       user_name: "SqlFiend"
//   },
//   {
//       title: "Confused",
//       contents: "What is peoples first step for setting up Express?",
//       user_name: "Roger"
//   },
// ];

// route to get all blogs on homepage
router.get('/', async (req, res) => {
  const blogData = await Blog.findAll().catch((err) => { 
      res.json(err);
    });
      const blogs = blogData.map((blog) => blog.get({ plain: true }));
      res.render('first', { blogs });
    });

// router.get('/', async (req, res) => {
//   res.render('first', {blogData});
// });

router.get('/signin', async (req, res) => {
  res.render('signin');
});

module.exports = router;



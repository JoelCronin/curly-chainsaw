const router = require('express').Router();
// const Blog  = require('../models/blog');
// const User = require("../models/user");
// const Comment = require("../models/comment")

const bcrypt = require('bcrypt');

const { Blog, User, Comment} = require("../models")
const withAuth = require('../utils/auth')




// route to get all blogs on homepage
router.get('/', async (req, res) => {
  const blogData = await Blog.findAll().catch((err) => { 
      res.json(err);
    });
      const blogs = blogData.map((blog) => blog.get({ plain: true }));
      res.render('first', { blogs, loggedIn: req.session.loggedIn });
    });

    // route to get all blogs on homepage
// router.get('/signin', async (req, res) => {
//   const blogData = await Blog.findAll().catch((err) => { 
//       res.json(err);
//     });
//       const blogs = blogData.map((blog) => blog.get({ plain: true }));
//       res.render('signin', { blogs, loggedIn: req.session.loggedIn });
//     });


router.get('/signin', async (req, res) => {
  res.render('signin', { loggedIn: req.session.loggedIn });
});

// Get one blog 
router.get('/blog/:id', async (req, res) => {
  try {
    const dbBlogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: [
            'id',
            'comment',
            'user_id',
            'blog_id',
            'createdAt',
          ],
        },
      ],
    }
    );

    const blog = dbBlogData.get({ plain: true });
    console.log("=====================================================================")
    console.log(blog)
    console.log(blog.comments)
    const comments = blog.comments
    res.render('singleblog', { blog, comments, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post('/signin', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      user_name: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



module.exports = router;



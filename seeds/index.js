const sequelize = require('../config/connection');
const seedBlogs = require('./blogsData');
const seedComments = require('./commentData');
const seedUsers = require('./userData');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  console.log("--------USERS SEEDED--------")
  
  await seedBlogs();

  console.log("--------BLOGS SEEDED--------")

  await seedComments();

  console.log("--------COMMENTS SEEDED--------")


  process.exit(0);
};

seedAll();
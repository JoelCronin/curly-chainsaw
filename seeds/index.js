const sequelize = require('../config/connection');
const seedBlogs = require('./blogsData');
const seedUsers = require('./userData');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBlogs();

  console.log("--------BLOGS SEEDED--------")

  await seedUsers();

  console.log("--------USERS SEEDED--------")


  process.exit(0);
};

seedAll();
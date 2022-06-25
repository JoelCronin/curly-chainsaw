const sequelize = require('../config/connection');
const seedBlogs = require('./blogsData');
const seedUsers = require('./userData');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBlogs();

  await seedUsers();


  process.exit(0);
};

seedAll();
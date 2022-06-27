const User  = require('../models/user');

const userData = [
    {
        user_name: "Smithyxx",
        email: "smithyxx@test.com",
        password: "BASS1234"
    },
    {
        user_name: "SqlFiend",
        email: "sqlfriend@aol.com",
        password: "TREBLE123"
    },
    {
        user_name: "Roger",
        email: "rog12@google.com",
        password: "SOLO1234"
    },
];

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers;
const { users } = require('../Data.js');

const resolvers = {
    Query: {
        getAllUsers() {
            return users;
        },
    },
    Mutation: {
        createUser(parent, args) {
            const newUser = args
            users.push(newUser)
            return 'Created account successfully!'
        }
    }
};

module.exports = { resolvers }
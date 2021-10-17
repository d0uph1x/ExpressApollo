const { ApolloServer } = require('apollo-server-express')
const express = require('express')

const { typeDefs } = require('./Schema/TypeDefs.js')
const { resolvers } = require('./Schema/Resolvers.js')

const app = express()

const server = new ApolloServer({ typeDefs, resolvers })

server.applyMiddleware({ app })

const PORT = process.env.PORT || 9000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
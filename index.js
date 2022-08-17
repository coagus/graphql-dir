'use strict'

const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        hello: String
        saludo: String
    }
`)

const resolvers = {
    hello: () => {
        return 'Hola Mundo'
    },
    saludo: () => {
        return 'Hola a Todos'
    }
}

graphql({
    schema: schema,
    source: '{ saludo }',
    rootValue: resolvers
})
    .then((data) => {
        console.log(data);
    })
    .catch(e => {
        console.log(e);
    });
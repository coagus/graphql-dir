'use strict'

const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        hello: String
    }
`)

graphql({
    schema: schema,
    source: '{ hello }'
})
    .then((data) => {
        console.log(data);
    })
    .catch(e => {
        console.log(e);
    });
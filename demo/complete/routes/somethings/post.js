'use strict'

const S = require('fluent-schema')

module.exports = async function (app) {
  const { ObjectId } = app.mongo
  const collection = app.mongo.db.collection('somethings')

  app.post('/', {
    schema: {
      body: S.object().prop('name', S.string().required())
    }
  }, async function (req, reply) {
    const data = await collection.insertOne(req.body)
    const _id = data.insertedId

    reply
      .code(201)
      .header('location', `${app.prefix}/${_id}`)

    return Object.assign({
      _id
    }, req.body)
  })
}

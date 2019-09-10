'use strict'

const S = require('fluent-schema')

module.exports = async function (app) {
  const { ObjectId } = app.mongo
  const collection = app.mongo.db.collection('somethings')

  app.get('/:id', {
    schema: {
      params: S.object().prop('id', S.string().required().minLength(12))
    }
  }, async function (req, reply) {
    const item = await collection.findOne({ _id: new ObjectId(req.params.id) })
    if (item === null) {
      reply.code(404).send()
      return
    }
    return item
  })
}


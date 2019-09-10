'use strict'

const fastify = require('fastify')
const autoload = require('fastify-autoload')
const mongodb = require('fastify-mongodb')
const { join } = require('path')

function build (opts) {
  const app = fastify(opts)
  app.register(mongodb, {
    url: 'mongodb://localhost:27017/demo'
  })
  app.register(autoload, {
    dir: join(__dirname, './routes')
  })
  return app
}

if (require.main === module) {
  build().listen(process.env.PORT || 3000)
}

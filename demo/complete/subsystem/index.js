
module.exports = function (server, opts, cb) {
  server.register(require('point-of-view'), {
    engine: {
      marko: require('marko')
    },
    templates: __dirname
  })

  server.get('/hello', (req, reply) => {
    reply.view('/page.marko', { hello: 'subsystem' })
  })

  server.get('/', (req, reply) => {
    reply.send({ hello: 'from the subsystem' })
  })

  cb()
}

'use strict'

module.exports = async function (server) {
  server.get('/', async function () {
    return 'hello world'
  })
}

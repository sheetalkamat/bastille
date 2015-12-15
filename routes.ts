import _ = require('koa-route')
import root = require('./route-root')
import pub = require('./route-public')
import notFound = require('./route-not-found')

export = [
  _.get('/', root)
, _.get('/*', pub)
, _.get('/*', notFound)
]

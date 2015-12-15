import koa = require('koa')
import routes = require('./routes')

var app = koa()
export = app;

let middleware = routes

for(let i in middleware)
  app.use(middleware[i])

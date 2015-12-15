import './import-jsx'
import browserify = require('browserify')
  import brfs = require('brfs')
  import sass = require('node-sass')
  import path = require('path')
  import fs = require('fs')

export = function(page) {
  let ext = path.extname(page)
  if(!builders[ext]) return
  return builders[ext](page)
}

let builders = {
  '.js': function (page) {
    var browserified = browserify({
      entries: page
    , debug: true
    , transform: brfs
    })
    return process.env.MINIFY_JS
      ? browserified.plugin('minifyify', {map: 'bundle.map.json', output: 'bundle.map.json'}).bundle()
      : browserified.bundle()
  }
, '.scss': function(page) {
    return sass.renderSync({ file: page }).css
  }
, '.css': function(page) {
    return fs.createReadStream(page)
  }
}

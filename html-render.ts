import './import-jsx'
import React = require('react')

export = function(jsxTemplate, properties) {
  var factory = React.createFactory(require(jsxTemplate))
  return React.renderToStaticMarkup(factory(properties))
}

let  indexTemplate = './react/index.jsx'
import render = require('./html-render')

 function *root(){
  this.body = render(indexTemplate)
  this.z = 'html'
}
export = root;
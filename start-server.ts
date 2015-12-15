let initTime = new Date().getTime()
import createServer = require('./server')
import fetch = require('./fetch-env')
let PORT=fetch('PORT')

createServer.listen(fetch('PORT'))

console.log("Server running at http://"+fetch('HOST')+":"+fetch('PORT')+"/")
console.log('started server in', new Date().getTime() - initTime, 'ms')

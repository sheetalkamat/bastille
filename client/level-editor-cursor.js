var keys = require('./keys')

module.exports = Cursor

function Cursor(core) {
  this.core = core
}

Cursor.prototype = {
  __x: 0
, __y: 0
, set x(x) { this.__x = x; this.core.cameraCenter.x = x }
, set y(y) { this.__y = y; this.core.cameraCenter.y = y }
, get x( ) { return this.__x }
, get y( ) { return this.__y }
, update: function() {
    var pressed = this.core.input.getKeyDown.bind(this.core.input)
    if(pressed(keys.RIGHT)) { this.x += 16 }
    if(pressed(keys.LEFT))  { this.x -= 16 }
    if(pressed(keys.UP))    { this.y += 16 }
    if(pressed(keys.DOWN))  { this.y -= 16 }
  }
, draw: function(ctx) {
    ctx.fillRect(20,20,10,10)
    
  }
}

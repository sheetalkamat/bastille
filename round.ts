export = Round


class Round<T> {
    __array: Array<T>;
    __index: number;
    Round(array: Array<T>) {
        this.array = array
    }
  set index(index) {
    var i = this.__index
    this.__index = index + this.array.length
    this.__index = this.array.length === 0 ? 0 : this.__index % this.array.length
  }
set array(array: Array<T>) {
    this.__array = array || []
    this.index = this.index || 0
  }
 get array() {
    return this.__array
  }
get index() { return this.__index }
get current() { return this.array[this.index] }
next() { this.index++ ; return this.current }
previous() { this.index-- ; return this.current }
toArray() {
    return this.array.slice(0,this.index).concat(this.array.slice(this.index, this.length))
  }
removeCurrent() {
    var c = this.current
    this.array = this.array.slice(0,this.index).concat(this.array.slice(this.index+1, this.length))
    if(this.__index === this.array.length) { this.previous() }
    console.log(this.array, this.length)
    return c
  }
}

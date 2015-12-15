function teeCallback<T>(spyArray: Array<T>, cb:(...rest: any[])=>T) {
  return function() {
    spyArray.push(cb.apply(this, arguments))
    return spyArray[spyArray.length-1]
  }
}
export = teeCallback;

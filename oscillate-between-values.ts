/*
x=0  ; f(x)=a
x=pi ; f(x)=b
((a-b)/2) * cos(x) + ((a+b)/2)

cos oscilates from 1 to -1
use this to oscilate between two provided values

*/

export = function (a: number, b: number, x: number) {
  return ((a-b)/2) * Math.cos(x) + ((a+b)/2)
}

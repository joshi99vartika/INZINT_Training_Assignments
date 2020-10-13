var i = [5, 10, 20, 160, 125];
var j = i.reduce(fun);

console.log(j);
function fun(a,b) {
  return a + b;
}


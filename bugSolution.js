function foo(a, b) {
  if (a == null || b == null) {
    return null; //or handle the case differently
  }
  return a + b; 
}

console.log(foo(1, 2)); // 3
console.log(foo(0, 2)); // 2
console.log(foo(1, 0)); // 1
console.log(foo(null, null)); // null

//Alternative solution with explicit null checks
function foo2(a,b){
  if(a === null || b === null){
    return null;
  }
  if(typeof a !== 'number' || typeof b !== 'number'){
    return null;//Or handle accordingly
  }
  return a+b;
}
console.log(foo2(1,2));//3
console.log(foo2(0,2));//2
console.log(foo2(1,0));//1
console.log(foo2(null,null));//null
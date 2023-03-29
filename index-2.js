arr = []
arrlen = prompt("enter array length")
for(let i =0; i<arrlen; ++i){
  num = prompt("enter number")
  arr.push(num)
}
result = { };
for(let i = 0; i < arr.length; ++i) {
    if(!result[arr[i]])
        result[arr[i]] = 0;
    ++result[arr[i]];
}
console.log(result)

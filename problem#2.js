//Question #2: Array Deduping

let arr = [7, 9, 'hi', 12, 'hi', 7, 53];

//Remove duplicates from an array using a Set
const removeDublicates2 = (arr) => {
  let uniqueElements = [...new Set(arr)];
  return uniqueElements;
}
//Removing duplicates from an array using indexOf() and filter()
const removeDublicates3 = (arr) => {
  let uniqueElements = [];
  arr.forEach((e) => {
    if(!uniqueElements.includes(e)){
      uniqueElements.push(e);
    }
  });
  return uniqueElements;
}

//Removing duplicates from an array using recursion
const removeDuplicates4 = (arr) => {
  let cache = [];
  dups(arr);
  
  function dups(arr){
    if(arr.length == 0){
      return;
    }

    if(!cache.includes(arr[0])){
      cache.push(arr[0]);
    }
    arr.shift();
    dups(arr);
  }
  return cache;
}

console.log(removeDublicates2(arr));
console.log(removeDublicates3(arr));
console.log(removeDuplicates4(arr));
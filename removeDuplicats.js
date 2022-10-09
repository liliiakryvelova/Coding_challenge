
let arr = [7, 9, 'hi', 12, 'hi', 7, 53];

const removeDuplicatsRecursive = (arr) => {
  let cashe = [];

  let current = 0;
  dups(current,arr);
  function dups(current, arr){
    if(arr.length == 0){
      return;
    }

    if(!cashe.includes(arr[current])){
      cashe.push(arr[current]);
      arr.shift();
      dups(0, arr);
    }else{
      arr.shift();
      dups(0, arr);
    }
  }
  return cashe;
}

console.log(removeDuplicatsRecursive(arr));
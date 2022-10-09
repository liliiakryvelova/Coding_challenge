//Question #4: Checking for Uniqueness

// let str = "copyright";
let str = "hello";

const checkingForUniques = (str) => {

  const map = new Map();
  let count = 0;
  let newArr = str.split("");

  for(const element of newArr){
    map[element] = map[element] +1 || 1;
  }
  for(const e in map){
    count++;
  }
  console.log(count);
  console.log(newArr.length);
  return count == newArr.length;
}

console.log(checkingForUniques(str));
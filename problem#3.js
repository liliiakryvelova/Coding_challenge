//Question #3: Compressing Strings

let str = "aaabccdddda";

//Iterative
const compresingString = (str) => {
  let result = [];
  let count = 1;

  for(let i=0; i<str.length;i++){
    if(str[i] == str[i+1]){
      count++;
    }else{
      result.push(count+str[i]);
      count = 1;
    }
  }
  return result;
}

//Recursive
const compresingStringRecursive = (str) => {

  let cache = [];
  let newStr = "";
  dups(str);
  function dups(str){
    
    if(str.length == 0){
      cache.push(newStr.length+newStr.substring(0,1));
      return;
    }
    let firstCharacter = str.substring(0,1);

    if(firstCharacter == newStr.charAt(newStr.length-1) || newStr == ""){
      newStr += str.substring(0,1);
      let str1 = str.substring(1,str.length);
      dups(str1);
      
    }else{
      cache.push(newStr.length+newStr.substring(0,1));
      newStr = "";
      dups(str);
    }
      
  }
  return cache;
}

console.log(compresingString(str));
console.log(compresingStringRecursive(str));
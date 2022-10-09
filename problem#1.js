//Question #1: Turning Strings to URLs


const str = "Jasmine Ann Jones";
const customeReplace = (str) =>{
  let newStr = str.trim().split("");
  for(let i=0; i<newStr.length; i++){
    if(newStr[i] == " "){
      newStr[i] = "%20";
    }
  }
  return newStr.join("");
}

const customReplace2 = (str)=>{
  const search = ' ';
  const replaceWith = '%20';

  const result = str.split(search).join(replaceWith);
  return result;
}

const customReplace3 = (str)=>{
  const searchRegExp = / /gi;
  const replaceWith = '%20';

  const result = str.replace(searchRegExp, replaceWith);
  return result;
}

console.log(customeReplace(str));
console.log(customReplace2(str));
console.log(customReplace3(str));
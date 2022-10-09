let arr = [9, 2, 8, 7, 12];

const quickSort = (arr, start = 0, end = arr.length - 1) =>{
  //Base case 
  if(start >= end) return;
  let pivotIndex = partition(arr, start, end);
  //Left
  quickSort(arr, start, pivotIndex-1);
  //Right
  quickSort(arr, pivotIndex+1, end);

  return arr;
}

function partition(arr, start, end){
  const pivotValue = arr[start];
  let swapIndex = start;

  for(let i=start +1; i<=end; i++){
    if(pivotValue > arr[i]){
      swapIndex++;
        if(i !== swapIndex){
          //swap
          ;[arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]]
        }
    }
  }
  if(swapIndex !== start){
    //swap pivot  into correct place
    ;[arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]]
  }
  return swapIndex;
}

const mergeSort = (arr) => {
  let size = arr.length;
  let right = arr.slice(0, Math.floor(size/2));
  let left = arr.slice(Math.floor(size/2), arr.length);
  let sortedArr = [];//the sorted items will go here

  while(left.length && right.length){
    //Insert the smalest item into sortedArr
    {
      if(left[0] < right[0]){
        sortedArr.push(left.shift());
      }else{
        sortedArr.push(right.shift());
      }
    }

  }


  return [...sortedArr, ...left, ...right];
}

console.log(quickSort(arr));
console.log(mergeSort(arr));
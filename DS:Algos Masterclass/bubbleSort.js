//Naive bubblesort
const bubbleSort = (arr) => {
  for (let i = arr.length; i > 0; i--) {
    for (var j = 0; j < i-1; j++) {
      if (arr[j] > arr[j+1]) {
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

const swap = (arr, idx1, idx2) => {
  return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

//Optimized bubblesort
//With the above, if we're given a partially sorted array it'll still go through the entire thing trying to swap
//Have a way to check to see if any swaps were made, if no swaps were made break out of it. 
const bubbleSort = (arr) => {
  var swap;
  for (let i = arr.length; i > 0; i--) {
    for (var j = 0; j < i-1; j++) {
      if (arr[j] > arr[j+1]) {
        swap = true;
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
    if (swap) {
      break;
    }
  }
  return arr;
}

//Different bubblesort implementation
function bubbleSort(array) {
  var copyArr = array.slice();
  var length = copyArr.length - 1;
  do {
    var swapped = false;
    for (var i = 0; i < length; ++i) {
      if (copyArr[i] > copyArr[i + 1]) {
        var temp = copyArr[i];
        copyArr[i] = copyArr[i + 1];
        copyArr[i + 1] = temp;
        swapped = true;
      }
    }
  }
  while (swapped === true);
  return copyArr;
}
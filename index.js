// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var binarySearch = function (arr, elem) {
  let arr2 = arr;
  if (arr2[0] === elem) return true;
  if (arr2[arr2.length - 1] === elem) return true;
  if (arr2.length > 2) {
    // finding the center element
    let centerElemIndex = Math.floor(arr2.length / 2);
    let centerElem = arr2[centerElemIndex];
    if (centerElem === elem) {
      return true;
    } else if (centerElem < elem) {
      return binarySearch(
        arr2.slice(centerElemIndex + 1, arr2.length - 1),
        elem
      );
    } else {
      //centerEleem > elem
      return binarySearch(arr2.slice(0, centerElemIndex), elem);
    }
  }
  return false;
};

console.log(binarySearch([10, 20, 30, 50, 60, 80, 110, 130, 140, 145], 145));

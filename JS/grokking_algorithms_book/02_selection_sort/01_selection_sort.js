'use strict';
/**
 * Finds the index of the element with the  samllest value in an array
 * @param {Array} array Source array
 * @returns {numbers} Index of the element with the smallest value
 */

const findSmallest = (arr) => {
    let [smallestElement] = arr;
    let smallestIndex = 0;
    for (let i = 1; i < arr.length; i++){
        const el = arr[i];
        if (el >= smallestElement) continue;
        smallestElement = el;
        smallestIndex = i;
    }
    return smallestElement;
}

/**
 * Sort array by increment
 * @param {Array} array Source array
 * @returns {Array} New sorted array
 */
const selectionSort = (arr) => {
  const a = [...arr];

  for (let i = 0; i < a.length - 1; i++) {
    let smallestIndex = i;

    for (let j = i + 1; j < a.length; j++) {
      if (a[j] < a[smallestIndex]) {
        smallestIndex = j;
      }
    }

    [a[i], a[smallestIndex]] = [a[smallestIndex], a[i]];
  }

  return a;
};


const sourceArray = [5, 3, 6, 2, 10];
const sortedArray = selectionSort(sourceArray);

console.log('Source array - ', sourceArray); // [5, 3, 6, 2, 10]
console.log('New sorted array - ', sortedArray); // [2, 3, 5, 6, 10]
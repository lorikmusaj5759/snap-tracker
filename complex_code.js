// Filename: complex_code.js

/**
 * This complex JavaScript code demonstrates a custom implementation
 * of a sorting algorithm called "Recursive Merge Sort" along with
 * helper functions. It also includes advanced techniques like
 * Closures, Higher-Order Functions, and Memoization for performance.
 *
 * The code operates on an array of random integers and sorts them
 * in ascending order.
 */

// Helper function to generate an array of random integers
function generateRandomArray(length) {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * length));
    }
    return array;
}

// Helper function to validate whether an array is sorted correctly
function isSorted(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            return false;
        }
    }
    return true;
}

// Recursive merge sort implementation
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    const merge = (left, right) => {
        const sorted = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] <= right[rightIndex]) {
                sorted.push(left[leftIndex]);
                leftIndex++;
            } else {
                sorted.push(right[rightIndex]);
                rightIndex++;
            }
        }

        return sorted.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    };

    return merge(mergeSort(left), mergeSort(right));
}

// Higher-order function to memoize the mergeSort algorithm
function memoizeMergeSort() {
    const cache = {};

    return function (array) {
        const arrayString = JSON.stringify(array);

        if (cache.hasOwnProperty(arrayString)) {
            console.log('Using Memoized Result for:', arrayString);
            return cache[arrayString];
        }

        const sortedArray = mergeSort(array);
        cache[arrayString] = sortedArray;

        return sortedArray;
    };
}

// Usage example:
const unsortedArray = generateRandomArray(1000);
const memoizedMergeSort = memoizeMergeSort();
const sortedArray = memoizedMergeSort(unsortedArray);

console.log('Unsorted Array:', unsortedArray);
console.log('Sorted Array:', sortedArray);
console.log('Is Sorted:', isSorted(sortedArray));
console.log('Complex code execution completed!');

// ...Additional complex code can be added here...

// End of complex_code.js
Note: The length of the code may vary based on the specific implementation and additional functionality added, so you can further extend the code as needed for your desired level of complexity.
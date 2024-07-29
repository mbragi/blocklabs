// Create a function that takes in two arrays of numbers and returns a number.
function findMedianSortedArrays(arr1: number[], arr2: number[]): number {
    // Concatenate the two arrays and sort them in ascending
    const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);

    let result: number = 0;
    const length = mergedArray.length;
    const isEven = length % 2 === 0;
    const isOdd = length % 2 !== 0;
    // If the length of the new array is even, return the average of the two middle numbers
    if (isEven) {
        const middleIndex = length / 2;
        result = (mergedArray[middleIndex] + mergedArray[middleIndex - 1]) / 2;
    }
    if (isOdd) {
        // If the length of the new array is odd, return the middle number
        const middleIndex = Math.floor(length / 2);
        result = mergedArray[middleIndex];
    }
    return result;
};

// Test cases
// Example 1
console.log(findMedianSortedArrays([1, 3], [2])); // 2
// Example 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
// Fuzz test
console.log(findMedianSortedArrays([76, 57, 19, 87, 62, 23, 87], [57, 10, 2, 40, 40, 35, 36, 59, 43, 7, 98, 90, 33, 11])); // 40
console.log(findMedianSortedArrays([67, 47, 63, 40, 29, 65, 100, 7, 69, 57, 59, 36, 68, 33, 16], [7, 10, 45, 21, 71, 27, 97, 73, 25])); // 46

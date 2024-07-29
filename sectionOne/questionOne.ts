// 1. Create a function that takes in two arrays of numbers and returns a number.
// 2. Sort the two arrays in ascending order.
// 3. Create a new array by merging the two arrays.
// 4. Check if the length of the new array is even.
// 5. If the length of the new array is even, return the average of the two middle numbers.
// 6. If the length of the new array is odd, return the middle number.
// 7. Return the result.


function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
    const length = mergedArray.length;
    return length % 2 === 0 ? (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2 : mergedArray[Math.floor(length / 2)];
};

// Test cases
// Example 1
console.log(findMedianSortedArrays([1, 3], [2])); // 2
// Example 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
// Fuzz test
console.log(findMedianSortedArrays([76, 57, 19, 87, 62, 23, 87], [57, 10, 2, 40, 40, 35, 36, 59, 43, 7, 98, 90, 33, 11])); // 40
console.log(findMedianSortedArrays([67, 47, 63, 40, 29, 65, 100, 7, 69, 57, 59, 36, 68, 33, 16], [7, 10, 45, 21, 71, 27, 97, 73, 25])); // 46

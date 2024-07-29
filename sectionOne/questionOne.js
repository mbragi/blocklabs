"use strict";
// 1. Median of Two Sorted Arrays
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of
// the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).
// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
// Fuzz data:
// [76, 57, 19, 87, 62, 23, 87]
// [57, 10, 2, 40, 40, 35, 36, 59, 43, 7, 98, 90, 33, 11]
// [67, 47, 63, 40, 29, 65, 100, 7, 69, 57, 59, 36, 68, 33, 16]
// [7, 10, 45, 21, 71, 27, 97, 73, 25]
// Constraints:
// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106 
// 1. Create a function that takes in two arrays of numbers and returns a number.
// 2. Sort the two arrays in ascending order.
// 3. Create a new array by merging the two arrays.
// 4. Check if the length of the new array is even.
// 5. If the length of the new array is even, return the average of the two middle numbers.
// 6. If the length of the new array is odd, return the middle number.
// 7. Return the result.
function findMedianSortedArrays(nums1, nums2) {
    const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
    const length = mergedArray.length;
    return length % 2 === 0 ? (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2 : mergedArray[Math.floor(length / 2)];
}
;
// Test cases
console.log(findMedianSortedArrays([1, 3], [2])); // 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
console.log(findMedianSortedArrays([76, 57, 19, 87, 62, 23, 87], [57, 10, 2, 40, 40, 35, 36, 59, 43, 7, 98, 90, 33, 11])); // 40
console.log(findMedianSortedArrays([67, 47, 63, 40, 29, 65, 100, 7, 69, 57, 59, 36, 68, 33, 16], [7, 10, 45, 21, 71, 27, 97, 73, 25])); // 40

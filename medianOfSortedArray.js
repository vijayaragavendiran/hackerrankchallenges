// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).
var findMedianSortedArrays = function (nums1, nums2) {
  var merged = [...nums1, ...nums2].sort((a, b) => a - b);
  let mid = Math.floor((merged.length - 1) / 2);
  if (merged.length % 2 === 0) {
    return (merged[mid] + merged[mid + 1]) / 2;
  }

  return merged[mid];
};
console.log(findMedianSortedArrays([1, 2], [3]));

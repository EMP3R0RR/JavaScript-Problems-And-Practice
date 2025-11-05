// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

var nums1= [1,4,8];
var nums2= [2,3];
var sum = nums1.concat(nums2);
sum.sort((a, b) => a - b);
console.log(sum);
var len= sum.length;
console.log (len);

if (sum.length % 2 == 1)
{
    console.log("odd");
    let median = sum[Math.floor(len/2)];
    console.log(median);
}
else 
{
    console.log("even");
    let Mval1 = sum[Math.floor(len/2)-1];
    let Mval2 =sum[Math.floor(len/2)];
    let median = Mval1+Mval2;
    let val= median/2;
    console.log(val)
}
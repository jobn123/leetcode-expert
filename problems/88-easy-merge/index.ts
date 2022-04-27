export function merge (nums1: number[], m: number, nums2: number[], n: number): number[] {
  let i = nums1.length

  while (n > 0) {
    if (m > 0 && nums1[m - 1] > nums2[n - 1]) {
      nums1[--i] = nums1[--m]
    } else {
      nums1[--i] = nums2[--n]
    }
  }

  return nums1
};
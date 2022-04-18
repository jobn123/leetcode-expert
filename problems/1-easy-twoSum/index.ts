
/**
 * 暴力求解 两层循环
 */
export function twoSum (nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target - nums[i] == nums[j]) {
        return [i, j]
      }
    }
  }
  return []
}

/**
 * 创建一个Map遍历的时候从Map里面找值，如果有返回下标，如果没有将值跟下标存到Map里
 */
export function twoSum2 (nums: number[], target: number): number[] {
  let map = new Map()
  for (let i = 0, len = nums.length; i < len; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    } else {
      map.set(nums[i], i)
    }
  }
  return null
}
import { expect, test } from 'vitest'
import { climbStairs2 } from './70-easy-climbStairs'

test("爬楼梯", () => {
  expect(climbStairs2(1)).toBe(1)
  expect(climbStairs2(2)).toBe(2)
  expect(climbStairs2(3)).toBe(3)
  expect(climbStairs2(4)).toBe(5)
  expect(climbStairs2(5)).toBe(8)
})
import { expect, test } from 'vitest'
import { climbStairs3 } from './70-easy-climbStairs'

test("爬楼梯", () => {
  expect(climbStairs3(1)).toBe(1)
  expect(climbStairs3(2)).toBe(2)
  expect(climbStairs3(3)).toBe(3)
  expect(climbStairs3(4)).toBe(5)
  expect(climbStairs3(5)).toBe(8)
})
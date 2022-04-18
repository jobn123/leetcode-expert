import { expect, test } from 'vitest'
import { twoSum } from '.'

test("两数之和", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
  expect(twoSum([2, 7, 11, 15, 16], 31)).toEqual([3, 4])
  expect(twoSum([2, 7, 11, 15, 16], 18)).toEqual([0, 4])
})
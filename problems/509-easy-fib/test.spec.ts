import { expect, test } from 'vitest'
import { fib } from './'

test("斐波那契数", () => {
  expect(fib(1)).toBe(1)
  expect(fib(2)).toBe(1)
  expect(fib(3)).toBe(2)
  expect(fib(4)).toBe(3)
})
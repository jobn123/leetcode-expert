// 与70题爬楼梯基本一致

export const fib = (n: number): number => {
  if (n <= 2) return 1

  let pre = 1
  let prePre = 1
  let sum = pre + prePre;

  for (let i = 3; i < n; i++) {
    prePre = pre
    pre = sum
    sum = pre + prePre
  }

  return sum
}
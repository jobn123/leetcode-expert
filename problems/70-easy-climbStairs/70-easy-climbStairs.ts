export const climbStairs = (n: number): number => {
  if (n < 3) return n

  let dp = [1, 2]
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n - 1];
}

export const climbStairs2 = (n: number, memo = []): number => {
  if (n < 3) return n

  if (memo[n] !== undefined) {
    return memo[n];
  }

  let res = climbStairs2(n - 1, memo) + climbStairs2(n - 2, memo);
  memo[n] = res;
  return res;
}
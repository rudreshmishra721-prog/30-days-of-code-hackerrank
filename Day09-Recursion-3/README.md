# Day 09 – Recursion 3

🔗 [View the problem on HackerRank](https://www.hackerrank.com/challenges/30-recursion/problem?isFullScreen=true)

## 📘 Problem Summary
The challenge is to:
- Read an integer `n`.
- Compute the factorial of `n` using recursion.
- Print the result.

Factorial definition:
```
factorial(0) = 1
factorial(n) = n × factorial(n-1) for n > 0
```

## 💡 My Approach
- Used a **recursive function** `factorial(n)`:
  - Base case: If `n <= 1`, return `1`.
  - Recursive case: Return `n * factorial(n - 1)`.
- Read `n` from input and printed the computed factorial.

## ✅ Status
Solved and passed all test cases on HackerRank.

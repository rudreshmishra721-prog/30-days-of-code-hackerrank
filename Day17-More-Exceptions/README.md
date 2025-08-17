# Day 17 – More Exceptions

🔗 [View the problem on HackerRank](https://www.hackerrank.com/challenges/30-more-exceptions/problem?isFullScreen=true)

## 📘 Problem Summary
The task is to:
- Implement a `Calculator` class with a method `power(n, p)`.
- The method should return `n^p` (n raised to the power of p).
- If either `n` or `p` is negative, throw an exception with the message:
  ```
  n and p should be non-negative
  ```

## 💡 My Approach
- Created a `Calculator` function with the method `power(n, p)`.
- Used `Math.pow(n, p)` to calculate the power.
- Added a condition to **throw an exception** if `n < 0` or `p < 0`.
- Used `try...catch` in `main()` to handle exceptions and print error messages gracefully.

## ✅ Status
✅ Solved and passed all test cases on HackerRank.

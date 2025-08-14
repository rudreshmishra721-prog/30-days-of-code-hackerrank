# Day 14 – Scope

🔗 [View the problem on HackerRank](https://www.hackerrank.com/challenges/30-scope/problem?isFullScreen=true)

## 📘 Problem Summary
The challenge is to:
- Create a class `Difference` that:
  - Takes an array of integers as input.
  - Has a property `maximumDifference`.
  - Has a method `computeDifference()` to find the **maximum absolute difference** between any two elements in the array.

## 💡 My Approach
- Stored the given array in the `elements` property.
- Used two nested loops to:
  - Compare each pair of elements.
  - Calculate the absolute difference using `Math.abs()`.
  - Update `maximumDifference` if the current difference is greater than the previous maximum.
- Finally, printed the value of `maximumDifference`.

## ✅ Status
Solved and passed all test cases on HackerRank.

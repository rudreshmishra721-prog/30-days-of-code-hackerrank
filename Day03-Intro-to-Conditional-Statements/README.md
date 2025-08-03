# Day 03 – Intro to Conditional Statements

🔗 [View the problem on HackerRank](https://www.hackerrank.com/challenges/30-conditional-statements/problem?isFullScreen=true)

## 📘 Problem Summary
The challenge is to:
- Read an integer `n` from input.
- Apply a set of conditions to determine if the output should be `"Weird"` or `"Not Weird"`.

The conditions are:
- If `n` is odd → print `"Weird"`.
- If `n` is even and in the range `2` to `5` (inclusive) → print `"Not Weird"`.
- If `n` is even and in the range `6` to `20` (inclusive) → print `"Weird"`.
- If `n` is even and greater than `20` → print `"Not Weird"`.

This problem focuses on control flow and conditional logic.

## 💡 My Approach
- Checked whether `n` is odd using `n % 2 !== 0`.
- Used `else if` conditions to handle all the ranges for even numbers.
- Printed the appropriate message based on the condition.

## ✅ Status
Solved and passed all test cases on HackerRank.

# Day 16 – Exceptions: String to Integer

🔗 [View the problem on HackerRank](https://www.hackerrank.com/challenges/30-exceptions-string-to-integer/problem?isFullScreen=true)

## 📘 Problem Summary
The task is to:
- Read a string `S` from input.
- Convert it into an integer using proper parsing.
- If the string cannot be converted into an integer, print `"Bad String"` instead of throwing an error.

## 💡 My Approach
- Used `Number(S)` to attempt converting the string to a number.
- Checked if conversion was valid with `isNaN`.
- Wrapped the conversion in a `try...catch` block:
  - If conversion succeeded, printed the number.
  - If it failed, caught the error and printed `"Bad String"`.

## ✅ Status
✅ Solved and passed all test cases on HackerRank.


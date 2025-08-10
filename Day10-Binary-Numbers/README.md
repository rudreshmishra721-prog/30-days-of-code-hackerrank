# Day 10 – Binary Numbers

🔗 [View the problem on HackerRank](https://www.hackerrank.com/challenges/30-binary-numbers/problem?isFullScreen=true)

## 📘 Problem Summary
The challenge is to:
- Read an integer `n`.
- Convert it to its binary representation.
- Determine the **maximum number of consecutive `1`s** in the binary string.
- Print that maximum streak.

Example:
```
n = 13 → binary = 1101 → longest streak of 1's = 2
```

## 💡 My Approach
- Used `n.toString(2)` to convert the number into binary format.
- Initialized two counters:
  - `currentStreak` – tracks the current sequence of consecutive `1`s.
  - `longestStreak` – keeps the maximum sequence found.
- Iterated over the binary string:
  - If the character is `"1"`, increment `currentStreak`.
  - If it's `"0"`, reset `currentStreak` to 0.
  - Updated `longestStreak` if `currentStreak` exceeded it.
- Printed `longestStreak` as the final result.

## ✅ Status
Solved and passed all test cases on HackerRank.

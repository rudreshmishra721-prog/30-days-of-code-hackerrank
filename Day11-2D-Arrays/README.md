# Day 11 – 2D Arrays

🔗 [View the problem on HackerRank](https://www.hackerrank.com/challenges/30-2d-arrays/problem?isFullScreen=true)

## 📘 Problem Summary
The challenge is to:
- Read a **6x6** 2D array of integers.
- Identify all possible **hourglass shapes** in the array.
- Find and print the **maximum hourglass sum**.

**Hourglass shape:**
```
a b c
  d
e f g
```

Example:
If the array contains:
```
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0
```
The maximum hourglass sum is `19`.

## 💡 My Approach
- Read the input into a 6x6 matrix.
- Initialized `maxSum` to `-Infinity` (to handle negative values in the array).
- Used **nested loops** to iterate from `(0,0)` to `(3,3)` as the starting point of each hourglass.
- Calculated the sum for each hourglass:
  - Top: `arr[i][j] + arr[i][j+1] + arr[i][j+2]`
  - Middle: `arr[i+1][j+1]`
  - Bottom: `arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]`
- Updated `maxSum` if the current hourglass sum was greater.
- Printed `maxSum` as the final result.

## ✅ Status
Solved and passed all test cases on HackerRank.

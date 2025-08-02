# Day 02 – Operators

🔗 [View the problem on HackerRank](https://www.hackerrank.com/challenges/30-operators/problem?isFullScreen=true)

## 📘 Problem Summary
The challenge is to:
- Calculate the total meal cost including tip and tax.
- You're given the meal cost, tip percentage, and tax percentage as inputs.
- Print the total cost rounded to the nearest integer.

This problem builds on working with numbers, arithmetic, and rounding in JavaScript.

## 💡 My Approach
- Calculated tip as `meal_cost * (tip_percent / 100)`.
- Calculated tax as `meal_cost * (tax_percent / 100)`.
- Added all three to get the `total_cost`.
- Used `Math.round()` to round the final amount before printing.

## ✅ Status
Solved and passed all test cases on HackerRank.


# Day 19 – Interfaces

🔗 [View the problem on HackerRank](https://www.hackerrank.com/challenges/30-interfaces/problem?isFullScreen=true)

## 📘 Problem Summary
We are asked to implement an **interface** `AdvancedArithmetic` with a method:
- `divisorSum(n)` → returns the sum of all divisors of a given integer `n`.

### 🔍 Requirements:
- Define an interface `AdvancedArithmetic`.
- Create a class `Calculator` that **implements** the interface.
- Implement the `divisorSum` method to calculate the sum of divisors.

## 💡 My Approach
- Simulated the interface in TypeScript.
- Implemented `Calculator` class with the `divisorSum` method.
- Used a simple loop from `1` to `n`:
  - Checked if `i` is a divisor of `n`.
  - If yes → added it to `sum`.
- Returned the final `sum`.

## Example
```
Input: 6
Divisors: 1, 2, 3, 6
Output:
I implemented: AdvancedArithmetic
12
```

## ✅ Status
✅ Successfully solved and passed all test cases.

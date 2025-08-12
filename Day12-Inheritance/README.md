# Day 12 – Inheritance

🔗 [View the problem on HackerRank](https://www.hackerrank.com/challenges/30-inheritance/problem?isFullScreen=true)

## 📘 Problem Summary
The challenge is to:
- Create a `Student` class that inherits from a given `Person` class.
- Add a method `calculate()` that determines a student's grade based on their test scores.
- Grade scale:
  - `O` (Outstanding): 90 ≤ avg ≤ 100
  - `E` (Exceeds Expectations): 80 ≤ avg < 90
  - `A` (Acceptable): 70 ≤ avg < 80
  - `P` (Poor): 55 ≤ avg < 70
  - `D` (Dreadful): 40 ≤ avg < 55
  - `T` (Troll): avg < 40

## 💡 My Approach
- Used **class inheritance** with `extends` to create `Student` from `Person`.
- Called `super()` in the `Student` constructor to initialize `firstName`, `lastName`, and `idNumber`.
- Stored the `scores` array in the `Student` instance.
- Implemented `calculate()`:
  - Computed the average score using `reduce()` for summation.
  - Returned the grade character according to the given grading scale.

## ✅ Status
Solved and passed all test cases on HackerRank.

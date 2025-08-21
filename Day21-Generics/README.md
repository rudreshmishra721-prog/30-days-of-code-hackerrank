# Day 21 – Generics

🔗 [View the problem on HackerRank](https://www.hackerrank.com/challenges/30-generics/problem?isFullScreen=true)

## 📘 Problem Summary
We need to implement a **generic function** that can print elements of an array, regardless of its type (e.g., integers, strings).  
Generics allow us to write flexible and reusable code that works with different data types without rewriting logic.

---

## 💡My Approach
- Created a **generic function** `printArray<T>(arr: T[]): void`:
  - Accepts an array of any type (`T`).
  - Loops through the array and prints each element on a new line.
- Tested the function with:
  - An array of numbers.
  - An array of strings.


---

## ✅ Status
✅ Successfully solved and passed all test cases.

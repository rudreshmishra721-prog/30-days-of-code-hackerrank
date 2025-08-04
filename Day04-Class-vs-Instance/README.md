# Day 04 – Class vs Instance

🔗 [View the problem on HackerRank](https://www.hackerrank.com/challenges/30-class-vs-instance/problem?isFullScreen=true)

## 📘 Problem Summary
The challenge is to:
- Implement a `Person` class with a constructor that accepts an initial age.
- The constructor should validate that the age is not negative.
- Implement two methods:
  - `amIOld()` to print whether the person is young, a teenager, or old.
  - `yearPasses()` to increment the person’s age.

This problem introduces the concept of classes, constructors, and object behavior.

## 💡 My Approach
- Validated the `initialAge` and reset it to `0` if negative.
- Defined methods inside the constructor:
  - `amIOld()` uses conditional checks on `this.age`.
  - `yearPasses()` increases the `this.age` value by 1.

## ✅ Status
Solved and passed all test cases on HackerRank.


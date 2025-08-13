# Day 13 – Abstract Classes

🔗 [View the problem on HackerRank](https://www.hackerrank.com/challenges/30-abstract-classes/problem?isFullScreen=true)

## 📘 Problem Summary
The challenge is to:
- Implement a `MyBook` class that **extends** an existing abstract `Book` class.
- The `Book` class contains:
  - Properties: `title`, `author`
  - An abstract method: `display()`
- `MyBook` should:
  - Inherit `title` and `author` from `Book`.
  - Have an additional property: `price`.
  - Implement the `display()` method to print the details of the book.

## 💡 My Approach
- Used **class inheritance** with `extends` to create `MyBook` from `Book`.
- Called `super()` in the constructor to initialize `title` and `author`.
- Added a new property `price` in the `MyBook` constructor.
- Implemented the `display()` method:
  - Printed `Title:`, `Author:`, and `Price:` each on a new line using `console.log`.

## ✅ Status
Solved and passed all test cases on HackerRank.

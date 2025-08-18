# Day 18 – Queues and Stacks

🔗 [View the problem on HackerRank](https://www.hackerrank.com/challenges/30-queues-stacks/problem?isFullScreen=true)

## 📘 Problem Summary
We need to determine whether a given string is a **palindrome** (reads the same forwards and backwards) using:
- A **stack** (Last-In-First-Out).
- A **queue** (First-In-First-Out).

### 🔍 Requirements:
- Implement methods to:
  - `pushCharacter(ch)` → push a character onto the stack.
  - `enqueueCharacter(ch)` → add a character to the queue.
  - `popCharacter()` → pop a character from the stack.
  - `dequeueCharacter()` → remove a character from the queue.
- Compare characters popped from stack and dequeued from queue to check for palindrome.

## 💡 My Approach
- Created a `Solution` class holding:
  - `stack` → implemented using an array.
  - `queue` → implemented using an array.
- Used `pushCharacter` and `enqueueCharacter` to store characters.
- Used `popCharacter` and `dequeueCharacter` to retrieve them.
- Compared characters one by one for half of the string’s length.
- If all matched → string is a palindrome, else not.

## Example
```
Input: racecar
Output: The word, racecar, is a palindrome.
```

## ✅ Status
✅ Successfully solved and passed all test cases.

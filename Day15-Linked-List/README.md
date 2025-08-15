# Day 15 – Linked List

🔗 [View the problem on HackerRank](https://www.hackerrank.com/challenges/30-linked-list/problem?isFullScreen=true)

## 📘 Problem Summary
The challenge is to:
- Implement an `insert` method for a singly linked list.
- The method should:
  - Take the head of the list and a `data` value as inputs.
  - Insert the new node at the **end** of the list.
  - Return the head of the updated list.

## 💡 My Approach
- Created a new `Node` with the given `data`.
- Checked if the linked list is empty (`head` is `null`):
  - If yes, the new node becomes the head.
- If the list is not empty:
  - Traversed the list until reaching the last node.
  - Linked the last node's `next` to the new node.
- Returned the head of the updated list.

## ✅ Status
Solved and passed all test cases on HackerRank.


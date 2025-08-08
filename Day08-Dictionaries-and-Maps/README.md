# Day 08 – Dictionaries and Maps

🔗 [View the problem on HackerRank](https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem?isFullScreen=true)

## 📘​ Problem Summary
The challenge is to:
- Read an integer `n`, the number of entries in a phone book.
- For the next `n` lines, record name-number pairs.
- Then, process query names until end of input:
  - If the name exists in the phone book, print `name=phoneNumber`.
  - Otherwise, print `Not found`.

This problem focuses on using objects (dictionaries) to store and retrieve data efficiently.

## 💡​ My Approach
- Stored entries in a JavaScript object (`phoneBook`) with names as keys and numbers as values.
- After reading the entries, iterated over remaining inputs as queries.
- Used `hasOwnProperty` to check for the queried name:
  - If found, printed `name=number`.
  - If not, printed `Not found`.

## ✅​ Status
Solved and passed all test cases on HackerRank.


# Day29-Bitwise-AND

🔗 [View the problem on HackerRank](https://www.hackerrank.com/challenges/Day29-Bitwise-AND/problem)

---

## 📘 Problem Summary
Given integers `N` and `K`:
- Find the **maximum value of `A & B`** (bitwise AND) such that:
  - `1 ≤ A < B ≤ N`
  - Result `< K`.

---

## 💡 My Approach
- First I thought of checking all pairs `(A, B)` using loops → but that would be **O(N²)** and too slow for large inputs.
- Then I realized:
  - The maximum possible result should be close to `K-1`.
  - If `(K-1)` can be achieved by some pair within the limit `N`, that’s the answer.
  - Otherwise, the next possible answer is `K-2`.
- To check achievability, I used the trick:
  ```
  if ((K - 1) | K) <= N → answer = K - 1
  else → answer = K - 2
  ```

---

## Key Insight
- Brute force = **O(N²)** → too slow.
- Instead:
  - The best possible answer is `K-1` (largest number below `K`).
  - Check if `(K-1) | K <= N`:
    - If true → `K-1` is achievable.
    - Else → best possible is `K-2`.

---

## Pseudocode
```
function bitwiseAnd(N, K):
    if ((K-1) | K) <= N:
        return K-1
    else:
        return K-2
```

---

## Example Input
```
3
5 2
8 5
2 2
```

## Example Output
```
1
4
0
```

---

## Key Learning
- Bitwise optimization replaces brute force.
- The **`|` (bitwise OR)** trick helps check if `K-1` is achievable.
- Always aim for patterns rather than testing every pair.

---

## ✅ Status
✅ Successfully solved and passed all test cases.  
🎉 Completed **30 Days of Code** – Full Journey Done!

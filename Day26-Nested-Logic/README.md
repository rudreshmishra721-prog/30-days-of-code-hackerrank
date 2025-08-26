# Day 26 – Nested Logic

🔗 [View the problem on HackerRank](https://www.hackerrank.com/challenges/30-nested-logic/problem)

## 📘 Problem Summary
You are given two dates:
- **Returned date** (when the book was actually returned).
- **Due date** (the expected return date).

You must calculate the **library fine** using the following rules:
1. If the book is returned on or before the due date → **Fine = 0**.
2. If returned late but within the same month and year → **Fine = 15 × (days late)**.
3. If returned late but within the same year → **Fine = 500 × (months late)**.
4. If returned in a later year → **Fine = 10000**.

---

## 💡 My Approach
- Parse both return date and due date.
- Compare **years → months → days** in order of priority.
- Assign fine based on the rules above.

---

## Pseudocode
```
read return_date (d1, m1, y1)
read due_date (d2, m2, y2)

fine = 0
if y1 > y2:
    fine = 10000
else if y1 == y2:
    if m1 > m2:
        fine = 500 × (m1 - m2)
    else if m1 == m2 and d1 > d2:
        fine = 15 × (d1 - d2)

print fine
```

---

## Example
### Input
```
9 6 2015
6 6 2015
```

### Output
```
45
```

Explanation: Returned **3 days late in the same month**, so fine = `15 × 3 = 45`.

---

## Key Learning
- Always compare **year → month → day** in hierarchical order.
- Nested conditions are a clean way to handle multi-level logic.
- Simple but important real-world problem for **date comparisons**.

---

## ✅ Status
✅ Successfully solved and tested.

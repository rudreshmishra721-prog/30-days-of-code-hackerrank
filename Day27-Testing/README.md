# Day27-Testing

🔗 [View the problem on HackerRank](https://www.hackerrank.com/challenges/Day27-Testing/problem)


## 📘 Problem Summary
In this challenge, we practice **unit testing**.  
We are given a function `minimum_index(seq)` that finds the index of the minimum element in an array.  
We need to:
- Write test data providers (classes returning arrays).
- Verify correctness of the function using these test cases.

---

## 💡 My Approach
- Implemented `minimum_index` to scan the array and return the index of the smallest element.
- Created **3 test data classes**:
  1. **Empty array** → should throw an error.
  2. **Unique values** → check if returned index matches expected result.
  3. **Exactly two minimums** → ensure it returns the index of the *first* occurrence.
- Wrote test runner functions to validate results and throw errors if conditions fail.

---

## Pseudocode
```
function minimum_index(seq):
    if seq is empty:
        throw error
    minIdx = 0
    for i in seq:
        if seq[i] < seq[minIdx]:
            minIdx = i
    return minIdx

class TestDataEmptyArray:
    return []

class TestDataUniqueValues:
    return [5, 10, 3, 7]
    expected_result = 2

class TestDataExactlyTwoDifferentMinimums:
    return [4, 2, 6, 2, 9]
    expected_result = 1
```

---

## Example Output
```
OK
```

This indicates all test cases passed.

---

## Key Learning
- **Unit testing** is critical in software development.
- Cover **edge cases** (empty input), **normal cases** (unique values), and **tricky cases** (duplicate minimums).
- Helps build **robust, bug-free code**.

---

## ✅ Status
✅ Successfully implemented and passed all test cases.

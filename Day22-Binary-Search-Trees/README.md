# Day 22 – Binary Search Trees

🔗 [View the problem on HackerRank](https://www.hackerrank.com/challenges/30-binary-search-trees/problem?isFullScreen=true)

## 📘 Problem Summary
We need to:
1. Build a **Binary Search Tree (BST)** by inserting given integers.
2. Find the **height of the tree**.  
   - The height is the number of edges on the longest path from the root to a leaf.
   - An empty tree has a height of `-1`.

---

## 💡 My Approach
- Created a **`Node`** class with `data`, `left`, and `right` properties.
- Built a **`BinarySearchTree`** class with two methods:
  - `insert(root, data)` → Inserts data into the correct position of the BST.
  - `getHeight(root)` → Uses recursion to:
    - Return `-1` if the tree is empty.
    - Recursively calculate the height of left and right subtrees.
    - Return the maximum of both heights plus `1`.

---

## Example
### Input
```
7
3 5 2 1 4 6 7
```

### Visualization of BST
```
       3
      / \
     2   5
    /   / \
   1   4   6
              \
               7
```

### Output
```
3
```

---

## Key Learning
- **BST insertion** ensures values smaller go to the left, larger go to the right.
- **Tree height** is best solved recursively by comparing left and right subtree depths.
- Returning `-1` for `null` helps calculate height correctly (leaf node = 0).

---

## ✅ Status
✅ Successfully solved and passed all test cases.

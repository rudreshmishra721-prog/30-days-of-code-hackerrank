# Day23-BST-Level-Order-Traversal

🔗 [View the problem on HackerRank](https://www.hackerrank.com/challenges/Day23-BST-Level-Order-Traversal/problem)

## 📘  Problem Summary
We are given integers to build a **Binary Search Tree (BST)**.  
The task is to perform a **level-order traversal** (Breadth-First Search, BFS) of the tree and print the values in order.

- In **level-order traversal**, we visit nodes level by level:
  1. Visit the root.
  2. Traverse all nodes of the left and right children.
  3. Continue this process level by level.

---

## 💡 My Approach
- Implemented a `Node` class to represent each tree node.
- Built a `BinarySearchTree` class with:
  - `insert(root, data)` → Inserts a new value into the BST.
  - `levelOrder(root)` → Prints nodes in BFS order.
    - Used a **queue** to store nodes.
    - Dequeued one by one, printed its value, then enqueued its children.

---

## Example
### Input
```
6
3 5 4 7 2 1
```

### BST Structure
```
       3
      / \
     2   5
    /   / \
   1   4   7
```

### Level Order Traversal
```
3 2 5 1 4 7
```

---

## Key Learning
- **Level-order traversal** = **Breadth-First Search (BFS)**.
- A **queue** is the best structure to implement BFS in trees.
- This traversal is useful when you need to process nodes level by level (e.g., shortest path problems in unweighted graphs/trees).

---

## ✅ Status
✅ Successfully solved and passed all test cases.


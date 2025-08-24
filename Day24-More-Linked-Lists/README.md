# Day 24 – More Linked Lists (Remove Duplicates)

🔗 [View the problem on HackerRank](https://www.hackerrank.com/challenges/30-linked-list-deletion/problem?isFullScreen=true)

## 📘 Problem Summary
We are given a **sorted linked list** and need to remove duplicate nodes so that only distinct elements remain.  
Duplicates appear consecutively because the list is sorted.

---

## 💡 My Approach
- Defined a `Node` class for linked list nodes.
- Implemented a `Solution` class with:
  - `insert(head, data)` → Inserts data into the linked list.
  - `display(head)` → Prints the linked list.
  - `removeDuplicates(head)` → Removes consecutive duplicate nodes.

### Logic for Removing Duplicates
1. Start from the head node.
2. Compare `current.data` with `current.next.data`.
3. If they are equal → skip the duplicate (`current.next = current.next.next`).
4. Otherwise → move to the next node.
5. Continue until the end of the list.

---

## Example
### Input
```
6
1
2
2
3
3
4
```

### Linked List Before
```
1 → 2 → 2 → 3 → 3 → 4
```

### Linked List After
```
1 → 2 → 3 → 4
```

---

## Key Learning
- **Sorted property** helps: duplicates always appear **next to each other**.
- Instead of creating a new list, we can modify the existing one in-place.
- Important linked list operation: skipping nodes by re-pointing `next`.

---

## ✅ Status
✅ Successfully solved and passed all test cases.

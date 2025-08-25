# Day25-Running-Time-and-Complexity

🔗 [View the problem on HackerRank](https://www.hackerrank.com/challenges/Day25-Running-Time-and-Complexity/problem)
 

## 📘  Problem Summary
We are asked to determine if a given number `n` is **prime** or **not prime**.  
The task must be efficient because `n` can be as large as **10⁹**.

---

## 💡 My Approach
- Wrote a helper function `isPrime(n)` to check primality.
- Optimized the prime check:
  1. Handle edge cases (`n <= 1`, `n = 2 or 3`).
  2. Eliminate multiples of 2 and 3 early.
  3. Only check possible divisors up to `√n`.
  4. Use the `6k ± 1` optimization: all primes > 3 are of the form `6k ± 1`.

---

## Pseudocode
```
function isPrime(n):
    if n <= 1 → return false
    if n is 2 or 3 → return true
    if divisible by 2 or 3 → return false
    
    for i = 5 to sqrt(n) step 6:
        if n % i == 0 or n % (i + 2) == 0:
            return false
    
    return true
```

---

## Example
### Input
```
3
12
5
7
```

### Output
```
Not prime
Prime
Prime
```

---

## Key Learning
- Checking divisibility up to `√n` is much faster than checking up to `n`.
- The `6k ± 1` rule reduces unnecessary checks further.
- Efficient prime testing is important for **competitive programming** and **cryptography**.

---

## ✅ Status
✅ Successfully solved and optimized for large inputs.


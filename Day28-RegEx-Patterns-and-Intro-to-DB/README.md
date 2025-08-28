# Day28-RegEx-Patterns-and-Intro-to-DB

🔗 [View the problem on HackerRank](https://www.hackerrank.com/challenges/Day28-RegEx-Patterns-and-Intro-to-DB/problem)


## 📘 Problem Summary
We are given a list of `N` names and email addresses.  
Our task is to:
- Identify users whose email ends with `@gmail.com`.
- Collect their first names.
- Sort the names alphabetically and print them.

---

## 💡My Approach
- Used **regular expressions** to check if an email belongs to Gmail:
  ```js
  if (/@gmail\.com$/.test(emailID)) { ... }
  ```
- Stored all valid Gmail users’ first names in an array.
- Sorted the array alphabetically.
- Printed each name in a new line.

---

## Pseudocode
```
read integer N
create empty list names

loop N times:
    read firstName and emailID
    if emailID ends with "@gmail.com":
        add firstName to names

sort names alphabetically
print each name
```

---

## Example Input
```
6
riya riya@gmail.com
julia julia@julia.me
julia sjulia@gmail.com
julia julia@gmail.com
samantha samantha@gmail.com
tanya tanya@gmail.com
```

## Example Output
```
julia
julia
riya
samantha
tanya
```

---

## Key Learning
- **Regex** is a powerful tool to filter text patterns.
- Sorting ensures ordered results.
- Simple checks like `@gmail\.com$` are useful for validation.

---

## ✅ Status
✅ Successfully solved and passed all test cases.

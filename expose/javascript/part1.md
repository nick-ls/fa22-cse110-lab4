# Part 1
1) Line 9 prints `values added: 20`
2) Line 13 prints `final result: 20`
3) Line 9 prints `values added: 20`
4) There is an error because the `result` variable has gone out of its scope of the `if` block, so the variable `result` doesn't exist in the top level scope of the `sumValues` function.
5) The code errors since the code is trying to reassign a `const` variable, which is not allowed.
6) The code errors because the `const` variable is both defined out of scope, and because the code is trying to reassign its value.
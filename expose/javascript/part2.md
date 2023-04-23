# Part 2
1) Line 12 prints `3` out to the console because the variable `i` is declared using the `var` keyword, which makes function-scoped variables. Thus, since the `console.log` statement is within the function, `i` is in its scope, so it does not error and prints the value of `i`, which is set to the length of the `prices` array that was passed into the funciton. 
2) On line 13, it prints `150`. This is because `var` creates function-scoped variables, so the `console.log` has access to the value of `discountedPrice` after the for-loop ends. `discountedPrice` is overwritten for each iteration of the for loop, and so its value will just be the value it is set to after the last iteration of the loop. Since the last element in prices that it processes is `300`, it applies the 50% discount and sets the value to `150`.
3) On line 14, it prints `150` again. This is because of `var` function-scoping, and because the value of `finalPrice` is overwritten after each iteration of the for loop. It is set to the 2-decimal-place rounded value of `discountedPrice`, which from the previous problem is known to be `150`. Thus, `finalPrice` is printed on line 14 as the value `150` (no rounding was necessary as it was already a whole number).
4) This function returns the array of prices (defined by the `prices` parameter) that result from taking a discount of `discount` off of each of them. For the example values, it outputs the array `[50,100,150]`, which is each of the input values with the given 50% off discount applied to each of them. It assumes that `prices` is an array of numbers and that `discount` is a number between 0 and 1 (though it works with other numbers, it's just that for discounts, it doesn't make too much sense for something to have a negative price or for something to be discounted to a higher price [though I am sure the latter happens more often than one might think]).
5) There is an error on line 12, since the variable `i` is block-scoped by the usage of `let` inside the `for` loop. The variable `i` is not defined when it is accessed on line 12.
6) As it was on line 12, the variable `discountedPrice` is defined in the `for` loop block, thus it is not accessible in blocks that are in a higher scope than it. When the `console.log` statement attempts to access the variable, it is not defined in the function scope.
7) Line 14 prints out `150`. This is because of the reasons denoted in question 3. Since `let` is being used to declare `finalPrice` it scopes the variable to the function block, and since the `console.log` statement is also in the same scope as the initial declaration of the `finalPrice` variable, its value is defined as the rounded value of the last discounted element in the `prices` array, and thus it can be printed.
8) This function returns the array of prices (defined by the `prices` parameter) that result from taking a discount of `discount` off of each of them. For the example values, it outputs the array `[50,100,150]`, which is each of the input values with the given 50% off discount applied to each of them.
9) There is an error, same as in question 5, since `i` is block-scoped to the `for` loop, it isn't defined in the outer scope, thus it throws an error.
10) The value of length is printed (`3` which is the length of the `prices` parameter array). This is allowed because `const` defines `length` in the function block scope, and thus it is accessible when it is being `console.log`-ged
11) This function will return the array `[50,100,150]`. This is because despite `discounted` being declared with `const`, pushing elements to the array doesn't reassign the value of `discounted`, which would be disallowed for a `const` variable. The underlying array is still able to be modified, and is returned.
12) Accessing object properties:
    1) `student.name`
	2) `student["Grad Year"]`
	3) `student.greeting()`
	4) `student["Favorite Teacher"].name`
	5) `student.courseLoad[0]`
13) Arithemetic: (quotes indicate string as answer)
    1) `"32"`
	2) `1`
	3) `3`
	4) `"3null"`
	5) `4`
	6) `0`
	7) `"3undefined"`
	8) `NaN`
14) Comparison:
    1) `true`
	2) `false`
	3) `true`
	3) `false`
	3) `false`
	3) `true`
15) The `===` operator is the strict equality operator, which means that it checks both type and value when comparing equality. The `==` operator is the regular(?) equality operator that does not check data type when comparing variables. Thus the string representation of `"2"` is equal to the number `2` when using the `==` operator, since the data types are first implicitly cast to the same type before comparison. 
16) [answer](./javascript/part2-question16.js)
17) The function `modifyArray` is essentially applying a function that multiplies each element by 2 to the entire array. This can be seen by the function call to `modifyArray`. It creates a new array, loops over the input array's elements, pushes the result of calling the `callback` function (which is `doSomething`, which multiplies the input value `num` by 2 and returns it) to the new array, which it returns. Thus elements in the new array are transformed by the callback function. The output is `[2,4,6]`.
18) [answer](./javascript/part2-question18.js)
19) The numbers `1 4 3 2` are each printed on a new line.
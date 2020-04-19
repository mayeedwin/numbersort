## Sorting Arrays
### Require the numbersort package

```js
let array = require('numbersort');
```
### Example array

```js
let numbers = [1, 5, 8, 4, 10, 30];
```

### Find the largest number in an array

```js
let largest = array.largestNumber(numbers);
```

### Find the smallest number in an array

```js
let smallest = array.smallestNumber(numbers);
```

### Sort an array of numbers in ascending manner

```js
let ascending = numbers.sort(array.Ascend);
```

### Sort an array of numbers in descending manner

```js
let descending = numbers.sort(array.Descend);
```
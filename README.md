## Sorting Arrays
### Require the numbersort package

```
let array = require('numbersort');
```
### Example array

```
let numbers = [1, 5, 8, 4, 10, 30];
```

### Find the largest number in an array

```
let largest = array.largestNumber(numbers);
```

### Find the smallest number in an array

```
let smallest = array.smallestNumber(numbers);
```

### Sort an array of numbers in ascending manner

```
let ascending = numbers.sort(array.Ascend);
```

### Sort an array of numbers in descending manner

```
let descending = numbers.sort(array.Descend);
```
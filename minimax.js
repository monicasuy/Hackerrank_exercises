function miniMaxSum(arr) {
    // Write your code here
    const sum = arr.map(num => {
      const result = arr.filter(value => {
        return arr.indexOf(value) !== arr.indexOf(num);
      });
      console.log(result);
      return result;
    });
    console.log(sum)
    const reduced = sum.map(array => array.reduce((previousValue, currentValue) => previousValue + currentValue));
    const max = Math.max(...reduced);
    const min = Math.min(...reduced);
    return `${min} ${max}`
}

const arr = [5, 5, 5, 5, 5]
const test = [1, 3, 5, 7, 9]
console.log(miniMaxSum(test));

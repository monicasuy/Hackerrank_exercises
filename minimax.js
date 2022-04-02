function miniMaxSum(arr) {
    // Write your code here
    // const sum = arr.map(num => {
    //   const result = arr.filter(value => {
    //     return arr.indexOf(value) !== arr.indexOf(num);
    //   });
    //   console.log(result);
    //   return result;
    // });
    // console.log(sum)
    // const reduced = sum.map(array => array.reduce((previousValue, currentValue) => previousValue + currentValue));
    // const max = Math.max(...reduced);
    // const min = Math.min(...reduced);
    arr.sort()
    const maxArray = arr.slice(1);
    const max = maxArray.reduce((sum, x) => sum + x)

    arr.pop();
    const min = arr.reduce((sum, x) => sum + x)

    return `${min} ${max}`
}

const arr = [5, 5, 5, 5, 5]
const test = [1, 3, 5, 9, 7]
console.log(miniMaxSum(test));

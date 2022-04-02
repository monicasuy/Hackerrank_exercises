function matchingStrings(strings, queries) {
    // Write your code here
    // const lettersArray = strings.filter(str => str.match(/^[A-Z]+$/i));
    // console.log(lettersArray);
    const stringArray = strings.map(string => {
      let counter = 0;
      const queriesArray = queries.map(query => query === string ? counter++ : 0);
      return counter;
    })
    console.log(stringArray);
}
const str = ['4', 'ab', 'ab', 'abc']
const queries = ['3','ab', 'abc', 'bc']
matchingStrings(str, queries)

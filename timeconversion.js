

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    if (s.slice(-2) === "PM") {
      var twentyFour = s.slice(0, 2);
      var result = parseInt(twentyFour) + 12;
      const finalString = s.replace(twentyFour, result);
      console.log(finalString);
      return finalString;
    } else {
        return s
    }
}

console.log(timeConversion("11:05:45PM"))

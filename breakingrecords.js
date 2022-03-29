// function breakingRecords(scores) {
//     // Write your code here
//     var maxCounter = 0;
//     var minCounter = 0;
//     const counter = []
//     scores.reduce((previousScore, currentScore) => {
//       previousScore < currentScore ? maxCounter++ : minCounter++, 0;
//     });
//     counter.push(minCounter, maxCounter);
//     return counter
// }


function breakingRecords(scores) {
  // Write your code here
  var maxCounter = 0;
  var minCounter = 0;
  const counter = []
  var currentMax = scores[0]
  var currentMin = scores[0]
  scores.forEach(score => {
    if (score < currentMax) {
      currentMax = score
      maxCounter++
    } else if (score > currentMin) {
      currentMin = score
      minCounter++
      }
        console.log(currentMax);
      });

  counter.push(minCounter, maxCounter);
  return counter;
}
const myScores = [10, 5, 20, 20, 4, 5, 2, 25, 1]
console.log(breakingRecords(myScores));

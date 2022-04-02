function processData(input) {
    //Enter your code here
    let finalWord = "";
    if (input.slice(0, 1) === "S") {
       if (input[2] === "M") {
         const sliced = input.slice(4);
         finalWord = sliced.split(/(?=[A-Z])/).join(' ').slice(0, -2).toLowerCase();
       } else if (input[2] === "C" || "V") {
        finalWord = input.slice(4).split(/(?=[A-Z])/).join(' ').toLowerCase();
       }
    } else if (input.slice(0, 1) === "C") {
        const split = input.slice(4).split(' ');
        const capitalized = split.map(word => word.charAt(0).toUpperCase() + word.slice(1))
        if (input[2] === "M") {
          const word = capitalized.join('') + '()';
          finalWord = word[0].toLowerCase() + word.slice(1);
       } else if (input[2] === "C") {
          finalWord = capitalized.join('');
       } else if (input[2] === "V") {
          const word = capitalized.join('');
          finalWord = word[0].toLowerCase() + word.slice(1);
       }
    }
    console.log(finalWord);
}

processData('C;M;mouse pad')

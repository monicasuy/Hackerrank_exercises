function processData(input) {
    //Enter your code here

    if (input.slice(0, 1) === "S") {
       if (input[2] === "M") {
         const sliced = input.slice(4);
         const split = sliced.split(/(?=[A-Z])/).join(' ').slice(0, -2).toLowerCase();
         return split;
       } else if (input[2] === "C" || "V") {
        const finalInput = input.slice(4).split(/(?=[A-Z])/).join(' ').toLowerCase();
        return finalInput;
       }
    } else if (input.slice(0, 1) === "C") {
        if (input[2] === "M") {
          const split = input.slice(4).split(' ');
          const capitalized = split.map(word => word.charAt(0).toUpperCase() + word.slice(1))
          const finalWord = capitalized.join('') + '()';
          return finalWord;
       } else if (input[2] === "C") {
          const split = input.slice(4).split(' ');
          const capitalized = split.map(word => word.charAt(0).toUpperCase() + word.slice(1));
          return capitalized.join('');
       } else if (input[2] === "V") {
          const split = input.slice(4).split(' ');
          const capitalized = split.map(word => word.charAt(0).toUpperCase() + word.slice(1));
          const word = capitalized.join('');
          const finalWord = word[0].toLowerCase() + word.slice(1);
          return finalWord;
       }
    }
}

processData('C;V;mobile phone')

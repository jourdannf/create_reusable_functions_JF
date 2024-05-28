// Part One: Thinking Functionality

const numArray = [1,2,3,4,5,6,7,8,9,10];
const stringArray = ["spongebob", "patrick", "squidward", "gary", "sandy"];

function sumOfNums(numbers){
    let sum = 0;
    numbers.forEach(num => sum += num);
    return sum;
}

function averageOfNums(numbers){
    let sum = sumOfNums(numbers);
    return sum/numbers.length;
}

function longestString(strings){
    let longestWord = "";
    strings.forEach((word) => {
        if (word.length > longestWord.length){
            longestWord = word;
        } else if (word.length === longestWord.length && longestWord.length !== 0){
            longestWord += ", " + word;
        }
    });

    return longestWord;
}

function stringsLongerThanNum(strings, num){
    let greaterThanNumWords = [];
    strings.forEach((word) => {
        if (word.length > num){
            greaterThanNumWords.push(word);
        }
    });

    return greaterThanNumWords;
}

function printAllNumbersUpTo(num){
    // console.log(num);
    let sum = 0
    if (num === 0){
        return 0;
    }else {
        num--;
        sum = 1 + printAllNumbersUpTo(num);
        console.log(sum);
    }

    return sum;
}

console.log(averageOfNums(numArray));
console.log(longestString(stringArray));
console.log(stringsLongerThanNum(stringArray, 6));
printAllNumbersUpTo(3);
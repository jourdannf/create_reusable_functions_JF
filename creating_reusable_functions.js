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

//Part Two: Thinking Methodically

const data = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }];

const sortedData = data.sort((a,b) => {
    return a.age - b.age;
});

const filteredData = data.filter((person) => {
    console.log(Number(person.age))
    return Number(person.age) > 50;
});

console.log(sortedData);
console.log(filteredData);

const mapData = data.map((person) => {
    person.job = person.occupation;
    delete person["occupation"];

    person.age = String(Number(person.age) + 1);
    return person;
})

console.log(mapData);

const averageAge = function () {
    let sum = data.reduce((accumulator, currentVal) => {
        return accumulator += Number(currentVal.age);
    }, 0);

    return sum/data.length;

}

console.log(averageAge());

//Part Three: Thinking Critically

//Take an object and increment its age field
function increaseAge(object) {
    if (!Object.keys(object).includes("age")){
        object.age = 0;
    }
    object.age++;

    const currentDate = new Date();

    object.updated_at = currentDate;

    return object;    
}

//Take an object, make a copy, increment age field of the copy, return copy
function increaseAgeCopy(object) {
    objectCopy = {...object};

    if (!Object.keys(objectCopy).includes("age")){
        objectCopy.age = 0;
    }
    objectCopy.age++;

    const currentDate = new Date();
    objectCopy.updated_at = currentDate;

    return objectCopy;
}

console.log(increaseAgeCopy(data[0]));
// console.log(increaseAge(data[0]));
console.log(data[0]);
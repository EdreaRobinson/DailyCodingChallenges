// Write your code below this line.

function luckyNumbers(num) {
    let luckyNum = []
    for (i = 0; i < num; i++) {
        luckyNum.push(Math.floor(Math.random() * 10) + 1);
    } return luckyNum
}

console.log(luckyNumbers(25))

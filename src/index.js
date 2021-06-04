
const notNumRoller = (num) => {
    let roll1 = 0
    let roll2 = num
    let diceArr = []

    while (roll1 + roll2 === num) {
        roll1 = Math.floor(Math.random() * 6) + 1
        roll2 = Math.floor(Math.random() * 6) + 1
    }   
    diceArr.push(roll1);
    diceArr.push(roll2)
    return diceArr
}

module.exports = { notNumRoller }
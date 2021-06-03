
const not7generator = () => {
    let num = 7
    while (num === 7 ) {
        num = Math.floor(Math.random() * 11)
    }
    return num
}

module.exports = { not7generator }
const { expect } = require('chai')
const { notNumRoller } = require ('../src/index')

describe("notNumRoller", function () {
    it("should return a number that isn't the given num", () => {
        let res = notNumRoller(7)
        let roll = res[0] + res[1]
        expect(roll).to.not.equal(7)
    })
    it("really should never return the given num", () => {
        let arrFullOfNot9s = []
        let res = []
        for (let i = 0; i < 200; i++) {
            arrFullOfNot9s.push(notNumRoller(9))
        }
        for (let arr of arrFullOfNot9s) {
            let roll = arr[0] + arr[1];
            res.push(roll)
        }
        let bool = res.includes(9)
        expect(bool).to.equal(false)
    })
})
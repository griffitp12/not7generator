const { expect } = require('chai')
const { not7generator } = require ('../index.js')

describe("not7generator", function () {
    it("should return a number that isn't 7", () => {
        let num = not7generator()
        expect(num).to.not.equal(7)
    })
    it("really should never return 7", () => {
        let arrFullOfNot7s = []
        for (let i = 0; i < 200; i++) {
            arrFullOfNot7s.push(not7generator())
        }
        let bool = arrFullOfNot7s.includes(7)
        expect(bool).to.equal(false)
    })
})
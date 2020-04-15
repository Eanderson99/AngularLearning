import { isEven } from './even';

describe('Even', () => {
    // function who make test
    it('function should return true if the number is even', () => {
        let result = isEven(8)
        expect(result).toBeTruthy() // result should be true
    })

    it('function should return false if the number is odd', () => {
        let result = isEven(15)
        expect(result).toBe(false)
    })
})
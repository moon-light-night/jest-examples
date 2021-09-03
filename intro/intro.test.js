const {sum, nativeNull} = require('./intro')

describe('Sum function', () => {
    test('should return sum of two values', () => {
        expect(sum(1, 3)).toBe(4)
        expect(sum(1, 3)).toEqual(4)
    })
    test('should return value which correctly compare to other', () => {
        expect(sum(2, 3)).toBeGreaterThan(4)
    })
    test('should return correct sum of two float numbers', () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
    })
})

describe('Native null function', () => {
    test('should return falsy value of null', () => {
        expect(nativeNull()).toBe(null)
        expect(nativeNull()).toBeNull()
        expect(nativeNull()).toBeFalsy()
        expect(nativeNull()).toBeDefined()
        expect(nativeNull()).not.toBeTruthy()
        expect(nativeNull()).not.toBeUndefined()
    })
})
const Lodash = require('./sync')
let _ = new Lodash()

describe('Lodash compact', () => {

    let array

    beforeEach(() => {
        array = [false, 42, 0, '', true, null, 'hello']
    })

    afterAll(() => {
        _ = new Lodash()
    })

    test('should be defined', () => {
        expect(_.compact).toBeDefined()
        expect(_.compact).not.toBeUndefined()
    })
    test('should be editable', () => {
        array.push(...['one', 'two'])
        expect(array).toContain('one')
        expect(array).toContain('two')
    })
    test('should remove falsy values from array', () => {
        const result = [42, true, 'hello']
        expect(_.compact(array)).toEqual(result)
    })
    test('should not contain falsy values', () => {
        expect(_.compact(array)).not.toContain(false)
        expect(_.compact(array)).not.toContain(0)
        expect(_.compact(array)).not.toContain(null)
        expect(_.compact(array)).not.toContain('')
    })
})

describe('Lodash groupBy cases', () => {

    let array

    beforeEach(() => {
        array = [2.1, 2.4, 3.4, 4.2]
        nums = ['one', 'two', 'three']
    })

    test('group by Math.floor', () => {
        const result = {
            2: [2.1, 2.4],
            3: [3.4],
            4: [4.2]
        }
        expect(_.groupBy(array, Math.floor)).toEqual(result)
    })

    test('group by length of element', () => {
        const result = {
            3: ['one', 'two'],
            5: ['three']
        }
        expect(_.groupBy(nums, 'length')).toEqual(result)
    })

    test('should not return array', () => {
        expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
    })
})
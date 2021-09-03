const Ajax = require('./async')
const axios = require('axios')

jest.mock('axios')

describe('Ajax: echo', () => {

    test('should return value async', async () => {
        const result = await Ajax.echo('some data')
        expect(result).toBe('some data')
    })

    test('should return value async with promise', () => {
        return Ajax.echo('some data').then(data => {
            expect(data).toBe('some data')
        })
    })

})

describe('Ajax: GET', () => {
    let response
    let todos

    beforeEach(() => {
        todos = [
            {id: 1, title: 'Todo 1', completed: false}
        ]

        response = {
            data: {
                todos
            }
        }
    })

    test('should return data from backend', () => {
        axios.get.mockReturnValue(response)

        return Ajax.get().then(data => {
            expect(data.todos).toEqual(todos)
        })
    })

})
const add = require('./add').add
const anotherAdd = require('./add').anotherAdd
describe('add', () => {

    beforeAll(() => {
        console.log('vor allen Tests')
    })

    beforeEach(() => {
        console.log('vor jedem Test')
    })

    afterAll(() => {
        console.log('nach allen Tests')
    })

    afterEach(() => {
        console.log('nach jedem Test')
    })

    it('sums 1 and 1 to get 2', () => {
        expect(add(1, 1)).toBe(2)
    })

    it('sums 1 and 2 to get 3', () => {
        expect(add(1, 2)).toBe(3)
    })
})
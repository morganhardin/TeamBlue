const testAddParty = require('./tabletracker')
const testRemoveParty = require('./tabletracker')
const mockTest = jest.fn()
/**
 * @jest-environment jsdom
 */
test('Adding a party', () => {
    expect(testAddParty()).toBe(1)
    //expect(testRemoveParty()).toBe(0)
})
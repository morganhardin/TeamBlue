const testAddParty = require('./testAddParty')

/**
 * @jest-environment jsdom
 */
test('Adding a party', () => {
    expect(testAddParty()).toBe(1)
})
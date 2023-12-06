let parties = JSON.parse(localStorage.getItem("parties")) || [];
function testAddParty() {
    const customerData = {
        number: 99,
        name: "Test Name",
        size: 2,
        time: "10:00",
    };

    parties.push(customerData);
    return parties.length
}
module.exports = testAddParty
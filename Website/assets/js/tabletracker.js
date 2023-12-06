/** TABLE TRACKER JS */

const tableTracker = document.getElementById("table-tracker");
const tableList = document.getElementById("table-list");
const totalTables = document.getElementById("total-tables");

let parties = JSON.parse(localStorage.getItem("parties")) || [];

function renderParties()
{
    tableList.innerHTML = "";
    let total = 0;

    for (let i = 0; i < parties.length; i++)
    {
        const party = parties[i];
        const tableRow = document.createElement("tr");
        tableRow.innerHTML = `<td>${party.number}</td><td>${party.name}</td><td>${party.size}</td><td>${party.time}</td><td class="delete-btn" data-id="${i}">Delete</td>`;
        tableList.appendChild(tableRow);
        total += party.size;
    }

    totalTables.textContent = total.toFixed(2);
    localStorage.setItem("parties", JSON.stringify(parties));
}

function addParty(event)
{
    event.preventDefault();
    const partyNumberInput = document.getElementById("party-number");
    const partyNameInput = document.getElementById("party-name");
    const partySizeInput = document.getElementById("party-size");
    const partyTimeInput = document.getElementById("party-time");
    const partyNumber = parseFloat(partyNumberInput.value);
    const partyName = partyNameInput.value;
    const partySize = parseFloat(partySizeInput.value);
    const partyTime = partyTimeInput.value;
    partyNumberInput.value = "";
    partyNameInput.value = "";
    partySizeInput.value = "";
    partyTimeInput.value = "";

    const customerData = {
        number: partyNumber,
        name: partyName,
        size: partySize,
        time: partyTime,
    };

    parties.push(customerData);
    
    renderParties();
}

function deleteParty(event)
{
    if (event.target.classList.contains("delete-btn"))
    {
        const partyIndex = parseInt(event.target.getAttribute("data-id"));
        
        parties.splice(partyIndex, 1);

        renderParties();
    }
}

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

document.addEventListener('DOMContentLoaded', function () { 
    tableTracker.addEventListener("submit", addParty);
    tableList.addEventListener("click", deleteParty);
    renderParties();
})

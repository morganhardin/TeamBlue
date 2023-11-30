const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

var month = 1
var year = 2024

$(function(){
    var currentDay = new Date()
    month = currentDay.getMonth()+1
    year = currentDay.getFullYear()

    $("#calendar-month-current").click(function(){
        console.log("Number of days in month " + MONTHS[month-1] + " of the year " + year + " is " + getDaysInMonth(year, month));
    });
    $("#calendar-month-previous").click(function() {
        month -= 1
        if (month < 1) {
            month = MONTHS.length
            year -= 1
        }
        buildCalendar(year, month)
    })
    $("#calendar-month-next").click(function() {
        month += 1
        if (month > MONTHS.length) {
            month = 1
            year += 1
        }
        buildCalendar(year, month)
    })
    // CREATE CALENDAR
    $('#calendar-grid').on('click', '.calendar-day', function() {
        
    });
    buildCalendar(year, month)
});

function getDaysInMonth(year, month) {
    var days = new Date(year, month, 0).getDate();
    return days
}

function buildCalendar(year, month) {
    var calendarHtml = `<div class="row">`
    var days = getDaysInMonth(year, month)

    $('#calendar-month-current').text(MONTHS[month-1] + ' ' + year)

    var currentDay = new Date()

    for (let i = 1; i <= days; i++) {
        var timeslotClass = 'open'
        var seatsOpen = 10
        console.log(currentDay.getDate())
        if (currentDay.getFullYear() > year || 
        (currentDay.getFullYear() == year && currentDay.getMonth()+1 > month) || 
        (currentDay.getFullYear() == year && currentDay.getMonth()+1 == month && currentDay.getDate() > i)) {
            timeslotClass = 'closed'
            seatsOpen = 0
        }

        var calInner = `<div>`+ i +`</div>`
        for (let j = 1; j <= 10; j+=2) {
            calInner += `
                <div class="calendar-day-timeslot timeslot-`+timeslotClass+`">`+ j + ':00' + ' (' + seatsOpen + ')' + `</div>
            `
        }
        calendarHtml += `<div id="calendar-day-`+i+`" class="calendar-day col-sm-2 border">`+calInner+`</div>`
    }
    calendarHtml += `</div>`

    $('#calendar-grid').html(calendarHtml)
}
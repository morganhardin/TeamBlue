const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

var month = 1
var year = 2024

$(function(){
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
    /*$('.calendar-day').popover({
        title: "January 2024 Test", 
        content: "This will be generated with:\nTime slot 1: 10 tables free\nTime slot 2: 0 tables free\netc.",
        placement: "bottom"
    });*/
    $('.calendar-day').click(function() {
        $('.calendar-day').css('background-color: pink')
    });
    // CREATE CALENDAR
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

    for (let i = 1; i <= days; i++) {
        calendarHtml += `<div id="calendar-day-`+i+`" class="calendar-day col-sm-2 border btn">`+i+`</div>`

        $('#calendar-day-'+i).popover({
            title: "January "+i+", 2024", 
            content: "",
            placement: "bottom"
        });
    }
    calendarHtml += `</div>`

    $('#calendar-grid').html(calendarHtml)
}
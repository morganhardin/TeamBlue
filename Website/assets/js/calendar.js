const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const username = 'admin'
const password = 'admin'

var loggedIn = false

var month = 1
var year = 2024

var tables = {}

$(function(){
    $("#timeslot-view-header").hide()

    var currentDay = new Date()
    month = currentDay.getMonth()+1
    year = currentDay.getFullYear()

    if (tables[year] == null) {
        tables[year] = {}
    }
    if (tables[year][month] == null) {
        tables[year][month] = {}
    }

    $("#log-in-btn").click(function() {
        restaurantLogIn()
    })

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
    $('#calendar-grid').on('click', '.calendar-day-timeslot', function() {
        var day = $(this).data('day')
        var time = $(this).data('time') + ":00"
        $("#timeslot-view-header").show()
        $("#timeslot-view-info").text(time + " | " + day + " | " + MONTHS[month-1] + " | " + year)
        showTimeSlot(parseInt(day), parseInt(time))
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
        if (tables[year][month][i] == null) {
            tables[year][month][i] = {}
        }
        //console.log(currentDay.getDate())
        if (currentDay.getFullYear() > year || 
        (currentDay.getFullYear() == year && currentDay.getMonth()+1 > month) || 
        (currentDay.getFullYear() == year && currentDay.getMonth()+1 == month && currentDay.getDate() > i)) {
            timeslotClass = 'closed'
        }

        var calInner = `<div>`+ i +`</div>`
        for (let j = 1; j <= 10; j+=2) {
            if (tables[year][month][i][j] == null) {
                tables[year][month][i][j] = 10
            }
            if (timeslotClass === 'closed') {
                tables[year][month][i][j] = 0
            }
            calInner += `
                <div class="calendar-day-timeslot timeslot-`+timeslotClass+`" 
                    data-day=`+i+` data-time=`+j+`
                >`+ j + ':00' + ' (' + tables[year][month][i][j] + ')' + `</div>
            `
        }
        calendarHtml += `<div id="calendar-day-`+i+`" class="calendar-day col-sm-2 border">`+calInner+`</div>`
    }
    calendarHtml += `</div>`

    $('#calendar-grid').html(calendarHtml)
}

function showTimeSlot(day, timeslot) {
    if (tables[year][month][day][timeslot] === 0) {
        $("#timeslot-view-tablesleft").text("No tables left!")
        $("#timeslot-register").text("")
    } else {
        $("#timeslot-view-tablesleft").text(tables[year][month][day][timeslot] + " tables available.")
        $("#timeslot-register").attr("href", "tabletracker.html?year="+year+"?&month="+month+"&day="+day)
        $("#timeslot-register").text("Sign up for a table.")
    }
}

function restaurantLogIn() {
    var uname = $("#log-in-uname").val()
    $("#log-in-uname").val("")
    var pwd = $("#log-in-pwd").val()
    $("#log-in-pwd").val("")
    if (uname === username && pwd === password) {
        loggedIn = true
        $("#log-in-header").hide()
        $("#log-in-body").hide()
    } else {
        $("#log-in-header").css("color", "red")
    }
}

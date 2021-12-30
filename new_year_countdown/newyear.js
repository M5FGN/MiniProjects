let countdown_months = setInterval(diff_months, 1000);

function diff_months() {
    let today = new Date();
    let month = today.getMonth();
    let months_left = 11 - month;
    document.getElementById("months").innerHTML = months_left;
    return months_left;
}


let countdown_weeks = setInterval(diff_weeks, 1000);

function diff_weeks() {
    let today = new Date();
    let day = today.getDate();
    let weeks_left;

    switch (today.getMonth()) {
        case 0: //January
            weeks_left = Math.floor((31 - day) / 7);
            break;
        case 1: //February
            weeks_left = Math.floor((28 - day) / 7);
            break;
        case 2: //March
            weeks_left = Math.floor((31 - day) / 7);
            break;
        case 3: //April
            weeks_left = Math.floor((30 - day) / 7);
            break;
        case 4: //May
            weeks_left = Math.floor((31 - day) / 7);
            break;
        case 5: //June
            weeks_left = Math.floor((30 - day) / 7);
            break;
        case 6: //July
            weeks_left = Math.floor((31 - day) / 7);
            break;
        case 7: //August
            weeks_left = Math.floor((31 - day) / 7);
            break;
        case 8: //September
            weeks_left = Math.floor((30 - day) / 7);
            break;
        case 9: //October
            weeks_left = Math.floor((31 - day) / 7);
            break;
        case 10: //November
            weeks_left = Math.floor((30 - day) / 7);
            break;
        case 11: //December
            weeks_left = Math.floor((31 - day) / 7);
            break;
    }
    document.getElementById("weeks").innerHTML = weeks_left;
    return weeks_left;
}


let countdown_days = setInterval(diff_days, 1000);

function diff_days() {
    let today = new Date();
    let day = today.getDate();
    let days_left;

    switch (today.getMonth()) {
        case 0: //January
            days_left = Math.floor((31 - day) % 7);
            break;
        case 1: //February
            days_left = Math.floor((28 - day) % 7);
            break;
        case 2: //March
            days_left = Math.floor((31 - day) % 7);
            break;
        case 3: //April
            days_left = Math.floor((30 - day) % 7);
            break;
        case 4: //May
            days_left = Math.floor((31 - day) % 7);
            break;
        case 5: //June
            days_left = Math.floor((30 - day) % 7);
            break;
        case 6: //July
            days_left = Math.floor((31 - day) % 7);
            break;
        case 7: //August
            days_left = Math.floor((31 - day) % 7);
            break;
        case 8: //September
            days_left = Math.floor((30 - day) % 7);
            break;
        case 9: //October
            days_left = Math.floor((31 - day) % 7);
            break;
        case 10: //November
            days_left = Math.floor((30 - day) % 7);
            break;
        case 11: //December
            days_left = Math.floor((31 - day) % 7);
            break;
    }
    document.getElementById("days").innerHTML = days_left;
    return days_left;
}


let countdown_hours = setInterval(diff_hours, 1000);

function diff_hours() {
    let today = new Date();
    let hours = today.getHours();
    let hours_left = 23 - hours;
    document.getElementById("hours").innerHTML = hours_left;
    return hours_left;
}


let countdown_mins = setInterval(diff_mins, 1000);

function diff_mins() {
    let today = new Date();
    let mins = today.getMinutes();
    let mins_left = 59 - mins;
    document.getElementById("mins").innerHTML = mins_left;
    return mins_left;
}


let countdown_secs = setInterval(diff_secs, 1000);

function diff_secs() {
    let today = new Date();
    let secs = today.getSeconds();
    let secs_left = 59 - secs;
    document.getElementById("secs").innerHTML = secs_left;
    return secs_left;
}
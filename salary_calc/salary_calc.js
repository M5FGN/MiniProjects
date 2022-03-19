function inputCheck() {

    document.getElementById("yearErr1").style.visibility = "hidden";
    document.getElementById("salErr1").style.visibility = "hidden";
    document.getElementById("daysErr1").style.visibility = "hidden";
    document.getElementById("hoursErr1").style.visibility = "hidden";

    errors = true;

    year1 = document.querySelector('input[name="taxYr1"]:checked').value;
    salary1 = document.getElementById("salVal1").value;
    hours1 = document.getElementById("hours1").value;
    days1 = document.getElementById("days1").value;

    if (!year1) {
        document.getElementById("yearErr1").style.visibility = "visible";
        errors = false;
    }
    if (!salary1) {
        document.getElementById("salErr1").style.visibility = "visible";
        errors = false;
    }
    if (!days1) {
        document.getElementById("daysErr1").style.visibility = "visible";
        errors = false;
    }
    if (!hours1) {
        document.getElementById("hoursErr1").style.visibility = "visible";
        errors = false;
    }

    return errors;
}

function calculateSal1() {
    if (inputCheck() == false) {
        console.log("errors in input");
    } else {
        console.log("no errors");
    };
}
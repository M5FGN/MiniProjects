function reset() {
    document.getElementById("yearErr1").style.visibility = "hidden";
    document.getElementById("salErr1").style.visibility = "hidden";
    document.getElementById("daysErr1").style.visibility = "hidden";
    document.getElementById("hoursErr1").style.visibility = "hidden";

}



function inputCheck() {


    errors = true;

    if (!document.querySelector('input[name="taxYr1"]:checked').value) {
        document.getElementById("yearErr1").style.visibility = "visible";
        errors = false;
    }
    if (!document.getElementById("salVal1").value) {
        document.getElementById("salErr1").style.visibility = "visible";
        errors = false;
    }
    if (!document.getElementById("days1").value) {
        document.getElementById("daysErr1").style.visibility = "visible";
        errors = false;
    }
    if (!document.getElementById("hours1").value) {
        document.getElementById("hoursErr1").style.visibility = "visible";
        errors = false;
    }

    return errors;
}

function calculateSalary() {

    let salary1 = document.getElementById("salVal1").value;
    let hours1 = document.getElementById("hours1").value;
    let days1 = document.getElementById("days1").value;

    let unit1 = document.querySelector('#salUnit1').value;

    if (unit1 == "year") {
        return salary1;

    } else if (unit1 == "month") {
        return salary1 * 12;

    } else if (unit1 == "week") {
        return salary1 * 52;

    } else if (unit1 == "day") {
        return salary1 * days1 * 52;

    } else if (unit1 == "hour") {
        return salary1 * hours1 * 52;
    }
}

function calculateTaxInc() {

    taxInc = 0;

    let year1 = document.querySelector('input[name="taxYr1"]:checked').value;

    // Starting Points and Percentage paid for each tax bracket

    //taxYearOptA currently = 2021
    const taxYearOptA = {
        starter: 12571
    };
    //taxYearOptA currently = 2022
    const taxYearOptB = {
        starter: 12571
    };

    if (year1 == "2021") {
        if (salary1 > taxYearOptA.starter) {
            taxInc = salary1 - taxYearOptA.starter;
        }
    } else if (year1 == "2022") {
        if (salary1 > taxYearOptA.starter) {
            taxInc = salary1 - taxYearOptA.starter;
        }
    }

    return taxInc;
}

function calculateTaxPaid() {

    let taxPaid = 0;

    let year1 = document.querySelector('input[name="taxYr1"]:checked').value;

    // Starting Points and Percentage paid for each tax bracket

    //taxYearOptA currently = 2021
    const taxYearOptA = {
        starter: 12571,
        starterPercent: 0.19,
        basic: 14668,
        basicPercent: 0.20,
        intermediate: 25296,
        intermediatePercent: 0.21,
        higher: 43662,
        higherPercent: 0.41,
        top: 150000,
        topPercent: 0.46
    };
    //taxYearOptA currently = 2022
    const taxYearOptB = {
        starter: 12571,
        starterPercent: 0.19,
        basic: 14668,
        basicPercent: 0.20,
        intermediate: 25296,
        intermediatePercent: 0.21,
        higher: 43662,
        higherPercent: 0.41,
        top: 150000,
        topPercent: 0.46
    };

    if (year1 == "2021") {
        console.log("2021");
        if (salary1 > taxYearOptA.top) {
            taxPaid += (salary1 - taxYearOptA.top) * taxYearOptA.topPercent;
            taxPaid += (taxYearOptA.top - taxYearOptA.higher) * taxYearOptA.higherPercent;
            taxPaid += (taxYearOptA.higher - taxYearOptA.intermediate) * taxYearOptA.intermediatePercent;
            taxPaid += (taxYearOptA.intermediate - taxYearOptA.basic) * taxYearOptA.basicPercent;
            taxPaid += (taxYearOptA.basic - taxYearOptA.starter) * taxYearOptA.starterPercent;
            console.log("top");
        } else if (salary1 > taxYearOptA.higher) {
            taxPaid += (salary1 - taxYearOptA.higher) * taxYearOptA.higherPercent;
            taxPaid += (taxYearOptA.higher - taxYearOptA.intermediate) * taxYearOptA.intermediatePercent;
            taxPaid += (taxYearOptA.intermediate - taxYearOptA.basic) * taxYearOptA.basicPercent;
            taxPaid += (taxYearOptA.basic - taxYearOptA.starter) * taxYearOptA.starterPercent;
            console.log("higher");
        } else if (salary1 > taxYearOptA.intermediate) {
            taxPaid += (salary1 - taxYearOptA.intermediate) * taxYearOptA.intermediatePercent;
            taxPaid += (taxYearOptA.intermediate - taxYearOptA.basic) * taxYearOptA.basicPercent;
            taxPaid += (taxYearOptA.basic - taxYearOptA.starter) * taxYearOptA.starterPercent;
            console.log("intermediate");
        } else if (salary1 > taxYearOptA.basic) {
            taxPaid += (salary1 - taxYearOptA.basic) * taxYearOptA.basicPercent;
            taxPaid += (taxYearOptA.basic - taxYearOptA.starter) * taxYearOptA.starterPercent;
            console.log("basic");
        } else if (salary1 > taxYearOptA.starter) {
            taxPaid += (salary1 - taxYearOptA.starter) * taxYearOptA.starterPercent;
            console.log("starter");
        } else {
            taxPaid = 0;
            console.log("no tax");
        }


    } else if (year1 == "2022") {
        console.log("2022");
        if (salary1 > taxYearOptB.top) {
            taxPaid += (salary1 - taxYearOptB.top) * taxYearOptB.topPercent;
            taxPaid += (taxYearOptB.top - taxYearOptB.higher) * taxYearOptB.higherPercent;
            taxPaid += (taxYearOptB.higher - taxYearOptB.intermediate) * taxYearOptB.intermediatePercent;
            taxPaid += (taxYearOptB.intermediate - taxYearOptB.basic) * taxYearOptB.basicPercent;
            taxPaid += (taxYearOptB.basic - taxYearOptB.starter) * taxYearOptB.starterPercent;
            console.log("top");
        } else if (salary1 > taxYearOptB.higher) {
            taxPaid += (salary1 - taxYearOptB.higher) * taxYearOptB.higherPercent;
            taxPaid += (taxYearOptB.higher - taxYearOptB.intermediate) * taxYearOptB.intermediatePercent;
            taxPaid += (taxYearOptB.intermediate - taxYearOptB.basic) * taxYearOptB.basicPercent;
            taxPaid += (taxYearOptB.basic - taxYearOptB.starter) * taxYearOptB.starterPercent;
            console.log("higher");
        } else if (salary1 > taxYearOptB.intermediate) {
            taxPaid += (salary1 - taxYearOptB.intermediate) * taxYearOptB.intermediatePercent;
            taxPaid += (taxYearOptB.intermediate - taxYearOptB.basic) * taxYearOptB.basicPercent;
            taxPaid += (taxYearOptB.basic - taxYearOptB.starter) * taxYearOptB.starterPercent;
            console.log("intermediate");
        } else if (salary1 > taxYearOptB.basic) {
            taxPaid += (salary1 - taxYearOptB.basic) * taxYearOptB.basicPercent;
            taxPaid += (taxYearOptB.basic - taxYearOptB.starter) * taxYearOptB.starterPercent;
            console.log("basic");
        } else if (salary1 > taxYearOptB.starter) {
            taxPaid += (salary1 - taxYearOptB.starter) * taxYearOptB.starterPercent;
            console.log("starter");
        } else {
            taxPaid = 0;
            console.log("no tax");
        }
    }
    console.log(taxPaid);
    return taxPaid;

}

function calculateNI() {

    let NIPaidWeekly = 0;

    let year1 = document.querySelector('input[name="taxYr1"]:checked').value;
    let weeklySalary = calculateSalary()/52;
    console.log(weeklySalary);

    // Starting Points and Percentage paid for each NI band
    //NIYearA currently = 2021
    const NIYearOptionA = {
        band1: 184,
        band1Percent: 0.12,
        band2: 967,
        band2Percent: 0.02
    };
    //NIYearB currently = 2022
    const NIYearOptB = {
        band1: 184,
        band1Percent: 0.12,
        band2: 967,
        band2Percent: 0.02
    };

    if (year1 = "2021"){
        if (weeklySalary > NIYearOptionA.band2) {
            NIPaidWeekly += (weeklySalary-NIYearOptionA.band2)*NIYearOptionA.band2Percent;
            NIPaidWeekly += (NIYearOptionA.band2-NIYearOptionA.band1)*NIYearOptionA.band1Percent;
        } else if (weeklySalary>NIYearOptionA.band1){
            NIPaid += (weeklySalary-NIYearOptionA.band1)*NIYearOptionA.band1Percent;
        }
    } else if (year1 = "2022"){
        if (weeklySalary > NIYearOptB.band2) {
            NIPaidWeekly += (weeklySalary-NIYearOptB.band2)*NIYearOptB.band2Percent;
            NIPaidWeekly += (NIYearOptB.band2-NIYearOptB.band1)*NIYearOptB.band1Percent;
        } else if (weeklySalary>NIYearOptB.band1){
            NIPaidWeekly += (weeklySalary-NIYearOptB.band1)*NIYearOptB.band1Percent;
        }
    }

    console.log(NIPaidWeekly);

    return NIPaidWeekly*52;

}

function calculate1() {

    reset();

    if (inputCheck() == true) {
        console.log("no errors");

        salary1 = calculateSalary();
        console.log(salary1);
        taxInc = calculateTaxInc();
        taxPaid = calculateTaxPaid();
        console.log(taxPaid)
        NIPaid = calculateNI();
        takeHome = salary1 - taxPaid - NIPaid;



        // FIXME - salary1 to two decimal places.
        document.getElementById("outSal1").textContent = salary1;
        document.getElementById("outTaxInc1").textContent = taxInc.toFixed(2);
        document.getElementById("outTax1").textContent = taxPaid.toFixed(2);
        document.getElementById("outNI1").textContent = NIPaid.toFixed(2);
        document.getElementById("outTakeHome1").textContent = takeHome.toFixed(2);

    } else {
        console.log("errors in input");
    };
}
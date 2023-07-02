/**
 * Reset all input and output fields.
 */
function reset() {
    document.getElementById("taxYearErr").style.visibility = "hidden";
    document.getElementById("salaryErr").style.visibility = "hidden";
    document.getElementById("daysErr").style.visibility = "hidden";
    document.getElementById("hoursErr").style.visibility = "hidden";

    document.getElementById("outSalary").textContent = " ";
    document.getElementById("outTaxInc").textContent = " ";
    document.getElementById("outTaxPaid").textContent = " ";
    document.getElementById("outNIPaid").textContent = " ";
    document.getElementById("outTakeHome").textContent = " ";
}

// DOCUMENT - To Add
/**
 * Form validation - checks for errors and displays errors if needed.
 * @returns {boolean} Returns True if errors exist, otherwise, False.
 */
function inputCheck() {

    errors = true;

    if (!document.querySelector('input[name="taxYear"]:checked').value) {
        document.getElementById("taxYearErr").style.visibility = "visible";
        errors = false;
    }
    if (!document.getElementById("salaryVal").value) {
        document.getElementById("salaryErr").style.visibility = "visible";
        errors = false;
    }
    if (!document.getElementById("days").value) {
        document.getElementById("daysErr").style.visibility = "visible";
        errors = false;
    }
    if (!document.getElementById("hours").value) {
        document.getElementById("hoursErr").style.visibility = "visible";
        errors = false;
    }

    return errors;
}

// DOCUMENT - To Add
/**
 * 
 * @returns 
 */
function calculateSalary() {

    let salary = document.getElementById("salaryVal").value;
    let hours = document.getElementById("hours").value;
    let days = document.getElementById("days").value;

    let unit = document.querySelector('#salUnit').value;

    if (unit == "year") {
        return salary ;

    } else if (unit == "month") {
        return salary  * 12;

    } else if (unit == "week") {
        return salary  * 52;

    } else if (unit == "day") {
        return salary  * days * 52;

    } else if (unit == "hour") {
        return salary  * hours * 52;
    }
}

// DOCUMENT - To Add
/**
 * 
 * @returns 
 */
function calculateTaxInc() {

    taxInc = 0;

    let year = document.querySelector('input[name="taxYear"]:checked').value;

    // Starting Points and Percentage paid for each tax bracket
// Source: https://www.gov.uk/scottish-income-tax

    //taxYearOptA currently = 2021
    const taxYearOptA = {
        starter: 12571
    };
    //taxYearOptA currently = 2022
    const taxYearOptB = {
        starter: 12571
    };

    if (year == "optA") {
        if (salary 
 > taxYearOptA.starter) {
            taxInc = salary 
 - taxYearOptA.starter;
        }
    } else if (year == "optB") {
        if (salary 
 > taxYearOptA.starter) {
            taxInc = salary 
 - taxYearOptA.starter;
        }
    }

    return taxInc;
}

// DOCUMENT - To Add
/**
 * 
 * @returns 
 */
function calculateTaxPaid() {

    let taxPaid = 0;

    let year = document.querySelector('input[name="taxYear"]:checked').value;

    // Starting Points and Percentage paid for each tax bracket
    // Source: https://www.gov.uk/scottish-income-tax

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

    if (year == "optA") {
        console.log("2021");
        if (salary 
 > taxYearOptA.top) {
            taxPaid += (salary 
     - taxYearOptA.top) * taxYearOptA.topPercent;
            taxPaid += (taxYearOptA.top - taxYearOptA.higher) * taxYearOptA.higherPercent;
            taxPaid += (taxYearOptA.higher - taxYearOptA.intermediate) * taxYearOptA.intermediatePercent;
            taxPaid += (taxYearOptA.intermediate - taxYearOptA.basic) * taxYearOptA.basicPercent;
            taxPaid += (taxYearOptA.basic - taxYearOptA.starter) * taxYearOptA.starterPercent;
            console.log("top");
        } else if (salary 
 > taxYearOptA.higher) {
            taxPaid += (salary 
     - taxYearOptA.higher) * taxYearOptA.higherPercent;
            taxPaid += (taxYearOptA.higher - taxYearOptA.intermediate) * taxYearOptA.intermediatePercent;
            taxPaid += (taxYearOptA.intermediate - taxYearOptA.basic) * taxYearOptA.basicPercent;
            taxPaid += (taxYearOptA.basic - taxYearOptA.starter) * taxYearOptA.starterPercent;
            console.log("higher");
        } else if (salary 
 > taxYearOptA.intermediate) {
            taxPaid += (salary 
     - taxYearOptA.intermediate) * taxYearOptA.intermediatePercent;
            taxPaid += (taxYearOptA.intermediate - taxYearOptA.basic) * taxYearOptA.basicPercent;
            taxPaid += (taxYearOptA.basic - taxYearOptA.starter) * taxYearOptA.starterPercent;
            console.log("intermediate");
        } else if (salary 
 > taxYearOptA.basic) {
            taxPaid += (salary 
     - taxYearOptA.basic) * taxYearOptA.basicPercent;
            taxPaid += (taxYearOptA.basic - taxYearOptA.starter) * taxYearOptA.starterPercent;
            console.log("basic");
        } else if (salary 
 > taxYearOptA.starter) {
            taxPaid += (salary 
     - taxYearOptA.starter) * taxYearOptA.starterPercent;
            console.log("starter");
        } else {
            taxPaid = 0;
            console.log("no tax");
        }


    } else if (year == "optB") {
        console.log("2022");
        if (salary 
 > taxYearOptB.top) {
            taxPaid += (salary 
     - taxYearOptB.top) * taxYearOptB.topPercent;
            taxPaid += (taxYearOptB.top - taxYearOptB.higher) * taxYearOptB.higherPercent;
            taxPaid += (taxYearOptB.higher - taxYearOptB.intermediate) * taxYearOptB.intermediatePercent;
            taxPaid += (taxYearOptB.intermediate - taxYearOptB.basic) * taxYearOptB.basicPercent;
            taxPaid += (taxYearOptB.basic - taxYearOptB.starter) * taxYearOptB.starterPercent;
            console.log("top");
        } else if (salary 
 > taxYearOptB.higher) {
            taxPaid += (salary 
     - taxYearOptB.higher) * taxYearOptB.higherPercent;
            taxPaid += (taxYearOptB.higher - taxYearOptB.intermediate) * taxYearOptB.intermediatePercent;
            taxPaid += (taxYearOptB.intermediate - taxYearOptB.basic) * taxYearOptB.basicPercent;
            taxPaid += (taxYearOptB.basic - taxYearOptB.starter) * taxYearOptB.starterPercent;
            console.log("higher");
        } else if (salary 
 > taxYearOptB.intermediate) {
            taxPaid += (salary 
     - taxYearOptB.intermediate) * taxYearOptB.intermediatePercent;
            taxPaid += (taxYearOptB.intermediate - taxYearOptB.basic) * taxYearOptB.basicPercent;
            taxPaid += (taxYearOptB.basic - taxYearOptB.starter) * taxYearOptB.starterPercent;
            console.log("intermediate");
        } else if (salary 
 > taxYearOptB.basic) {
            taxPaid += (salary 
     - taxYearOptB.basic) * taxYearOptB.basicPercent;
            taxPaid += (taxYearOptB.basic - taxYearOptB.starter) * taxYearOptB.starterPercent;
            console.log("basic");
        } else if (salary 
 > taxYearOptB.starter) {
            taxPaid += (salary 
     - taxYearOptB.starter) * taxYearOptB.starterPercent;
            console.log("starter");
        } else {
            taxPaid = 0;
            console.log("no tax");
        }
    }
    console.log(taxPaid);
    return taxPaid;

}

// DOCUMENT - To Add
/**
 * 
 * @returns 
 */
function calculateNI() {

    let NIPaidWeekly = 0;

    let year = document.querySelector('input[name="taxYear"]:checked').value;
    let weeklySalary = calculateSalary()/52;
    console.log(weeklySalary);

    // Starting Points and Percentage paid for each NI band
    // Source: https://www.moneyhelper.org.uk/en/work/employment/how-does-national-insurance-work-and-should-you-be-paying-it

    // NIYearOptionA currently = 2021
    const NIYearOptionA = {
        band1: 184,
        band1Percent: 0.12,
        band2: 967,
        band2Percent: 0.02
    };
    // NIYearOptB currently = 2022
    const NIYearOptB = {
        band1: 184,
        band1Percent: 0.12,
        band2: 967,
        band2Percent: 0.02
    };

    if (year = "optA"){
        if (weeklySalary > NIYearOptionA.band2) {
            NIPaidWeekly += (weeklySalary-NIYearOptionA.band2)*NIYearOptionA.band2Percent;
            NIPaidWeekly += (NIYearOptionA.band2-NIYearOptionA.band1)*NIYearOptionA.band1Percent;
        } else if (weeklySalary>NIYearOptionA.band1){
            NIPaid += (weeklySalary-NIYearOptionA.band1)*NIYearOptionA.band1Percent;
        }
    } else if (year = "optB"){
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

// DOCUMENT - To Add
/**
 * 
 * @callback inputCheck()
 * @callback calculateSalary()
 * @callback calculateTaxPaid()
 * @callback calculateNI()
 * @returns 
 */
function calculate() {

    reset();

    if (inputCheck() == true) {
        console.log("no errors");

        salary  = calculateSalary();
        console.log(salary);
        taxInc = calculateTaxInc();
        taxPaid = calculateTaxPaid();
        console.log(taxPaid)
        NIPaid = calculateNI();
        takeHome = salary  - taxPaid - NIPaid;



        // FIXME - salary  to two decimal places.
        document.getElementById("outSalary").textContent = salary ;
        document.getElementById("outTaxInc").textContent = taxInc.toFixed(2);
        document.getElementById("outTaxPaid").textContent = taxPaid.toFixed(2);
        document.getElementById("outNIPaid").textContent = NIPaid.toFixed(2);
        document.getElementById("outTakeHome").textContent = takeHome.toFixed(2);

    } else {
        console.log("errors in input");
    };
}
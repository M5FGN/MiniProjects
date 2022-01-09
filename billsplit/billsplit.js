function calculate() {
    let total = document.getElementById('intotal').value;
    let diners = document.getElementById('indiners').value;
    var tipamount = document.getElementById('tip').value;

    if (total && diners && tipamount) {
        let split = ((parseInt(total) + (parseInt(total) * tipamount)) / parseInt(diners));
        document.getElementById('outsplitlbl').style.display = "inline";
        document.getElementById('outsplit').innerText = `£${split.toFixed(2)}`;
    } else {
        document.getElementById('outsplitlbl').style.display = "none";
        document.getElementById('outsplit').innerText = `Enter All Values`;
    }
}

function resetform() {
    document.getElementById('intotal').value = "";
    document.getElementById('indiners').value = "";
    document.getElementById('tip').value = 0;
    document.getElementById('outsplitlbl').style.display = "none";
    document.getElementById('outsplit').innerText = "Bill Splitter";
}
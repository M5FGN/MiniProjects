//console.log('test');

function func_tipcalc () {
    //console.log("button pressed");
    let bill = document.frm_tipcalc.in_bill.value;
    let gratuity = document.frm_tipcalc.in_gratuity.value;

    console.log(bill);
    console.log(gratuity);

    let tipamount = (bill*(gratuity/100)).toFixed(2);
    let totaldue = (Number(bill) + Number(tipamount)).toFixed(2);

    console.log (totaldue);
    //console.log (tipamount*5);

    document.getElementById('out_tip').innerHTML = ("Tip Due: $" + tipamount);
    document.getElementById('out_totalDue').innerHTML = ("Total Due: $" + totaldue);
}

function func_reset () {
    //console.log("button pressed");
    document.getElementById('in_bill').value = " ";
    document.getElementById('in_gratuity').value = " ";
    document.getElementById('out_tip').innerText = " ";
    document.getElementById('out_totalDue').innerText = " ";
}
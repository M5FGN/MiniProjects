

function VATcalc () { 
    let VATamount = document.frm_VATcalc.in_VATamount.value;
    let VATrate = document.frm_VATcalc.in_VATrate.value;

    let VATtotal = (VATamount * (VATrate/100)).toFixed(2);
document.getElementById("out_VATtotal").innerHTML = "VAT payable is £" +VATtotal;
    //console.log (VATtotal);
}

function resetVATcalc() {
    document.getElementById("out_VATtotal").innerText = " ";
    document.getElementById("in_VATamount").value = " ";
    document.getElementById("in_VATrate").value = " ";
}
function reset(){
    document.getElementById('invalue').value = "";
    document.getElementById('outvalue').value = "";
    document.getElementById('outtotal').value = "";
}

function calcadd(){
    reset()
    document.getElementById('removeout').style.display = "none";
    document.getElementById('removetotal').style.display = "none";
    document.getElementById('removebtn').style.display = "none";
    document.getElementById('addout').style.display = "inline";
    document.getElementById('addtotal').style.display = "inline";
    document.getElementById('addbtn').style.display = "inline";
}

function calcremove(){
    reset();
    document.getElementById('addout').style.display = "none";
    document.getElementById('addtotal').style.display = "none";
    document.getElementById('addbtn').style.display = "none";
    document.getElementById('removeout').style.display = "inline";
    document.getElementById('removetotal').style.display = "inline";
    document.getElementById('removebtn').style.display = "inline";
}

function calcVat(){
    let value = document.getElementById('invalue').value;
    if (value > 0) {
    let vat = value*0.175;
    let total = parseInt(value) + vat;
    document.getElementById('outvalue').value = `£${vat.toFixed(2)}`;
    document.getElementById('outtotal').value = `£${total.toFixed(2)}`;
    } else {
    document.getElementById('outvalue').value = `Enter a value to calculate.`;
    document.getElementById('outtotal').value = `Enter a value to calculate.`;
    }
}

function removeVat() {
    let value = document.getElementById('invalue').value;
    if (value > 0) {
    let net = value/1.175;
    let total = parseInt(value) - net;
    document.getElementById('outvalue').value = `£${total.toFixed(2)}`;
    document.getElementById('outtotal').value = `£${net.toFixed(2)}`;
    } else {
    document.getElementById('outvalue').value = `Enter a value to calculate.`;
    document.getElementById('outtotal').value = `Enter a value to calculate.`;
    }
}


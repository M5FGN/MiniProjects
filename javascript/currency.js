function currencyconv () {
    //console.log ('test');
    let currency_pounds = document.frm_currencyconv.in_currency.value;
    //console.log (currency_pounds);
    let conv_rate = 1.14
    let currency_euros = (currency_pounds * conv_rate).toFixed(2);
    //console.log (currency_euros);
    document.getElementById("out_currency").value=currency_euros;
}

function resetcurrencyconv () {
    //console.log("button clicked");

    document.frm_currencyconv.in_currency.value = " ";
    document.frm_currencyconv.out_currency.value = " ";
}
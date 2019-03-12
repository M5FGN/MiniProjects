function metric(){
    document.getElementById('metric').style.display = "none";
    document.getElementById('imperial').style.display = "block";
    document.frm_bmicalc.in_kg.value = " ";
    document.frm_bmicalc.in_cm.value = " ";
    document.frm_bmicalc.in_lb.value = " ";
    document.frm_bmicalc.in_in.value = " ";
    document.getElementById('out_bmi_metric').innerHTML = " ";  
}

function imperial(){
    document.getElementById('imperial').style.display = "none";
    document.getElementById('metric').style.display = "block";
    document.frm_bmicalc.in_kg.value = " ";
    document.frm_bmicalc.in_cm.value = " ";
    document.frm_bmicalc.in_lb.value = " ";
    document.frm_bmicalc.in_in.value = " ";
    document.getElementById('out_bmi_imperial').innerHTML = " ";
}


function calcBMImetric() {
    // BMI Formula as per https://en.wikipedia.org/wiki/Body_mass_index
    let weight_kg = frm_bmicalc.in_kg.value;
    let height_m = (frm_bmicalc.in_cm.value)/100;
    let bmi_metric = (weight_kg/(height_m*height_m)).toFixed(1);
    document.getElementById('out_bmi_metric').innerHTML = "BMI is: "+bmi_metric;
}
function calcBMIimperial() {
    // BMI Formula as per https://en.wikipedia.org/wiki/Body_mass_index
    let weight_lb = frm_bmicalc.in_lb.value;
    let height_in = frm_bmicalc.in_in.value;
    let bmi_imperial = ((weight_lb*703)/(height_in*height_in)).toFixed(1);
    document.getElementById('out_bmi_imperial').innerHTML = "BMI is: "+bmi_imperial;
}

function metricReset(){
    document.getElementById('imperial').style.display = "none";
    document.getElementById('metric').style.display = "block";
    document.frm_bmicalc.in_kg.value = " ";
    document.frm_bmicalc.in_cm.value = " ";
    document.frm_bmicalc.in_lb.value = " ";
    document.frm_bmicalc.in_in.value = " ";
    document.getElementById('out_bmi_metric').innerHTML = " ";  
}

function imperialReset(){
    document.getElementById('metric').style.display = "none";
    document.getElementById('imperial').style.display = "block";
    document.frm_bmicalc.in_kg.value = " ";
    document.frm_bmicalc.in_cm.value = " ";
    document.frm_bmicalc.in_lb.value = " ";
    document.frm_bmicalc.in_in.value = " ";
    document.getElementById('out_bmi_imperial').innerHTML = " ";
}
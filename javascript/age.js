function calcAge() {
    let today = new Date();
    let year_today = today.getFullYear();
    
    let dob_year = document.frm_age.in_year.value;
    let dob_month = (document.frm_age.in_month.value)-1;
    let dob_day = document.frm_age.in_day.value;

    let dob = new Date (dob_year, dob_month, dob_day);
  
    let current_year = new Date (year_today, dob_month, dob_day);
    
    if (current_year>today) {
        let age = (year_today - dob_year)-1;
        document.getElementById('out_age').innerHTML = ("Age is " + age);
    }
    else {
        let age = year_today - dob_year;
        document.getElementById('out_age').innerHTML = ("Age is " + age);
        
    }
}

function resetAge() {
    document.getElementById('in_year').value = " ";
    document.getElementById('in_month').value = " ";
    document.getElementById('in_day').value = " ";
    document.getElementById('out_age').innerText = " ";
}
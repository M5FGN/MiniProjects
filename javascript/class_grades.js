
function convertgrades () {
   // console.log ("button pressed");

let result = document.frm_gradecalc.in_result.value;
console.log(result);

// Calculate Grade based on the following ...
// Over 90% - Grade A
// Over 75% - Grade B
// Over 60% - Grade C
// Over 50% - Grade D
// Under 50% - Fail


if (result >= 90) {
    document.getElementById('out_grade').value = "A";
}
else if (result >= 75) {
  document.getElementById('out_grade').value = "B";
}
else if (result >= 60) {
    document.getElementById('out_grade').value = "C";
}
else if (result >= 50) {
   document.getElementById('out_grade').value = "D";
}
else { 
document.getElementById('out_grade').value="Fail";
}
}

function resetconvertgrades () {
   // console.log ("button pressed");

document.frm_gradecalc.in_result.value = " ";
document.frm_gradecalc.out_grade.value = " ";
}

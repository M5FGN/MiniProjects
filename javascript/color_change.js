function bgcolor () {
    let bg_color = document.frm_bgcolor.in_color.value;
    document.getElementById("project").style.backgroundColor = bg_color;
}

function reset_bgcolor () {
    document.frm_bgcolor.in_color.value = " ";
    document.getElementById("project").style.backgroundColor = "#f5f5f5";
}
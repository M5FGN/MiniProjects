function open_door () 
    {
    document.getElementById("door_closed_"+door).style.display = "none";
    document.getElementById("door_open_"+door).style.display = "block";
    }

function reset_door () 
    {
    document.getElementById("door_closed_"+door).style.display = "block";
    document.getElementById("door_open_"+door).style.display = "none";
    }

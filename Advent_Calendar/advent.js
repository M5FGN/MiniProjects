function open_door () 
    {
    document.getElementById("door_closed_"+door).style.display = "none";
    document.getElementById("door_open_"+door).style.display = "block";
    }

    // Door number 1 which was added to the function call is used in the function.
function reset_door () 
    {
    document.getElementById("door_closed_"+door).style.display = "block";
    document.getElementById("door_open_"+door).style.display = "none";
    }

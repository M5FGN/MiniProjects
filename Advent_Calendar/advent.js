function onLoad() {
    for (let door = 1; door < 25; door++) {
        if (localStorage.getItem("door " + door) == "open") {
            document.getElementById("door_closed_" + door).style.display = "none";
            document.getElementById("door_open_" + door).style.display = "block";
        };
    }
}

function open_door() {
    document.getElementById("door_closed_" + door).style.display = "none";
    document.getElementById("door_open_" + door).style.display = "block";

    let doorNum = `door ${door}`;
    localStorage.setItem(doorNum, "open");

}

function reset_door() {
    document.getElementById("door_closed_" + door).style.display = "block";
    document.getElementById("door_open_" + door).style.display = "none";

    let doorNum = `door ${door}`;
    localStorage.removeItem(doorNum);
}
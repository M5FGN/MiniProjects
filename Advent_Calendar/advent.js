/**
 * @version 1.0
 * @description Christmas Movie Advent Calendar demonstrating some CSS effects and using javascript for persistence.
 * @author Mary Fagan
 */


/**
 * Set open/Close status of doors based on status from Local Storage.
 */
function onLoad() {
    for (let door = 1; door < 25; door++) {
        if (localStorage.getItem("door " + door) == "open") {
            document.getElementById("door_closed_" + door).style.display = "none";
            document.getElementById("door_open_" + door).style.display = "block";
        };
    }
}


/**
 * Display image when a door is opened and set open in Local Storage.
 */
function open_door() {
    document.getElementById("door_closed_" + door).style.display = "none";
    document.getElementById("door_open_" + door).style.display = "block";

    let doorNum = `door ${door}`;
    localStorage.setItem(doorNum, "open");

}


/**
 *  Hide image when a door is reset and remove status from Local Storage.
 */
function reset_door() {
    document.getElementById("door_closed_" + door).style.display = "block";
    document.getElementById("door_open_" + door).style.display = "none";

    let doorNum = `door ${door}`;
    localStorage.removeItem(doorNum);
}
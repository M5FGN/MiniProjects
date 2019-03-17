function diceThrow () {
    let dice = ((Math.random())*6).toFixed(0);

    if (dice == 0) {
        diceThrow();
    }

    else if (dice == 1) {
      document.getElementById('dice_display').innerHTML = '<i class="fas dice fa-dice-one"></i>';
    }
    else if (dice == 2) {
        document.getElementById('dice_display').innerHTML = '<i class="fas dice fa-dice-two"></i>';
    }
    else if (dice == 3) {
        document.getElementById('dice_display').innerHTML = '<i class="fas dice fa-dice-three"></i>';
    }
    else if (dice == 4) {
        document.getElementById('dice_display').innerHTML = '<i class="fas dice fa-dice-four"></i>';
    }
    else if (dice == 5) {
        document.getElementById('dice_display').innerHTML = '<i class="fas dice fa-dice-five"></i>';
    }
    else if (dice == 6) {
        document.getElementById('dice_display').innerHTML = '<i class="fas dice fa-dice-six"></i>';
    }

}
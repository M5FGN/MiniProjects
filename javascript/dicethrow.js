function diceThrow (max,min) {
    
    let dice = (math.floor(math.random() * (max - min + 1)) +1);
    console.log(dice);

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
function getDiceIcon(dicenumber) {

    const dice_icon = [
        '<i class="fas fa-dice-one"></i>',
        '<i class="fas fa-dice-two"></i>',
        '<i class="fas fa-dice-three"></i>',
        '<i class="fas fa-dice-four"></i>',
        '<i class="fas fa-dice-five"></i>',
        '<i class="fas fa-dice-six"></i>',
    ];

    const outputdice = dice_icon[dicenumber];
    return outputdice;
}

function throwdice() {
    const dice1 = Math.floor((Math.random() * 6));

    const outputDice1 = getDiceIcon(dice1);

    document.getElementById("dice2_icon").style.display = "none";
    document.getElementById("dice1_icon").innerHTML = outputDice1;
}

function throw2dice() {
    const dice1 = Math.floor((Math.random() * 6));
    const dice2 = Math.floor((Math.random() * 6));

    const outputDice1 = getDiceIcon(dice1);
    const outputDice2 = getDiceIcon(dice2);

    document.getElementById("dice1_icon").innerHTML = outputDice1;
    document.getElementById("dice2_icon").innerHTML = outputDice2;
    document.getElementById("dice2_icon").style.display = "block";
}
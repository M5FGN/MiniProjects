function reset() {
    var hugs = 0;
    document.getElementById('lbl_hugs').innerHTML = hugs;
    var cake = 0;
    document.getElementById('lbl_cake').innerHTML = cake;
    var coffee = 0;
    document.getElementById('lbl_coffee').innerHTML = coffee; 
    var water = 0;
    document.getElementById('lbl_water').innerHTML = water;
    document.getElementById('badness-level').innerText = "Stitch not bad. Stitch Fluffy!";
    document.getElementById('img_badness_level').src = "assets/bad0.jpg"
    }

function more() {
    var action_value = document.getElementById('lbl_'+action).innerHTML;
    if (action_value <10) {
        action_value++;
    } else {
        action_value;
    }
    document.getElementById('lbl_'+action).innerHTML = action_value;
    badness_level();
    }

function less() {
    var action_value = document.getElementById('lbl_'+action).innerHTML;
    if (action_value >0) {
        action_value--;
    } else {
        action_value;
    }
    document.getElementById('lbl_'+action).innerHTML = action_value;
    badness_level();
    }

function badness_level() {
    var hugs = document.getElementById('lbl_hugs').innerHTML;
    var cake = document.getElementById('lbl_cake').innerHTML;
    var coffee = document.getElementById('lbl_coffee').innerHTML;
    var water = document.getElementById('lbl_water').innerHTML;
    var badness_level = ((hugs*1)+(cake*2)+(coffee*3)+(water*4));

   if (badness_level < 25) {
        document.getElementById('badness-level').innerHTML = "Stitch not bad. Stitch Fluffy!";
        document.getElementById('img_badness_level').src = "assets/bad0.jpg"
        }
   else if (badness_level < 50) {
        document.getElementById('badness-level').innerHTML = "Uh-Oh. Badness coming on.";
        document.getElementById('img_badness_level').src = "assets/bad1.jpg"
        }
   else {
        document.getElementById('badness-level').innerHTML = "Your badness level is unusually high for someone your size.";
        document.getElementById('img_badness_level').src = "assets/bad2.jpg"
        }
    }


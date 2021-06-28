function reset() {
    let hugs = 0;
    document.getElementById('lbl_hugs').innerHTML = hugs;
    let cake = 0;
    document.getElementById('lbl_cake').innerHTML = cake;
    let coffee = 0;
    document.getElementById('lbl_coffee').innerHTML = coffee; 
    let water = 0;
    document.getElementById('lbl_water').innerHTML = water;
    document.getElementById('badness-level').innerText = "Stitch not bad. Stitch Fluffy!";
    document.getElementById('img_badness_level').src = "https://firebasestorage.googleapis.com/v0/b/images-4783e.appspot.com/o/stitch_badness_level%2Fbad0.jpg?alt=media&token=f4d6c75b-8cb8-422f-962f-7990a49fd8b1"
    }

function more() {
    let action_value = document.getElementById('lbl_'+action).innerHTML;
    if (action_value <10) {
        action_value++;
    } else {
        action_value;
    }
    document.getElementById('lbl_'+action).innerHTML = action_value;
    badness_level();
    }

function less() {
    let action_value = document.getElementById('lbl_'+action).innerHTML;
    if (action_value >0) {
        action_value--;
    } else {
        action_value;
    }
    document.getElementById('lbl_'+action).innerHTML = action_value;
    badness_level();
    }

function badness_level() {
    let hugs = document.getElementById('lbl_hugs').innerHTML;
    let cake = document.getElementById('lbl_cake').innerHTML;
    let coffee = document.getElementById('lbl_coffee').innerHTML;
    let water = document.getElementById('lbl_water').innerHTML;
    let badness_level = ((hugs*-2)+(cake*-2))+((coffee*3)+(water*2));

   if (badness_level < 15) {
        document.getElementById('badness-level').innerHTML = "Stitch not bad. Stitch Fluffy!";
        document.getElementById('img_badness_level').src = "https://firebasestorage.googleapis.com/v0/b/images-4783e.appspot.com/o/stitch_badness_level%2Fbad0.jpg?alt=media&token=f4d6c75b-8cb8-422f-962f-7990a49fd8b1"
        }
   else if (badness_level < 25) {
        document.getElementById('badness-level').innerHTML = "Uh-Oh. Badness coming on.";
        document.getElementById('img_badness_level').src = "https://firebasestorage.googleapis.com/v0/b/images-4783e.appspot.com/o/stitch_badness_level%2Fbad1.jpg?alt=media&token=8d148673-fa94-4f58-bbaa-ba83605a6dd1"
        }
   else {
        document.getElementById('badness-level').innerHTML = "Your badness level is unusually high for someone your size.";
        document.getElementById('img_badness_level').src = "https://firebasestorage.googleapis.com/v0/b/images-4783e.appspot.com/o/stitch_badness_level%2Fbad2.jpg?alt=media&token=a9800f78-dec1-4519-9966-b5484cdeb8ac"
        }
    }


/**
 * @version 1.1
 * @description Digital recreation of the classic Magic 8 Ball.
 * @author Mary Fagan
 */


/**
 * Displays randomly chosen text.
 * @todo Consider separaing this into multiple functions.
 */
function func_shake() {

    document.getElementById("white_ball").style.display = "none";
    document.getElementById("blue_triangle").style.display = "inline-block";

    // New code using an array 
    // Random number generated between 0 and 19 
    const answer = Math.floor(Math.random() * 20);

    // Array of possible messages.
    const text = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes – definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];

    //  Message generated using the number generated at "answer" as the index position of the text array
    const message = text[answer];
    document.getElementById("message").innerText = (message);

    // Original code with switch case.

    // const answer = Math.ceil(Math.random()*20);

    // switch (answer) {
    //     case 1 :
    //         document.getElementById("message").innerText = ("It is certain.");
    //         break;
    //     case 2 :
    //         document.getElementById("message").innerText = ("It is decidedly so.");
    //         break;
    //     case 3 :
    //         document.getElementById("message").innerText = ("Without a doubt.");
    //         break;
    //     case 4 :
    //         document.getElementById("message").innerText = ("Yes – definitely.");
    //         break;
    //     case 5 :
    //         document.getElementById("message").innerText = ("You may rely on it.");
    //         break;
    //     case 6 :
    //         document.getElementById("message").innerText = ("As I see it, yes.");
    //         break;
    //     case 7 :
    //         document.getElementById("message").innerText = ("Most likely.");
    //         break;
    //     case 8 :
    //         document.getElementById("message").innerText = ("Outlook good.");
    //         break;
    //     case 9 :
    //         document.getElementById("message").innerText = ("Yes.");
    //         break;
    //     case 10 :
    //         document.getElementById("message").innerText = ("Signs point to yes.");
    //         break;
    //     case 11 :
    //         document.getElementById("message").innerText = ("Reply hazy, try again.");
    //         break;
    //     case 12 :
    //         document.getElementById("message").innerText = ("Ask again later.");
    //         break;
    //     case 13 :
    //         document.getElementById("message").innerText = ("Better not tell you now.");
    //         break;
    //     case 14 :
    //         document.getElementById("message").innerText = ("Cannot predict now.");
    //         break;
    //     case 15 :
    //         document.getElementById("message").innerText = ("Concentrate and ask again.");
    //         break;      
    //     case 16 :
    //         document.getElementById("message").innerText = ("Don't count on it.");
    //         break;
    //     case 17 :
    //         document.getElementById("message").innerText = ("My reply is no.");
    //         break;
    //     case 18 :
    //         document.getElementById("message").innerText = ("My sources say no.");
    //         break;
    //     case 19 :
    //         document.getElementById("message").innerText = ("Outlook not so good.");
    //         break;
    //     case 20 :
    //         document.getElementById("message").innerText = ("Very doubtful.");
    //         break;  
    //     default :
    //         document.getElementById("message").innerText = ("Invalid");
    //         break;          
    //     }
}


/**
 * Resets the display on the ball.
 */
function func_reset() {
    document.getElementById("white_ball").style.display = "inline-block";
    document.getElementById("blue_triangle").style.display = "none";
    document.getElementById("message").innerText = " ";
}
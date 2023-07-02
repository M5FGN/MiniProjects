<?php 

// Rock == 1;
// Paper == 2;
// Scissors == 3; 

    $p1 = 0;
    $p2 = 0;
         
    if (isset($_GET['mode'])) {
        $mode = $_GET['mode']; 
    } else {
        $mode = 0;
    }                

?>

<html>
    <head>
        <title>Rock Paper Scissors</title><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    </head>
    <body>
        <style>

            body {
                background-color: #B4CDED;
            }

            h1 {
                font-size: 40px;
                color: #344966;
                text-align: center;
            }

            h2 {
                color: #fff;
                text-align: center;
            }

            .error {
                color: red;
            }

            #moves, #btns_mode {
                text-align: center;
            }

            input[type=button] {
                padding: 20px;
                margin: 10px;
                border-radius: 20px;
                border: none;
                background-color: #344966;
                color: #B4CDED;
                font-size: 18px;
            }

            a {
                padding: 20px;
                margin: 20px 0px;
                display: inline-block;
                width: 150px;
                border: 2px solid #B4CDED;
                border-radius: 10px;
            }

            a:hover {
                border: 2px solid #344966;
            }

            i {
                font-size: 150px;
                color: #344966;
            }

        </style>

        <h1>Rock Paper Scissors</h1>
        <h2 id="message"></h2>
        <h2 id="turn"></h2>


        <div id="moves">
            <a href="#" id="move_1"><i class="fa-solid fa-hand-back-fist"></i></a>
            <a href="#" id="move_2"><i class="fa-sharp fa-solid fa-hand"></i></a>
            <a href="#" id="move_3"><i class="fa-solid fa-hand-scissors"></i></a>  
        </div>
      
        <br>
        <input type="hidden" id="p1_move">
        <input type="hidden" id="p2_move">
        <input type="hidden" id="player_turn">
        <br>

        <br>
        <div id="btns_mode">
        <p id="player_mode" value="player_mode"></p>
        <br>
        <input type="button" id="p1" value="Player 1 Vrs Computer">
        <input type="button" id="p2" value="Player 1 Vrs Player 2">
        </div>

    </body>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js" integrity="sha512-pumBsjNRGGqkPzKHndZMaAG+bir374sORyzM3uulLV14lN5LyykqNk8eEeUlUkB3U0M4FApyaHraT65ihJhDpQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <script>
        
        $(document).ready(function(){

            function hide_moves(){
                $('#move_1').hide();
                $('#move_2').hide();
                $('#move_3').hide();
            }

            function show_moves(){
                $('#move_1').show();
                $('#move_2').show();
                $('#move_3').show();
            }

            function hide_messages(){
                $('.play_message').hide();
            }

            function check_winner(){
                if ($("#p1_move").val() && $("#p2_move").val()){

                    $("#turn").hide();

                    if (<?php echo $mode ?> == 2) {
                        player2 = "Player 2"; 
                    } else {
                        player2 = "Computer";
                    }

                    if ($("#p1_move").val() == $("#p2_move").val()) {
                        winning_message = "Draw - There is no winner!";
                        hide_moves();
                        hide_messages();
                        $("#message").text(winning_message);
                    }
                    if ($("#p1_move").val() == 1 && $("#p2_move").val() == 2) {
                        winning_message = player2 + " (Paper) - Wins";
                        hide_moves();
                        hide_messages();
                        $("#message").text(winning_message);
                        
                    }
                    if ($("#p1_move").val() == 2 && $("#p2_move").val() == 3) {
                        winning_message = player2 + " (Scissors) - Wins";
                        hide_moves();
                        hide_messages();
                        $("#message").text(winning_message);
                    }
                    if ($("#p1_move").val() == 3 && $("#p2_move").val() == 1) {
                        winning_message = "Player 1 (Rock) - Wins";
                        hide_moves();
                        hide_messages();
                        $("#message").text(winning_message);
                    }
                    if ($("#p2_move").val() == 1 && $("#p1_move").val() == 2) {
                        winning_message ="Player 1 (Paper) - Wins";
                        hide_moves();
                        hide_messages();
                        $("#message").text(winning_message);
                    }
                    if ($("#p2_move").val() == 2 && $("#p1_move").val() == 3) {
                        winning_message ="Player 1 (Scissors) - Wins";
                        hide_moves();
                        hide_messages();
                        $("#message").text(winning_message);
                    }
                    if ($("#p2_move").val() == 3 && $("#p1_move").val() == 1) {
                        winning_message = player2 + " (Rock) - Wins";
                        hide_moves();
                        hide_messages();
                        $("#message").text(winning_message);
                    }
                }
            }

            console.log("mode " + <?php echo $mode; ?>);

            // Switch Mode
            $("#p1").click(function(){
                $(location).attr('href', 'gamecard.php?mode=1')
            });
            $("#p2").click(function(){
                $(location).attr('href', 'gamecard.php?mode=2')
            });


            if(<?php echo $mode ?> == 0) {
                hide_moves();
                error = "Choose a Player Mode.";
                $("#message").text(error);
            } else { 
                $("#player_turn").val("1");
                show_moves();
            }

            if (<?php echo $mode ?> == 1) {
                message = "You are playing against the computer.";
                turn_message = "Player 1 to choose ...";

                $("#message").text(message);
                $("#turn").text(turn_message);

                let p2 = Math.round(Math.random()*(3-1)+1);
                $("#p2_move").val(p2);
            }

            if (<?php echo $mode ?> == 2) {
                message = "You are playing against a friend.";
                turn_message = "Player 1 to choose ...";
                $("#message").text(message);
                $("#turn").text(turn_message);
            }

            $("#move_1").click(function(){
                if($("#player_turn").val() == 1) {
                    $("#p1_move").val(1);
                } else if($("#player_turn").val() == 2 && !$("#p2_move").val()) {
                    $("#p2_move").val(1);
                } 
                $("#player_turn").val(2);
                turn_message = "Player 2 to choose ...";
                $("#turn").text(turn_message);
                check_winner();
            })

            $("#move_2").click(function(){
                if($("#player_turn").val() == 1) {
                    $("#p1_move").val(2);
                } else if($("#player_turn").val() == 2 && !$("#p2_move").val()) {
                    $("#p2_move").val(2);
                } 
                $("#player_turn").val(2);
                turn_message = "Player 2 to choose ...";
                $("#turn").text(turn_message);
                check_winner();
            })

            $("#move_3").click(function(){
                if($("#player_turn").val() == 1) {
                    $("#p1_move").val(3);
                } else if($("#player_turn").val() == 2 && !$("#p2_move").val()) {
                    $("#p2_move").val(3);
                } 
                $("#player_turn").val(2);
                turn_message = "Player 2 to choose ...";
                $("#turn").text(turn_message);
                check_winner();
            })

    
        });
    </script>
</html>
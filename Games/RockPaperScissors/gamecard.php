<?php 

// Rock == 1;
// Paper == 2;
// Scissors == 3; 

// TODO can the player variables start with no value?
$p1 = 0;
$p2 = 0;

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

        <?php 
            
            // TODO - Add note to say why added isset
            $mode = $_GET['mode'];

            // TODO - Add note on rand
            // if ($mode == 1) {
            //     $p2 = rand(1, 3);
            // }

            if (!$mode){
                print_r("<h2 class='error'>Choose a Player Mode.</h2>");
            } 

            if ($mode == 1) {
                print_r("<h2>You are playing against the computer.</h2>");
                print_r("<h2 id='turn'>Player 1 to choose ...</h2>");
            } elseif ($mode == 2) {
                print_r("<h2>You are playing against a friend.</h2>");  
                print_r("<h2 id='turn'>Player 1 to choose ...</h2>");
            }

            $turn = 1;
        ?>

        <div id="moves">
            <a href="#" id="move_1"><i class="fa-solid fa-hand-back-fist"></i></a>
            <a href="#" id="move_2"><i class="fa-sharp fa-solid fa-hand"></i></a>
            <a href="#" id="move_3"><i class="fa-solid fa-hand-scissors"></i></a>  
        </div>
      


        <br>
        <input type="text" id="p1_move">
        <input type="text" id="p2_move">
        <input type="text" id="player_turn">
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
        console.log("mode " + <?php echo $mode; ?>);
        
        $(document).ready(function(){

            // Switch Mode
            $("#p1").click(function(){
                $(location).attr('href', 'gamecard.php?mode=1')
            });
            $("#p2").click(function(){
                $(location).attr('href', 'gamecard.php?mode=2')
            });

            $("#player_turn").val(1);

            // Mode 1 - Set Player 2
            if (<?php echo $mode ?> == 1){
                $("#p2_move").val(Math.ceil(Math.random()*3));
            }

            // Player 1
            if ($("#player_turn").val() == 1) {
                console.log($("#player_turn").val());
                $("#move_1").click(function(){
                    $("#p1_move").val(1);
                    $("#player_turn").val(2);
                })
                $("#move_2").click(function(){
                    $("#p1_move").val(2);
                    $("#player_turn").val(2);
                })
                $("#move_3").click(function(){
                    $("#p1_move").val(3);
                    $("#player_turn").val(2);
                })
            }
            
            // Player 2
            if ((<?php echo $mode ?> == 2) && ($("#player_turn").val() == 2) ){
                $("#turn").text("Player 1 to choose ...");

                $("#move_1").click(function(){
                    $("#p2_move").val(1);
                })
                $("#move_2").click(function(){
                    $("#p2_move").val(2);
                })
                $("#move_3").click(function(){
                $("#p2_move").val(3);
                })
            }      
        });
    </script>
</html>
# The-dice-game

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dice Game</title>
    <link rel="stylesheet" href="dice.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">

  
</head>

<body>
    <div class="container">
        <h1>The Dice Game</h1>
    <div>
            <p id="para"><strong>About the game:</strong> Let's roll the dice and check which player gets the highest
                value. The player with the highest value will be the winner! Let's roll!</p>
            </div>  
    <div class="dice">
            <h4>Player 1</h4>
            <img class="img1" src="JS/images/dice6.png">
    </div>
    <div class="dice">
            <h4>Player 2</h4>
            <img class="img2" src="JS/images/dice6.png">
    </div>
    <div>
            <button class="btn" onclick="refresh()">Refresh</button>
            <h3>Click on refresh button to see who wins!</h3>
        </div>
    </div>
    <script src="dice.js" charset="utf-8"></script>
</body>
<footer id="footer">
    <p>www 🎲 The Game 🎲 com</p>
</footer>

</html>

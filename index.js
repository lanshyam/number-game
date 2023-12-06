function startGame() {
    const numPlayers = parseInt(document.getElementById('numPlayers').value);

    if (isNaN(numPlayers) || numPlayers < 1) {
        alert("Please enter a valid number of players");
    }

    let playerScores = [];
    let winners = [];
    let highestScore = 0;

    for (let i = 0; i < numPlayers; i++) {
        let playerName = prompt("Enter Player " + (i + 1) + "'s name:");

        const answer = Math.floor(Math.random() * 100000 + 1);

        let tries = 0;

        while (true) {
            let input = parseInt(prompt(playerName + ", enter your guess (between 1 and 100,000):"));

            if (isNaN(input) || input <= 0 || input > 100000) {
                alert("Invalid input. Please enter a number between 1 and 100.");
            }

            tries++;

            if (tries == 100) {
                alert("you have exceeded the maximum amount of tries")
                break;
            }

            if (input === answer) {
                alert("Congratulations, " + playerName + "! That's correct. Your score is " + (101 - tries));
                playerScores.push({ name: playerName, score: 101 - tries });


                if (101 - tries > highestScore) {
                    highestScore = 101 - tries;
                    winners = [playerName];
                } 
                
                else if (101 - tries === highestScore) {
                    winners.push(playerName);
                }

                break;
            } 
            else if (input < answer) {
                alert("The number you entered is SMALLER than the answer");
            } 
            else {
                alert("The number you entered is LARGER than the answer");
            }
        }
    }

    const players = document.getElementById('players');
    players.innerHTML = "<h2>Game Over! Scores:</h2>";

    for (let i = 0; i < playerScores.length; i++) {
        players.innerHTML += "<p>" + playerScores[i].name + ": " + playerScores[i].score + "</p>";
    }

    players.innerHTML += "<h2>Winner(s):</h2>";
    
    if (winners.length === 1) {
        players.innerHTML += "<p>" + winners[0] + " is the winner with a score of " + highestScore + "!</p>";
    } 
    else if (winners.length > 1) {
        players.innerHTML += "<p>It's a tie! The winners with a score of " + highestScore + " are: " + winners.join(', ') + "!</p>";
    } 
}

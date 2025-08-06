// Initialize scores for user and computer
let userScore = 0;
let compScore = 0;

// Select DOM elements for choices, message display, and score display
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Function to generate computer's random choice: rock, paper, or scissors
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

// Handle a draw scenario: update message and styling
const drawGame = () => {
    console.log("Draw");
    msg.innerText = "Draw";
    msg.style.backgroundColor = "grey";
};

// Display the winner of the round, update scores and styling
// userWin: boolean indicating if the user won
// userChoice, compChoice: the choices made this round
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        // Increment and display user's score
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Won!");
        msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        // Increment and display computer's score
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lost.");
        msg.innerText = `You Lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

// Main game logic: compare user choice with computer's, determine outcome
const playGame = (userChoice) => {
    console.log("User Choice: ", userChoice);
    // Generate computer's choice
    const compChoice = genCompChoice();
    console.log("Comp Choice: ", compChoice);

    // Check for draw
    if (userChoice === compChoice) {
        drawGame();
    } else {
        // Determine if user wins; default assumption is true
        let userWin = true;

        // Evaluate losing conditions for user
        if (userChoice === "rock") {
            // Rock loses to Paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // Paper loses to Scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // Scissors lose to Rock
            userWin = compChoice === "rock" ? false : true;
        }

        // Display the result
        showWinner(userWin, userChoice, compChoice);
    }
};

// Attach click event listeners to each choice button
choices.forEach((choice) => {
    // For debugging: log the element
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
// City class
class City {
    constructor(name, imageArray, hint)
    {
        this.name = name;
        this.imageArray = imageArray;
        this.hint = hint;
    }
}

// U.S. cities
const ny = new City("New York City", ["./images/nyc1.jpg", "./images/nyc2.avif", "./images/nyc3.jpg", "./images/nyc4.webp", "./images/nyc5.webp", "./images/nyc6.jpg", "./images/nyc7.jpg"], "The greatest city in the world (Unopinionated).");
const la = new City("Los Angeles", ["./images/la1.avif", "./images/la2.jpg", "./images/la3.jpg", "./images/la4.jpg", "./images/la5.jpeg", "./images/la6.jpeg", "./images/la7.jpg"], '\u266B' + " Californiaaa.. knows how to party.." + '\u266B' + ". In the cityyyy of __. " + '\u266B');
const sf = new City("San Francisco", ["./images/sf1.jpg", "./images/sf2.webp", "./images/sf3.jpeg", "./images/sf4.jpg"], "They named their most famous bridge with a different color than it actually is.");
const seattle = new City("Seattle", ["./images/seattle1.jpg", "./images/seattle2.jpg"], "That's the space needle.");
const chicago = new City("Chicago", ["./images/chicago1.avif", "./images/chicago2.jpg", "./images/chicago3.webp"], "chicago hint");
const lv = new City("Las Vegas", ["./images/lv1.avif", "./images/lv2.jpg", "./images/lv3.jpg", "./images/lv4.jpg"], "lv hint");
const philly = new City("Philadelphia", ["./images/philly1.jpg", "./images/philly2.jpg", "./images/philly3.jpg", "./images/philly4.jpg"], "philly hint");
const dc = new City("Washington D.C.", ["./images/dc1.jpg", "./images/dc2.jpeg", "./images/dc3.webp"], "dc hint");
const miami = new City("Miami", ["./images/miami1.jpg", "./images/miami2.jpeg", "./images/miami3.jpg"], "miami hint");
const atl = new City("Atlanta", ["./images/atl1.webp", "./images/atl2.jpg"], "atl hint");
const denver = new City("Denver", ["./images/denver1.avif", "./images/denver2.jpg"], "denver hint");
const phx = new City("Phoenix", ["./images/phx1.jpg", "./images/phx2.jpg", "./images/phx3.png"], "phx hint");
const boston = new City("Boston", ["./images/boston1.jpg", "./images/boston2.jpg", "./images/boston3.jpg", "./images/boston4.webp", "./images/boston5.webp"], "boston hint");
const nash = new City("Nashville", ["./images/nash1.jpg", "./images/nash2.avif"], "nash hint");
const stl = new City("St. Louis", ["./images/stl1.webp", "./images/stl2.webp"], "stl hint");
const portland = new City("Portland", ["./images/portland1.jpg", "./images/portland2.webp"], "portland hint");
const knox = new City("Knoxville", ["./images/knox1.jpg", "./images/knox2.jpg", "./images/knox3.jpg"], "knox hint");
// const cross = new City("Crossville, Tennessee", ["./images/cross.jpg"], "cross hint");

// U.S. cities array
const usa = [ny, la, sf, seattle, chicago, lv, philly, dc, miami, atl, denver, phx, boston, nash, stl, portland, knox];


// European countries
const germany = new City("Germany", ["./images/munich.avif", "./images/berlin1.avif", "./images/berlin2.jpg", "./images/bayern.jpg"], "germany hint");
const france = new City("France", ["./images/paris1.jpg", "./images/paris2.webp", "./images/paris3.jpeg"], "france hint");
const england = new City("England", ["./images/london1.jpg", "./images/london2.jpg", "./images/london3.webp", "./images/london4.jpg"], "england hint");
const spain = new City("Spain", ["./images/barcelona1.webp", "./images/barcelona2.jpg", "./images/barcelona3.jpeg"], "spain hint");
const norway = new City("Norway", ["./images/norway.jpg", "./images/oslo1.webp"], "norway hint");
const denmark = new City("Denmark", ["./images/copenhagen1.jpg", "./images/copenhagen2.jpg", "./images/copenhagen3.jpg"], "denmark hint");
const netherlands = new City("The Netherlands", ["./images/amsterdam1.jpg", "./images/amsterdam2.jpg", "./images/utrecht.webp"], "netherlands hint");
const czech = new City("Czech Republic", ["./images/prague1.jpg", "./images/prague2.jpg", "./images/prague3.jpg", "./images/prague4.webp"], "czech republic hint");
const portugal = new City("Portugal", ["./images/lisbon1.webp", "./images/nazare.jpg", "./images/lisbon2.jpg"], "portugal hint");
const austria = new City("Austria", ["./images/austria1.jpg", "./images/austria2.jpg", "./images/austria3.jpg"], "austria hint");
const switzerland = new City("Switzerland", ["./images/switzerland1.jpg", "./images/zurich1.jpg", "./images/zurich2.jpeg", "./images/zurich3.jpg", "./images/zurich4.jpg", "./images/lucerne1.jpg", "./images/lucerne2.webp"], "switzerland hint");
const italy = new City("Italy", ["./images/milan.webp", "./images/siena.jpeg", "./images/tuscany.jpg", "./images/florence.jpg", "./images/amalfi.webp"], "italy hint");


// European countries array
const europe = [germany, france, england, spain, norway, denmark, netherlands, czech, portugal, austria, switzerland, italy];


// Queue class
class Queue {
    constructor() {
        this.queue = [];
    }

    isEmpty() {
        return this.queue.length == 0;
    }

    push(item) {
        // add new items to back of array
        this.queue.push(item);
    }

    pop()
    {
        if (!this.isEmpty())
        {
            // pop by moving every element following the first up one position in the array (overwriting the first element and moving the rest up one position)
            this.queue.shift();
            return true;
        }
        else
        {
            return false;
        }
    }

    peek() {
        if (!this.isEmpty())
        {
            return this.queue[0];
        }
        else
        {
            return false;
        }
    }
}

// Global "pointer" for tracking which version of the game is being played. (value to be assigned is the array of the correct version of the game)
let currentRegion;
// cityQueue placeholder for holding cities in each game
const cityQueue = new Queue();
// number of rounds per game
const rounds = 4;
// placeholder for current number of correct answers
let correctCount = 0;
// placeholder for current question number
let currentRound = 1;
// current grade (percentage out of 100)
let currentGrade = Math.round((correctCount / currentRound) * 100);

// an array holding various responses to display when answer is correct
const correctResponses = ["Correct!", "Impressive!", "Nice!", "Well done.", "Bravo!"];

/* End main data
***********************************************************************************************************************************************************
***********************************************************************************************************************************************************
   Begin helper functions
*/


// Function for generating random index between 0 - (n - 1).
function randomIndex(n)
{
    return Math.floor(Math.random() * n);
}

// Temporary helper function for checking if a particular index has already been used for filling queue (There's probably a more efficient way)
// Takes an arrray of used indexes and the new index to be checked.
function indexAlreadyUsed(usedIndexArray, newIndex) {
    for (let i = 0; i < usedIndexArray.length; i++)
    {
        if (usedIndexArray[i] == newIndex)
        {
            return true; // already used
        }
    }
    return false; // not yet used
}

// Converts number grade into letter grade. returns a string letter grade
function convertToLetterGrade(grade) {
    switch(true) {
        case (97 <= grade && grade <= 100):
            return "A+";
            break;
        case (93 <= grade && grade <= 96):
            return "A";
            break;
        case (90 <= grade && grade <= 92):
            return "A-";
            break;
        case (87 <= grade && grade <= 89):
            return "B+";
            break;
        case (83 <= grade && grade <= 86):
            return "B";
            break;
        case (80 <= grade && grade <= 82):
            return "B-";
            break;
        case (77 <= grade && grade <= 79):
            return "C+";
            break;
        case (73 <= grade && grade <= 76):
            return "C";
            break;
        case (65 <= grade && grade <= 72):
            return "C-";
            break;
        case (50 <= grade && grade <= 64):
            return "D";
            break;
        case (grade < 50):
            return "F";
            break;
    }
}

// helper function to provide the correct indefinite article while announcing grade
// just returns the article by its self in string format
function correctArticleForGradeHelper(grade) {
    let letterGrade = convertToLetterGrade(grade);
    if (letterGrade[0] == 'A' || letterGrade[0] == 'F')
    {
        return "an";
    }
    else
    {
        return "a";
    }
}

// generates comments to display based on the user's score. param integer score. returns string.
function generateFeedback(score) {
    switch(convertToLetterGrade(score)) {
        case "A+":
            return "Is there anywhere you haven't been? You know this country like the back of your hand. City expert!";
            break;
        case "A":
            return "You've been around, huh? You know your cities better than most! Outstanding performance.";
            break;
        case "A-":
            return "Not your first trip around country, is it? You've demonstrated your knowledge of the map on this one. Impressive work!";
            break;
        case "B+":
            return "You've clearly racked up some miles. You deserve a vacation after that performance. Go wild with all those travel rewards!";
            break;
        case "B":
            return "B-B-B-eautiful performance. You've been watching the travel channel, haven't you?";
            break;
        case "B-":
            return "Not too shabby. You've seen some sights, that's for sure!";
            break;
        case "C+":
            return "You know the important cities quite well, but show those tier 3 cities some love every now and then!";
            break;
        case "C":
            return "Okay, okay. You know your cities decently well, but you still have some room to grow. But hey, that's the fun part right?";
            break;
        case "C-":
            return "Something tells me that wasn't your best go. Give it another shot, I know you can do better than that!";
            break;
        case "D":
            return "Yikes... I hope you at least got a good price. On that rock you've been living under!";
            break;
        case "F":
            return "You should really get out of the house more often! That was hard to watch.";
            break;
    }
}

/* End helper functions
***********************************************************************************************************************************************************
***********************************************************************************************************************************************************
   Begin game functions
*/

// called by showResults()
function displayNextGameButtons() {
    //initialized as hidden

    // add two new containers, one to each side of results container
    const leftEnd = document.createElement("div");
    leftEnd.id="leftEnd";
    leftEnd.style.visibility = "hidden";
    const rightEnd = document.createElement("div");
    rightEnd.id="rightEnd";
    rightEnd.style.visibility = "hidden";
    gameContainer.insertBefore(leftEnd, results);
    results.after(rightEnd);

    // Play again prompt/buttons (same version)
    const leftSideDiv = document.createElement("div");
    leftEnd.appendChild(leftSideDiv);
    leftSideDiv.id="leftSideDiv";
    leftSideDiv.appendChild(document.createElement("h3"));
    let cityOrCountry;
    switch(currentRegion) {
        case usa:
            cityOrCountry = "cities";
            break;
        case europe:
            cityOrCountry = "countries";
            break;
    }
    leftSideDiv.childNodes[0].textContent = `More ${cityOrCountry}!`; // "More cities where those came from!""
    const newGameButtonSame = document.createElement("button");
    newGameButtonSame.id = "newGameButtonSame";
    newGameButtonSame.textContent = "Play Again " + '\u2192';
    newGameButtonSame.classList.add("new-game-button");
    leftSideDiv.appendChild(newGameButtonSame);
    // adding a little style on hover
    newGameButtonSame.addEventListener("mouseenter", () => {
        newGameButtonSame.style.background = "linear-gradient(to bottom left, white, 1%, rgb(27, 79, 235, 0.8)";
    });
    newGameButtonSame.addEventListener("mouseout", () => {
        newGameButtonSame.style.background = null;
    });


    // Play again prompt/button (different version)
    const rightSideDiv = document.createElement("div");
    rightEnd.appendChild(rightSideDiv);
    rightSideDiv.id="rightSideDiv";
    rightSideDiv.appendChild(document.createElement("h3"));
    rightSideDiv.childNodes[0].textContent = "Broaden your horizons";
    const newGameButtonDiff1 = document.createElement("button"); // different version 1
    newGameButtonDiff1.id="newGameButtonDiff1";
    const newGameButtonDiff2 = document.createElement("button"); // different version 2
    newGameButtonDiff2.id="newGameButtonDiff2";
    // to properly name the newGameButtonDiff buttons
    let otherVersion1;
    let otherVersion2;
    if (currentRegion == usa)
    {
        otherVersion1 = "Europe";
        otherVersion2 = "Worldwide";
    }
    else if (currentRegion == europe)
    {
        otherVersion1 = "USA";
        otherVersion2 = "Worldwide";
    }
    else
    {
        otherVersion1 = "Europe";
        otherVersion1 = "USA";
    }
    newGameButtonDiff1.textContent = `${otherVersion1} ` + '\u2192';
    newGameButtonDiff2.textContent = `${otherVersion2} ` + '\u2192';
    newGameButtonDiff1.classList.add("new-game-button");
    newGameButtonDiff2.classList.add("new-game-button");
    rightSideDiv.appendChild(newGameButtonDiff1);
    rightSideDiv.appendChild(newGameButtonDiff2);

    // adding a little style on hover - button 1
    newGameButtonDiff1.addEventListener("mouseenter", () => {
        newGameButtonDiff1.style.background = "linear-gradient(to bottom left, white, 1%, rgb(27, 79, 235, 0.8)";
    });
    newGameButtonDiff1.addEventListener("mouseout", () => {
        newGameButtonDiff1.style.background = null;
    });

    // adding a little style on hover - button 2
    newGameButtonDiff2.addEventListener("mouseenter", () => {
        newGameButtonDiff2.style.background = "linear-gradient(to bottom left, white, 1%, rgb(27, 79, 235, 0.8)";
    });
    newGameButtonDiff2.addEventListener("mouseout", () => {
        newGameButtonDiff2.style.background = null;
    });
}

// function to wrap the game up: display buttons for next game(s), etc. reset any necessary variables for next game.
function endGame() {
    
     // add event listeners for play again button (same version)
     newGameButtonSame.addEventListener("click", () => {
        gameContainer.classList.remove("game-container-end"); // reset game container class
        gameContainer.classList.add("game-container-start");

        // remove current display
        gameContainer.removeChild(leftEnd);
        gameContainer.removeChild(rightEnd);
        gameContainer.removeChild(results);

        // reset global variables for next game
        currentRound = 1;
        correctCount = 0;
        // clear the queue
        while (!cityQueue.isEmpty())
        {
            cityQueue.pop();
        }
        playGame();
    });

    // add event listeners for play again button (different version 1)
    newGameButtonDiff1.addEventListener("click", () => {
        gameContainer.classList.remove("game-container-end"); // reset game container class
        gameContainer.classList.add("game-container-start");

        // set correct version for next game
        switch(newGameButtonDiff1.textContent.split(' ')[0]) {
            case "Europe":
                currentRegion = europe;
                break;
            case "USA":
                currentRegion = usa;
                break;
        }

        // remove current display
        gameContainer.removeChild(leftEnd);
        gameContainer.removeChild(rightEnd);
        gameContainer.removeChild(results);

        // reset global variables for next game
        currentRound = 1;
        correctCount = 0;
        // clear the queue
        while (!cityQueue.isEmpty())
        {
            cityQueue.pop();
        }
        playGame();
    });

    // // add event listeners for play again button (different version 1)
    // newGameButtonDiff1.addEventListener("click", () => {
    //     gameContainer.classList.remove("game-container-end"); // reset game container class
    //     gameContainer.classList.add("game-container-start");

    //     // remove current display
    //     gameContainer.removeChild(leftEnd);
    //     gameContainer.removeChild(rightEnd);
    //     gameContainer.removeChild(results);

    //     // reset global variables for next game
    //     currentRound = 1;
    //     correctCount = 0;
    //     // clear the queue
    //     while (!cityQueue.isEmpty())
    //     {
    //         cityQueue.pop();
    //     }
    //     playGame();
    // });

    leftEnd.style.visibility = "visible";
    rightEnd.style.visibility = "visible";
}

function showResults() {
    //remove pic and game panel
    gameContainer.removeChild(leftSide);
    gameContainer.removeChild(gamePanel);
    gameContainer.classList.remove("game-container-next"); // revert style
    gameContainer.classList.add("game-container-end");

    const results = document.createElement("div");
    results.id="results";
    results.classList.add("results");
    gameContainer.appendChild(results);
    // append left and right side sections intially hidden
    displayNextGameButtons();
    const calculatingContainer = document.createElement("div"); // The header is kept in a div of its own to keep from moving when adding ". . ." (extra width)
    calculatingContainer.classList.add("calculating-container");
    results.appendChild(calculatingContainer);
    const calc = document.createElement("div");
    calc.id="calc";
    calculatingContainer.appendChild(calc);
    calc.appendChild(document.createElement("h1"));
    // calculatingContainer.appendChild(document.createElement("span"));
    calc.childNodes[0].textContent = "Calculating your results";
    // there's probably a way better way to do this but...
    let timer = 275;
    for (let i = 0; i < 3; i++)
    {
        for (let j = 0; j < 4; j++)
        {
            setTimeout(() => {
                calc.childNodes[0].textContent += ". ";
            }, timer);
            timer += 275;
        }
        timer += 50;
        if (i != 2) // leaves dots on final iteration
        {
            setTimeout(() => {
                calc.childNodes[0].textContent = "Calculating your results";
            }, timer);
        }
        timer += 275;
    }
    setTimeout(() => {
        calc.childNodes[0].textContent = "Calculating your results  ";
        calc.childNodes[0].textContent += "      \u2714";

    }, timer);
    timer += 2000 // wait two second before next step (which is removing "Calculating your results..." and starting to display results)


    // next ->

    // - remove "Calculating your results..." (calculatingContainer)
    // - turn results into a 4 div (or however many lines of results) container, flex-direction column
    // - go ahead and put each line in each div so they're already there and don't move around, but initalize them all to visibility: hidden
    // - one by one, make them visible as you go down the line
    // * will need to continue using timer for this

    setTimeout(() => {
        results.removeChild(calculatingContainer);
        // header for results "Your results are in..."
        const resultsHeader = document.createElement("div");
        resultsHeader.id="resultsHeader";
        resultsHeader.appendChild(document.createElement("h1"));
        resultsHeader.childNodes[0].textContent = "Let's see how you did. . .";
        results.appendChild(resultsHeader);
        const resultsFirstSection = document.createElement("div");
        resultsFirstSection.style.visibility = "hidden";
        resultsFirstSection.classList.add("resultsFirstSection");
        resultsFirstSection.id="resultsFirstSection";
        results.appendChild(resultsFirstSection);
        // add 4 divs to resultsFirstSection container
        for (let i = 0; i < 4; i++)
        {
            const resultsSection = document.createElement("div");
            resultsSection.classList.add("results-sections"); // add the same css class to each div /hi
            resultsSection.id= `resultline${i + 1}`;
            const resultText = document.createElement("p"); // add a <p> into each div
            resultsSection.appendChild(resultText);
            resultsSection.appendChild(document.createElement("span")); // each line is split into to elements (a <p> appended by a <span>), allowing for
                                                                        // differences in style on the second part
            resultsSection.childNodes[1].style.visibility = "hidden"; // initialize each section to be hidden
            resultsFirstSection.appendChild(resultsSection);
            
            // set the appropriate content for each section (div)
            if (i == 0)
            {
                resultText.textContent = "You guessed:   ";
                let cityOrCountry;
                switch(currentRegion) {
                    case usa:
                        cityOrCountry = "cities";
                        break;
                    case europe:
                        cityOrCountry = "countries";
                        break;
                };
                resultsSection.childNodes[1].textContent = `${correctCount} out of ${rounds} ${cityOrCountry} correctly!`;
            }
            if (i == 1)
            {
                resultText.textContent = " Your score:   ";
                resultsSection.childNodes[1].textContent = `${currentGrade}%`;
            }
            if (i == 2)
            {
                resultText.textContent = "Overall grade:   ";
                resultsSection.childNodes[1].textContent = `${convertToLetterGrade(currentGrade)}`;
                resultsSection.childNodes[1].style.fontWeight = "800";
                // apply color to letter grade
                switch((convertToLetterGrade(currentGrade))[0])
                {
                    case 'A':
                        resultsSection.childNodes[1].style.color = "rgb(18, 162, 18)";
                        break;
                    case 'B':
                        resultsSection.childNodes[1].style.color = "rgb(77, 177, 0)";
                        break;
                    case 'C':
                        resultsSection.childNodes[1].style.color = "rgb(228, 228, 16";
                        break;
                    case 'D':
                        resultsSection.childNodes[1].style.color = "orange";
                        break;
                    case 'F':
                        resultsSection.childNodes[1].style.color = "red";
                        break;
                }
            }
            if (i == 3)
            {
                resultText.textContent = "Assessment:   ";
                resultsSection.childNodes[1].textContent = generateFeedback(currentGrade);
            }
        }
    }, timer);

    timer += 1000;
    setTimeout(() => {
        resultsFirstSection.style.visibility = "visible";
    }, timer);

    timer += 2300; // brief delay before displaying lines

    // display each result line one by one
    for (let i = 0; i < 4; i++)
    {   
        setTimeout(() => {
            resultsFirstSection.childNodes[i].childNodes[1].style.visibility = "visible";
        }, timer);
        timer += 2300; // 1.5 seconds between displaying each line
    }

    timer += 3000; // 2 second delay before calling final function of the game
    setTimeout(() => {
        endGame();
    }, timer);
}

function nextRound() {
    // update question number and display
    currentRound++;
    let cityOrCountry;
    switch(currentRegion) {
        case usa:
            cityOrCountry = "City";
            break;
        case europe:
            cityOrCountry = "Country";
            break;
    }
    score.childNodes[0].textContent = `${cityOrCountry} ${currentRound}/${rounds}`;

    // remove most recent city from the queue
    cityQueue.pop();

    // remove answer display
    // gamePanel.removeChild(nextq);

    // add question display back to game panel
    displayQuestion();

    // make hint section visible again
    document.getElementById("hints").style.visibility = "visible";

    setupNewRound();
}

function evaluateAnswer(correct) {

    // temporarily hide hints section
    document.getElementById("hints").style.visibility = "hidden";
    // temporarily remove question and buttons
    gamePanel.removeChild(questions);

    // display answer ("correct" or "incorrect") and add button for going to next question
    const answer = document.createElement("div");
    answer.id = "answer";
    answer.appendChild(document.createElement("h2"));
    answer.childNodes[0].style.fontSize = "2.5rem";
    // for comments
    answer.appendChild(document.createElement("p"));
    //next question button
    const nextQuestionButton = document.createElement("button");
    // adding a little style on hover
    nextQuestionButton.addEventListener("mouseenter", () => {
        nextQuestionButton.style.background = "linear-gradient(to bottom right, white, 15%, black)";
    })
    nextQuestionButton.addEventListener("mouseout", () => {
        nextQuestionButton.style.background = null;
    })
    nextQuestionButton.classList.add("next-question-button");
    nextQuestionButton.textContent = "Next City " + '\u2192';
    gamePanel.insertBefore(answer, hints);

    if (correct == true)
    {
        let response = correctResponses[randomIndex(correctResponses.length)]; // random response for correct answer
        answer.childNodes[0].textContent = response;
        if (correctCount == 7) // high score response
        {
            answer.childNodes[0].textContent = "Is there anywhere you haven't been?";
        }
        if (answer.childNodes[0].textContent.length > 32)
        {
            answer.childNodes[0].style.fontSize = "1.5rem"; // smaller font size if response is longer
        }
        else if (answer.childNodes[0].textContent.length >= 20)
        {
            answer.childNodes[0].style.fontSize = "1.75rem";
        }
        gamePanel.style.background = "linear-gradient(to top right, white, 1%, green)";
        correctCount++;

    }
    else
    {
        answer.childNodes[0].textContent = "Nein!";
        answer.childNodes[1].textContent =  `That's ${cityQueue.peek().name} my friend.`;
        answer.style.justifyContent = "space-around"; // when there're two text elements
        gamePanel.style.background = "linear-gradient(to top left, white, 0%, rgb(178, 13, 13))";
        
    }
    // update display of current grade
    currentGrade = Math.round((correctCount / currentRound) * 100);
    let gradeColor; // for giving the grade a corresponding color
    switch (true) {
        case currentGrade >= 80:
            gradeColor = "rgb(18, 162, 18)";
            break;
        case currentGrade >= 60:
            gradeColor = "orange";
            break;
        case currentGrade < 60:
            gradeColor = "red";
            break;
    }
    score.childNodes[1].textContent = `Current Grade: ${currentGrade}%`;
    score.childNodes[1].style.color = gradeColor;
    
    // Logic for any round except the last one
    if (currentRound != rounds)
    {
        // 2.5 second delay from showing answer with particular color to reverting color and diplaying "next city" button
        // setTimeout(() => {
        //     gamePanel.removeChild(answer);
        //     const nextQ = document.createElement("div");
        //     nextQ.classList.add("next-question-button-container");
        //     nextQ.id = "nextq";
        //     nextQ.appendChild(nextQuestionButton);
        //     gamePanel.insertBefore(nextQ, hints);
        //     gamePanel.style.background = null;
        // }, 2500);

        // nextQuestionButton.addEventListener("click", () => {
        //     nextRound();
        // })


        // goes straight to next question after 3 seconds. loses the next question button
        setTimeout(() => {
            gamePanel.removeChild(answer);
            gamePanel.style.background = null;
            nextRound();
        }, 3500);
    }
    else // On the last round
    {
        setTimeout(() => {
            showResults();
        }, 3700);
    }
}

function displayQuestion() {
    //Questions section
    const questions = document.createElement("div");
    questions.id = "questions";
    questions.classList.add("questions");
    gamePanel.insertBefore(questions, hints);
    questions.appendChild(document.createElement("h2"));
    let cityOrCountry;
    switch(currentRegion) {
        case usa:
            cityOrCountry = "city";
            break;
        case europe:
            cityOrCountry = "country";
            break;
    }
    questions.childNodes[0].textContent = `Which ${cityOrCountry} is this?`;
    questions.childNodes[0].style.fontSize = "1.75rem";
    let choices = document.createElement("div");
    choices.id = "choices";
    choices.classList.add("choices");
    questions.appendChild(choices);
    // add 4 answer choice buttons (initialized here with no text content)
    for (let i = 0; i < 4; i++)
    {
        choices.appendChild(document.createElement("button"));
    }

    // Enable functionality for answer choice buttons
    const buttons = choices.childNodes;
    buttons.forEach((button) => {
        // change color on mouse enter
        button.addEventListener("mouseenter", () => {
            button.style.background = "linear-gradient(to bottom right, black, 20%, white, 90%, black)";
            button.style.color = "black";
            button.style.boxShadow = "5px 4px 5px gray";
        })
        // revert on mouse out
        button.addEventListener("mouseout", () => {
            button.style.background = null; // null reverts the style back to how it is set in the stylesheet (removes alterations made here in js)
            button.style.color = null;
            button.style.boxShadow = null;
        })
        // on click, show answer
        button.addEventListener("click", () => {
            let correctOrIncorrect = button.textContent == cityQueue.peek().name; // bool determining if answer was correct or incorrect
            evaluateAnswer(correctOrIncorrect);
        })
    })
}

function setupGameDisplay()
{
    // Setup game container
    const gameContainer = document.querySelector(".game-container-start");
    gameContainer.id="gameContainer";
    const startButtons = document.querySelector(".game-buttons");
    if (startButtons) // if first game, remove start button
    {
        gameContainer.removeChild(startButtons); // remove start button
    }
    const header = document.querySelector(".header");
    if (header)
    {
        gameContainer.removeChild(header);
    }

    // Briefly display the version which was chosen before starting the game
    const versionDisplayContainer = document.createElement("div");
    versionDisplayContainer.id="versionDisplayContainer";
    gameContainer.appendChild(versionDisplayContainer);
    versionDisplayContainer.appendChild(document.createElement("h2")); // name of version
    switch (currentRegion) {
        case usa:
            versionDisplayContainer.childNodes[0].textContent = "USA";
            break;
        case europe:
            versionDisplayContainer.childNodes[0].textContent = "Europe";
            break;
        // case worldwide:
        //     versionDisplayContainer.childNodes[0].textContent = "Worldwide";
        //     break;
    }
    versionDisplayContainer.appendChild(document.createElement("div")); // image container (probably flag of that region)
    versionDisplayContainer.childNodes[1].appendChild(document.createElement("img"));
    switch (currentRegion) {
        case usa:
            versionDisplayContainer.childNodes[1].childNodes[0].src = "./images/usa-flag.webp";
            break;
        case europe:
            versionDisplayContainer.childNodes[1].childNodes[0].src = "./images/europe-flag.gif";
            break;
    }

    setTimeout(() => {
        gameContainer.removeChild(versionDisplayContainer);
        gameContainer.classList.remove("game-container-start");
        gameContainer.classList.add("game-container-next");
        const leftSide = document.createElement("div"); // add picture section
        leftSide.classList.add("city-image");
        leftSide.id="leftSide";
        gameContainer.appendChild(leftSide);
        const cityPic = document.createElement("img");
        cityPic.id="city-pic";
        leftSide.appendChild(cityPic);
        // Set picture to the correct answer city (selecting a random one from its imageArray)
        let firstPic = cityQueue.peek().imageArray[randomIndex(cityQueue.peek().imageArray.length)];
        cityPic.src=firstPic;
        const gamePanel = document.createElement("div"); // add right side section
        gamePanel.classList.add("game-panel");
        gamePanel.id="gamePanel";
        gameContainer.appendChild(gamePanel);


        // Setup right side of game panel

        // Score section
        let score = document.createElement("div");
        score.id = "score"; /* id allows ability to access dynamically created dom object. i don't think we can reference globally though or it will throw error
                            from the start. will essentially have to pass around through functions once game starts it seems. For example create the game panel here
                            and then once it's time to initalize the queue and buttons and whatnot, we should be able to create a separate function for that,
                            call it at the end of this function and then be able to access the dynamically created dom elements from there since they will now
                            be in the dom. */
        score.classList.add("score");
        gamePanel.appendChild(score);
        let questionNumber = document.createElement("p");
        let cityOrCountry;
        switch(currentRegion) {
            case usa:
                cityOrCountry = "City";
                break;
            case europe:
                cityOrCountry = "Country";
                break;
        }
        questionNumber.textContent = `${cityOrCountry} 1/${rounds}`;
        score.appendChild(questionNumber);
        let grade = document.createElement("p");
        grade.textContent = "Current Grade: --";
        score.appendChild(grade);

        // Hints section
        let hints = document.createElement("div");
        hints.id = "hints";
        hints.classList.add("hints");
        gamePanel.appendChild(hints);
        let hintButton = document.createElement("button");
        hintButton.textContent = "Hint?";
        hints.appendChild(hintButton);
        let hintsRemaining = document.createElement("p");
        hintsRemaining.textContent = "3 remaining";
        hints.appendChild(hintsRemaining);

        // Display question and choice buttons
        displayQuestion();
    }, 2000); // 2 second display of version before moving on
}

function setupCitiesQueue() {
    // // Setup the queue of randomized cities/countries for new game
    let numOfCities = currentRegion.length;
    let usedIndexes = []; // for storing indexes which were already used
    for (let i = 0; i < rounds; i++)
    {
        let randomCityIndex;
        do {randomCityIndex = randomIndex(numOfCities);
        }
        while (indexAlreadyUsed(usedIndexes, randomCityIndex));
        usedIndexes.push(randomCityIndex);
        cityQueue.push(currentRegion[randomCityIndex]);
    }
}

function setupNewRound() {
    // Set picture to the correct answer city (selecting a random one from its imageArray)
    if (currentRound != 1) // pic is already set by this point if it's the first round
    {
        let cityPic = cityQueue.peek().imageArray[randomIndex(cityQueue.peek().imageArray.length)];
        let picContainer = document.getElementById("city-pic");
        picContainer.src=cityPic;
    }

    // Set random answer choices
    // Start with ensuring that the correct city is in one of them, a random one;
    let answerButtonIndex = randomIndex(4);
    choices.childNodes[answerButtonIndex].textContent = cityQueue.peek().name;

    let usedCityIndexes = []; // for storing city indexes which were already used
    
    // push index of the answer city to the usedIndexes array so it is not used below for another answer choice button
    for (let i = 0; i < currentRegion.length; i++)
    {
        if (currentRegion[i].name == cityQueue.peek().name)
        {
            usedCityIndexes.push(i);
        }
    }

    //Set the other 3 buttons with random city names
    for (let i = 0; i < 4; i++)
    {
        let randomCityIndex;
        if (i != answerButtonIndex) // go through all 4 buttons but skip the one holding the correct answer
        {
            do {randomCityIndex = randomIndex(currentRegion.length);
            }
            while (indexAlreadyUsed(usedCityIndexes, randomCityIndex));
            usedCityIndexes.push(randomCityIndex);
            choices.childNodes[i].textContent = currentRegion[randomCityIndex].name;
        }

    }
}




// Play new game
function playGame() {

    // Set up a new queue of (number of rounds) random cities for the game
    setupCitiesQueue();

    // Display the game
    setupGameDisplay();
    
    // Populate image and random answer choices for the first round
    setTimeout(() => {
        setupNewRound();
    }, 2000);

}

// Start new game button
const buttonsContainer = document.querySelector(".game-buttons");
const buttonsList = buttonsContainer.querySelectorAll("div");

const usaButton = buttonsList[1].querySelector("button");
const euroButton = buttonsList[0].querySelector("button");
const worldwideButton = buttonsList[2].querySelector("button");
// U.S. cities button start game on click

for (let i = 0; i < 3; i++)
{
    let button = buttonsList[i].querySelector("button");
    // adding a little style on hover
    button.addEventListener("mouseenter", () => {
        // button.childNodes[0].style.opacity = "0.6";
        button.childNodes[0].style.filter = "brightness(1.25)";
    })
    
    button.addEventListener("mouseout", () => {
        // button.childNodes[0].style.opacity = null;
        button.childNodes[0].style.filter = null;
    })
}



usaButton.addEventListener("click", () => {
    currentRegion = usa;
    playGame();
})

euroButton.addEventListener("click", () => {
    currentRegion = europe;
    playGame();
})
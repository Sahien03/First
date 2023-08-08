const actionContainer = document.querySelector(".action-section");

function clrpage(){
while(actionContainer.firstChild) {
  actionContainer.removeChild(actionContainer.firstChild); // Remove the first child node until there are no child nodes left
}
myLink.style.display="none";
}
//play game
// Event listener for button click
const pbutton = document.getElementById("play-game");
pbutton.addEventListener("click", startplay);
//startplay function
function startplay(){
    clrpage();
    //choices
    const tj = document.createElement('h1');
    tj.textContent = "Enter your choice (rock, paper, or scissors)";
      actionContainer.appendChild(tj);
  
  const choices = ['rock', 'paper', 'scissors'];
    //playerchoice
  var inputElement = document.createElement("input");
        inputElement.setAttribute("type", "text");
    actionContainer.appendChild(inputElement);
       var playerChoice;      inputElement.addEventListener("input", function() {
            playerChoice = inputElement.value.toLowerCase().trim();
                 return;
             });
    var buttonElement = document.createElement("button");
    buttonElement.innerHTML = "Click Me"; // Button label
       actionContainer.appendChild(buttonElement);
    buttonElement.addEventListener("click", function() {
           
 
  if (!choices.includes(playerChoice)) {
    alert('Invalid choice! Please choose rock, paper, or scissors.');
    return;
  }

  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const tj = document.createElement('h1');
      const tj2 = document.createElement('p');  tj.textContent=(determineWinner(playerChoice, computerChoice))
    tj2.textContent = "Player Choice: "+ playerChoice+" , "+"Computer Choice:" +computerChoice;
        actionContainer.appendChild(tj);
        actionContainer.appendChild(tj2);
});
}


function determineWinner(playerChoice, computerChoice) {
if(playerChoice== computerChoice){
 return "match draw";
 }
  return `${/rockscissors|scissorspaper|paperrock/.test(playerChoice+computerChoice)?"You":"Computer"} won`;
}

// List of jokes

const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Did you hear about the mathematician who's afraid of negative numbers? He will stop at nothing to avoid them!",
  "How does a penguin build its house? Igloos it together!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "What do you call a bear with no teeth? A gummy bear!",
  "Why did the bicycle fall over? Because it was two-tired!",
  "What did one wall say to the other wall? I'll meet you at the corner!",
  "Why don't skeletons fight each other? They don't have the guts!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "How do you make a tissue dance? You put a little boogie in it!",
  "What do you call a fake noodle? An impasta!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "What did the grape say when it got stepped on? Nothing, it just let out a little wine!",
  "Why couldn't the leopard play hide and seek? Because he was always spotted!",
  "What do you get if you cross a snowman and a vampire? Frostbite!",
  "Why don't eggs tell jokes? Because they might crack up!",
  "What did one hat say to the other hat? You stay here, I'll go on ahead!",
  "What do you get when you cross a vampire and a snowman? Frostbite!",
  "Why don't scientists trust atoms? Because they make up everything!",
  "What did one wall say to the other wall? I'll meet you at the corner!",
  "Why don't skeletons fight each other? They don't have the guts!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "What did the grape say when it got stepped on? Nothing, it just let out a little wine!",
  "Why couldn't the leopard play hide and seek? Because he was always spotted!",
  "What do you call a fake noodle? An impasta!",
  "Why don't eggs tell jokes? Because they might crack up!"
];



// Function to generate a random joke
function generateJoke() {
  clrpage();
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const tj = document.createElement('h1');
    tj.textContent = jokes[randomIndex];
      actionContainer.appendChild(tj);
  
}

// Event listener for button click
const button = document.getElementById("Tmjo");
button.addEventListener("click", generateJoke);




// Array of quotes
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The secret to getting ahead is getting started. - Mark Twain",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "The harder I work, the luckier I get. - Gary Player",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "The best revenge is massive success. - Frank Sinatra",
  "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "A successful man is one who can lay a firm foundation with the bricks others have thrown at him. - David Brinkley",
  "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this. - Chantal Sutherland"
];

// Function to generate a random quote
function generateQuote() {
    clrpage()
  // Get a random index from the quotes array
  const randomIndex = Math.floor(Math.random() * quotes.length);
  
    const tj = document.createElement('h1');
    // Get the quote at the random index

    tj.textContent = quotes[randomIndex];
    // Display the quote
  
      actionContainer.appendChild(tj);
  
  
  
}

// Get the quote button element
const quoteButton = document.getElementById('quote');

// Add a click event listener to the button
quoteButton.addEventListener('click', generateQuote);



// Define an array of riddles
const riddles = [
  {
    question: "I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?",
    answer: "Pencil"
  },
  {
    question: "What has a heart that doesn't beat?",
    answer: "Artichoke"
  },
  {
    question: "What has keys but can't open locks?",
    answer: "Piano"
  },
  {
    question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
    answer: "Echo"
  },
  {
    question: "What has many teeth but can't bite?",
    answer: "Comb"
  },
  {
    question: "What is full of holes but still holds water?",
    answer: "Sponge"
  },
  {
    question: "What has a head, a tail, is brown, and has no legs?",
    answer: "Penny"
  },
  {
    question: "The more you take, the more you leave behind. What am I?",
    answer: "Footsteps"
  },
  {
    question: "I have cities but no houses, forests but no trees, and rivers but no water. What am I?",
    answer: "Map"
  },
  {
    question: "What gets wetter and wetter the more it dries?",
    answer: "Towel"
  },
  {
    question: "What has hands but can't clap?",
    answer: "Clock"
  },
  {
    question: "What has a thumb and four fingers but is not alive?",
    answer: "Glove"
  },
  {
    question: "What has one eye but cannot see?",
    answer: "Needle"
  },
  {
    question: "What goes up but never comes down?",
    answer: "Age"
  },
  {
    question: "What has a face but no eyes, hands but no arms?",
    answer: "Clock"
  },
  {
    question: "What is so delicate that saying its name breaks it?",
    answer: "Silence"
  },
  {
    question: "I can fly without wings. I can cry without eyes. Wherever I go, darkness follows me. What am I?",
    answer: "Cloud"
  },
  {
    question: "What has keys but can't open locks, space but no room, and you can enter but can't go inside?",
    answer: "Keyboard"
  },
  {
    question: "What has a neck but no head?",
    answer: "Bottle"
  },
  {
    question: "What has to be broken before you can use it?",
    answer: "Egg"
  }
];
let randomRiddle 
function setans(){
    clrpage();
    const q = document.createElement('h1');
    const a = document.createElement('h3');
    q.textContent=randomRiddle.question;
    a.textContent=randomRiddle.answer;
    actionContainer.appendChild(q);
   actionContainer.appendChild(a);
   

}
// Function to generate a random riddle
function generateRiddle() {
    clrpage();
  // Get a random riddle from the array
  const randomIndex = Math.floor(Math.random() * riddles.length);
   randomRiddle = riddles[randomIndex];
  // Display the riddle question
    const tj = document.createElement('h1');
    // Get the quote at the random index

    tj.textContent= randomRiddle.question;
    actionContainer.appendChild(tj);
    
    myLink.style.display="inline";
}

// Attach event listener to the button
const riddleBtn = document.getElementById("riddle");
riddleBtn.addEventListener("click", generateRiddle);
 var myLink = document.getElementById("mylink");

  // Add a click event listener to the <a> tag
  myLink.addEventListener("click",setans);

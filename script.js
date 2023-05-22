const gameContainer = document.getElementById("game");
const startBtn = document.querySelector('button');

startBtn.addEventListener('click', function(e){
  // createDivsForColors(COLORS);
  location.reload();

})

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

//gameContainer is where all the divs are being inserted
//newDiv is the element of the color boxes



const twoCards = [];

const cardMatch = [];

let clickEnabled = true;


console.log(twoCards);

// if(twoCards.length === 2){
//   setTimeout(checkMatch, 1000);
// }



















function checkMatch(){
  if(twoCards[0].style.backgroundColor === twoCards[1].style.backgroundColor){
    console.log('match');
    twoCards.length = 0;
    clickEnabled = true;
    return;
  }
  else
  console.log('No match')
  twoCards[0].style.backgroundColor = "";
  twoCards[1].style.backgroundColor = "";
  twoCards.length = 0;
  
  clickEnabled = true;
}







// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    console.log(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
 
  if(!clickEnabled){
    return;
  }
  // const computedStyle = getComputedStyle(event.target);
  // console.log(getComputedStyle);
  // event.target.style.backgroundColor = color;
  // console.log("you just clicked", event.target);

  //apply color to div depending on class

  const target = event.target;

  // check if the background color is already set to the current color
  if (target.style.backgroundColor === target.classList[0]) {
    // if it is, set the background color to the default color
    target.style.backgroundColor = "";
  } else {
    // if it's not, set the background color to the current color
    target.style.backgroundColor = target.classList[0];
  }
  // console.log(target.style.backgroundColor);
  twoCards.push(target);

  if(twoCards.length === 2){
    clickEnabled = false;
    setTimeout(checkMatch, 1000);
    console.log('full!');
    // twoCards.length = 0;
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);

var randomNumber1 = Math.random(randomNumber1);
randomNumber1 = randomNumber1 * 5;
randomNumber1 = Math.round(randomNumber1) + 1;
if (randomNumber1 == 1) {
  document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
} else if (randomNumber1 == 2) {
  document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
} else if (randomNumber1 == 3) {
  document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
} else if (randomNumber1 == 4) {
  document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
} else if (randomNumber1 == 5) {
  document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
} else if (randomNumber1 == 6) {
  document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
} else {
  document.querySelector("img1").innerHTML =
    "Something problem on script...please check it....";
}

var randomNumber2 = Math.random(randomNumber2);
randomNumber2 = randomNumber2 * 5;
randomNumber2 = Math.round(randomNumber2) + 1;
if (randomNumber2 == 1) {
  document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
} else if (randomNumber2 == 2) {
  document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
} else if (randomNumber2 == 3) {
  document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
} else if (randomNumber2 == 4) {
  document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
} else if (randomNumber2 == 5) {
  document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
} else if (randomNumber2 == 6) {
  document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
} else {
  document.querySelector("img2").innerHTML =
    "Something problem on script...please check it....";
}

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩<em>Player-1 Wins!</em>";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "<em>Player-2 Wins!</em>🚩";
} else if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "<em>Draw!</em>";
} else {
  document.querySelector("h1").innerHTML =
    "Something problem on script...please check it....";
}

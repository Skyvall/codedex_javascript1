const memeArray = [
  "https://i.imgur.com/bSi4xLb.png",
  "https://i.imgur.com/6y0G7N0.png",
  "https://i.imgur.com/LXnRao1.png",
  "https://i.imgur.com/Qqoxh1N.png"
];

const captionsArray = [
  "Living my best life!",
  "Oops, I did it again.",
  "Just another day in paradise.",
  "Too cool for school."
];


let randomMeme = document.getElementById("random-meme");
let randomCaption = document.getElementById("random-caption");
let generateButton = document.getElementById("generator-button");

generateButton.addEventListener("click", function() {
    randomIndex = Math.floor(Math.random() * memeArray.length);
    randomIndex2 = Math.floor(Math.random() * memeArray.length);
    randomMeme.src = memeArray[randomIndex];
    randomCaption.innerText = captionsArray[randomIndex2];
})
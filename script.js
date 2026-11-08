let score = 0;
let playing = false;

const heart = document.getElementById("heart");
const playground = document.getElementById("playground");
const scoreText = document.getElementById("score");
const message = document.getElementById("message");
const start = document.getElementById("start");

heart.style.display = "none";

function moveHeart() {
  let x = Math.random() * (playground.clientWidth - 45);
  let y = Math.random() * (playground.clientHeight - 45);

  heart.style.left = x + "px";
  heart.style.top = y + "px";
}

start.onclick = function() {
  score = 0;
  playing = true;
  scoreText.textContent = score;
  message.textContent = "Catch the hearts! 💗";
  heart.style.display = "block";
  moveHeart();
};

heart.onclick = function() {
  if (!playing) return;

  score++;
  scoreText.textContent = score;

  if (score >= 10) {
    playing = false;
    heart.style.display = "none";
    message.textContent = "YOU WON! 🏆💗";
  } else {
    moveHeart();
  }
};
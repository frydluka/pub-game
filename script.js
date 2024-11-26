const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spin-btn');
const resultsBody = document.getElementById('results-body');
const newRoundBtn = document.getElementById('new-round-btn');
const addChallengeBtn = document.getElementById('add-challenge-btn');
const challengeInput = document.getElementById('challenge-input');
const challengesList = document.getElementById('challenges');

let challenges = ["Take a shot", "Sing a song", "Do 10 pushups"];
let currentRound = {};
let users = ["Alice", "Bob", "Charlie"]; // Temporary user list

// Draw wheel (basic example)
function drawWheel() {
  const ctx = wheel.getContext('2d');
  const sections = challenges.length;
  const arcSize = (2 * Math.PI) / sections;
  challenges.forEach((challenge, index) => {
    ctx.beginPath();
    ctx.moveTo(wheel.width / 2, wheel.height / 2);
    ctx.arc(wheel.width / 2, wheel.height / 2, wheel.width / 2, index * arcSize, (index + 1) * arcSize);
    ctx.fillStyle = index % 2 ? '#a72534' : '#e63946';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  });
}
drawWheel();

// Handle spin
spinBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * challenges.length);
  const chosenChallenge = challenges[randomIndex];
  const user = users.shift(); // Temporary user handling
  users.push(user);
  const row = document.createElement('tr');
  row.innerHTML = `<td>${user}</td><td>${chosenChallenge}</td>`;
  resultsBody.appendChild(row);
});

// Admin page features
if (addChallengeBtn) {
  addChallengeBtn.addEventListener('click', () => {
    const newChallenge = challengeInput.value.trim();
    if (newChallenge) {
      challenges.push(newChallenge);
      const li = document.createElement('li');
      li.textContent = newChallenge;
      challengesList.appendChild(li);
      challengeInput.value = '';
    }
  });
}

if (newRoundBtn) {
  newRoundBtn.addEventListener('click', () => {
    resultsBody.innerHTML = '';
    alert('New round started!');
  });
}

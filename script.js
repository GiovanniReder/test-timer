let counter = 60;
const timer = setInterval(() => {
  counter--;
  const p = document.getElementById("seconds");
  p.innerText = counter;

  const timerElement = document.getElementById("timer");
  const borderPercentage = (counter / 60) * 100;
  timerElement.style.border = `10px solid #00FFFF`;

  if (counter === 0) {
    clearInterval(timer);
    p.innerText = "0";
  }
}, 1000);

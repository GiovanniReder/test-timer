let counter = 60;
const timer = setInterval(() => {
  counter--;
  const p = document.getElementById("seconds");
  p.innerText = counter;

  const timerElement = document.getElementById("timer");
  const borderPercentage = (counter / 60) * 100;
  timerElement.style.border = `20px solid #00FFFF`; // Colore del bordo basato sul tempo rimanente

  if (counter === 0) {
    clearInterval(timer);
    p.innerText = "0";
  }
}, 1000);

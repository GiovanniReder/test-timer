setTimeout(() => {
  const h1 = document.querySelector("h1");
  h1.innerText = "Timer scaduto";
}, 3000);

let counter = 60;

const timer = setInterval(() => {
  counter--;
  const p = document.getElementById("seconds");
  p.innerText = counter;

  if (counter === 0) {
    clearInterval(timer);
    p.innerText = "0";
  }
}, 1000);

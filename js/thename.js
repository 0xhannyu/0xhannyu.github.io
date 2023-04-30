const words = ['Hannyu', '[REDACTED]', 'Hanu', 'SGFudQ==', '0xh'];
const thenameWordElement = document.getElementById('thename');

setInterval(() => {
  const randomWord = words[Math.floor(Math.random() * words.length)];
  thenameWordElement.innerText = randomWord;
}, 100);

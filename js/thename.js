const words = ['Hannyu', '[REDACTED]', 'Hanu', 'SGFudQ==', '0xh', 'हन्नू'];
const thenameWordElement = document.getElementById('thename');

setInterval(() => {
  const randomWord = words[Math.floor(Math.random() * words.length)];
  thenameWordElement.innerText = randomWord;
}, 100);

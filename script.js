function generateLetters() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < 5; i++) {
    result += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  document.getElementById('result').textContent = result;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('generateBtn').addEventListener('click', generateLetters);
});
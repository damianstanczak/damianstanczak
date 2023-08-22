const generateButton = document.getElementById('generateButton');
const copyButton = document.getElementById('copyButton');
const passwordDisplay = document.getElementById('passwordDisplay');

// Zaimportuj listę polskich słów z pliku
fetch('polish_words.txt')
  .then(response => response.text())
  .then(data => {
    const polishWords = data.split('\n'); // Podziel tekst na słowa po znaku nowej linii
    generateButton.addEventListener('click', () => {
      const randomWord1 = getRandomElement(polishWords);
      const randomWord2 = getRandomElement(polishWords);
      const randomDigit1 = Math.floor(Math.random() * 10);
      const randomDigit2 = Math.floor(Math.random() * 10);
      const randomSpecialCharacter = getRandomElement(specialCharacters);
    
      const generatedPassword = `${randomWord1}${randomWord2}${randomDigit1}${randomDigit2}${randomSpecialCharacter}`;
      passwordDisplay.textContent = generatedPassword;
      copyButton.classList.remove('hidden'); // Pokaż przycisk "Kopiuj Hasło"
    });
  })
  .catch(error => console.error('Błąd podczas importowania słów: ', error));

const dynamicText = document.getElementById('dynamic-text');

const phrases = [
    "Welcome to My Website!",
    "First Year Computer Engineering Student",
    "Aspiring Developer",
    "Lifelong Learner"
];

let currentPhraseIndex = 0;
let charIndex = 0;

function typeText() {
    const currentPhrase = phrases[currentPhraseIndex];

    if (charIndex < currentPhrase.length) {
        dynamicText.textContent += currentPhrase.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100); // Typing speed
    } else {
        setTimeout(deleteText, 1000); // Pause before deleting
    }
}

function deleteText() {
    const currentPhrase = phrases[currentPhraseIndex];

    if (charIndex > 0) {
        dynamicText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, 100); // Deleting speed
    } else {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Move to next phrase
        setTimeout(typeText, 500);
    }
}

// Start typing on page load
window.onload = () => {
    typeText();
};

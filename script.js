// Dynamic Text Effect
const dynamicText = document.getElementById('dynamic-text');

const phrases = [
    "Welcome To My Website!",
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

// Navigation Bar Toggle
document.addEventListener('DOMContentLoaded', () => {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navbarToggle && navLinks) {
        navbarToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navbarToggle.classList.toggle('active');
        });
    }
});

// Start typing on page load
window.onload = () => {
    typeText();
};
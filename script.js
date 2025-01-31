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

// Fetch GitHub Stats
const githubStats = document.getElementById('github-stats');

fetch('https://api.github.com/users/singhagamgit')
    .then(response => response.json())
    .then(data => {
        githubStats.innerHTML = `
            <p>Followers: ${data.followers}</p>
            <p>Public Repos: ${data.public_repos}</p>
            <p>GitHub URL: <a href="${data.html_url}" target="_blank">${data.html_url}</a></p>
        `;
    })
    .catch(error => console.error('Error fetching GitHub data:', error));
    
// Start typing on page load
window.onload = () => {
    typeText(); 
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 0); 
};

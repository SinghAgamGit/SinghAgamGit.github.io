// Set dynamic typing text content
const heroText = document.querySelector('.hero-text');
const messages = [
    "Hi, I'm Agam. A first-year Computer Engineering student at the University of Ottawa.",
    "I love coding and building websites.",
    "Welcome to my personal space!"
];

let messageIndex = 0;

function typeMessage() {
    heroText.innerText = '';
    let currentMessage = messages[messageIndex];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
        heroText.innerText += currentMessage.charAt(charIndex);
        charIndex++;
        if (charIndex === currentMessage.length) {
            clearInterval(typingInterval);
            setTimeout(() => {
                messageIndex = (messageIndex + 1) % messages.length;
                typeMessage();
            }, 1000);
        }
    }, 100);
}

// Start typing effect
typeMessage();

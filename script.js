const flashcards = [
    { question: "What is HTML?", answer: "HyperText Markup Language" },
    { question: "What is CSS?", answer: "Cascading Style Sheets" },
    { question: "What is JavaScript?", answer: "A programming language for web development" }
];

let currentCardIndex = 0;

const cardFront = document.querySelector('.card-front p');
const cardBack = document.querySelector('.card-back p');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const randomBtn = document.getElementById('randomBtn');

function updateCard() {
    cardFront.textContent = flashcards[currentCardIndex].question;
    cardBack.textContent = flashcards[currentCardIndex].answer;
}

function getRandomIndex() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * flashcards.length);
    } while (newIndex === currentCardIndex && flashcards.length > 1);
    return newIndex;
}

prevBtn.addEventListener('click', () => {
    currentCardIndex = (currentCardIndex - 1 + flashcards.length) % flashcards.length;
    updateCard();
});

nextBtn.addEventListener('click', () => {
    currentCardIndex = (currentCardIndex + 1) % flashcards.length;
    updateCard();
});

randomBtn.addEventListener('click', () => {
    currentCardIndex = getRandomIndex();
    updateCard();
});

// Initialize the first card
updateCard();
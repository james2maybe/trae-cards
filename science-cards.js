const flashcards = [
    { 
        question: "What is the hardest natural substance on Earth?", 
        answer: "Diamond",
        active: true
    },
    { 
        question: "What is the chemical symbol for Gold?", 
        answer: "Au",
        active: true
    },
    { 
        question: "What is the closest planet to the Sun?", 
        answer: "Mercury",
        active: true
    }
];

let currentCardIndex = 0;

const cardFront = document.querySelector('.card-front p');
const cardBack = document.querySelector('.card-back p');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const randomBtn = document.getElementById('randomBtn');
const stillLearningBtn = document.getElementById('stillLearningBtn');
const knewThisBtn = document.getElementById('knewThisBtn');
const flashcard = document.querySelector('.flashcard');

function getActiveCards() {
    return flashcards.filter(card => card.active);
}

function getNextActiveIndex(direction) {
    let newIndex = currentCardIndex;
    do {
        newIndex = (newIndex + direction + flashcards.length) % flashcards.length;
    } while (!flashcards[newIndex].active && getActiveCards().length > 1);
    return newIndex;
}

function getRandomIndex() {
    const activeCards = getActiveCards();
    if (activeCards.length <= 1) return currentCardIndex;
    
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * flashcards.length);
    } while (!flashcards[newIndex].active || newIndex === currentCardIndex);
    return newIndex;
}

function updateCard() {
    cardFront.textContent = flashcards[currentCardIndex].question;
    cardBack.textContent = flashcards[currentCardIndex].answer;
    const cardInner = flashcard.querySelector('.card-inner');
    cardInner.classList.remove('is-flipped');
    
    // Hide answer text initially
    cardBack.classList.remove('show-answer');
}

// Update the card flip handler
flashcard.addEventListener('click', (event) => {
    if (!event.target.closest('button')) {
        const cardInner = flashcard.querySelector('.card-inner');
        cardInner.classList.toggle('is-flipped');
        
        // Add delay for answer text
        if (cardInner.classList.contains('is-flipped')) {
            setTimeout(() => {
                cardBack.classList.add('show-answer');
            }, 1000);
        }
    }
});

// Navigation buttons
prevBtn.addEventListener('click', () => {
    currentCardIndex = getNextActiveIndex(-1);
    updateCard();
});

nextBtn.addEventListener('click', () => {
    currentCardIndex = getNextActiveIndex(1);
    updateCard();
});

randomBtn.addEventListener('click', () => {
    currentCardIndex = getRandomIndex();
    updateCard();
});

// Feedback buttons
stillLearningBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    currentCardIndex = getNextActiveIndex(1);
    updateCard();
});

knewThisBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    flashcards[currentCardIndex].active = false;
    
    if (getActiveCards().length === 0) {
        flashcards.forEach(card => card.active = true);
        alert("Great job! All cards completed. Starting over!");
    }
    
    currentCardIndex = getNextActiveIndex(1);
    updateCard();
});

// Initialize the first card
updateCard();
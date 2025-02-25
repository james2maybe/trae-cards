const flashcards = [
    { 
        question: "Who painted the Mona Lisa?", 
        answer: "Leonardo da Vinci",
        active: true
    },
    { 
        question: "Who painted 'The Starry Night'?", 
        answer: "Vincent van Gogh",
        active: true
    },
    { 
        question: "Who painted 'The Persistence of Memory' with melting clocks?", 
        answer: "Salvador Dalí",
        active: true
    },
    { 
        question: "Which artist is known for painting 'The Scream'?", 
        answer: "Edvard Munch",
        active: true
    },
    { 
        question: "Who painted the ceiling of the Sistine Chapel?", 
        answer: "Michelangelo",
        active: true
    },
    { 
        question: "Which Spanish artist is known for co-founding Cubism?", 
        answer: "Pablo Picasso",
        active: true
    },
    { 
        question: "Who painted 'The Birth of Venus'?", 
        answer: "Sandro Botticelli",
        active: true
    },
    { 
        question: "Which Dutch artist painted 'Girl with a Pearl Earring'?", 
        answer: "Johannes Vermeer",
        active: true
    },
    { 
        question: "Who painted 'Water Lilies'?", 
        answer: "Claude Monet",
        active: true
    },
    { 
        question: "Which artist is famous for painting Campbell's Soup Cans?", 
        answer: "Andy Warhol",
        active: true
    }
];

let currentCardIndex = 0;
// Add this constant with the other constants at the top
const flashcard = document.querySelector('.flashcard');

// Make sure all these constants are present
const cardFront = document.querySelector('.card-front p');
const cardBack = document.querySelector('.card-back p');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const randomBtn = document.getElementById('randomBtn');
const stillLearningBtn = document.getElementById('stillLearningBtn');
const knewThisBtn = document.getElementById('knewThisBtn');
function updateCard() {
    cardFront.textContent = flashcards[currentCardIndex].question;
    cardBack.textContent = flashcards[currentCardIndex].answer;
    const cardInner = flashcard.querySelector('.card-inner');
    cardInner.classList.remove('is-flipped');
    cardBack.classList.remove('show-answer');
}

flashcard.addEventListener('click', (event) => {
    if (!event.target.closest('button')) {
        const cardInner = flashcard.querySelector('.card-inner');
        cardInner.classList.toggle('is-flipped');
        
        if (cardInner.classList.contains('is-flipped')) {
            cardBack.classList.add('show-answer');
        } else {
            cardBack.classList.remove('show-answer');
        }
    }
});
function getRandomIndex() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * flashcards.length);
    } while (newIndex === currentCardIndex && flashcards.length > 1);
    return newIndex;
}
// Add these functions after the existing getRandomIndex function
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

// Update the navigation button event listeners
prevBtn.addEventListener('click', () => {
    currentCardIndex = getNextActiveIndex(-1);
    updateCard();
});

nextBtn.addEventListener('click', () => {
    currentCardIndex = getNextActiveIndex(1);
    updateCard();
});

// Add the feedback button event listeners
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
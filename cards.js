function initializeCards(flashcards) {
    let currentCardIndex = 0;
    const flashcard = document.querySelector('.flashcard');
    const cardFront = document.querySelector('.card-front p');
    const cardBack = document.querySelector('.card-back p');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const randomBtn = document.getElementById('randomBtn');
    const stillLearningBtn = document.getElementById('stillLearningBtn');
    const knewThisBtn = document.getElementById('knewThisBtn');

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
    }

    flashcard.addEventListener('click', (event) => {
        if (!event.target.closest('button')) {
            const cardInner = flashcard.querySelector('.card-inner');
            cardInner.classList.toggle('is-flipped');
        }
    });

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
}
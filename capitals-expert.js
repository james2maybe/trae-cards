const flashcards = [
    { question: "Afghanistan", answer: "Kabul", active: true },
    { question: "Albania", answer: "Tirana", active: true },
    { question: "Algeria", answer: "Algiers", active: true },
    { question: "Andorra", answer: "Andorra la Vella", active: true },
    { question: "Angola", answer: "Luanda", active: true },
    { question: "Antigua and Barbuda", answer: "Saint John's", active: true },
    { question: "Argentina", answer: "Buenos Aires", active: true },
    { question: "Armenia", answer: "Yerevan", active: true },
    { question: "Australia", answer: "Canberra", active: true },
    { question: "Austria", answer: "Vienna", active: true },
    { question: "Azerbaijan", answer: "Baku", active: true },
    { question: "Bahamas", answer: "Nassau", active: true },
    { question: "Bahrain", answer: "Manama", active: true },
    { question: "Bangladesh", answer: "Dhaka", active: true },
    { question: "Barbados", answer: "Bridgetown", active: true },
    { question: "Belarus", answer: "Minsk", active: true },
    { question: "Belgium", answer: "Brussels", active: true },
    { question: "Belize", answer: "Belmopan", active: true },
    { question: "Benin", answer: "Porto-Novo", active: true },
    { question: "Bhutan", answer: "Thimphu", active: true },
    { question: "Bolivia", answer: "La Paz (administrative), Sucre (constitutional)", active: true },
    { question: "Bosnia and Herzegovina", answer: "Sarajevo", active: true },
    { question: "Botswana", answer: "Gaborone", active: true },
    { question: "Brazil", answer: "Brasília", active: true },
    { question: "Brunei", answer: "Bandar Seri Begawan", active: true },
    { question: "Bulgaria", answer: "Sofia", active: true },
    { question: "Burkina Faso", answer: "Ouagadougou", active: true },
    { question: "Burundi", answer: "Gitega", active: true },
    { question: "Cambodia", answer: "Phnom Penh", active: true },
    { question: "Cameroon", answer: "Yaoundé", active: true },
    { question: "Canada", answer: "Ottawa", active: true },
    { question: "Cape Verde", answer: "Praia", active: true },
    { question: "Central African Republic", answer: "Bangui", active: true },
    { question: "Chad", answer: "N'Djamena", active: true },
    { question: "Chile", answer: "Santiago", active: true },
    { question: "China", answer: "Beijing", active: true },
    { question: "Colombia", answer: "Bogotá", active: true },
    { question: "Comoros", answer: "Moroni", active: true },
    { question: "Congo", answer: "Brazzaville", active: true },
    { question: "Costa Rica", answer: "San José", active: true },
    { question: "Croatia", answer: "Zagreb", active: true },
    { question: "Cuba", answer: "Havana", active: true },
    { question: "Cyprus", answer: "Nicosia", active: true },
    { question: "Czech Republic", answer: "Prague", active: true },
    { question: "Democratic Republic of the Congo", answer: "Kinshasa", active: true },
    { question: "Denmark", answer: "Copenhagen", active: true },
    { question: "Djibouti", answer: "Djibouti", active: true },
    { question: "Dominica", answer: "Roseau", active: true },
    { question: "Dominican Republic", answer: "Santo Domingo", active: true },
    { question: "East Timor", answer: "Dili", active: true },
    { question: "Ecuador", answer: "Quito", active: true },
    { question: "Egypt", answer: "Cairo", active: true },
    { question: "El Salvador", answer: "San Salvador", active: true },
    { question: "Equatorial Guinea", answer: "Malabo", active: true },
    { question: "Eritrea", answer: "Asmara", active: true },
    { question: "Estonia", answer: "Tallinn", active: true },
    { question: "Eswatini", answer: "Mbabane", active: true },
    { question: "Ethiopia", answer: "Addis Ababa", active: true },
    { question: "Fiji", answer: "Suva", active: true },
    { question: "Finland", answer: "Helsinki", active: true },
    { question: "France", answer: "Paris", active: true },
    { question: "Gabon", answer: "Libreville", active: true },
    { question: "Gambia", answer: "Banjul", active: true },
    { question: "Georgia", answer: "Tbilisi", active: true },
    { question: "Germany", answer: "Berlin", active: true },
    { question: "Ghana", answer: "Accra", active: true },
    { question: "Greece", answer: "Athens", active: true },
    { question: "Grenada", answer: "Saint George's", active: true },
    { question: "Guatemala", answer: "Guatemala City", active: true },
    { question: "Guinea", answer: "Conakry", active: true },
    { question: "Guinea-Bissau", answer: "Bissau", active: true },
    { question: "Guyana", answer: "Georgetown", active: true },
    { question: "Haiti", answer: "Port-au-Prince", active: true },
    { question: "Honduras", answer: "Tegucigalpa", active: true },
    { question: "Hungary", answer: "Budapest", active: true },
    { question: "Iceland", answer: "Reykjavík", active: true },
    { question: "India", answer: "New Delhi", active: true },
    { question: "Indonesia", answer: "Jakarta", active: true },
    { question: "Iran", answer: "Tehran", active: true },
    { question: "Iraq", answer: "Baghdad", active: true },
    { question: "Ireland", answer: "Dublin", active: true },
    { question: "Israel", answer: "Jerusalem", active: true },
    { question: "Italy", answer: "Rome", active: true },
    { question: "Ivory Coast", answer: "Yamoussoukro", active: true },
    { question: "Jamaica", answer: "Kingston", active: true },
    { question: "Japan", answer: "Tokyo", active: true },
    { question: "Jordan", answer: "Amman", active: true },
    { question: "Kazakhstan", answer: "Astana", active: true },
    { question: "Kenya", answer: "Nairobi", active: true },
    { question: "Kiribati", answer: "South Tarawa", active: true },
    { question: "Kuwait", answer: "Kuwait City", active: true },
    { question: "Kyrgyzstan", answer: "Bishkek", active: true },
    { question: "Laos", answer: "Vientiane", active: true },
    { question: "Latvia", answer: "Riga", active: true },
    { question: "Lebanon", answer: "Beirut", active: true },
    { question: "Lesotho", answer: "Maseru", active: true },
    { question: "Liberia", answer: "Monrovia", active: true },
    { question: "Libya", answer: "Tripoli", active: true },
    { question: "Liechtenstein", answer: "Vaduz", active: true },
    { question: "Lithuania", answer: "Vilnius", active: true },
    { question: "Luxembourg", answer: "Luxembourg City", active: true },
    { question: "Madagascar", answer: "Antananarivo", active: true },
    { question: "Malawi", answer: "Lilongwe", active: true },
    { question: "Malaysia", answer: "Kuala Lumpur", active: true },
    { question: "Maldives", answer: "Malé", active: true },
    { question: "Mali", answer: "Bamako", active: true },
    { question: "Malta", answer: "Valletta", active: true },
    { question: "Marshall Islands", answer: "Majuro", active: true },
    { question: "Mauritania", answer: "Nouakchott", active: true },
    { question: "Mauritius", answer: "Port Louis", active: true },
    { question: "Mexico", answer: "Mexico City", active: true },
    { question: "Micronesia", answer: "Palikir", active: true },
    { question: "Moldova", answer: "Chișinău", active: true },
    { question: "Monaco", answer: "Monaco", active: true },
    { question: "Mongolia", answer: "Ulaanbaatar", active: true },
    { question: "Montenegro", answer: "Podgorica", active: true },
    { question: "Morocco", answer: "Rabat", active: true },
    { question: "Mozambique", answer: "Maputo", active: true },
    { question: "Myanmar", answer: "Naypyidaw", active: true },
    { question: "Namibia", answer: "Windhoek", active: true },
    { question: "Nauru", answer: "Yaren District", active: true },
    { question: "Nepal", answer: "Kathmandu", active: true },
    { question: "Netherlands", answer: "Amsterdam", active: true },
    { question: "New Zealand", answer: "Wellington", active: true },
    { question: "Nicaragua", answer: "Managua", active: true },
    { question: "Niger", answer: "Niamey", active: true },
    { question: "Nigeria", answer: "Abuja", active: true },
    { question: "North Korea", answer: "Pyongyang", active: true },
    { question: "North Macedonia", answer: "Skopje", active: true },
    { question: "Norway", answer: "Oslo", active: true },
    { question: "Oman", answer: "Muscat", active: true },
    { question: "Pakistan", answer: "Islamabad", active: true },
    { question: "Palau", answer: "Ngerulmud", active: true },
    { question: "Palestine", answer: "East Jerusalem (claimed), Ramallah (de facto)", active: true },
    { question: "Panama", answer: "Panama City", active: true },
    { question: "Papua New Guinea", answer: "Port Moresby", active: true },
    { question: "Paraguay", answer: "Asunción", active: true },
    { question: "Peru", answer: "Lima", active: true },
    { question: "Philippines", answer: "Manila", active: true },
    { question: "Poland", answer: "Warsaw", active: true },
    { question: "Portugal", answer: "Lisbon", active: true },
    { question: "Qatar", answer: "Doha", active: true },
    { question: "Romania", answer: "Bucharest", active: true },
    { question: "Russia", answer: "Moscow", active: true },
    { question: "Rwanda", answer: "Kigali", active: true },
    { question: "Saint Kitts and Nevis", answer: "Basseterre", active: true },
    { question: "Saint Lucia", answer: "Castries", active: true },
    { question: "Saint Vincent and the Grenadines", answer: "Kingstown", active: true },
    { question: "Samoa", answer: "Apia", active: true },
    { question: "San Marino", answer: "San Marino", active: true },
    { question: "São Tomé and Príncipe", answer: "São Tomé", active: true },
    { question: "Saudi Arabia", answer: "Riyadh", active: true },
    { question: "Senegal", answer: "Dakar", active: true },
    { question: "Serbia", answer: "Belgrade", active: true },
    { question: "Seychelles", answer: "Victoria", active: true },
    { question: "Sierra Leone", answer: "Freetown", active: true },
    { question: "Singapore", answer: "Singapore", active: true },
    { question: "Slovakia", answer: "Bratislava", active: true },
    { question: "Slovenia", answer: "Ljubljana", active: true },
    { question: "Solomon Islands", answer: "Honiara", active: true },
    { question: "Somalia", answer: "Mogadishu", active: true },
    { question: "South Africa", answer: "Pretoria (administrative), Cape Town (legislative), Bloemfontein (judicial)", active: true },
    { question: "South Korea", answer: "Seoul", active: true },
    { question: "South Sudan", answer: "Juba", active: true },
    { question: "Spain", answer: "Madrid", active: true },
    { question: "Sri Lanka", answer: "Sri Jayawardenepura Kotte", active: true },
    { question: "Sudan", answer: "Khartoum", active: true },
    { question: "Suriname", answer: "Paramaribo", active: true },
    { question: "Sweden", answer: "Stockholm", active: true },
    { question: "Switzerland", answer: "Bern", active: true },
    { question: "Syria", answer: "Damascus", active: true },
    { question: "Taiwan", answer: "Taipei", active: true },
    { question: "Tajikistan", answer: "Dushanbe", active: true },
    { question: "Tanzania", answer: "Dodoma", active: true },
    { question: "Thailand", answer: "Bangkok", active: true },
    { question: "Togo", answer: "Lomé", active: true },
    { question: "Tonga", answer: "Nukuʻalofa", active: true },
    { question: "Trinidad and Tobago", answer: "Port of Spain", active: true },
    { question: "Tunisia", answer: "Tunis", active: true },
    { question: "Turkey", answer: "Ankara", active: true },
    { question: "Turkmenistan", answer: "Ashgabat", active: true },
    { question: "Tuvalu", answer: "Funafuti", active: true },
    { question: "Uganda", answer: "Kampala", active: true },
    { question: "Ukraine", answer: "Kyiv", active: true },
    { question: "United Arab Emirates", answer: "Abu Dhabi", active: true },
    { question: "United Kingdom", answer: "London", active: true },
    { question: "United States", answer: "Washington, D.C.", active: true },
    { question: "Uruguay", answer: "Montevideo", active: true },
    { question: "Uzbekistan", answer: "Tashkent", active: true },
    { question: "Vanuatu", answer: "Port Vila", active: true },
    { question: "Vatican City", answer: "Vatican City", active: true },
    { question: "Venezuela", answer: "Caracas", active: true },
    { question: "Vietnam", answer: "Hanoi", active: true },
    { question: "Yemen", answer: "Sana'a", active: true },
    { question: "Zambia", answer: "Lusaka", active: true },
    { question: "Zimbabwe", answer: "Harare", active: true }
];

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
    cardBack.classList.remove('show-answer');
}

flashcard.addEventListener('click', (event) => {
    if (!event.target.closest('button')) {
        const cardInner = flashcard.querySelector('.card-inner');
        cardInner.classList.toggle('is-flipped');
        
        if (cardInner.classList.contains('is-flipped')) {
            setTimeout(() => {
                cardBack.classList.add('show-answer');
            }, 150); // Small delay to ensure the flip has started
        } else {
            cardBack.classList.remove('show-answer');
        }
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
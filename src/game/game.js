import Card from './card';

export default class Game {
    constructor(state) {
        this.state = state;
        this.cards = null;
        this.chosenCards = [];
    }

    onGameOver(handler) {
        this.gameOverHandler = handler;
    }

    render(container) {
        container.innerHTML = '';
        this.addCardsToField(container);
    }

    addCardsToField(container) {
        const suit = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
        this.cards = new Array(this.state.difficulty);

        let randomIndexes = Array.from(Array(this.state.difficulty).keys());

        for (let i = 4; i < this.state.difficulty + 4; i++) {
            const cardValue = Math.floor((i / 4) + 1);
            const cardSuit = suit[Math.floor(i / 2) % 4];
            const card = new Card(i, cardValue, cardSuit, this.state.cardBackPath);
            const position = this.getRandomPosition(0, randomIndexes.length - 1);
            this.cards[randomIndexes[position]] = card;
            randomIndexes.splice(position, 1);
        }
        this.cards.forEach(card => {
            const cardElement = card.render();
            card.addClickHandler(() => this.handleCardClick(card));
            container.appendChild(cardElement);
        });
        this.cardsLeft = this.state.difficulty;
    }

    getRandomPosition(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    handleCardClick(card) {
        if (!this.chosenCards.length) {
            this.closeAllCards();
        }
        if (!this.chosenCards.includes(card)) {
            this.chosenCards.push(card);
            document.getElementById(card.id).classList.add('active');
        }
        if (this.chosenCards.length === 2) {
            const firstCardName = this.chosenCards[0]
                ? this.chosenCards[0].name : null;
            const secondCardName = this.chosenCards[1]
                ? this.chosenCards[1].name : null;
            if (firstCardName === secondCardName) {
                this.removeSameCards();
                this.checkIfGameEnded();
            }
            this.chosenCards = [];
        }
    }

    closeAllCards() {
        const cardElements = document.getElementById('main').children;
        for (let cardElement of cardElements) {
            cardElement.children[0].classList.remove('active');
        }
    }

    removeSameCards() {
        for (let card of this.chosenCards) {
            card.hide();
            this.cardsLeft--;
        }
    }

    checkIfGameEnded() {
        if (!this.cardsLeft) {
            this.gameOverHandler();
        }
    }
}
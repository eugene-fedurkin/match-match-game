export default class Settings {
    constructor(state) {
        this.state = state;
    }

    onPlay(handler) {
        this.playHandler = handler;
    }

    render(container) {
        this.state.difficulty = 16;
        this.state.cardBackPath = './images/Cards/cardBack_blue.png';

        container.innerHTML = '';
        this.renderDifficultySelector(container);
        this.renderCardBacksSelector(container);

        const playButton = document.createElement('button');
        playButton.innerHTML = 'Play';
        playButton.addEventListener('click', () => this.playHandler());

        container.appendChild(playButton);
    }

    renderDifficultySelector(container) {
        const complexity = document.createElement('h2');
        complexity.innerHTML = 'Mods';

        const easy = document.createElement('input');
        easy.className = 'radioBtn';
        easy.type = 'radio';
        easy.name = 'rb';
        easy.checked = true;
        easy.id = 'easy';

        const labelEasy = document.createElement('label');
        labelEasy.htmlFor = 'easy';
        labelEasy.innerHTML = 'Easy';

        const medium = document.createElement('input');
        medium.className = 'radioBtn';
        medium.type = 'radio';
        medium.name = 'rb';
        medium.id = 'medium';

        const labelMedium = document.createElement('label');
        labelMedium.htmlFor = 'medium';
        labelMedium.innerHTML = 'Medium';

        const hard = document.createElement('input');
        hard.className = 'radioBtn';
        hard.type = 'radio';
        hard.name = 'rb';
        hard.id = 'hard';

        const labelHard = document.createElement('label');
        labelHard.htmlFor = 'hard';
        labelHard.innerHTML = 'Hard';

        container.appendChild(complexity);
        container.appendChild(easy);
        container.appendChild(labelEasy);
        container.appendChild(medium);
        container.appendChild(labelMedium);
        container.appendChild(hard);
        container.appendChild(labelHard);

        easy.addEventListener('click', () => {
            this.state.difficulty = 16;
        });
        medium.addEventListener('click', () => {
            this.state.difficulty = 24;
        });
        hard.addEventListener('click', () => {
            this.state.difficulty = 32;
        });
    }

    renderCardBacksSelector(container) {
        const wrapperViewCards = document.createElement('div');
        wrapperViewCards.className = 'wrapperViewCards';
        wrapperViewCards.id = 'wrapperViewCards';

        const firstOption = document.createElement('img');
        firstOption.src = './images/Cards/cardBack_blue.png';
        firstOption.className = 'activeViewCard';

        const secondOption = document.createElement('img');
        secondOption.src = './images/Cards/cardBack_red.png';

        const thirdOption = document.createElement('img');
        thirdOption.src = './images/Cards/cardBack_green.png';

        wrapperViewCards.appendChild(firstOption);
        wrapperViewCards.appendChild(secondOption);
        wrapperViewCards.appendChild(thirdOption);

        container.appendChild(wrapperViewCards);

        firstOption.addEventListener('click', () => {
            this.state.cardBackPath = './images/Cards/cardBack_blue.png';
            this.deselectCardBack();
            firstOption.classList.add('activeViewCard');
        });
        secondOption.addEventListener('click', () => {
            this.state.cardBackPath = './images/Cards/cardBack_red.png';
            this.deselectCardBack();
            secondOption.classList.add('activeViewCard');
        });
        thirdOption.addEventListener('click', () => {
            this.state.cardBackPath = './images/Cards/cardBack_green.png';
            this.deselectCardBack();
            thirdOption.classList.add('activeViewCard');
        });
    }

    deselectCardBack() {
        const cardBacks = document.getElementById('wrapperViewCards').children;
        for (let cardBack of cardBacks) {
            cardBack.classList.remove('activeViewCard');
        }
    }
}
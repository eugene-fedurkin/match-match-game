export default class Card {
    constructor(id, value, suit, viewCard) {
        this.id = 'card' + id;
        this.value = value;
        this.suit = suit;
        this.name = `${this.value} ${this.suit}`;
        this.viewCard = viewCard;
        this.delay = id / 20;
    }

    render() {
        this.wrapper = document.createElement('section');
        this.wrapper.classList.add('wrapper');
        this.wrapper.style.animationDelay = `${this.delay}s`

        const card = document.createElement('div');
        card.id = this.id;
        card.classList.add('card');

        const front = document.createElement('figure');
        front.classList.add('front');
        front.style.backgroundImage = `url(${this.viewCard})`;

        const back = document.createElement('figure');
        back.classList.add('back');
        back.style.backgroundImage
            = `url('./images/Cards/card${this.suit}${this.value}.png')`;

        this.wrapper.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);

        return this.wrapper;
    }

    hide() {
        this.wrapper.classList.add('removed');
        this.wrapper.removeEventListener('click', this.handler);
    }

    addClickHandler(handler) {
        this.handler = handler;
        this.wrapper.addEventListener('click', this.handler);
    }
}


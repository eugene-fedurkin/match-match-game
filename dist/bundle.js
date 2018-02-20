/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(6);


class EndWindow {
    constructor(state) {
        this.state = state;
    }

    render() {
        const endWindow = document.createElement('div');
        endWindow.className = 'containerCongratulation';

        const content = document.createElement('div');
        content.className = 'content';

        const congratulation = document.createElement('h3');
        congratulation.innerHTML = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].messages.CONGRATULATION_MASSAGE;

        const description = document.createElement('p');
        description.innerHTML = `You won in ${this.state.seconds} seconds`;

        const button = document.createElement('button');
        button.innerHTML = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].messages.PLAY_AGAIN_MASSAGE;

        document.body.appendChild(endWindow);
        endWindow.appendChild(content);
        content.appendChild(congratulation);
        content.appendChild(description);
        content.appendChild(button);

        button.addEventListener('click', () => {
            endWindow.remove();
            this.playHandler();
        });
    }

    onPlay(handler) {
        this.playHandler = handler;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EndWindow;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(7);


class Footer {
    render(container) {
        const footer = document.createElement('footer');
        const content = document.createElement('div');
        const img = document.createElement('img');
        const h5 = document.createElement('h5');
        const addresses = document.createElement('div');
        const addressEmail = document.createElement('address');
        const aEmail = document.createElement('a');
        const addressGitHub = document.createElement('address');
        const aGitHub = document.createElement('a');

        img.src = './images/img/eugene.png';
        h5.innerHTML = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].messages.EUGENE_FEDURKIN_MESSAGE;
        addressEmail.innerHTML = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].titles.EMAIL_TITLE;
        aEmail.innerHTML = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].messages.EMAIL_MESSAGE;
        aEmail.href = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].href.EMAIL_REFERENCE;
        addressGitHub.innerHTML = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].titles.GITHUB_TITLE;
        aGitHub.href = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].href.GITHUB_REFERENCE;
        aGitHub.innerHTML = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].messages.GITHUB_MESSAGE;

        footer.appendChild(content);
        content.appendChild(img);
        content.appendChild(h5);
        content.appendChild(addresses);
        addresses.appendChild(addressEmail);
        addressEmail.appendChild(aEmail);
        addresses.appendChild(addressGitHub);
        addressGitHub.appendChild(aGitHub);
        container.appendChild(footer);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Footer;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card__ = __webpack_require__(8);


class Game {
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
            const card = new __WEBPACK_IMPORTED_MODULE_0__card__["a" /* default */](i, cardValue, cardSuit, this.state.cardBackPath);
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Game;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timer__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__music__ = __webpack_require__(10);



class Header {
    constructor(state) {
        this.state = state;
    }

    render(container) {
        this.header = document.createElement('header');
        this.header.id = 'header';

        const logoLink = document.createElement('a');
        logoLink.href = './index.html';

        const logo = document.createElement('img');
        logo.src = './images/logo/logo.png';

        this.timerContainer = document.createElement('div');

        this.music = new __WEBPACK_IMPORTED_MODULE_1__music__["a" /* default */]();
        this.timer = new __WEBPACK_IMPORTED_MODULE_0__timer__["a" /* default */](this.state);

        logoLink.appendChild(logo);
        this.header.appendChild(logoLink);
        this.header.appendChild(this.timerContainer);
        this.music.render(this.header);
        container.prepend(this.header);
    }

    startTimer() {
        this.timer.start(this.timerContainer);
    }

    stopTimer() {
        this.timer.stop();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Header;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Settings {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Settings;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(13);


class StartPage {
    onGotIt(handler) {
        this.gotItHandler = handler;
    }

    render(container) {
        if (!container) return;

        const listWrapper = document.createElement('ul');

        const title = document.createElement('h1');
        title.innerHTML = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].messages.HELLO_MASSAGE;

        const logoWrapper = document.createElement('div');
        logoWrapper.className = 'logo';

        const image = document.createElement('img');
        image.src = './images/logo/logo.png';

        const rules = document.createElement('h2');
        rules.innerHTML = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].titles.RULE_TITLE;

        const firstRule = document.createElement('li');
        firstRule.innerHTML = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].messages.FIRST_RULE_MASSAGE;

        const secondRule = document.createElement('li');
        secondRule.innerHTML = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].messages.SECOND_RULE_MASSAGE;

        const thirdRule = document.createElement('li');
        thirdRule.innerHTML = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].messages.THIRD_RULE_MESSAGE;

        const gotItButton = document.createElement('button');
        gotItButton.innerHTML = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].messages.GOT_IT_MESSAGE;
        gotItButton.addEventListener('click', () => this.gotItHandler());

        container.innerHTML = '';
        container.appendChild(title);
        container.appendChild(logoWrapper);
        container.appendChild(rules);
        container.appendChild(listWrapper);
        container.appendChild(gotItButton);
        logoWrapper.appendChild(image);
        listWrapper.appendChild(firstRule);
        listWrapper.appendChild(secondRule);
        listWrapper.appendChild(thirdRule);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = StartPage;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const constants = {
    messages: {
        CONGRATULATION_MASSAGE: 'Congratulations',
        PLAY_AGAIN_MASSAGE: 'Play Again!'
    }
}
/* harmony default export */ __webpack_exports__["a"] = (constants);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const constants = {
    messages: {
        EUGENE_FEDURKIN_MESSAGE: 'Eugene Fedurkin',
        EMAIL_MESSAGE: 'eugene.fedurkin@gmail.com',
        GITHUB_MESSAGE: 'github.com/eugene-fedurkin',
    },
    href: {
        EMAIL_REFERENCE: 'mailto:eugene.fedurkin@gmail.com',
        GITHUB_REFERENCE: 'https://github.com/eugene-fedurkin',
    },
    titles: {
        EMAIL_TITLE: 'Email:',
        GITHUB_TITLE: 'GitHub:'
    }

}
/* harmony default export */ __webpack_exports__["a"] = (constants);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Card {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Card;




/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const constants = {
    titles: {
        TIMER_TITLE: 'Timer: '
    }
}

/* harmony default export */ __webpack_exports__["a"] = (constants);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Music {
    constructor() {
        this.musicIcon = './images/icons/volume_up.svg';
        this.play = true;
    }

    render(container) {
        const muteIcon = document.createElement('img');
        muteIcon.className = 'volume';
        muteIcon.src = this.musicIcon;

        container.appendChild(muteIcon);
        this.addIconHandler(container, muteIcon);

        this.music = document.createElement("audio");
        this.music.src = './music/music.ogg';
        this.music.setAttribute("preload", "auto");
        this.music.setAttribute("controls", "none");
        this.music.setAttribute("loop", "true");
        this.music.style.display = "none";
        this.music.volume = 0.5;

        document.body.appendChild(this.music);

        this.music.play();
    }

    remove() {
        this.music.pause();
        this.music.remove();
    }

    addIconHandler(container, muteIconElement) {
        muteIconElement.addEventListener('click', () => {
            this.play ? this.music.pause() : this.music.play();
            this.play = !this.play;
            this.musicIcon = this.play ? './images/icons/volume_up.svg' : './images/icons/volume_off.svg';

            muteIconElement.remove();
            muteIconElement = document.createElement('img');
            muteIconElement.className = 'volume';
            muteIconElement.src = this.musicIcon;

            container.appendChild(muteIconElement);
            this.addIconHandler(container, muteIconElement);
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Music;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(9);


class Timer {
    constructor(state) {
        this.state = state;
    }

    start(container) {
        this.render(container);
        this.state.seconds = 0;
        this.startTime = Date.now();
        this.timer = setInterval(() => {
            const now = Date.now();
            const secondsFromStart = Math.round((now - this.startTime) / 1000);
            this.state.seconds = secondsFromStart;
            document.getElementById('timer').innerHTML = secondsFromStart;
        }, 1000);
    }

    stop() {
        clearInterval(this.timer);
        this.timerElement.remove();
    }

    render(container) {
        this.timerElement = document.createElement('div');
        this.timerElement.className = 'timer';
        this.timerElement.innerHTML = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].titles.TIMER_TITLE;

        const digits = document.createElement('span');
        digits.id = 'timer';
        digits.innerHTML = 0;

        this.timerElement.appendChild(digits);
        container.appendChild(this.timerElement);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Timer;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_header__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__start_start_page__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_game__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__end_end_window__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer__ = __webpack_require__(1);







window.onload = () => {
    const state = {
        seconds: 0,
        difficulty: 0,
        cardBackPath: ''
    };

    const header = new __WEBPACK_IMPORTED_MODULE_0__header_header__["a" /* default */](state);
    const startPage = new __WEBPACK_IMPORTED_MODULE_1__start_start_page__["a" /* default */]();
    const settings = new __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* default */](state);
    const game = new __WEBPACK_IMPORTED_MODULE_3__game_game__["a" /* default */](state);
    const endWindow = new __WEBPACK_IMPORTED_MODULE_4__end_end_window__["a" /* default */](state);
    const footer = new __WEBPACK_IMPORTED_MODULE_5__footer_footer__["a" /* default */]();

    document.getElementById('loader').remove();
    const mainElement = document.getElementById('main');
    
    startPage.onGotIt(() => settings.render(mainElement));
    settings.onPlay(() => {
        game.render(mainElement);
        header.startTimer();
    });
    game.onGameOver(() => {
        header.stopTimer();
        endWindow.render();
    });
    endWindow.onPlay(() => settings.render(mainElement));

    header.render(document.body);
    startPage.render(mainElement);
    footer.render(document.body);
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const constants = {
    messages: {
        HELLO_MASSAGE: 'Hello! This is a match game',
        FIRST_RULE_MASSAGE: 'The player selects two cards thereby turning them face-up',
        SECOND_RULE_MASSAGE: 'If they are the same, then they disappear from the table',
        THIRD_RULE_MESSAGE: 'Enjoy the game :)',
        GOT_IT_MESSAGE: 'Got it'
    },
    titles: {
        RULE_TITLE: 'Rules:'
    }
}

/* harmony default export */ __webpack_exports__["a"] = (constants);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmI5ODUxMmQ1YmNiODk3OGYyZTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZC9lbmQtd2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9mb290ZXIvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3NldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFydC9zdGFydC1wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9lbmQvLmNvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9vdGVyLy5jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVhZGVyLy5jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlYWRlci9tdXNpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVhZGVyL3RpbWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFydC8uY29uc3RhbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDaEVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEMsbUJBQW1COztBQUVqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7QUN0Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7OztBQ2pDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx1QkFBdUIsK0JBQStCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7OztBQ3BGQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7O0FDMUhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRTs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0U7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixXQUFXLEdBQUcsVUFBVTtBQUMvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFdBQVc7O0FBRTFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDLGNBQWM7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxVQUFVLEVBQUUsV0FBVzs7QUFFaEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9FOzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQzs7Ozs7Ozs7OztBQy9DQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmYjk4NTEyZDViY2I4OTc4ZjJlMCIsImltcG9ydCBjb25zdGFudHMgZnJvbSAnLi8uY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZFdpbmRvdyB7XHJcbiAgICBjb25zdHJ1Y3RvcihzdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgZW5kV2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZW5kV2luZG93LmNsYXNzTmFtZSA9ICdjb250YWluZXJDb25ncmF0dWxhdGlvbic7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb250ZW50LmNsYXNzTmFtZSA9ICdjb250ZW50JztcclxuXHJcbiAgICAgICAgY29uc3QgY29uZ3JhdHVsYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIGNvbmdyYXR1bGF0aW9uLmlubmVySFRNTCA9IGNvbnN0YW50cy5tZXNzYWdlcy5DT05HUkFUVUxBVElPTl9NQVNTQUdFO1xyXG5cclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBgWW91IHdvbiBpbiAke3RoaXMuc3RhdGUuc2Vjb25kc30gc2Vjb25kc2A7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBjb25zdGFudHMubWVzc2FnZXMuUExBWV9BR0FJTl9NQVNTQUdFO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVuZFdpbmRvdyk7XHJcbiAgICAgICAgZW5kV2luZG93LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29uZ3JhdHVsYXRpb24pO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuXHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBlbmRXaW5kb3cucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheUhhbmRsZXIoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblBsYXkoaGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMucGxheUhhbmRsZXIgPSBoYW5kbGVyO1xyXG4gICAgfVxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZW5kL2VuZC13aW5kb3cuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuLy5jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyIHtcclxuICAgIHJlbmRlcihjb250YWluZXIpIHtcclxuICAgICAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgY29uc3QgaDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3NlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3NFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FkZHJlc3MnKTtcclxuICAgICAgICBjb25zdCBhRW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgY29uc3QgYWRkcmVzc0dpdEh1YiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FkZHJlc3MnKTtcclxuICAgICAgICBjb25zdCBhR2l0SHViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cclxuICAgICAgICBpbWcuc3JjID0gJy4vaW1hZ2VzL2ltZy9ldWdlbmUucG5nJztcclxuICAgICAgICBoNS5pbm5lckhUTUwgPSBjb25zdGFudHMubWVzc2FnZXMuRVVHRU5FX0ZFRFVSS0lOX01FU1NBR0U7XHJcbiAgICAgICAgYWRkcmVzc0VtYWlsLmlubmVySFRNTCA9IGNvbnN0YW50cy50aXRsZXMuRU1BSUxfVElUTEU7XHJcbiAgICAgICAgYUVtYWlsLmlubmVySFRNTCA9IGNvbnN0YW50cy5tZXNzYWdlcy5FTUFJTF9NRVNTQUdFO1xyXG4gICAgICAgIGFFbWFpbC5ocmVmID0gY29uc3RhbnRzLmhyZWYuRU1BSUxfUkVGRVJFTkNFO1xyXG4gICAgICAgIGFkZHJlc3NHaXRIdWIuaW5uZXJIVE1MID0gY29uc3RhbnRzLnRpdGxlcy5HSVRIVUJfVElUTEU7XHJcbiAgICAgICAgYUdpdEh1Yi5ocmVmID0gY29uc3RhbnRzLmhyZWYuR0lUSFVCX1JFRkVSRU5DRTtcclxuICAgICAgICBhR2l0SHViLmlubmVySFRNTCA9IGNvbnN0YW50cy5tZXNzYWdlcy5HSVRIVUJfTUVTU0FHRTtcclxuXHJcbiAgICAgICAgZm9vdGVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGg1KTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZHJlc3Nlcyk7XHJcbiAgICAgICAgYWRkcmVzc2VzLmFwcGVuZENoaWxkKGFkZHJlc3NFbWFpbCk7XHJcbiAgICAgICAgYWRkcmVzc0VtYWlsLmFwcGVuZENoaWxkKGFFbWFpbCk7XHJcbiAgICAgICAgYWRkcmVzc2VzLmFwcGVuZENoaWxkKGFkZHJlc3NHaXRIdWIpO1xyXG4gICAgICAgIGFkZHJlc3NHaXRIdWIuYXBwZW5kQ2hpbGQoYUdpdEh1Yik7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbiAgICB9XHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9mb290ZXIvZm9vdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBDYXJkIGZyb20gJy4vY2FyZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcclxuICAgIGNvbnN0cnVjdG9yKHN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIHRoaXMuY2FyZHMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY2hvc2VuQ2FyZHMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBvbkdhbWVPdmVyKGhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLmdhbWVPdmVySGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGNvbnRhaW5lcikge1xyXG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB0aGlzLmFkZENhcmRzVG9GaWVsZChjb250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZENhcmRzVG9GaWVsZChjb250YWluZXIpIHtcclxuICAgICAgICBjb25zdCBzdWl0ID0gWydDbHVicycsICdEaWFtb25kcycsICdIZWFydHMnLCAnU3BhZGVzJ107XHJcbiAgICAgICAgdGhpcy5jYXJkcyA9IG5ldyBBcnJheSh0aGlzLnN0YXRlLmRpZmZpY3VsdHkpO1xyXG5cclxuICAgICAgICBsZXQgcmFuZG9tSW5kZXhlcyA9IEFycmF5LmZyb20oQXJyYXkodGhpcy5zdGF0ZS5kaWZmaWN1bHR5KS5rZXlzKCkpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gNDsgaSA8IHRoaXMuc3RhdGUuZGlmZmljdWx0eSArIDQ7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkVmFsdWUgPSBNYXRoLmZsb29yKChpIC8gNCkgKyAxKTtcclxuICAgICAgICAgICAgY29uc3QgY2FyZFN1aXQgPSBzdWl0W01hdGguZmxvb3IoaSAvIDIpICUgNF07XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChpLCBjYXJkVmFsdWUsIGNhcmRTdWl0LCB0aGlzLnN0YXRlLmNhcmRCYWNrUGF0aCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5nZXRSYW5kb21Qb3NpdGlvbigwLCByYW5kb21JbmRleGVzLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICB0aGlzLmNhcmRzW3JhbmRvbUluZGV4ZXNbcG9zaXRpb25dXSA9IGNhcmQ7XHJcbiAgICAgICAgICAgIHJhbmRvbUluZGV4ZXMuc3BsaWNlKHBvc2l0aW9uLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmQucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIGNhcmQuYWRkQ2xpY2tIYW5kbGVyKCgpID0+IHRoaXMuaGFuZGxlQ2FyZENsaWNrKGNhcmQpKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRFbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNhcmRzTGVmdCA9IHRoaXMuc3RhdGUuZGlmZmljdWx0eTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSYW5kb21Qb3NpdGlvbihtaW4sIG1heCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNhcmRDbGljayhjYXJkKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNob3NlbkNhcmRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlQWxsQ2FyZHMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmNob3NlbkNhcmRzLmluY2x1ZGVzKGNhcmQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvc2VuQ2FyZHMucHVzaChjYXJkKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FyZC5pZCkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNob3NlbkNhcmRzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICBjb25zdCBmaXJzdENhcmROYW1lID0gdGhpcy5jaG9zZW5DYXJkc1swXVxyXG4gICAgICAgICAgICAgICAgPyB0aGlzLmNob3NlbkNhcmRzWzBdLm5hbWUgOiBudWxsO1xyXG4gICAgICAgICAgICBjb25zdCBzZWNvbmRDYXJkTmFtZSA9IHRoaXMuY2hvc2VuQ2FyZHNbMV1cclxuICAgICAgICAgICAgICAgID8gdGhpcy5jaG9zZW5DYXJkc1sxXS5uYW1lIDogbnVsbDtcclxuICAgICAgICAgICAgaWYgKGZpcnN0Q2FyZE5hbWUgPT09IHNlY29uZENhcmROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVNhbWVDYXJkcygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0lmR2FtZUVuZGVkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jaG9zZW5DYXJkcyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUFsbENhcmRzKCkge1xyXG4gICAgICAgIGNvbnN0IGNhcmRFbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykuY2hpbGRyZW47XHJcbiAgICAgICAgZm9yIChsZXQgY2FyZEVsZW1lbnQgb2YgY2FyZEVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgIGNhcmRFbGVtZW50LmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTYW1lQ2FyZHMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgY2FyZCBvZiB0aGlzLmNob3NlbkNhcmRzKSB7XHJcbiAgICAgICAgICAgIGNhcmQuaGlkZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmNhcmRzTGVmdC0tO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja0lmR2FtZUVuZGVkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYXJkc0xlZnQpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlckhhbmRsZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9nYW1lL2dhbWUuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFRpbWVyIGZyb20gJy4vdGltZXInO1xyXG5pbXBvcnQgTXVzaWMgZnJvbSAnLi9tdXNpYyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIge1xyXG4gICAgY29uc3RydWN0b3Ioc3RhdGUpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGNvbnRhaW5lcikge1xyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIuaWQgPSAnaGVhZGVyJztcclxuXHJcbiAgICAgICAgY29uc3QgbG9nb0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgbG9nb0xpbmsuaHJlZiA9ICcuL2luZGV4Lmh0bWwnO1xyXG5cclxuICAgICAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgbG9nby5zcmMgPSAnLi9pbWFnZXMvbG9nby9sb2dvLnBuZyc7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgICAgdGhpcy5tdXNpYyA9IG5ldyBNdXNpYygpO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSBuZXcgVGltZXIodGhpcy5zdGF0ZSk7XHJcblxyXG4gICAgICAgIGxvZ29MaW5rLmFwcGVuZENoaWxkKGxvZ28pO1xyXG4gICAgICAgIHRoaXMuaGVhZGVyLmFwcGVuZENoaWxkKGxvZ29MaW5rKTtcclxuICAgICAgICB0aGlzLmhlYWRlci5hcHBlbmRDaGlsZCh0aGlzLnRpbWVyQ29udGFpbmVyKTtcclxuICAgICAgICB0aGlzLm11c2ljLnJlbmRlcih0aGlzLmhlYWRlcik7XHJcbiAgICAgICAgY29udGFpbmVyLnByZXBlbmQodGhpcy5oZWFkZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0VGltZXIoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lci5zdGFydCh0aGlzLnRpbWVyQ29udGFpbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wVGltZXIoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lci5zdG9wKCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oZWFkZXIvaGVhZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdzIHtcclxuICAgIGNvbnN0cnVjdG9yKHN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUGxheShoYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5SGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGNvbnRhaW5lcikge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZGlmZmljdWx0eSA9IDE2O1xyXG4gICAgICAgIHRoaXMuc3RhdGUuY2FyZEJhY2tQYXRoID0gJy4vaW1hZ2VzL0NhcmRzL2NhcmRCYWNrX2JsdWUucG5nJztcclxuXHJcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHRoaXMucmVuZGVyRGlmZmljdWx0eVNlbGVjdG9yKGNvbnRhaW5lcik7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDYXJkQmFja3NTZWxlY3Rvcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICBjb25zdCBwbGF5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgcGxheUJ1dHRvbi5pbm5lckhUTUwgPSAnUGxheSc7XHJcbiAgICAgICAgcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMucGxheUhhbmRsZXIoKSk7XHJcblxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5QnV0dG9uKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJEaWZmaWN1bHR5U2VsZWN0b3IoY29udGFpbmVyKSB7XHJcbiAgICAgICAgY29uc3QgY29tcGxleGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgY29tcGxleGl0eS5pbm5lckhUTUwgPSAnTW9kcyc7XHJcblxyXG4gICAgICAgIGNvbnN0IGVhc3kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGVhc3kuY2xhc3NOYW1lID0gJ3JhZGlvQnRuJztcclxuICAgICAgICBlYXN5LnR5cGUgPSAncmFkaW8nO1xyXG4gICAgICAgIGVhc3kubmFtZSA9ICdyYic7XHJcbiAgICAgICAgZWFzeS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICBlYXN5LmlkID0gJ2Vhc3knO1xyXG5cclxuICAgICAgICBjb25zdCBsYWJlbEVhc3kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGxhYmVsRWFzeS5odG1sRm9yID0gJ2Vhc3knO1xyXG4gICAgICAgIGxhYmVsRWFzeS5pbm5lckhUTUwgPSAnRWFzeSc7XHJcblxyXG4gICAgICAgIGNvbnN0IG1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgbWVkaXVtLmNsYXNzTmFtZSA9ICdyYWRpb0J0bic7XHJcbiAgICAgICAgbWVkaXVtLnR5cGUgPSAncmFkaW8nO1xyXG4gICAgICAgIG1lZGl1bS5uYW1lID0gJ3JiJztcclxuICAgICAgICBtZWRpdW0uaWQgPSAnbWVkaXVtJztcclxuXHJcbiAgICAgICAgY29uc3QgbGFiZWxNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGxhYmVsTWVkaXVtLmh0bWxGb3IgPSAnbWVkaXVtJztcclxuICAgICAgICBsYWJlbE1lZGl1bS5pbm5lckhUTUwgPSAnTWVkaXVtJztcclxuXHJcbiAgICAgICAgY29uc3QgaGFyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgaGFyZC5jbGFzc05hbWUgPSAncmFkaW9CdG4nO1xyXG4gICAgICAgIGhhcmQudHlwZSA9ICdyYWRpbyc7XHJcbiAgICAgICAgaGFyZC5uYW1lID0gJ3JiJztcclxuICAgICAgICBoYXJkLmlkID0gJ2hhcmQnO1xyXG5cclxuICAgICAgICBjb25zdCBsYWJlbEhhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGxhYmVsSGFyZC5odG1sRm9yID0gJ2hhcmQnO1xyXG4gICAgICAgIGxhYmVsSGFyZC5pbm5lckhUTUwgPSAnSGFyZCc7XHJcblxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wbGV4aXR5KTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWFzeSk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsRWFzeSk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lZGl1bSk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsTWVkaXVtKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGFyZCk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsSGFyZCk7XHJcblxyXG4gICAgICAgIGVhc3kuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZGlmZmljdWx0eSA9IDE2O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1lZGl1bS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5kaWZmaWN1bHR5ID0gMjQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaGFyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5kaWZmaWN1bHR5ID0gMzI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ2FyZEJhY2tzU2VsZWN0b3IoY29udGFpbmVyKSB7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlclZpZXdDYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHdyYXBwZXJWaWV3Q2FyZHMuY2xhc3NOYW1lID0gJ3dyYXBwZXJWaWV3Q2FyZHMnO1xyXG4gICAgICAgIHdyYXBwZXJWaWV3Q2FyZHMuaWQgPSAnd3JhcHBlclZpZXdDYXJkcyc7XHJcblxyXG4gICAgICAgIGNvbnN0IGZpcnN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgZmlyc3RPcHRpb24uc3JjID0gJy4vaW1hZ2VzL0NhcmRzL2NhcmRCYWNrX2JsdWUucG5nJztcclxuICAgICAgICBmaXJzdE9wdGlvbi5jbGFzc05hbWUgPSAnYWN0aXZlVmlld0NhcmQnO1xyXG5cclxuICAgICAgICBjb25zdCBzZWNvbmRPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBzZWNvbmRPcHRpb24uc3JjID0gJy4vaW1hZ2VzL0NhcmRzL2NhcmRCYWNrX3JlZC5wbmcnO1xyXG5cclxuICAgICAgICBjb25zdCB0aGlyZE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIHRoaXJkT3B0aW9uLnNyYyA9ICcuL2ltYWdlcy9DYXJkcy9jYXJkQmFja19ncmVlbi5wbmcnO1xyXG5cclxuICAgICAgICB3cmFwcGVyVmlld0NhcmRzLmFwcGVuZENoaWxkKGZpcnN0T3B0aW9uKTtcclxuICAgICAgICB3cmFwcGVyVmlld0NhcmRzLmFwcGVuZENoaWxkKHNlY29uZE9wdGlvbik7XHJcbiAgICAgICAgd3JhcHBlclZpZXdDYXJkcy5hcHBlbmRDaGlsZCh0aGlyZE9wdGlvbik7XHJcblxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3cmFwcGVyVmlld0NhcmRzKTtcclxuXHJcbiAgICAgICAgZmlyc3RPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY2FyZEJhY2tQYXRoID0gJy4vaW1hZ2VzL0NhcmRzL2NhcmRCYWNrX2JsdWUucG5nJztcclxuICAgICAgICAgICAgdGhpcy5kZXNlbGVjdENhcmRCYWNrKCk7XHJcbiAgICAgICAgICAgIGZpcnN0T3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZVZpZXdDYXJkJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2Vjb25kT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNhcmRCYWNrUGF0aCA9ICcuL2ltYWdlcy9DYXJkcy9jYXJkQmFja19yZWQucG5nJztcclxuICAgICAgICAgICAgdGhpcy5kZXNlbGVjdENhcmRCYWNrKCk7XHJcbiAgICAgICAgICAgIHNlY29uZE9wdGlvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmVWaWV3Q2FyZCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXJkT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNhcmRCYWNrUGF0aCA9ICcuL2ltYWdlcy9DYXJkcy9jYXJkQmFja19ncmVlbi5wbmcnO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2VsZWN0Q2FyZEJhY2soKTtcclxuICAgICAgICAgICAgdGhpcmRPcHRpb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlVmlld0NhcmQnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZXNlbGVjdENhcmRCYWNrKCkge1xyXG4gICAgICAgIGNvbnN0IGNhcmRCYWNrcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cmFwcGVyVmlld0NhcmRzJykuY2hpbGRyZW47XHJcbiAgICAgICAgZm9yIChsZXQgY2FyZEJhY2sgb2YgY2FyZEJhY2tzKSB7XHJcbiAgICAgICAgICAgIGNhcmRCYWNrLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZVZpZXdDYXJkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2V0dGluZ3Mvc2V0dGluZ3MuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuLy5jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcnRQYWdlIHtcclxuICAgIG9uR290SXQoaGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMuZ290SXRIYW5kbGVyID0gaGFuZGxlcjtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoY29udGFpbmVyKSB7XHJcbiAgICAgICAgaWYgKCFjb250YWluZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgbGlzdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gY29uc3RhbnRzLm1lc3NhZ2VzLkhFTExPX01BU1NBR0U7XHJcblxyXG4gICAgICAgIGNvbnN0IGxvZ29XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbG9nb1dyYXBwZXIuY2xhc3NOYW1lID0gJ2xvZ28nO1xyXG5cclxuICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGltYWdlLnNyYyA9ICcuL2ltYWdlcy9sb2dvL2xvZ28ucG5nJztcclxuXHJcbiAgICAgICAgY29uc3QgcnVsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIHJ1bGVzLmlubmVySFRNTCA9IGNvbnN0YW50cy50aXRsZXMuUlVMRV9USVRMRTtcclxuXHJcbiAgICAgICAgY29uc3QgZmlyc3RSdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBmaXJzdFJ1bGUuaW5uZXJIVE1MID0gY29uc3RhbnRzLm1lc3NhZ2VzLkZJUlNUX1JVTEVfTUFTU0FHRTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2Vjb25kUnVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgc2Vjb25kUnVsZS5pbm5lckhUTUwgPSBjb25zdGFudHMubWVzc2FnZXMuU0VDT05EX1JVTEVfTUFTU0FHRTtcclxuXHJcbiAgICAgICAgY29uc3QgdGhpcmRSdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICB0aGlyZFJ1bGUuaW5uZXJIVE1MID0gY29uc3RhbnRzLm1lc3NhZ2VzLlRISVJEX1JVTEVfTUVTU0FHRTtcclxuXHJcbiAgICAgICAgY29uc3QgZ290SXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBnb3RJdEJ1dHRvbi5pbm5lckhUTUwgPSBjb25zdGFudHMubWVzc2FnZXMuR09UX0lUX01FU1NBR0U7XHJcbiAgICAgICAgZ290SXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmdvdEl0SGFuZGxlcigpKTtcclxuXHJcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29XcmFwcGVyKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocnVsZXMpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0V3JhcHBlcik7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdvdEl0QnV0dG9uKTtcclxuICAgICAgICBsb2dvV3JhcHBlci5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbiAgICAgICAgbGlzdFdyYXBwZXIuYXBwZW5kQ2hpbGQoZmlyc3RSdWxlKTtcclxuICAgICAgICBsaXN0V3JhcHBlci5hcHBlbmRDaGlsZChzZWNvbmRSdWxlKTtcclxuICAgICAgICBsaXN0V3JhcHBlci5hcHBlbmRDaGlsZCh0aGlyZFJ1bGUpO1xyXG4gICAgfVxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3RhcnQvc3RhcnQtcGFnZS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBjb25zdGFudHMgPSB7XHJcbiAgICBtZXNzYWdlczoge1xyXG4gICAgICAgIENPTkdSQVRVTEFUSU9OX01BU1NBR0U6ICdDb25ncmF0dWxhdGlvbnMnLFxyXG4gICAgICAgIFBMQVlfQUdBSU5fTUFTU0FHRTogJ1BsYXkgQWdhaW4hJ1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbnN0YW50cztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbmQvLmNvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBjb25zdGFudHMgPSB7XHJcbiAgICBtZXNzYWdlczoge1xyXG4gICAgICAgIEVVR0VORV9GRURVUktJTl9NRVNTQUdFOiAnRXVnZW5lIEZlZHVya2luJyxcclxuICAgICAgICBFTUFJTF9NRVNTQUdFOiAnZXVnZW5lLmZlZHVya2luQGdtYWlsLmNvbScsXHJcbiAgICAgICAgR0lUSFVCX01FU1NBR0U6ICdnaXRodWIuY29tL2V1Z2VuZS1mZWR1cmtpbicsXHJcbiAgICB9LFxyXG4gICAgaHJlZjoge1xyXG4gICAgICAgIEVNQUlMX1JFRkVSRU5DRTogJ21haWx0bzpldWdlbmUuZmVkdXJraW5AZ21haWwuY29tJyxcclxuICAgICAgICBHSVRIVUJfUkVGRVJFTkNFOiAnaHR0cHM6Ly9naXRodWIuY29tL2V1Z2VuZS1mZWR1cmtpbicsXHJcbiAgICB9LFxyXG4gICAgdGl0bGVzOiB7XHJcbiAgICAgICAgRU1BSUxfVElUTEU6ICdFbWFpbDonLFxyXG4gICAgICAgIEdJVEhVQl9USVRMRTogJ0dpdEh1YjonXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbnN0YW50cztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9mb290ZXIvLmNvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKGlkLCB2YWx1ZSwgc3VpdCwgdmlld0NhcmQpIHtcclxuICAgICAgICB0aGlzLmlkID0gJ2NhcmQnICsgaWQ7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuc3VpdCA9IHN1aXQ7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gYCR7dGhpcy52YWx1ZX0gJHt0aGlzLnN1aXR9YDtcclxuICAgICAgICB0aGlzLnZpZXdDYXJkID0gdmlld0NhcmQ7XHJcbiAgICAgICAgdGhpcy5kZWxheSA9IGlkIC8gMjA7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMud3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICB0aGlzLndyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicpO1xyXG4gICAgICAgIHRoaXMud3JhcHBlci5zdHlsZS5hbmltYXRpb25EZWxheSA9IGAke3RoaXMuZGVsYXl9c2BcclxuXHJcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNhcmQuaWQgPSB0aGlzLmlkO1xyXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xyXG5cclxuICAgICAgICBjb25zdCBmcm9udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZ3VyZScpO1xyXG4gICAgICAgIGZyb250LmNsYXNzTGlzdC5hZGQoJ2Zyb250Jyk7XHJcbiAgICAgICAgZnJvbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RoaXMudmlld0NhcmR9KWA7XHJcblxyXG4gICAgICAgIGNvbnN0IGJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWd1cmUnKTtcclxuICAgICAgICBiYWNrLmNsYXNzTGlzdC5hZGQoJ2JhY2snKTtcclxuICAgICAgICBiYWNrLnN0eWxlLmJhY2tncm91bmRJbWFnZVxyXG4gICAgICAgICAgICA9IGB1cmwoJy4vaW1hZ2VzL0NhcmRzL2NhcmQke3RoaXMuc3VpdH0ke3RoaXMudmFsdWV9LnBuZycpYDtcclxuXHJcbiAgICAgICAgdGhpcy53cmFwcGVyLmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZnJvbnQpO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoYmFjayk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLndyYXBwZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgICB0aGlzLndyYXBwZXIuY2xhc3NMaXN0LmFkZCgncmVtb3ZlZCcpO1xyXG4gICAgICAgIHRoaXMud3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQ2xpY2tIYW5kbGVyKGhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xyXG4gICAgICAgIHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlcik7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2dhbWUvY2FyZC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBjb25zdGFudHMgPSB7XHJcbiAgICB0aXRsZXM6IHtcclxuICAgICAgICBUSU1FUl9USVRMRTogJ1RpbWVyOiAnXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnN0YW50cztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oZWFkZXIvLmNvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNdXNpYyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm11c2ljSWNvbiA9ICcuL2ltYWdlcy9pY29ucy92b2x1bWVfdXAuc3ZnJztcclxuICAgICAgICB0aGlzLnBsYXkgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihjb250YWluZXIpIHtcclxuICAgICAgICBjb25zdCBtdXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIG11dGVJY29uLmNsYXNzTmFtZSA9ICd2b2x1bWUnO1xyXG4gICAgICAgIG11dGVJY29uLnNyYyA9IHRoaXMubXVzaWNJY29uO1xyXG5cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobXV0ZUljb24pO1xyXG4gICAgICAgIHRoaXMuYWRkSWNvbkhhbmRsZXIoY29udGFpbmVyLCBtdXRlSWNvbik7XHJcblxyXG4gICAgICAgIHRoaXMubXVzaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXVkaW9cIik7XHJcbiAgICAgICAgdGhpcy5tdXNpYy5zcmMgPSAnLi9tdXNpYy9tdXNpYy5vZ2cnO1xyXG4gICAgICAgIHRoaXMubXVzaWMuc2V0QXR0cmlidXRlKFwicHJlbG9hZFwiLCBcImF1dG9cIik7XHJcbiAgICAgICAgdGhpcy5tdXNpYy5zZXRBdHRyaWJ1dGUoXCJjb250cm9sc1wiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgdGhpcy5tdXNpYy5zZXRBdHRyaWJ1dGUoXCJsb29wXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICB0aGlzLm11c2ljLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB0aGlzLm11c2ljLnZvbHVtZSA9IDAuNTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm11c2ljKTtcclxuXHJcbiAgICAgICAgdGhpcy5tdXNpYy5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKCkge1xyXG4gICAgICAgIHRoaXMubXVzaWMucGF1c2UoKTtcclxuICAgICAgICB0aGlzLm11c2ljLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEljb25IYW5kbGVyKGNvbnRhaW5lciwgbXV0ZUljb25FbGVtZW50KSB7XHJcbiAgICAgICAgbXV0ZUljb25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXkgPyB0aGlzLm11c2ljLnBhdXNlKCkgOiB0aGlzLm11c2ljLnBsYXkoKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ID0gIXRoaXMucGxheTtcclxuICAgICAgICAgICAgdGhpcy5tdXNpY0ljb24gPSB0aGlzLnBsYXkgPyAnLi9pbWFnZXMvaWNvbnMvdm9sdW1lX3VwLnN2ZycgOiAnLi9pbWFnZXMvaWNvbnMvdm9sdW1lX29mZi5zdmcnO1xyXG5cclxuICAgICAgICAgICAgbXV0ZUljb25FbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBtdXRlSWNvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgbXV0ZUljb25FbGVtZW50LmNsYXNzTmFtZSA9ICd2b2x1bWUnO1xyXG4gICAgICAgICAgICBtdXRlSWNvbkVsZW1lbnQuc3JjID0gdGhpcy5tdXNpY0ljb247XHJcblxyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobXV0ZUljb25FbGVtZW50KTtcclxuICAgICAgICAgICAgdGhpcy5hZGRJY29uSGFuZGxlcihjb250YWluZXIsIG11dGVJY29uRWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oZWFkZXIvbXVzaWMuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjb25zdGFudHMgZnJvbSAnLi8uY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KGNvbnRhaW5lcikge1xyXG4gICAgICAgIHRoaXMucmVuZGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZWNvbmRzID0gMDtcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgY29uc3Qgc2Vjb25kc0Zyb21TdGFydCA9IE1hdGgucm91bmQoKG5vdyAtIHRoaXMuc3RhcnRUaW1lKSAvIDEwMDApO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNlY29uZHMgPSBzZWNvbmRzRnJvbVN0YXJ0O1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXInKS5pbm5lckhUTUwgPSBzZWNvbmRzRnJvbVN0YXJ0O1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcclxuICAgICAgICB0aGlzLnRpbWVyRWxlbWVudC5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoY29udGFpbmVyKSB7XHJcbiAgICAgICAgdGhpcy50aW1lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLnRpbWVyRWxlbWVudC5jbGFzc05hbWUgPSAndGltZXInO1xyXG4gICAgICAgIHRoaXMudGltZXJFbGVtZW50LmlubmVySFRNTCA9IGNvbnN0YW50cy50aXRsZXMuVElNRVJfVElUTEU7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpZ2l0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBkaWdpdHMuaWQgPSAndGltZXInO1xyXG4gICAgICAgIGRpZ2l0cy5pbm5lckhUTUwgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyRWxlbWVudC5hcHBlbmRDaGlsZChkaWdpdHMpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRpbWVyRWxlbWVudCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oZWFkZXIvdGltZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXIvaGVhZGVyJztcclxuaW1wb3J0IFN0YXJ0UGFnZSBmcm9tICcuL3N0YXJ0L3N0YXJ0LXBhZ2UnO1xyXG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi9zZXR0aW5ncy9zZXR0aW5ncyc7XHJcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZS9nYW1lJztcclxuaW1wb3J0IEVuZFdpbmRvdyBmcm9tICcuL2VuZC9lbmQtd2luZG93JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3Rlci9mb290ZXInO1xyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHN0YXRlID0ge1xyXG4gICAgICAgIHNlY29uZHM6IDAsXHJcbiAgICAgICAgZGlmZmljdWx0eTogMCxcclxuICAgICAgICBjYXJkQmFja1BhdGg6ICcnXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhlYWRlciA9IG5ldyBIZWFkZXIoc3RhdGUpO1xyXG4gICAgY29uc3Qgc3RhcnRQYWdlID0gbmV3IFN0YXJ0UGFnZSgpO1xyXG4gICAgY29uc3Qgc2V0dGluZ3MgPSBuZXcgU2V0dGluZ3Moc3RhdGUpO1xyXG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKHN0YXRlKTtcclxuICAgIGNvbnN0IGVuZFdpbmRvdyA9IG5ldyBFbmRXaW5kb3coc3RhdGUpO1xyXG4gICAgY29uc3QgZm9vdGVyID0gbmV3IEZvb3RlcigpO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkZXInKS5yZW1vdmUoKTtcclxuICAgIGNvbnN0IG1haW5FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICAgIFxyXG4gICAgc3RhcnRQYWdlLm9uR290SXQoKCkgPT4gc2V0dGluZ3MucmVuZGVyKG1haW5FbGVtZW50KSk7XHJcbiAgICBzZXR0aW5ncy5vblBsYXkoKCkgPT4ge1xyXG4gICAgICAgIGdhbWUucmVuZGVyKG1haW5FbGVtZW50KTtcclxuICAgICAgICBoZWFkZXIuc3RhcnRUaW1lcigpO1xyXG4gICAgfSk7XHJcbiAgICBnYW1lLm9uR2FtZU92ZXIoKCkgPT4ge1xyXG4gICAgICAgIGhlYWRlci5zdG9wVGltZXIoKTtcclxuICAgICAgICBlbmRXaW5kb3cucmVuZGVyKCk7XHJcbiAgICB9KTtcclxuICAgIGVuZFdpbmRvdy5vblBsYXkoKCkgPT4gc2V0dGluZ3MucmVuZGVyKG1haW5FbGVtZW50KSk7XHJcblxyXG4gICAgaGVhZGVyLnJlbmRlcihkb2N1bWVudC5ib2R5KTtcclxuICAgIHN0YXJ0UGFnZS5yZW5kZXIobWFpbkVsZW1lbnQpO1xyXG4gICAgZm9vdGVyLnJlbmRlcihkb2N1bWVudC5ib2R5KTtcclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4uanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGNvbnN0YW50cyA9IHtcclxuICAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgICAgSEVMTE9fTUFTU0FHRTogJ0hlbGxvISBUaGlzIGlzIGEgbWF0Y2ggZ2FtZScsXHJcbiAgICAgICAgRklSU1RfUlVMRV9NQVNTQUdFOiAnVGhlIHBsYXllciBzZWxlY3RzIHR3byBjYXJkcyB0aGVyZWJ5IHR1cm5pbmcgdGhlbSBmYWNlLXVwJyxcclxuICAgICAgICBTRUNPTkRfUlVMRV9NQVNTQUdFOiAnSWYgdGhleSBhcmUgdGhlIHNhbWUsIHRoZW4gdGhleSBkaXNhcHBlYXIgZnJvbSB0aGUgdGFibGUnLFxyXG4gICAgICAgIFRISVJEX1JVTEVfTUVTU0FHRTogJ0Vuam95IHRoZSBnYW1lIDopJyxcclxuICAgICAgICBHT1RfSVRfTUVTU0FHRTogJ0dvdCBpdCdcclxuICAgIH0sXHJcbiAgICB0aXRsZXM6IHtcclxuICAgICAgICBSVUxFX1RJVExFOiAnUnVsZXM6J1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25zdGFudHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3RhcnQvLmNvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==
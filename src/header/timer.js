import constants from './.constants';

export default class Timer {
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
        this.timerElement.innerHTML = constants.titles.TIMER_TITLE;

        const digits = document.createElement('span');
        digits.id = 'timer';
        digits.innerHTML = 0;

        this.timerElement.appendChild(digits);
        container.appendChild(this.timerElement);
    }
}
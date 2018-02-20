import Timer from './timer';
import Music from './music';

export default class Header {
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

        this.music = new Music();
        this.timer = new Timer(this.state);

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
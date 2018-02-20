import constants from './.constants';

export default class EndWindow {
    constructor(state) {
        this.state = state;
    }

    render() {
        const endWindow = document.createElement('div');
        endWindow.className = 'containerCongratulation';

        const content = document.createElement('div');
        content.className = 'content';

        const congratulation = document.createElement('h3');
        congratulation.innerHTML = constants.messages.CONGRATULATION_MASSAGE;

        const description = document.createElement('p');
        description.innerHTML = `You won in ${this.state.seconds} seconds`;

        const button = document.createElement('button');
        button.innerHTML = constants.messages.PLAY_AGAIN_MASSAGE;

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
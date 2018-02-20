import constants from './.constants';

export default class StartPage {
    onGotIt(handler) {
        this.gotItHandler = handler;
    }

    render(container) {
        if (!container) return;

        const listWrapper = document.createElement('ul');

        const title = document.createElement('h1');
        title.innerHTML = constants.messages.HELLO_MASSAGE;

        const logoWrapper = document.createElement('div');
        logoWrapper.className = 'logo';

        const image = document.createElement('img');
        image.src = './images/logo/logo.png';

        const rules = document.createElement('h2');
        rules.innerHTML = constants.titles.RULE_TITLE;

        const firstRule = document.createElement('li');
        firstRule.innerHTML = constants.messages.FIRST_RULE_MASSAGE;

        const secondRule = document.createElement('li');
        secondRule.innerHTML = constants.messages.SECOND_RULE_MASSAGE;

        const thirdRule = document.createElement('li');
        thirdRule.innerHTML = constants.messages.THIRD_RULE_MESSAGE;

        const gotItButton = document.createElement('button');
        gotItButton.innerHTML = constants.messages.GOT_IT_MESSAGE;
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
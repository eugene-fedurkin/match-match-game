import constants from './.constants';

export default class Footer {
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
        h5.innerHTML = constants.messages.EUGENE_FEDURKIN_MESSAGE;
        addressEmail.innerHTML = constants.titles.EMAIL_TITLE;
        aEmail.innerHTML = constants.messages.EMAIL_MESSAGE;
        aEmail.href = constants.href.EMAIL_REFERENCE;
        addressGitHub.innerHTML = constants.titles.GITHUB_TITLE;
        aGitHub.href = constants.href.GITHUB_REFERENCE;
        aGitHub.innerHTML = constants.messages.GITHUB_MESSAGE;

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
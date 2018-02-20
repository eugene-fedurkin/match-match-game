import Header from './header/header';
import StartPage from './start/start-page';
import Settings from './settings/settings';
import Game from './game/game';
import EndWindow from './end/end-window';
import Footer from './footer/footer';

window.onload = () => {
    const state = {
        seconds: 0,
        difficulty: 0,
        cardBackPath: ''
    };

    const header = new Header(state);
    const startPage = new StartPage();
    const settings = new Settings(state);
    const game = new Game(state);
    const endWindow = new EndWindow(state);
    const footer = new Footer();

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
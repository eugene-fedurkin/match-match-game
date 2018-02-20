export default class Music {
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
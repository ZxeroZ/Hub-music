
    document.addEventListener('DOMContentLoaded', function () {
        const burgerBtn = document.querySelector('.burger-btn');
        const nav = document.querySelector('.nav');

        burgerBtn.addEventListener('click', function () {
            nav.classList.toggle('active');
        });
    });



    document.addEventListener('DOMContentLoaded', function () {
        const playButton = document.querySelector('.play');
        const audioPlayer = document.getElementById('audioPlayer');

        // Establecer volumen por defecto al 50%
        audioPlayer.volume = 0.5;

        playButton.addEventListener('click', function () {
            if (audioPlayer.paused) {
                audioPlayer.play();
                playButton.textContent = 'Pause';
            } else {
                audioPlayer.pause();
                playButton.textContent = 'Play Demo';
            }
        });
    });


    const spectrogram = document.querySelector('.spectrogram');

for (let i = 0; i < 10; i++) {
  const bar = document.createElement('div');
  bar.classList.add('bar');
  const randomDuration = Math.random() * 0.5 + 0.2; // Genera una duración aleatoria entre 0.5 y 1 segundos
  bar.style.animationDuration = `${randomDuration}s`;
  spectrogram.appendChild(bar);
}



// Obtén todas las cartas en un NodeList
const cards = document.querySelectorAll('.card');
let activeAudio = null;

// Recorre cada carta y agrega eventos a los elementos dentro de cada una
cards.forEach((card, index) => {
    const playPauseBtn = card.querySelector('.playPauseBtn');
    const audioPlayer = card.querySelector('.audioPlayer');

    playPauseBtn.addEventListener('click', () => togglePlayPause(audioPlayer, playPauseBtn));

    audioPlayer.addEventListener('play', () => updatePlayPauseBtn(playPauseBtn, true));
    audioPlayer.addEventListener('pause', () => updatePlayPauseBtn(playPauseBtn, false));
    audioPlayer.addEventListener('ended', () => {
        updatePlayPauseBtn(playPauseBtn, false);
        activeAudio = null;
    });
});

// Función para alternar entre reproducir y pausar
function togglePlayPause(audioPlayer, playPauseBtn) {
    if (audioPlayer.paused) {
        if (activeAudio) {
            activeAudio.pause();
            updatePlayPauseBtn(activeAudio.nextElementSibling, false);
        }

        audioPlayer.play();
        updatePlayPauseBtn(playPauseBtn, true);
        activeAudio = audioPlayer;
    } else {
        audioPlayer.pause();
        updatePlayPauseBtn(playPauseBtn, false);
        activeAudio = null;
    }
}

// Función para actualizar la apariencia del botón según el estado de reproducción
function updatePlayPauseBtn(playPauseBtn, isPlaying) {
    playPauseBtn.innerHTML = `<img src="./img/${isPlaying ? 'pause' : 'play-s'}.svg" alt="">`;
}


ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.headline', { delay: 200 });

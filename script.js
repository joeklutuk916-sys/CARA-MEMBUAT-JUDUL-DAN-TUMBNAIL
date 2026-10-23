document.addEventListener("DOMContentLoaded", () => {
    const welcomeScreen = document.getElementById("welcomeScreen");
    const startBtn = document.getElementById("startBtn");
    const music = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicBtn");
    const musicIcon = document.getElementById("musicIcon");
    
    let isPlaying = false;
    music.volume = 0.5; 

    startBtn.addEventListener("click", () => {
        welcomeScreen.classList.add("fade-out");
        
        setTimeout(() => {
            musicBtn.classList.remove("hidden");
        }, 500);

        music.play().then(() => {
            isPlaying = true;
            musicIcon.classList.remove("fa-play");
            musicIcon.classList.add("fa-pause");
        }).catch((error) => {
            console.log("Gagal memutar musik:", error);
        });
    });

    musicBtn.addEventListener("click", (e) => {
        e.stopPropagation(); 
        if (isPlaying) {
            music.pause();
            isPlaying = false;
            musicIcon.classList.remove("fa-pause");
            musicIcon.classList.add("fa-play");
        } else {
            music.play();
            isPlaying = true;
            musicIcon.classList.remove("fa-play");
            musicIcon.classList.add("fa-pause");
        }
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('touchstart', () => {
            card.style.transform = 'scale(0.98)';
            card.style.transition = '0.1s';
        });
        card.addEventListener('touchend', () => {
            card.style.transform = 'scale(1)';
            card.style.transition = '0.3s';
        });
    });
});
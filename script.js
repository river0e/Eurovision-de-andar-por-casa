// Lista de los 24 últimos ganadores con IDs revisados
const winners = [
    { year: 2024, country: "Suiza", song: "Nemo - The Code", ytId: "CO_qJf-nW0k" },
    { year: 2023, country: "Suecia", song: "Loreen - Tattoo", ytId: "BE2Fj0W4jP4" },
    { year: 2022, country: "Ucrania", song: "Kalush Orch. - Stefania", ytId: "F1fl60ypdLs" },
    { year: 2021, country: "Italia", song: "Måneskin - Zitti E Buoni", ytId: "RVH5dn1cxAQ" },
    { year: 2019, country: "P. Bajos", song: "Duncan Laurence - Arcade", ytId: "R3D-r4ogr7s" },
    { year: 2018, country: "Israel", song: "Netta - Toy", ytId: "84LBjXaeKk4" },
    { year: 2017, country: "Portugal", song: "Salvador Sobral - Amar Pelos Dois", ytId: "Qotooj7ODCM" },
    { year: 2016, country: "Ucrania", song: "Jamala - 1944", ytId: "B-rnM-MwRHY" },
    { year: 2015, country: "Suecia", song: "Måns Zelmerlöw - Heroes", ytId: "5sGOwFVUU0I" },
    { year: 2014, country: "Austria", song: "Conchita Wurst - Rise Like a Phoenix", ytId: "QRUIava4WRM" },
    { year: 2013, country: "Dinamarca", song: "Emmelie de Forest - Only Teardrops", ytId: "k59E7T0H-Us" },
    { year: 2012, country: "Suecia", song: "Loreen - Euphoria", ytId: "Pfo-8z86x80" },
    { year: 2011, country: "Azerbaiyán", song: "Ell & Nikki - Running Scared", ytId: "_0tlQUW5X0U" },
    { year: 2010, country: "Alemania", song: "Lena - Satellite", ytId: "8QSgNM9yNjo" },
    { year: 2009, country: "Noruega", song: "Alexander Rybak - Fairytale", ytId: "WXwgZL4zx9o" },
    { year: 2008, country: "Rusia", song: "Dima Bilan - Believe", ytId: "-72s4WzUcKI" },
    { year: 2007, country: "Serbia", song: "Marija Šerifović - Molitva", ytId: "FSueQN1QvV4" },
    { year: 2006, country: "Finlandia", song: "Lordi - Hard Rock Hallelujah", ytId: "gAh9NRGNhUU" },
    { year: 2005, country: "Grecia", song: "Helena Paparizou - My Number One", ytId: "rcOwvZ26KFQ" },
    { year: 2004, country: "Ucrania", song: "Ruslana - Wild Dances", ytId: "10XR67NQcAc" },
    { year: 2003, country: "Turquía", song: "Sertab Erener - Everyway That I Can", ytId: "j0_QrKnqd5E" },
    { year: 2002, country: "Letonia", song: "Marie N - I Wanna", ytId: "_M-w89U8TEU" }, 
    { year: 2001, country: "Estonia", song: "Tanel Padar - Everybody", ytId: "92TSUlqzFi8" }, 
    { year: 2000, country: "Dinamarca", song: "Olsen Bros - Fly on Wings...", ytId: "JF8fkHK0AWs" } 
];

let player;
let isMarathonMode = false;

// 1. PINTAR LA PLAYLIST INMEDIATAMENTE
document.addEventListener('DOMContentLoaded', () => {
    const playlistDiv = document.getElementById('playlist');
    
    winners.forEach((winner) => {
        const card = document.createElement('div');
        card.className = 'song-card';
        // Usamos hqdefault.jpg para asegurar que carga la miniatura rápido
        card.innerHTML = `
            <img src="https://img.youtube.com/vi/${winner.ytId}/hqdefault.jpg" class="card-img" alt="${winner.country}">
            <div class="card-body">
                <p class="card-info">${winner.year} | ${winner.country}</p>
                <p class="card-song">${winner.song}</p>
            </div>
        `;
        
        card.onclick = () => {
            isMarathonMode = false; // Desactiva maratón si hacen clic manual
            selectVideo(winner.ytId);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        
        playlistDiv.appendChild(card);
    });
});

// 2. INICIALIZAR REPRODUCTOR DE YOUTUBE
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '100%',
        width: '100%',
        videoId: winners[0].ytId, // Carga el primero de la lista (Suiza 2024) por defecto
        playerVars: {
            'autoplay': 0,
            'modestbranding': 1,
            'rel': 0 // Intenta no mostrar videos recomendados externos al final
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function selectVideo(id) {
    if (player && player.loadVideoById) {
        player.loadVideoById(id);
    }
}

// 3. LÓGICA DE REPRODUCCIÓN CONTINUA (MARATÓN)
function startMarathon() {
    if (!player) {
        alert("El reproductor aún está cargando, dale un segundo.");
        return;
    }
    isMarathonMode = true;
    player.loadVideoById(winners[0].ytId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function onPlayerStateChange(event) {
    // Si el estado es 0, significa que el vídeo ha terminado
    if (event.data === 0 && isMarathonMode) {
        const currentId = player.getVideoData().video_id;
        const currentIndex = winners.findIndex(w => w.ytId === currentId);
        
        if (currentIndex !== -1 && currentIndex < winners.length - 1) {
            // Carga el siguiente de la lista
            player.loadVideoById(winners[currentIndex + 1].ytId);
        } else {
            isMarathonMode = false;
            alert("¡Maratón terminado! Es hora de repartir los puntos.");
        }
    }
}
// Lista de los 24 últimos ganadores con IDs revisados
const winners = [
    { year: 2025, country: "Austria", song: "JJ – Wasted Love", ytId: "onOex2WXjbA" },
    { year: 2024, country: "Suiza", song: "Nemo - The Code", ytId: "CO_qJf-nW0k" },
    { year: 2023, country: "Suecia", song: "Loreen - Tattoo", ytId: "BE2Fj0W4jP4" },
    { year: 2022, country: "Ucrania", song: "Kalush Orch. - Stefania", ytId: "F1fl60ypdLs" },
    { year: 2021, country: "Italia", song: "Måneskin - Zitti E Buoni", ytId: "RVH5dn1cxAQ" },
    { year: 2019, country: "P. Bajos", song: "Duncan Laurence - Arcade", ytId: "R3D-r4ogr7s" },
    { year: 2018, country: "Chipre", song: "Eleni Foureira - Fuego", ytId: "vyDTbJ4wenY" },
    { year: 2017, country: "Portugal", song: "Salvador Sobral - Amar Pelos Dois", ytId: "Qotooj7ODCM" },
    { year: 2016, country: "Ucrania", song: "Jamala - 1944", ytId: "B-rnM-MwRHY" },
    { year: 2015, country: "Suecia", song: "Måns Zelmerlöw - Heroes", ytId: "5sGOwFVUU0I" },
    { year: 2014, country: "Austria", song: "Conchita Wurst - Rise Like a Phoenix", ytId: "QRUIava4WRM" },
    { year: 2013, country: "Dinamarca", song: "Emmelie de Forest - Only Teardrops", ytId: "QxVWcDevKLg" },
    { year: 2012, country: "Suecia", song: "Loreen - Euphoria", ytId: "Pfo-8z86x80" },
    { year: 2011, country: "Azerbaiyán", song: "Ell & Nikki - Running Scared", ytId: "_0tlQUW5X0U" },
    { year: 2010, country: "Alemania", song: "Lena - Satellite", ytId: "7pL9vdpSvnY" },
    { year: 2009, country: "Noruega", song: "Alexander Rybak - Fairytale", ytId: "WXwgZL4zx9o" },
    { year: 2008, country: "Rusia", song: "Dima Bilan - Believe", ytId: "-72s4WzUcKI" },
    { year: 2007, country: "Serbia", song: "Marija Šerifović - Molitva", ytId: "vWj58UP_ENY" },
    { year: 2006, country: "Finlandia", song: "Lordi - Hard Rock Hallelujah", ytId: "gAh9NRGNhUU" },
    { year: 2005, country: "Grecia", song: "Helena Paparizou - My Number One", ytId: "rcOwvZ26KFQ" },
    { year: 2004, country: "Ucrania", song: "Ruslana - Wild Dances", ytId: "VD6of9YQMMc" },
    { year: 2003, country: "Turquía", song: "Sertab Erener - Everyway That I Can", ytId: "j0_QrKnqd5E" },
    { year: 2002, country: "Letonia", song: "Marie N - I Wanna", ytId: "_M-w89U8TEU" }, 
    { year: 2001, country: "Estonia", song: "Tanel Padar - Everybody", ytId: "92TSUlqzFi8" }, 
    { year: 2000, country: "Dinamarca", song: "Olsen Bros - Fly on Wings...", ytId: "JF8fkHK0AWs" }
];

const banderas = {
    "Suiza": "🇨🇭", "Suecia": "🇸🇪", "Ucrania": "🇺🇦", "Italia": "🇮🇹",
    "P. Bajos": "🇳🇱", "Israel": "🇮🇱", "Portugal": "🇵🇹", "Austria": "🇦🇹",
    "Dinamarca": "🇩🇰", "Azerbaiyán": "🇦🇿", "Alemania": "🇩🇪", "Noruega": "🇳🇴",
    "Rusia": "🇷🇺", "Serbia": "🇷🇸", "Finlandia": "🇫🇮", "Grecia": "🇬🇷",
    "Turquía": "🇹🇷", "Letonia": "🇱🇻", "Estonia": "🇪🇪"
};

let player;
let isMarathonMode = false;
let draggedCard = null;
let selectedTrackForMobile = null;

function showModal(title, content, isError = false) {
    const modal = document.getElementById('custom-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const modalContent = document.querySelector('.modal-content');

    modalTitle.textContent = title;
    modalBody.innerHTML = content;

    modalContent.style.borderColor = isError ? 'var(--ev-blue)' : 'var(--ev-pink)';
    modalTitle.style.color = isError ? 'var(--ev-blue)' : 'var(--ev-pink)';

    modal.classList.add('show');
}

document.addEventListener('DOMContentLoaded', () => {
    const playlistDiv = document.getElementById('playlist');
    const closeBtn = document.getElementById('modal-close-btn');
    if (closeBtn) closeBtn.onclick = () => document.getElementById('custom-modal').classList.remove('show');

    winners.forEach((winner, index) => {
        const card = document.createElement('div');
        card.className = 'song-card';
        card.setAttribute('draggable', 'true');
        card.dataset.country = winner.country;
        card.dataset.ytid = winner.ytId; // Crucial para los nombres
        card.dataset.originalIndex = index;
        
        card.innerHTML = `
            <img src="https://img.youtube.com/vi/${winner.ytId}/hqdefault.jpg" class="card-img">
            <div class="card-body">
                <p class="card-info">${winner.year} | ${winner.country}</p>
                <p class="card-song">${winner.song}</p>
            </div>
        `;
        
        card.onclick = () => {
            isMarathonMode = false;
            selectVideo(winner.ytId);
            if (selectedTrackForMobile) selectedTrackForMobile.classList.remove('dragging');
            if (selectedTrackForMobile === card) selectedTrackForMobile = null;
            else { selectedTrackForMobile = card; card.classList.add('dragging'); }
        };

        card.addEventListener('dragstart', () => { draggedCard = card; card.classList.add('dragging'); document.addEventListener('dragover', handleAutoScroll); });
        card.addEventListener('dragend', () => { card.classList.remove('dragging'); draggedCard = null; document.removeEventListener('dragover', handleAutoScroll); });
        
        playlistDiv.appendChild(card);
    });

    setupVotingSystem();
});

function handleAutoScroll(e) {
    const threshold = 100;
    if (e.clientY < threshold) window.scrollBy(0, -15);
    else if (e.clientY > window.innerHeight - threshold) window.scrollBy(0, 15);
}

function returnCardToPlaylist(card) {
    const playlistDiv = document.getElementById('playlist');
    const targetIndex = parseInt(card.dataset.originalIndex);
    const nextCard = Array.from(playlistDiv.children).find(c => parseInt(c.dataset.originalIndex) > targetIndex);
    if (nextCard) playlistDiv.insertBefore(card, nextCard);
    else playlistDiv.appendChild(card);
}

function setupVotingSystem() {
    const slots = document.querySelectorAll('.point-slot');
    const playlistDiv = document.getElementById('playlist');

    function assignVote(targetSlot, card) {
        const existingCard = targetSlot.querySelector('.song-card');
        if (existingCard && existingCard !== card) returnCardToPlaylist(existingCard);
        targetSlot.appendChild(card);
    }

    slots.forEach(slot => {
        slot.addEventListener('dragover', (e) => e.preventDefault());
        slot.addEventListener('drop', (e) => { e.preventDefault(); if (draggedCard) assignVote(slot, draggedCard); });
        slot.addEventListener('click', () => { if (selectedTrackForMobile) { assignVote(slot, selectedTrackForMobile); selectedTrackForMobile.classList.remove('dragging'); selectedTrackForMobile = null; } });
    });

    playlistDiv.addEventListener('dragover', (e) => e.preventDefault());
    playlistDiv.addEventListener('drop', (e) => { e.preventDefault(); if (draggedCard) returnCardToPlaylist(draggedCard); });
    playlistDiv.addEventListener('click', () => { if (selectedTrackForMobile) { returnCardToPlaylist(selectedTrackForMobile); selectedTrackForMobile.classList.remove('dragging'); selectedTrackForMobile = null; } });

    document.getElementById('confirm-votes-btn').onclick = () => {
        let results = {};
        let missingVotes = false;

        slots.forEach(slot => {
            const card = slot.querySelector('.song-card');
            if (card) results[slot.dataset.points] = card.dataset.ytid;
            else missingVotes = true;
        });

        if (missingVotes) {
            showModal('¡FALTAN PUNTOS!', 'Completa todas las casillas antes de enviar.', true);
            return;
        }

        let resumenHTML = "<div class='modal-scorecard'>";
        const ordenPuntos = [12, 10, 8, 7, 6, 5, 4, 3, 2, 1];
        let idsArray = [];
        
        ordenPuntos.forEach(p => {
            const ytId = results[p];
            idsArray.push(ytId);
            const data = winners.find(w => w.ytId === ytId);
            const bandera = banderas[data.country] || "🎶";

            resumenHTML += `
                <div class="modal-score-row" data-points="${p}">
                    <div class="modal-score-info">
                        <p class="modal-score-country"><span>${bandera}</span> ${data.country}</p>
                        <p class="modal-score-song">${data.song}</p>
                    </div>
                    <div class="modal-score-points">${p}</div>
                </div>
            `;
        });
        resumenHTML += "</div>";

        const url = `playlist.html?votos=${idsArray.join(',')}`;
        resumenHTML += `
            <div class="modal-footer-buttons">
                <a href="${url}" target="_blank" class="btn-primary">▶ REPRODUCIR MI TOP</a>
                <button onclick="navigator.clipboard.writeText('${window.location.origin + window.location.pathname.replace('index.html', '') + url}'); alert('Copiado!');" class="btn-secondary">COPIAR ENLACE</button>
            </div>
        `;

        showModal('¡VOTOS ENVIADOS!', resumenHTML, false);
    };
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '100%', width: '100%', videoId: winners[0].ytId,
        playerVars: { 'autoplay': 0, 'modestbranding': 1, 'rel': 0 },
        events: { 'onStateChange': onPlayerStateChange }
    });
}

function selectVideo(id) { if (player && player.loadVideoById) player.loadVideoById(id); }

function startMarathon() {
    if (!player) return;
    isMarathonMode = true;
    player.loadVideoById(winners[0].ytId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function onPlayerStateChange(event) {
    if (event.data === 0 && isMarathonMode) {
        const currentIndex = winners.findIndex(w => w.ytId === player.getVideoData().video_id);
        if (currentIndex < winners.length - 1) player.loadVideoById(winners[currentIndex + 1].ytId);
        else { isMarathonMode = false; showModal("¡Maratón Terminado!", "Hora de votar."); }
    }
}
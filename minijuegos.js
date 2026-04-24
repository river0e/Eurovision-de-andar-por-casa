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

let bancoPreguntas = [
    { texto: "¿Quién ganó vestido de Monstruo del Rock? 👹", ytIdCorrecto: "gAh9NRGNhUU" },
    { texto: "¿Quién usó más efectos de FUEGO 🔥 en su actuación?", ytIdCorrecto: "vyDTbJ4wenY" },
    { texto: "¿Quién interactúa con un muñequito de palo digital?", ytIdCorrecto: "5sGOwFVUU0I" },
    { texto: "¿Quién canta apoyado en un violín? 🎻", ytIdCorrecto: "WXwgZL4zx9o" },
    { texto: "¿Quién canta sobre una plataforma giratoria?", ytIdCorrecto: "CO_qJf-nW0k" },
    { texto: "¿Quién trajo el Rock con trajes de cuero burdeos?", ytIdCorrecto: "RVH5dn1cxAQ" },
    { texto: "¿Quién tiene una barba espectacular y vestido de gala?", ytIdCorrecto: "QRUIava4WRM" },
    { texto: "¿Quién canta en solitario al piano con 'Arcade'?", ytIdCorrecto: "R3D-r4ogr7s" },
    { texto: "¿Quién ganó con una balada de jazz rodeado de plantas?", ytIdCorrecto: "Qotooj7ODCM" },
    { texto: "¿Quién ganó dos veces (incluyendo 'Tattoo')?", ytIdCorrecto: "BE2Fj0W4jP4" },
    { texto: "¿Quién baila 'My Number One'?", ytIdCorrecto: "rcOwvZ26KFQ" },
    { texto: "¿Quién ganó descalza con 'Only Teardrops'?", ytIdCorrecto: "QxVWcDevKLg" },
    { texto: "¿Quién canta 'Euphoria' bajo la nieve?", ytIdCorrecto: "Pfo-8z86x80" },
    { texto: "¿Quién ganó para Alemania con un vestido negro sencillo?", ytIdCorrecto: "7pL9vdpSvnY" },
    { texto: "¿Qué dúo ganó con una lluvia de chispas?", ytIdCorrecto: "_0tlQUW5X0U" },
    { texto: "¿Quién cantó 'Molitva' con un coro femenino?", ytIdCorrecto: "vWj58UP_ENY" },
    { texto: "¿Qué hermanos ganaron con guitarras acústicas?", ytIdCorrecto: "JF8fkHK0AWs" },
    { texto: "¿Quién trajo el rap con flautas y un gorro rosa?", ytIdCorrecto: "F1fl60ypdLs" },
    { texto: "¿Quién se arrancó el traje para revelar un vestido rosa?", ytIdCorrecto: "_M-w89U8TEU" },
    { texto: "¿Quién trajo el 'Wasted Love' en 2025?", ytIdCorrecto: "onOex2WXjbA" },
    { texto: "¿Quién canta '1944' sobre la historia de Crimea?", ytIdCorrecto: "B-rnM-MwRHY" },
    { texto: "¿Quién nos hizo bailar con ritmos orientales en 2003?", ytIdCorrecto: "j0_QrKnqd5E" },
    { texto: "¿Quién ganó con 'Heroes'?", ytIdCorrecto: "5sGOwFVUU0I" },
    { texto: "¿Quién bailó 'Everyway That I Can'?", ytIdCorrecto: "j0_QrKnqd5E" },
    { texto: "¿Qué país ganó con 'Wild Dances' en 2004?", ytIdCorrecto: "VD6of9YQMMc" },
    { texto: "¿Quién trajo una pista de hielo y un patinador?", ytIdCorrecto: "-72s4WzUcKI" },
    { texto: "¿Quién ganó con 'Believe'?", ytIdCorrecto: "-72s4WzUcKI" },
    { texto: "¿Quién ganó con 'Running Scared'?", ytIdCorrecto: "_0tlQUW5X0U" },
    { texto: "¿Quién ganó con 'Satellite'?", ytIdCorrecto: "7pL9vdpSvnY" },
    { texto: "¿Quién ganó con 'Zitti E Buoni'?", ytIdCorrecto: "RVH5dn1cxAQ" },
    { texto: "¿Qué artista combinó ópera, rap y drum and bass en su canción en 2024? 🎶", ytIdCorrecto: "CO_qJf-nW0k" }, // Nemo (The Code)
    { texto: "¿Qué canción ganadora lleva el nombre de la madre (o abuela) del cantante principal y tiene rap ucraniano?", ytIdCorrecto: "F1fl60ypdLs" }, // Kalush Orch. (Stefania)
    { texto: "¿Quién incendió Eurovisión en 2018 quedando en 2ª posición pero siendo la reina del baile? 💃", ytIdCorrecto: "vyDTbJ4wenY" }, // Eleni Foureira (Fuego)
    { texto: "¿Quién cantó pidiendo que le amaran 'por los dos' con un traje que le quedaba muy grande?", ytIdCorrecto: "Qotooj7ODCM" }, // Salvador Sobral
    { texto: "¿Qué actuación ganadora contaba con unos 'abuelos' muy marchosos y guitarras acústicas? 🎸", ytIdCorrecto: "JF8fkHK0AWs" }, // Olsen Bros
    { texto: "¿Qué cantante chipriota sacudió su melena a un ritmo endiablado en Lisboa?", ytIdCorrecto: "vyDTbJ4wenY" }, // Eleni Foureira
    { texto: "¿Qué banda gritó 'Rock and Roll never dies' antes de repetir su actuación ganadora en 2021?", ytIdCorrecto: "RVH5dn1cxAQ" }, // Maneskin
    { texto: "¿Qué cantante ucraniana trajo sonidos de los Cárpatos, látigos y bailes de guerreros en 2004?", ytIdCorrecto: "VD6of9YQMMc" }, // Ruslana
    { texto: "¿Qué artista no binario rompió 'El Código' ganando el micrófono de cristal en Malmö?", ytIdCorrecto: "CO_qJf-nW0k" }, // Nemo
    { texto: "¿Qué actuación rusa incluía al campeón olímpico Evgeni Plushenko patinando en el escenario? ⛸️", ytIdCorrecto: "-72s4WzUcKI" }, // Dima Bilan
    { texto: "¿Quién nos cantó un 'cuento de hadas' (Fairytale) acompañado de unos acróbatas haciendo piruetas?", ytIdCorrecto: "WXwgZL4zx9o" }, // Alexander Rybak
    { texto: "¿Qué ganadora nos enseñó a 'levantarnos como un fénix' con un porte majestuoso?", ytIdCorrecto: "QRUIava4WRM" }, // Conchita Wurst
    { texto: "¿Quién trajo un vestido corto brillante tras quitarse una chaqueta grande y un sombrero en 2002?", ytIdCorrecto: "_M-w89U8TEU" }, // Marie N
    { texto: "¿Qué cantante sueca logró su primera victoria practicando 'artes marciales' escénicas bajo una luz estroboscópica? 💡", ytIdCorrecto: "Pfo-8z86x80" }, // Loreen (Euphoria)
    { texto: "¿Qué canción ganadora cuenta la triste historia del pueblo tártaro de Crimea? 📜", ytIdCorrecto: "B-rnM-MwRHY" }, // Jamala
    { texto: "¿Quién hipnotizó a toda Europa sentado frente a un piano y con un globo de luz flotando en 2019?", ytIdCorrecto: "R3D-r4ogr7s" }, // Duncan Laurence
    { texto: "¿Quién ganó cantando en alemán, o más bien, en un inglés con muchísimo acento alemán y actitud rebelde en 2010?", ytIdCorrecto: "7pL9vdpSvnY" }, // Lena
    { texto: "¿Qué dúo estonio dio la gran sorpresa ganando en 2001 con mucha fiesta escénica?", ytIdCorrecto: "92TSUlqzFi8" }, // Tanel Padar
    { texto: "¿Quién cantó una balada íntima, sin coreografía y con la música de una pequeña orquesta de fondo?", ytIdCorrecto: "Qotooj7ODCM" }, // Salvador Sobral
    { texto: "¿Qué monstruos nos hicieron rezar la oración de 'Hard Rock Hallelujah'? 🤘", ytIdCorrecto: "gAh9NRGNhUU" } // Lordi
];
// Variables del juego
let preguntasAleatorias = [];
let preguntaActual = 0;
let draggedCard = null;

// Nuevas variables de puntuación y turnos
let temporizadorPensar; // Guarda el tiempo
let puntosEuro = 0;
let puntosVision = 0;
let equipoActivo = ''; // 'euro' o 'vision'
let maxPreguntas = 10;

let intentosPregunta = 0; // Para saber si es el primer o segundo fallo

// Carga inicial (dibuja cartas pero NO carga pregunta aún)
document.addEventListener('DOMContentLoaded', () => {
    preguntasAleatorias = bancoPreguntas.sort(() => Math.random() - 0.5);
    const gridDiv = document.getElementById('trivia-grid');
    
    winners.forEach((winner, index) => {
        const card = document.createElement('div');
        card.className = 'song-card';
        card.setAttribute('draggable', 'true');
        card.dataset.ytid = winner.ytId; 
        card.dataset.originalIndex = index;
        card.innerHTML = `<img src="https://img.youtube.com/vi/${winner.ytId}/hqdefault.jpg" class="card-img" draggable="false">
            <div class="card-body"><p class="card-info">${winner.year} | ${winner.country}</p><p class="card-song">${winner.song}</p></div>`;
        card.addEventListener('dragstart', () => { draggedCard = card; card.classList.add('dragging'); });
        card.addEventListener('dragend', () => { card.classList.remove('dragging'); draggedCard = null; });
        gridDiv.appendChild(card);
    });
    
    setupDropzone();
    // El modal de 'setup-modal' ya se muestra por defecto con la clase 'show' en el HTML
});

// --- NUEVAS FUNCIONES DE FLUJO DE JUEGO ---

window.empezarJuego = function(cantidad) {
    maxPreguntas = Math.min(cantidad, preguntasAleatorias.length);
    puntosEuro = 0;
    puntosVision = 0;
    preguntaActual = 0;

    document.getElementById('score-euro').textContent = 0;
    document.getElementById('score-vision').textContent = 0;

    document.getElementById('setup-modal').classList.remove('show');
    cargarPregunta(); 
};

function cargarPregunta() {
    if (preguntaActual >= maxPreguntas) {
        let ganador = puntosEuro > puntosVision ? "¡GANA EQUIPO EURO! 🔵🏆" : puntosVision > puntosEuro ? "¡GANA EQUIPO VISION! 🟣🏆" : "¡EMPATE! 🤝";
        document.getElementById('pregunta-texto').textContent = `¡FIN DEL JUEGO! ${ganador}`;
        document.getElementById('trivia-dropzone').style.display = 'none';
        return;
    }

    // 1. Ocultar la caja de respuesta mientras leen
    const dropzone = document.getElementById('trivia-dropzone');
    dropzone.style.display = 'none';
    dropzone.className = 'trivia-dropzone';
    const existing = dropzone.querySelector('.song-card');
    if (existing) devolverAlGrid(existing);
    document.getElementById('dropzone-hint').style.display = 'block';

    // 2. Mostrar la pregunta con el botón de Forzar Respuesta
    document.getElementById('pregunta-texto').innerHTML =
        `${preguntasAleatorias[preguntaActual].texto}<br>
        <button onclick="pedirTurno()" class="btn-primary" style="margin-top:20px; font-size:0.9rem; padding:10px 20px;">⏱️ RESPONDER AHORA (<span id="countdown-text">12</span>s)</button>`;

    // 3. Iniciar temporizador de 12 segundos
    let segundos = 12;
    clearInterval(temporizadorPensar);
    
    temporizadorPensar = setInterval(() => {
        segundos--;
        const countdownEl = document.getElementById('countdown-text');
        if(countdownEl) countdownEl.textContent = segundos;

        if (segundos <= 0) {
            pedirTurno(); // Si se acaba el tiempo, salta el modal
        }
    }, 1000);
}

window.pedirTurno = function() {
    clearInterval(temporizadorPensar); // Paramos el reloj
    // Limpiamos la pregunta para quitar el botón
    document.getElementById('pregunta-texto').innerHTML = preguntasAleatorias[preguntaActual].texto;
    document.getElementById('turno-modal').classList.add('show');
};

window.asignarTurno = function(equipo) {
    equipoActivo = equipo;
    document.getElementById('turno-modal').classList.remove('show');

    // Ilumina quién está jugando
    document.getElementById('score-euro-box').className = equipo === 'euro' ? 'team-score active-team' : 'team-score';
    document.getElementById('score-vision-box').className = equipo === 'vision' ? 'team-score active-team' : 'team-score';

    // Mostrar la caja para que arrastren!
    document.getElementById('trivia-dropzone').style.display = 'flex';
};

window.saltarPregunta = function() {
    clearInterval(temporizadorPensar);
    preguntaActual++;
    cargarPregunta();
};

function setupDropzone() {
    const dz = document.getElementById('trivia-dropzone');
    dz.addEventListener('dragover', (e) => { e.preventDefault(); dz.classList.add('drag-over'); });
    dz.addEventListener('dragleave', () => dz.classList.remove('drag-over'));
    dz.addEventListener('drop', (e) => {
        e.preventDefault();
        dz.classList.remove('drag-over');
        if (draggedCard) {
            document.getElementById('dropzone-hint').style.display = 'none';
            const old = dz.querySelector('.song-card');
            if (old) devolverAlGrid(old);
            dz.appendChild(draggedCard);
            comprobar(draggedCard);
        }
    });
}

function comprobar(carta) {
    const dz = document.getElementById('trivia-dropzone');
    const idOk = preguntasAleatorias[preguntaActual].ytIdCorrecto;

    if (carta.dataset.ytid === idOk) {
        dz.classList.add('correct');
        if(equipoActivo === 'euro') puntosEuro++; else puntosVision++; // SUMA 1
        actualizarMarcador();

        setTimeout(() => { preguntaActual++; cargarPregunta(); }, 1500); 
    } else {
        dz.classList.add('incorrect');
        if(equipoActivo === 'euro') puntosEuro--; else puntosVision--; // RESTA 1
        actualizarMarcador();

        setTimeout(() => {
            devolverAlGrid(carta);
            dz.classList.remove('incorrect');
            document.getElementById('dropzone-hint').style.display = 'block';
        }, 1000);
    }
}

function actualizarMarcador() {
    document.getElementById('score-euro').textContent = puntosEuro;
    document.getElementById('score-vision').textContent = puntosVision;
}

function devolverAlGrid(card) {
    const grid = document.getElementById('trivia-grid');
    const idx = parseInt(card.dataset.originalIndex);
    const next = Array.from(grid.children).find(c => parseInt(c.dataset.originalIndex) > idx);
    if (next) grid.insertBefore(card, next); else grid.appendChild(card);
}

function setupDropzone() {
    const dz = document.getElementById('trivia-dropzone');
    dz.addEventListener('dragover', (e) => { e.preventDefault(); dz.classList.add('drag-over'); });
    dz.addEventListener('dragleave', () => dz.classList.remove('drag-over'));
    dz.addEventListener('drop', (e) => {
        e.preventDefault();
        dz.classList.remove('drag-over');
        if (draggedCard) {
            document.getElementById('dropzone-hint').style.display = 'none';
            const old = dz.querySelector('.song-card');
            if (old) devolverAlGrid(old);
            dz.appendChild(draggedCard);
            comprobar(draggedCard);
        }
    });
}

function comprobar(carta) {
    const dz = document.getElementById('trivia-dropzone');
    const idOk = preguntasAleatorias[preguntaActual].ytIdCorrecto;
    
    if (carta.dataset.ytid === idOk) {
        dz.classList.add('correct');
        // Suma 1 punto
        if(equipoActivo === 'euro') puntosEuro++; else puntosVision++;
        actualizarMarcador();
        
        setTimeout(() => { preguntaActual++; pedirTurno(); }, 1500);
    } else {
        dz.classList.add('incorrect');
        // Resta 1 punto
        if(equipoActivo === 'euro') puntosEuro--; else puntosVision--;
        actualizarMarcador();
        
        setTimeout(() => { 
            devolverAlGrid(carta); 
            dz.classList.remove('incorrect'); 
            document.getElementById('dropzone-hint').style.display = 'block'; 
        }, 1000); // Permite seguir intentando la misma pregunta si fallan
    }
}

function actualizarMarcador() {
    document.getElementById('score-euro').textContent = puntosEuro;
    document.getElementById('score-vision').textContent = puntosVision;
}

function devolverAlGrid(card) {
    const grid = document.getElementById('trivia-grid');
    const idx = parseInt(card.dataset.originalIndex);
    const next = Array.from(grid.children).find(c => parseInt(c.dataset.originalIndex) > idx);
    if (next) grid.insertBefore(card, next); else grid.appendChild(card);
}
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
    // --- LIMPIEZA Y AJUSTES DE LAS ANTERIORES ---
    { texto: "¿Quién ganó vestido de Monstruo del Rock con hachas y alas? 👹", ytIdCorrecto: "gAh9NRGNhUU" },
    { texto: "¿Qué actuación de 2018 usó columnas de fuego y una melena que no paraba de moverse? 🔥", ytIdCorrecto: "vyDTbJ4wenY" },
    { texto: "¿Quién interactúa con un muñequito de palo digital que camina por su brazo?", ytIdCorrecto: "5sGOwFVUU0I" },
    { texto: "¿Quién ganó tocando un violín de madera mientras unos acróbatas hacían piruetas?", ytIdCorrecto: "WXwgZL4zx9o" },
    { texto: "¿Qué artista no binario ganó manteniendo el equilibrio sobre una plataforma circular giratoria?", ytIdCorrecto: "CO_qJf-nW0k" },
    { texto: "¿Quién trajo el Rock con trajes de cuero burdeos y tachuelas en 2021?", ytIdCorrecto: "RVH5dn1cxAQ" },
    { texto: "¿Quién tiene una barba espectacular, luce un vestido de gala y canta ante un sol naciente?", ytIdCorrecto: "QRUIava4WRM" },
    { texto: "¿Quién ganó con una balada de jazz íntima rodeado de plantas en un escenario pequeño?", ytIdCorrecto: "Qotooj7ODCM" },
    { texto: "¿Quién ganó para Alemania con un vestido negro sencillo y una actitud muy natural?", ytIdCorrecto: "7pL9vdpSvnY" },
    { texto: "¿Qué dúo ganó bajo una lluvia de chispas blancas y un escenario minimalista?", ytIdCorrecto: "_0tlQUW5X0U" },
    { texto: "¿Qué hermanos ganaron con guitarras acústicas y unos coristas sentados detrás?", ytIdCorrecto: "JF8fkHK0AWs" },
    { texto: "¿Quién trajo el rap con flautas tradicionales y un icónico gorro de color rosa?", ytIdCorrecto: "F1fl60ypdLs" },
    { texto: "¿Quién se arrancó el traje al inicio para revelar un vestido corto brillante en 2002?", ytIdCorrecto: "_M-w89U8TEU" },
    { texto: "¿Quién trajo el 'Wasted Love' en 2025 con una estética de club nocturno?", ytIdCorrecto: "onOex2WXjbA" },
    { texto: "¿Quién hipnotizó a Europa sentado frente a un piano con un globo de luz flotando?", ytIdCorrecto: "R3D-r4ogr7s" },
    { texto: "¿Qué cantante ucraniana trajo sonidos de los Cárpatos y bailes de guerreros con látigos?", ytIdCorrecto: "VD6of9YQMMc" },
    { texto: "¿Qué actuación rusa incluía a un patinador sobre hielo real en una pista circular?", ytIdCorrecto: "-72s4WzUcKI" },

    // --- LOREEN: DOBLE VICTORIA (Acepta ambos IDs) ---
    {
        texto: "¿Quién es la única mujer que ha ganado dos veces con puestas en escena muy físicas y visuales?",
        ytIdCorrecto: ["Pfo-8z86x80", "BE2Fj0W4jP4"]
    },

    // --- 20 PREGUNTAS NUEVAS (BASADAS EN CLICHÉS Y VISUALES) ---
    { texto: "¿Quién ganó haciendo ruidos de gallina y usando gatos de la suerte chinos (Maneki-neko)? 🐔", ytIdCorrecto: "84LBjXaeKk4" },
    { texto: "¿Qué canción ganadora de los 90 era casi instrumental y tenía a una violinista pelirroja?", ytIdCorrecto: "6qqOI04Fr_w" },
    { texto: "¿Quién cantó dentro de una 'prensa' de arena y humo bajo una pantalla gigante de LED?", ytIdCorrecto: "BE2Fj0W4jP4" },
    { texto: "¿Quién trajo un coro de señoras mayores (abuelas) cocinando pan en un horno real?", ytIdCorrecto: "BgMq5998ze0" },
    { texto: "¿Qué cantante israelí ganó con un vestido de plumas de colores diseñado por Jean Paul Gaultier?", ytIdCorrecto: "fVSR4p8MshQ" },
    { texto: "¿Quién ganó descalza, con tambores gigantes y una flauta mágica en Malmö 2013?", ytIdCorrecto: "QxVWcDevKLg" },
    { texto: "¿Qué grupo ucraniano bailó con un 'alien' plateado y una estrella en la cabeza? ⭐️", ytIdCorrecto: "hfjyPBRx9vQ" },
    { texto: "¿Quién cantó rodeado de cintas de seda rojas que sus bailarines usaban para atraparla?", ytIdCorrecto: "j0_QrKnqd5E" },
    { texto: "¿Qué cantante griega usó a sus bailarines para formar una 'lira humana' con cuerdas elásticas?", ytIdCorrecto: "rcOwvZ26KFQ" },
    { texto: "¿Quién ganó en 2012 bailando bajo una 'nieve' artificial que caía del techo?", ytIdCorrecto: "Pfo-8z86x80" },
    { texto: "¿Qué artista serbia cantó rodeada de cinco mujeres en traje, formando un corazón con las manos?", ytIdCorrecto: "vWj58UP_ENY" },
    { texto: "¿Quién trajo una escenografía inspirada en el circo, con un piano que echaba fuegos artificiales?", ytIdCorrecto: "mI7iaZ_m_Xg" },
    { texto: "¿Qué cantante italiana cantó sobre las sombras y la velocidad frente a un micrófono vintage?", ytIdCorrecto: "vaLz16847Hw" },
    { texto: "¿Quién nos dio una clase de gimnasia con bailarines vestidos de deportistas de los 80?", ytIdCorrecto: "6iS-lV_6_Y8" },
    { texto: "¿Qué grupo islandés trajo el estilo 'BDSM' con una estructura metálica y fuego en Tel Aviv?", ytIdCorrecto: "eVbShUx9Gls" },
    { texto: "¿Quién cantó sobre una estructura de cristal que se rompía (literalmente) al final de la canción?", ytIdCorrecto: "kTXPSL0u-WM" },
    { texto: "¿Qué cantante francés cantó solo con su sombra y una luz blanca muy potente en 2021?", ytIdCorrecto: "Unj9WbeLz_M" },
    { texto: "¿Quién apareció dentro de una caja de cristal que se elevaba mientras cantaba sobre la paz?", ytIdCorrecto: "mS6mCA_99vA" },
    { texto: "¿Qué país ganó con un grupo de heavy metal que llevaba máscaras de orcos y dragones?", ytIdCorrecto: "gAh9NRGNhUU" },
    { texto: "¿Quién bailó un tango moderno con un vestido amarillo y una coreografía muy rápida en 2024?", ytIdCorrecto: "f_Tz-u_Yf6I" }
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

// SCROLL AUTOMÁTICO: Detecta la posición del dedo/ratón y mueve la pantalla
function handleAutoScroll(e) {
    if (!draggedCard) return;

    // Obtener la posición Y (funciona en PC y en Móvil)
    const clientY = e.clientY || (e.touches ? e.touches[0].clientY : 0);
    const windowHeight = window.innerHeight;
    const threshold = 120; // Distancia desde el borde para empezar a scrollear
    const scrollSpeed = 20; // Velocidad del desplazamiento

    if (clientY < threshold) {
        // Scroll hacia ARRIBA
        window.scrollBy(0, -scrollSpeed);
    } else if (clientY > windowHeight - threshold) {
        // Scroll hacia ABAJO
        window.scrollBy(0, scrollSpeed);
    }
}

// Escuchadores globales para que el scroll sea constante durante el arrastre
document.addEventListener('dragover', handleAutoScroll);
document.addEventListener('touchmove', (e) => {
    if (draggedCard) {
        e.preventDefault(); // Evita que el móvil haga su scroll nativo y use el nuestro
        handleAutoScroll(e);
    }
}, { passive: false });

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
        card.innerHTML = `
            <img src="https://img.youtube.com/vi/${winner.ytId}/hqdefault.jpg" class="card-img" draggable="false">
            <div class="card-body">
                <p class="card-info">${winner.year} | ${winner.country}</p>
                <p class="card-song">${winner.song}</p>
            </div>`;

        // Eventos de arrastre
        card.addEventListener('dragstart', () => {
            draggedCard = card;
            card.classList.add('dragging');
        });

        card.addEventListener('dragend', () => {
            card.classList.remove('dragging');
            draggedCard = null;
        });

        // Soporte extra para móviles (Touch)
        card.addEventListener('touchstart', () => { draggedCard = card; }, { passive: true });

        gridDiv.appendChild(card);
    });

    setupDropzone();
});

// --- NUEVAS FUNCIONES DE FLUJO DE JUEGO ---

window.empezarJuego = function (cantidad) {
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
    intentosPregunta = 0; // Reiniciamos los intentos para la nueva pregunta
    if (preguntaActual >= maxPreguntas) {
        let ganador = puntosEuro > puntosVision ? "¡GANA EQUIPO EURO! 🔵" : puntosVision > puntosEuro ? "¡GANA EQUIPO VISION! 🟣" : "¡EMPATE! 🤝";
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
        <button onclick="pedirTurno()" class="btn-primary" style="margin-top:20px; font-size:0.9rem; padding:10px 20px;">⏱️ RESPONDER AHORA (<span id="countdown-text">10</span>s)</button>`;

    // 3. Iniciar temporizador de 12 segundos
    let segundos = 10;
    clearInterval(temporizadorPensar);

    temporizadorPensar = setInterval(() => {
        segundos--;
        const countdownEl = document.getElementById('countdown-text');
        if (countdownEl) countdownEl.textContent = segundos;

        if (segundos <= 0) {
            pedirTurno(); // Si se acaba el tiempo, salta el modal
        }
    }, 1000);
}

window.pedirTurno = function () {
    clearInterval(temporizadorPensar); // Paramos el reloj
    // Limpiamos la pregunta para quitar el botón
    document.getElementById('pregunta-texto').innerHTML = preguntasAleatorias[preguntaActual].texto;
    document.getElementById('turno-modal').classList.add('show');
};

window.asignarTurno = function (equipo) {
    equipoActivo = equipo;
    document.getElementById('turno-modal').classList.remove('show');

    // Ilumina quién está jugando
    document.getElementById('score-euro-box').className = equipo === 'euro' ? 'team-score active-team' : 'team-score';
    document.getElementById('score-vision-box').className = equipo === 'vision' ? 'team-score active-team' : 'team-score';

    // Mostrar la caja para que arrastren!
    document.getElementById('trivia-dropzone').style.display = 'flex';
};

window.saltarPregunta = function () {
    clearInterval(temporizadorPensar);
    preguntaActual++;
    cargarPregunta();
};

function comprobar(carta) {
    const dz = document.getElementById('trivia-dropzone');
    const idOk = preguntasAleatorias[preguntaActual].ytIdCorrecto;
    const esCorrecto = Array.isArray(idOk)
        ? idOk.includes(carta.dataset.ytid)
        : carta.dataset.ytid === idOk;

    if (esCorrecto) {
        dz.classList.add('correct');
        if (equipoActivo === 'euro') puntosEuro++; else puntosVision++;
        actualizarMarcador();

        setTimeout(() => {
            devolverAlGrid(carta);
            dz.classList.remove('correct');
            preguntaActual++;
            cargarPregunta();
        }, 1200);
    } else {
        // --- ERROR (REBOTE) ---
        dz.classList.add('incorrect');
        if (equipoActivo === 'euro') puntosEuro--; else puntosVision--;
        actualizarMarcador();
        intentosPregunta++; // Sumamos intento fallido

        setTimeout(() => {
            devolverAlGrid(carta); // La carta vuelve al grid
            dz.classList.remove('incorrect');
            document.getElementById('dropzone-hint').style.display = 'block';

            if (intentosPregunta === 1) {
                // PRIMER FALLO: REBOTE
                equipoActivo = (equipoActivo === 'euro') ? 'vision' : 'euro';

                // Actualizar visualmente quién tiene el turno ahora
                document.getElementById('score-euro-box').className = equipoActivo === 'euro' ? 'team-score active-team' : 'team-score';
                document.getElementById('score-vision-box').className = equipoActivo === 'vision' ? 'team-score active-team' : 'team-score';

                document.getElementById('pregunta-texto').innerHTML =
                    `<span style="color:#ff007f; font-weight:bold;">¡FALLO! Rebote para el otro equipo...</span><br>${preguntasAleatorias[preguntaActual].texto}`;
            } else {
                // SEGUNDO FALLO: PASAR PREGUNTA
                document.getElementById('pregunta-texto').innerHTML = `<span style="color:#ff007f">¡AMBOS FALLASTEIS! Siguiente...</span>`;
                setTimeout(() => {
                    preguntaActual++;
                    cargarPregunta();
                }, 1200);
            }
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


/* --- BANCO DE CLICHÉS --- */
const clichesEurovision = [
    "Máquina de viento 💨", "Cambio de vestuario 👗", "Fuego/Pirotecnia 🔥",
    "Alguien llora 😭", "Agradece en idioma local 🗣️", "12 puntos al vecino 🤝",
    "Instrumento raro 🪕", "Lluvia de chispas ✨", "Cantante descalzo 👣",
    "Grito agudo final 🎤", "Key change (Subidón) 🎹", 
    "Prop gigante en escena 🗿", "Danza folclórica 💃", "Rap inesperado 🎙️",
    "Gafas de sol de noche 😎", "Alguien desafina 🙉", "Bandera pintada en la cara 🚩",
    "Fallo de Bingo Live 📡", "United by Music mencionado 🇪🇺",
    "Bailarines con poca ropa 🩲", "Piano blanco en escena 🎹", "Uso de Realidad Aumentada 🧊",
    "Abrazo grupal al final 🤗", "Vestido con luces LED 💡", "Cama o mueble en el escenario 🛏️",
    "Efecto de lluvia artificial ⛈️", "Beso a cámara 💋", "Guitarra eléctrica invisible 🎸",
    "Público haciendo el corazón con las manos ❤️", "Alguien con sombrero ridículo 🎩", "Cambio de escenario en directo 🔄" , "Cantante tumbado en el suelo 🛌", "Coreografía de dedos 👐", "Acróbatas/Volteretas 🤸", 
    "Purpurina excesiva ✨", "Músia a lo ABBA 🇸🇪", "Plataformas imposibles 👠", 
    "Abucheos por balada 👎", "Artista hablando tras actuacción 🗣️", "Mirada intensa a cámara 👁️", 
    "Máscara inquietante 👺", "Trenzas infinitas 🧶", "Mención a la paz mundial 🕊️", 
    "Fan con bandera de capa 🤠", "Efecto cámara lenta (Slow-mo) ⏳", "Vestido efecto desnudo 👗", 
    "Animal (real o digital) 🐺", "Grito '¡Te quiero Europa!' 📣", "Bailarín sale de una caja 📦", 
    "Demasiada gente en escena 👨‍👩‍👧‍👦", "Vestido amarillo neón 🟡"
];

/* --- INICIO DEL JUEGO --- */
document.addEventListener('DOMContentLoaded', generarCarton);

function generarCarton() {
    const board = document.getElementById('bingo-board');
    if (!board) return;
    
    board.innerHTML = '';
    
    // Mezclar y elegir 16
    const seleccionados = [...clichesEurovision]
        .sort(() => Math.random() - 0.5)
        .slice(0, 16);

    seleccionados.forEach(texto => {
        const card = document.createElement('div');
        card.className = 'bingo-card';
        card.textContent = texto;
        
        card.addEventListener('click', function() {
            this.classList.toggle('marked');
            verificarVictoria();
        });
        
        board.appendChild(card);
    });
}

function verificarVictoria() {
    const marcados = document.querySelectorAll('.bingo-card.marked').length;
    
    if (marcados === 16) {
        const toast = document.getElementById('toast-notificacion');
        
        // Inyectamos la imagen y el texto
        toast.innerHTML = `
            <img src="pedro.webp" class="sticker-pedro" alt="Pedro">
            <div>EURO-BINGO</div>
            <div style='font-size: 1rem; color: var(--ev-cyan); margin-top: 5px;'>UNITED BY PEDRO</div>
        `;
        
        toast.classList.add('bingo-show');

        // Disparo de confeti (mantén la lógica de explosión central que ya tenías)
        const count = 200;
        const defaults = { origin: { y: 0.5 }, zIndex: 10002, colors: ['#ff007f', '#6200ea', '#00d2ff', '#ffe600'] };

        function fire(particleRatio, opts) {
            confetti({ ...defaults, ...opts, particleCount: Math.floor(count * particleRatio) });
        }

        fire(0.25, { spread: 26, startVelocity: 55 });
        fire(0.2, { spread: 60 });
        fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
        fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
        fire(0.1, { spread: 120, startVelocity: 45 });

        setTimeout(() => {
            toast.classList.remove('bingo-show');
        }, 6000);
    }
}
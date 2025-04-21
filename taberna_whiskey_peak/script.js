let pelea = false;
let reputacion = 0;

const scenes = {
    Start: {
        character: "Bartender",
        image: "https://i.ebayimg.com/images/g/dH4AAOSwC7VhyIww/s-l1200.png",
        background: "",
        text: `¡Bienvenido a la nueva taberna de Whiskey Peak!<br>Estamos celebrando nuestra reinauguración gracias a la ayuda de la tripulación Rakuen Kaizokudan.<br><br>Por favor, siéntete como en casa. ¿Deseas tomar algo o prefieres explorar el lugar?`,
        options: [
            { text: "Pedir algo de beber", next: "Sake" },
            { text: "Explorar el lugar", next: "Explorar" }
        ]
    },

    Sake: {
        character: "Bartender",
        image: "https://i.ebayimg.com/images/g/dH4AAOSwC7VhyIww/s-l1200.png",
        background: "https://i.imgur.com/SnAsQLs.png",
        text: `Aquí tienes, una jarra de nuestro mejor sake. ¡Cortesía de la casa por la reinauguración!`,
        options: [
            { text: "Agradecer y beber", next: "FinSake" },
            { text: "Observar a los demás clientes", next: "FinSake" }
        ]
    },

    Explorar: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/lQT2bP4.png",
        text: `La taberna ha sido remodelada con gusto. Hay decoraciones nuevas, banderas piratas colgadas y una tarima donde alguien parece estar afinando un violín.`,
        options: [
            { text: "Acercarte a la tarima", next: "FinExplorar" },
            { text: "Volver con la bartender", next: "Start" }
        ]
    },

    FinSake: {
        character: "Narrador",
        image: "",
        background: "",
        text: `El sake está delicioso. La atmósfera se llena de risas y música. Parece que esta noche será inolvidable...<br><br><em>FIN (por ahora)</em>`,
        options: [
            { text: "Volver al inicio", next: "Start" }
        ]
    },

    FinExplorar: {
        character: "Narrador",
        image: "",
        background: "",
        text: `Te acercas a la tarima y notas que el músico es un mink. Al verte, asiente con una sonrisa, y comienza a tocar una melodía tranquila que inunda todo el lugar.<br><br><em>FIN (por ahora)</em>`,
        options: [
            { text: "Volver al inicio", next: "Start" }
        ]
    }
};

function showScene(key) {
    const content = scenes[key];
    if (!content) return;

    document.getElementById("character-name").textContent = content.character || "";
    document.getElementById("dialogue-text").innerHTML = content.text || "";
    document.getElementById("character-image").src = content.image || "";
    document.getElementById("character-box").style.backgroundImage = "url('" + content.background + "')";
    
    const choices = document.getElementById("choices");
    choices.innerHTML = "";

    (content.options || []).forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt.text;
        btn.onclick = () => showScene(opt.next);
        choices.appendChild(btn);
    });
}

showScene("Start");

window.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-btn");
    const overlay = document.getElementById("overlay");
    const gameContainer = document.getElementById("game-container");
    const audio = document.getElementById("bg-music");

    startBtn.addEventListener("click", () => {
        overlay.style.display = "none";
        gameContainer.style.display = "block";

        audio.volume = 0.1;
        audio.muted = false;
        audio.play().then(() => {
            console.log("Audio activado.");
        }).catch(error => {
            console.warn("No se pudo reproducir el audio:", error);
        });

        showScene("Start");
    });
});


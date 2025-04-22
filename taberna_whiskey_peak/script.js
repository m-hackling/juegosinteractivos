let pelea = false;
let reputacion = 0;
let typingInterval;
let isTyping = false;
let typingIndicator;
let currentText = "";

const scenes = {
    // Escena inicial
    Start: {
        character: "Tabernero",
        image: "https://i.imgur.com/8LCUO8p.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `¡Bienvenido a la taberna de Whiskey Peak!<br>Estamos celebrando nuestra reinauguración con ayuda de Rakuen.<br><br>¡Te los voy a presentar para que los conozcas!`,
        options: [
            { text: "Conocer a los integrantes", next: "PresentacionRakuen" },
        ]
    },

    PresentacionRakuen: {
        character: "Tabernero",
        image: "https://i.imgur.com/hIFLvwF.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `El es Aska, el capitán de la tripulación. Su iniciativa motivó a los demás para que adecuaran el interior y la fachada de la taberna.`,
        options: [
            { text: "Hablar con Aska", next: "HablasAska" }
        ]
    },

    HablasAska: {
        character: "Aska",
        image: "https://i.imgur.com/hIFLvwF.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `Muchas gracias por venir a la inauguración. Whiskey Peak debe ser un mejor lugar para todos.`,
        options: [
            { text: "Conocer a la primer oficial", next: "PresentacionCamellia" }
        ]
    },

    PresentacionCamellia: {
        character: "Tabernero",
        image: "https://i.imgur.com/p0qaRKM.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `Ella es Camellia, mano derecha del capitán. Su gran tamaño nos ayudó a reparar las instalaciones con más facilidad, sus arrugas denotan años de experiencia.`,
        options: [
            { text: "Hablar con Camellia", next: "HablasCamellia" }
        ]
    },

    HablasCamellia: {
        character: "Camellia",
        image: "https://i.imgur.com/p0qaRKM.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `Hay mucho por hacer aquí, mientras tanto, espero encuentres un lugar cómodo por aquí.`,
        options: [
            { text: "Conocer al navegante", next: "PresentacionRelmin" }
        ]
    },

    PresentacionRelmin: {
        character: "Tabernero",
        image: "https://i.imgur.com/D6av3eI.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `Este niño se llama Relmin, desde que ha venido aquí no le ha quitado los ojos de encima a las camareras...`,
        options: [
            { text: "Hablar con Relmin", next: "HablasRelmin" }
        ]
    },

    HablasRelmin: {
        character: "Relmin",
        image: "https://i.imgur.com/D6av3eI.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "ohayo.mp3",
        text: `¡AAAAAAAAAAAAAAAAAAAAAAAAH! ¡Venir aquí ha sido lo mejor que me ha pasado! ♡u♡`,
        options: [
            { text: "Conocer al carpintero", next: "PresentacionBamby" }
        ]
    },

    PresentacionBamby: {
        character: "Tabernero",
        image: "https://i.imgur.com/SOLHUdh.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `Sin duda Bamby es alguien peculiar, tiene la energía hasta el tope. ¡Nunca se cansa! Nos ha ayudado a mantener la taberna en óptimas condiciones.`,
        options: [
            { text: "Hablar con Bamby", next: "HablasBamby" }
        ]
    },
    
    HablasBamby: {
        character: "Bamby",
        image: "https://i.imgur.com/SOLHUdh.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `¡HIP! ¡Ya están viniendo todos los invitados y las mesas… ¡las mesas no están listas, ¡HIP! ¡Ay, no, esto no está listo! ¿Y las decoraciones? ¡Las decoraciones tampoco! ¡Ay, ¿qué vamos a hacer?!`,
        options: [
            { text: "Conocer al cocinero", next: "PresentacionElend" }
        ]
    },

    PresentacionElend: {
        character: "Tabernero",
        image: "https://i.imgur.com/fu5FDqW.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `Ese sujeto que ves ahí es Elend, el cocinero de Rakuen. No he cruzado muchas palabras con él, pero siempre está dispuesto a mantenernos con el estómago lleno.`,
        options: [
            { text: "Hablar con Elend", next: "HablasElend" }
        ]
    },

    HablasElend: {
        character: "Elend",
        image: "https://i.imgur.com/fu5FDqW.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `Bueno, bueno… ¡Miren esto! Si alguien piensa que va a salir algo mal con estos aperitivos, les garantizo que no saben de lo que hablan. Todo va perfecto, ya lo verán… aunque con la presión, claro, algo puede salirse de control, pero nada que no pueda arreglarse con un poco de sal y pimienta. A los que vienen a esta taberna no les voy a dar solo comida, ¡les voy a dar una experiencia, maldita sea!`,
        options: [
            { text: "Conocer al técnico", next: "PresentacionRodney" }
        ]
    },

    PresentacionRodney: {
        character: "Tabernero",
        image: "https://i.imgur.com/inevtMH.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `Él es Rodney, el tecnológo de la tripulación. Aún nos ayuda adecuando las instalaciones eléctricas en el techo de la taberna.`,
        options: [
            { text: "Hablar con Rodney", next: "HablasRodney" }
        ]
    },

    PresentacionRodney: {
        character: "Rodney",
        image: "https://i.imgur.com/inevtMH.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `Sensor térmico descalibrado, bomba secundaria con retardo... claro, cómo no. ¿Y ahora qué? ¿El dispensador de jugo cree que es un lanzallamas? Bueno, eso es nuevo. Nota mental: jamás dejar a Bamby reprogramar nada. ¡Ya casi, Rodney, ya casi… solo no explotes nada antes del brindis!`,
        options: [
            { text: "Conocer a la rebelde", next: "PresentacionAsura" }
        ]
    },

    PresentacionAsura: {
        character: "Tabernero",
        image: "https://i.imgur.com/UTlHSRL.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `Ella... ella... Bueno, ella es Asura, nos han dicho que viene del mismo cielo, y es un poco feroz. Ha estado tomando de las astas a Bamby desde que llegaron.`,
        options: [
            { text: "Hablar con Asura", next: "HablasAsura" }
        ]
    },

    HablasAsura: {
        character: "Asura",
        image: "https://i.imgur.com/UTlHSRL.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `La madera cruje, los pasos se acercan… Ya están llegando. Que vean lo que construimos. Que sientan lo que es estar a salvo por una noche, sin cadenas ni miedo. Si alguien arruina esto, no me temblará la mano.`,
        options: [
            { text: "Terminar la presentación", next: "RakuenJunto" }
        ]
    },

    RakuenJunto: {
        character: "Rakuen",
        image: "https://i.imgur.com/tBsts4W.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `¡Bienvenido a la reinauguración!`,
        options: [
            { text: "Terminar la presentación y hablar con el tabernero", next: "InicioTabernero" }
        ]
    },

    InicioTabernero: {
        character: "Tabernero",
        image: "https://i.imgur.com/8LCUO8p.png",
        background: "https://i.imgur.com/0WVQzdJ.png",
        soundEffect: "",
        text: `Por favor, siéntete como en casa. ¿Deseas tomar algo o prefieres explorar el lugar?`,
        options: [
            { text: "Tomar algo de beber", next: "TomarSake1" },
            { text: "¿Necesitas ayuda?", next: "OfrecerAyuda" }
        ]
    },

    // Ruta 1 y 4
    TomarSake1: {
        character: "Tabernero",
        image: "https://i.imgur.com/8LCUO8p.png",
        background: "https://i.imgur.com/0WVQzdJ.png",
        soundEffect: "",
        text: `Aquí tienes, nuestro mejor sake. ¡Disfrútalo!`,
        options: [
            { text: "Beber y girarte a mirar el lugar", next: "GirarYObservar" },
            { text: "Beber otro sin girarte", next: "TomarSake2" }
        ]
    },

    // Ramas de tomar sake sin girarse
    TomarSake2: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/0WVQzdJ.png",
        soundEffect: "",
        text: `Decides seguir bebiendo. El ambiente es festivo, pero algo turbio...`,
        options: [
            { text: "Beber otro más", next: "TomarSake3" },
            { text: "Salir de la taberna", next: "FinalNeutral1" }
        ]
    },

    TomarSake3: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/0WVQzdJ.png",
        soundEffect: "",
        text: `Ya estás algo ebrio. El tabernero se acerca preocupado.`,
        options: [
            { text: "Beber otro", next: "FinalMalo1" }
        ]
    },

    FinalNeutral1: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/0WVQzdJ.png",
        soundEffect: "",
        text: `Sales tambaleante de la taberna. Tal vez mañana recuerdes algo de esto.<br><br><em>FIN (neutral)</em>`,
        options: [
        ]
    },

    FinalMalo1: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/0WVQzdJ.png",
        soundEffect: "",
        text: `En tu borrachera, empujas al tabernero sin querer. Los guardias te sacan a empujones.<br><br><em>FIN (malo)</em>`,
        options: [
        ]
    },

    GirarYObservar: {
        character: "Narrador",
        image: "https://i.imgur.com/LOqewoO.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `Notas al tabernero preocupado. Algo no está bien.`,
        options: [
            { text: "Preguntar si necesita ayuda", next: "OfrecerAyuda" }
        ]
    },

    // Ofreces ayuda
    OfrecerAyuda: {
        character: "Tabernero",
        image: "https://i.imgur.com/8LCUO8p.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `Sí... me vendría bien ayuda para terminar de organizar la taberna.`,
        options: [
            { text: "Ayudarle con la taberna", next: "AyudarOrganizar" },
            { text: "No ayudar", next: "NoAyudar" }
        ]
    },

    NoAyudar: {
        character: "Narrador",
        image: "",
        background: "",
        soundEffect: "",
        text: `El tabernero suspira. Aun así, sigue limpiando solo. Lo notas muy tenso.`,
        options: [
            { text: "Preguntar qué le preocupa", next: "HistoriaExtorsion" },
            { text: "Ignorar y marcharte", next: "FinalNeutral3" }
        ]
    },

    FinalNeutral3: {
        character: "Narrador",
        image: "",
        background: "",
        soundEffect: "",
        text: `Decides no involucrarte más. Abandonas la taberna.<br><br><em>FIN (conseguiste un final neutral)</em><br><br>La novela gráfica volverá a cargarse en unos segundos...`,
        options: [
        ]
    },

    AyudarOrganizar: {
        character: "Narrador",
        image: "",
        background: "",
        soundEffect: "",
        text: `Ayudas a limpiar y ordenar. El lugar empieza a lucir mejor.`,
        options: [
            { text: "Seguir organizando", next: "OrganizarMas" },
            { text: "Explorar un cuarto misterioso", next: "InvestigarCuarto" }
        ]
    },

    OrganizarMas: {
        character: "Narrador",
        image: "https://i.imgur.com/LOqewoO.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `Terminas de organizar. Pero el tabernero sigue preocupado.`,
        options: [
            { text: "Preguntar qué le preocupa", next: "HistoriaExtorsion" }
        ]
    },

    InvestigarCuarto: {
        character: "Narrador",
        image: "https://i.imgur.com/MRdT26V.png",
        background: "https://i.imgur.com/6I14sev.png",
        soundEffect: "grab.mp3",
        text: `Encuentras un par de guantes de acero escondidos entre cajas. Podrían ser útiles.`,
        options: [
            { text: "Volver y hablar con el tabernero", next: "HistoriaExtorsionConGuantes" }
        ]
    },

    HistoriaExtorsion: {
        character: "Tabernero",
        image: "https://i.imgur.com/LOqewoO.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "cry.mp3",
        text: `Hace unos días, unos piratas comenzaron a pedirme "protección". Si no pago, arrasarán la taberna.`,
        options: [
            { text: "Ayudarle con los piratas", next: "PeleaSinGuantes" },
            { text: "No ayudarle", next: "NoAyudarConPiratas" }
        ]
    },

    HistoriaExtorsionConGuantes: {
        character: "Tabernero",
        image: "https://i.imgur.com/LOqewoO.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "cry.mp3",
        text: `Hace unos días, unos piratas comenzaron a pedirme "protección". Si no pago, arrasarán la taberna.`,
        options: [
            { text: "Ayudarle con los piratas", next: "PeleaConGuantes" },
            { text: "No ayudarle", next: "NoAyudarConPiratas" }
        ]
    },

    NoAyudarConPiratas: {
        character: "Narrador",
        image: "",
        background: "",
        soundEffect: "",
        text: `El tabernero asiente resignado. Se da vuelta y sigue limpiando solo.`,
        options: [
            { text: "Robarle mientras está distraído", next: "FinalMalo2" },
            { text: "Marcharte", next: "FinalNeutral3" }
        ]
    },

    FinalMalo2: {
        character: "Narrador",
        image: "",
        background: "",
        soundEffect: "",
        text: `Aprovechas el descuido del tabernero y te llevas algunas monedas. No te sientes orgulloso...<br><br><em>FIN (malo)</em>`,
        options: [
        ]
    },

    PeleaConGuantes: {
        character: "Narrador",
        image: "",
        background: "",
        soundEffect: "",
        text: `Gracias a los guantes de acero, logras derrotar a los piratas tras una dura pelea. El tabernero te abraza con gratitud.<br><br><em>¡FINAL BUENO! Toma un pantallazo y publícalo en el post del comunicado.</em>`,
        options: [
            { text: "Finalizar la novela gráfica", next: "Start" }
        ]
    },

    PeleaSinGuantes: {
        character: "Narrador",
        image: "",
        background: "",
        soundEffect: "",
        text: `Intentas luchar contra los piratas, pero sin un arma adecuada te superan fácilmente. Te despiertas fuera de la taberna con un chichón...<br><br><em>FIN (malo)</em>`,
        options: [
        ]
    }
};

function disableChoices() {
    const choices = document.getElementById("choices");
    choices.querySelectorAll("button").forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = "0.5";
        btn.style.pointerEvents = "none";
    });
}

function enableChoices() {
    const choices = document.getElementById("choices");
    choices.querySelectorAll("button").forEach(btn => {
        btn.disabled = false;
        btn.style.opacity = "1";
        btn.style.pointerEvents = "auto";
    });
}

function typeText(element, text, index = 0) {
    isTyping = true;
    currentText = text;
    typingIndicator.classList.add("visible");

    disableChoices(); // 

    if (index < text.length) {
        let char = text[index];

        if (char === "<") {
            const closeIndex = text.indexOf(">", index);
            if (closeIndex !== -1) {
                element.innerHTML += text.slice(index, closeIndex + 1);
                typingInterval = setTimeout(() => typeText(element, text, closeIndex + 1), 10);
                return;
            }
        }

        element.innerHTML += char;
        typingInterval = setTimeout(() => typeText(element, text, index + 1), 20);
    } else {
        isTyping = false;
        typingIndicator.classList.remove("visible");
        enableChoices(); // 
    }
}

function showScene(key) {
    const content = scenes[key];
    if (!content) return;

    document.getElementById("character-name").textContent = content.character || "";
    document.getElementById("character-image").src = content.image || "";
    document.getElementById("character-box").style.backgroundImage = "url('" + content.background + "')";

    clearTimeout(typingInterval);
    const dialogueText = document.getElementById("dialogue-text");
    dialogueText.innerHTML = "";
    typeText(dialogueText, content.text || "");

    const choices = document.getElementById("choices");
    choices.innerHTML = "";

    if (content.soundEffect) {
        const fx = new Audio(content.soundEffect);
        fx.volume = 0.3;
        fx.play();
    }

    // Si no hay opciones, es una ruta final, recarga la página
    if (!content.options || content.options.length === 0) {
        setTimeout(() => {
            location.reload();  // Recarga la página después de mostrar la escena final
        }, 7000);  // Espera 1 segundo antes de recargar para ver el último diálogo
        return; // Evita que se ejecuten más acciones después de la recarga
    }

    (content.options || []).forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt.text;
        btn.onclick = () => showScene(opt.next);
        choices.appendChild(btn);
    });

    disableChoices();
}

window.addEventListener("DOMContentLoaded", () => {
    typingIndicator = document.getElementById("typing-indicator");
    const startBtn = document.getElementById("start-btn");
    const overlay = document.getElementById("overlay");
    const gameContainer = document.getElementById("game-container");
    const audio = document.getElementById("bg-music");

    startBtn.addEventListener("click", () => {
        overlay.style.display = "none";
        gameContainer.style.display = "block";

        audio.volume = 0.3;
        audio.muted = false;
        audio.play().then(() => {
            console.log("Audio activado.");
        }).catch(error => {
            console.warn("No se pudo reproducir el audio:", error);
        });

        showScene("Start");
    });

    const dialogueBox = document.getElementById("dialogue-text");
    dialogueBox.addEventListener("click", () => {
        if (isTyping) {
            clearTimeout(typingInterval);
            dialogueBox.innerHTML = currentText;
            typingIndicator.classList.remove("visible");
            isTyping = false;
            enableChoices(); 
        }
    });
});
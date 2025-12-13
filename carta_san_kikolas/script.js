let pelea = false;
let reputacion = 0;
let typingInterval;
let isTyping = false;
let typingIndicator;
let currentText = "";
let finalAlcanzado = false;

const scenes = {
    // Escena inicial
    Start: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/v7m6LAH.png",
        soundEffect: "",
        text: `Braise comenzó a escribir sobre el papel, con una pluma llena de tinta, listo para compartir lo que pensaba...<br>Todo de repente se hizo oscuro, y algo borroso, como si la noche llamara a alguien.<br>`,
        options: [
            { text: "Viajar por los recuerdos", next: "InicioSueño" },
        ]
    },

    InicioSueño: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/mku77gQ.png",
        soundEffect: "",
        text: `El eco de voces secas y tensas resonaba detrás de la puerta entreabierta. A Braise siempre le dijeron que no escuchara… así que, como todo niño curioso, escuchó.`,
        options: [
            { text: "Seguir escuchando", next: "PegarOrejas" }
        ]
    },

    PegarOrejas: {
        character: "Narrador",
        image: "https://i.imgur.com/jzKMPO6.png",
        background: "https://i.imgur.com/mku77gQ.png",
        soundEffect: "",
        text: `El niño pegó lo más que pudo su oreja en una de las puertas entreabiertas, y cerró los ojos.`,
        options: [
            { text: "Concentrarse...", next: "Concentrarse" },
            { text: "Tratar de irse", next: "TratarIrse" },
        ]
    },

    Concentrarse: {
        character: "Narrador",
        image: "https://i.imgur.com/jzKMPO6.png",
        background: "https://i.imgur.com/mku77gQ.png",
        soundEffect: "",
        text: `Unas voces muy reconocibles sonaron, era su familia discutiendo...`,
        options: [
            { text: "Escuchar conversación", next: "Conversacion" }
        ]
    },

    TratarIrse: {
        character: "Narrador",
        image: "https://i.imgur.com/jzKMPO6.png",
        background: "https://i.imgur.com/mku77gQ.png",
        soundEffect: "",
        text: `La curiosidad de Braise era muy grande, tal vez irse no era la mejor opción. Quería saber qué hablaba su familia.`,
        options: [
            { text: "Escuchar conversación", next: "Conversacion" }
        ]
    },

    Conversacion: {
        character: "???",
        image: "https://i.imgur.com/RgHMoa4.png",
        background: "https://i.imgur.com/VnFxtyG.png",
        soundEffect: "",
        text: `No sirve. Habíamos apostado por él, pero no… no será como los demás.`,
        options: [
            { text: "...", next: "ContiuarMadre" }
        ]
    },

    ContiuarMadre: {
        character: "???",
        image: "https://i.imgur.com/nKLDcFK.png",
        background: "https://i.imgur.com/VnFxtyG.png",
        soundEffect: "",
        text: `Un desperdicio… y aún así debemos mantener las apariencias.`,
        options: [
            { text: "...", next: "ContiuarNarrador" }
        ]
    },


    ContiuarNarrador: {
        character: "Narrador",
        image: "https://i.imgur.com/XdO9WNx.png",
        background: "https://i.imgur.com/mku77gQ.png",
        soundEffect: "cry.mp3",
        text: `Una voz masculina y femenina respectivamente habitaron la sala. Braise apretó los puños. Nunca entendía de qué hablaban, pero cada palabra se clavaba como una espina.<br><br>De pronto, un susurro cálido detrás de él apareció...`,
        options: [
            { text: "Darse la vuelta", next: "PresentacionBettie" }
        ]
    },

    PresentacionBettie: {
        character: "???",
        image: "https://i.imgur.com/xUio6Y2.png",
        background: "https://i.imgur.com/M4Cnkte.png",
        soundEffect: "ohayogirl.mp3",
        text: `Hola Braise ¿otra vez espiando donde no debes?`,
        options: [
            { text: "Hablar con ella", next: "HablarBettie" }
        ]
    },

    HablarBettie: {
        character: "Narrador",
        image: "https://i.imgur.com/xUio6Y2.png",
        background: "https://i.imgur.com/M4Cnkte.png",
        soundEffect: "",
        text: `Era Bettie, tenía quince años, pero a los ojos de Braise parecía una adulta. Su única amiga de verdad en la mansión.<br><br>¿Qué le responderá Braise?`,
        options: [
            { text: "Solo quería saber si hablaban de mí.", next: "ResponderBettyPrimero1" },
            { text: "No estaba espiando… solo escuché sin querer.", next: "ResponderBettyPrimero2" },
            { text: "No importa. Estoy acostumbrado.", next: "ResponderBettyPrimero3" }
        ]
    },
    
    ResponderBettyPrimero1: {
        character: "Bettie",
        image: "https://i.imgur.com/MDKltqC.png",
        background: "https://i.imgur.com/M4Cnkte.png",
        soundEffect: "",
        text: `*Bettie suspira y le revuelve el cabello*<br><br>Hablan de muchas cosas que no deberían… pero tú no tienes la culpa de nada, Braise.`,
        options: [
            { text: "Acercarse", next: "Unidos" }
        ]
    },

    ResponderBettyPrimero2: {
        character: "Bettie",
        image: "https://i.imgur.com/MDKltqC.png",
        background: "https://i.imgur.com/M4Cnkte.png",
        soundEffect: "",
        text: `*Bettie sonríe con ternura*<br><br>Ajá, claro… y yo no tengo un collar en mi cuello. Ven, que se nota cuando mientes`,
        options: [
            { text: "Acercarse", next: "Unidos" }
        ]
    },

    ResponderBettyPrimero3: {
        character: "Bettie",
        image: "https://i.imgur.com/X8jn7IR.png",
        background: "https://i.imgur.com/M4Cnkte.png",
        soundEffect: "",
        text: `*Bettie frunce el ceño.*<br><br>No tienes por qué acostumbrarte a lo que duele, ¿me oyes?`,
        options: [
            { text: "Acercarse", next: "Unidos" }
        ]
    },

    Unidos: {
        character: "Narrador",
        image: "https://i.imgur.com/PkSzvaS.png",
        background: "https://i.imgur.com/M4Cnkte.png",
        soundEffect: "",
        text: `Bettie lo toma de la mano y lo aleja de la puerta, es mejor no escuchar cosas innecesarias. Trata de hacerlo reir en ese momento para que deje de estar triste.<br><br>Con el pasar de la noche...`,
        options: [
            { text: "Ir al balcón", next: "TrasfondoBettie" }
        ]
    },

    TrasfondoBettie: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/mVY9aod.png",
        soundEffect: "",
        text: `Esa noche, Bettie lo había llevado hasta el balcón más alto de la mansión. Desde allí se veían los faroles a lo lejos, como pequeñas estrellas de colores.`,
        options: [
            { text: "Trasfondo de Bettie", next: "HistoriaBettie" }
        ]
    },

    HistoriaBettie: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/K5alOpN.png",
        soundEffect: "",
        text: `Finalmente, luego de ver las estrellas, Bettie le cuenta a Braise cómo llegó a la mansión después de tantos años...<br><br>Llegó aquí cuando era pequeña, vivía en los manglares del Archipiélago Sabaody, donde los circos brillaban entre la multitud. Allí trabajaba antes de que la familia de Braise... <strong>la tomara</strong>.`,
        options: [
            { text: "Escuchar a Bettie", next: "PreguntaBettie" }
        ]
    },

    PreguntaBettie: {
        character: "Bettie",
        image: "",
        background: "https://i.imgur.com/K5alOpN.png",
        soundEffect: "",
        text: `Cuando seas grande… ¿sabes qué quiero? Volver a ese sitio.`,
        options: [
            { text: "Seguir escuchando", next: "PreguntaBettie2" }
        ]
    },

    PreguntaBettie2: {
        character: "Bettie",
        image: "",
        background: "https://i.imgur.com/K5alOpN.png",
        soundEffect: "",
        text: `El circo era ruidoso, olía a azúcar y aceite… pero era libre`,
        options: [
            { text: "Continuar", next: "PreguntaBettie3" }
        ]
    },

    PreguntaBettie3: {
        character: "Bettie",
        image: "",
        background: "https://i.imgur.com/K5alOpN.png",
        soundEffect: "",
        text: `Prométeme que cuando puedas, vendrás a buscarme allá.`,
        options: [
            { text: "Responder a la promesa", next: "PromesaBraise" }
        ]
    },

    PromesaBraise: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/K5alOpN.png",
        soundEffect: "",
        text: `¿Qué promete Braise?`,
        options: [
            { text: "Prometo encontrarte. No importa cuánto tarde.", next: "Encontrarla" },
            { text: "¿Y si voy contigo ahora…?", next: "IrAhora" },
            { text: "¿Y si no puedo?", next: "Indecision" }
        ]
    },

    // Bettie y sus respuestas
    Encontrarla: {
        character: "Narrador",
        image: "https://i.imgur.com/4DKyvod.png",
        background: "https://i.imgur.com/mVY9aod.png",
        soundEffect: "",
        text: `*Bettie sonríe, orgullosa*<br><br>Así se habla, chico valiente.`,
        options: [
            { text: "Continuar", next: "ContinuarBettieFinal" }
        ]
    },

    IrAhora: {
        character: "Bettie",
        image: "https://i.imgur.com/3u0o75X.png",
        background: "https://i.imgur.com/mVY9aod.png",
        soundEffect: "",
        text: `*Ella ríe bajito*<br><br>Si fuera tan fácil, ya estaríamos lejos.`,
        options: [
            { text: "Continuar", next: "ContinuarBettieFinal" }
        ]
    },

    Indecision: {
        character: "Bettie",
        image: "https://i.imgur.com/RYh31ZG.png",
        background: "https://i.imgur.com/mVY9aod.png",
        soundEffect: "",
        text: `*Bettie lo mira firme*<br><br>Podrás. Tienes algo que ellos jamás tendrán: corazón.`,
        options: [
            { text: "Continuar", next: "ContinuarBettieFinal" }
        ]
    },

    ContinuarBettieFinal: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/K5alOpN.png",
        soundEffect: "",
        text: `Las luces del circo brillaban como un sueño posible.<br><br>Aunque Braise no lo sabía, sería la última vez que lo vería así.`,
        options: [
            { text: "Irse a dormir...", next: "Madrugada" }
        ]
    },

    Madrugada: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/adhtBsu.png",
        soundEffect: "",
        text: `Ambos fueron a dormir a sus respectivos cuartos... pero...<br><br>El caos estalló durante la madrugada. Su familia preparaba un viaje. No decía a dónde...`,
        options: [
            { text: "Levantarse", next: "Levantarse" }
        ]
    },

    Levantarse: {
        character: "Narrador",
        image: "https://i.imgur.com/SU7BPKQ.png",
        background: "https://i.imgur.com/adhtBsu.png",
        soundEffect: "",
        text: `Braise se levantó, una vez más escuchando tras las paredes, él escuchó suficiente:<br><br><strong>"armamento", "prueba", "contingencia", "sacrificio".</strong>`,
        options: [
            { text: "Continuar", next: "BraiseTemblando" }
        ]
    },

    BraiseTemblando: {
        character: "Narrador",
        image: "https://i.imgur.com/nXEf855.png",
        background: "https://i.imgur.com/imHdz5J.png",
        soundEffect: "cry.mp3",
        text: `Bettie lo encontró temblando junto a la escalera.`,
        options: [
            { text: "Escuchar a Bettie", next: "OfrecerAyuda" }
        ]
    },

    // Ofreces ayuda
    OfrecerAyuda: {
        character: "Bettie",
        image: "https://i.imgur.com/SvKDRKl.png",
        background: "https://i.imgur.com/imHdz5J.png",
        soundEffect: "",
        text: `Es ahora o nunca, Braise. Podemos irnos por el muelle viejo. Te llevaré hasta un barco pequeño. De ahí, directo al manglar.`,
        options: [
            { text: "Avanzar", next: "Avanzar" }
        ]
    },

    Avanzar: {
        character: "Narrador",
        image: "https://i.imgur.com/GTO4rT9.png",
        background: "https://i.imgur.com/imHdz5J.png",
        soundEffect: "",
        text: `Ella tomó su mano. Él apretó la de ella. <br><br>¿Qué siente Braise al correr?`,
        options: [
            { text: "Esperanza", next: "Esperanza" },
            { text: "Miedo", next: "Miedo" },
            { text: "Culpa", next: "Culpa" }
        ]
    },

    Esperanza: {
        character: "Narrador",
        image: "https://i.imgur.com/GTO4rT9.png",
        background: "https://i.imgur.com/imHdz5J.png",
        soundEffect: "",
        text: `Su respiración se acompasa con la de Bettie. Por un instante, cree que todo es posible`,
        options: [
            { text: "Ir con Bettie", next: "IrBettie" }
        ]
    },

    Miedo: {
        character: "Narrador",
        image: "https://i.imgur.com/GTO4rT9.png",
        background: "https://i.imgur.com/imHdz5J.png",
        soundEffect: "",
        text: `El corazón le golpea el pecho. Pero la mano de Bettie lo mantiene en pie.`,
        options: [
            { text: "Ir con Bettie", next: "IrBettie" }
        ]
    },

    Culpa: {
        character: "Narrador",
        image: "https://i.imgur.com/GTO4rT9.png",
        background: "https://i.imgur.com/imHdz5J.png",
        soundEffect: "",
        text: `Le pesa. Escapar significa romper para siempre ese extraño "hogar".`,
        options: [
            { text: "Ir con Bettie", next: "IrBettie" }
        ]
    },

    IrBettie: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/cnariU7.png",
        soundEffect: "",
        text: `Llegaron al muelle. Bettie empujó a Braise hacia un pequeño navío de madera, anclado`,
        options: [
            { text: "Avanzar por el barco", next: "Bote" }
        ]
    },

    Bote: {
        character: "Bettie",
        image: "https://i.imgur.com/Om6VU3L.png",
        background: "https://i.imgur.com/AtUVCPK.png",
        soundEffect: "",
        text: `Tú primero. ¡Rápido! Ya pronto acabará esto.`,
        options: [
            { text: "Remar", next: "Remar" }
        ]
    },

    Remar: {
        character: "Narrador",
        image: "https://i.imgur.com/slWhO5a.png",
        background: "https://i.imgur.com/cnariU7.png",
        soundEffect: "",
        text: `<strong>Pero un grito los cortó como un cuchillo.</strong>`,
        options: [
            { text: "Voltearse", next: "Voltearse" }
        ]
    },

    Voltearse: {
        character: "???",
        image: "https://i.imgur.com/yVbi4nZ.png",
        background: "https://i.imgur.com/AtUVCPK.png",
        soundEffect: "",
        text: `¡Tú! Una simple esclava... ¿Qué crees que haces con el hijo de los jefes?`,
        options: [
            { text: "Bettie reacciona", next: "ReaccionBettie" }
        ]
    },

    ReaccionBettie: {
        character: "Narrador",
        image: "https://i.imgur.com/zf6UDRa.png",
        background: "https://i.imgur.com/cnariU7.png",
        soundEffect: "",
        text: `Bettie empuja el navío con fuerza, cuando la ancla la alzó el niño. Braise sigue tratando de remar. Ella intenta subir pero...<br><br>Un disparo sonó al aire y algunos hombres la sujetaron...`,
        options: [
            { text: "Tratar de ayudar a Bettie", next: "AyudaBettie" }
        ]
    },

    AyudaBettie: {
        character: "Bettie",
        image: "https://i.imgur.com/EbFsBc9.png",
        background: "https://i.imgur.com/AtUVCPK.png",
        soundEffect: "",
        text: `¡Braise! ¡Sigue! ¡No te detengas! ¡Encuéntrame en Sabaody... lo prometiste!`,
        options: [
            { text: "Seguir remando", next: "SeguirRemando" }
        ]
    },

    SeguirRemando: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/DZJ0No8.png",
        soundEffect: "",
        text: `El bote sigue su rumbo, viajando Braise sin Bettie.<br>La imagen de ella alejándose entre gritos se graba como una herida que nunca cerró para Braise.<br><br>Él comienza a llorar. No recuerda cuándo dejó de ver la mansión.`,
        options: [
            { text: "Tratar de ser fuerte", next: "TratarFuerte" }
        ]
    },

    TratarFuerte: {
        character: "Narrador",
        image: "https://i.imgur.com/nXEf855.png",
        background: "https://i.imgur.com/xnszj11.png",
        soundEffect: "cry.mp3",
        text: `Braise se limpia las lágrimas. Solo recuerda el peso del mar...<br><br><br><strong>y la promesa</strong>.`,
        options: [
            { text: "Continuar", next: "BraiseLevantado" }
        ]
    },
    
    BraiseLevantado: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/JG2wbpx.png",
        soundEffect: "",
        text: `El mar desaparece. La noche también.<br>Braise abre los ojos abruptamente, se había quedado dormido escribiendo la carta.<br>Un olor delicioso llena la habitación.`,
        options: [    
            { text: "Mirar hacia atrás guiado por el olor", next: "ApareceGoa" }   
        ]
    },

    ApareceGoa: {
        character: "Narrador",
        image: "https://i.imgur.com/ve4OAxz.png",
        background: "https://i.imgur.com/CVnw5a8.png",
        soundEffect: "",
        text: `<strong>Goa</strong>, con una sonrisa tranquilizadora, se acerca y le da un golpecito en el hombro.`,
        options: [
            { text: "Hablar con Goa", next: "GoaDialogo" }
        ]
    },

    GoaDialogo: {
        character: "Goa D. Seedrache",
        image: "https://i.imgur.com/ve4OAxz.png",
        background: "https://i.imgur.com/CVnw5a8.png",
        soundEffect: "",
        text: `*Suelta una gran carcajada*<br><br>¿En qué momento te dormiste Braise? ¡Estábamos esperándote para comer! >:D `,
        options: [
            { text: "Escuchar a Lumina entrar", next: "LuminaDialogo" }
        ]
    },

    LuminaDialogo: {
        character: "Lumina Ardens",
        image: "https://i.imgur.com/EUS2HF4.png",
        background: "https://i.imgur.com/CVnw5a8.png",
        soundEffect: "",
        text: `*Sonríe y no evita taparse la boca cuando ve a Braise quedándose dormido*<br><br>Me intriga verte escribiendo una carta ¿Es a una enamorada?<br><br>Luego la terminas, haces falta en la mesa, andando.`,
        options: [
            { text: "Levantarse", next: "LevantarseSueño" }
        ]
    },

    LevantarseSueño: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/oRcF1kb.png",
        soundEffect: "",
        text: `Braise respira profundo.<br>El recuerdo aún arde… pero el presente es cálido.<br>Y tal vez, en algún lugar de Sabaody...una promesa todavía espera.<br><br>¿Debería escribir esto en la carta?`,
        options: [
            { text: "Finalizar", next: "Finalizar" }
        ]
    },

    Finalizar: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/bZ7G5J9.png",
        soundEffect: "",
        text: `Has llegado al final de la historia. A veces, los recuerdos pueden doler, pero nos forjaron a ser la persona que somos hoy en día. Lo importante es que aún podemos cambiar las cosas. <br><br>Felices fiestas y gracias por llegar hasta aquí ;)`,
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

function iniciarCuentaRegresiva() {
    const countdownDiv = document.getElementById("countdown");
    const countdownTimer = document.getElementById("countdown-timer");
    countdownDiv.style.display = "block";

    let timeLeft = 30;
    countdownTimer.textContent = timeLeft;

    const countdownInterval = setInterval(() => {
        timeLeft--;
        countdownTimer.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            location.reload();
        }
    }, 1000);
}

function typeText(element, text, index = 0) {
    isTyping = true;
    currentText = text;
    typingIndicator.classList.add("visible");

    disableChoices();

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
        enableChoices();

        // Solo iniciar cuenta regresiva si estamos en un final
        const currentScene = Object.values(scenes).find(s => s.text === currentText);
        if (sessionStorage.getItem("finalAlcanzado") && currentScene && (!currentScene.options || currentScene.options.length === 0)) {
            iniciarCuentaRegresiva();
        }
    }
}

function showScene(key) {
    const finalesGuardados = JSON.parse(localStorage.getItem("finalesAlcanzados")) || [];

    // VERIFICAR SI SE DESBLOQUEA FINAL OCULTO
    if (key === "DerrotarPirataPeleaConGuantesImprovisto" &&
        !finalesGuardados.includes("FinHistoriaPeleaConGuantesImprovisto") &&
        finalesGuardados.includes("FinalNeutral1") &&
        finalesGuardados.includes("FinalNeutral3") &&
        finalesGuardados.includes("RegresarteNeutralSinPreocupar") &&
        finalesGuardados.includes("SalirTabernaForzarPuerta") &&
        finalesGuardados.includes("RegresarteNeutral") &&
        finalesGuardados.includes("RegresarteNeutralPirataExplicacion") &&
        finalesGuardados.includes("HuirPiratasSinGuantesPelea") &&
        !finalesGuardados.includes("FinalMalo1") &&
        !finalesGuardados.includes("FinalMalo2") &&
        !finalesGuardados.includes("FinHistoriaSinGuantesImprovisto") &&
        !finalesGuardados.includes("FinalOcultoDesbloqueado")) {
        key = "FinalOcultoDesbloqueado"; // llegas al final oculto
    }

    const content = scenes[key];
    if (!content) return;

    document.getElementById("character-name").textContent = content.character || "";
    document.getElementById("character-image").src = content.image || "";
    document.getElementById("character-box").style.backgroundImage = "url('" + content.background + "')";

    clearTimeout(typingInterval);
    const dialogueText = document.getElementById("dialogue-text");
    dialogueText.innerHTML = "";

    const esFinal = !content.options || content.options.length === 0;
    typeText(dialogueText, content.text || "", 0, esFinal);

    const choices = document.getElementById("choices");
    choices.innerHTML = "";

    if (content.soundEffect) {
        const fx = new Audio(content.soundEffect);
        fx.volume = 0.3;
        fx.play();
    }

    // if (esFinal) {
    //     sessionStorage.setItem("finalAlcanzado", "true");

    //     const finalesGuardados = JSON.parse(localStorage.getItem("finalesAlcanzados")) || [];
    //     if (!finalesGuardados.includes(key)) {
    //         finalesGuardados.push(key);
    //         localStorage.setItem("finalesAlcanzados", JSON.stringify(finalesGuardados));
    //     }

    //     let nombreJugador = sessionStorage.getItem("nombreJugador");
    //     if (!nombreJugador) {
    //         nombreJugador = prompt("Has llegado al final de la historia. A veces, los recuerdos pueden doler, pero nos forjaron a ser la persona que somos hoy en día. Felices fiestas y gracias por llegar hasta aquí ;)");
    //         if (nombreJugador) {
    //             sessionStorage.setItem("nombreJugador", nombreJugador);
    //         } else {
    //             nombreJugador = "Jugador desconocido";
    //         }
    //     }

    //     const finalMsg = document.createElement("div");
    //     finalMsg.style.marginTop = "20px";
    //     finalMsg.style.fontWeight = "bold";
    //     finalMsg.style.fontSize = "1.2em";
    //     finalMsg.style.textAlign = "center";
    //     document.getElementById("dialogue-box").appendChild(finalMsg);

    //     return;
    // }

    // Saltar la presentación si ya se alcanzó un final
    if (sessionStorage.getItem("finalAlcanzado")) {
        const sceneEach = content.optionsSkip ? content.optionsSkip : content.options;
        (sceneEach ? sceneEach : []).forEach(opt => {
            const btn = document.createElement("button");
            btn.textContent = opt.text;
            btn.onclick = () => showScene(opt.next);
            choices.appendChild(btn);
        });
    }else{
        (content.options || []).forEach(opt => {
            const btn = document.createElement("button");
            btn.textContent = opt.text;
            btn.onclick = () => showScene(opt.next);
            choices.appendChild(btn);
        });
    }

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
    
            // Solo activar cuenta regresiva si esta escena no tiene opciones
            const currentScene = Object.values(scenes).find(s => s.text === currentText);
            if (currentScene && (!currentScene.options || currentScene.options.length === 0)) {
                iniciarCuentaRegresiva();
            }
        }
    });
});

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
        background: "https://i.imgur.com/CB90JK8.png",
        characterImage: "narradorchara.png",
        soundEffect: "",
        text: `Peko observó la jungla de Little Garden desde lo alto de una roca cubierta de musgo. Los dinosaurios rugían, el suelo temblaba...<br>El Ápex dominaba todo, impasible a lo que podría ocurrirle. Pero hoy... Peko intentaría cambiar eso, quería algo más que sobrevivir.`,
        options: [
            { text: "Continuar", next: "ContinuarInicio" },
        ]
    },

    ContinuarInicio: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/z28bDm7.png",
        characterImage: "narradorchara.png",
        soundEffect: "",
        text: `El Ápex era enorme. Escamas gruesas. Colmillos como lanzas. Y es posible que haya consumido una fruta del diablo. Eso significaba una cosa: Si caía al mar, perdería. Y Peko tenía que explotar cualquier debilidad. <br><br> El plan era simple en concepto, complejo en ejecución: <br>Investigar cada hábitat.<br>Provocar migraciones masivas.<br>Empujar todo hacia el volcán.<br>Forzar al Ápex a desplazarse.<br>Guiarlo hacia el circuito de trampas.`,
        options: [
            { text: "El camino de Peko", next: "CaminosPeko" }
        ]
    },

    CaminosPeko: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/z28bDm7.png",
        characterImage: "narradorchara.png",
        soundEffect: "",
        text: `La jungla sería su arma, puesto que bien sabía el pingüino que un Alfa no solo se decide por su fuerza, sino también por su ingenio y pericia del entorno.<br><br>¿Primer movimiento de Peko?`,
        options: [
            { text: "Investigar hábitats", next: "Investigar" },
            { text: "Subir a una roca y pensar dramáticamente mirando el horizonte", next: "Pensar" },
        ]
    },

    Pensar: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/KykjwVM.png",
        characterImage: "narradorchara.png",
        soundEffect: "",
        text: `Peko subió a una roca elevada y miró el horizonte. El viento agitó sus plumas. Intentó adoptar pose de protagonista mientras sentía la genialidad de ser un pingüino.<br><br>Se sintió poderoso. Pero nada avanzó... el Ápex seguía reinando...`,
        options: [
            { text: "Caer en cuenta de la situación", next: "IrInvestigar" }
        ]
    },

    IrInvestigar: {
        character: "Peko",
        image: "",
        background: "https://i.imgur.com/9dvEHaD.png",
        characterImage: "pekochara.png",
        soundEffect: "",
        text: `¡Peko Peko!`,
        options: [
            { text: "Bajar y empezar a trabajar de verdad", next: "Investigar" }
        ]
    },

    Investigar: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/MwCMBse.png",
        characterImage: "narradorchara.png",
        soundEffect: "",
        text: `Little Garden estaba dividida en ecosistemas violentos. Peko anotó mentalmente: <br>Zona Portuaria.<br>Cráneo Oeste.<br>Cráneo Este.<br>Si provocaba inestabilidad en todos... las criaturas migrarían hacia territorio alto. ¡Hacia el volcán! ¿Dónde empezará Peko?`,
        options: [
            { text: "Zona Portuaria", next: "Costa" },
            { text: "Cráneo Oeste", next: "Oeste" },
            { text: "Cráneo Este", next: "Este" }
        ]
    },

    Este: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/9SgL3nw.png",
        characterImage: "narradorchara.png",
        soundEffect: "",
        text: `El Cráneo Este estaba dominado por carnívoros medianos y varios pteordactilos. Peko se intenta enfrentar a ellos para empujarlos hacia el hábitat del Ápex y los depredadores comenzaron a enfrentarse. <br>Peko se mueve entre ellos gracias a su pequeño tamaño y cortes provocando que se golpeen entre ellos. Algún que otro pterodactilo se salva de los golpes y el resto corren hacia el volcán, el tablero logra comprimirse...`,
        options: [
            { text: "Seguir presionando la zona", next: "Sobreestimular" },
            { text: "Marcharse antes de llamar demasiado la atención", next: "Investigar" }
        ]
    },

    Sobreestimular: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/8QCZn5i.png",
        characterImage: "narradorchara.png",
        soundEffect: "",
        text: `Mal hecho Peko... Tu avaricia ha roto el saco y ahora te han roto a ti la cabeza. <br>Peko pierde un día sanando sus heridas en su Campamento Base. Afortunadamente Peko sabe bien lo que es curarse de heridas por las diversas palizas. <br>¡Peko vuelve a la acción, pero sé prudente!`,
        options: [
            { text: "Fingir dignidad", next: "Dignidad" }
        ]
    },

    Dignidad: {
        character: "Peko",
        image: "",
        background: "https://i.imgur.com/8QCZn5i.png",
        characterImage: "pekochara.png",
        soundEffect: "",
        text: `¡Peko Peko, Peko Peko! <br><br>¿Peko?`,
        options: [
            { text: "Retirarse sigilosamente", next: "Investigar" }
        ]
    },

    Oeste: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/ERclldx.png",
        characterImage: "narradorchara.png",
        soundEffect: "",
        text: `El aire era pesado. Peko mezcló especias con polen irritante y lo liberó en el agua, los herbívoros comenzaron a estornudar... <br>Pisotearon el barro.  Entraron en pánico. Se desplazaron buscando aire limpio. Dirección: terreno elevado. Primer efecto conseguido.<br>Mientras espera...`,
        options: [
            { text: "Revisar si el polen funciona mejor con otra mezcla", next: "Experimentar" },
            { text: "Volver a investigar otro hábitat", next: "Investigar" }
        ]
    },

    Experimentar: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/T5HWTXU.png",
        characterImage: "narradorchara.png",
        soundEffect: "",
        text: `Peko añadió más especias, demasiadas... El viento cambió repentinamente. Ahora el que estornuda es él. Pierde una hora limpiándose el pico y tratando de no mearse encima. Nada relevante cambia, aunque ahora apesta... `,
        options: [
            { text: "Estornudar", next: "Estornudar" }
        ]
    },

    Estornudar: {
        character: "Peko",
        image: "",
        background: "https://i.imgur.com/T5HWTXU.png",
        characterImage: "pekochara.png",
        soundEffect: "",
        text: `Peko Peko :(`,
        options: [
            { text: "Volver al plan principal", next: "Investigar" }
        ]
    },

    Costa: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/jIeFdz1.png",
        characterImage: "narradorchara.png",
        soundEffect: "",
        text: `En la Costa los depredadores más ágiles se arremolinaban... ¡Nada que preocuparse con un par de aletas! <br>Peko tensó ramas con tela resistente, calculó ángulos, la dirección de escape y puntos de impacto. Cuando pasaron... Las ramas golpearon más fuerte que un golpe en la cabeza de Impera. Confusión y azotes fueron la antesala de los movimientos de los dinosaurios. <br>Todos directitos hacia el Volcán de la Hora.`,
        options: [
            { text: "Revisar la tensión de las ramas nuevamente", next: "RevisarRamas" },
            { text: "Continuar hacia la Costa Este", next: "CostaEste" }
        ]
    },

    RevisarRamas: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/o5fbne8.png",
        characterImage: "narradorchara.png",
        soundEffect: "",
        text: `Peko ajustó las ramas. Se detuvo un segundo... Intentó chuparse el codo. <br>Falló. Quizá no tenga esa flexibilidad... pero tiene estrategia y la gran belleza de un pingüino Alfa.`,
        options: [
            { text: "Seguir con la misión", next: "Costa" }
        ]
    },

    CostaEste: {
        character: "Narrador",
        image: "",
        background: "",
        characterImage: "narradorchara.png",
        soundEffect: "",
        text: `La Costa Este parecía calmada. Peko aprovechó para revisar bien sus recursos. El aire parecía tensarse y la hora se acercaba... <br>Todo converge en el Saurus-Saurio. El plan está listo para su fase final.`,
        options: [
            { text: "Preparar el circuito de trampas", next: "Circuito" },
            { text: "Descansar un poco antes del gran movimiento", next: "Descanso" },
        ]
    },

    Descanso: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/7qAKn2p.png",
        characterImage: "narradorchara.png",
        soundEffect: "",
        text: `Peko encontró restos de un barco antiguo. Dentro había un pequeño cofre. Revistas húmedas.. Peko las observó, asiente lentamente... <br>Recupera la motivación inexplicablemente... El Ápex sigue siendo el objetivo.`,
        options: [
            { text: "Cerrar el cofre y seguir", next: "Circuito" }
        ]
    },

    Circuito: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/KsaD6x4.png",
        characterImage: "narradorchara.png",
        soundEffect: "",
        text: `Todo debía ocurrir en la secuencia que Peko había diseñado quebrándose los sesos. El recorrido era tal que... <br>Bombas de especias y polen para desorientar... Habían puas ocultas en puntos de presión, ramas tensadas para forzar dirección, un desvío cerrado hacia una pendiente preparada, un tobogán de barro perfectamente alisado...<br>Finalmente... el acantilado, con el mar... ¡Y SER EL REY DE LA JUNGLA!`,
        options: [
            { text: "Escuchar a Peko", next: "PlanesPeko" }
        ]
    },

    PlanesPeko: {
        character: "Peko",
        image: "",
        background: "https://i.imgur.com/KsaD6x4.png",
        characterImage: "pekochara.png",
        soundEffect: "",
        text: `Peko Peko Peko Peko Peko Peko Peko Peko Peko Peko Peko Peko<br>Peko Peko Peko`,
        options: [
            { text: "¿Peko?", next: "TraducciónPeko" }
        ]
    },

    TraducciónPeko: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/KsaD6x4.png",
        characterImage: "narradorchara.png",
        soundEffect: "",
        text: `Peko pensó en otro plan por si acaso... Tener pólvora en cáscaras si intenta escapar. Peko aprendió bien que es mejor tener un as bajo la manga, o acabará apaleado por Okada como falle...<br>Todo está en la majestuosa mente de Peko, el pingüino capaz de resolver puzzles para niños de tres años.`,
        options: [
            { text: "Activar el caos en el volcán", next: "Climax" },
            { text: "Revisar una última vez el tobogán de barro", next: "RevisarFinal" }
        ]
    },

    RevisarFinal: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/LalFWms.png",
        characterImage: "narradorchara.png",
        soundEffect: "",
        text: `El barro está húmedo... perfectamente resbaladizo. Peko desliza una piedra... ¡funciona! Si el Ápex pisa aquí... no habrá fricción suficiente. <br>Es el último movimiento.`,
        options: [
            { text: "Es momento", next: "Climax" }
        ]
    },

    Climax: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/d80EYOf.png",
        characterImage: "narradorchara.png",
        soundEffect: "",
        text: `El Volcán de la Hora ruge. Desde la distancia, el territorio de Saurus-Saurio parece inquieto. Pero Peko no da nada por hecho... cada pieza estaba colocada... <br>Bombas de especias enterradas, puas ocultas en los puntos de presión, ramas tensadas listas para desviar trayectorias, el circuito delimitado, el tobogán de barro perfectamente alisado, las cáscaras con pólvora preparadas como último recurso... <br>(por favor Okada, no golpees más a Peko)`,
        options: [
            { text: "Continuar", next: "Final" }
        ]
    },

    Final: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/d80EYOf.png",
        characterImage: "narradorchara.png",
        soundEffect: "grab.mp3",
        text: `Nada se activa aún... nada ocurre sin que el Ápex lo provoque. Peko se posiciona fuera del radio inmediato, observa, calcula y respira lento... No sonríe ni revisa sus revistas para adultos.<br>El plan está completo. Ahora solo falta que el Rey actual mueva ficha. Peko está listo para el combate... ¡Y ser el futuro Rey de los Animales!`,
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
    document.getElementById("dialogue-character-image").style.backgroundImage = "" + "url('" + content.characterImage + "')";

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

    if (esFinal) {
        sessionStorage.setItem("finalAlcanzado", "true");

        // const finalesGuardados = JSON.parse(localStorage.getItem("finalesAlcanzados")) || [];
        // if (!finalesGuardados.includes(key)) {
        //     finalesGuardados.push(key);
        //     localStorage.setItem("finalesAlcanzados", JSON.stringify(finalesGuardados));
        // }

        // let nombreJugador = sessionStorage.getItem("nombreJugador");
        // if (!nombreJugador) {
        //     nombreJugador = prompt("Has llegado al final de la historia. A veces, los recuerdos pueden doler, pero nos forjaron a ser la persona que somos hoy en día. Felices fiestas y gracias por llegar hasta aquí ;)");
        //     if (nombreJugador) {
        //         sessionStorage.setItem("nombreJugador", nombreJugador);
        //     } else {
        //         nombreJugador = "Jugador desconocido";
        //     }
        // }

        // const finalMsg = document.createElement("div");
        // finalMsg.style.marginTop = "20px";
        // finalMsg.style.fontWeight = "bold";
        // finalMsg.style.fontSize = "1.2em";
        // finalMsg.style.textAlign = "center";
        // document.getElementById("dialogue-box").appendChild(finalMsg);

        return;
    }

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

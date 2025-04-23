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
        character: "Tabernero",
        image: "https://i.imgur.com/8LCUO8p.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `¡Bienvenido a la taberna de Whiskey Peak!<br>Estamos celebrando nuestra reinauguración con ayuda de Rakuen.<br><br>¡Te los voy a presentar para que los conozcas!`,
        options: [
            { text: "Conocer a los integrantes", next: "PresentacionRakuen" },
        ],
        optionsSkip: [
            { text: "Conocer a los integrantes", next: "PresentacionRakuen" },
            { text: "Saltarse la introducción", next: "InicioTabernero" },
        ]
    },

    PresentacionRakuen: {
        character: "Tabernero",
        image: "https://i.imgur.com/VtEmjZH.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `El es Aska, el capitán de la tripulación. Su iniciativa motivó a los demás para que adecuaran el interior y la fachada de la taberna.`,
        options: [
            { text: "Hablar con Aska", next: "HablasAska" }
        ]
    },

    HablasAska: {
        character: "Aska",
        image: "https://i.imgur.com/VtEmjZH.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `Muchas gracias por venir a la inauguración. Whiskey Peak debe ser un mejor lugar para todos.`,
        options: [
            { text: "Conocer a la primer oficial", next: "PresentacionCamellia" }
        ]
    },

    PresentacionCamellia: {
        character: "Tabernero",
        image: "https://i.imgur.com/ax7feAg.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `Ella es Camellia, mano derecha del capitán. Su gran tamaño nos ayudó a reparar las instalaciones con más facilidad, sus arrugas denotan años de experiencia.`,
        options: [
            { text: "Hablar con Camellia", next: "HablasCamellia" }
        ]
    },

    HablasCamellia: {
        character: "Camellia",
        image: "https://i.imgur.com/ax7feAg.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `Hay mucho por hacer aquí, mientras tanto, espero encuentres un lugar cómodo por aquí.`,
        options: [
            { text: "Conocer al navegante", next: "PresentacionRelmin" }
        ]
    },

    PresentacionRelmin: {
        character: "Tabernero",
        image: "https://i.imgur.com/0xP3OJP.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `Este niño se llama Relmin, desde que ha venido aquí no le ha quitado los ojos de encima a las camareras...`,
        options: [
            { text: "Hablar con Relmin", next: "HablasRelmin" }
        ]
    },

    HablasRelmin: {
        character: "Relmin",
        image: "https://i.imgur.com/0xP3OJP.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "ohayo.mp3",
        text: `¡AAAAAAAAAAAAAAAAAAAAAAAAH! ¡Venir aquí ha sido lo mejor que me ha pasado! ♡u♡`,
        options: [
            { text: "Conocer al carpintero", next: "PresentacionBamby" }
        ]
    },

    PresentacionBamby: {
        character: "Tabernero",
        image: "https://i.imgur.com/qzhfxaq.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `Sin duda Bamby es alguien peculiar, tiene la energía hasta el tope. ¡Nunca se cansa! Nos ha ayudado a mantener la taberna en óptimas condiciones.`,
        options: [
            { text: "Hablar con Bamby", next: "HablasBamby" }
        ]
    },
    
    HablasBamby: {
        character: "Bamby",
        image: "https://i.imgur.com/qzhfxaq.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `¡HIP! ¡Ya están viniendo todos los invitados y las mesas… ¡las mesas no están listas, ¡HIP! ¡Ay, no, esto no está listo! ¿Y las decoraciones? ¡Las decoraciones tampoco! ¡Ay, ¿qué vamos a hacer?!`,
        options: [
            { text: "Conocer al cocinero", next: "PresentacionElend" }
        ]
    },

    PresentacionElend: {
        character: "Tabernero",
        image: "https://i.imgur.com/rVWfMle.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `Ese sujeto que ves ahí es Elend, el cocinero de Rakuen. No he cruzado muchas palabras con él, pero siempre está dispuesto a mantenernos con el estómago lleno.`,
        options: [
            { text: "Hablar con Elend", next: "HablasElend" }
        ]
    },

    HablasElend: {
        character: "Elend",
        image: "https://i.imgur.com/rVWfMle.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `Bueno, bueno… ¡Miren esto! Si alguien piensa que va a salir algo mal con estos aperitivos, les garantizo que no saben de lo que hablan. Todo va perfecto, ya lo verán… aunque con la presión, claro, algo puede salirse de control, pero nada que no pueda arreglarse con un poco de sal y pimienta. A los que vienen a esta taberna no les voy a dar solo comida, ¡les voy a dar una experiencia, maldita sea!`,
        options: [
            { text: "Conocer al técnico", next: "PresentacionRodney" }
        ]
    },

    PresentacionRodney: {
        character: "Tabernero",
        image: "https://i.imgur.com/MYBeeqw.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `Él es Rodney, el tecnológo de la tripulación. Aún nos ayuda adecuando las instalaciones eléctricas en el techo de la taberna.`,
        options: [
            { text: "Hablar con Rodney", next: "HablasRodney" }
        ]
    },

    HablasRodney: {
        character: "Rodney",
        image: "https://i.imgur.com/MYBeeqw.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `Sensor térmico descalibrado, bomba secundaria con retardo... claro, cómo no. ¿Y ahora qué? ¿El dispensador de jugo cree que es un lanzallamas? Bueno, eso es nuevo. Nota mental: jamás dejar a Bamby reprogramar nada. ¡Ya casi, Rodney, ya casi… solo no explotes nada antes del brindis!`,
        options: [
            { text: "Conocer a la rebelde", next: "PresentacionAsura" }
        ]
    },

    PresentacionAsura: {
        character: "Tabernero",
        image: "https://i.imgur.com/WLEcPtd.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `Ella... ella... Bueno, ella es Asura, nos han dicho que viene del mismo cielo, y es un poco feroz. Ha estado tomando de las astas a Bamby desde que llegaron.`,
        options: [
            { text: "Hablar con Asura", next: "HablasAsura" }
        ]
    },

    HablasAsura: {
        character: "Asura",
        image: "https://i.imgur.com/WLEcPtd.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `La madera cruje, los pasos se acercan… Ya están llegando. Que vean lo que construimos. Que sientan lo que es estar a salvo por una noche, sin cadenas ni miedo. Si alguien arruina esto, no me temblará la mano.`,
        options: [
            { text: "Terminar la presentación", next: "RakuenJunto" }
        ]
    },

    RakuenJunto: {
        character: "Rakuen",
        image: "https://i.imgur.com/qhlPj8y.png",
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
            { text: "Beber otro trago sin prestar atención a la taberna", next: "TomarSake2" },
            { text: "Beber y detallar la taberna", next: "GirarYObservar" }
        ]
    },

    // Ramas de tomar sake sin girarse
    TomarSake2: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/YPOtN1t.png",
        soundEffect: "",
        text: `Decides seguir bebiendo. El ambiente es festivo, pero algo turbio...`,
        options: [
            { text: "Beber otro trago más", next: "TomarSake3" },
            { text: "Salir de la taberna", next: "FinalNeutral1" }
        ]
    },

    TomarSake3: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/IndAGxZ.png",
        soundEffect: "",
        text: `Ya estás algo ebrio. El tabernero se acerca preocupado.`,
        options: [
            { text: "Beber otro trago", next: "FinalMalo1" }
        ]
    },

    FinalNeutral1: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/0WVQzdJ.png",
        soundEffect: "",
        text: `Sales tambaleante de la taberna. Tal vez mañana recuerdes algo de esto.<br><br><em>FINAL CONSEGUIDO: NEUTRAL (1)</em><br><br>La novela gráfica ha terminado, volverá a cargarse en unos segundos...`,
        options: [
        ]
    },

    FinalMalo1: {
        character: "Narrador",
        image: "https://i.imgur.com/CbpJSSL.png",
        background: "https://i.imgur.com/D3dNHu2.png",
        soundEffect: "lostGame.mp3",
        text: `En tu borrachera, empujas al tabernero sin querer. Los guardias te sacan a empujones.<br><br><em>FINAL CONSEGUIDO: MALO (1)</em><br><br>La novela gráfica ha terminado, volverá a cargarse en unos segundos...`,
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
            { text: "No ayudarle, quieres pasarla bien en la reinauguración", next: "NoAyudar" },
            { text: "Ayudarle con la taberna, la reinauguración puede esperar", next: "AyudarOrganizar" }
        ]
    },

    NoAyudar: {
        character: "Narrador",
        image: "https://i.imgur.com/LOqewoO.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `El tabernero suspira. Aun así, sigue limpiando solo. Lo notas muy tenso.`,
        options: [
            { text: "Preguntar qué le preocupa al tabernero", next: "HistoriaExtorsion" },
            { text: "Ignorar al tabernero y marcharte, te está poniendo de los nervios", next: "FinalNeutral3" }
        ]
    },

    FinalNeutral3: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/UOTSQAt.png",
        soundEffect: "",
        text: `Decides no involucrarte más, el tabernero tendrá que arreglárselas. Abandonas la taberna y no asistes a la reinauguración.<br><br><em>FINAL CONSEGUIDO: NEUTRAL (2)</em><br><br>La novela gráfica ha terminado, volverá a cargarse en unos segundos...`,
        options: [
        ]
    },

    AyudarOrganizar: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/YteeK6f.png",
        soundEffect: "clean.mp3",
        text: `Ayudas a limpiar y ordenar. El lugar empieza a lucir mejor.`,
        options: [
            { text: "Seguir organizando la taberna, la reinauguración puede esperar un momento", next: "OrganizarMas" },
            { text: "Terminar las labores, te duele la espalda y ya ha sido suficiente", next: "TerminarOrganizar" }
        ]
    },

    OrganizarMas: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/iaKlUvW.png",
        soundEffect: "",
        text: `Tienes en frente dos puertas, una lleva al baño y otra lleva a una bodega. ¿A cuál decides ir?`,
        options: [
            { text: "Entrar a la bodega, debe estar llena de cajas y basura", next: "InvestigarBodegaSinLlaves" },
            { text: "Prefieres volver a la sala principal, la inauguración ya va a comenzar", next: "TerminarOrganizar" },
            { text: "Entrar al baño, tiene pinta de estar sucio", next: "OrganizarMasOtraVez" }
        ]
    },

    OrganizarMasOtraVez: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/yRyNFxL.png",
        soundEffect: "",
        text: `El baño parece estar un poco sucio, dejaron la basura regada en el suelo y el tocador está pegajoso.`,
        options: [
            { text: "Limpiar el baño, pese a estar asqueroso", next: "LimpiarBaño" },
            { text: "Negarte a limpiarlo y salir a la taberna, podrías enfermar", next: "TerminarOrganizar" }
        ]
    },

    LimpiarBaño: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/R2Kx9Xx.png",
        soundEffect: "clean.mp3",
        text: `Mientras limpias el baño, en la basura, alguien dejó una llave, con la etiqueta "bodega". ¿Decides tomarla?`,
        options: [
            { text: "Tomar la llave de la basura, puede servir para algo", next: "TomarLlaveBodega" },
            { text: "No tomar la llave y salir del baño, puede estar infectada", next: "TerminarOrganizar" }
        ]
    },

    TomarLlaveBodega: {
        character: "Narrador",
        image: "https://i.imgur.com/83RKd0C.png",
        background: "https://i.imgur.com/yRyNFxL.png",
        soundEffect: "grab.mp3",
        text: `¡Has obtenido Llave Bodega [x1]!`,
        options: [
            { text: "Guardar la llave e ir a la bodega", next: "InvestigarBodegaConLlaves" },
            { text: "No tomar la llave y salir del baño, la reinauguración ya va a comenzar", next: "TerminarOrganizar" }
        ]
    },

    TerminarOrganizar: {
        character: "Narrador",
        image: "https://i.imgur.com/LOqewoO.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `Terminas de organizar. Pero el tabernero sigue preocupado.`,
        options: [
            { text: "Preguntar qué le preocupa al tabernero", next: "HistoriaExtorsion" },
            { text: "Dejar que se preocupe, las reinauguraciones suelen ser estresantes", next: "RegresarteNeutralSinPreocupar" }
        ]
    },
    
    RegresarteNeutralSinPreocupar: {
        character: "Narrador",
        image: "https://i.imgur.com/qhlPj8y.png",
        background: "https://i.imgur.com/73lIIcK.png",
        soundEffect: "",
        text: `Evitas al tabernero y te quedas en la inauguración hasta su finalización. <br><br><em>FINAL CONSEGUIDO: NEUTRAL (3)</em><br><br>La novela gráfica ha terminado, volverá a cargarse en unos segundos...`,
        options: [       
        ]
    },

    InvestigarBodegaConLlaves: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/peYZbBo.png",
        soundEffect: "doorlock.mp3",
        text: `Te acercas la puerta de la bodega, pero el pomo está atorado.`,
        options: [
            { text: "Intentar forzar la puerta, debe estar vieja", next: "ForzarPuerta" },
            { text: "Usar las llaves que encontraste, aunque esté sucia", next: "UsarLlaveBodega" }
        ]
    },

    UsarLlaveBodega: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/wyRhpGd.png",
        soundEffect: "",
        text: `¡Eureka! La puerta de la bodega se ha abierto.`,
        options: [
            { text: "Entrar a la bodega", next: "EncontrarGuantes" },
            { text: "No entrar y hablar con el tabernero", next: "TerminarOrganizar" }
        ]
    },

    EncontrarGuantes: {
        character: "Narrador",
        image: "https://i.imgur.com/MRdT26V.png",
        background: "https://i.imgur.com/6I14sev.png",
        soundEffect: "grab.mp3",
        text: `¡Encuentras Guantes de Acero [x1] escondidos entre cajas! Podrían ser útiles.`,
        options: [
            { text: "Volver y hablar con el tabernero", next: "TerminarOrganizarConGuantes" }
        ]
    },

    TerminarOrganizarConGuantes: {
        character: "Narrador",
        image: "https://i.imgur.com/LOqewoO.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "",
        text: `Terminas de organizar. Pero el tabernero sigue preocupado.`,
        options: [
            { text: "Preguntar qué le preocupa", next: "HistoriaExtorsionConGuantes" }
        ]
    },

    InvestigarBodegaSinLlaves: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/peYZbBo.png",
        soundEffect: "doorlock.mp3",
        text: `Te acercas la puerta de la bodega, pero el pomo está atorado.`,
        options: [
            { text: "Intentar forzarla", next: "ForzarPuerta" },
            { text: "Dejar de intentar e ir al baño", next: "OrganizarMasOtraVez" }            
        ]
    },

    ForzarPuerta: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/peYZbBo.png",
        soundEffect: "doorlock.mp3",
        text: `La puerta está con llave, no abre. Se verá mal si intentas abrirla a la fuerza.`,
        options: [
            { text: "Forzarla otra vez", next: "ForzarPuertaOtraVez" },
            { text: "Hablar con el tabernero", next: "TerminarOrganizar" }
        ]
    },

    ForzarPuertaOtraVez: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/peYZbBo.png",
        soundEffect: "forzarPuerta.mp3",
        text: `El tabernero se molesta porque tratas de romper la puerta y jala del cuello de tu camisa.`,
        options: [
            { text: "Hablar con el tabernero", next: "HablarTaberneroForzarPuerta" }
        ]
    },

    HablarTaberneroForzarPuerta: {
        character: "Tabernero",
        image: "https://i.imgur.com/8LCUO8p.png",
        background: "https://i.imgur.com/iaKlUvW.png",
        soundEffect: "",
        text: `¡¿Qué crees que haces?! ¡Vas a dañar el negocio!`,
        options: [
            { text: "Salir de la taberna", next: "SalirTabernaForzarPuerta" }
        ]
    },

    SalirTabernaForzarPuerta: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/UOTSQAt.png",
        soundEffect: "",
        text: `Te terminan echando de la inauguración de la taberna, tendrás que venir otro día, has hecho enojar al tabernero.<br><br><em>FINAL CONSEGUIDO: NEUTRAL (4)</em><br><br>La novela gráfica ha terminado, volverá a cargarse en unos segundos...`,
        options: [
        ]
    },

    HistoriaExtorsion: {
        character: "Tabernero",
        image: "https://i.imgur.com/LOqewoO.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "cry.mp3",
        text: `Hace unos días, unos piratas comenzaron a pedirme "protección". Si no pago, arrasarán la taberna el dia de mañana.`,
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
        text: `Hace unos días, unos piratas comenzaron a pedirme "protección". Si no pago, arrasarán la taberna el dia de mañana.`,
        options: [
            { text: "Ayudarle con los piratas", next: "PeleaConGuantes" },
            { text: "No ayudarle", next: "NoAyudarConPiratas" }
        ]
    },

    NoAyudarConPiratas: {
        character: "Narrador",
        image: "https://i.imgur.com/YUxdi7o.png",
        background: "https://i.imgur.com/95tv4Uv.png",
        soundEffect: "clean.mp3",
        text: `El tabernero asiente resignado. Se da vuelta y sigue limpiando solo.`,
        options: [
            { text: "Robarle mientras está distraído", next: "FinalMalo2" },
            { text: "Marcharte", next: "FinalNeutral3" }
        ]
    },

    FinalMalo2: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/UOTSQAt.png",
        soundEffect: "lostGame.mp3",
        text: `Aprovechas el descuido del tabernero y te llevas algunas monedas que tenía. No te sientes para nada orgulloso de lo que acabas de hacer...<br><br><em>FINAL CONSEGUIDO: MALO (2)</em><br><br>La novela gráfica ha terminado, volverá a cargarse en unos segundos...`,
        options: [
        ]
    },

    PeleaConGuantes: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/UOTSQAt.png",
        soundEffect: "",
        text: `Sales de la taberna de Whiskey Peak, parece que la inauguración quedará para luego. A la lejanía observas a unos piratas en la costa`,
        options: [
            { text: "Ir a la costa a ver a los piratas", next: "IrCostaGuantes" },
            { text: "Pensartelo mejor y darte media vuelta", next: "RegresarteNeutral" }            
        ]
    },

    IrCostaGuantes: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/WFY3jIG.png",
        soundEffect: "",
        text: `En la costa, observas a un par de piratas bastante peligrosos.`,
        options: [
            { text: "Hablar con los piratas valientemente", next: "HablarPiratasGuantes" },
            { text: "Atacarlos de improvisto sin muchos rodeos", next: "PeleaConGuantesImprovisto" }            
        ]
    },

    HablarPiratasGuantes: {
        character: "Pirata",
        image: "https://i.imgur.com/1mrX3IZ.png",
        background: "https://i.imgur.com/WFY3jIG.png",
        soundEffect: "laugh.mp3",
        text: `¿Tu quién mierda eres? Largo de aquí.`,
        options: [
            { text: "Atacar al pirata", next: "PeleaConGuantesImprovisto" },
            { text: "Preguntarles por qué extorsionan al tabernero", next: "ExplicacionesPirataConGuantes" }           
        ]
    },

    ExplicacionesPirataConGuantes: {
        character: "Pirata",
        image: "https://i.imgur.com/1mrX3IZ.png",
        background: "https://i.imgur.com/WFY3jIG.png",
        soundEffect: "",
        text: `¡Ese condenado nos está dejando sin cerveza porque provocamos muchos problemas en el bar!`,
        options: [
            { text: "Comprendes la situación de los piratas y te vas", next: "RegresarteNeutralPirataExplicacion" },
            { text: "Niegas y decides luchar contra ellos de una vez", next: "PeleaConGuantesImprovisto" }            
        ]
    },

    PeleaConGuantesImprovisto: {
        character: "Narrador",
        image: "https://i.imgur.com/1mrX3IZ.png",
        background: "https://i.imgur.com/WFY3jIG.png",
        soundEffect: "fight.mp3",
        text: `Comienzas a pelear contra el pirata que tienes en frente, muchos puños se conectan satisfactoriamente, sin embargo, él mucho más resistente y, de paso, está acompañado con subordinados. ¿Qué quieres hacer?`,
        options: [
            { text: "Reflexionar y huir despavorido, estás en desventaja numérica", next: "HuirPiratasSinGuantesPelea" },
            { text: "Seguir luchando para derrotar a los piratas", next: "FinHistoriaSinGuantesImprovisto" },
            { text: "Equiparte los Guantes de Acero que encontraste en la bodega", next: "DerrotarPirataPeleaConGuantesImprovisto" },
        ]
    },

    DerrotarPirataPeleaConGuantesImprovisto: {
        character: "Narrador",
        image: "https://i.imgur.com/cM3Lzdy.png",
        background: "https://i.imgur.com/9vEJy1I.png",
        soundEffect: "grab.mp3",
        text: `Gracias a los Guantes de Acero, logras derrotar a los piratas tras una dura pelea. El tabernero te abraza con gratitud luego de estar escondido detrás de una roca, estuvo observando tu hazaña.`,
        options: [
            { text: "Hablar con el pirata malherido", next: "FinHistoriaPeleaConGuantesImprovisto" }
        ]
    },

    FinHistoriaPeleaConGuantesImprovisto: {
        character: "Pirata",
        image: "https://i.imgur.com/cM3Lzdy.png",
        background: "https://i.imgur.com/9vEJy1I.png",
        soundEffect: "laugh.mp3",
        text: `*El pirata escupe sangre, se arrastra entre la arena mientras está adolorido. Gime de dolor, pero su mirada no ha perdido el odio.*<br><br><br>¡Maldito...! Ngh... esto no se va a quedar así...<br><br>*Respira con dificultad, gruñe al intentar incorporarse, pero cae de nuevo.*<br><br>Nuestro capitán... está en Banaro... cuando se entere... vendrá por ti... y por esta maldita isla.<br><br><em>¡FINAL CONSEGUIDO: BUENO! (1) ¿Viajarás a Banaro? (continuará). Toma una captura (pantalla completa del foro) y publícalo en el post del comunicado. Finaliza la novela grafica, felicidades</em>`,
        options: [
        ]
    },

    PeleaSinGuantes: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/UOTSQAt.png",
        soundEffect: "",
        text: `Sales de la taberna de Whiskey Peak, parece que la inauguración quedará para luego. A la lejanía observas a unos piratas en la costa`,
        options: [
            { text: "Ir a la costa a ver a los piratas", next: "IrCosta" },
            { text: "Pensartelo mejor y darte media vuelta", next: "RegresarteNeutral" }            
        ]
    },

    RegresarteNeutral: {
        character: "Narrador",
        image: "https://i.imgur.com/qhlPj8y.png",
        background: "https://i.imgur.com/73lIIcK.png",
        soundEffect: "backsound.mp3",
        text: `Prefieres evitar el conflicto al no ir a la costa, te quedas en la inauguración hasta su finalización. <br><br><em>FINAL CONSEGUIDO: NEUTRAL (5)</em><br><br>La novela gráfica ha terminado, volverá a cargarse en unos segundos...`,
        options: [       
        ]
    },

    IrCosta: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/WFY3jIG.png",
        soundEffect: "",
        text: `En la costa, observas a un par de piratas bastante peligrosos.`,
        options: [
            { text: "Hablar con los piratas valientemente", next: "HablarPiratas" },
            { text: "Atacarlos de improvisto sin muchos rodeos", next: "PeleaSinGuantesImprovisto" }            
        ]
    },

    HablarPiratas: {
        character: "Pirata",
        image: "https://i.imgur.com/1mrX3IZ.png",
        background: "https://i.imgur.com/WFY3jIG.png",
        soundEffect: "laugh.mp3",
        text: `¿Tu quién mierda eres? Largo de aquí.`,
        options: [
            { text: "Atacar al pirata sin esperar a que vuelva a hablar", next: "PeleaSinGuantesImprovisto" },
            { text: "Preguntarles por qué extorsionan al tabernero", next: "ExplicacionesPirata" }            
        ]
    },

    ExplicacionesPirata: {
        character: "Pirata",
        image: "https://i.imgur.com/1mrX3IZ.png",
        background: "https://i.imgur.com/WFY3jIG.png",
        soundEffect: "laugh.mp3",
        text: `¡Ese condenado nos está dejando sin cerveza porque provocamos muchos problemas en el bar!`,
        options: [
            { text: "Comprendes la situación de los piratas y te vas", next: "RegresarteNeutralPirataExplicacion" },
            { text: "Niegas y decides luchar contra ellos de una vez por todas", next: "PeleaSinGuantesImprovisto" }            
        ]
    },

    RegresarteNeutralPirataExplicacion: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/9vEJy1I.png",
        soundEffect: "",
        text: `Prefieres evitar el conflicto al no pelear con los piratas, puede que hasta incluso hayas simpatizado con ellos. No regresas a la taberna. <br><br><em>FINAL CONSEGUIDO: ¿NEUTRAL? (6)</em><br><br>La novela gráfica ha terminado, volverá a cargarse en unos segundos...`,
        options: [       
        ]
    },

    PeleaSinGuantesImprovisto: {
        character: "Narrador",
        image: "https://i.imgur.com/1mrX3IZ.png",
        background: "https://i.imgur.com/WFY3jIG.png",
        soundEffect: "fight.mp3",
        text: `Comienzas a pelear contra el pirata que tienes en frente, muchos puños se conectan satisfactoriamente, sin embargo, él mucho más resistente y, de paso, está acompañado con subordinados. ¿Qué quieres hacer?`,
        options: [
            { text: "Reflexionar y huir despavorido, estás en desventaja numérica", next: "HuirPiratasSinGuantesPelea" },
            { text: "Seguir luchando para derrotar a los piratas", next: "FinHistoriaSinGuantesImprovisto" },
        ]
    },

    HuirPiratasSinGuantesPelea: {
        character: "Narrador",
        image: "",
        background: "https://i.imgur.com/9vEJy1I.png",
        soundEffect: "",
        text: `Sales huyendo de la costa bastante nervioso, esos piratas eran muy fuertes. A lo mejor intentarlo con un arma sería una buena idea. <br><br><em>FINAL CONSEGUIDO: NEUTRAL (7)</em><br><br>La novela gráfica ha terminado, volverá a cargarse en unos segundos...`,
        options: [       
        ]
    },

    FinHistoriaSinGuantesImprovisto: {
        character: "Narrador",
        image: "https://i.imgur.com/mjLGXhD.png",
        background: "https://i.imgur.com/o8FxFqk.png",
        soundEffect: "lostGame.mp3",
        text: `Intentas luchar contra los piratas, pero sin un arma adecuada te superan fácilmente. Te despiertas fuera de la costa con un chichón en la frente y cortes en tu cuerpo...<br><br><em>FINAL CONSEGUIDO: MALO (3)</em><br><br>La novela gráfica ha terminado, volverá a cargarse en unos segundos...`,
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

    let timeLeft = 10;
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
        if (sessionStorage.getItem("finalAlcanzado")) {
            iniciarCuentaRegresiva();
        }
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
        let nombreJugador = sessionStorage.getItem("nombreJugador");
        if (!nombreJugador) {
            nombreJugador = prompt("Has llegado al final de la historia. Ingresa tu nombre de foro para registrar tu participación:");
            if (nombreJugador) {
                sessionStorage.setItem("nombreJugador", nombreJugador);
            } else {
                nombreJugador = "Jugador desconocido";
            }
        }

        const finalMsg = document.createElement("div");
        finalMsg.style.marginTop = "20px";
        finalMsg.style.fontWeight = "bold";
        finalMsg.style.fontSize = "1.2em";
        finalMsg.style.textAlign = "center";
        finalMsg.innerHTML = `Participación registrada como: <u>${nombreJugador}</u>`;
        document.getElementById("dialogue-box").appendChild(finalMsg);

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

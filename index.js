const questions = [
    {text: "Follow-up a lungo termine dello studio SWOG S0777: la tripletta RVd raggiunge una PFS mediana pari a:", opt0: "41 mesi", opt1: "30 mesi", opt2: "36 mesi", ans: "0", com: "La tripletta RVd raggiunge una PFS mediana pari a 41 mesi.", ref: "Durie BGM, et al. Blood Cancer J. 2020;10(5):53. doi: 10.1038/s41408-020-0311-8.", acron: "PFS: sopravvivenza libera da progressione;\nRVd: bortezomib, lenalidomide e dexamethasone"},
    {text: "Quale profilo di tollerabilità e sicurezza ha dimostrato RVd vs Rd per rappresentare un appropriato standard di cura indipendentemente dall’età e dall’intento di trapianto?", opt0: "sotto le aspettative", opt1: "non tollerato", opt2: "ben tollerato", ans: "2", com: "RVd ha un profilo di sicurezza e tollerabilità accettabile e continua a rappresentare uno standard of care appropriato, indipendentemente dall’età e dall’intento di trapianto.", ref: "Durie BGM, et al. Blood Cancer J. 2020;10(5):53. doi: 10.1038/s41408-020-0311-8.", acron: "Rd: lenalidomide e dexamethasone;\nRVd: bortezomib, lenalidomide e dexamethasone"},
    {text: "La stima della sopravvivenza globale a 5 anni è stata pari al…", opt0: "69% per i pazienti RVd e al 56% per i pazienti Rd", opt1: "79% per i pazienti RVd e al 66% per i pazienti Rd", opt2: "23% per i pazienti RVd e al 44% per i pazienti Rd", ans: "0", com: "La stima della sopravvivenza globale a 5 anni è stata pari al 69% per i pazienti RVd e al 56% per i pazienti Rd.", ref: "Durie BGM, et al. Blood Cancer J. 2020;10(5):53. doi: 10.1038/s41408-020-0311-8.", acron: "Rd: lenalidomide e dexamethasone;\nRVd: bortezomib, lenalidomide e dexamethasone"},
    {text: "L’aggiunta di bortezomib alla doppietta Rd come terapia di induzione in pazienti con NDMM senza intento immediato di trapianto:", opt0: "ha diminuito sia la PFS e OS", opt1: "ha lasciato inviariato PFS e OS", opt2: "ha prolungato ulteriormente sia la PFS che la OS rispetto ad Rd", ans: "2", com: "Nello studio di fase 3 SWOGS0777, l’aggiunta di bortezomib alla doppietta Rd come terapia di induzione in pazienti con NDMM senza intento immediato di trapianto ha prolungato ulteriormente sia la PFS che la OS rispetto a Rd.", ref: "Merz M, et al. Ann Hematol. 2020;99(8):1709-1725. doi: 10.1007/s00277-020-04023-4.", acron: "NDMM: mieloma multiplo di nuova diagnosi;\nOS: sopravvivenza globale;\nPFS: sopravvivenza libera da progressione;\nRd: lenalidomide e dexamethasone"},
    {text: "Follow-up a lungo termine dello studio SWOG S0777: la tripletta RVd fornisce una durata mediana del trattamento pari a:", opt0: "15,4 mesi", opt1: "20,3 mesi", opt2: "17,1 mesi", ans: "2", com: "La tripletta RVd fornisce una durata mediana del trattamento pari a 17,1 mesi.", ref: "Durie BGM, et al. Blood Cancer J. 2020;10(5):53. doi: 10.1038/s41408-020-0311-8.", acron: "RVd: bortezomib, lenalidomide e dexamethasone"},
    {text: "Quale beneficio si ottiene in termini di sopravvivenza vs placebo nella terapia di mantenimento nei pazienti sottoposti a ASCT?", opt0: "84,1 mesi", opt1: "101,5 mesi", opt2: "113,8 mesi", ans: "2", com: "Il beneficio ottenuto in termini di sopravvivenza vs placebo nella terapia di mantenimento nei pazienti sottoposti a ASCT è pari a 113,8 mesi (IC 95% 100,4-non raggiunto) per il gruppo lenalidomide e 84,1 mesi (73,8-106,0) per il gruppo placebo (HR: o,61; IC 95%: 0,46-0.80; p=0,00040).", ref: "Holstein SA, et al. Lancet Haematol. 2017; 4(9): e431–e442.", acron: "ASCT: trapianto autologo di cellule staminali"},
    {text: "I pazienti sottoposti a bortezomib durante la terapia di mantenimento manifestano un maggior tempo di progressione vs placebo, pari a:", opt0: "57,3 mesi", opt1: "47,7 mesi", opt2: "32,1 mesi", ans: "0", com: "I pazienti sottoposti a bortezomib durante la terapia di mantenimento manifestano un tempo di progressione pari a 57,3 mesi (IC 95% 44,2-73,3) per il gruppo lenalidomide vs 28,9 mesi (23,0-36,3) per il gruppo placebo (HR: 0,57; IC 95%: 0,46-0,71; p<0,0001).", ref: "Holstein SA, et al. Lancet Haematol. 2017; 4(9): e431–e442.", acron: ""},
    {text: "La dose iniziale raccomandata di lenalidomide per via orale una volta al giorno, somministrata continuativamente (nei giorni 1-28 di cicli ripetuti di 28 giorni) fino a progressione della malattia o a comparsa di intolleranza è di:", opt0: "15 mg", opt1: "25 mg", opt2: "20 mg", ans: "1", com: "La dose iniziale raccomandata di lenalidomide per via orale una volta al giorno, somministrata continuativamente (nei giorni 1-28 di cicli ripetuti di 28 giorni) fino a progressione della malattia o a comparsa di intolleranza è di 25 mg.", ref: "Revlimid. Riassunto delle Caratteristiche del Prodotto.", acron: ""},
    {text: "Lo Studio OPTIMISMM conferma l’efficacia del sequenziamento di un regime a base di pomalidomide…", opt0: "immediatamente dopo recidiva di trattamento con lenalidomide", opt1: "in assenza di trattamento con lenalidomide", opt2: "nessuna delle precedenti", ans: "0", com: "Lo Studio OPTIMISMM conferma l’efficacia del sequenziamento di un regime a base di pomalidomide immediatamente dopo recidiva di trattamento con lenalidomide.", ref: "Richardson PG, et al. Lancet Oncol.2019;20(6):781-794. doi: 10.1016/S1470-2045(19)30152-4.", acron: ""},
    {text: "Lo Studio OPTIMISMM suggerisce che un cambio di classe di farmaci non è giustificato…", opt0: "in pazienti refrattari", opt1: "in pazienti precedentemente esposti  o che sono diventati refrattari a lealidomide", opt2: "in pazienti precedentemente esposti a lenalidomide", ans: "1", com: "Lo Studio OPTIMISMM suggerisce che un cambio di classe di farmaci non è giustificato in pazienti precedentemente esposti o che sono diventati refrattari a lealidomide.", ref: "Richardson PG, et al. Lancet Oncol.2019;20(6):781-794. doi: 10.1016/S1470-2045(19)30152-4.", acron: ""},
    {text: "Quale studio randomizzato di fase III che ha utilizzato bortezomib e desametasone come comparator include il 100% dei pazienti pretrattati con lenalidomide?", opt0: "studio CASTOR (daratumumab)", opt1: "studio ENDEAVOR (carfilzomib)", opt2: "studio OPTIMISMM (Pomalidomide)", ans: "2", com: "Lo studio randomizzato di fase III che ha utilizzato bortezomib e desametasone come comparator include il 100% dei pazienti pretrattati con lenalidomide è lo studio OPTIMISMM (Pomalidomide).", ref: "Richardson PG, et al. Lancet Oncol.2019;20(6):781-794. doi: 10.1016/S1470-2045(19)30152-4.", acron: ""},
    {text: "Lo Studio OPTIMISMM dimostra che il trattamento con PVd nel trattamento di pazienti con mieloma multiplo precedentemente trattati con lenalidomide risulta in:", opt0: "una PFS significativamente migliorata vs bortezomib e desamtasone", opt1: "una PFS equiparabile vs bortezomib e desamtasone", opt2: "non si riscontra questa informazione all'interno dello Studio OPTIMISMM", ans: "0", com: "Lo Studio OPTIMISMM dimostra che il trattamento con PVd nel trattamento di pazienti con mieloma multiplo precedentemente trattati con lenalidomide risulta in una PFS significativamente migliorata vs bortezomib e desamtasone.", ref: "Richardson PG, et al. Lancet Oncol.2019;20(6):781-794. doi: 10.1016/S1470-2045(19)30152-4.", acron: "PFS: sopravvivenza libera da progressione;\nPVd: pomalidomide, bortezomib e desametasone"},
    {text: "Il vantaggio in termini di PFS è stato più marcato…", opt0: "Nei pazienti sottoposti a una sola linea di terapia precedente", opt1: "Nei pazienti sottoposti a due linee di terapia precedenti", opt2: "Non valutabile", ans: "0", com: "Il vantaggio in termini di PFS è stato più marcato nei pazienti sottoposti a una sola linea di terapia precedente.", ref: "Imnovid. Riassunto delle Caratteristiche del Prodotto.", acron: "PFS: sopravvivenza libera da progressione"},
    {text: "PVd in seconda linea ha portato a miglioramenti nella PFS…", opt0: "dipendentemente dallo stato di refrattarietà a Lenalidomide", opt1: "indipendentemente dallo stato di refrattarietà a Lenalidomide", opt2: "nessuna delle precedenti", ans: "1", com: "PVd in seconda linea ha portato a miglioramenti nella PFS indipendentemente dallo stato di refrattarietà a lenalidomide.", ref: "Dimopoulos M, et al. Leukemia. 2021;35(6):1722-1731. doi: 10.1038/s41375-020-01021-3.", acron: "PFS: sopravvivenza libera da progressione;\nPVd: pomalidomide, bortezomib e desametasone"},
    {text: "PVd in seconda linea ha portato a miglioramenti di PFS; quale è stata la PFS mediana in pazienti NON refrattari a Lenalidomide?", opt0: "17,8 mesi", opt1: "22 mesi", opt2: "12 mesi", ans: "1", com: "PVd in seconda linea ha portato a un miglioramento della PFS mediana nei pazienti NON refrattari a lenalidomide pari a 22 mesi vs 12,0 mesi con Vd (HR: 0,55; 95% IC: 0,29-1,01; p=0,0491).", ref: "Dimopoulos M, et al. Leukemia. 2021;35(6):1722-1731. doi: 10.1038/s41375-020-01021-3.", acron: "PFS: sopravvivenza libera da progressione;\nPVd: pomalidomide, bortezomib e desametasone"},
    {text: "PVd in second linea ha portato a miglioramenti di PFS; quale è stata la PFS mediana in pazienti refrattari a Lenalidomide?", opt0: "17,8 mesi", opt1: "25 mesi", opt2: "10 mesi", ans: "0", com: "PVd in seconda linea ha portato a un miglioramento della PFS mediana nei pazienti refrattari a lenalidomide pari a 17,8 mesi vs 9,5 mesi con Vd (HR: 0,55; 95% IC: 0,33-0,94; p=0,0276).", ref: "Dimopoulos M, et al. Leukemia. 2021;35(6):1722-1731. doi: 10.1038/s41375-020-01021-3.", acron: "PFS: sopravvivenza libera da progressione;\nPVd: pomalidomide, bortezomib e desametasone"},
    {text: "L'ORR con PVd vs Vd sia in pazienti refrattari a Lenalidomide sia in pazienti NON refrattari alla Lenalidomide è risultato:", opt0: "significativamente minore", opt1: "significativamente maggiore", opt2: "uguale", ans: "1", com: "L'ORR con PVd vs Vd sia in pazienti refrattari a lenalidomide sia in pazienti NON refrattari alla Lenalidomide è risultato significativamente maggiore.", ref: "Dimopoulos M, et al. Leukemia. 2021;35(6):1722-1731. doi: 10.1038/s41375-020-01021-3.", acron: "ORR: tasso di risposta complessiva;\nPVd: pomalidomide, bortezomib e desametasone"},
    {text: "Nello studio OPTIMISMM in cui sono state prese in considerazione diverse sottopopolazioni di pazienti (età, alto rischio citogenetico, dopo ASCT, pazienti con compromissione renale), PVd ha:", opt0: "mantenuto e confermato la sua efficacia in termini di PFS", opt1: "diminuito la sua efficacia in termini di PFS", opt2: "aumentato la sua efficacia in termini di PFS", ans: "0", com: "Nello studio OPTIMISMM in cui sono state prese in considerazione diverse sottopopolazioni di pazienti (età, alto rischio citogenetico, dopo ASCT, pazienti con compromissione renale), PVd ha mantenuto e confermato la sua efficacia in termini di PFS.", ref: "Richardson PG, et al. Lancet Oncol.2019;20(6):781-794. doi: 10.1016/S1470-2045(19)30152-4.", acron: "ASCT: trapianto autologo di cellule staminali;\nPFS: sopravvivenza libera da progressione;\nPVd: pomalidomide, bortezomib e desametasone"},
    {text: "Il tempo mediano alla risposta di PVd rispetto a Vd risulta pari a:", opt0: "0,9 mesi", opt1: "1,2 mesi", opt2: "2 mesi", ans: "0", com: "Il tempo mediano alla risposta di PVd rispetto a Vd risulta pari a 0,9 mesi.", ref: "Richardson PG, et al. Lancet Oncol.2019;20(6):781-794. doi: 10.1016/S1470-2045(19)30152-4.", acron: "PVd: pomalidomide, bortezomib e desametasone;\nVd: bortezomib e desametasone"},
    {text: "La durata mediana di risposta di PVd rispetto a Vd risulta maggiore e pari a:", opt0: "13,7 mesi", opt1: "9,7 mesi", opt2: "11,8 mesi", ans: "0", com: "La durata mediana di risposta di PVd rispetto a Vd risulta maggiore e pari a 13,7 mesi.", ref: "Richardson PG, et al. Lancet Oncol.2019;20(6):781-794. doi: 10.1016/S1470-2045(19)30152-4.", acron: "PVd: pomalidomide, bortezomib e desametasone;\nVd: bortezomib e desametasone"},
    {text: "Nello studio OPTIMISMM, il profilo di sicurezza di PVd…", opt0: "è rimasto in linea con gli eventi avversi noti per pomalidomide, desametasone e bortezomib", opt1: "ha mostrato nuovi eventi avversi", opt2: "non è stato studiato ", ans: "0", com: "Nello studio OPTIMISMM, il profilo di sicurezza di PVd è rimasto in linea con gli eventi avversi noti per pomalidomide, desametasone e bortezomib.", ref: "Richardson PG, et al. Lancet Oncol.2019;20(6):781-794. doi: 10.1016/S1470-2045(19)30152-4.", acron: "PVd: pomalidomide, bortezomib e desametasone"},
    {text: "Il trattamento con PVd deve essere somministrato fino al verificarsi della progressione della malattia o di tossicità inaccettabile. Lo schema posologico di PVd prevede una ridotta frequenza di somministrazione di bortezomib a partire dal…", opt0: "ciclo 8 in poi", opt1: "ciclo 9 in poi", opt2: "ciclo 5 in poi", ans: "1", com: "Il trattamento con PVd deve essere somministrato fino al verificarsi della progressione della malattia o di tossicità inaccettabile. Lo schema posologico di PVd prevede una ridotta frequenza di somministrazione di bortezomib a partire dal ciclo 9 in poi.", ref: "Imnovid. Riassunto delle Caratteristiche del Prodotto.", acron: "PVd: pomalidomide, bortezomib e desametasone"},
    {text: "È necessario un aggiustamento della dose per pomalidomide nello schema di trattamento PVd nei pazienti anziani?", opt0: "Sì", opt1: "No", opt2: "Informazione non nota", ans: "1", com: "Non è necessario un aggiustamento della dose per pomalidomide nello schema di trattamento PVd nei pazienti anziani.", ref: "", acron: "PVd: pomalidomide, bortezomib e desametasone"},
    {text: "Elotuzumab è indicato in associazione con pomalidomide e desametasone per il trattamento di pazienti adulti con mieloma multiplo recidivato e refrattario che hanno ricevuto…", opt0: "almeno due linee di terapia precedenti comprendenti lenalidomide e un inibitore del proteasoma e con progressione della malattia durante l’ultima terapia", opt1: "almeno una linea di terapia con progressione della malattia durante l’ultima terapia", opt2: "nessuna linea di terapia precedente", ans: "0", com: "Elotuzumab è indicato in associazione con pomalidomide e desametasone per il trattamento di pazienti adulti con mieloma multiplo recidivato e refrattario che hanno ricevuto almeno due linee di terapia precedenti comprendenti lenalidomide e un inibitore del proteasoma e con progressione della malattia durante l’ultima terapia.", ref: "Empliciti. Riassunto delle Caratteristiche del Prodotto.", acron: ""},
    {text: "Quanto risulta essere la PFS in pazienti trattati con EPd in terza linea rispetto al gruppo di controllo con Pd?", opt0: "3,7 mesi nel gruppo elotuzumab e 4,3 mesi nel gruppo di controllo", opt1: "9 mesi nel gruppo elotuzumab e 4,3 mesi nel gruppo di controllo", opt2: "10,3 mesi nel gruppo elotuzumab e 4,3 mesi nel gruppo di controllo", ans: "2", com: "La PFS in pazienti trattati con EPd in terza linea rispetto al gruppo di controllo con Pd è di 10,3 mesi nel gruppo elotuzumab e 4,7 mesi nel gruppo di controllo.", ref: "Dimopoulos MA, et al. N Engl J Med. 2018;379(19):1811-1822.", acron: "EPd: elotuzumab, pomalidomide e desametasone;\nPd: pomalidomide e desametasone;\nPFS: sopravvivenza libera da progressione"},
    {text: "Nello studio ELOQUENT-3, il rischio di progressione o morte per Epd risulta essere pari a...?", opt0: "Inferiore del 41% rispetto al gruppo di controllo", opt1: "Inferiore del 46% rispetto al gruppo di controllo", opt2: "Inferiore del 56% rispetto al gruppo di controllo", ans: "1", com: "Nello studio ELOQUENT-3, il rischio di progressione o morte per Epd risulta essere inferiore del 46% rispetto al gruppo di controllo.", ref: "Dimopoulos MA, et al. N Engl J Med. 2018;379(19):1811-1822.", acron: "EPd: elotuzumab, pomalidomide e desametasone"},
];

let state = {
    sessionIsActive: false,
    multiplayer: false,
    isplayer1Turn: true,
    questionsPicked: [],
    activeQuestion: undefined,
    player1Points: 0,
    player2Points: 0,
    grid: [
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0
    ]
}

function pickQuestions() {
    let pool = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    let out = [];
    for (i = 0; i < 16; i++) {
        picked = Math.floor(Math.random() * (pool.length + 1))
        out.push(pool[picked]);
        pool.splice(picked, 1);
    }
    return out;
}

function reset() {
    $("#homeSection").fadeIn(500);
    $(".hidden").hide();
    $(".gridCell").removeClass("player1");
    $(".gridCell").removeClass("player2");
    state = {
        sessionIsActive: false,
        multiplayer: false,
        isplayer1Turn: true,
        questionsPicked: [],
        player1Points: 0,
        player2Points: 0,
        grid: [
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0
        ]
    }
}

/*-----HOME SECTION-----*/

$("#homeSection .cpBtn").click(() => {
    $("#homeSection").fadeOut(500);
    $("#cpSection").fadeIn(500);
});

$("#startBtn").click(() => {
    $("#homeSection").fadeOut(500);
    $("#modeSection").fadeIn(500);
});

/*-----CP SECTION-----*/

$("#cpSection .backBtn").click(() => {
    $("#cpSection").fadeOut(500);
    if (state.sessionIsActive) {
        $("#gameSection").fadeIn(500);
    } else {
        $("#homeSection").fadeIn(500);
    }
});

/*-----MODE SECTION-----*/

$("#pveBtn").click(() => {
    $("#modeSection").fadeOut(500);
    $("#instructionsPveSection").fadeIn(500);
});

$("#pvpBtn").click(() => {
    state.multiplayer = true;
    $("#modeSection").fadeOut(500);
    $("#instructionsPvpSection").fadeIn(500);
    state.questionsPicked = pickQuestions();
});

$("#modeSection .nextBtn").click(() => {
    $("#modeSection").fadeOut(500);
    $("#instructionsPveSection").fadeIn(500);
    state.questionsPicked = pickQuestions();
});

/*-----INSTRUCTIONS SECTIONS-----*/

$("#instructionsPveSection .nextBtn").click(() => {
    state.sessionIsActive = true;
    $("#instructionsPveSection").fadeOut(500);
    $("#gameSection").fadeIn(500);
});

$("#instructionsPvpSection .nextBtn").click(() => {
    state.sessionIsActive = true;
    $("#instructionsPvpSection").fadeOut(500);
    $("#gameSection").fadeIn(500);
    $("#player2Counter").fadeIn(500);
});

/*-----GAME SECTION-----*/

$("#gameSection .cpBtn").click(() => {
    $("#gameSection").fadeOut(500);
    $("#cpSection").fadeIn(500);
});

$("#gameSection .backBtn").click(() => {
    $("#exitPopup").fadeIn(500);
});

$(".closePopupBtn").click(() => {
    $(".popup").fadeOut(500);
});

$("#exitPopup .nextBtn").click(() => {
    reset();
});
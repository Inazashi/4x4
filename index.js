const questions = [
    {text: "Follow-up a lungo termine dello studio SWOG S0777: la tripletta RVd raggiunge una PFS mediana pari a:", opt0: "41 mesi", opt1: "30 mesi", opt2: "36 mesi", ans: 0, com: "La tripletta RVd raggiunge una PFS mediana pari a 41 mesi.", ref: "Durie BGM, et al. Blood Cancer J. 2020;10(5):53. doi: 10.1038/s41408-020-0311-8.", acron: "PFS: sopravvivenza libera da progressione;<br/>RVd: bortezomib, lenalidomide e dexamethasone"},
    {text: "Quale profilo di tollerabilità e sicurezza ha dimostrato RVd vs Rd per rappresentare un appropriato standard di cura indipendentemente dall’età e dall’intento di trapianto?", opt0: "sotto le aspettative", opt1: "non tollerato", opt2: "ben tollerato", ans: 2, com: "RVd ha un profilo di sicurezza e tollerabilità accettabile e continua a rappresentare uno standard of care appropriato, indipendentemente dall’età e dall’intento di trapianto.", ref: "Durie BGM, et al. Blood Cancer J. 2020;10(5):53. doi: 10.1038/s41408-020-0311-8.", acron: "Rd: lenalidomide e dexamethasone;<br/>RVd: bortezomib, lenalidomide e dexamethasone"},
    {text: "La stima della sopravvivenza globale a 5 anni è stata pari al…", opt0: "69% per i pazienti RVd e al 56% per i pazienti Rd", opt1: "79% per i pazienti RVd e al 66% per i pazienti Rd", opt2: "23% per i pazienti RVd e al 44% per i pazienti Rd", ans: 0, com: "La stima della sopravvivenza globale a 5 anni è stata pari al 69% per i pazienti RVd e al 56% per i pazienti Rd.", ref: "Durie BGM, et al. Blood Cancer J. 2020;10(5):53. doi: 10.1038/s41408-020-0311-8.", acron: "Rd: lenalidomide e dexamethasone;<br/>RVd: bortezomib, lenalidomide e dexamethasone"},
    {text: "L’aggiunta di bortezomib alla doppietta Rd come terapia di induzione in pazienti con NDMM senza intento immediato di trapianto:", opt0: "ha diminuito sia la PFS e OS", opt1: "ha lasciato inviariato PFS e OS", opt2: "ha prolungato ulteriormente sia la PFS che la OS rispetto ad Rd", ans: 2, com: "Nello studio di fase 3 SWOGS0777, l’aggiunta di bortezomib alla doppietta Rd come terapia di induzione in pazienti con NDMM senza intento immediato di trapianto ha prolungato ulteriormente sia la PFS che la OS rispetto a Rd.", ref: "Merz M, et al. Ann Hematol. 2020;99(8):1709-1725. doi: 10.1007/s00277-020-04023-4.", acron: "NDMM: mieloma multiplo di nuova diagnosi;<br/>OS: sopravvivenza globale;<br/>PFS: sopravvivenza libera da progressione;<br/>Rd: lenalidomide e dexamethasone"},
    {text: "Follow-up a lungo termine dello studio SWOG S0777: la tripletta RVd fornisce una durata mediana del trattamento pari a:", opt0: "15,4 mesi", opt1: "20,3 mesi", opt2: "17,1 mesi", ans: 2, com: "La tripletta RVd fornisce una durata mediana del trattamento pari a 17,1 mesi.", ref: "Durie BGM, et al. Blood Cancer J. 2020;10(5):53. doi: 10.1038/s41408-020-0311-8.", acron: "RVd: bortezomib, lenalidomide e dexamethasone"},
    {text: "Quale beneficio si ottiene in termini di sopravvivenza vs placebo nella terapia di mantenimento nei pazienti sottoposti a ASCT?", opt0: "84,1 mesi", opt1: "101,5 mesi", opt2: "113,8 mesi", ans: 2, com: "Il beneficio ottenuto in termini di sopravvivenza vs placebo nella terapia di mantenimento nei pazienti sottoposti a ASCT è pari a 113,8 mesi (IC 95% 100,4-non raggiunto) per il gruppo lenalidomide e 84,1 mesi (73,8-106,0) per il gruppo placebo (HR: 0,61; IC 95%: 0,46-0.80; p=0,00040).", ref: "Holstein SA, et al. Lancet Haematol. 2017; 4(9): e431–e442.", acron: "ASCT: trapianto autologo di cellule staminali"},
    {text: "I pazienti sottoposti a lenalidomide durante la terapia di mantenimento manifestano un maggior tempo di progressione vs placebo, pari a:", opt0: "57,3 mesi", opt1: "47,7 mesi", opt2: "32,1 mesi", ans: 0, com: "Durante la terapia di mantenimento, i pazienti manifestano un tempo di progressione pari a 57,3 mesi (IC 95% 44,2-73,3) per il gruppo lenalidomide vs 28,9 mesi (23,0-36,3) per il gruppo placebo (HR: 0,57; IC 95%: 0,46-0,71; p<0,0001).", ref: "Holstein SA, et al. Lancet Haematol. 2017; 4(9): e431–e442.", acron: "IC: intervallo di confidenza;<br/>HR: hazard ratio"},
    {text: "Nella terapia di mantenimento in pazienti sottoposti ad ASCT, la dose iniziale raccomandata di lenalidomide per via orale una volta al giorno, somministrata continuativamente (nei giorni 1-28 di cicli ripetuti di 28 giorni) fino a progressione della malattia o a comparsa di intolleranza è di:", opt0: "5 mg", opt1: "10 mg", opt2: "25 mg", ans: 1, com: "La dose iniziale raccomandata di lenalidomide è di 10 mg per via orale una volta al giorno, somministrata continuativamente (nei giorni 1-28 di cicli ripetuti di 28 giorni) fino a progressione della malattia o a comparsa di intolleranza. Dopo 3 cicli di terapia di mantenimento con lenalidomide, la dose può essere aumentata a 15 mg per via orale una volta al giorno, se tollerata.", ref: "Revlimid. Riassunto delle Caratteristiche del Prodotto.", acron: "ASCT: trapianto autologo di cellule staminali"},
    {text: "Lo Studio OPTIMISMM conferma l’efficacia del sequenziamento di un regime a base di pomalidomide…", opt0: "immediatamente dopo recidiva di trattamento con lenalidomide", opt1: "in assenza di trattamento con lenalidomide", opt2: "nessuna delle precedenti", ans: 0, com: "Lo Studio OPTIMISMM conferma l’efficacia del sequenziamento di un regime a base di pomalidomide immediatamente dopo recidiva di trattamento con lenalidomide.", ref: "Richardson PG, et al. Lancet Oncol.2019;20(6):781-794. doi: 10.1016/S1470-2045(19)30152-4.", acron: ""},
    {text: "Lo Studio OPTIMISMM suggerisce che un cambio di classe di farmaci non è giustificato…", opt0: "in pazienti refrattari", opt1: "in pazienti precedentemente esposti  o che sono diventati refrattari a lealidomide", opt2: "in pazienti precedentemente esposti a lenalidomide", ans: 1, com: "Lo Studio OPTIMISMM suggerisce che un cambio di classe di farmaci non è giustificato in pazienti precedentemente esposti o che sono diventati refrattari a lealidomide.", ref: "Richardson PG, et al. Lancet Oncol.2019;20(6):781-794. doi: 10.1016/S1470-2045(19)30152-4.", acron: ""},
    {text: "Quale studio randomizzato di fase III che ha utilizzato bortezomib e desametasone come comparator include il 100% dei pazienti pretrattati con lenalidomide?", opt0: "studio CASTOR (daratumumab)", opt1: "studio ENDEAVOR (carfilzomib)", opt2: "studio OPTIMISMM (Pomalidomide)", ans: 2, com: "Lo studio randomizzato di fase III che ha utilizzato bortezomib e desametasone come comparator include il 100% dei pazienti pretrattati con lenalidomide è lo studio OPTIMISMM (Pomalidomide).", ref: "Richardson PG, et al. Lancet Oncol.2019;20(6):781-794. doi: 10.1016/S1470-2045(19)30152-4.", acron: ""},
    {text: "Lo Studio OPTIMISMM dimostra che il trattamento con PVd nel trattamento di pazienti con mieloma multiplo precedentemente trattati con lenalidomide risulta in:", opt0: "una PFS significativamente migliorata vs bortezomib e desamtasone", opt1: "una PFS equiparabile vs bortezomib e desametasone", opt2: "non si riscontra questa informazione all'interno dello Studio OPTIMISMM", ans: 0, com: "Lo Studio OPTIMISMM dimostra che il trattamento con PVd nel trattamento di pazienti con mieloma multiplo precedentemente trattati con lenalidomide risulta in una PFS significativamente migliorata vs bortezomib e desametasone.", ref: "Richardson PG, et al. Lancet Oncol.2019;20(6):781-794. doi: 10.1016/S1470-2045(19)30152-4.", acron: "PFS: sopravvivenza libera da progressione;<br/>PVd: pomalidomide, bortezomib e desametasone"},
    {text: "Il vantaggio del regime PVd vs Vd in termini di PFS è stato più marcato…", opt0: "Nei pazienti sottoposti a una sola linea di terapia precedente", opt1: "Nei pazienti sottoposti a due linee di terapia precedenti", opt2: "Non valutabile", ans: 0, com: "Il vantaggio del regime PVd vs Vd in termini di PFS è stato più marcato nei pazienti sottoposti a una sola linea di terapia precedente.", ref: "Imnovid. Riassunto delle Caratteristiche del Prodotto.", acron: "PFS: sopravvivenza libera da progressione;<br/>PVD: pomalidomide, bortezomib e desametasone;<br/>Vd: bortezomib e desametasone"},
    {text: "PVd in seconda linea ha portato a miglioramenti nella PFS…", opt0: "dipendentemente dallo stato di refrattarietà a Lenalidomide", opt1: "indipendentemente dallo stato di refrattarietà a Lenalidomide", opt2: "nessuna delle precedenti", ans: 1, com: "PVd in seconda linea ha portato a miglioramenti nella PFS indipendentemente dallo stato di refrattarietà a lenalidomide.", ref: "Dimopoulos M, et al. Leukemia. 2021;35(6):1722-1731. doi: 10.1038/s41375-020-01021-3.", acron: "PFS: sopravvivenza libera da progressione;<br/>PVd: pomalidomide, bortezomib e desametasone"},
    {text: "PVd in seconda linea ha portato a miglioramenti di PFS; quale è stata la PFS mediana in pazienti NON refrattari a Lenalidomide?", opt0: "17,8 mesi", opt1: "22 mesi", opt2: "12 mesi", ans: 1, com: "PVd in seconda linea ha portato a un miglioramento della PFS mediana nei pazienti NON refrattari a lenalidomide pari a 22 mesi vs 12,0 mesi con Vd (HR: 0,55; 95% IC: 0,29-1,01; p=0,0491).", ref: "Dimopoulos M, et al. Leukemia. 2021;35(6):1722-1731. doi: 10.1038/s41375-020-01021-3.", acron: "PFS: sopravvivenza libera da progressione;<br/>PVd: pomalidomide, bortezomib e desametasone;<br/>Vd: bortezomib e desametasone"},
    {text: "PVd in second linea ha portato a miglioramenti di PFS; quale è stata la PFS mediana in pazienti refrattari a Lenalidomide?", opt0: "17,8 mesi", opt1: "25 mesi", opt2: "10 mesi", ans: 0, com: "PVd in seconda linea ha portato a un miglioramento della PFS mediana nei pazienti refrattari a lenalidomide pari a 17,8 mesi vs 9,5 mesi con Vd (HR: 0,55; 95% IC: 0,33-0,94; p=0,0276).", ref: "Dimopoulos M, et al. Leukemia. 2021;35(6):1722-1731. doi: 10.1038/s41375-020-01021-3.", acron: "PFS: sopravvivenza libera da progressione;<br/>PVd: pomalidomide, bortezomib e desametasone;<br/>Vd: bortezomib e desametasone"},
    {text: "L'ORR con PVd vs Vd sia in pazienti refrattari a Lenalidomide sia in pazienti NON refrattari alla Lenalidomide è risultato:", opt0: "significativamente minore", opt1: "significativamente maggiore", opt2: "uguale", ans: 1, com: "L'ORR con PVd vs Vd sia in pazienti refrattari a lenalidomide sia in pazienti NON refrattari alla Lenalidomide è risultato significativamente maggiore.", ref: "Dimopoulos M, et al. Leukemia. 2021;35(6):1722-1731. doi: 10.1038/s41375-020-01021-3.", acron: "ORR: tasso di risposta complessiva;<br/>PVd: pomalidomide, bortezomib e desametasone;<br/>Vd: bortezomib e desametasone"},
    {text: "Nello studio OPTIMISMM in cui sono state prese in considerazione diverse sottopopolazioni di pazienti (età, alto rischio citogenetico, dopo ASCT, pazienti con compromissione renale), PVd ha:", opt0: "mantenuto e confermato la sua efficacia in termini di PFS", opt1: "diminuito la sua efficacia in termini di PFS", opt2: "aumentato la sua efficacia in termini di PFS", ans: 0, com: "Nello studio OPTIMISMM in cui sono state prese in considerazione diverse sottopopolazioni di pazienti (età, alto rischio citogenetico, dopo ASCT, pazienti con compromissione renale), PVd ha mantenuto e confermato la sua efficacia in termini di PFS.", ref: "Richardson PG, et al. Lancet Oncol.2019;20(6):781-794. doi: 10.1016/S1470-2045(19)30152-4.", acron: "ASCT: trapianto autologo di cellule staminali;<br/>PFS: sopravvivenza libera da progressione;<br/>PVd: pomalidomide, bortezomib e desametasone"},
    {text: "Il tempo mediano alla risposta di PVd rispetto a Vd risulta pari a:", opt0: "0,9 mesi", opt1: "1,2 mesi", opt2: "2 mesi", ans: 0, com: "Il tempo mediano alla risposta di PVd rispetto a Vd risulta pari a 0,9 mesi.", ref: "Richardson PG, et al. Lancet Oncol.2019;20(6):781-794. doi: 10.1016/S1470-2045(19)30152-4.", acron: "PVd: pomalidomide, bortezomib e desametasone;<br/>Vd: bortezomib e desametasone"},
    {text: "La durata mediana di risposta di PVd rispetto a Vd risulta maggiore e pari a:", opt0: "13,7 mesi", opt1: "9,7 mesi", opt2: "11,8 mesi", ans: 0, com: "La durata mediana di risposta di PVd rispetto a Vd risulta maggiore e pari a 13,7 mesi.", ref: "Richardson PG, et al. Lancet Oncol.2019;20(6):781-794. doi: 10.1016/S1470-2045(19)30152-4.", acron: "PVd: pomalidomide, bortezomib e desametasone;<br/>Vd: bortezomib e desametasone"},
    {text: "Nello studio OPTIMISMM, il profilo di sicurezza di PVd…", opt0: "è rimasto in linea con gli eventi avversi noti per pomalidomide, desametasone e bortezomib", opt1: "ha mostrato nuovi eventi avversi", opt2: "non è stato studiato ", ans: 0, com: "Nello studio OPTIMISMM, il profilo di sicurezza di PVd è rimasto in linea con gli eventi avversi noti per pomalidomide, desametasone e bortezomib.", ref: "Richardson PG, et al. Lancet Oncol.2019;20(6):781-794. doi: 10.1016/S1470-2045(19)30152-4.", acron: "PVd: pomalidomide, bortezomib e desametasone"},
    {text: "Il trattamento con PVd deve essere somministrato fino al verificarsi della progressione della malattia o di tossicità inaccettabile. Lo schema posologico di PVd prevede una ridotta frequenza di somministrazione di bortezomib a partire dal…", opt0: "ciclo 8 in poi", opt1: "ciclo 9 in poi", opt2: "ciclo 5 in poi", ans: 1, com: "Il trattamento con PVd deve essere somministrato fino al verificarsi della progressione della malattia o di tossicità inaccettabile. Lo schema posologico di PVd prevede una ridotta frequenza di somministrazione di bortezomib a partire dal ciclo 9 in poi.", ref: "Imnovid. Riassunto delle Caratteristiche del Prodotto.", acron: "PVd: pomalidomide, bortezomib e desametasone"},
    {text: "È necessario un aggiustamento della dose per pomalidomide nello schema di trattamento PVd nei pazienti anziani?", opt0: "Sì", opt1: "No", opt2: "Informazione non nota", ans: 1, com: "Non è necessario un aggiustamento della dose per pomalidomide nello schema di trattamento PVd nei pazienti anziani.", ref: "", acron: "PVd: pomalidomide, bortezomib e desametasone"},
    {text: "Elotuzumab è indicato in associazione con pomalidomide e desametasone per il trattamento di pazienti adulti con mieloma multiplo recidivato e refrattario che hanno ricevuto…", opt0: "almeno due linee di terapia precedenti comprendenti lenalidomide e un inibitore del proteasoma e con progressione della malattia durante l’ultima terapia", opt1: "almeno una linea di terapia con progressione della malattia durante l’ultima terapia", opt2: "nessuna linea di terapia precedente", ans: 0, com: "Elotuzumab è indicato in associazione con pomalidomide e desametasone per il trattamento di pazienti adulti con mieloma multiplo recidivato e refrattario che hanno ricevuto almeno due linee di terapia precedenti comprendenti lenalidomide e un inibitore del proteasoma e con progressione della malattia durante l’ultima terapia.", ref: "Empliciti. Riassunto delle Caratteristiche del Prodotto.", acron: ""},
    {text: "Quanto risulta essere la PFS in pazienti trattati con EPd in terza linea rispetto al gruppo di controllo con Pd?", opt0: "3,7 mesi nel gruppo elotuzumab e 4,3 mesi nel gruppo di controllo", opt1: "9 mesi nel gruppo elotuzumab e 4,3 mesi nel gruppo di controllo", opt2: "10,3 mesi nel gruppo elotuzumab e 4,3 mesi nel gruppo di controllo", ans: 2, com: "La PFS in pazienti trattati con EPd in terza linea rispetto al gruppo di controllo con Pd è di 10,3 mesi nel gruppo elotuzumab e 4,7 mesi nel gruppo di controllo.", ref: "Dimopoulos MA, et al. N Engl J Med. 2018;379(19):1811-1822.", acron: "EPd: elotuzumab, pomalidomide e desametasone;<br/>Pd: pomalidomide e desametasone;<br/>PFS: sopravvivenza libera da progressione"},
    {text: "Nello studio ELOQUENT-3, il rischio di progressione o morte per Epd risulta essere...?", opt0: "Inferiore del 41% rispetto al gruppo di controllo (Pd)", opt1: "Inferiore del 46% rispetto al gruppo di controllo (Pd)", opt2: "Inferiore del 56% rispetto al gruppo di controllo (Pd)", ans: 1, com: "Nello studio ELOQUENT-3, il rischio di progressione o morte per Epd risulta essere inferiore del 46% rispetto al gruppo di controllo.", ref: "Dimopoulos MA, et al. N Engl J Med. 2018;379(19):1811-1822.", acron: "EPd: elotuzumab, pomalidomide e desametasone;<br/>Pd: pomalidomide e desametasone"},
];

let state = {
    sessionIsActive: false,
    multiplayer: false,
    isPlayer1Turn: true,
    questionsPicked: [],
    activeGridCell: undefined,
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

let timer = null;
const timerTimeout = 150000;

function pickQuestions() {
    let pool = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    let out = [];
    for (i = 0; i < 16; ++i) {
        picked = Math.floor(Math.random() * (pool.length))
        out.push(pool[picked]);
        pool.splice(picked, 1);
    }
    return out;
}

function selectGridCell(gridCell, i) {
    if (!$(gridCell).hasClass("pause") && !$(gridCell).hasClass("player1") && !$(gridCell).hasClass("player2")) {
        $(gridCell).addClass("selected");
        $(".gridCell").addClass("pause");
        state.activeGridCell = i;
        state.activeQuestion = state.questionsPicked[i];
        $("#questionText").html(questions[state.questionsPicked[i]].text);
        $("#questionOpt0").html(questions[state.questionsPicked[i]].opt0);
        $("#questionOpt1").html(questions[state.questionsPicked[i]].opt1);
        $("#questionOpt2").html(questions[state.questionsPicked[i]].opt2);
        $(".questionCom").html(questions[state.questionsPicked[i]].com);
        $(".questionRef").html(questions[state.questionsPicked[i]].ref);
        $(".questionAcron").html(questions[state.questionsPicked[i]].acron);
        $("#question").fadeIn(500);
    }
}

function selectOpt(opt) {
    if (opt === questions[state.activeQuestion].ans) {
        $("#correctPopup").fadeIn(500);
        if (state.isPlayer1Turn) {
            state.player1Points += 50 + (checkCombo(state.activeGridCell, 1) * 100);
            $("#player1Points").html("" + state.player1Points);
            state.grid[state.activeGridCell] = 1;
            setTimeout(() => {$("#cell" + state.activeGridCell).addClass("player1");}, 600);
        } else {
            state.player2Points += 50 + (checkCombo(state.activeGridCell, 2) * 100);
            $("#player2Points").html("" + state.player2Points);
            state.grid[state.activeGridCell] = 2;
            setTimeout(() => {$("#cell" + state.activeGridCell).addClass("player2");}, 600);
        }
    } else {
        $("#wrongPopup").fadeIn(500);
        if (state.isPlayer1Turn) {
            state.player2Points += 50 + (checkCombo(state.activeGridCell, 2) * 100);
            $("#player2Points").html("" + state.player2Points);
            state.grid[state.activeGridCell] = 2;
            setTimeout(() => {$("#cell" + state.activeGridCell).addClass("player2");}, 600);
        } else {
            state.player1Points += 50 + (checkCombo(state.activeGridCell, 1) * 100);
            $("#player1Points").html("" + state.player1Points);
            state.grid[state.activeGridCell] = 1;
            setTimeout(() => {$("#cell" + state.activeGridCell).addClass("player1");}, 600);
        }
    }
    if (state.multiplayer) {
        if (state.isPlayer1Turn) {
            state.isPlayer1Turn = false;
            $("#player1Counter img").removeClass("blink");
            $("#player2Counter img").addClass("blink");
        } else {
            state.isPlayer1Turn = true;
            $("#player1Counter img").addClass("blink");
            $("#player2Counter img").removeClass("blink");
        }
        if (isGameEnd()) {
            $("#player1Counter img").removeClass("blink");
            $("#player2Counter img").removeClass("blink");
            setTimeout(() => {
                $("#grid").addClass("transparent");
                $("#questionBlock").addClass("transparent");
                $("#gameSection > .btnsContainer").addClass("transparent");
                if (state.player1Points > state.player2Points) {
                    $("#pvpEndPlayer1Text").html("COMPLIMENTI<br/>HAI VINTO!<br/>" + state.player1Points);
                    $("#pvpEndPlayer2Text").html("SARÀ PER LA<br/>PROSSIMA VOLTA<br/>" + state.player2Points);
                } else if (state.player1Points < state.player2Points) {
                    $("#pvpEndPlayer1Text").html("SARÀ PER LA<br/>PROSSIMA VOLTA<br/>" + state.player1Points);
                    $("#pvpEndPlayer2Text").html("COMPLIMENTI<br/>HAI VINTO!<br/>" + state.player2Points);
                } else {
                    $("#pvpEndPlayer1Text").html("PAREGGIO<br/>" + state.player1Points);
                    $("#pvpEndPlayer2Text").html("PAREGGIO<br/>" + state.player2Points);
                }
                $("#pvpEndPanel").fadeIn(500);
            }, 600);
        }
    } else {
        if (isGameEnd()) {
            setTimeout(() => {
                $("#grid").addClass("transparent");
                $("#questionBlock").addClass("transparent");
                $("#gameSection > .btnsContainer").addClass("transparent");
                $("#pveEndText").html("COMPLIMENTI,<br/>HAI TERMINATO IL GIOCO!<br/>IL TUO PUNTEGGIO È DI " + state.player1Points + " PUNTI");
                $("#pveEndPanel").fadeIn(500);
            }, 600);
        }
    }
    $("#question").fadeOut(500);
    $(".gridCell").removeClass("selected");
    $(".gridCell").removeClass("pause");
}

function checkCombo(cell, player) {
    let combo = 0;
    switch (cell) {
        case 0:
            if (state.grid[1] === player && state.grid[2] === player && state.grid[3] === player) combo++;
            if (state.grid[4] === player && state.grid[8] === player && state.grid[12] === player) combo++;
            if (state.grid[5] === player && state.grid[10] === player && state.grid[15] === player) combo++;
            break;
        case 1:
            if (state.grid[0] === player && state.grid[2] === player && state.grid[3] === player) combo++;
            if (state.grid[5] === player && state.grid[9] === player && state.grid[13] === player) combo++;
            break;
        case 2:
            if (state.grid[0] === player && state.grid[1] === player && state.grid[3] === player) combo++;
            if (state.grid[6] === player && state.grid[10] === player && state.grid[14] === player) combo++;
            break;
        case 3:
            if (state.grid[0] === player && state.grid[1] === player && state.grid[2] === player) combo++;
            if (state.grid[7] === player && state.grid[11] === player && state.grid[15] === player) combo++;
            if (state.grid[6] === player && state.grid[9] === player && state.grid[12] === player) combo++;
            break;
        case 4:
            if (state.grid[5] === player && state.grid[6] === player && state.grid[7] === player) combo++;
            if (state.grid[0] === player && state.grid[8] === player && state.grid[12] === player) combo++;
            break;
        case 5:
            if (state.grid[4] === player && state.grid[6] === player && state.grid[7] === player) combo++;
            if (state.grid[1] === player && state.grid[9] === player && state.grid[13] === player) combo++;
            if (state.grid[0] === player && state.grid[10] === player && state.grid[15] === player) combo++;
            break;
        case 6:
            if (state.grid[4] === player && state.grid[5] === player && state.grid[7] === player) combo++;
            if (state.grid[2] === player && state.grid[10] === player && state.grid[14] === player) combo++;
            if (state.grid[3] === player && state.grid[9] === player && state.grid[12] === player) combo++;
            break;
        case 7:
            if (state.grid[4] === player && state.grid[5] === player && state.grid[6] === player) combo++;
            if (state.grid[3] === player && state.grid[11] === player && state.grid[15] === player) combo++;
            break;
        case 8:
            if (state.grid[9] === player && state.grid[10] === player && state.grid[11] === player) combo++;
            if (state.grid[0] === player && state.grid[4] === player && state.grid[12] === player) combo++;
            break;
        case 9:
            if (state.grid[8] === player && state.grid[10] === player && state.grid[11] === player) combo++;
            if (state.grid[1] === player && state.grid[5] === player && state.grid[13] === player) combo++;
            if (state.grid[3] === player && state.grid[6] === player && state.grid[12] === player) combo++;
            break;
        case 10:
            if (state.grid[8] === player && state.grid[9] === player && state.grid[11] === player) combo++;
            if (state.grid[2] === player && state.grid[6] === player && state.grid[14] === player) combo++;
            if (state.grid[0] === player && state.grid[5] === player && state.grid[15] === player) combo++;
            break;
        case 11:
            if (state.grid[8] === player && state.grid[9] === player && state.grid[10] === player) combo++;
            if (state.grid[3] === player && state.grid[7] === player && state.grid[15] === player) combo++;
            break;
        case 12:
            if (state.grid[13] === player && state.grid[14] === player && state.grid[15] === player) combo++;
            if (state.grid[0] === player && state.grid[4] === player && state.grid[8] === player) combo++;
            if (state.grid[3] === player && state.grid[6] === player && state.grid[9] === player) combo++;
            break;
        case 13:
            if (state.grid[12] === player && state.grid[14] === player && state.grid[15] === player) combo++;
            if (state.grid[1] === player && state.grid[5] === player && state.grid[9] === player) combo++;
            break;
        case 14:
            if (state.grid[12] === player && state.grid[13] === player && state.grid[15] === player) combo++;
            if (state.grid[2] === player && state.grid[6] === player && state.grid[10] === player) combo++;
            break;
        case 15:
            if (state.grid[12] === player && state.grid[13] === player && state.grid[14] === player) combo++;
            if (state.grid[3] === player && state.grid[7] === player && state.grid[11] === player) combo++;
            if (state.grid[0] === player && state.grid[5] === player && state.grid[10] === player) combo++;
            break;
    }
    return combo;
}

function isGameEnd() {
    for (let i = 0; i < state.grid.length; ++i) {
        if (state.grid[i] === 0) return false;
    }
    return true;
}

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

function reset() {
    state = {
        sessionIsActive: false,
        multiplayer: false,
        isPlayer1Turn: true,
        questionsPicked: [],
        activeGridCell: undefined,
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
    $(".hidden").hide();
    $(".gridCell").removeClass("player1");
    $(".gridCell").removeClass("player2");
    $(".gridCell").removeClass("selected");
    $(".gridCell").removeClass("pause");
    $("#player1Counter img").removeClass("blink");
    $("#player2Counter img").removeClass("blink");
    $("#grid").removeClass("transparent");
    $("#questionBlock").removeClass("transparent");
    $("#gameSection .btnsContainer").removeClass("transparent");
    $("#player1Points").html("0");
    $("#player2Points").html("0");
    $("#questionText").html("");
    $("#questionOpt0").html("");
    $("#questionOpt1").html("");
    $("#questionOpt2").html("");
    $(".questionCom").html("");
    $(".questionRef").html("");
    $(".questionAcron").html("");
}

$("body").click(() => {
    if (timer) clearTimeout(timer);
    timer = window.setTimeout(() => {
        reset();
        $("#homeSection").fadeIn(500);
    }, timerTimeout);
});

/*-----HOME SECTION-----*/

$("#videosBtn").click(() => {
    $("#homeSection").fadeOut(500);
    $("#homeSectionVideos").fadeIn(500);
});

$("#gameBtn").click(() => {
    $("#homeSection").fadeOut(500);
    $("#homeSectionGame").fadeIn(500);
});

$("#eventBtn").click(() => {
    $("#videoContainer").html(`<iframe class="video" src=https://player.vimeo.com/video/631080634?h=f8255fd42f&amp;badge=0&amp;autoplay=1&amp;autopause=0&amp;player_id=0&amp;app_id=58479 frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:90%;height:90%;padding:5vh 5vw;background-color: black;" title="Video Teaser The Sequence"></iframe>`);
    $("#closeIframeContainer").show();
    setTimeout(() => {
        $("#videoContainer").html("");
        $("#closeIframeContainer").hide();
    }, 115000);
});

$("#programBtn").click(() => {
    $("#videoContainer").html(`<iframe class="video" src=https://player.vimeo.com/video/637522998?h=43a1b435cd&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479 frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:90%;height:90%;padding:5vh 5vw;background-color: black;" title="Video Teaser The Sequence"></iframe>`);
    $("#closeIframeContainer").show();
    setTimeout(() => {
        $("#videoContainer").html("");
        $("#closeIframeContainer").hide();
    }, 95000);
});

$("#closeIframeContainer .backBtn").click(() => {
    $("#videoContainer").html("");
    $("#rcpContainer").html("")
    $("#closeIframeContainer").hide();
})

$("#homeSectionVideos .backBtn").click(() => {
    $("#homeSectionVideos").fadeOut(500);
    $("#homeSection").fadeIn(500);
});

$("#startBtn").click(() => {
    $("#homeSectionGame").fadeOut(500);
    $("#modeSection").fadeIn(500);
});

$("#homeSectionGame .backBtn").click(() => {
    $("#homeSectionGame").fadeOut(500);
    $("#homeSection").fadeIn(500);
});

/*-----REF SECTION-----*/

$("#refSection .backBtn").click(() => {
    $("#refSection").fadeOut(500);
    if (state.sessionIsActive) {
        $("#gameSection").fadeIn(500);
    } else {
        $("#homeSection").fadeIn(500);
    }
});

/*-----CP SECTION-----*/

$("#revlimidRcpBtn").click(() => {
    $("#rcpContainer").html(`<iframe src="https://show.netizens.it/mccann/4x4/assets/html/rcpRevlimid.html" style="position: absolute; top: 0; left: 0; width: 65.4%; height: 100%; padding: 0 17.3%; background-color: black; border: none;"></iframe>`);
    $("#closeIframeContainer").show();
});

$("#imnovidRcpBtn").click(() => {
    $("#rcpContainer").html(`<iframe src="https://show.netizens.it/mccann/4x4/assets/html/rcpImnovid.html" style="position: absolute; top: 0; left: 0; width: 65.4%; height: 100%; padding: 0 17.3%; background-color: black; border: none;"></iframe>`);
    $("#closeIframeContainer").show();
});

$("#emplicitiRcpBtn").click(() => {
    $("#rcpContainer").html(`<iframe src="https://show.netizens.it/mccann/4x4/assets/html/rcpEmpliciti.html" style="position: absolute; top: 0; left: 0; width: 65.4%; height: 100%; padding: 0 17.3%; background-color: black; border: none;"></iframe>`);
    $("#closeIframeContainer").show();
});

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
    state.questionsPicked = pickQuestions();
});

$("#pvpBtn").click(() => {
    state.multiplayer = true;
    $("#modeSection").fadeOut(500);
    $("#instructionsPvpSection").fadeIn(500);
    state.questionsPicked = pickQuestions();
});

$("#modeSection .backBtn").click(() => {
    $("#modeSection").fadeOut(500);
    $("#homeSectionGame").fadeIn(500);
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
    $("#player1Counter img").addClass("blink");
});

/*-----GAME SECTION-----*/

$("#cell0 h1").click(() => {
    selectGridCell("#cell0", 0);
});

$("#cell1 h1").click(() => {
    selectGridCell("#cell1", 1);
});

$("#cell2 h1").click(() => {
    selectGridCell("#cell2", 2);
});

$("#cell3 h1").click(() => {
    selectGridCell("#cell3", 3);
});

$("#cell4 h1").click(() => {
    selectGridCell("#cell4", 4);
});

$("#cell5 h1").click(() => {
    selectGridCell("#cell5", 5);
});

$("#cell6 h1").click(() => {
    selectGridCell("#cell6", 6);
});

$("#cell7 h1").click(() => {
    selectGridCell("#cell7", 7);
});

$("#cell8 h1").click(() => {
    selectGridCell("#cell8", 8);
});

$("#cell9 h1").click(() => {
    selectGridCell("#cell9", 9);
});

$("#cell10 h1").click(() => {
    selectGridCell("#cell10", 10);
});

$("#cell11 h1").click(() => {
    selectGridCell("#cell11", 11);
});

$("#cell12 h1").click(() => {
    selectGridCell("#cell12", 12);
});

$("#cell13 h1").click(() => {
    selectGridCell("#cell13", 13);
});

$("#cell14 h1").click(() => {
    selectGridCell("#cell14", 14);
});

$("#cell15 h1").click(() => {
    selectGridCell("#cell15", 15);
});

$("#questionOpt0Container").click(() => {
    selectOpt(0);
});

$("#questionOpt1Container").click(() => {
    selectOpt(1);
});

$("#questionOpt2Container").click(() => {
    selectOpt(2);
});

$("#gameSection .refBtn").click(() => {
    $("#gameSection").fadeOut(500);
    $("#refSection").fadeIn(500);
});

$("#gameSection .cpBtn").click(() => {
    $("#gameSection").fadeOut(500);
    $("#cpSection").fadeIn(500);
});

$("#gameSection .backBtn").click(() => {
    if (arraysEqual(state.grid, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])) {
        reset();
        $("#homeSection").fadeIn(500);
    }
    else $("#exitPopup").fadeIn(500);
});

$("#pveEndPanel .nextBtn").click(() => {
    reset();
    $("#modeSection").fadeIn(500);
});

$("#pvpEndPanel .nextBtn").click(() => {
    reset();
    $("#modeSection").fadeIn(500);
});

$(".closePopupBtn").click(() => {
    $(".popup").fadeOut(500);
});

$("#exitPopup .nextBtn").click(() => {
    reset();
    $("#homeSection").fadeIn(500);
});
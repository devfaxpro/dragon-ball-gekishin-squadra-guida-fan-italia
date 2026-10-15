# Dragon Ball Gekishin Squadra — Guida fan Italia

Sito statico in italiano per imparare a giocare a Dragon Ball Gekishin Squadra. Progetto fan indipendente con testi, simboli e schema tattico originali. Nessuna community, chat, registrazione, pubblicità o enciclopedia dei personaggi. La richiesta specifica di un sito in italiano prevale sullo standard multilingua generale.

## Aprirlo subito

Estrai lo ZIP e apri `index.html` nel browser. Il sito non richiede installazione, compilazione, database, chiavi API o account per la consultazione locale. È autonomo: le risorse grafiche, lo stile e il piccolo script sono inclusi. I collegamenti ufficiali richiedono Internet.

## Pubblicazione gratuita su GitHub Pages

1. Accedi a GitHub. Dal pulsante **+**, scegli **New repository**.
2. Scegli un nome, per esempio `dragon-ball-gekishin-squadra-guida-fan-italia`, seleziona **Public** e crea il repository. Con GitHub Free, Pages è disponibile per repository pubblici. Anche i file caricati saranno pubblici.
3. Estrai lo ZIP. Carica **il contenuto della cartella del sito**, non lo ZIP e non una cartella che lo racchiude: `index.html` deve essere nella radice del repository. Usa **uploading an existing file**, oppure **Add file → Upload files**. Includi la cartella `assets` con il suo contenuto, `note.html`, `404.html`, README e gli altri file. Conferma con **Commit changes** nel ramo `main`.
4. In **Settings → Pages → Build and deployment**, imposta **Source → Deploy from a branch**.
5. Seleziona **main**, cartella **/(root)**, poi **Save**. Non servono GitHub Actions personalizzate o dipendenze.
6. Attendi il completamento della pubblicazione: controlla **Actions** e poi **Settings → Pages → Visit site**. Usa l’indirizzo effettivamente mostrato da GitHub. Per un repository di progetto il formato abituale è `https://TUO-UTENTE.github.io/dragon-ball-gekishin-squadra-guida-fan-italia/`; questo è un esempio, non un sito già pubblicato.
7. Se disponibile, attiva **Enforce HTTPS**. Controlla dal telefono la pagina iniziale, le note e un link ufficiale.

Non è necessario comprare un dominio. Le condizioni dei servizi possono cambiare: istruzioni verificate il 15 ottobre 2026 nella [documentazione ufficiale GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

### Attenzione ai file nascosti

Lo ZIP contiene `.nojekyll`, che disabilita l’elaborazione Jekyll. In Esplora file attiva **Visualizza → Mostra → Elementi nascosti** se necessario. Se il caricamento via browser non lo include, aggiungilo con **Add file → Create new file**, nome `.nojekyll`, contenuto vuoto o una riga vuota. Il sito usa comunque normali file HTML/CSS/JS.

### Se compare una pagina vuota o un 404

- Verifica che `index.html` sia nella radice del ramo selezionato, non dentro `guida-squadra/`.
- Controlla che `assets/style.css` e `assets/app.js` siano stati caricati mantenendo le cartelle.
- I nomi sono sensibili a maiuscole/minuscole: non rinominarli durante l’upload.
- Controlla che Pages usi `main` e `/(root)` e che la pubblicazione sia terminata.
- I collegamenti sono relativi: funzionano anche sotto il percorso del repository, senza impostare un dominio.

## Contenuti e aggiornamento

- `index.html`: guida, ruoli, strategia, esercizi e checklist.
- `note.html`: fonti cliccabili, versione, indipendenza e privacy.
- `assets/style.css`: stile responsive e stampa.
- `assets/app.js`: contatore e reset della checklist, senza persistenza.
- `assets/favicon.svg`: simbolo originale.
- `404.html`: pagina per indirizzi inesistenti, autonoma anche nei percorsi annidati.
- `.nojekyll`: configurazione per pubblicazione statica.
- `VERIFICA.md`: rapporto dei controlli effettivamente eseguiti.
- `DIRITTI.txt`: perimetro degli asset e riutilizzo.

La verifica dei contenuti è del **15 ottobre 2026**. Il sito distingue le regole GEKISHIN documentate dalla revisione annunciata. Non usa valori numerici di danni, tempi o build che rischierebbero di invecchiare rapidamente. Il riferimento recente è la patch 7.5 del 14 ottobre. Le fonti complete sono in `note.html`.

Prima di aggiornare la data di verifica, rileggi le fonti e il tutorial in gioco. Quando verrà introdotto l’overhaul, rivedi **obiettivo, ruoli, progressione, GEKISHIN Burst e versioni**: non limitarti a cambiare la data. Aggiorna insieme pagina iniziale e note. Le modifiche al repository saranno ripubblicate da Pages.

## Scelte tecniche e privacy

HTML semantico, CSS responsive e JavaScript facoltativo; font di sistema e nessuna risorsa caricata da CDN. Nessun cookie, localStorage, service worker, modulo, analytics o chiamata API. La checklist si azzera alla ricarica. FAQ ed esercizi sono controlli `details/summary` utilizzabili senza JavaScript. Non sono inclusi metadati canonical o sitemap con indirizzi inventati: potranno essere aggiunti dopo aver conosciuto l’URL pubblico.

Non sono state eseguite pubblicazioni o operazioni nel tuo account GitHub. Il pacchetto è pronto per il caricamento.

## Tema grafico

Versione ispirata alla palette di Goku: arancione, blu intenso e oro su fondo crema. Colori applicati a tutte le pagine, allo schema tattico e alla favicon; nessuna immagine, logo o asset del personaggio riprodotto.

## Nome e descrizione del repository

Nome esatto: `dragon-ball-gekishin-squadra-guida-fan-italia`.

Descrizione da incollare nel campo **Description** di GitHub:

Guida fan indipendente in italiano a Dragon Ball Gekishin Squadra: impara le basi, scopri i ruoli e migliora le tue strategie. Sito non ufficiale, con consigli originali e collegamenti alle fonti ufficiali. Non affiliato a Bandai Namco.

La denominazione visibile del sito è **Dragon Ball Gekishin Squadra — Guida fan Italia**, accompagnata dalla dicitura **Non ufficiale**.

La dicitura “Generato con ChatGPT” compare nel piè di pagina di tutte le pagine, inclusa la pagina 404.

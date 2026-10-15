# Verifica della correzione del sito pubblicato

Data: 15 ottobre 2026.

## Problema riscontrato

Le pagine HTML richiedevano assets/style.css, assets/app.js e assets/favicon.svg. Il repository pubblico conteneva invece style.css, app.js e favicon.svg nella cartella principale. Le richieste ai percorsi assets/ restituivano HTTP 404 e impedivano il caricamento della grafica e dello script.

## Correzione applicata

Aggiornati index.html e note.html nel repository devfaxpro/dragon-ball-gekishin-squadra-guida-fan-italia, mantenendo il loro contenuto e usando i percorsi relativi dei file nella cartella principale.

Commit: 6e641e9516809988f341ff71d00501ee846559ce e 5308f72a4831b6d12841f3e27e5d803408e69386.

Il pacchetto corretto usa tutti i file allo stesso livello, senza cartelle di risorse. Il README locale è stato adattato a questa disposizione. Il README pubblicato dall'utente non è stato sostituito.

## Controlli locali

Pagina iniziale, note e 404: 15 combinazioni di pagina e larghezza (320, 375, 768, 1024 e 1440 px), nessun overflow e nessuna violazione axe-core rilevata. Verificate navigazione, ancore, tastiera, checklist, azzeramento e contenuti senza JavaScript.

## Controlli sul sito online

URL verificato: https://devfaxpro.github.io/dragon-ball-gekishin-squadra-guida-fan-italia/

Microsoft Edge/Chromium, larghezze 375 e 1440 px, pagina iniziale e note:

- Stile caricato correttamente, tema arancione e blu.
- Nessuna risposta HTTP 4xx/5xx durante il caricamento delle pagine e delle risorse.
- Nessun errore JavaScript.
- Nessuno scorrimento orizzontale indesiderato.
- Checklist e pulsante di azzeramento funzionanti sulla pagina iniziale.
- Filigrana Generato con ChatGPT presente.
- Zero violazioni rilevate da axe-core 4.10.3 con regole WCAG A/AA selezionate.
- Cattura desktop della pagina pubblicata ispezionata visivamente.

Le viewport mobili sono emulate: nessuna prova su dispositivo fisico, con lettore di schermo reale o in Safari/Firefox. I controlli automatici non certificano conformità completa. Le verifiche delle meccaniche e dei link ufficiali sono quelle documentali della consegna iniziale del 15 ottobre; non sono state simulate partite.

## Pacchetto

ZIP con file direttamente alla radice, incluso .nojekyll. Archivio riaperto e contenuto confrontato byte per byte con i file originali.

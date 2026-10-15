# Rapporto di verifica

Data: 15 ottobre 2026. Pacchetto: Dragon Ball Gekishin Squadra — Guida fan Italia, versione iniziale.

## Contenuti e collegamenti

- Consultate le fonti ufficiali riportate nella pagina `note.html`: guida di base, catalogo eroi, notizie, patch 7.5 del 14 ottobre e annunci dell’overhaul.
- Distinzione esplicita fra regole GEKISHIN documentate, consigli editoriali originali e meccaniche annunciate per il futuro.
- Nessun valore competitivo, classifica dei personaggi o promessa di risultato presentato come verificato.
- 10 destinazioni esterne uniche controllate con richiesta HTTP GET: tutte rispondono **200**, seguendo eventuali reindirizzamenti. Comprendono le otto pagine ufficiali Bandai Namco, l’informativa GitHub e le istruzioni GitHub Pages. La home ufficiale normalizza lo slash finale; l’informativa GitHub reindirizza alla versione generale corrente.
- 11 destinazioni interne uniche, comprese le ancore, controllate nel browser: nessun collegamento mancante.

## Navigazione e layout

Browser: Microsoft Edge/Chromium su Windows, automazione Playwright.

| Pagina | Larghezze controllate | Scorrimento orizzontale indesiderato |
| --- | --- | --- |
| index.html | 320, 375, 768, 1024, 1440 px | Nessuno |
| note.html | 320, 375, 768, 1024, 1440 px | Nessuno |
| 404.html | 320, 375, 768, 1024, 1440 px | Nessuno |

Ispezionate visivamente le catture della pagina iniziale desktop e mobile. Nessun testo tagliato o sovrapposizione osservata nelle catture esaminate. Controllato anche il riadattamento a una viewport di 640 px; non equivale a un test di zoom nativo del browser.

Test funzionali superati:

- Voci di navigazione verso le sezioni corrette.
- Collegamento “Salta al contenuto” raggiungibile con Tab e attivabile con Invio; focus trasferito al contenuto.
- Apertura e chiusura di tutti i controlli FAQ/esercizi con tastiera (Invio e Spazio).
- Checklist: conteggio da zero a quattro, azzeramento, stato vuoto alla ricarica.
- Esercizi consultabili con JavaScript disabilitato; comandi dipendenti dallo script nascosti in tale condizione.
- Percorsi relativi sotto `/dragon-ball-gekishin-squadra-guida-fan-italia/`, per simulare un sito GitHub Pages di progetto.
- Apertura diretta tramite file locale e interazione con la checklist.
- Pagina 404 su un URL annidato inesistente, con risorse autonome.
- Nessun errore JavaScript rilevato; nessuna richiesta di risorse HTTPS durante la visita locale (prima di seguire i collegamenti esterni).

## Accessibilità

axe-core 4.10.3, regole WCAG 2 A/AA, WCAG 2.1 A/AA, WCAG 2.2 AA e best practice: **zero violazioni rilevate** nelle 15 combinazioni pagina/larghezza sopra elencate. Sono inclusi controlli automatici di contrasto, etichette, struttura e attributi accessibili.

Controlli manuali/strutturali: lingua italiana dichiarata, un titolo principale per pagina, struttura di titoli, testo alternativo allo schema SVG, focus visibile, supporto `prefers-reduced-motion`, assenza di contenuti lampeggianti o in movimento automatico. La grafica tattica è dichiarata illustrativa e non replica una mappa del gioco.

## Limiti

I test automatici non certificano la conformità completa alle WCAG. Non sono stati eseguiti test con lettore di schermo reale, su telefono fisico, Safari/Firefox o zoom nativo del browser. Le dimensioni mobili sono viewport emulate nel browser desktop. Le meccaniche sono verificate documentalmente, non mediante partite. I link possono cambiare dopo la verifica. Non è stata effettuata una pubblicazione su GitHub Pages né verificato un URL pubblico del sito.

## Integrità del pacchetto

Lo ZIP contiene i file del sito direttamente alla radice, inclusa `.nojekyll`; i nomi interni delle cartelle usano `/`. L’archivio viene riaperto e ogni file confrontato byte per byte con l’originale. Nessun asset del gioco, credenziale, strumento di test o dipendenza di sviluppo incluso.

## Aggiornamento tema Goku

Applicata palette arancione, blu e oro a tutte le pagine, al diagramma e alla favicon. Ripetuti i test nelle 15 combinazioni pagina/larghezza: zero violazioni axe-core, nessun overflow e nessun errore JavaScript. Ripassati navigazione, tastiera, checklist e modalità senza JavaScript. Le verifiche documentali e dei link esterni restano quelle della consegna iniziale del 15 ottobre 2026.

## Nuovo nome del progetto

Aggiornati intestazioni, titoli, descrizioni, note, pagina 404 e istruzioni con Dragon Ball Gekishin Squadra — Guida fan Italia. Il repository di riferimento è dragon-ball-gekishin-squadra-guida-fan-italia. Ripetuti i test su 15 combinazioni pagina/larghezza, tastiera, navigazione e checklist: superati, senza violazioni axe-core rilevate. Ispezionate le nuove anteprime desktop e mobile. Nome precedente assente dai file del sito.

## Filigrana

Aggiunta la dicitura Generato con ChatGPT nel piè di pagina delle tre pagine HTML. Verificata la presenza unica in ciascuna pagina e rigenerato lo ZIP con controllo di integrità. Nessuna modifica alle funzionalità; i controlli browser completi restano quelli della revisione precedente.

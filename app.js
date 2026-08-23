// ---------- Vorbedingung: sicherer Zufall ----------
// Ohne diese Pruefung wuerde ein Browser ohne crypto.getRandomValues erst beim
// ersten Wurf mit einer unbehandelten Exception scheitern: die Seite saehe
// intakt aus, bliebe aber einfach leer. Deshalb sofort pruefen, sichtbar
// scheitern und die Bedienelemente stilllegen. Ein Ausweichen auf Math.random
// kommt nicht in Frage - das waere fuer Passphrasen unsicher.
if (typeof crypto === "undefined" || typeof crypto.getRandomValues !== "function") {
  const note = document.createElement("p");
  note.className = "crypto-error";
  note.setAttribute("role", "alert");
  note.textContent =
    "Dieser Browser stellt keinen kryptographisch sicheren Zufall " +
    "(crypto.getRandomValues) bereit. Ohne ihn lassen sich keine sicheren " +
    "Passphrasen würfeln – bitte einen aktuellen Browser verwenden.";
  document.querySelector("header").after(note);
  for (const b of document.querySelectorAll("button")) b.disabled = true;
  throw new Error("crypto.getRandomValues nicht verfügbar");
}

// ---------- Wortliste ----------
// Nomen: großgeschrieben. Verben/Adjektive: klein. Ohne Umlaute und ß.
// prettier-ignore
const NOMEN = ["Adler","Affe","Ampel","Anker","Antwort","Apfel","Arzt","Ast","Atem","Auge","Auto","Bach","Bad","Bahn","Ball","Banane","Band","Bank","Bart","Bauch","Bauer","Baum","Becher","Beere","Bein","Berg","Beruf","Besen","Besuch","Bett","Beutel","Biene","Bild","Birne","Blatt","Blick","Blitz","Blume","Boden","Bogen","Bohne","Boot","Bote","Braten","Brett","Brief","Brille","Brot","Bruder","Brunnen","Brust","Buch","Burg","Butter","Chor","Dach","Dame","Dampf","Datum","Daumen","Decke","Diamant","Dichter","Ding","Donner","Dorf","Dorn","Drache","Draht","Druck","Duft","Ecke","Ehre","Eiche","Eimer","Eisen","Elefant","Ende","Engel","Ente","Erbse","Erde","Esel","Essig","Eule","Fabrik","Faden","Fahne","Fahrrad","Falke","Falle","Farbe","Fass","Feder","Fehler","Feier","Feige","Feld","Fels","Fenster","Ferse","Feuer","Fieber","Figur","Film","Finger","Fisch","Flamme","Flasche","Fleck","Fliege","Flosse","Flug","Flur","Flut","Forelle","Form","Foto","Frage","Freude","Freund","Frieden","Frosch","Frucht","Fuchs","Funke","Futter","Gabel","Gans","Garten","Gast","Geburt","Gedicht","Gefahr","Geige","Geist","Geld","Gericht","Geruch","Geschenk","Gesicht","Gespenst","Gewitter","Giraffe","Gitter","Glas","Glocke","Gold","Gras","Grenze","Griff","Gruppe","Gurke","Gurt","Haar","Hafen","Hafer","Hahn","Haken","Hals","Hammer","Hand","Handel","Harfe","Hase","Haube","Haufen","Haus","Haut","Hecke","Heft","Heimat","Held","Hemd","Herbst","Herd","Herz","Himmel","Hirsch","Hitze","Hobel","Hof","Honig","Horn","Hose","Hotel","Hund","Hut","Idee","Igel","Insel","Jacke","Jagd","Jahr","Jubel","Jugend","Junge","Juwel","Kabel","Kaffee","Kaiser","Kalb","Kamel","Kamera","Kamin","Kamm","Kanal","Kanne","Kanu","Karotte","Karte","Katze","Kegel","Keks","Keller","Kerze","Kessel","Kette","Kiefer","Kies","Kind","Kino","Kirche","Kirsche","Kissen","Kiste","Klavier","Kleid","Klippe","Knie","Knochen","Knopf","Knoten","Koch","Koffer","Kohl","Kohle","Kompass","Konzert","Kopf","Korb","Korn","Krabbe","Kraft","Kragen","Kran","Kranich","Kranz","Kraut","Krebs","Kreide","Kreis","Kreuz","Krone","Krug","Kuchen","Kugel","Kuh","Kunst","Kupfer","Kurve","Lager","Lampe","Land","Lappen","Laterne","Laub","Lauch","Laune","Leben","Leder","Lehrer","Leim","Leine","Leiter","Lerche","Licht","Lied","Linie","Linse","Lippe","Liste","Loch","Locke","Lotse","Luft","Lunge","Lupe","Magen","Magnet","Mais","Maler","Mantel","Markt","Marmor","Maske","Mast","Mauer","Maus","Meer","Mehl","Meister","Melone","Messer","Metall","Miete","Milch","Minute","Mitte","Mond","Moos","Morgen","Motor","Muschel","Musik","Mut","Mutter","Nabel","Nacht","Nadel","Nagel","Name","Nase","Natur","Nebel","Neffe","Nest","Netz","Norden","Note","Nudel","Nummer","Nuss","Obst","Ofen","Ohr","Oma","Onkel","Opa","Oper","Orange","Orgel","Ort","Osten","Otter","Paar","Paket","Palast","Palme","Panda","Papagei","Papier","Park","Party","Pause","Pech","Pedal","Perle","Pfad","Pfanne","Pfau","Pfeffer","Pfeife","Pfeil","Pferd","Pflanze","Pflaume","Pilot","Pilz","Pinsel","Pirat","Planet","Platz","Post","Preis","Prinz","Probe","Puder","Pumpe","Punkt","Puppe","Qualle","Quelle","Rabe","Rad","Rahmen","Rakete","Rand","Rasen","Ratte","Rauch","Raum","Raupe","Regal","Regen","Reh","Reifen","Reihe","Reis","Reise","Rest","Rezept","Richter","Riese","Rind","Ring","Rippe","Ritter","Rock","Roggen","Rohr","Rolle","Rose","Rost","Ruder","Ruf","Ruhe","Ruine","Runde","Sack","Saft","Salat","Salbe","Salz","Samen","Sand","Sattel","Satz","Schaf","Schale","Schatten","Schatz","Schaufel","Schaum","Schere","Schiff","Schild","Schirm","Schlange","Schlitten","Schloss","Schlucht","Schnee","Schnur","Schrank","Schraube","Schrift","Schuh","Schule","Schulter","Schwan","Schwester","See","Segel","Seife","Seil","Seite","Sekunde","Sessel","Sieb","Sieg","Silber","Sirup","Sitz","Socke","Sofa","Sohn","Sommer","Sonne","Sorge","Spargel","Spaten","Spatz","Speck","Speise","Spiegel","Spiel","Spinne","Sport","Sprache","Spur","Stadt","Stall","Stamm","Star","Staub","Stein","Stelle","Stempel","Stern","Steuer","Stiefel","Stier","Stift","Stimme","Stirn","Stock","Stoff","Storch","Strand","Strecke","Strom","Strudel","Stufe","Stuhl","Stunde","Sturm","Suppe","Tafel","Tag","Tal","Tanne","Tante","Tanz","Tasche","Tasse","Tau","Taube","Tee","Teich","Teig","Teil","Teller","Tempel","Teppich","Text","Theater","Thron","Tiger","Tinte","Tisch","Tochter","Tomate","Ton","Topf","Tor","Torte","Traktor","Traube","Traum","Treppe","Trick","Tropfen","Trost","Truhe","Tuch","Tulpe","Tunnel","Turm","Ufer","Uhr","Umzug","Urlaub","Vase","Vater","Ventil","Vers","Vieh","Vogel","Volk","Vorhang","Wache","Waffel","Wagen","Wal","Wald","Wand","Wange","Wanne","Ware","Wein","Welle","Welt","Weste","Wetter","Wiege","Wiese","Wind","Winkel","Winter","Wipfel","Wolf","Wolke","Wolle","Wort","Wunder","Wunsch","Wurm","Wurst","Wurzel","Zahl","Zahn","Zange","Zaun","Zebra","Zehe","Zeile","Zeit","Zelt","Ziege","Ziel","Zimmer","Zimt","Zirkus","Zitrone","Zopf","Zucker","Zug","Zunge","Zwerg","Zwiebel","Zweig"];

// prettier-ignore
const VERBEN = ["angeln","atmen","backen","baden","bauen","beben","beten","biegen","bieten","binden","bitten","blasen","bleiben","blicken","blinken","bohren","brauchen","brechen","brennen","bringen","brummen","buchen","danken","denken","dichten","dienen","drehen","ducken","duften","ehren","eilen","enden","erben","fahren","fallen","falten","fangen","fassen","fegen","feiern","filmen","finden","fischen","fliegen","fliehen","folgen","formen","forschen","fragen","frieren","geben","gehen","gelten","gewinnen","glauben","gleiten","graben","greifen","grinsen","haben","haften","halten","handeln","hauen","heben","heilen","heizen","helfen","heulen","hoffen","holen","hopsen","hupen","husten","jagen","jubeln","kauen","kaufen","kichern","klagen","klappen","kleben","klettern","klingen","klopfen","kneten","kochen","kommen","kosten","kratzen","kriechen","lachen","laden","landen","laufen","lauschen","leben","legen","lehren","leihen","lernen","lesen","leuchten","lieben","liefern","liegen","loben","locken","malen","meiden","meinen","melden","melken","merken","messen","mischen","murmeln","nagen","nehmen","neigen","nicken","nieseln","packen","parken","passen","pfeifen","pflanzen","planen","platzen","proben","pumpen","putzen","raten","rauschen","rechnen","reden","regnen","reiben","reimen","reisen","reiten","rennen","retten","riechen","ringen","rodeln","rollen","rosten","rudern","rufen","ruhen","sagen","sammeln","saugen","schauen","schenken","schieben","schlafen","schmecken","schneiden","schreiben","schwimmen","segeln","sehen","senden","senken","singen","sinken","sitzen","spielen","sparen","springen","staunen","stehen","steigen","stellen","sticken","stimmen","streichen","streuen","suchen","tanzen","tasten","tauchen","tauen","teilen","tragen","treffen","trennen","treten","trinken","trocknen","turnen","wandern","warten","waschen","weben","wecken","weinen","werfen","wiegen","winken","wippen","wohnen","zeigen","zelten","ziehen","zwinkern"];

// prettier-ignore
const ADJEKTIVE = ["artig","bequem","blank","blass","blau","braun","breit","bunt","dicht","dick","dunkel","eckig","edel","eifrig","eilig","einfach","eisig","emsig","eng","ernst","fair","falsch","faul","fein","fern","feucht","flach","flink","flott","frech","frei","fremd","froh","gelb","gerade","gering","gesund","glatt","golden","grau","grob","gut","hager","hart","heiser","hell","herb","hoch","hohl","jung","kahl","kalt","klar","klein","klug","knapp","krumm","kurz","lahm","lang","laut","lecker","leer","leicht","leise","lila","locker","luftig","lustig","mager","matt","mild","munter","mutig","nah","nass","nett","neu","oval","prima","rasch","rau","reich","reif","rein","rosa","rot","ruhig","rund","sanft","satt","sauber","sauer","scharf","scheu","schick","schief","schlau","schmal","schnell","schwarz","schwer","seicht","selten","sicher","silbern","spitz","stark","steil","still","stolz","stumm","tapfer","teuer","tief","treu","trocken","wach","wahr","warm","weich","weise","weit","wild","winzig","zahm","zart"];

// Pool bauen und Duplikate (case-insensitiv) entfernen
const seen = new Set();
const POOL = [];
for (const arr of [NOMEN, VERBEN, ADJEKTIVE]) {
  for (const w of arr) {
    const k = w.toLowerCase();
    if (!seen.has(k)) {
      seen.add(k);
      POOL.push(w);
    }
  }
}
const NOUN_SET = new Set(NOMEN.map((w) => w.toLowerCase()));

// ---------- Grenzwerte ----------
const MIN_WORDS = 3;
const MAX_WORDS = 10;
// Aus dem Markup ablesen, damit eine zusaetzliche Ziffern-Schaltflaeche nicht
// stillschweigend an der Entropieskala vorbeilaeuft.
const MAX_DIGITS = Math.max(
  ...Array.from(document.querySelectorAll("#digitSeg button"), (b) => Number(b.dataset.d))
);

// ---------- Zustand ----------
const state = { words: 5, sep: "-", useNum: true, digits: 2 };
let current = { parts: [], number: "" };

// ---------- Kryptographisch sicherer Zufall ----------
const UINT32_RANGE = 4294967296;

function randInt(max) {
  // Ohne diese Pruefung liefert max <= 0 kommentarlos NaN: 4294967296 % 0 ist
  // NaN, die Schleife bricht sofort ab und x % 0 ist wieder NaN. Das landete
  // dann unbemerkt in der Passphrase.
  if (!Number.isInteger(max) || max < 1 || max > UINT32_RANGE) {
    throw new RangeError("randInt: max muss ganzzahlig zwischen 1 und 2^32 liegen, war: " + max);
  }
  // Den ueberhaengenden Restbereich verwerfen, sonst entsteht Modulo-Bias.
  const limit = UINT32_RANGE - (UINT32_RANGE % max);
  const buf = new Uint32Array(1);
  let x;
  do {
    crypto.getRandomValues(buf);
    x = buf[0];
  } while (x >= limit);
  return x % max;
}

function randomDigits(count) {
  let out = "";
  for (let i = 0; i < count; i++) out += randInt(10);
  return out;
}

// ---------- Generieren ----------
function roll() {
  const parts = [];
  for (let i = 0; i < state.words; i++) parts.push(POOL[randInt(POOL.length)]);
  current = { parts, number: state.useNum ? randomDigits(state.digits) : "" };
  render();
}

function phraseString() {
  let s = current.parts.join(state.sep);
  if (state.useNum && current.number) s += state.sep + current.number;
  return s;
}

// ---------- Anzeige ----------
function render() {
  const tiles = document.getElementById("tiles");
  tiles.innerHTML = "";
  current.parts.forEach((w, i) => {
    if (i > 0 && state.sep) addSep(tiles);
    const t = document.createElement("span");
    t.className = "tile" + (NOUN_SET.has(w.toLowerCase()) ? " noun" : "");
    t.style.animationDelay = i * 60 + "ms";
    t.textContent = w;
    tiles.appendChild(t);
  });
  if (state.useNum && current.number) {
    if (state.sep) addSep(tiles);
    const t = document.createElement("span");
    t.className = "tile num";
    t.style.animationDelay = current.parts.length * 60 + "ms";
    t.textContent = current.number;
    tiles.appendChild(t);
  }
  document.getElementById("phraseOut").textContent = phraseString();
  renderEntropy();
}

function addSep(parent) {
  const s = document.createElement("span");
  s.className = "tile sep";
  s.textContent = state.sep;
  parent.appendChild(s);
}

const BITS_PER_WORD = Math.log2(POOL.length);
const BITS_PER_DIGIT = Math.log2(10);
// Obergrenze der Skala: was die Bedienelemente ueberhaupt hergeben. Vorher stand
// hier fest 110, das echte Maximum liegt aber darueber - die letzten Stufen
// zeigten deshalb keinen Fortschritt mehr.
const MAX_BITS = MAX_WORDS * BITS_PER_WORD + MAX_DIGITS * BITS_PER_DIGIT;

function renderEntropy() {
  let bits = state.words * BITS_PER_WORD;
  if (state.useNum) bits += state.digits * BITS_PER_DIGIT;
  const b = Math.round(bits * 10) / 10;
  document.getElementById("bitsVal").textContent = b.toLocaleString("de-DE");

  let label, color;
  if (bits < 45) {
    label = "schwach";
    color = "#C33B2C";
  } else if (bits < 60) {
    label = "brauchbar";
    color = "#D9B95C";
  } else if (bits < 80) {
    label = "stark";
    color = "#9DBBA6";
  } else {
    label = "sehr stark";
    color = "#9DBBA6";
  }
  const el = document.getElementById("entLabel");
  el.textContent = label;
  el.style.color = color;
  document.getElementById("entFill").style.width = Math.min(100, (bits / MAX_BITS) * 100) + "%";

  // Knackzeit-Schätzung: Offline-Angriff mit 10^12 Versuchen/s, halber Suchraum
  const seconds = Math.pow(2, bits - 1) / 1e12;
  document.getElementById("entNote").textContent =
    "Durchschnittliche Knackzeit bei 1 Billion Versuchen pro Sekunde (Offline-Angriff): " +
    humanTime(seconds) +
    ".";
}

const TIME_UNITS = [
  [31557600 * 1e9, "Mrd. Jahre"],
  [31557600 * 1e6, "Mio. Jahre"],
  [31557600 * 1e3, "Tsd. Jahre"],
  [31557600, "Jahre"],
  [86400, "Tage"],
  [3600, "Stunden"],
  [60, "Minuten"],
  [1, "Sekunden"],
];

function humanTime(s) {
  // NaN ist kleiner-als-1-Vergleichen gegenueber immun und rutschte frueher
  // stillschweigend als "unter einer Sekunde" durch.
  if (Number.isNaN(s)) return "unbekannt";
  if (s === Infinity) return "praktisch unendlich lange";
  if (s < 1) return "unter einer Sekunde";
  for (const [u, name] of TIME_UNITS) {
    if (s >= u) {
      const v = s / u;
      const num =
        v >= 100
          ? Math.round(v).toLocaleString("de-DE")
          : (Math.round(v * 10) / 10).toLocaleString("de-DE");
      return "ca. " + num + " " + name;
    }
  }
  return "unter einer Sekunde"; // unerreichbar: s >= 1 trifft immer die Sekunden-Einheit
}

// ---------- Bedienung ----------
// Timer-Handles, damit schnelle Mehrfachklicks sich nicht gegenseitig
// zuruecksetzen: ohne clearTimeout beendet der erste Timer den Zustand des
// letzten Klicks zu frueh.
let rollTimer = 0;
let copyTimer = 0;

document.getElementById("rollBtn").addEventListener("click", (e) => {
  const btn = e.currentTarget;
  btn.classList.add("rolling");
  clearTimeout(rollTimer);
  rollTimer = setTimeout(() => btn.classList.remove("rolling"), 400);
  roll();
});

// Gibt zurueck, ob wirklich kopiert wurde - der Button darf keinen Erfolg
// melden, den es nicht gab.
function legacyCopy() {
  const sel = window.getSelection();
  if (!sel) return false;
  const range = document.createRange();
  range.selectNodeContents(document.getElementById("phraseOut"));
  sel.removeAllRanges();
  sel.addRange(range);
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  }
  // Bei Erfolg die Markierung aufraeumen; scheitert es, bleibt die Phrase
  // markiert, damit man von Hand kopieren kann.
  if (ok) sel.removeAllRanges();
  return ok;
}

async function copyPhrase() {
  // In unsicheren Kontexten fehlt navigator.clipboard komplett.
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(phraseString());
      return true;
    } catch {
      // Verweigert oder abgebrochen - unten der aeltere Weg.
    }
  }
  return legacyCopy();
}

document.getElementById("copyBtn").addEventListener("click", async () => {
  const ok = await copyPhrase();
  // Nach dem await ist e.currentTarget bereits null, daher der erneute Zugriff.
  const btn = document.getElementById("copyBtn");
  btn.textContent = ok ? "Kopiert" : "Fehlgeschlagen";
  btn.classList.toggle("done", ok);
  btn.classList.toggle("fail", !ok);
  clearTimeout(copyTimer);
  copyTimer = setTimeout(
    () => {
      btn.textContent = "Kopieren";
      btn.classList.remove("done", "fail");
    },
    ok ? 1500 : 3000
  );
});

document.getElementById("wMinus").addEventListener("click", () => {
  if (state.words > MIN_WORDS) {
    state.words--;
    syncWords();
    roll();
  }
});
document.getElementById("wPlus").addEventListener("click", () => {
  if (state.words < MAX_WORDS) {
    state.words++;
    syncWords();
    roll();
  }
});

// An den Grenzen wurden Klicks vorher kommentarlos verschluckt - der Button sah
// aus wie immer und tat nichts. Jetzt ist er sichtbar deaktiviert.
function syncWords() {
  document.getElementById("wVal").textContent = state.words;
  document.getElementById("wMinus").disabled = state.words <= MIN_WORDS;
  document.getElementById("wPlus").disabled = state.words >= MAX_WORDS;
}

document.getElementById("sepSeg").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  state.sep = b.dataset.sep;
  for (const btn of e.currentTarget.querySelectorAll("button"))
    btn.setAttribute("aria-pressed", btn === b ? "true" : "false");
  render();
});

document.getElementById("numSwitch").addEventListener("click", (e) => {
  state.useNum = !state.useNum;
  e.currentTarget.setAttribute("aria-checked", String(state.useNum));
  document.getElementById("numState").textContent = state.useNum ? "an" : "aus";
  // Beim Ausschalten verwerfen, beim Einschalten frisch wuerfeln. Vorher wurde
  // current.number nie geleert, wodurch die alte Bedingung nie zutraf und nach
  // einem Aus/An-Zyklus wieder exakt dieselbe Zahl erschien.
  current.number = state.useNum ? randomDigits(state.digits) : "";
  render();
});

document.getElementById("digitSeg").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  state.digits = Number(b.dataset.d);
  for (const btn of e.currentTarget.querySelectorAll("button"))
    btn.setAttribute("aria-pressed", btn === b ? "true" : "false");
  current.number = state.useNum ? randomDigits(state.digits) : "";
  render();
});

// ---------- Start ----------
document.getElementById("poolSize").textContent = POOL.length.toLocaleString("de-DE");
syncWords();
roll();

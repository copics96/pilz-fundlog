// Pilz-Engine: Bewertung und Lernen (Uebertragung von pilzprognose.py).
// Die Arten-Tabelle ist aus pilzprognose.py erzeugt. Aendert man dort Werte, muss sie hier mitgezogen werden.

const SPECIES = {
  "steinpilz": {
    "name": "Steinpilz (Mykorrhiza, Fichte/Buche/Eiche)",
    "months": [
      7,
      10
    ],
    "lag": [
      7,
      18
    ],
    "rain_window": [
      5,
      25,
      80,
      160
    ],
    "soil_temp": [
      6,
      9,
      15,
      19
    ],
    "night_min": [
      2,
      6,
      14,
      18
    ],
    "humidity": [
      65,
      80,
      100,
      101
    ]
  },
  "pfifferling": {
    "name": "Pfifferling (Mykorrhiza, Fichte/Buche)",
    "months": [
      6,
      10
    ],
    "lag": [
      7,
      20
    ],
    "rain_window": [
      10,
      30,
      90,
      170
    ],
    "soil_temp": [
      8,
      11,
      17,
      21
    ],
    "night_min": [
      4,
      8,
      15,
      19
    ],
    "humidity": [
      65,
      80,
      100,
      101
    ]
  },
  "maronenroehrling": {
    "name": "Maronenroehrling (Mykorrhiza, Fichte/Kiefer)",
    "months": [
      8,
      11
    ],
    "lag": [
      6,
      16
    ],
    "rain_window": [
      5,
      20,
      70,
      140
    ],
    "soil_temp": [
      4,
      7,
      14,
      18
    ],
    "night_min": [
      0,
      4,
      13,
      17
    ],
    "humidity": [
      60,
      75,
      100,
      101
    ]
  },
  "champignon": {
    "name": "Wiesenchampignon (Wiese, Saprobiont)",
    "months": [
      6,
      11
    ],
    "lag": [
      5,
      14
    ],
    "rain_window": [
      10,
      25,
      70,
      140
    ],
    "soil_temp": [
      10,
      13,
      19,
      24
    ],
    "night_min": [
      6,
      10,
      17,
      21
    ],
    "humidity": [
      65,
      80,
      100,
      101
    ]
  },
  "rotkappe": {
    "name": "Rotkappe/Birkenpilz (Leccinum, Mykorrhiza, Birke/Pappel)",
    "months": [
      6,
      10
    ],
    "lag": [
      6,
      14
    ],
    "rain_window": [
      10,
      25,
      80,
      150
    ],
    "soil_temp": [
      9,
      12,
      18,
      22
    ],
    "night_min": [
      5,
      8,
      15,
      19
    ],
    "humidity": [
      65,
      80,
      100,
      101
    ]
  },
  "semmelstoppelpilz": {
    "name": "Semmelstoppelpilz (Mykorrhiza, Laub- und Nadelwald)",
    "months": [
      7,
      11
    ],
    "lag": [
      7,
      18
    ],
    "rain_window": [
      10,
      25,
      80,
      160
    ],
    "soil_temp": [
      5,
      8,
      15,
      19
    ],
    "night_min": [
      1,
      5,
      14,
      18
    ],
    "humidity": [
      65,
      80,
      100,
      101
    ]
  },
  "herbsttrompete": {
    "name": "Herbsttrompete (Mykorrhiza, Fichte/Buche, kuehle Lagen)",
    "months": [
      9,
      12
    ],
    "lag": [
      7,
      18
    ],
    "rain_window": [
      10,
      25,
      90,
      170
    ],
    "soil_temp": [
      2,
      5,
      11,
      15
    ],
    "night_min": [
      -2,
      2,
      10,
      14
    ],
    "humidity": [
      70,
      85,
      100,
      101
    ]
  },
  "parasol": {
    "name": "Parasol (Saprobiont, Waldrand/Lichtung/Wiese)",
    "months": [
      7,
      10
    ],
    "lag": [
      5,
      14
    ],
    "rain_window": [
      10,
      20,
      70,
      140
    ],
    "soil_temp": [
      12,
      15,
      21,
      25
    ],
    "night_min": [
      7,
      11,
      17,
      21
    ],
    "humidity": [
      60,
      75,
      100,
      101
    ]
  },
  "hallimasch": {
    "name": "Hallimasch (Holzbesiedler, Laub- und Nadelholz)",
    "months": [
      9,
      11
    ],
    "lag": [
      7,
      20
    ],
    "rain_window": [
      10,
      25,
      90,
      170
    ],
    "soil_temp": [
      5,
      8,
      14,
      18
    ],
    "night_min": [
      1,
      5,
      13,
      17
    ],
    "humidity": [
      65,
      80,
      100,
      101
    ]
  },
  "fliegenpilz": {
    "name": "Fliegenpilz (Mykorrhiza, Birke/Fichte)",
    "months": [
      7,
      11
    ],
    "lag": [
      7,
      16
    ],
    "rain_window": [
      10,
      25,
      80,
      160
    ],
    "soil_temp": [
      6,
      9,
      16,
      20
    ],
    "night_min": [
      2,
      6,
      14,
      18
    ],
    "humidity": [
      65,
      80,
      100,
      101
    ]
  },
  "hexenroehrling": {
    "name": "Hexenroehrling (Flocken-/Netzstieliger, Mykorrhiza, Laub-/Nadelwald, saure Boeden)",
    "months": [
      6,
      10
    ],
    "lag": [
      6,
      16
    ],
    "rain_window": [
      10,
      25,
      80,
      150
    ],
    "soil_temp": [
      9,
      12,
      18,
      22
    ],
    "night_min": [
      5,
      8,
      15,
      19
    ],
    "humidity": [
      65,
      80,
      100,
      101
    ]
  },
  "perlpilz": {
    "name": "Perlpilz (Mykorrhiza, Fichte/Laubwald)",
    "months": [
      6,
      11
    ],
    "lag": [
      6,
      16
    ],
    "rain_window": [
      10,
      25,
      80,
      150
    ],
    "soil_temp": [
      8,
      11,
      17,
      21
    ],
    "night_min": [
      4,
      8,
      15,
      19
    ],
    "humidity": [
      65,
      80,
      100,
      101
    ]
  },
  "habichtspilz": {
    "name": "Habichtspilz (Mykorrhiza, Fichte/Kiefer, saure Boeden)",
    "months": [
      8,
      11
    ],
    "lag": [
      8,
      20
    ],
    "rain_window": [
      10,
      25,
      80,
      160
    ],
    "soil_temp": [
      5,
      8,
      14,
      18
    ],
    "night_min": [
      1,
      5,
      13,
      17
    ],
    "humidity": [
      65,
      80,
      100,
      101
    ]
  },
  "reizker": {
    "name": "Reizker (Fichten-/Tannenreizker, Mykorrhiza, Fichte/Tanne)",
    "months": [
      8,
      11
    ],
    "lag": [
      8,
      20
    ],
    "rain_window": [
      10,
      25,
      80,
      160
    ],
    "soil_temp": [
      5,
      8,
      14,
      18
    ],
    "night_min": [
      1,
      5,
      13,
      17
    ],
    "humidity": [
      65,
      80,
      100,
      101
    ]
  },
  "krause_glucke": {
    "name": "Krause Glucke (Wurzelparasit/Holzzersetzer, Kiefer)",
    "months": [
      7,
      10
    ],
    "lag": [
      7,
      18
    ],
    "rain_window": [
      10,
      25,
      80,
      160
    ],
    "soil_temp": [
      9,
      12,
      17,
      21
    ],
    "night_min": [
      4,
      8,
      15,
      19
    ],
    "humidity": [
      65,
      80,
      100,
      101
    ]
  }
};
const START_WEIGHTS = {"rain_window": 0.4, "soil_temp": 0.25, "night_min": 0.15, "humidity": 0.1, "frost": 0.1};
const CRIT = Object.keys(START_WEIGHTS);
const PAST_DAYS = 21, FORECAST_DAYS = 3;
const PRIOR_DAYS = 20;   // Faustregel: Startwerte zaehlen wie ~20 Tage Erfahrung
const MAX_SHARE = 0.8;   // Startwerte behalten immer mindestens 20 %
const MIN_EACH = 3;      // mind. so viele Fund-Tage und Tage ohne Fund zum Lernen
const FORECAST_URL = "https://api.open-meteo.com/v1/forecast";
const ARCHIVE_URL = "https://archive-api.open-meteo.com/v1/archive";

// ---------- Hilfsfunktionen ----------
function trapez(x, a, b, c, d) {
  if (x == null || isNaN(x)) return 0;
  if (x <= a || x >= d) return 0;
  if (x < b) return (x - a) / (b - a);
  if (x <= c) return 1;
  return (d - x) / (d - c);
}
function mean(vals) {
  const v = vals.filter(x => x != null && !isNaN(x));
  return v.length ? v.reduce((a, b) => a + b, 0) / v.length : NaN;
}
function r2(x) { return Math.round(x * 100) / 100; }
function fmtDate(d) {
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
function addDays(iso, n) {
  const d = new Date(iso + "T12:00:00");
  d.setDate(d.getDate() + n);
  return fmtDate(d);
}
function daysBetween(a, b) {
  return Math.round((new Date(b + "T12:00:00") - new Date(a + "T12:00:00")) / 86400000);
}
function range(a, b) { const o = []; for (let i = a; i <= b; i++) o.push(i); return o; }

// ---------- Wetter ----------
async function getJson(url, params) {
  const r = await fetch(url + "?" + new URLSearchParams(params).toString());
  if (!r.ok) throw new Error("HTTP " + r.status);
  return r.json();
}

// Open-Meteo-Antwort -> kompaktes Tageswetter {time, precip, tmin, soil, hum}
function toWx(data) {
  const dm = key => {
    const b = {};
    data.hourly.time.forEach((t, i) => { const d = t.slice(0, 10); (b[d] = b[d] || []).push(data.hourly[key][i]); });
    const o = {};
    Object.keys(b).forEach(d => { o[d] = mean(b[d]); });
    return o;
  };
  const soil = dm("soil_temperature_6cm"), hum = dm("relative_humidity_2m");
  const t = data.daily.time;
  const rnd = v => (v == null || isNaN(v)) ? null : Math.round(v * 100) / 100;
  return {
    time: t.slice(),
    precip: data.daily.precipitation_sum.slice(),
    tmin: data.daily.temperature_2m_min.slice(),
    soil: t.map(d => rnd(soil[d])),
    hum: t.map(d => rnd(hum[d]))
  };
}

// Wetter der 21 Tage bis einschliesslich dateIso (fuer einen gespeicherten Eintrag)
async function fetchHistoryWx(lat, lon, dateIso, todayIso) {
  const daysAgo = daysBetween(dateIso, todayIso);
  const base = { latitude: lat, longitude: lon, daily: "precipitation_sum,temperature_2m_min", timezone: "auto" };
  if (daysAgo <= 7) {
    // Archiv hinkt ein paar Tage hinterher -> Vorhersage-Schnittstelle, spaeter nochmal holen
    const data = await getJson(FORECAST_URL, Object.assign({}, base, {
      hourly: "soil_temperature_6cm,relative_humidity_2m", past_days: daysAgo + PAST_DAYS, forecast_days: 1 }));
    return { wx: toWx(data), final: false };
  }
  let lastErr = null;
  for (const soilVar of ["soil_temperature_0_to_7cm", "soil_temperature_6cm"]) {
    try {
      const data = await getJson(ARCHIVE_URL, Object.assign({}, base, {
        hourly: soilVar + ",relative_humidity_2m",
        start_date: addDays(dateIso, -PAST_DAYS), end_date: dateIso }));
      if (soilVar !== "soil_temperature_6cm") {
        data.hourly.soil_temperature_6cm = data.hourly[soilVar];
      }
      return { wx: toWx(data), final: true };
    } catch (e) { lastErr = e; }
  }
  throw lastErr;
}

// Wetter 21 Tage zurueck bis 3 Tage voraus (fuer die Prognose von heute)
async function fetchForecastWx(lat, lon) {
  const data = await getJson(FORECAST_URL, {
    latitude: lat, longitude: lon, daily: "precipitation_sum,temperature_2m_min",
    hourly: "soil_temperature_6cm,relative_humidity_2m",
    past_days: PAST_DAYS, forecast_days: FORECAST_DAYS, timezone: "auto" });
  return toWx(data);
}

// ---------- Bewertung (wie evaluate() in pilzprognose.py) ----------
function evaluate(wx, key, todayIso, weights) {
  const sp = SPECIES[key];
  const idx = wx.time.indexOf(todayIso);
  if (!sp || idx < 0) return null;
  const [lagMin, lagMax] = sp.lag;
  const lo = Math.max(0, idx - lagMax), hi = Math.max(0, idx - lagMin);
  let rainWindow = 0;
  for (let i = lo; i <= hi; i++) rainWindow += wx.precip[i] || 0;

  const last7 = range(Math.max(0, idx - 6), idx);
  const last3 = range(Math.max(0, idx - 2), idx);
  const soilNow = mean(last3.map(i => wx.soil[i]));
  const nightMin = mean(last7.map(i => wx.tmin[i]));
  const humidity = mean(last7.map(i => wx.hum[i]));

  const fut = range(idx, Math.min(wx.time.length, idx + FORECAST_DAYS + 1) - 1);
  const frostDays = last7.concat(fut).filter(i => wx.tmin[i] != null && wx.tmin[i] < 0).length;

  const scores = {
    rain_window: trapez(rainWindow, ...sp.rain_window),
    soil_temp: trapez(soilNow, ...sp.soil_temp),
    night_min: trapez(nightMin, ...sp.night_min),
    humidity: trapez(humidity, ...sp.humidity),
    frost: frostDays === 0 ? 1 : (frostDays === 1 ? 0.4 : 0)
  };
  let total = CRIT.reduce((s, k) => s + weights[k] * scores[k], 0);
  if (scores.rain_window < 0.2) total = Math.min(total, 0.30);
  const month = Number(todayIso.slice(5, 7));
  const inSeason = sp.months[0] <= month && month <= sp.months[1];
  if (!inSeason) total *= 0.3;

  const parts = {};
  CRIT.forEach(k => { parts[k] = r2(scores[k]); });
  return {
    key, name: sp.name, score: Math.round(total * 100), inSeason, parts,
    raw: { rain_window: rainWindow, soil_temp: soilNow, night_min: nightMin, humidity, frost_days: frostDays }
  };
}

function scoreLabel(score) {
  if (score >= 75) return "sehr gut";
  if (score >= 55) return "gut";
  if (score >= 35) return "mittel";
  return "schlecht";
}

// ---------- Lernen (wie lernen() in pilzprognose.py) ----------
function sigmoid(z) { z = Math.max(-30, Math.min(30, z)); return 1 / (1 + Math.exp(-z)); }

function fitLogistic(X, y, l2, iters, lr) {
  const n = X.length, k = X[0].length;
  let b0 = 0;
  const b = new Array(k).fill(0);
  for (let it = 0; it < iters; it++) {
    let g0 = 0;
    const g = new Array(k).fill(0);
    for (let i = 0; i < n; i++) {
      let z = b0;
      for (let j = 0; j < k; j++) z += b[j] * X[i][j];
      const e = sigmoid(z) - y[i];
      g0 += e;
      for (let j = 0; j < k; j++) g[j] += e * X[i][j];
    }
    b0 -= lr * g0 / n;
    for (let j = 0; j < k; j++) b[j] -= lr * (g[j] / n + l2 * b[j] / n);
  }
  return b;
}

function auc(scores, labels) {
  const pos = scores.filter((s, i) => labels[i]);
  const neg = scores.filter((s, i) => !labels[i]);
  if (!pos.length || !neg.length) return null;
  let wins = 0;
  pos.forEach(a => neg.forEach(b => { wins += a > b ? 1 : (a === b ? 0.5 : 0); }));
  return wins / (pos.length * neg.length);
}

// entries: Eintraege mit geladenem Wetter (e.wx). Gibt {ok:false, reason,...} oder {ok:true, weights,...} zurueck.
function learn(entries) {
  const groups = new Map();
  for (const e of entries) {
    if (!e.wx || !SPECIES[e.art]) continue;
    const key = [e.art, e.datum, Math.round(parseFloat(e.lat) * 10) / 10, Math.round(parseFloat(e.lon) * 10) / 10].join("|");
    let g = groups.get(key);
    if (!g) { g = { e, f: 0, n: 0 }; groups.set(key, g); }
    g.n++;
    if (e.fund === "ja") g.f++;
  }
  const items = Array.from(groups.values()).sort((a, b) => a.e.datum < b.e.datum ? -1 : (a.e.datum > b.e.datum ? 1 : 0));
  const X = [], y = [], labels = [];
  for (const g of items) {
    const r = evaluate(g.e.wx, g.e.art, g.e.datum, START_WEIGHTS);
    if (!r) continue;
    X.push(CRIT.map(k => r.parts[k]));
    const frac = g.f / g.n;
    y.push(frac);
    labels.push(frac >= 0.5);
  }
  const n = X.length;
  const nFind = labels.filter(Boolean).length, nNo = n - nFind;
  const base = { n, nFind, nNo };
  if (nFind < MIN_EACH || nNo < MIN_EACH) return Object.assign({ ok: false, reason: "wenig" }, base);

  const means = CRIT.map((k, j) => X.reduce((s, row) => s + row[j], 0) / n);
  const stds = CRIT.map((k, j) => Math.sqrt(X.reduce((s, row) => s + Math.pow(row[j] - means[j], 2), 0) / n));
  const inf = range(0, CRIT.length - 1).filter(j => stds[j] >= 0.05);
  if (!inf.length) return Object.assign({ ok: false, reason: "aehnlich" }, base);

  const Xc = X.map(row => inf.map(j => row[j] - means[j]));
  const beta = fitLogistic(Xc, y, 4.0, 3000, 0.2);
  const mass = inf.reduce((s, j) => s + START_WEIGHTS[CRIT[j]], 0);
  const tilt = {};
  inf.forEach((j, i) => { tilt[CRIT[j]] = START_WEIGHTS[CRIT[j]] * Math.exp(Math.max(-4, Math.min(4, beta[i]))); });
  const tiltSum = Object.keys(tilt).reduce((s, k) => s + tilt[k], 0);
  const fit = Object.assign({}, START_WEIGHTS);
  Object.keys(tilt).forEach(k => { fit[k] = mass * tilt[k] / tiltSum; });

  const share = Math.min(MAX_SHARE, n / (n + PRIOR_DAYS));
  const weights = {};
  CRIT.forEach(k => { weights[k] = (1 - share) * START_WEIGHTS[k] + share * fit[k]; });

  const lin = w => X.map(row => CRIT.reduce((s, k, j) => s + w[k] * row[j], 0));
  return Object.assign({
    ok: true, share, start: START_WEIGHTS, fit, weights,
    informative: inf.map(j => CRIT[j]),
    auc0: auc(lin(START_WEIGHTS), labels), auc1: auc(lin(weights), labels)
  }, base);
}

if (typeof module !== "undefined") {
  module.exports = { SPECIES, START_WEIGHTS, CRIT, toWx, evaluate, learn, trapez, scoreLabel, addDays, daysBetween, fmtDate };
}

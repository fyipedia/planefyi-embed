/* planefyi-embed v1.0.0 | MIT | https://widget.planefyi.com */

// src/styles/modern.ts
function getModernCSS() {
  return `
/* Modern: gradient accent header */
.transportfyi-header {
  background: linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--accent) 70%, #000));
  border-radius: 12px 12px 0 0;
  padding: 16px 20px;
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.transportfyi-header-title {
  font-size: 15px; font-weight: 700; color: #fff; margin: 0 0 4px 0; line-height: 1.3;
}

.transportfyi-header-subtitle {
  font-size: 12px; color: rgba(255, 255, 255, 0.8); margin: 0;
}

.transportfyi-img {
  width: 56px; height: 56px; border-radius: 8px; object-fit: cover;
  background: rgba(255, 255, 255, 0.15); flex-shrink: 0;
  display: flex; align-items: center; justify-content: center; overflow: hidden;
  font-size: 24px; color: #fff; font-weight: 700;
}

.transportfyi-img img { width: 100%; height: 100%; object-fit: cover; border-radius: 8px; }

.transportfyi-body { padding: 16px 20px; }

/* Key-value rows */
.transportfyi-row {
  display: flex; justify-content: space-between; align-items: flex-start; gap: 12px;
  padding: 8px 0; border-bottom: 1px solid var(--border);
}
.transportfyi-row:last-child { border-bottom: none; }

.transportfyi-label { font-size: 12px; color: var(--muted); flex-shrink: 0; }
.transportfyi-value { font-size: 13px; font-weight: 600; color: var(--text); text-align: right; word-break: break-word; }

.transportfyi-kv-rows { padding: 4px 20px 8px; }
.transportfyi-kv-row {
  display: flex; justify-content: space-between; padding: 6px 0;
  border-bottom: 1px solid var(--border); font-size: 13px;
}
.transportfyi-kv-row:last-child { border-bottom: none; }
.transportfyi-kv-label { color: var(--muted); font-size: 12px; }
.transportfyi-kv-value { font-weight: 600; color: var(--text); text-align: right; }

/* Description text */
.transportfyi-desc {
  padding: 0 20px 12px; font-size: 13px; color: var(--muted); line-height: 1.5;
}

/* View link */
.transportfyi-view-link { padding: 8px 20px; border-top: 1px solid var(--border); text-align: center; }
.transportfyi-view-link a {
  color: var(--link); text-decoration: none; font-size: 13px; font-weight: 500;
  display: inline-flex; align-items: center; gap: 4px;
}
.transportfyi-view-link a:hover { text-decoration: underline; }
.transportfyi-view-link svg { width: 12px; height: 12px; }

/* Pills */
.transportfyi-pills { display: flex; flex-wrap: wrap; gap: 6px; padding: 8px 20px; }
.transportfyi-pill {
  display: inline-block; font-size: 11px; padding: 3px 10px; border-radius: 12px;
  background: var(--surface); color: var(--text); border: 1px solid var(--border);
}

/* Code badges (IATA/ICAO) */
.transportfyi-code {
  font-family: ui-monospace, 'SF Mono', monospace; font-weight: 700; font-size: 18px;
  color: #fff; letter-spacing: 0.05em;
}

/* Stat grid (for airport/station stats) */
.transportfyi-stat-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px;
  background: var(--border); margin: 0;
}
.transportfyi-stat-cell {
  background: var(--bg); padding: 10px 12px; text-align: center;
}
.transportfyi-stat-num { font-size: 16px; font-weight: 700; color: var(--text); }
.transportfyi-stat-label { font-size: 10px; color: var(--muted); text-transform: uppercase; letter-spacing: 0.04em; margin-top: 2px; }
  `;
}

// src/styles/clean.ts
function getCleanCSS() {
  return `
/* Clean: flat header with accent left bar */
.transportfyi-header {
  border-left: 4px solid var(--accent);
  padding: 14px 16px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: var(--surface);
}

.transportfyi-header-title {
  font-size: 14px; font-weight: 700; color: var(--text); margin: 0 0 3px 0; line-height: 1.3;
}

.transportfyi-header-subtitle {
  font-size: 12px; color: var(--muted); margin: 0;
}

.transportfyi-img {
  width: 44px; height: 44px; border-radius: 6px; object-fit: cover;
  background: var(--badge-bg); flex-shrink: 0;
  display: flex; align-items: center; justify-content: center; overflow: hidden;
  font-size: 20px; color: var(--accent); font-weight: 700;
}

.transportfyi-img img { width: 100%; height: 100%; object-fit: cover; border-radius: 6px; }

.transportfyi-body { padding: 12px 16px; }

.transportfyi-row {
  display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;
  padding: 6px 0; border-bottom: 1px solid var(--border);
}
.transportfyi-row:last-child { border-bottom: none; }
.transportfyi-label { font-size: 12px; color: var(--muted); flex-shrink: 0; }
.transportfyi-value { font-size: 12px; font-weight: 600; color: var(--text); text-align: right; }

.transportfyi-kv-rows { padding: 4px 16px 6px; }
.transportfyi-kv-row {
  display: flex; justify-content: space-between; padding: 5px 0;
  border-bottom: 1px solid var(--border); font-size: 12px;
}
.transportfyi-kv-row:last-child { border-bottom: none; }
.transportfyi-kv-label { color: var(--muted); }
.transportfyi-kv-value { font-weight: 600; color: var(--text); text-align: right; }

.transportfyi-desc { padding: 0 16px 10px; font-size: 12px; color: var(--muted); line-height: 1.5; }

.transportfyi-view-link { padding: 6px 16px; border-top: 1px solid var(--border); text-align: center; }
.transportfyi-view-link a {
  color: var(--link); text-decoration: none; font-size: 12px; font-weight: 500;
  display: inline-flex; align-items: center; gap: 4px;
}
.transportfyi-view-link a:hover { text-decoration: underline; }
.transportfyi-view-link svg { width: 11px; height: 11px; }

.transportfyi-pills { display: flex; flex-wrap: wrap; gap: 4px; padding: 6px 16px; }
.transportfyi-pill {
  display: inline-block; font-size: 10px; padding: 2px 8px; border-radius: 3px;
  background: var(--surface); color: var(--text); border: 1px solid var(--border);
}

.transportfyi-code {
  font-family: ui-monospace, 'SF Mono', monospace; font-weight: 700; font-size: 16px;
  color: var(--accent); letter-spacing: 0.05em;
}

.transportfyi-stat-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px;
  background: var(--border); margin: 0;
}
.transportfyi-stat-cell { background: var(--bg); padding: 8px 10px; text-align: center; }
.transportfyi-stat-num { font-size: 14px; font-weight: 700; color: var(--text); }
.transportfyi-stat-label { font-size: 9px; color: var(--muted); text-transform: uppercase; letter-spacing: 0.04em; margin-top: 2px; }
  `;
}

// src/themes.ts
function getStyleCSS(style) {
  switch (style) {
    case "clean":
      return getCleanCSS();
    case "modern":
    default:
      return getModernCSS();
  }
}
function getThemeCSS(accent, style = "modern") {
  return `
:host {
  display: block;
  --site-accent: ${accent};
}

.transportfyi-widget {
  box-sizing: border-box;
  min-width: 240px;
  max-width: 420px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text);
  font-size: 14px;
  line-height: 1.6;
  transition: border-color 0.2s;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
}

.transportfyi-widget:hover {
  border-color: color-mix(in srgb, var(--accent) 40%, var(--border));
}

.transportfyi-widget[data-size="compact"] { max-width: 280px; font-size: 13px; }
.transportfyi-widget[data-size="default"] { max-width: 420px; }
.transportfyi-widget[data-size="large"] { max-width: 720px; }

/* Light theme */
.transportfyi-widget[data-theme="light"] {
  --bg: #fff; --text: #1e293b; --border: #e2e8f0; --accent: var(--site-accent);
  --muted: #64748b; --surface: #f8fafc; --badge-bg: #f1f5f9; --badge-text: #374151;
  --link: var(--site-accent); --copy-bg: #f3f4f6; --copy-hover: #e5e7eb;
  --input-bg: #ffffff; --input-border: #d1d5db; --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

/* Dark theme */
.transportfyi-widget[data-theme="dark"] {
  --bg: #1a1a1a; --text: #f3f4f6; --border: #374151; --accent: var(--site-accent);
  --muted: #9ca3af; --surface: #111827; --badge-bg: #374151; --badge-text: #d1d5db;
  --link: color-mix(in srgb, var(--site-accent) 80%, #fff); --copy-bg: #374151; --copy-hover: #4b5563;
  --input-bg: #111111; --input-border: #4b5563; --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}

/* Sepia theme */
.transportfyi-widget[data-theme="sepia"] {
  --bg: #f5f0e8; --text: #3d3529; --border: #d4c5a9; --accent: var(--site-accent);
  --muted: #8b7d6b; --surface: #ede8df; --badge-bg: #e8e0d0; --badge-text: #5c4f3d;
  --link: color-mix(in srgb, var(--site-accent) 70%, #3d3529); --copy-bg: #e8e0d0; --copy-hover: #ddd4c0;
  --input-bg: #f5f0e8; --input-border: #c4b49a; --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(61, 53, 41, 0.12);
}

.transportfyi-widget *, .transportfyi-widget *::before, .transportfyi-widget *::after { box-sizing: border-box; }

/* Loading */
.transportfyi-loading {
  padding: 20px 16px; text-align: center; color: var(--muted); font-size: 13px;
  display: flex; align-items: center; justify-content: center; gap: 8px;
}
.transportfyi-spinner {
  width: 16px; height: 16px; border: 2px solid var(--border); border-top-color: var(--accent);
  border-radius: 50%; animation: transportfyi-spin 0.7s linear infinite; display: inline-block; flex-shrink: 0;
}
@keyframes transportfyi-spin { to { transform: rotate(360deg); } }

/* Error */
.transportfyi-error { padding: 16px; color: var(--muted); font-size: 13px; text-align: center; }
.transportfyi-error p { margin: 0 0 8px 0; }
.transportfyi-error a { color: var(--link); text-decoration: none; }
.transportfyi-error a:hover { text-decoration: underline; }

/* Badge */
.transportfyi-badge {
  display: inline-block; font-size: 10px; font-weight: 600; padding: 2px 7px;
  border-radius: 4px; background: var(--badge-bg); color: var(--badge-text);
  text-transform: uppercase; letter-spacing: 0.04em;
}

/* Search */
.transportfyi-search-wrap { padding: 12px 16px; }
.transportfyi-search-form { display: flex; gap: 8px; }
.transportfyi-search-input {
  flex: 1; padding: 8px 12px; border: 1px solid var(--input-border); border-radius: 6px;
  background: var(--input-bg); color: var(--text); font-size: 13px; font-family: inherit;
  outline: none; transition: border-color 0.15s;
}
.transportfyi-search-input:focus { border-color: var(--input-focus); box-shadow: 0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent); }
.transportfyi-search-input::placeholder { color: var(--muted); }
.transportfyi-search-btn {
  background: var(--accent); color: #fff; border: none; border-radius: 6px; padding: 8px 14px;
  font-size: 13px; font-weight: 500; cursor: pointer; font-family: inherit;
  transition: opacity 0.15s; white-space: nowrap;
}
.transportfyi-search-btn:hover { opacity: 0.9; }
.transportfyi-search-results { padding: 0 16px 12px; }
.transportfyi-result-item { padding: 8px 0; border-bottom: 1px solid var(--border); }
.transportfyi-result-item:last-child { border-bottom: none; }
.transportfyi-result-title { font-size: 13px; font-weight: 600; color: var(--text); margin: 0 0 3px 0; }
.transportfyi-result-meta { font-size: 11px; color: var(--muted); display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }

/* Powered by footer */
.transportfyi-powered {
  display: block; text-align: center; padding: 8px 16px; font-size: 11px; color: var(--muted);
  border-top: 1px solid var(--border);
}
.transportfyi-powered a { color: var(--link); text-decoration: none; font-weight: 500; }
.transportfyi-powered a:hover { text-decoration: underline; }

/* Copy button */
.transportfyi-copy-btn {
  background: var(--copy-bg); color: var(--text); border: none; border-radius: 5px;
  padding: 4px 9px; font-size: 11px; cursor: pointer; display: inline-flex;
  align-items: center; gap: 4px; transition: background 0.15s; font-family: inherit;
}
.transportfyi-copy-btn:hover { background: var(--copy-hover); }
.transportfyi-copy-btn svg { width: 11px; height: 11px; }

/* Mono */
.transportfyi-mono { font-family: ui-monospace, 'SF Mono', 'Cascadia Code', 'Consolas', monospace; font-size: 13px; }

/* Spec bar (for aircraft specs visualization) */
.transportfyi-spec-bar-wrap { padding: 0 18px 12px; }
.transportfyi-spec-bar { display: flex; flex-direction: column; gap: 8px; }
.transportfyi-spec-bar-item { display: flex; align-items: center; gap: 8px; }
.transportfyi-spec-bar-label { font-size: 11px; color: var(--muted); min-width: 60px; text-align: right; }
.transportfyi-spec-bar-track { flex: 1; height: 8px; background: var(--surface); border-radius: 4px; overflow: hidden; }
.transportfyi-spec-bar-fill { height: 100%; background: var(--accent); border-radius: 4px; transition: width 0.3s ease; }
.transportfyi-spec-bar-value { font-size: 11px; color: var(--text); min-width: 50px; font-weight: 600; }

/* Amenity icons */
.transportfyi-amenities { display: flex; gap: 6px; flex-wrap: wrap; padding: 4px 0; }
.transportfyi-amenity {
  display: inline-flex; align-items: center; gap: 4px; font-size: 11px; padding: 3px 8px;
  border-radius: 12px; background: var(--surface); color: var(--muted); border: 1px solid var(--border);
}
.transportfyi-amenity svg { width: 12px; height: 12px; }
.transportfyi-amenity--active { background: color-mix(in srgb, var(--accent) 10%, var(--bg)); color: var(--accent); border-color: color-mix(in srgb, var(--accent) 30%, var(--border)); }

${getStyleCSS(style)}
  `;
}

// src/shadow.ts
function createShadow(el, config) {
  const widgetStyle = el.dataset.styleVariant || "modern";
  const shadow = el.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.textContent = getThemeCSS(config.accent, widgetStyle);
  shadow.appendChild(style);
  return shadow;
}
function resolveTheme(el) {
  const raw = el.dataset.theme || "light";
  if (raw === "auto") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return raw;
}
function createWidgetRoot(shadow, el, extraClass) {
  const theme = resolveTheme(el);
  const size = el.dataset.size || "default";
  const div = document.createElement("div");
  div.className = ["transportfyi-widget", extraClass].filter(Boolean).join(" ");
  div.setAttribute("data-theme", theme);
  div.setAttribute("data-size", size);
  shadow.appendChild(div);
  if (el.dataset.theme === "auto") {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      div.setAttribute("data-theme", e.matches ? "dark" : "light");
    });
  }
  return div;
}
function renderLoading(container) {
  container.innerHTML = `
    <div class="transportfyi-loading">
      <span class="transportfyi-spinner"></span>
      Loading\u2026
    </div>
  `;
}
function renderError(container, message, config) {
  container.innerHTML = `
    <div class="transportfyi-error">
      <p>${message}</p>
      <a href="https://${config.domain}" target="_blank" rel="noopener">
        Visit ${config.name}
      </a>
    </div>
  `;
}
var externalLinkIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
function poweredByHTML(config) {
  return `<span class="transportfyi-powered">Powered by <a href="https://${config.domain}" target="_blank" rel="noopener">${config.name}</a></span>`;
}

// src/api.ts
var CACHE_TTL_MS = 5 * 60 * 1e3;
function cacheKey(url) {
  return `transportfyi_embed_${url}`;
}
function getFromCache(url) {
  try {
    const raw = sessionStorage.getItem(cacheKey(url));
    if (!raw) return null;
    const entry = JSON.parse(raw);
    if (Date.now() - entry.ts > CACHE_TTL_MS) {
      sessionStorage.removeItem(cacheKey(url));
      return null;
    }
    return entry.data;
  } catch (e) {
    return null;
  }
}
function setInCache(url, data) {
  try {
    const entry = { data, ts: Date.now() };
    sessionStorage.setItem(cacheKey(url), JSON.stringify(entry));
  } catch (e) {
  }
}
async function fetchAPI(baseUrl, path, params) {
  const base = baseUrl.endsWith("/") ? baseUrl : baseUrl + "/";
  const relativePath = path.startsWith("/") ? path.slice(1) : path;
  const url = new URL(relativePath, base);
  if (params) {
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  }
  const urlStr = url.toString();
  const cached = getFromCache(urlStr);
  if (cached !== null) return cached;
  const response = await fetch(urlStr, {
    headers: { Accept: "application/json" }
  });
  if (!response.ok) {
    throw new Error(`API error ${response.status}: ${urlStr}`);
  }
  const data = await response.json();
  setInCache(urlStr, data);
  return data;
}

// src/cards/shared.ts
function esc(s) {
  if (!s) return "";
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function kvRow(label, value) {
  if (value === null || value === void 0 || value === "") return "";
  return `<div class="transportfyi-kv-row"><span class="transportfyi-kv-label">${esc(label)}</span><span class="transportfyi-kv-value">${esc(String(value))}</span></div>`;
}
function fmtNum(n) {
  if (n === null || n === void 0) return "";
  return n.toLocaleString("en-US");
}
function statCell(value, label) {
  return `<div class="transportfyi-stat-cell"><div class="transportfyi-stat-num">${esc(String(value))}</div><div class="transportfyi-stat-label">${esc(label)}</div></div>`;
}
function airportTypeLabel(type) {
  const map = {
    large_airport: "Large Airport",
    medium_airport: "Medium Airport",
    small_airport: "Small Airport",
    heliport: "Heliport",
    seaplane_base: "Seaplane Base",
    closed: "Closed",
    balloonport: "Balloonport"
  };
  return map[type] || type;
}
function stationTypeLabel(type) {
  const map = {
    major: "Major Station",
    regional: "Regional Station",
    suburban: "Suburban Station",
    local: "Local Station",
    metro: "Metro Station",
    tram: "Tram Stop",
    heritage: "Heritage Station"
  };
  return map[type] || type;
}
function renderGlossaryCard(data, config) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const name = String((_c = (_b = (_a = data.term) != null ? _a : data.name) != null ? _b : data.slug) != null ? _c : "");
  const definition = String((_f = (_e = (_d = data.definition) != null ? _d : data.short_description) != null ? _e : data.short_definition) != null ? _f : "");
  const abbr = data.abbreviation ? String(data.abbreviation) : "";
  const categoryLabel = String((_h = (_g = data.category_name) != null ? _g : data.category) != null ? _h : "");
  const slug = String((_i = data.slug) != null ? _i : "");
  let termUrl;
  if (config.site === "airportfyi") {
    termUrl = `https://${config.domain}/glossary/${esc(slug)}/`;
  } else {
    termUrl = `https://${config.domain}/glossary/${esc(slug)}/`;
  }
  const glossaryUrl = `https://${config.domain}/glossary/`;
  return `
    <div class="transportfyi-header">
      <div>
        <div class="transportfyi-header-title">${esc(name)}${abbr ? ` <span class="transportfyi-badge" style="background:${config.accent};color:#fff">${esc(abbr)}</span>` : ""}</div>
        ${categoryLabel ? `<div class="transportfyi-header-subtitle">${esc(categoryLabel)}</div>` : ""}
      </div>
    </div>
    <div class="transportfyi-body" style="font-size:0.9rem;line-height:1.5;">
      ${esc(definition)}
    </div>
    <div class="transportfyi-view-link"><a href="${termUrl}" target="_blank" rel="noopener">${esc(name)} ${externalLinkIcon}</a></div>
    <div class="transportfyi-view-link"><a href="${glossaryUrl}" target="_blank" rel="noopener">Full glossary on ${esc(config.name)} ${externalLinkIcon}</a></div>
    ${poweredByHTML(config)}
  `;
}
function renderFAQCard(faqs, config) {
  if (!faqs || !faqs.length) return `<div class="transportfyi-body">No FAQs available.</div>${poweredByHTML(config)}`;
  const items = faqs.map((faq) => `
    <details class="transportfyi-faq-item" style="border-bottom:1px solid var(--border);padding:10px 18px;">
      <summary style="cursor:pointer;font-size:0.9rem;font-weight:600;color:var(--text);list-style:none;display:flex;justify-content:space-between;align-items:center;">
        ${esc(faq.question)}
        <span style="flex-shrink:0;margin-left:8px;font-size:0.75rem;color:var(--muted);">+</span>
      </summary>
      <div style="margin-top:8px;font-size:0.85rem;color:var(--muted);line-height:1.5;">
        ${esc(faq.answer)}
      </div>
    </details>
  `).join("");
  return `
    <div class="transportfyi-header">
      <div>
        <div class="transportfyi-header-title">Frequently Asked Questions</div>
        <div class="transportfyi-header-subtitle">${faqs.length} questions</div>
      </div>
    </div>
    ${items}
    ${poweredByHTML(config)}
  `;
}

// src/cards/airport.ts
function renderAirportCard(data, config) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const name = String((_a = data.name) != null ? _a : "");
  const iata = String((_b = data.iata_code) != null ? _b : "");
  const icao = String((_d = (_c = data.ident) != null ? _c : data.icao_code) != null ? _d : "");
  const type = String((_e = data.type) != null ? _e : "");
  const countryName = String((_f = data.country_name) != null ? _f : "");
  const regionName = String((_g = data.region_name) != null ? _g : "");
  const municipality = String((_h = data.municipality) != null ? _h : "");
  const elevationFt = data.elevation_ft != null ? Number(data.elevation_ft) : null;
  const runwayCount = data.runway_count != null ? Number(data.runway_count) : 0;
  const airlineCount = data.airline_count != null ? Number(data.airline_count) : 0;
  const destCount = data.destination_count != null ? Number(data.destination_count) : 0;
  const detailUrl = iata ? `https://${config.domain}/${esc(iata)}/` : `https://${config.domain}/`;
  const typeLabel = airportTypeLabel(type);
  return `
    <div class="transportfyi-header">
      <div class="transportfyi-img">
        <span class="transportfyi-code">${esc(iata || "?")}</span>
      </div>
      <div>
        <div class="transportfyi-header-title">${esc(name)}</div>
        <div class="transportfyi-header-subtitle">
          ${esc(municipality || countryName)}${icao ? ` \xB7 ICAO: ${esc(icao)}` : ""}
        </div>
      </div>
    </div>
    ${type ? `<div style="padding:8px 20px 0;"><span class="transportfyi-badge" style="background:${config.accent};color:#fff">${esc(typeLabel)}</span></div>` : ""}
    <div class="transportfyi-stat-grid">
      ${statCell(fmtNum(runwayCount) || "0", "Runways")}
      ${statCell(fmtNum(airlineCount) || "0", "Airlines")}
      ${statCell(fmtNum(destCount) || "0", "Destinations")}
    </div>
    <div class="transportfyi-kv-rows">
      ${kvRow("Country", countryName)}
      ${kvRow("Region", regionName)}
      ${elevationFt != null ? kvRow("Elevation", `${fmtNum(elevationFt)} ft`) : ""}
    </div>
    <div class="transportfyi-view-link"><a href="${detailUrl}" target="_blank" rel="noopener">View on ${esc(config.name)} ${externalLinkIcon}</a></div>
    ${poweredByHTML(config)}
  `;
}

// src/cards/airline.ts
function renderAirlineCard(data, config) {
  var _a, _b, _c, _d, _e, _f;
  const name = String((_a = data.name) != null ? _a : "");
  const slug = String((_b = data.slug) != null ? _b : "");
  const iata = String((_c = data.iata_code) != null ? _c : "");
  const icao = String((_d = data.icao_code) != null ? _d : "");
  const callsign = String((_e = data.callsign) != null ? _e : "");
  const countryName = String((_f = data.country_name) != null ? _f : "");
  const isActive = Boolean(data.is_active);
  const routeCount = data.route_count != null ? Number(data.route_count) : 0;
  const destCount = data.destination_count != null ? Number(data.destination_count) : 0;
  const countryCount = data.country_count != null ? Number(data.country_count) : 0;
  const detailUrl = `https://${config.domain}/${esc(slug)}/`;
  return `
    <div class="transportfyi-header">
      <div class="transportfyi-img">
        <span class="transportfyi-code">${esc(iata || "?")}</span>
      </div>
      <div>
        <div class="transportfyi-header-title">${esc(name)}</div>
        <div class="transportfyi-header-subtitle">${esc(countryName)}${icao ? ` \xB7 ICAO: ${esc(icao)}` : ""}</div>
      </div>
    </div>
    <div style="padding:8px 20px 0;display:flex;gap:6px;flex-wrap:wrap;">
      ${isActive ? '<span class="transportfyi-badge" style="background:#16a34a;color:#fff">Active</span>' : '<span class="transportfyi-badge" style="background:#dc2626;color:#fff">Inactive</span>'}
      ${callsign ? `<span class="transportfyi-badge">${esc(callsign)}</span>` : ""}
    </div>
    <div class="transportfyi-stat-grid">
      ${statCell(fmtNum(routeCount) || "0", "Routes")}
      ${statCell(fmtNum(destCount) || "0", "Destinations")}
      ${statCell(fmtNum(countryCount) || "0", "Countries")}
    </div>
    <div class="transportfyi-view-link"><a href="${detailUrl}" target="_blank" rel="noopener">View on ${esc(config.name)} ${externalLinkIcon}</a></div>
    ${poweredByHTML(config)}
  `;
}

// src/cards/aircraft.ts
function specBar(label, value, max, unit) {
  const pct = Math.min(100, Math.round(value / max * 100));
  return `
    <div class="transportfyi-spec-bar-item">
      <span class="transportfyi-spec-bar-label">${esc(label)}</span>
      <div class="transportfyi-spec-bar-track">
        <div class="transportfyi-spec-bar-fill" style="width:${pct}%"></div>
      </div>
      <span class="transportfyi-spec-bar-value">${fmtNum(value)} ${esc(unit)}</span>
    </div>
  `;
}
function statusBadge(status) {
  const colors = {
    in_production: "#16a34a",
    in_service: "#3b82f6",
    retired: "#9ca3af",
    development: "#d97706",
    limited: "#8b5cf6"
  };
  const labels = {
    in_production: "In Production",
    in_service: "In Service",
    retired: "Retired",
    development: "In Development",
    limited: "Limited"
  };
  const bg = colors[status] || "#6b7280";
  const label = labels[status] || status;
  return `<span class="transportfyi-badge" style="background:${bg};color:#fff">${esc(label)}</span>`;
}
function renderAircraftCard(data, config) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const name = String((_a = data.name) != null ? _a : "");
  const slug = String((_b = data.slug) != null ? _b : "");
  const iata = String((_c = data.iata_code) != null ? _c : "");
  const icao = String((_d = data.icao_code) != null ? _d : "");
  const manufacturer = String((_e = data.manufacturer_name) != null ? _e : "");
  const familyName = String((_f = data.family_name) != null ? _f : "");
  const status = String((_g = data.status) != null ? _g : "");
  const rangeKm = data.range_km != null ? Number(data.range_km) : 0;
  const maxSpeed = data.max_speed_kmh != null ? Number(data.max_speed_kmh) : 0;
  const cruiseSpeed = data.cruise_speed_kmh != null ? Number(data.cruise_speed_kmh) : 0;
  const typicalSeats = data.typical_seats != null ? Number(data.typical_seats) : 0;
  const maxSeats = data.max_seats != null ? Number(data.max_seats) : 0;
  const lengthM = data.length_m != null ? Number(data.length_m) : null;
  const wingspanM = data.wingspan_m != null ? Number(data.wingspan_m) : null;
  const heightM = data.height_m != null ? Number(data.height_m) : null;
  const engineCount = data.engine_count != null ? Number(data.engine_count) : null;
  const engineType = String((_h = data.engine_type) != null ? _h : "");
  const engineModel = String((_i = data.engine_model) != null ? _i : "");
  const firstFlight = data.first_flight_date ? String(data.first_flight_date).slice(0, 4) : "";
  const fleetCount = data.fleet_count != null ? Number(data.fleet_count) : 0;
  const detailUrl = `https://${config.domain}/${esc(slug)}/`;
  return `
    <div class="transportfyi-header">
      <div class="transportfyi-img">
        <span class="transportfyi-code">${esc(iata || icao || "\u2708")}</span>
      </div>
      <div>
        <div class="transportfyi-header-title">${esc(name)}</div>
        <div class="transportfyi-header-subtitle">${esc(manufacturer)}${familyName ? ` \xB7 ${esc(familyName)}` : ""}</div>
      </div>
    </div>
    <div style="padding:8px 20px 0;display:flex;gap:6px;flex-wrap:wrap;">
      ${status ? statusBadge(status) : ""}
      ${fleetCount > 0 ? `<span class="transportfyi-badge">${fmtNum(fleetCount)} in fleet</span>` : ""}
    </div>
    <div class="transportfyi-spec-bar-wrap">
      <div class="transportfyi-spec-bar">
        ${rangeKm > 0 ? specBar("Range", rangeKm, 18e3, "km") : ""}
        ${maxSpeed > 0 ? specBar("Max Speed", maxSpeed, 1e3, "km/h") : ""}
        ${typicalSeats > 0 ? specBar("Seats", typicalSeats, 600, "") : ""}
      </div>
    </div>
    <div class="transportfyi-kv-rows">
      ${cruiseSpeed > 0 ? kvRow("Cruise Speed", `${fmtNum(cruiseSpeed)} km/h`) : ""}
      ${maxSeats > 0 ? kvRow("Max Seats", fmtNum(maxSeats)) : ""}
      ${lengthM != null ? kvRow("Length", `${lengthM} m`) : ""}
      ${wingspanM != null ? kvRow("Wingspan", `${wingspanM} m`) : ""}
      ${heightM != null ? kvRow("Height", `${heightM} m`) : ""}
      ${engineCount != null ? kvRow("Engines", `${engineCount}\xD7 ${esc(engineType)}`) : ""}
      ${engineModel ? kvRow("Engine Model", engineModel) : ""}
      ${firstFlight ? kvRow("First Flight", firstFlight) : ""}
    </div>
    <div class="transportfyi-view-link"><a href="${detailUrl}" target="_blank" rel="noopener">View on ${esc(config.name)} ${externalLinkIcon}</a></div>
    ${poweredByHTML(config)}
  `;
}

// src/cards/station.ts
var wifiIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>`;
var loungeIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"/><path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0z"/><path d="M4 18v2"/><path d="M20 18v2"/></svg>`;
var luggageIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="7" width="12" height="14" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M8 21v1"/><path d="M16 21v1"/></svg>`;
function amenityPill(icon, label, active) {
  const cls = active ? "transportfyi-amenity transportfyi-amenity--active" : "transportfyi-amenity";
  return `<span class="${cls}">${icon} ${esc(label)}</span>`;
}
function renderStationCard(data, config) {
  var _a, _b, _c, _d, _e;
  const name = String((_a = data.name) != null ? _a : "");
  const slug = String((_b = data.slug) != null ? _b : "");
  const type = String((_c = data.type) != null ? _c : "");
  const countryName = String((_d = data.country_name) != null ? _d : "");
  const timezone = String((_e = data.timezone) != null ? _e : "");
  const isMainStation = Boolean(data.is_main_station);
  const platforms = data.platforms != null ? Number(data.platforms) : null;
  const hasWifi = Boolean(data.has_wifi);
  const hasLounge = Boolean(data.has_lounge);
  const hasLuggage = Boolean(data.has_luggage_storage);
  const yearOpened = data.year_opened != null ? Number(data.year_opened) : null;
  const operatorCount = data.operator_count != null ? Number(data.operator_count) : 0;
  const routeCount = data.route_count != null ? Number(data.route_count) : 0;
  const popularityScore = data.popularity_score != null ? Number(data.popularity_score) : 0;
  const detailUrl = `https://${config.domain}/station/${esc(slug)}/`;
  const typeLabel = stationTypeLabel(type);
  const showAmenities = hasWifi || hasLounge || hasLuggage;
  return `
    <div class="transportfyi-header">
      <div class="transportfyi-img">\u{1F689}</div>
      <div>
        <div class="transportfyi-header-title">${esc(name)}</div>
        <div class="transportfyi-header-subtitle">${esc(countryName)}</div>
      </div>
    </div>
    <div style="padding:8px 20px 0;display:flex;gap:6px;flex-wrap:wrap;">
      ${type ? `<span class="transportfyi-badge" style="background:${config.accent};color:#fff">${esc(typeLabel)}</span>` : ""}
      ${isMainStation ? '<span class="transportfyi-badge" style="background:#16a34a;color:#fff">Main Station</span>' : ""}
    </div>
    <div class="transportfyi-stat-grid">
      ${statCell(fmtNum(operatorCount) || "0", "Operators")}
      ${statCell(fmtNum(routeCount) || "0", "Routes")}
      ${statCell(platforms != null ? String(platforms) : "-", "Platforms")}
    </div>
    ${showAmenities ? `
      <div style="padding:8px 20px;">
        <div class="transportfyi-amenities">
          ${amenityPill(wifiIcon, "WiFi", hasWifi)}
          ${amenityPill(loungeIcon, "Lounge", hasLounge)}
          ${amenityPill(luggageIcon, "Luggage", hasLuggage)}
        </div>
      </div>
    ` : ""}
    <div class="transportfyi-kv-rows">
      ${kvRow("Timezone", timezone)}
      ${yearOpened != null ? kvRow("Opened", String(yearOpened)) : ""}
      ${popularityScore > 0 ? kvRow("Popularity", String(popularityScore)) : ""}
    </div>
    <div class="transportfyi-view-link"><a href="${detailUrl}" target="_blank" rel="noopener">View on ${esc(config.name)} ${externalLinkIcon}</a></div>
    ${poweredByHTML(config)}
  `;
}

// src/widgets/entity.ts
function getEntityPath(config, slug) {
  switch (config.site) {
    case "airportfyi":
      return `airports/${slug}/`;
    case "airlinefyi":
      return `airlines/${slug}/`;
    case "planefyi":
      return `aircraft-types/${slug}/`;
    case "trainfyi":
      return `stations/${slug}/`;
    default:
      return `${config.entitySlug}/${slug}/`;
  }
}
function initEntityWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "transportfyi-entity-widget");
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "transportfyi-entity-widget");
  renderLoading(container);
  const path = getEntityPath(config, slug);
  fetchAPI(config.apiBase, path).then((data) => {
    var _a2;
    let html;
    switch (config.site) {
      case "airportfyi":
        html = renderAirportCard(data, config);
        break;
      case "airlinefyi":
        html = renderAirlineCard(data, config);
        break;
      case "planefyi":
        html = renderAircraftCard(data, config);
        break;
      case "trainfyi":
        html = renderStationCard(data, config);
        break;
      default: {
        const name = String((_a2 = data.name) != null ? _a2 : slug);
        html = `
            <div style="padding:16px;">
              <div style="font-size:1rem;font-weight:600;margin-bottom:8px;">${esc(name)}</div>
              <a href="https://${config.domain}" target="_blank" rel="noopener"
                 style="color:${config.accent};text-decoration:none;font-size:0.85rem;">
                View on ${esc(config.name)} ${externalLinkIcon}
              </a>
            </div>
          `;
        break;
      }
    }
    container.innerHTML = html;
  }).catch(() => {
    renderError(container, `Unable to load "${esc(slug)}". Please try again later.`, config);
  });
}

// src/widgets/compare.ts
function getEntityPath2(config, slug) {
  switch (config.site) {
    case "airportfyi":
      return `airports/${slug}/`;
    case "airlinefyi":
      return `airlines/${slug}/`;
    case "planefyi":
      return `aircraft-types/${slug}/`;
    case "trainfyi":
      return `stations/${slug}/`;
    default:
      return `${config.entitySlug}/${slug}/`;
  }
}
function getDetailUrl(config, data) {
  var _a, _b;
  const slug = String((_a = data.slug) != null ? _a : "");
  switch (config.site) {
    case "airportfyi":
      return `https://${config.domain}/${String((_b = data.iata_code) != null ? _b : slug)}/`;
    case "trainfyi":
      return `https://${config.domain}/station/${slug}/`;
    default:
      return `https://${config.domain}/${slug}/`;
  }
}
function getCompareFields(config) {
  const num = (v) => fmtNum(Number(v) || 0);
  switch (config.site) {
    case "airportfyi":
      return [
        { key: "country_name", label: "Country" },
        { key: "type", label: "Type" },
        { key: "runway_count", label: "Runways", fmt: num },
        { key: "airline_count", label: "Airlines", fmt: num },
        { key: "destination_count", label: "Destinations", fmt: num },
        { key: "elevation_ft", label: "Elevation (ft)", fmt: num }
      ];
    case "airlinefyi":
      return [
        { key: "country_name", label: "Country" },
        { key: "iata_code", label: "IATA" },
        { key: "route_count", label: "Routes", fmt: num },
        { key: "destination_count", label: "Destinations", fmt: num },
        { key: "country_count", label: "Countries", fmt: num }
      ];
    case "planefyi":
      return [
        { key: "manufacturer_name", label: "Manufacturer" },
        { key: "typical_seats", label: "Seats", fmt: num },
        { key: "range_km", label: "Range (km)", fmt: num },
        { key: "max_speed_kmh", label: "Max Speed (km/h)", fmt: num },
        { key: "wingspan_m", label: "Wingspan (m)" },
        { key: "engine_count", label: "Engines", fmt: num }
      ];
    case "trainfyi":
      return [
        { key: "country_name", label: "Country" },
        { key: "type", label: "Type" },
        { key: "operator_count", label: "Operators", fmt: num },
        { key: "route_count", label: "Routes", fmt: num },
        { key: "platforms", label: "Platforms" }
      ];
    default:
      return [];
  }
}
function initCompareWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slugs = ((_a = dataset.slugs) != null ? _a : "").split(",").map((s) => s.trim()).filter(Boolean);
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "transportfyi-compare-widget");
  if (slugs.length < 2) {
    renderError(container, "Missing data-slugs attribute (comma-separated pair).", config);
    return;
  }
  renderLoading(container);
  const [slugA, slugB] = slugs;
  Promise.all([
    fetchAPI(config.apiBase, getEntityPath2(config, slugA)),
    fetchAPI(config.apiBase, getEntityPath2(config, slugB))
  ]).then(([a, b]) => {
    var _a2, _b;
    const nameA = String((_a2 = a.name) != null ? _a2 : slugA);
    const nameB = String((_b = b.name) != null ? _b : slugB);
    const urlA = getDetailUrl(config, a);
    const urlB = getDetailUrl(config, b);
    const fields = getCompareFields(config);
    const rows = fields.map((f) => {
      var _a3, _b2;
      const valA = f.fmt ? f.fmt(a[f.key]) : String((_a3 = a[f.key]) != null ? _a3 : "-");
      const valB = f.fmt ? f.fmt(b[f.key]) : String((_b2 = b[f.key]) != null ? _b2 : "-");
      return `<tr><td style="color:var(--muted);font-size:12px;padding:6px 8px;">${esc(f.label)}</td><td style="font-weight:600;padding:6px 8px;text-align:center;">${esc(valA)}</td><td style="font-weight:600;padding:6px 8px;text-align:center;">${esc(valB)}</td></tr>`;
    }).join("");
    container.innerHTML = `
        <div class="transportfyi-header">
          <div>
            <div class="transportfyi-header-title">${esc(nameA)} vs ${esc(nameB)}</div>
            <div class="transportfyi-header-subtitle">Side-by-side comparison</div>
          </div>
        </div>
        <div style="padding:0 16px 8px;overflow-x:auto;">
          <table style="width:100%;border-collapse:collapse;font-size:13px;">
            <thead><tr>
              <th style="text-align:left;padding:8px;font-size:11px;color:var(--muted);"></th>
              <th style="text-align:center;padding:8px;font-weight:700;">${esc(nameA)}</th>
              <th style="text-align:center;padding:8px;font-weight:700;">${esc(nameB)}</th>
            </tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
        <div style="display:flex;gap:8px;padding:8px 16px;">
          <a href="${esc(urlA)}" target="_blank" rel="noopener" style="flex:1;text-align:center;color:var(--link);font-size:12px;text-decoration:none;">${esc(nameA)} ${externalLinkIcon}</a>
          <a href="${esc(urlB)}" target="_blank" rel="noopener" style="flex:1;text-align:center;color:var(--link);font-size:12px;text-decoration:none;">${esc(nameB)} ${externalLinkIcon}</a>
        </div>
        ${poweredByHTML(config)}
      `;
  }).catch(() => {
    renderError(container, "Unable to load comparison data.", config);
  });
}

// src/rich-snippets.ts
function injectDefinedTerm(data, domain, siteName) {
  if (document.querySelector('script[data-transportfyi-snippet="term"]')) return;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: data.name,
    description: data.definition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: `${siteName} Glossary`,
      url: `https://${domain}/glossary/`
    }
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-transportfyi-snippet", "term");
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}
function injectFAQPage(faqs, domain, _siteName) {
  if (document.querySelector('script[data-transportfyi-snippet="faq"]')) return;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    })),
    url: `https://${domain}/`
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-transportfyi-snippet", "faq");
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}

// src/widgets/glossary.ts
function getGlossaryPath(config, slug) {
  switch (config.site) {
    case "airportfyi":
      return `glossary-terms/${slug}/`;
    case "airlinefyi":
      return `glossary/${slug}/`;
    case "planefyi":
      return `aviation-terms/${slug}/`;
    case "trainfyi":
      return null;
    // no glossary API
    default:
      return null;
  }
}
function initGlossaryWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "transportfyi-glossary-widget");
  if (!slug) {
    renderError(container, "Missing data-slug attribute.", config);
    return;
  }
  const path = getGlossaryPath(config, slug);
  if (!path) {
    renderError(container, `Glossary not available for ${config.name}.`, config);
    return;
  }
  renderLoading(container);
  fetchAPI(config.apiBase, path).then((data) => {
    var _a2, _b, _c, _d, _e;
    container.innerHTML = renderGlossaryCard(data, config);
    if (dataset.noSnippet !== "true") {
      const term = String((_b = (_a2 = data.term) != null ? _a2 : data.name) != null ? _b : "");
      const def = String((_e = (_d = (_c = data.definition) != null ? _c : data.short_description) != null ? _d : data.short_definition) != null ? _e : "");
      if (term && def) {
        injectDefinedTerm({ name: term, definition: def }, config.domain, config.name);
      }
    }
  }).catch(() => {
    renderError(container, `Unable to load glossary term "${esc(slug)}".`, config);
  });
}

// src/widgets/search.ts
function getSearchPath(config) {
  switch (config.site) {
    case "airportfyi":
      return "airports/";
    case "airlinefyi":
      return "airlines/";
    case "planefyi":
      return "aircraft-types/";
    case "trainfyi":
      return "stations/";
    default:
      return `${config.entitySlug}/`;
  }
}
function getDetailUrl2(config, item) {
  var _a, _b;
  const slug = String((_a = item.slug) != null ? _a : "");
  switch (config.site) {
    case "airportfyi": {
      const iata = String((_b = item.iata_code) != null ? _b : slug);
      return `https://${config.domain}/${iata}/`;
    }
    case "airlinefyi":
      return `https://${config.domain}/${slug}/`;
    case "planefyi":
      return `https://${config.domain}/${slug}/`;
    case "trainfyi":
      return `https://${config.domain}/station/${slug}/`;
    default:
      return `https://${config.domain}/${slug}/`;
  }
}
function getSubtitle(config, item) {
  var _a, _b, _c, _d, _e, _f, _g;
  switch (config.site) {
    case "airportfyi": {
      const iata = String((_a = item.iata_code) != null ? _a : "");
      const country = String((_b = item.country_name) != null ? _b : "");
      return [iata, country].filter(Boolean).join(" \xB7 ");
    }
    case "airlinefyi": {
      const iata = String((_c = item.iata_code) != null ? _c : "");
      const country = String((_d = item.country_name) != null ? _d : "");
      return [iata, country].filter(Boolean).join(" \xB7 ");
    }
    case "planefyi": {
      const mfg = String((_e = item.manufacturer_name) != null ? _e : "");
      return mfg;
    }
    case "trainfyi": {
      const country = String((_f = item.country_name) != null ? _f : "");
      const type = String((_g = item.type) != null ? _g : "");
      return [type, country].filter(Boolean).join(" \xB7 ");
    }
    default:
      return "";
  }
}
function initSearchWidget(el, config) {
  const dataset = el.dataset;
  const placeholder = dataset.placeholder || `Search ${config.entityName}...`;
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "transportfyi-search-widget");
  container.innerHTML = `
    <div class="transportfyi-search-wrap">
      <form class="transportfyi-search-form">
        <input type="text" class="transportfyi-search-input" placeholder="${esc(placeholder)}" autocomplete="off" />
        <button type="submit" class="transportfyi-search-btn">Search</button>
      </form>
    </div>
    <div class="transportfyi-search-results" style="display:none;"></div>
    ${poweredByHTML(config)}
  `;
  const form = container.querySelector("form");
  const input = container.querySelector("input");
  const results = container.querySelector(".transportfyi-search-results");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = input.value.trim();
    if (!q) return;
    results.style.display = "block";
    results.innerHTML = '<div style="padding:8px 0;color:var(--muted);font-size:12px;">Searching\u2026</div>';
    fetchAPI(
      config.apiBase,
      getSearchPath(config),
      { search: q, limit: "5" }
    ).then((resp) => {
      const items = resp.results || [];
      if (!items.length) {
        results.innerHTML = `<div style="padding:8px 0;color:var(--muted);font-size:12px;">No results. <a href="https://${config.domain}${config.searchPath}?q=${encodeURIComponent(q)}" target="_blank" rel="noopener" style="color:var(--link);">Search on ${esc(config.name)}</a></div>`;
        return;
      }
      results.innerHTML = items.map((item) => {
        var _a, _b;
        const name = String((_b = (_a = item.name) != null ? _a : item.slug) != null ? _b : "");
        const url = getDetailUrl2(config, item);
        const sub = getSubtitle(config, item);
        return `
            <div class="transportfyi-result-item">
              <a href="${esc(url)}" target="_blank" rel="noopener" class="transportfyi-result-title" style="color:var(--link);text-decoration:none;">${esc(name)}</a>
              ${sub ? `<div class="transportfyi-result-meta">${esc(sub)}</div>` : ""}
            </div>
          `;
      }).join("");
    }).catch(() => {
      results.innerHTML = `<div style="padding:8px 0;color:var(--muted);font-size:12px;">Search failed. <a href="https://${config.domain}${config.searchPath}?q=${encodeURIComponent(q)}" target="_blank" rel="noopener" style="color:var(--link);">Try on ${esc(config.name)}</a></div>`;
    });
  });
}

// src/widgets/faq.ts
function initFAQWidget(el, config) {
  const dataset = el.dataset;
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "transportfyi-faq-widget");
  renderLoading(container);
  fetchAPI(
    config.apiBase,
    "faqs/",
    { limit: "10" }
  ).then((resp) => {
    const faqs = resp.results || [];
    container.innerHTML = renderFAQCard(faqs, config);
    if (dataset.noSnippet !== "true" && faqs.length > 0) {
      injectFAQPage(faqs, config.domain, config.name);
    }
  }).catch(() => {
    renderError(container, "Unable to load FAQs.", config);
  });
}

// src/tools/spec-compare.ts
function dualBar(label, valA, valB, unit, nameA, nameB, accent) {
  const max = Math.max(valA, valB, 1);
  const pctA = Math.round(valA / max * 100);
  const pctB = Math.round(valB / max * 100);
  return `
    <div style="margin-bottom:12px;">
      <div style="font-size:11px;color:var(--muted);margin-bottom:4px;">${esc(label)}</div>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:3px;">
        <span style="font-size:10px;color:var(--muted);min-width:60px;text-align:right;">${esc(nameA)}</span>
        <div style="flex:1;height:6px;background:var(--surface);border-radius:3px;overflow:hidden;">
          <div style="height:100%;width:${pctA}%;background:${accent};border-radius:3px;"></div>
        </div>
        <span style="font-size:11px;font-weight:600;min-width:55px;">${fmtNum(valA)} ${esc(unit)}</span>
      </div>
      <div style="display:flex;align-items:center;gap:8px;">
        <span style="font-size:10px;color:var(--muted);min-width:60px;text-align:right;">${esc(nameB)}</span>
        <div style="flex:1;height:6px;background:var(--surface);border-radius:3px;overflow:hidden;">
          <div style="height:100%;width:${pctB}%;background:color-mix(in srgb, ${accent} 50%, var(--muted));border-radius:3px;"></div>
        </div>
        <span style="font-size:11px;font-weight:600;min-width:55px;">${fmtNum(valB)} ${esc(unit)}</span>
      </div>
    </div>
  `;
}
function initSpecCompareWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slugs = ((_a = dataset.slugs) != null ? _a : "").split(",").map((s) => s.trim()).filter(Boolean);
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "transportfyi-spec-compare-widget");
  if (slugs.length < 2) {
    renderError(container, "Provide data-slugs with two aircraft slugs.", config);
    return;
  }
  renderLoading(container);
  const [slugA, slugB] = slugs;
  Promise.all([
    fetchAPI(config.apiBase, `aircraft-types/${slugA}/`),
    fetchAPI(config.apiBase, `aircraft-types/${slugB}/`)
  ]).then(([a, b]) => {
    container.innerHTML = `
        <div class="transportfyi-header">
          <div>
            <div class="transportfyi-header-title">Aircraft Spec Compare</div>
            <div class="transportfyi-header-subtitle">${esc(a.name)} vs ${esc(b.name)}</div>
          </div>
        </div>
        <div style="padding:16px 20px;">
          ${dualBar("Range", a.range_km || 0, b.range_km || 0, "km", a.name, b.name, config.accent)}
          ${dualBar("Max Speed", a.max_speed_kmh || 0, b.max_speed_kmh || 0, "km/h", a.name, b.name, config.accent)}
          ${dualBar("Seats", a.typical_seats || 0, b.typical_seats || 0, "", a.name, b.name, config.accent)}
          ${dualBar("Wingspan", Number(a.wingspan_m) || 0, Number(b.wingspan_m) || 0, "m", a.name, b.name, config.accent)}
        </div>
        ${poweredByHTML(config)}
      `;
  }).catch(() => {
    renderError(container, "Unable to load aircraft data.", config);
  });
}

// src/inline/seats-badge.ts
function initSeatsBadgeWidget(el, config) {
  var _a;
  const slug = (_a = el.dataset.slug) != null ? _a : "";
  if (!slug) return;
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el);
  container.style.display = "inline-block";
  container.style.maxWidth = "none";
  container.style.border = "none";
  container.style.borderRadius = "4px";
  fetchAPI(config.apiBase, `aircraft-types/${slug}/`).then((data) => {
    var _a2, _b, _c;
    const typical = Number((_a2 = data.typical_seats) != null ? _a2 : 0);
    const max = Number((_b = data.max_seats) != null ? _b : 0);
    const name = String((_c = data.name) != null ? _c : slug);
    const label = max > typical ? `${fmtNum(typical)}\u2013${fmtNum(max)} seats` : `${fmtNum(typical)} seats`;
    container.innerHTML = `<span class="transportfyi-badge" style="background:${config.accent};color:#fff">${esc(name)}: ${label}</span>`;
  }).catch(() => {
    container.innerHTML = "";
  });
}

// src/_entry_planefyi.ts
function initWidget(el, type, config) {
  const widgetStyle = el.dataset.style || "modern";
  void widgetStyle;
  switch (type) {
    case "entity":
      initEntityWidget(el, config);
      break;
    case "compare":
      initCompareWidget(el, config);
      break;
    case "glossary":
      initGlossaryWidget(el, config);
      break;
    case "search":
      initSearchWidget(el, config);
      break;
    case "faq":
      initFAQWidget(el, config);
      break;
    case "spec-compare":
      initSpecCompareWidget(el, config);
      break;
    case "seats-badge":
      initSeatsBadgeWidget(el, config);
      break;
    default:
      break;
  }
}
function lazyInit(el, callback) {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(el);
          callback();
        }
      });
    }, { rootMargin: "200px" });
    observer.observe(el);
  } else {
    callback();
  }
}
function processElement(el, config) {
  if (el.shadowRoot) return;
  const dataKey = config.attribute.replace("data-", "");
  const camelKey = dataKey.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  const widgetType = el.dataset[camelKey];
  if (!widgetType) return;
  lazyInit(el, () => {
    if (!el.shadowRoot) initWidget(el, widgetType, config);
  });
}
function initAll(config) {
  document.querySelectorAll(`[${config.attribute}]`).forEach((el) => processElement(el, config));
}
(function bootstrap() {
  const config = '{"site":"planefyi","name":"PlaneFYI","domain":"planefyi.com","accent":"#0284C7","attribute":"data-planefyi","apiBase":"https://planefyi.com/api/v1/","searchPath":"/search/","entityName":"Aircraft","entitySlug":"aircraft-types"}';
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initAll(config));
  } else {
    initAll(config);
  }
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        var _a;
        if (node.nodeType !== Node.ELEMENT_NODE) return;
        const el = node;
        if (el.hasAttribute(config.attribute)) processElement(el, config);
        (_a = el.querySelectorAll) == null ? void 0 : _a.call(el, `[${config.attribute}]`).forEach((child) => processElement(child, config));
      });
    });
  });
  observer.observe(document.body || document.documentElement, { childList: true, subtree: true });
})();
function makeWidgetElement(widgetType, initFn, domainAttrs) {
  const observed = [...domainAttrs, "theme", "style-variant", "size"];
  return class extends HTMLElement {
    static get observedAttributes() {
      return observed;
    }
    connectedCallback() {
      if (this.shadowRoot) return;
      this._syncDataAttrs();
      initFn(this, '{"site":"planefyi","name":"PlaneFYI","domain":"planefyi.com","accent":"#0284C7","attribute":"data-planefyi","apiBase":"https://planefyi.com/api/v1/","searchPath":"/search/","entityName":"Aircraft","entitySlug":"aircraft-types"}');
    }
    attributeChangedCallback(_name, oldVal, newVal) {
      if (oldVal === newVal || !this.shadowRoot) return;
      const shadow = this.shadowRoot;
      while (shadow.firstChild) shadow.firstChild.remove();
      this._syncDataAttrs();
      initFn(this, '{"site":"planefyi","name":"PlaneFYI","domain":"planefyi.com","accent":"#0284C7","attribute":"data-planefyi","apiBase":"https://planefyi.com/api/v1/","searchPath":"/search/","entityName":"Aircraft","entitySlug":"aircraft-types"}');
    }
    _syncDataAttrs() {
      const attrKey = '{"site":"planefyi","name":"PlaneFYI","domain":"planefyi.com","accent":"#0284C7","attribute":"data-planefyi","apiBase":"https://planefyi.com/api/v1/","searchPath":"/search/","entityName":"Aircraft","entitySlug":"aircraft-types"}'.attribute.replace("data-", "");
      this.dataset[attrKey] = widgetType;
      for (const a of domainAttrs) {
        const val = this.getAttribute(a);
        if (val !== null) this.dataset[a] = val;
      }
      const theme = this.getAttribute("theme");
      if (theme !== null) this.dataset.theme = theme;
      const styleVariant = this.getAttribute("style-variant");
      if (styleVariant !== null) this.dataset.style = styleVariant;
      const size = this.getAttribute("size");
      if (size !== null) this.dataset.size = size;
    }
  };
}
(function registerElements() {
  if (typeof customElements === "undefined") return;
  const site = '{"site":"planefyi","name":"PlaneFYI","domain":"planefyi.com","accent":"#0284C7","attribute":"data-planefyi","apiBase":"https://planefyi.com/api/v1/","searchPath":"/search/","entityName":"Aircraft","entitySlug":"aircraft-types"}'.site;
  const defs = [
    [`${site}-entity`, initEntityWidget, ["slug"]],
    [`${site}-compare`, initCompareWidget, ["slugs"]],
    [`${site}-glossary`, initGlossaryWidget, ["slug", "letter"]],
    [`${site}-search`, initSearchWidget, ["placeholder", "query"]],
    [`${site}-faq`, initFAQWidget, ["slug", "category"]],
    [`${site}-spec-compare`, initSpecCompareWidget, ["slug1", "slug2"]]
  ];
  for (const [tagName, initFn, attrs] of defs) {
    if (!customElements.get(tagName)) {
      const widgetType = tagName.slice(site.length + 1);
      customElements.define(tagName, makeWidgetElement(widgetType, initFn, attrs));
    }
  }
})();

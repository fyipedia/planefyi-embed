# planefyi-embed

[![npm](https://img.shields.io/npm/v/planefyi-embed)](https://www.npmjs.com/package/planefyi-embed)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://www.npmjs.com/package/planefyi-embed)

Embed **PlaneFYI** widgets — aircraft, glossary terms, interactive tools, and inline elements — on any website. **7 widget types**, zero dependencies, Shadow DOM style isolation, 4 built-in themes (light, dark, sepia, auto), 2 styles (modern, clean), and live data from the [PlaneFYI](https://planefyi.com) database.

Every widget includes a "Powered by PlaneFYI" backlink directing readers to the full reference.

> **Try the interactive widget builder at [widget.planefyi.com](https://widget.planefyi.com)**

## Quick Start

```html
<!-- Place widget div where you want it to appear -->
<div data-planefyi="entity" data-slug="aircraft-types" data-theme="light"></div>

<!-- Load the embed script once, anywhere on the page -->
<script src="https://cdn.jsdelivr.net/npm/planefyi-embed@1/dist/embed.min.js"></script>
```

That's it. The widget fetches data from the PlaneFYI API and renders with full style isolation.

## Widget Types

| Type | Usage | Description |
|------|-------|-------------|
| `entity` | `<div data-planefyi="entity" data-slug="..."></div>` | Entity detail card — airport, airline, aircraft, or station |
| `glossary` | `<div data-planefyi="glossary" data-slug="..."></div>` | Glossary term definition with cross-references |
| `faq` | `<div data-planefyi="faq" data-slug="..."></div>` | FAQ accordion with expand/collapse |
| `search` | `<div data-planefyi="search" data-slug="..."></div>` | Search box linking to the full database |
| `compare` | `<div data-planefyi="compare" data-slug="..."></div>` | Side-by-side entity comparison |
| `spec-compare` | `<div data-planefyi="spec-compare" data-slug="..."></div>` | Interactive aircraft spec comparison tool — range, capacity, speed |
| `seats-badge` | `<div data-planefyi="seats-badge" data-slug="..."></div>` | Inline seat capacity badge with class breakdown |

## Widget Options

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| `data-planefyi` | entity, glossary, faq, search, compare, [tools] | required | Widget type |
| `data-slug` | e.g. "aircraft-types" | — | Entity slug from the PlaneFYI database |
| `data-theme` | light, dark, sepia, auto | light | Visual theme (`auto` follows OS preference) |
| `data-style` | modern, clean | modern | Widget design style |
| `data-size` | default, compact, large | default | Widget size |
| `data-placeholder` | any string | "Search Aircraft..." | Search box placeholder |

## Themes

```html
<!-- Light (default) -->
<div data-planefyi="entity" data-slug="aircraft-types" data-theme="light"></div>

<!-- Dark -->
<div data-planefyi="entity" data-slug="aircraft-types" data-theme="dark"></div>

<!-- Sepia -->
<div data-planefyi="entity" data-slug="aircraft-types" data-theme="sepia"></div>

<!-- Auto — follows OS dark/light preference -->
<div data-planefyi="entity" data-slug="aircraft-types" data-theme="auto"></div>
```

## Styles

```html
<!-- Modern (default) — clean lines, rounded corners, accent gradients -->
<div data-planefyi="entity" data-slug="aircraft-types" data-style="modern"></div>

<!-- Clean — minimal borders, utility-focused, data-first aesthetic -->
<div data-planefyi="entity" data-slug="aircraft-types" data-style="clean"></div>
```

## Web Components (Custom Elements)

As an alternative to `data-*` attributes, you can use native HTML custom elements:

```html
<!-- Custom element form -->
<planefyi-entity slug="aircraft-types" theme="light"></planefyi-entity>
<planefyi-compare slugs="aircraft-types,other-slug"></planefyi-compare>
<planefyi-search placeholder="Search Aircraft..."></planefyi-search>

<script src="https://cdn.jsdelivr.net/npm/planefyi-embed@1/dist/embed.min.js"></script>
```

Use `style-variant` (not `style`) to avoid conflicts with the HTML reserved `style` attribute.

## Examples

### Entity Card

```html
<div data-planefyi="entity" data-slug="aircraft-types" data-theme="light"></div>
<script src="https://cdn.jsdelivr.net/npm/planefyi-embed@1/dist/embed.min.js"></script>
```

### Side-by-Side Comparison

```html
<div data-planefyi="compare" data-slugs="aircraft-types,other-slug"></div>
<script src="https://cdn.jsdelivr.net/npm/planefyi-embed@1/dist/embed.min.js"></script>
```

### Search Box

```html
<div data-planefyi="search" data-placeholder="Search Aircraft..."></div>
<script src="https://cdn.jsdelivr.net/npm/planefyi-embed@1/dist/embed.min.js"></script>
```

### Glossary Term

```html
<div data-planefyi="glossary" data-slug="example-term" data-theme="light"></div>
<script src="https://cdn.jsdelivr.net/npm/planefyi-embed@1/dist/embed.min.js"></script>
```

## CDN Options

### jsDelivr (recommended — global CDN, auto-updates with npm)

```html
<script src="https://cdn.jsdelivr.net/npm/planefyi-embed@1/dist/embed.min.js"></script>
```

### Specific version (production stability)

```html
<script src="https://cdn.jsdelivr.net/npm/planefyi-embed@1.0.0/dist/embed.min.js"></script>
```

### npm (for bundlers)

```bash
npm install planefyi-embed
```

```javascript
import 'planefyi-embed';
```

## Technical Details

- **Shadow DOM**: Complete style isolation — no CSS conflicts with your site
- **Zero dependencies**: No jQuery, React, or any external library
- **2 styles**: Modern (accent gradients) and Clean (minimal, data-first)
- **4 themes**: Light, Dark, Sepia, Auto (OS preference detection)
- **CORS**: PlaneFYI API has CORS enabled for all origins
- **MutationObserver**: Works with dynamically added elements (SPAs)
- **IntersectionObserver**: Lazy loading — widgets only fetch when entering viewport (200px margin)
- **Rich Snippets**: DefinedTerm JSON-LD injected for glossary widgets
- **Bundle size**: Tree-shaken per site — only includes tools available on PlaneFYI

## Learn More About Aircraft

Visit [planefyi.com](https://planefyi.com) — PlaneFYI is a comprehensive aircraft reference with interactive tools, guides, and developer resources.

- **API docs**: [planefyi.com/developers/](https://planefyi.com/developers/)
- **Widget builder**: [widget.planefyi.com](https://widget.planefyi.com)
- **npm package**: [npmjs.com/package/planefyi-embed](https://www.npmjs.com/package/planefyi-embed)
- **GitHub**: [github.com/fyipedia/planefyi-embed](https://github.com/fyipedia/planefyi-embed)

## Transport FYI Family

Part of [FYIPedia](https://fyipedia.com) — open-source developer tools ecosystem. Transport FYI covers airports, airlines, aircraft, and railway networks. Hub: [transitfyi.com](https://transitfyi.com).

| Site | Domain | Focus | Package |
|------|--------|-------|---------|
| AirportFYI | [airportfyi.com](https://airportfyi.com) | 71,631 airports, IATA/ICAO codes, runways, routes | [npm](https://www.npmjs.com/package/airportfyi-embed) |
| AirlineFYI | [airlinefyi.com](https://airlinefyi.com) | 6,161 airlines, fleets, alliances, routes | [npm](https://www.npmjs.com/package/airlinefyi-embed) |
| **PlaneFYI** | [planefyi.com](https://planefyi.com) | 81 aircraft types, specs, manufacturers, fleet data | **[npm](https://www.npmjs.com/package/planefyi-embed)** |
| TrainFYI | [trainfyi.com](https://trainfyi.com) | 51,425 stations, operators, route pairs | [npm](https://www.npmjs.com/package/trainfyi-embed) |

## FYIPedia Developer Tools

| Package | PyPI | npm | Description |
|---------|------|-----|-------------|
| colorfyi | [PyPI](https://pypi.org/project/colorfyi/) | [npm](https://www.npmjs.com/package/@fyipedia/colorfyi) | Color conversion, WCAG contrast, harmonies — [colorfyi.com](https://colorfyi.com) |
| emojifyi | [PyPI](https://pypi.org/project/emojifyi/) | [npm](https://www.npmjs.com/package/emojifyi) | Emoji encoding & metadata for 3,953 emojis — [emojifyi.com](https://emojifyi.com) |
| unitfyi | [PyPI](https://pypi.org/project/unitfyi/) | [npm](https://www.npmjs.com/package/unitfyi) | Unit conversion, 220 units — [unitfyi.com](https://unitfyi.com) |
| timefyi | [PyPI](https://pypi.org/project/timefyi/) | [npm](https://www.npmjs.com/package/timefyi) | Timezone ops & business hours — [timefyi.com](https://timefyi.com) |
| holidayfyi | [PyPI](https://pypi.org/project/holidayfyi/) | [npm](https://www.npmjs.com/package/holidayfyi) | Holiday dates & Easter calculation — [holidayfyi.com](https://holidayfyi.com) |
| namefyi | [PyPI](https://pypi.org/project/namefyi/) | [npm](https://www.npmjs.com/package/namefyi) | Korean romanization & Five Elements — [namefyi.com](https://namefyi.com) |
| fyipedia | [PyPI](https://pypi.org/project/fyipedia/) | — | Unified CLI for all FYI tools — [fyipedia.com](https://fyipedia.com) |

## Embed Widget

Embed [PlaneFYI](https://planefyi.com) widgets on any website with [planefyi-embed](https://widget.planefyi.com):

```html
<script src="https://cdn.jsdelivr.net/npm/planefyi-embed@1/dist/embed.min.js"></script>
<div data-planefyi="entity" data-slug="example"></div>
```

Zero dependencies · Shadow DOM · 4 themes (light/dark/sepia/auto) · [Widget docs](https://widget.planefyi.com)

## License

MIT — see [LICENSE](./LICENSE).

Built with care by [FYIPedia](https://fyipedia.com).

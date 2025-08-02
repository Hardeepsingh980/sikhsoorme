# 📘 **Structured JSON Schema for Sikh Personalities Biographies**

---

## 1. **Basic Information**

| Field         | Type                  | Description                                        |
| ------------- | --------------------- | -------------------------------------------------- |
| `name`        | `string`              | Full name of the personality (e.g., “Guru Amar Das Ji”)   |
| `slug`        | `string`              | URL-friendly identifier (e.g., “guru-amar-das-ji”) |
| `category`    | `string`              | Content category (e.g., “gurus”, "warriors", "saints", "historians", "philosophers")                   |
| `birth`       | `string (YYYY-MM-DD)` | Date of birth                                      |
| `death`       | `string (YYYY-MM-DD)` | Date of passing                                    |
| `birthPlace`  | `string`              | Location of birth                                  |
| `image`       | `string (URL)`        | Profile image link                                 |
| `excerpt`     | `string`              | One-paragraph summary of the personality’s significance   |
| `designation` | `string`              | Title or position (e.g., “3rd Sikh Guru”)          |

---

## 2. **Quick Reference Sections**

### a. `quickStats` (Array of labeled stats)

Each object:

```json
{ "label": "string", "value": number | string }
```

Example:

* `"Guruship (years)", 22`
* `"Hymns in Guru Granth Sahib", 907`

### b. `quickFacts` (Array of labeled facts)

Each object:

```json
{ "label": "string", "value": "string" }
```

Example:

* `"Birth Place": "Basarke, Punjab"`
* `"Appointed Guru Age": "73 years old"`

---

## 3. **Versioning & Metadata**

```json
"version": {
  "lastUpdated": "ISO 8601 timestamp",
  "version": "semver",
  "contributors": number,
  "edits": number,
  "historyUrl": "string (URL, optional)"
}
```

---

## 4. **Biographical Sections**

```json
"biographySections": [
  {
    "label": "string",           // Section title
    "icon": "string",            // Theme-based icon name (e.g., “Star”, “BookOpen”)
    "value": "string (rich text or paragraph)"
  },
  ...
]
```

These are modular and represent aspects like:

* Early Life
* Service and Selection
* Key Reforms
* Compositions
* Final Years

---

## 5. **Legacy Sections**

### a. `spiritualLegacy`

```json
{
  "description": "string",
  "keyContributions": ["array of strings"]
}
```

### b. `modernRelevance`

```json
{
  "description": "string",
  "contemporaryImpact": ["array of strings"]
}
```

---

## 6. **Achievements**

```json
"achievements": [
  {
    "title": "string",
    "year": "string (or range, e.g., '1552–1574')",
    "description": "string",
    "icon": "string"
  },
  ...
]
```

---

## 7. **Quotes**

```json
"quotes": [
  {
    "original": "string in original language",
    "transliteration": "string (optional)",
    "translation": "string (optional)",
    "context": "string (optional)",
    "source": "string (optional)"
  },
  ...
]
```

Quotes may be from scripture or historical sayings.

---

## 8. **Timeline**

```json
"timeline": [
  {
    "year": "string or number",
    "date": "string (optional, DD MMM or DD MMM YYYY)",
    "event": "string",
    "type": "string (e.g., birth, battle, literary)"
  },
  ...
]
```

Chronologically ordered highlights of their life.

---

## 9. **Related Personalities**

```json
"relatedPersonalities": [
  {
    "name": "string",
    "relation": "string",
    "slug": "string (URL-friendly)"
  },
  ...
]
```

Linkages to other figures in their life or movement.

---

## 10. **Historical Context**

```json
"historicalContext": {
  "period": "string",
  "politicalSituation": "string",
  "socialConditions": "string",
  "significance": "string"
}
```

Describes the socio-political environment and relevance of the Guru’s actions.

---

## 11. **References**

```json
"references": [
  "string (titles, sources, or URLs)"
]
```

Optional list of sources used for the content.

---

# ✅ **Usage Notes**

* Dates must be consistent in ISO or human-readable formats.
* Avoid HTML in `value` fields; plain text or Markdown-style preferred.
* Icons can be mapped to font-awesome or custom icon systems.
* Modular design allows sections to be reused across other saints, reformers, or historical figures.

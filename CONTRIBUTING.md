# 🫶 Contributing to SikhSoorme

Thank you for your interest in contributing to **SikhSoorme** — a community-powered, open-source encyclopedia of Sikh personalities. Your help ensures we preserve Sikh history and make it accessible to all.

Whether you're a developer, historian, writer, designer, or educator — you are welcome here.

---

## 📌 Ways You Can Contribute

| Role         | How You Can Help                                                                 |
|--------------|-----------------------------------------------------------------------------------|
| 🖊 Writers    | Add or edit personality bios, quotes, timelines, references                      |
| 🧠 Historians | Verify facts, provide citations, enrich contextual knowledge                     |
| 💻 Developers | Improve code, scripts, or UI/UX                                                  |
| 🎨 Designers  | Suggest UI improvements, create visuals                                          |
| 📚 Educators  | Recommend structure or make content more accessible to students/learners         |
| 🌐 Translators| Translate content into Punjabi (future roadmap)                                  |

---

## 🛠️ Project Setup (for Developers)

1. **Fork the repo**

   Click "Fork" at the top right → clone it to your machine.

2. **Install dependencies**

   ```bash
   npm install
```

3. **Run in development**

   ```bash
   npm run dev
   ```

4. **Run data generation scripts**

   These scripts generate JSON used for static pages:

   ```bash
   npm run build:data
   ```

---

## ✍️ Adding a New Personality

1. **Create a JSON file** under `data/personalities/`

   Filename should be the slugified name (e.g. `baba-deep-singh.json`)

2. **Use this schema:**
   Get all schema information from `docs/structed_output.md`, for examples look at json files in `data/personalities/`.

3. **Image handling:**

   * Add the image to `public/images/`
   * Use a filename with the slug (e.g. `baba-deep-singh.jpg`)
   * If no image, omit it — a placeholder will be used automatically

4. **Test locally**

   Run the build script to regenerate data:

   ```bash
   npm run build:data
   ```

   Then check the personality page in your browser at:
   `http://localhost:3000/soorme/[category]/[slug]`

5. **Open a Pull Request**

---

## 🔄 Editing Existing Entries

* Navigate to `data/personalities/`
* Find and open the file (e.g. `guru-ram-das.json`)
* Edit any section (`summary`, `quotes`, `timeline`, etc.)
* Run `npm run build:data` to regenerate the JSON
* Test locally → Submit a PR

---

## 🔎 About Search Indexing

* Search indexing (via Supabase) is **handled automatically by GitHub Actions**.
* You **do not need to run** any script locally.
* Just commit your changes and open a pull request — the CI will take care of the rest.

---

## 🧪 Testing Changes

* All scripts are in `scripts/`

* Re-run generation scripts to test data formatting:

  ```bash
  npm run build:data
  ```

* Manually validate JSON or view the generated files in `public/generated/`

---

## 🪶 Contribution Standards

Please keep in mind:

* ✅ Use **respectful**, **concise**, and **neutral** language
* ✅ Add references or citations when possible
* 🚫 Avoid personal opinions or political commentary
* 🚫 Do not copy content from copyrighted books or websites

---

## 📄 Naming & Formatting

* **Slug**: Lowercase, hyphen-separated (e.g. `bibi-bhagbhari`)

* **Categories**: One of:

  * `gurus`, `leaders`, `martyrs`, `poets`, `reformers`, `modern`, `other`

* **Image Path**: Relative to `public/`, e.g. `/images/person.jpg`

---

## 🤝 Code of Conduct

We follow a zero-tolerance policy for:

* Disrespectful behavior
* Misrepresentation of history
* Spamming or vandalism

> This is a **sacred educational project** — please treat it accordingly.

---

## 🧠 Get Help

Have questions, suggestions, or feedback?

* Open an issue on GitHub
* Email us at: `contribute@sikhsoorme.org` (if applicable)
* Join our Discord (coming soon)

---

## 🙏 Thank You

By contributing to SikhSoorme, you're preserving and honoring the Sikh legacy for future generations. Your time and effort are deeply appreciated. 🌸

> “ਸੇਵਾ ਕਰਤ ਹੋਇ ਨਿਹਕਾਮੀ ॥
> ਤਿਸ ਕਉ ਹੋਤ ਪਰਾਪਤਿ ਸੁਆਮੀ ॥”


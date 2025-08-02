# 🧭 SikhSoorme 

A digital, community-powered encyclopedia of Sikh personalities — saints, warriors, leaders, poets, and modern icons who shaped Sikh history and identity.

---

## 🎯 Project Purpose

**SikhSoorme** is a non-profit, open-source initiative to preserve and share the life stories, legacies, and teachings of significant Sikh figures across time. Think of it as a highly curated, structured, and SEO-friendly "Wikipedia for Sikh history."

This platform serves:

- 📘 Students and researchers
- 🧑‍🏫 Teachers and parents
- 🌍 The global Sikh diaspora
- 🕊️ Curious learners of any background

---

## 🪶 Core Philosophy

- **Non-Profit**: Educational and publicly accessible.
- **Open Source**: Licensed and developed openly via GitHub.
- **Community-Driven**: Anyone can contribute via PRs or suggestions.
- **Culturally Respectful**: Carefully written, historically grounded, and reviewed content.
- **Globally Accessible**: Fast, mobile-friendly, and optimized for search engines.

---

## 🧩 Key Features

### 📚 Structured Biographies

- JSON-based profiles with rich sections:
  - Early Life, Contributions, Legacy
  - Spiritual and Modern Impact
  - Timeline, Achievements, Quotes, Context
- Linked to other personalities through relationships


### 📈 Version History

- GitHub-backed change tracking for every personality
- Publicly visible history and contributions

### 🖼️ Public Image Hosting

- Drop images in `public/images/` or reference hosted ones
- Placeholder fallback supported

### 💡 Contribution-Friendly

- All content stored in flat JSON
- Contributors can:
  - Edit existing files
  - Create new files using a documented schema
  - Run scripts to regenerate structured data

### ⚙️ SEO-Optimized

- Schema.org metadata, OpenGraph tags
- Clean URLs (e.g., `/soorme/gurus/guru-nanak-dev-ji`)
- Lightning-fast performance (SSG + CDN)

---

## 📦 What SikhSoorme Is Not

- ❌ A commercial product
- ❌ A place for personal blogs or debates
- ❌ A social network or discussion platform
- ❌ A scholarly journal — it simplifies knowledge for wider access

---

## 👥 Target Audience

- 🏫 Students & teachers
- 📖 Religious educators
- 👨‍👩‍👧 Parents teaching Sikh history
- 🌍 General readers
- 🧠 Researchers compiling references

---

## 🌍 Live Demo / Deployment

- **GitHub Repo**: [github.com/hardeepsingh980/sikhsoorme](https://github.com/hardeepsingh980/sikhsoorme)
- **Live Demo**: [sikhsoorme.com](https://sikhsoorme.com)

---

## 🧑‍💻 Technical Stack

| Layer        | Stack                     |
| ------------ | ------------------------- |
| Framework    | Next.js 13+ (App Router)  |
| Styling      | Tailwind CSS              |
| Hosting      | Vercel (SSG + CDN + SSR)  |
| Backend      | Supabase (Search, Auth)   |
| Scripts      | Node.js (TS, build tools) |
| CI/CD        | GitHub Actions            |
| Data Format  | JSON Schema               |
| Contribution | GitHub PRs & Issues       |

---

## 🏗️ Project Structure

```bash
.
├── app/                     # Next.js App Router pages
│   ├── about/              # Static informational pages
│   ├── soorme/[category]/  # Dynamic routes for category/personality
│   ├── timeline/           # Static page based on generated timeline
├── components/             # UI components, layouts, and reusable atoms
│   └── ui/                 # Base UI elements (buttons, badges, etc.)
├── data/personalities/     # Source JSON files (one per person)
├── public/
│   ├── generated/          # JSON outputs from build scripts
│   ├── images/             # Uploaded images for personalities
│   └── placeholder.png     # Default image fallback
├── scripts/                # Data-processing scripts (Node.js)
│   ├── generateCategories.ts
│   ├── generateHomepageData.ts
│   ├── enrichRelatedPersonalities.ts
│   ├── pushToSupabase.ts
├── lib/                    # Utility functions (e.g., Supabase client)
├── .github/workflows/      # GitHub CI/CD for build and deploy
├── next.config.ts          # Next.js settings
├── tailwind.config.ts      # Tailwind CSS config
├── README.md
````

---

## 🧠 Data Flow & Architecture

### 🔄 Build-Time Flow (SSG)

```
Developer Push
   ↓
GitHub Action (CI)
   ↓
Run build scripts:
  ├─ generateCategories.ts → public/generated/categories.json
  ├─ generateHomepageData.ts → public/generated/homepageData.json
  ├─ enrichRelatedPersonalities.ts → data/personalities/*.json (enriched)
  ├─ pushToSupabase.ts → Supabase database
   ↓
Next.js compiles → Pages + JSON injected
   ↓
Deploy to GitHub Pages
```

### ⚡ Runtime Flow (SSR + Client-Side)

```
User Browser
   ↓
Static page from CDN (SSG) OR
Server Action (e.g., search)
   ↓
Supabase API queried
   ↓
Data rendered in real time
```
---

## ⚙️ Scripts Overview

| Script Name                     | Purpose                                                                 |
| ------------------------------ | ------------------------------------------------------------------------ |
| `generateCategories.ts`        | Groups personalities into categories and writes JSON summary            |
| `generateHomepageData.ts`      | Builds homepage content: featured, soorma-of-the-day, etc.              |
| `enrichRelatedPersonalities.ts`| Adds category, image, and `.exist` flags to related people              |
| `pushToSupabase.ts`            | Pushes data to Supabase for search indexing and version tracking        |


## ✍️ How to Contribute

### 🧑‍🎨 Add a New Personality

1. Duplicate a sample JSON file in `data/personalities/`
2. Fill out required fields using the [structured schema](#structured-schema)
3. Run:

```bash
npm run build:data
```

4. Submit a PR with your changes.

### 🔍 Improve Existing Entries

* Edit files in `data/personalities/`
* Fix typos, add missing fields, enhance sections
* Submit a PR

### 📸 Add Images

* Save to `public/images/your-image.jpg`
* Reference it in the `image` field of the personality JSON

---

## 🧾 Structured Schema

Each personality profile uses a structured JSON schema that includes:

* Basic Info (`name`, `slug`, `category`, `birth`, `death`, etc.)
* Biography Sections (`earlyLife`, `legacy`, etc.)
* Quick Stats & Facts
* Timeline
* Achievements
* Related Personalities
* Quotes
* Historical Context
* References

➡️ Full schema available in `docs/structed_output.md` or via inline comments in scripts.

---

## 🚧 Roadmap

* [ ] Punjabi translations
* [ ] Audio or video narrations
* [ ] Drag-and-drop data editor (for non-devs)
* [ ] Timeline visualizer
* [ ] Role-based access for editors/moderators
* [ ] Citation checker

---

## 📜 License

This project is licensed under the **MIT License**. All contributions are welcome under the same terms.

> Content should be respectful and historically accurate. Please cite sources where possible.

---

## ❤️ Acknowledgments
* Built and maintained by volunteers — join us!

---

## 🌟 Vision

> “To become the most accessible, authentic, and community-driven archive of Sikh legacy available to the world.”

---



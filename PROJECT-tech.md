## 📘 Project Overview: **SikhSoorme**

### Summary:

**SikhSoorme** is a static, highly SEO-optimized, Wikipedia-style website that showcases personalities from Sikh history and present. It uses a minimal design, is community-editable via GitHub, and features versioning and search.

---

## ⚙️ Tech Stack

| Feature            | Tool / Service                      |
| ------------------ | ----------------------------------- |
| Framework          | Next.js (App Router, static export) |
| Content Management | MDX with Contentlayer               |
| Hosting            | Vercel / Netlify (static site)      |
| Search             | Algolia (GitHub Actions indexing)   |
| Version History    | GitHub API (REST)                   |
| Contributions      | Pull Requests on GitHub             |
| Images             | Stored in `/public` folder          |
| SEO                | next-seo + Static HTML Export       |

---

## 🧱 Folder Structure

```
sikhsoorme/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                  // Homepage
│   ├── [category]/[slug]/page.tsx // Dynamic profile page
│   └── contribute/page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProfileCard.tsx
│   ├── VersionInfo.tsx
│   └── SearchBox.tsx
├── content/
│   └── [category]/*.mdx
├── lib/
│   ├── github.ts                 // GitHub API helper
│   └── algolia.ts               // Algolia sync helper
├── public/
│   └── images/
├── contentlayer.config.ts
└── next-seo.config.js
```

---

## 📄 Page-by-Page Breakdown

### 1. **Homepage (`/`)**

* **Goal**: Introduce the site and list recent or highlighted profiles.
* **UI**:

  * Title, intro text, CTA to contribute.
  * Responsive grid of `ProfileCard`s (3-column on desktop, 1-column mobile).
  * Categories or filters (optional).
* **Static**: Yes

---

### 2. **Profile Page (`/[category]/[slug]`)**

* **Goal**: Show complete biography with Git versioning and edit option.
* **UI**:

  * Title, image, version info.
  * MDX body rendered using `prose` class.
  * "Edit this page" GitHub link.
* **Dynamic**: Pre-generated using `generateStaticParams`
* **Data**:

  * Pulled from Contentlayer
  * GitHub metadata fetched via custom API
* **Version Metadata**:

  ```ts
  {
    version: 'abcd123',
    lastUpdated: '2025-07-19T12:00:00Z',
    historyUrl: 'https://github.com/.../commits/main/content/category/slug.mdx'
  }
  ```

---

### 3. **Contribute Page (`/contribute`)**

* **Goal**: Guide users on how to contribute
* **Content**:

  * Markdown file with MDX
  * GitHub PR instructions
  * Link to sample `.mdx` file
* **Design**: Clean 1-column layout with prose styling

---

### 4. **Search**

* **Goal**: Allow users to find personalities via Algolia
* **Search Indexing**:

  * GitHub Action runs on push
  * Indexes title, category, slug, excerpt
* **UI**:

  * Autocomplete dropdown
  * Results page with `ProfileCard`s
* **Tool**: Algolia InstantSearch or Autocomplete.js

---

### 5. **404 Page**

* **UI**:

  * "Page not found"
  * CTA to return home or explore known profiles

---

## 🧑‍💻 GitHub PR & Metadata Workflow

1. Contributors add `.mdx` files in `content/[category]/`.
2. A GitHub Action:

   * Validates frontmatter.
   * Auto-generates slug from filename.
   * Extracts metadata (name, birth/death, etc.).
   * Indexes to Algolia.
3. On merge:

   * Static site regenerates
   * Profile version and last update are fetched via GitHub API

---

## 📦 Example `.mdx` Frontmatter

```mdx
---
name: Banda Singh Bahadur
slug: banda-singh-bahadur
birth: 1670
death: 1716
category: leaders
image: /images/banda-singh.jpg
imageAlt: Portrait of Banda Singh Bahadur
excerpt: Revolutionary Sikh warrior who established first Sikh rule in Punjab.
---
```

---

## 🎨 Design Guidelines

* **Font**: System font stack or Inter
* **Color**: Light mode only, white background, black text, subtle gray borders
* **Layout**: Max width 768–1024px container, centered
* **Grid**: Tailwind `grid-cols-1 md:grid-cols-3` for cards
* **Responsiveness**: Fully responsive on mobile, tablet, desktop
* **Components**:

  * `ProfileCard`
  * `VersionInfo`
  * `SearchBox`
  * `Header` + `Footer`

---

## 🔍 SEO & Optimization

* Use `next-seo` to inject OpenGraph + JSON-LD schema
* Use meta title/description per profile from frontmatter
* Generate sitemap.xml and robots.txt via static plugin
* Deploy as fully static site (`next export`)

---

## ✅ Next Steps

You can start prompting an AI agent step-by-step using these instructions to:

1. Generate layout and global components
2. Scaffold the home page
3. Build `ProfileCard` + category grids
4. Implement dynamic `[slug]` page with version info
5. Integrate Contentlayer and Algolia indexing
6. Set up GitHub Actions for metadata automation


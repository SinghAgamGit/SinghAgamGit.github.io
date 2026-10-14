# singhagam.ca

Personal portfolio of Agam Singh, a Computer Engineering co-op student at the University of Ottawa. Live at **[singhagam.ca](https://singhagam.ca)**.

<!-- Add screenshots to /docs and uncomment:
![Desktop, dark mode](docs/desktop-dark.png)
-->

## Stack

Plain HTML and CSS with a few lines of inline JavaScript. There's no framework, no package manager and no build step, so what's in the repo is exactly what gets served.

Hosting is GitHub Pages, with the custom domain set in `CNAME`.

## Structure

```
.
├── index.html     # the whole site: content, meta tags, structured data
├── styles.css     # all styling; color tokens live at the top as custom properties
├── images/        # headshot, logos, project images, favicons, og preview
├── CNAME          # custom domain for GitHub Pages
├── robots.txt
└── sitemap.xml
```

## Running it locally

Use a local server rather than opening `index.html` straight from disk, because a few asset paths (the favicons, for example) are root-relative and won't resolve over `file://`.

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. Any other static server works too.

## Editing content

Everything visible on the page is in `index.html`, so updating a role or project means editing that file. A few things are easy to forget:

- The `<head>` repeats bio details in the meta description, the Open Graph and Twitter tags, and the JSON-LD `Person` block (including `worksFor`). Update those whenever the current role changes, or link previews will show stale info.
- Bump `<lastmod>` in `sitemap.xml` after content changes.
- `images/preview.png` is the social share image; regenerate it if the design changes noticeably.
- Colors are defined once as CSS custom properties at the top of `styles.css`. Change them there instead of hardcoding hex values further down.

## Deploying

Push to `main` and GitHub Pages publishes it, usually within a minute or two. No build or CI is involved.

`/calculator-app/` isn't in this repo; it's served from the separate [calculator-app](https://github.com/SinghAgamGit/calculator-app) repo, which GitHub Pages puts under the same domain.

## Contact

[contact@singhagam.ca](mailto:contact@singhagam.ca) · [LinkedIn](https://www.linkedin.com/in/agamsinghuottawa/) · [GitHub](https://github.com/SinghAgamGit)

The repo has no license file, so the code and content aren't licensed for reuse.

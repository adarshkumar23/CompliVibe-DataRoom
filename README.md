# CompliVibe Investor Data Room

A responsive, static investor diligence portal built with Vite, React,
TypeScript, Tailwind CSS, and Framer Motion. PDF materials can be previewed
inside the data room; Excel files use download-first handling.

## Local development

Prerequisite: Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The deployable static output is created in `dist/`.

## Documents

The original source documents remain in the repository root. Copies used by
the website are served from `public/documents/`, preserving their original
filenames. Document metadata and display names are maintained in
`src/data/documents.ts`.

When a source document changes, replace both the root copy and its matching
copy in `public/documents/`, then run a production build to verify the site.

## Deployment

This is a standard Vite static site:

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 20 or newer

### Vercel

1. Import this repository into Vercel.
2. Select the Vite framework preset.
3. Confirm the build command is `npm run build` and output directory is
   `dist`.
4. Add the intended custom domain.
5. Enable Vercel's deployment protection or password protection on the
   project where available.

### Netlify

1. Import this repository into Netlify.
2. Set the build command to `npm run build`.
3. Set the publish directory to `dist`.
4. Configure the custom domain.
5. Use Netlify password protection or access controls where supported by the
   selected plan.

### Cloudflare Pages

1. Create a Pages project from this repository.
2. Select the Vite build preset.
3. Use `npm run build` as the build command and `dist` as the output directory.
4. Attach `dataroom.complivibe.in` or the preferred custom domain.

### Cloudflare Access (recommended protection)

Put the deployed domain behind Cloudflare Access and create an application
policy that only allows approved investor email addresses or domains. This
protects both the page and the files in `public/documents/` before they are
served.

The in-app “Enter Data Room” screen is a confidentiality acknowledgment and
UI gate only. It does not provide authentication. Frontend-only passwords,
hidden routes, and JavaScript checks are not secure because all static assets
remain publicly retrievable. Use Cloudflare Access, Vercel deployment/password
protection, Netlify password protection, or server-side basic authentication
for real access control.

## Confidentiality and release checks

- The site includes `noindex,nofollow` metadata, but search directives are not
  access control.
- Confirm every intended recipient is covered by the chosen protection policy.
- Verify all document links and document versions before every external share.
- Check all source documents for round-size consistency before external
  circulation.
- The website intentionally displays the current `$150K` angel / pre-seed
  round target and does not surface older `$100K` figures.

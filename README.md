# Sharleen Paskalia’s portfolio

Sharleen Paskalia is a founder and educator working in education, entrepreneurship, and innovation. This portfolio brings together her work in venture building, AI education, people development, and research.

| Page | What you’ll find |
| --- | --- |
| **Work** | Selected projects from Careers Lingo, Alliance High School, the Sustainable World Corporation Summit, Soma Siri Afrika, and STEM Impact Center |
| **About Me** | Sharleen’s story, selected experience, education, and certifications |
| **Research** | Six research projects, including a case study on Kenya’s Presidential Working Party on Education Reforms |
| **Resume** | A searchable experience library, tailored CVs with PDF download, and an assistant that answers questions about Sharleen’s work |

## Run locally

Install Node.js 20.9 or newer. From the project folder, run:

```sh
npm ci
npm run dev
```

Open [the local preview](http://localhost:3000). On Windows, use `npm.cmd` if PowerShell blocks `npm`.

To check changes before pushing:

```sh
npm run lint
npm run typecheck
npm run build
```

The app uses Next.js App Router, TypeScript, and Tailwind CSS.

## Configure the Resume assistant

Create `.env.local` from [the environment example](.env.example) and fill in the two values:

```dotenv
OPENAI_API_KEY=
OPENAI_MODEL=gpt-5-mini
```

Paste your OpenAI API key after the first equals sign, then restart the development server. Keep the key in `.env.local`, which Git ignores. On Vercel, add the same values in the project’s environment settings.

The Resume form accepts up to 500 words for a CV brief and 100 words per chat question. With OpenAI configured, the server sends the visitor’s input and relevant portfolio context to the OpenAI Responses API. The app requests that OpenAI skip response storage. The app keeps chat history in the current page session. Without AI configuration, the experience library and keyword-matched CV drafts are still available. The PDF export works with both kinds of CV drafts.

## Update content

| To change | Edit |
| --- | --- |
| Homepage introduction and interests | [src/app/page.tsx](src/app/page.tsx) |
| Homepage portrait and profile links | [src/data/profile.ts](src/data/profile.ts) |
| Featured projects, case studies, and founder development | [src/data/work.ts](src/data/work.ts) |
| About Me chapters, photos, and credentials | [src/data/journey.ts](src/data/journey.ts) |
| Research table and education reforms case study | [src/data/research.ts](src/data/research.ts) |
| Resume assistant’s evidence library | [src/data/experience.ts](src/data/experience.ts) |

The Resume evidence library draws from the Work and Research data. Update those files when a role, project result, or research contribution changes.

### Add photos or video

Save photos under `public/images/`. For a Work card, add an `image` entry to the matching project in `src/data/work.ts`. The card uses a portrait frame. Use `fit: "contain"` to show the whole image inside the frame.

```ts
image: {
  src: "/images/work/workshop.webp",
  alt: "Learners testing a robot during a workshop",
  fit: "contain",
},
```

For About Me, use `aboutIntroPhoto` and the chapters’ `photo` entries in `src/data/journey.ts`. Set descriptive alt text and add a caption or crop position where helpful.

Save MP4 or WebM clips under `public/videos/` and add them to the project’s `videos` array. Use a `poster` image and WebVTT captions when available.

```ts
videos: [{
  title: "Pitch festival highlights",
  src: "/videos/pitch-festival.mp4",
  poster: "/images/work/pitch-festival.webp",
  captions: {
    src: "/videos/pitch-festival.vtt",
    language: "en",
    label: "English",
  },
}],
```

## Deploy to Vercel

1. Push your changes to the [GitHub repository](https://github.com/Paskaliaa/sharleen-portfolio).
2. In [Vercel](https://vercel.com/new), import `Paskaliaa/sharleen-portfolio`. Select the **Next.js** preset and keep the repository root and default build settings.
3. Add `OPENAI_API_KEY` and `OPENAI_MODEL` under **Environment Variables** for **Production**. Click **Deploy**. If you add the variables after deploying, redeploy to apply them.
4. Open the generated `.vercel.app` address and test both Resume tools.
5. In **Settings → Domains**, add `paskalia.life`. Enter the DNS records Vercel displays at your domain provider, then check the site over HTTPS once Vercel verifies the domain.

[Vercel GitHub import](https://vercel.com/docs/git/vercel-for-github) · [Environment variables](https://vercel.com/docs/environment-variables) · [Custom domains](https://vercel.com/docs/domains/set-up-custom-domain)

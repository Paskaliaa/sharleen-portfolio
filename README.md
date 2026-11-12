# Sharleen Paskalia portfolio

Run `npm install` and `npm run dev`, then open http://localhost:3000.

## Add the homepage portrait

1. Save the image under `public/images/`, for example `public/images/sharleen.webp`.
2. Add `portrait: { src: "/images/sharleen.webp", alt: "Portrait of Sharleen Paskalia" }` to `src/data/profile.ts`.
3. For the reference treatment, prepare a transparent grayscale cutout with a white outline. The site supplies the lime background. The portrait keeps its 5:4 slot on desktop and mobile.

## Add project images

Save photos under `public/images/`. Add an `image` entry to the matching project in `src/data/work.ts`:

```ts
image: {
  src: "/images/workshop.webp",
  alt: "Learners testing a robot during a workshop",
  caption: "Robotics workshop",
},
```

The photo replaces the placeholder at the top of the project card. Use descriptive alt text for informative photos. Optionally add `position`, such as `"center top"`, to adjust the crop. Replace a photo by changing its path.

Set any additional contact links in `src/data/profile.ts`.

## Add a project video

Save an MP4 or WebM file under `public/videos/`. Add a `videos` array to the relevant project in `src/data/work.ts`:

```ts
videos: [{
  title: "Careers Lingo founder introduction",
  src: "/videos/careers-lingo-intro.mp4",
  poster: "/images/careers-lingo-intro.webp",
  captions: { src: "/videos/careers-lingo-intro.vtt", language: "en", label: "English" },
}],
```

Poster and caption files are optional. Videos play on demand in the case study and pause when it closes.

## Add Zanzibar photos to About Me

Save the photos under `public/images/about/`. In `src/data/journey.ts`, set `aboutIntroPhoto` for the opening image and update the `photo` entry for each chapter. Use the same `src`, `alt`, and optional `caption` and `position` fields as project images.

## Resume tools and AI connection

The Resume header link opens /resume. The experience library works without external services. The tailoring and chat features use a server-side OpenAI Responses endpoint.

1. Copy .env.example to .env.local.
2. Set OPENAI_API_KEY and OPENAI_MODEL using a model available to your project that supports Structured Outputs.
3. Restart npm run dev.

The API key stays on the server. Visitors submit their brief or question to OpenAI along with the curated professional history in src/data/experience.ts and the current chat context. Response storage is disabled in the API request. The app does not persist visitor conversations. Refreshing clears the browser conversation.

Update src/data/experience.ts to extend or correct the evidence. Portfolio project edits feed into it automatically. Source descriptions identify the underlying CV, report, or personal account. Conflicting CV dates and proficiency claims are marked for confirmation. The assistant cites evidence IDs and is instructed to preserve those uncertainties.

Tailored drafts can be downloaded as a formatted PDF with evidence references. Until the AI connection is configured, CV drafts use local keyword matching and experience chat displays a connection message.

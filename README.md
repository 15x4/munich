# 15x4 Munich

Website for 15x4 Munich e.V. -- a volunteer-driven educational initiative where anyone can give a 15-minute talk on any topic. Four talks per event, always free.

## Tech Stack

- [Nuxt 3](https://nuxt.com/) with static generation (SSG)
- [Tailwind CSS](https://tailwindcss.com/)
- [Nuxt Content](https://content.nuxt.com/) for events and team data
- TypeScript
- Deployed to Netlify

## Development

```bash
yarn install
yarn dev
```

## Build

```bash
yarn generate
```

Static output goes to `.output/public/`.

## Content

- **Events:** `content/events/` -- one markdown file per event
- **Team:** `content/team/` -- organizer profiles

### Event frontmatter

```yaml
title: 'Event Title'
date: '2026-05-15'
venue: 'Location Name'
status: upcoming # or past
talks:
  - title: 'Talk Title'
    speaker: 'Speaker Name'
    description: 'Brief description'
```

## Legal

15x4 Munich e.V. | Vereins ID: VR 208332

# Smooth Capture Docs

Documentation site for Smooth Capture, built with Astro and Starlight.

## Development

Install dependencies:

```sh
bun install
```

Start the local dev server:

```sh
bun run dev
```

## Build

```sh
bun run build
```

## Cloudflare Deployment

This project deploys as a static Cloudflare Workers asset site using Wrangler. The generated Astro output in `dist/` is configured in `wrangler.jsonc`.

For Cloudflare Workers Builds, configure the build settings as:

- Build command: `bun run build`
- Deploy command: `bun run deploy`

Do not leave the Build command empty. Wrangler expects `dist/` to already exist, and Astro only creates it after `bun run build`.

Deploy from your machine:

```sh
bun run deploy:full
```

Preview the built site with Wrangler:

```sh
bun run deploy:preview
```

GitHub Actions deployment runs on pushes to `main` via `.github/workflows/deploy-cloudflare.yml`.

Add these repository secrets before using the workflow:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

The Cloudflare API token needs permission to deploy Workers scripts for the target account.

## Preview

```sh
bun run preview
```

# `svc-web-redirect`

[![CI Lint](https://github.com/lcsrodriguez/lcsrodriguez.github.io/actions/workflows/ci.yaml/badge.svg)](https://github.com/lcsrodriguez/lcsrodriguez.github.io/actions/workflows/ci.yaml)
[![Deploy to GitHub Pages](https://github.com/lcsrodriguez/lcsrodriguez.github.io/actions/workflows/deploy.yaml/badge.svg)](https://github.com/lcsrodriguez/lcsrodriguez.github.io/actions/workflows/deploy.yaml)

Website app for [lcsrodriguez.github.io](https://lcsrodriguez.github.io) redirecting to main portfolio [lucasrodriguez.net](https://lucasrodriguez.net).

## Redirect strategies

2 types of redirect implemented:

- **Soft redirect** := Wait web page for 2-3 sec + Redirect
- **Hard redirect** := Immediate redirect

Redirect target: `https://lucasrodriguez.net/?s=o`

- `s` := source from the redirect operation _(variable name)_
- `o` := old _(variable value)_

> [!NOTE]
> `s` query parameter can be used for further analysis.

Status code:

- **303 See Other**: Most common (especially after POST, but safe in general)
- **307 Temporary Redirect**: Keeps the original method
- **308 Permanent Redirect**: For permanent moves (good for SEO)

## Alternative redirect

We can use the catch-all route ([...slug]) and redirect at route level:

TS file: `src/routes/[...slug]/+page.server.js`

```ts
import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export function load() {
  throw redirect(303, "/your-specific-url");
}
```

> [!NOTE]
> The hook method is better because it runs earlier and catches everything (including API routes, static assets if not excluded, etc.).

## Hosting

**GitHub Pages**: static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository on GitHub, optionally runs the files through a build process, and publishes a website.

```
SvelteKit source > SSG (via build) > Hosting on GH Pages
```

SSG := Static-Site Generation

```shell
bun run dev

bun add -D @sveltejs/adapter-static
bun run build
```

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

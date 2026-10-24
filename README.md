# lecouve-web

Website for Lecouve Bouquet, a French-inspired wedding decor studio in Budapest.

- Framework: Next.js (App Router, TypeScript, Tailwind)
- Hosting: Vercel, auto-deploys on every push to `main`
- Database and logins: Supabase (EU, Frankfurt), added later

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Rules

- Secrets live in Vercel environment variables, never in the code. `.env*` files are git-ignored.
- Row Level Security on for every Supabase table.

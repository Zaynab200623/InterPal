# InterPal — Personal Career Guide: Resume, Mock Interviews, AI

[![Releases](https://img.shields.io/github/v/release/Zaynab200623/InterPal?label=Releases&logo=github)](https://github.com/Zaynab200623/InterPal/releases)

![InterPal hero image](https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1400&q=80)

InterPal helps you plan your career, build a strong resume, and practice interviews with guided feedback. It pairs automated guidance with human effort. Students and professionals use it to prepare for internships and full-time roles. The system combines AI, mock interviews, and resume tools into a single web app.

- Topics: cloud, development, full-stack, gemini-api, neondb, nextjs, nodejs, postgresql, prisma, shadcn-ui, tailwindcss.
- Releases page: https://github.com/Zaynab200623/InterPal/releases — download the release file and execute it.

Quick links
- Releases (download and run): https://github.com/Zaynab200623/InterPal/releases
- Repo: https://github.com/Zaynab200623/InterPal

Why InterPal? 🚀
- Focus your prep on skills that matter.
- Track progress across interviews.
- Generate clean, ATS-friendly resumes.
- Run simulated interviews with role-specific prompts.
- Get concise, actionable feedback from AI and community reviewers.

Key features ✨
- Resume Builder
  - Multiple templates with Tailwind CSS and shadcn-ui components.
  - Export to PDF and copy-ready plain text for ATS.
- Mock Interviews
  - Role-based question banks.
  - Timed sessions with scoring and feedback.
- AI Guidance
  - Context-aware coaching via Gemini-like API.
  - Answer review, bullet refinement, and STAR format coach.
- Career Insights
  - Role match scoring.
  - Skill gap analysis and learning roadmap.
- Integrations
  - Neondb for fast hosted Postgres.
  - Prisma for schema and migrations.
  - Node.js backend with Next.js frontend.
- Deployment-ready
  - Cloud-first approach with scripts for common providers.

Architecture overview 🏗️
![Architecture diagram](https://raw.githubusercontent.com/wojtekmaj/react-pdf/master/demo/public/img/architecture.png)

- Frontend: Next.js + Tailwind CSS + shadcn-ui.
- Backend: Node.js API routes, Prisma ORM.
- Database: PostgreSQL (NeonDB recommended).
- AI: Gemini-like API endpoint for dialogue and scoring.
- Auth: JWT-based session flow; supports OAuth providers.
- CI/CD: GitHub Actions for build and release.

Getting started — dev environment (local) 💻
1. Clone the repo
   ```
   git clone https://github.com/Zaynab200623/InterPal.git
   cd InterPal
   ```
2. Install dependencies
   ```
   npm install
   ```
3. Setup environment
   - Create a .env.local file with:
     ```
     DATABASE_URL=postgresql://user:pass@localhost:5432/interpal
     NEXT_PUBLIC_API_URL=http://localhost:3000/api
     AI_API_KEY=your_ai_key_here
     ```
4. Run migrations
   ```
   npx prisma migrate dev
   ```
5. Start dev server
   ```
   npm run dev
   ```
6. Open http://localhost:3000

Releases and distribution 📦
- Visit the Releases page to get packaged builds, installers, or migration scripts:
  https://github.com/Zaynab200623/InterPal/releases
- The release assets contain binaries or deploy scripts. Download the file for your platform and execute the included installer or script.
- Typical steps after download:
  ```
  tar -xzf interpal-release.tar.gz
  ./install.sh
  ```
  or run the provided executable on the platform you target.

Demo and screenshots 🖼️
- Live demo: check the Releases page for demo links and packaged previews.
- Screenshot: résumé builder
  ![Resume builder screenshot](https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80)
- Screenshot: mock interview panel
  ![Mock interview screenshot](https://images.unsplash.com/photo-1555949963-aa79dcee981f?auto=format&fit=crop&w=1400&q=80)

Core flows explained
- Resume flow
  - Add experience and projects in structured fields.
  - Use the AI bullet optimizer for each role entry.
  - Select a template and export.

- Mock interview flow
  - Pick role and difficulty.
  - Start timed Q&A.
  - Submit answers for AI review.
  - Review a scored transcript and targeted tips.

- Career insights flow
  - Sync your resume or import LinkedIn.
  - Run a skill gap analysis.
  - Get a learning plan with links to resources.

API & Integrations 🔗
- AI integration
  - Use a Gemini-like API client to send prompts and receive structured feedback.
  - Keep prompts simple and consistent for reproducible scoring.
- Database
  - Prisma models represent users, resumes, sessions, and reviews.
  - NeonDB works as a managed Postgres database for production.
- Export
  - PDF generation uses headless Chromium or a server-side renderer.
- Webhooks
  - Add webhooks to notify CI, analytics, or calendar systems after major events.

Data model snapshot (example)
- User { id, name, email, role, createdAt, updatedAt }
- Resume { id, userId, template, contentJson, pdfUrl }
- InterviewSession { id, userId, role, difficulty, transcript, score }
- Review { id, sessionId, reviewerId, feedback, rating }

Deployment guides (short)
- Vercel (Next.js)
  - Environment variables in Vercel dashboard.
  - Set up a NeonDB instance and add DATABASE_URL.
  - Use Vercel build command: npm run build.
- Docker
  - Build:
    ```
    docker build -t interpal:latest .
    ```
  - Run:
    ```
    docker run -e DATABASE_URL=... -p 3000:3000 interpal:latest
    ```

Security and secrets
- Store AI and DB keys in environment variables.
- Rotate keys on schedule.
- Use server-side only API routes for secret usage.

Testing
- Unit tests with Jest.
- End-to-end tests with Playwright for flows like resume export and interview sessions.
- Run tests:
  ```
  npm run test
  npm run test:e2e
  ```

Contributing 🤝
- Fork the repo and open a PR.
- Report bugs and request features via Issues.
- Follow the code style and run lint checks before PR:
  ```
  npm run lint
  npm run format
  ```
- Provide small, focused PRs with clear change descriptions.

Roadmap
- Multi-language resume templates.
- Live interview rooms with peer reviewers.
- Mobile-first UI improvements.
- Deeper AI feedback for communication, tone, and personalization.

Troubleshooting
- DB connection error: verify DATABASE_URL and run migrations.
- AI key errors: confirm the key has the right scopes and quota.
- Build failures: run npm run build locally to see logs.

FAQ
- Q: Can I use InterPal offline?
  - A: Core editor works offline for editing. AI features require network access.
- Q: Do I need an AI API key?
  - A: Yes, to use AI-based review and coaching.
- Q: Can I export resumes to LinkedIn?
  - A: You can export text and PDFs. LinkedIn import is manual.

Credits and acknowledgments
- UI: shadcn-ui + Tailwind CSS
- Backend: Node.js and Prisma
- DB: PostgreSQL / NeonDB
- AI: Gemini-like models via API
- Icons and images: Unsplash and public icon sets

License
- This project uses the MIT License. See LICENSE.md for details.

Contact
- Issues: open an Issue on the repo.
- Pull requests: submit via GitHub.
- Releases and downloadable packages: https://github.com/Zaynab200623/InterPal/releases

Badges
[![Build Status](https://img.shields.io/github/actions/workflow/status/Zaynab200623/InterPal/ci.yml?branch=main&logo=github)](https://github.com/Zaynab200623/InterPal/actions)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/Zaynab200623/InterPal/blob/main/LICENSE)

Join the community
- Use the Issues page for feedback.
- Share templates and interview questions via PRs.

Releases reminder
- The installer or packaged file on the Releases page must be downloaded and executed. Find builds and scripts here: https://github.com/Zaynab200623/InterPal/releases

Explore the code, run the app, and adapt components for your workflows.
# Portfolio content update — October 2026

The current CV supplied by Ralph is the source for the profile, employment, education, technical skills, project dates, and project claims. The original dark palette, fonts, spacing conventions, particle animation, and section structure are preserved.

## Changed files

- `src/components/sections/{About,Hero,Experience,Education,Skills,Certifications}.tsx`: current CV content and verified prior credentials.
- `src/lib/projects.ts` and `src/components/sections/Projects.tsx`: six dated CV projects, feature lists, tags, and filters.
- `src/components/ui/{ProjectDetail,ProjectGallery}.tsx` and `src/app/globals.css`: matching detail dialogs and accessible responsive carousels.
- `src/components/Footer.tsx` and `src/app/layout.tsx`: working social links and production metadata/portrait.
- `public/ralph-laurenz-timbol-cv.pdf`: exact supplied current PDF; the existing download URL is preserved.
- `public/ralph-photo.jpg` and `public/assets/profile/ralph-photo.webp`: optimized supplied portrait.
- `public/assets/projects/`: optimized project screenshots.
- `tsconfig.json`: excludes ignored local capture work from TypeScript checking.
- `README.md`: gallery structure and maintenance notes.

## Screenshot provenance

Captured with Playwright in headless Microsoft Edge on October 11–12, 2026. Each WebP is 1440 × 900. Screens contain fictional demo records from fresh, isolated local databases; no production records, credentials, or API keys are included.

| Project folder | Login | Dashboard | Highlight |
| --- | --- | --- | --- |
| `healthos` | Staff sign-in | Front desk overview with a fictional clinic | Patient directory |
| `student-alerts` | SPCF Alerts sign-in | Admin gate activity overview | Staff gate station |
| `deatlas` | Account sign-in | Knowledge workspace | Change Request Review Center |
| `kita` | Account sign-in | Financial analytics | Posted ledger entries |
| `tala` | Account sign-in | Application statistics report | Kanban application pipeline |

All screenshots live in `public/assets/projects/<folder>/{login,dashboard,highlight}.webp`. The largest is approximately 63 KB. Raw captures, local databases, demo credentials, scripts, and original photo/CV backups remain in ignored `.portfolio-work`.

The beehive project could not be located in the available project folders, and no authentic existing dashboard, hardware photo, or diagram was found. Its CV entry remains with an explicit gallery-unavailable note. No replacement image was fabricated.

## Photo

Used the explicitly attached original `Timbol_PIC.png`, with proportional resizing and compression only. No face, outfit, body, expression, or background was generated or changed. A new half-body portrait was not produced because exact facial preservation cannot be guaranteed. The unchanged source and previous site assets are backed up locally in ignored `.portfolio-work`.

## Existing content retained for review

Verified against the previous CV and retained:

- Arduino experience in the Embedded Systems About highlight.
- Cisco Networking Academy course certificates: Introduction to Networks (January 2025), Switching/Routing/Wireless Essentials (June 2025), and Enterprise Networking/Security/Automation (March 2026). These are described as course certificates rather than a professional CCNA certification.
- Five seminars: ICpEP Next-Generation Computer Engineers; Next-Gen AI in Action; SEMICON CONNECT; Software Engineering and Testing in Today's Industry; The Role of ICTD and Leveraging Technology in Fulfilling the Needs of the City.

The existing invitation to discuss opportunities and projects remains in Contact for Ralph's review.

Removed or replaced:

- Unverified placeholder projects: IoT Environment Monitor, Network Lab Config, REST API Test Framework, Arduino Sensor Hub, and Project Coming Soon.
- The unsupported AI-Driven Test Automation and Quality Assurance Workshop.
- Outdated in-development/coming-soon project labels and unsupported thesis species/sensor/feedback specifics.
- Expanded networking/CAD skill lists absent from the current CV; the current CV's five skill groups replace them.
- Dead KITA and TALA live-demo URLs, both returning 404 when checked. The verified private repositories are identified as private without publishing inaccessible project links.

## Validation

The update is checked with ESLint, TypeScript, a Next.js production build, and Playwright against the production preview. Browser checks cover content, current-CV byte equality, gallery file availability, five-second autoplay, manual navigation/timer reset, hover/focus pause, pause/resume, swipe, keyboard controls, focus containment/restoration, mobile navigation, reduced motion, and horizontal overflow. The site has one dark theme and no light-mode toggle.

Production: https://rltimbol.vercel.app — deployed through the existing GitHub-to-Vercel connection.

`PORTFOLIO_TASKS.md` is local progress state and is deliberately excluded from commits.

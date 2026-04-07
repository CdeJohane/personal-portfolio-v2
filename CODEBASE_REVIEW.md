# Personal Portfolio V2 – Quick Audit

Date: 2026-04-07

## What is good
- Clear componentized structure (`Navbar`, `Intro`, `About`, `Frameworks`, `Projects`, `Contacts`) keeps layout easy to follow.
- Build pipeline is simple and works (`vite build` succeeds).
- Basic responsive behavior exists for nav and project cards.
- External links use `target="_blank"` with `rel="noopener noreferrer"` in key places.

## What is bad / risky
- ESLint fails due to missing prop validation in `Experience`.
- `isGrey` state in navbar appears unused.
- README is still default Vite template and does not explain this project.
- Large image assets increase bundle size (background image and `webpage.png`).
- Multiple hardcoded typos and outdated/future-dated content in project/experience text.
- One project link is `youtube.com` without protocol.
- Accessibility and semantics can be improved (limited alt specificity, heading scale, no reduced-motion/media tuning).

## Priority improvements
1. Fix linting by adding prop-types or migrate to TypeScript with typed props.
2. Move portfolio content into structured data (JSON/JS object) and map over it.
3. Optimize images (`webp/avif`, compression, multiple sizes, lazy loading).
4. Improve mobile typography (large 5–6em hero text likely overflows on small screens).
5. Replace default README with project-specific setup, architecture, and deployment docs.
6. Remove dead state/unused components and resolve naming/casing consistency.
7. Add basic tests (component smoke tests + link rendering checks).

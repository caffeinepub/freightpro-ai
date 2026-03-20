# FreightPro AI

## Current State
New project — no existing code.

## Requested Changes (Diff)

### Add
- Full SaaS landing page for FreightPro AI trucking recruitment platform
- Backend: carrier signup form submission storage
- 11 landing page sections + footer
- Carrier two-step signup form with backend persistence

### Modify
N/A

### Remove
N/A

## Implementation Plan

### Backend
- `submitCarrierSignup(data)` — store carrier signup form data (company name, email, phone, MC/USDOT, fleet size, hiring needs)
- `getCarrierSignups()` — admin retrieval (optional)

### Frontend Sections
1. **Hero** — split layout, headline, CTAs, trust indicators, dashboard UI preview with floating cards
2. **Marketplace Animation** — drivers left, carriers right, AI engine center with connecting lines
3. **Problem Section** — animated stat cards ($8k+, 21 days, 60%), closing message
4. **Product Experience** — large UI frame, filter sidebar, driver cards with hover effects
5. **Features** — 4-card grid with glass-style cards and icons
6. **How It Works** — 3-step visual timeline with CTA
7. **Driver Marketplace Preview** — grid of driver profile cards
8. **Social Proof** — testimonials + company logo row
9. **Carrier Signup** — 2-step form with gradient glow background, backend integration
10. **FAQ** — accordion
11. **Final CTA** — animated gradient background, CTA button
12. **Footer** — Product, Company sections

### Design
- Deep blue primary, electric blue accent
- White + light gray section backgrounds
- Gradient glows, soft shadows, rounded cards
- Smooth scroll, subtle animations
- Fully responsive

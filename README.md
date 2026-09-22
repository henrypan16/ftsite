# Fillware Technologies Website

A modern, responsive redesign of the Fillware Technologies website, built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

The website provides information about Fillware's pharmacy management solutions, point-of-sale system, features, integrations, support services, and company information.

## Features

- Modern responsive interface
- Desktop and mobile navigation
- Animated route transitions
- Responsive typography and layouts
- Custom Fillware brand theme
- Pharmacy management system overview
- Point-of-Sale system overview
- Interactive feature showcase
- Partner and integration directory
- Support information and hours
- Pharmacy resource links
- Contact form and location map
- Social media integration
- Optimized images with Next.js Image
- Mobile-friendly design

## Pages

| Route | Description |
| --- | --- |
| `/` | Homepage |
| `/about` | About Fillware Technologies |
| `/rx` | Fillware RX Management System |
| `/pos` | Fillware Point-of-Sale System |
| `/features` | Fillware features and services |
| `/partners` | Partners and integrations |
| `/support` | Support services and hours |
| `/links` | Pharmacy and support resources |
| `/contact` | Contact information and form |

## Tech Stack

- [Next.js](https://nextjs.org/) — React framework
- [React](https://react.dev/) — User interface
- [TypeScript](https://www.typescriptlang.org/) — Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) — Styling
- [React Icons](https://react-icons.github.io/react-icons/) — Interface and social icons

## Getting Started

### Prerequisites

Install:

- Node.js
- npm or pnpm

### Installation

Clone the repository:

```bash
git clone <repository-url>
cd <repository-name>
```

Install dependencies:

```bash
npm install
```

or:

```bash
pnpm install
```

Start the development server:

```bash
npm run dev
```

or:

```bash
pnpm dev
```

Open:

```text
http://localhost:3000
```

## Project Structure

```text
├── app/
│   ├── about/
│   ├── contact/
│   ├── features/
│   ├── links/
│   ├── partners/
│   ├── pos/
│   ├── rx/
│   ├── support/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── PageTransition.tsx
│
├── public/
│   ├── partners/
│   ├── bg.svg
│   └── logo.png
│
└── README.md
```

## Responsive Design

The website is designed to adapt across desktop, laptop, tablet, and mobile displays.

On large (`xl`) screens, the site uses the full desktop navigation and original desktop layout.

On smaller screens:

- Navigation collapses into a hamburger menu
- Fillware logo remains centered
- Content width expands to better use available screen space
- Typography scales down automatically
- Page spacing is reduced
- Footer adapts for narrow displays

## Route Transitions

Page content uses a lightweight route transition when navigating between pages.

```css
@keyframes routeEnter {
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.995);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-route-enter {
  animation: routeEnter 0.35s cubic-bezier(0.22, 1, 0.36, 1) both;
}
```

The transition is triggered using the current Next.js pathname so it runs during client-side navigation as well as initial page loading.

## Brand Colors

The website uses a custom Tailwind theme derived from the Fillware visual identity.

Primary colors use the `brand` palette:

```text
brand-500  #368fd0
brand-600  #29629d
brand-700  #245386
brand-800  #21466f
brand-900  #1e3f73
```

Accent colors use the Fillware red palette:

```text
accent-500  #e82e2e
accent-600  #d11217
accent-700  #b00d12
```

## Support Hours

Fillware Technologies is open seven days a week.

| Day | Hours |
| --- | --- |
| Monday – Friday | 8:30 AM – 9:00 PM |
| Saturday | 8:30 AM – 5:30 PM |
| Sunday | 9:00 AM – 5:00 PM |

## Contact

**Fillware Technologies Inc.**

6375 Dixie Road, Suite 302  
Mississauga, Ontario L5T 2E7  
Canada

Phone: (905) 564-0501  
Toll Free: (866) 764-6443  
Fax: (905) 564-9056

General: info@fillware.com  
Sales: sales@fillware.com  
Support: support@fillware.com

## Copyright

Copyright © Fillware Technologies. All Rights Reserved.

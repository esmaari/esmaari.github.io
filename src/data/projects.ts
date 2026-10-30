import type { Project } from '@/types/project'
import sinevegaPreview from '@/assets/sinevega/sinevega-preview.png'
import cosmicReactHome from '@/assets/cosmictrack/CT_react_home.png'
import cosmicReactCardPicker from '@/assets/cosmictrack/CT_react_cardpicker.png.png'
import cosmicReactJourneys from '@/assets/cosmictrack/CT_react_journeyspage.png.png'
import cosmicReactCategories from '@/assets/cosmictrack/CT_react_categores.png'
import cosmicVuePreview from '@/assets/cosmictrack/cosmicPreviewVUE.png'
import cosmicVueJourneys from '@/assets/cosmictrack/cosmictrack-journeysVUE.png'
import cosmicVueAddStep from '@/assets/cosmictrack/cosmictrack-addstepVUE.png'

import svHome from '@/assets/sinevega/SV_Desktop - 1140px (Home).png'
import svLogin from '@/assets/sinevega/SV_Desktop - 1140px (Login).png'
import svMovieDetails from '@/assets/sinevega/SV_Desktop - 1140px (Movie Details).png'
import svPersonDetails from '@/assets/sinevega/SV_Desktop - 1140px (PersonDetails).png'
import svProfile from '@/assets/sinevega/SV_Desktop - 1140px (Profile).png'
import svRegister from '@/assets/sinevega/SV_Desktop - 1140px (Register).png'
import svSearchResult from '@/assets/sinevega/SV_Desktop - 1140px (SearchResult).png'

import SevilayE26 from '@/assets/sevilaye/SevilayE26.png'
import SevilayECardChoosingPage from '@/assets/sevilaye/SevilayECardChoosingPage.png'
import SevilayEDesignMockups from '@/assets/sevilaye/SevilayEDeviceMockups.png'

import uadImg from '@/assets/uad/Uad.png'
import kboCardDesign from '@/assets/kbo/kboCardDesign.png'
import kboHomePage from '@/assets/kbo/kboHomePage.png'
import kboMenuPage from '@/assets/kbo/kboMenuPage.png'

export const projects: Project[] = [

  /* ================= COSMICTRACK ================= */

  {
    slug: 'cosmictrack',
    title: 'CosmicTrack Pro — Tarot Journey Journal',
    impact:
      'Rebuilt CosmicTrack from Vue 3 to Next.js 15+ (React 19): same ritual product, new mental model — multilingual SaaS (EN/TR), server-verified APIs, TanStack Query server state, and a documented component styleguide.',
    overview:
      'Practitioners needed a private place to log tarot spreads as structured journeys. The Vue app proved the domain in Turkish only; CosmicTrack Pro resets the architecture for global use — locale-prefixed routing, namespace-based i18n, and public Tarot Hub pages alongside the authenticated journal.',
    technical:
      'Ship CosmicTrack Pro on Next.js with `app/[locale]/…`, next-intl, cookie-based Supabase auth, Route Handlers with `getUser()`, TanStack Query mutations (optimistic UI), react-hook-form + Zod with locale-aware errors, JWT-protected AI edge functions, and tier-based usage limits.',
    strategy:
      'Treat the rewrite as a new architecture for the same product: document the Vue → React friction (reactivity, Pinia vs Query, routing, i18n, forms), keep the archived Vue build visible, and keep the React app as the multilingual version heading into final QA.',
    metaInfo: {
      role: 'Solo full-stack frontend engineer',
      timeline: 'Vue 3 (TR-only MVP) → Next.js 15+ rebuild (EN/TR SaaS)',
      stack: 'Next.js · React 19 · next-intl · Supabase',
      focus: 'Multilingual SaaS, server state, framework fluency',
      projectType: 'Multilingual SaaS / Product Web App'
    },
    styleguideUrl: 'https://cosmictrac-react.netlify.app/en/styleguide',
    architectureDecisions: [
      {
        title: 'Server-Verified API Layer',
        decision:
          'Moved mutations behind Next.js Route Handlers (`/api/journeys`, `/api/steps`, `/api/categories`, `/api/favorites`) that call `getUser()` before touching Postgres.',
        why:
          'In the Vue SPA I called Supabase directly from the browser — fast to ship, but every rule lived in client trust. For a portfolio flagship I wanted explicit server gates.',
        impact:
          'Unauthorized writes fail predictably. Mutations go through one server layer instead of scattered browser calls.'
      },
      {
        title: 'Cookie Auth with @supabase/ssr',
        decision:
          'Split browser and server Supabase clients and kept sessions in HTTP-only cookies instead of only local storage.',
        why:
          'Job-target stacks lean on Next.js App Router patterns; cookie sessions align with SSR layouts and middleware-friendly guards.',
        impact:
          'Protected routes and API handlers share one auth source of truth — less drift between “logged in UI” and “allowed mutation”.'
      },
      {
        title: 'Hardened AI Boundary',
        decision:
          'React client invokes the `ai` edge function with the user JWT; the function calls `getUser()` before OpenAI. Vue called the same endpoint with only the anon key. Tier-based limits gate usage per plan.',
        why:
          'AI spend and abuse risk were the clearest gap in v1 — I wanted logged-in-only interpretation, secrets only in Supabase, never in the repo.',
        impact:
          'Ask AI stays a product feature, not an open relay — safe serverless endpoints with enforceable limits.'
      },
      {
        title: 'TanStack Query Over Pinia for Server State',
        decision:
          'Stopped mirroring API data in a global client store; mutations use `onMutate` / `onError` for optimistic UI with automatic cache rollback.',
        why:
          'In Vue I manually committed to Pinia first, called the API, then wrote rollback try/catch on failure — workable, but heavy boilerplate.',
        impact:
          'Server state has a single source of truth; optimistic favorites and saves feel snappy without hand-rolled store surgery.'
      },
      {
        title: 'next-intl + `app/[locale]` Routing',
        decision:
          'Architected EN/TR from day one: locale prefixes (`/en`, `/tr`), namespace JSON files, `getTranslations` on the server, hooks on the client.',
        why:
          'The Vue build was strictly Turkish. Going global meant separating public static surfaces (Tarot Hub, card encyclopedia) from dynamic app state.',
        impact:
          'Locale, layouts, and auth-protected areas live in one App Router tree instead of a detached Vue route table.'
      }
    ],
    frameworkTransition: {
      intro:
        'Rebuilding CosmicTrack from Vue 3 to Next.js 15+ (React 19) meant a new architecture for the same product, and a different mental model. Below is an honest map of what changed and where friction showed up.',
      frictionPoints: [
        {
          title: 'Reactivity: Vue’s magic vs. React’s explicit state',
          body:
            'I was used to `ref` / `reactive` and proxy-based dependency tracking. `useState`, `useMemo`, and stale closures felt like manual labor at first — I still catch myself missing Vue’s effortless reactivity, even as I appreciate React’s predictability.'
        },
        {
          title: 'Data paradigm: Pinia vs. TanStack Query',
          body:
            'The biggest eye-opener. Pinia meant optimistic UI = commit to the store, fire the API, hand-roll rollback in catch blocks. React Query mutations with `onMutate` snapshots and `onError` rollbacks removed most of that client-side ceremony and reframed how I treat server state.'
        },
        {
          title: 'File-based routing & locale context',
          body:
            'Vue Router’s detached route table gave way to `app/[locale]/…` — routing, layouts, and SSR in one tree. Prefixing `/en` and `/tr` and grouping auth-protected segments became more intuitive than bolting guards onto a flat config.'
        },
        {
          title: 'i18n standardization with next-intl',
          body:
            'Moving from a single-language codebase to namespace-based JSON, server `getTranslations`, and client hooks forced a clean split between marketing/static Tarot content and authenticated journey UI.'
        },
        {
          title: 'Forms: react-hook-form + Zod vs. v-model + Vuelidate',
          body:
            'Schema validation bound to locales via `useMemo` — so Zod error messages stay EN/TR in step modals — replaced the old v-model flow. More setup upfront, far clearer contracts at submit time.'
        }
      ],
      verdict:
        'I am still torn on which ecosystem I prefer. Next.js asks for more boilerplate and explicit boundaries; in return I get strong typing, build-time route optimization, and SSR that scales for global deployment. For a quick MVP, the Vue SPA felt nimbler — for CosmicTrack Pro as multilingual SaaS, the React stack earns its complexity.',
      status:
        'CosmicTrack Pro is feature-complete: EN/TR, safe serverless AI via Supabase Edge Functions, tier-based limits, and a custom component styleguide. Final production testing is the remaining step.',
      styleguideUrl: 'https://cosmictrac-react.netlify.app/en/styleguide',
      styleguideLabel: 'View component styleguide'
    },
    heroImage: cosmicReactHome,
    features: [
      {
        title: 'Tarot Step Flow',
        description:
          'Each step is a mini ritual: title the intention, pick three cards from a shuffled grid, confirm, reveal upright/reversed faces, pull static meanings from local `tarotCards` data, then optionally ask AI for a short interpretation.',
        bullets: [
          'CardPicker: select three backs → confirm → reveal; supports add and edit-note modes.',
          'Picked cards persist as `{ id, isReversed }` jsonb on `steps.cards` — same domain model I proved in Vue.',
          'TanStack Query mutations keep save feedback explicit while forms stay validated with Zod + react-hook-form.'
        ],
        image: cosmicReactCardPicker
      },
      {
        title: 'Journeys, Categories & Favorites',
        description:
          'Users organize spreads into journeys with icons and descriptions, tag them with color categories, star favorites, and search/filter on My Journeys — the list view has to stay calm even as libraries grow.',
        bullets: [
          'Category chips use design tokens (`bg-cat-*`) carried over from the Vue styleguide discipline.',
          'Junction table for journey–category links; favorites toggle without reloading the whole page.',
          'Feature-sliced folders (`features/`, `entities/`, `shared/`) so journey, step, and category logic do not tangle.'
        ],
        image: cosmicReactJourneys
      },
      {
        title: 'Category Management',
        description:
          'Color-coded category chips attach to journeys for quick scanning; CRUD stays lightweight so organizers can reshape their library without leaving the flow.',
        bullets: [
          'Shared `bg-cat-*` tokens keep chips consistent across list and detail views.',
          'Multi-select on journeys via junction table — same data model as the Vue build, cleaner UI in shadcn dialogs.',
          'Tokens and components documented in the live styleguide — buttons, typography, and states stay aligned.'
        ],
        image: cosmicReactCategories
      }
    ],
    priorIteration: {
      framework: 'Vue 3',
      summary:
        'The first CosmicTrack was a Vue 3 + Pinia SPA on Vite — Turkish-only, atomic components, Headless UI, direct Supabase from the browser. It taught me the tarot domain; I no longer develop this branch, but it stays live as the archived MVP.',
      whyVueFirst:
        'Vue’s template + reactivity was the fastest path to a working SPA while learning Supabase and Pinia. Global state in `auth`, `journey`, `category`, and `notification` stores kept a solo codebase legible.',
      whyReactSecond:
        'Not a cosmetic port: multilingual SaaS from scratch (`next-intl`), Next Route Handlers, TanStack Query, locale-aware Zod forms, JWT-verified AI, tier limits, and a reusable styleguide for tokens and typography.',
      highlights: [
        'Single-language (Turkish) — no locale routing',
        'Pinia for all server-shaped state + manual optimistic rollbacks',
        'CardPicker.vue — 26-column grid, three-card selection flow',
        'Anon-key AI calls (known limitation documented in the React rebuild)'
      ],
      images: [
        { src: cosmicVuePreview, label: 'Home (Vue)' },
        { src: cosmicVueJourneys, label: 'My Journeys (Vue)' },
        { src: cosmicVueAddStep, label: 'Add step / CardPicker (Vue)' }
      ],
      liveUrl: 'https://cosmictrack-vue.netlify.app/',
      github: 'https://github.com/esmaari/cosmictrack-vue'
    },
    technicalChallenges: [
      'Re-learning state boundaries after Vue’s automatic reactivity — explicit `useState` / `useMemo` without fighting stale closures.',
      'Replacing Pinia optimistic flows with TanStack Query `onMutate` / `onError` rollback patterns.',
      'Standing up `app/[locale]` + next-intl while keeping public Tarot pages and authenticated app surfaces coherent.',
      'Binding Zod schemas to active locale so validation copy stays EN/TR in the same form components.',
      'Deploying Next.js on Netlify with serverless AI, tier limits, and secrets only in Supabase — never in the repo.'
    ],
    results: {
      technical: [
        'Vue (archived) + Next.js 15+ (active) — same domain, different architecture: TR-only SPA vs. EN/TR SaaS.',
        'TanStack Query owns server state; Route Handlers enforce `getUser()` on mutations.',
        'next-intl namespaces power marketing pages and in-app copy from one routing tree.',
        'Custom styleguide aligns tokens, button states, and typography across shadcn-based UI.'
      ],
      product: [
        'Full journey flows in EN and TR: register, journeys, three-card steps, categories, favorites, search.',
        'Tarot Hub / card encyclopedia-style public pages plus authenticated journal — split by design.',
        'AI interpretation via JWT-verified edge functions with tier-based usage limits.',
        'Feature-complete build entering final production QA.'
      ]
    },
    improvements: [
      'Finish end-to-end production testing across locales and tier-limit edge cases.',
      'Surface AI usage and tier limits more visibly in settings.'
    ],
    nextSteps: [
      'Introduce Vitest (+ Testing Library) for unit and component tests — step forms, Route Handlers, and CardPicker logic first.',
      'Build a React Native app so CosmicTrack works on mobile, reusing the Supabase auth and data model from the web product.',
      'Ship a proper Profile & Settings area: delete account, update display name, and avatar upload — flows that are not in the app yet.'
    ],
    technologies: [
      'React 19',
      'Next.js 15+',
      'TypeScript',
      'next-intl',
      'Supabase SSR',
      'TanStack Query',
      'Zod',
      'react-hook-form',
      'shadcn/ui',
      'Tailwind CSS v4',
      'Vue 3 (archived)'
    ],
    route: '/projects/cosmictrack',
    liveUrl: 'https://cosmictrac-react.netlify.app/',
    github: 'https://github.com/esmaari/cosmictrack-react'
  },

  /* ================= SINEVEGA ================= */

  {
    slug: 'sinevega',
    title: 'SineVega — Cinematic Discovery Hub',
    impact:
      'A Vue 3 app for browsing films, opening details, and saving a personal list. The API host is offline; the app and service layer are on GitHub.',
    overview:
      'I wanted one place to search movies, open a title or a person, and keep favorites after login. SineVega is that Vue app: home, search, movie and person pages, register, login, and profile.',
    technical:
      'TMDb requests go through one service used by cards and detail pages. Pinia holds the session and the saved list. Accounts and favorites used a small API that ran on Railway.',
    strategy:
      'The interface is still worth showing: shared TMDb access, auth, and a saved list. I shut the Railway project down, so the live demo is offline. Screenshots and the repository are the record of the architecture.',
    availabilityNote:
      'The API host is offline. The Vue app and service layer are on GitHub.',
    metaInfo: {
      role: 'Frontend engineer',
      timeline: 'Personal Vue project',
      stack: 'Vue 3 · Pinia · TMDb',
      focus: 'Search, detail pages, auth, saved lists',
      projectType: 'Product web app'
    },
    architectureDecisions: [
      {
        title: 'Shared TMDb service',
        decision: 'Cards, search, and detail pages call one TMDb service instead of fetching on their own.',
        why: 'List and detail screens need the same movie shape.',
        impact: 'A title looks the same in search and on its detail page.'
      },
      {
        title: 'Session and favorites in Pinia',
        decision: 'Login state and the saved list live in Pinia, fed by the account API.',
        why: 'Several pages need to know who is logged in and what they saved.',
        impact: 'Profile, favorites, and gated actions read one client store.'
      },
      {
        title: 'API host retired',
        decision: 'The Railway API that stored accounts and favorites is shut down. I kept the Vue code and screenshots.',
        why: 'I did not want a paid host running for a personal demo.',
        impact: 'There is no live site. The architecture is readable in the repository.'
      }
    ],
    design: {
      description: 'Figma planning balanced cinematic visuals with calm spacing and hierarchy.',
      images: [svHome, svMovieDetails, svPersonDetails, svProfile, svRegister]
    },
    heroImage: sinevegaPreview,
    features: [
      {
        title: 'Search and lists',
        description: 'Search hits the shared TMDb service and renders movie cards from the same shape used on detail pages.',
        image: svSearchResult
      },
      {
        title: 'Account flow',
        description: 'Register, login, and profile talk to the account API. Favorites stay in Pinia after a successful session.',
        image: svLogin
      }
    ],
    technologies: ['Vue 3', 'TMDb API', 'Pinia', 'Bootstrap'],
    route: '/projects/sinevega',
    github: 'https://github.com/esmaari/sinevega'
  },

  /* ================= CLIENT WEBSITES ================= */

  {
    slug: 'kbo',
    title: 'Kozmik Bilinç Okulu — Astrology School Platform',
    impact: 'WordPress site for an astrology school, with WooCommerce for readings and memberships.',
    overview: 'The school needed a public site where courses, readings, and products could be edited without a custom app.',
    technical: 'I built the pages in WordPress and Elementor and connected WooCommerce so readings and memberships can be purchased on the site.',
    strategy: 'Menus follow the school’s programs. Product cards and checkout stay on the same WordPress install the client can edit.',
    metaInfo: {
      role: 'Frontend / CMS',
      timeline: 'Client website',
      stack: 'WordPress · WooCommerce · Elementor',
      focus: 'Catalog, checkout, editable pages',
      projectType: 'Client website'
    },
    architectureDecisions: [
      {
        title: 'Astrology Content Templates',
        decision: 'Built reusable templates for readings, events, and card decks tailored to astrology.',
        why: 'The academy publishes frequent rituals and readings that need consistent structure.',
        impact: 'Every update keeps the mystical tone without reworking layouts.'
      },
      {
        title: 'Trusted Purchase Flow',
        decision: 'Integrated WooCommerce to sell readings and memberships with calm checkout cues.',
        why: 'High-touch products need polished commerce steps.',
        impact: 'Visitors convert with confidence and fewer abandoned carts.'
      },
      {
        title: 'Intentional Navigation',
        decision: 'Organized menus around astrology programs and rituals so visitors land where they belong.',
        why: 'Seekers search by theme, not just categories.',
        impact: 'Faster discovery of readings and clearer calls to action.'
      }
    ],
    heroImage: kboHomePage,
    features: [
      {
        title: 'Guided Menu',
        description: 'Menus follow astrology paths so visitors quickly reach the exact ritual or course.',
        image: kboMenuPage
      },
      {
        title: 'Intention Cards',
        description: 'Tarot-inspired cards frame readings and products with clear intent before checkout.',
        image: kboCardDesign
      }
    ],
    technologies: ['WordPress', 'WooCommerce', 'Elementor'],
    route: '/projects/kbo',
    liveUrl: 'https://kozmikbilincokulu.com/'
  },

  {
    slug: 'uad',
    title: 'Uranyen Astroloji Derneği — Membership Portal',
    impact: 'WordPress membership site. Member content stays behind login; the public pages explain the association.',
    overview: 'The association needed a site that shows what membership includes and keeps paid material behind an account.',
    technical: 'I set up the WordPress theme with Elementor and a membership plugin so gated pages require a logged-in member.',
    strategy: 'The home page leads with login and a short explanation of member access. Premium pages use the plugin’s access rules.',
    metaInfo: {
      role: 'Frontend / CMS',
      timeline: 'Client website',
      stack: 'WordPress · Membership plugin · Elementor',
      focus: 'Gated member content',
      projectType: 'Client website'
    },
    architectureDecisions: [
      {
        title: 'Intentional Gating',
        decision: 'Opened doors only when members were authenticated, keeping private insight areas secure.',
        why: 'Trust requires clear separation between free and premium content.',
        impact: 'Members feel confident about what they unlock behind the gate.'
      },
      {
        title: 'Login-First Navigation',
        decision: 'Led visitors with a login hero, then layered in teasers for premium sections.',
        why: 'The most valuable content lived behind an account wall, so the journey had to start there.',
        impact: 'Onboarding felt purposeful and retention stayed high.'
      },
      {
        title: 'Plugin-Based Flexibility',
        decision: 'Leveled up workflows with trusted plugins so new capabilities slot in smoothly.',
        why: 'The platform plans to evolve, so predictable extension points matter.',
        impact: 'Maintenance stays low while future enhancements stay manageable.'
      }
    ],
    heroImage: uadImg,
    technologies: ['WordPress', 'Membership Plugin', 'Elementor'],
    route: '/projects/uad',
    liveUrl: 'https://uranyenastrolojidernegi.com/'
  },

  {
    slug: 'se',
    title: 'Sevilay Eriçdem — Personal Brand Site',
    impact: 'Next.js site for a personal brand, from Figma layouts to a published page with a card-selection moment.',
    overview: 'The client needed a simple marketing site: who she is, what she offers, and a clear way to get in touch, plus one interactive card moment.',
    technical: 'I implemented the Figma frames in Next.js and React and isolated the card chooser as its own component.',
    strategy: 'Short scrolling sections, repeated contact points, and one interactive module so the page stays a brochure with a single piece of product-like UI.',
    metaInfo: {
      role: 'Frontend engineer',
      timeline: 'Client website',
      stack: 'Next.js · React · Figma',
      focus: 'Design-to-code, brand site',
      projectType: 'Client website'
    },
    architectureDecisions: [
      {
        title: 'Story-Focused Layout',
        decision: 'Built content blocks that tell a story in short, scrolling segments.',
        why: 'Busy clients scan quickly and need to understand the offer right away.',
        impact: 'Visitors stay engaged and reach for the contact prompts without friction.'
      },
      {
        title: 'Design-to-Code Pipeline',
        decision: 'Translated Figma vision into reusable blocks so updates stay aligned with the brand.',
        why: 'Maintaining the tarot aesthetic while shipping fast requires a clear handoff.',
        impact: 'Polished pages release faster with fewer visual mismatches.'
      },
      {
        title: 'Interactive Card Moments',
        decision: 'Isolated the fortune card experience into its own touch-friendly module.',
        why: 'Feature interactions should feel playful yet easy to understand.',
        impact: 'Visitors get a memorable moment that mirrors the brand tone.'
      }
    ],
    heroImage: SevilayE26,
    features: [
      {
        title: 'Card Choosing Moment',
        description: 'Playful, mobile-first card interaction that mirrors live reading energy.',
        image: SevilayECardChoosingPage
      },
      {
        title: 'Responsive Mockups',
        description: 'Figma-driven planning keeps layouts sharp on every device.',
        image: SevilayEDesignMockups
      }
    ],
    technologies: ['Next.js 16', 'React', 'Figma'],
    route: '/projects/se',
    liveUrl: 'https://www.sevilayericdem.com/',
    github: 'https://github.com/esmaari/sevilayeV_1.0'
  },

]

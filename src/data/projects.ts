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

import tetrisImg from '@/assets/tetris/tetris.png'
import reactTodoImg from '@/assets/react-todo/reacttodoapp.png'
import reactWeatherApp from '@/assets/react-weather/reactweatherapp.png'
import reactcreatememe from '@/assets/react-meme/reactcreatememe.png'
import reacttraveljournal from '@/assets/react-travel-journal/reacttraveljournal.png'
import reactapptentiesgame from '@/assets/react-tenzies-game/reactapptentiesgame.png'
import takeaguess from '@/assets/react-take-a-guess/takeaguess.png'

import kanbanBoard from '@/assets/kanban-issue-tracker/kanbanIssueTracker.png'
import kanbanLogin from '@/assets/kanban-issue-tracker/kanbanIssueTrackerLogin.png'
import kanbanEditDialog from '@/assets/kanban-issue-tracker/kanbanIssueTrackerEditIssue.png'

import vanlifePreview from '@/assets/vanlife-react/reactappvanlife2.png'
import vanlifeListing from '@/assets/vanlife-react/reactappvanlife1.png'

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
      'Treat the rewrite as an architectural reset, not a port: document honest Vue → React friction (reactivity, Pinia vs Query, routing, i18n, forms), keep the archived Vue build visible, and position the React app as the feature-complete, multilingual flagship heading into final QA.',
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
          'Unauthorized writes fail predictably; the data layer reads like a small BFF instead of scattered client calls.'
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
        'Rebuilding CosmicTrack from Vue 3 to Next.js 15+ (React 19) was an architectural reset — same product idea, a completely different mental model. Below is an honest map of what changed and where friction showed up.',
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
      'Add Playwright coverage for locale routing and card picker → save step.',
      'Surface AI usage and tier limits more visibly in settings.'
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
    impact: 'Turned movie data into a friendly, curated discovery experience that keeps cinephiles exploring.',
    overview: `Movie lovers needed a focused hub; we shaped a cinematic gateway that highlights stories instead of clutter.`,
    technical: `Goal: spotlight curated recommendations, keep watchlists synced, and let visitors explore characters with confidence.`,
    strategy: `We leaned on cinematic storytelling, curated paths, and a soft CTA so visitors always know how to keep exploring.`,
    architectureDecisions: [
      {
        title: 'Cinematic Story Blocks',
        decision: 'Grouped browse, detail, and account sections into reassuring, repeatable layouts.',
        why: 'Consistency keeps visitors immersed instead of hunting for info.',
        impact: 'Users skim faster and feel confident exploring deeper pages.'
      },
      {
        title: 'Reliable Service Layer',
        decision: 'Shared TMDb requests across cards and details to keep every story aligned.',
        why: 'Discovering new films needs smooth, predictable responses.',
        impact: 'Fewer hiccups and a cleaner browsing rhythm.'
      },
      {
        title: 'Favorites That Feel Saved',
        decision: 'Kept sessions and watchlists synced so inspiration is never lost.',
        why: 'A discovery hub loses value when favorites vanish.',
        impact: 'Repeat visits grew because people trusted the collection system.'
      }
    ],
    design: {
      description: 'Figma planning balanced cinematic visuals with calm spacing and hierarchy.',
      images: [svHome, svMovieDetails, svPersonDetails, svProfile, svRegister]
    },
    heroImage: sinevegaPreview,
    features: [
      {
        title: 'Dynamic Search + Lists',
        description: 'Instant search delivers curated previews and smart filters on every screen.',
        image: svSearchResult
      },
      {
        title: 'Smooth Account Flow',
        description: 'Logins, favorites, and profiles stay in sync so visitors keep saving inspiration.',
        image: svLogin
      }
    ],
    technologies: ['Vue 3', 'TMDb API', 'Pinia', 'Bootstrap'],
    route: '/projects/sinevega',
    liveUrl: 'https://sinevega-fe-production.up.railway.app/',
    github: 'https://github.com/esmaari/sinevega'
  },

  /* ================= KANBAN ================= */

  {
    slug: 'kanban-issue-tracker',
    title: 'Kanban Issue Tracker — Team Focus Board',
    impact: 'Launched a dependable board so teams keep their work visible and accountable.',
    overview: `Teams juggling many workflows needed one calm space to track progress.`,
    technical: `Goal: keep status updates fast, protect every route, and give every team member confidence in the board.`,
    strategy: `Strategy centered on clear columns, purposeful microcopy, and guardrails that keep attention on the next meaningful move.`,
    architectureDecisions: [
      {
        title: 'Feature-Focused Structure',
        decision: 'Arranged modules by outcome so each card feels purposeful and easy to scan.',
        why: 'Clarity helps teams move faster without asking where to click.',
        impact: 'Fewer questions and smoother daily standups.'
      },
      {
        title: 'Locked-In Access Flow',
        decision: 'Applied lightweight guards so sensitive workflows stay behind secure routes.',
        why: 'Boards lose trust if people accidentally access unfinished areas.',
        impact: 'Stronger confidence for teams in protected sections.'
      },
      {
        title: 'Consistent CRUD Rituals',
        decision: 'Set predictable patterns for creating, editing, and saving issues.',
        why: 'Teams want to spend time solving problems, not hunting buttons.',
        impact: 'Smaller learning curve and quieter release cycles.'
      }
    ],
    heroImage: kanbanBoard,
    features: [
      {
        title: 'Secure Launchpad',
        description: 'Logins and protected routes welcome each user with a consistent experience.',
        image: kanbanLogin
      },
      {
        title: 'Fast Issue Editing',
        description: 'Dialog-based workflow keeps focus on the work, not the form.',
        image: kanbanEditDialog
      }
    ],
    technologies: ['Vue 3', 'TypeScript', 'Pinia', 'Vite', 'Cypress', 'Vitest'],
    route: '/projects/kanban-issue-tracker',
    liveUrl: 'https://kanban-issue-tracker.netlify.app/#/login',
    github: 'https://github.com/esmaari/-kanban-issue-tracker'
  },

  /* ================= VANLIFE ================= */

  {
    slug: 'vanlife-react',
    title: 'VanLife — Travel Marketplace',
    impact: 'Rebuilt VanLife into a polished marketplace that feels trustworthy for hosts and travelers.',
    overview: `Travelers needed real listings and reliable filters, not just placeholders.`,
    technical: `Goal: let hosts share rich stories, travelers filter quickly, and keep data consistent across roles.`,
    strategy: `Strategy highlighted bold visuals, filter-first discovery, and role-aware flows so both hosts and travelers stay confident.`,
    architectureDecisions: [
      {
        title: 'Role-Aware Routes',
        decision: 'Separated host and traveler experiences with clear route patterns.',
        why: 'Different roles need different entry points and expectations.',
        impact: 'Flows stay predictable whether you are browsing or managing a listing.'
      },
      {
        title: 'Real Listings Pipeline',
        decision: 'Shifted from mocks to Supabase so every listing reflects real data.',
        why: 'Trust grows when travelers see up-to-date availability.',
        impact: 'The marketplace feels live and ready to book.'
      },
      {
        title: 'Stable Contract Layers',
        decision: 'Used typed models for listings, details, and auth so nothing breaks silently.',
        why: 'Shared data across screens needs clear rules.',
        impact: 'Iteration stays safe and future additions stay simple.'
      }
    ],
    heroImage: vanlifePreview,
    features: [
      {
        title: 'Dynamic Van Listings',
        description: 'Live Supabase data paired with filters that match each traveler’s vibe.',
        image: vanlifeListing
      }
    ],
    technologies: ['React', 'TypeScript', 'React Router 6', 'Supabase', 'Vite'],
    route: '/projects/vanlife-react',
    liveUrl: 'https://esmasreactlabvanlife.netlify.app/',
    github: 'https://github.com/esmaari/vanlife'
  },

  /* ================= WORDPRESS CLIENT WORK ================= */

  {
    slug: 'kbo',
    title: 'Kozmik Bilinç Okulu — Astrology School Platform',
    impact: 'Presented the astrology school as a confident, commerce-ready portal without losing ritual energy.',
    overview: `The academy needed a grounded WordPress home that confidently sells readings and memberships.`,
    technical: `Goal: blend ritual storytelling with stable WooCommerce purchases and simple editing workflows.`,
    strategy: `Strategy paired mystical storytelling with clear commerce cues so visitors understand the astrology school offering and can book or shop without friction.`,
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
    impact: 'Created a membership-first site that delivers premium astrology insights.',
    overview: `The association needed a login-first experience that keeps member content gated yet inviting.`,
    technical: `Goal: keep gates intentional, spotlight premium value, and invite curious visitors to join.`,
    strategy: `Positioned the membership as both aspirational and accessible with clear entry points and a calm interface.`,
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
    title: 'Modern Business Website for Personal Brand',
    impact: 'Crafted a confident, modern presentation that gently guides visitors toward booking a conversation.',
    overview: `The tarotpreneur wanted a human, approachable site with repeat CTAs and a warm tone.`,
    technical: `Goal: deliver modular storytelling sections, tactile interactions, and a clear path to contact.`,
    strategy: `Balanced bold hierarchy, purposeful breaks, and CTA repetition so prospects naturally move toward a chat.`,
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

  /* ================= SMALLER REACT PROJECTS ================= */

  {
    slug: 'react-todo',
    title: 'React ToDo App — Focused Task Builder',
    impact: 'Delivered a tidy, responsive to-do experience with persistent storage.',
    overview: `Simple task workflows needed a distraction-free home with quick saves.`,
    technical: `Goal: keep task interactions responsive while persisting data locally.`,
    strategy: `Kept flows short and predictable so managing tasks stays satisfying.`,
    architectureDecisions: [
      {
        title: 'Predictable Task Rhythm',
        decision: 'Baked explicit transitions between add, edit, and complete states.',
        why: 'Clarity is vital even for a simple list app.',
        impact: 'Users stay focused and the UI feels stable.'
      },
      {
        title: 'Client-Side Persistence',
        decision: 'Saved data in localStorage so nothing disappears on refresh.',
        why: 'Users expect continuity without needing a backend.',
        impact: 'Tasks outlive the session and feel reliable.'
      },
      {
        title: 'Reusable List Layout',
        decision: 'Separated the list from controls to keep each piece readable.',
        why: 'Modular UI makes future tweaks easier.',
        impact: 'Refactors stay short and maintainable.'
      }
    ],
    heroImage: reactTodoImg,
    technologies: ['React', 'Vite'],
    route: '/projects/react-todo',
    liveUrl: 'https://esmasreactlabtodoapp.netlify.app/',
    github: 'https://github.com/esmaari/reactlab_todo_app'
  },

  {
    slug: 'react-weather',
    title: 'React Weather App — Clean Forecast',
    impact: 'Delivered a lightweight forecast tool for quick, confident checks.',
    overview: `People needed a clear weather snapshot without visual clutter.`,
    technical: `Goal: surface forecasts fast, keep network handling calm, and highlight what matters most.`,
    strategy: `Focused on breathing room, bold typography, and steady states so visitors trust the info.`,
    architectureDecisions: [
      {
        title: 'Instant API Flow',
        decision: 'Built the loading sequence around predictable fetch and display states.',
        why: 'Weather data must feel reliable on every request.',
        impact: 'Visitors read the forecast without hesitation.'
      },
      {
        title: 'Query-to-Result Pipeline',
        decision: 'Structured city search so each input maps cleanly to visible data.',
        why: 'Searching should feel instant and reassuring.',
        impact: 'Fewer retries and clearer confidence in the results.'
      },
      {
        title: 'Minimal UI',
        decision: 'Tight component scope keeps the experience calm and readable.',
        why: 'Small pockets need strong focus to stay high quality.',
        impact: 'The interface stays light even as data changes.'
      }
    ],
    heroImage: reactWeatherApp,
    technologies: ['React', 'Tailwind CSS'],
    route: '/projects/react-weather',
    liveUrl: 'https://esmasreactlabweatherapp.netlify.app/',
    github: 'https://github.com/esmaari/reactlab_weather_app'
  },

  {
    slug: 'react-meme',
    title: 'React Meme Generator — API-Powered Fun',
    impact: 'Gave creative communities a fast way to remix memes with live previews.',
    overview: `Creators wanted a playful tool that feels instant and responsive.`,
    technical: `Goal: keep inputs, image loading, and previews predictable for quick iteration.`,
    strategy: `Focused on instant feedback loops so people can tweak text and assets without waiting.`,
    architectureDecisions: [
      {
        title: 'Responsive Input Flow',
        decision: 'Treated inputs and preview state as a single, predictable flow.',
        why: 'Creators need real-time reflections of their edits.',
        impact: 'Editing feels snappy and intuitive.'
      },
      {
        title: 'Clear API Handling',
        decision: 'Kept image fetching decoupled from rendering logic to stay resilient.',
        why: 'External assets vary and should not freeze the UI.',
        impact: 'Previews stay stable even if the API hiccups.'
      },
      {
        title: 'Composable Output',
        decision: 'Built the preview as a reusable combo of image and overlay text.',
        why: 'Output needs to stay flexible for future updates.',
        impact: 'Adding new features stays low risk.'
      }
    ],
    heroImage: reactcreatememe,
    technologies: ['React', 'API'],
    route: '/projects/react-meme',
    liveUrl: 'https://esmasreactlabcreatememe.netlify.app/',
    github: 'https://github.com/esmaari/reactlab_create_meme'
  },

  {
    slug: 'react-travel-journal',
    title: 'React Travel Journal — Postcard Gallery',
    impact: 'Built a reusable postcard layout that keeps stories bright and breathable.',
    overview: `Storytellers wanted cards that feel like physical postcards with a modern finish.`,
    technical: `Goal: map structured entries to reusable cards with calm styling.`,
    strategy: `Kept the card stack modular so new destinations can be added without reworking layouts.`,
    architectureDecisions: [
      {
        title: 'Data-to-Component Mapping',
        decision: 'Rendered entries from structured item data to avoid duplication.',
        why: 'Content should scale without extra templates.',
        impact: 'New entries drop in cleanly.'
      },
      {
        title: 'Reusable Card Composition',
        decision: 'Built travel cards as repeatable presentation units.',
        why: 'Consistency keeps the gallery cohesive.',
        impact: 'Visual polish stays steady as the collection grows.'
      },
      {
        title: 'Scoped Styling',
        decision: 'Kept styles scoped to component boundaries.',
        why: 'Small projects still need strong style ownership.',
        impact: 'Maintenance stays low while creativity stays high.'
      }
    ],
    heroImage: reacttraveljournal,
    technologies: ['React', 'CSS Modules'],
    route: '/projects/react-travel-journal',
    liveUrl: 'https://esmasreactlabtraveljournal.netlify.app/',
    github: 'https://github.com/esmaari/reactlab_travel_journal'
  },

  {
    slug: 'react-tenzies-game',
    title: 'React Tenzies Game — Dice Ritual',
    impact: 'Playful dice ritual with crisp state transitions.',
    overview: `Players needed clear feedback on rolls, holds, and wins.`,
    technical: `Goal: model roll/hold/win with explicit states while keeping dice components reusable.`,
    strategy: `Focused on transparent game loops so every interaction feels fair and responsive.`,
    architectureDecisions: [
      {
        title: 'Transparent Game Loop',
        decision: 'Modeled roll/hold/win as explicit transitions.',
        why: 'Players need to feel the logic behind every tap.',
        impact: 'Gameplay stays predictable and debuggable.'
      },
      {
        title: 'Composable Dice',
        decision: 'Built the dice as reusable interactive units.',
        why: 'Repeated interaction elements should share one logic model.',
        impact: 'Iteration stays fast and consistent.'
      },
      {
        title: 'Derived Win States',
        decision: 'Computed completion from the dice array rather than flags.',
        why: 'Derived data reduces mismatch risk.',
        impact: 'The experience feels stable across rounds.'
      }
    ],
    heroImage: reactapptentiesgame,
    technologies: ['React', 'Vite'],
    route: '/projects/react-tenzies-game',
    liveUrl: 'https://esmasreactlabtenziesgame.netlify.app/',
    github: 'https://github.com/esmaari/tenziesgame'
  },

  {
    slug: 'react-take-a-guess',
    title: 'Take a Guess — Hangman',
    impact: 'Film-themed word guessing game with clear rhythm.',
    overview: `Players wanted a thematic hangman with confident visual feedback.`,
    technical: `Goal: keep validation reliable, animate progressive failure, and keep the UI themed but readable.`,
    strategy: `Rhythm focused on clear inputs, confident feedback, and cinematic styling so players stay engaged.`,
    architectureDecisions: [
      {
        title: 'Progressive Feedback',
        decision: 'Turned wrong guesses into staged visual steps.',
        why: 'Clear progression keeps players motivated.',
        impact: 'Game state feels readable and intentional.'
      },
      {
        title: 'Input Validation Pipeline',
        decision: 'Separated guess handling from evaluation logic.',
        why: 'Inputs deserve solid validation before updates.',
        impact: 'Fewer bugs and smoother interactions.'
      },
      {
        title: 'Thematic UI',
        decision: 'Mapped film visuals onto reusable gameplay primitives.',
        why: 'Style should support maintainability.',
        impact: 'Looks unique without sacrificing clarity.'
      }
    ],
    heroImage: takeaguess,
    technologies: ['React', 'clsx'],
    route: '/projects/react-take-a-guess',
    liveUrl: 'https://esmasreactlabtakeaguessgame.netlify.app/',
    github: 'https://github.com/esmaari/take-a-guess'
  },

  {
    slug: 'tetris',
    title: 'Tetris Game — Canvas Classic',
    impact: 'Recreated a stable vanilla JS Tetris with clean pacing.',
    overview: `Wanted deterministic controls and smooth visual updates.`,
    technical: `Goal: keep the render loop steady, collisions reliable, and input responsive.`,
    strategy: `Focused on explicit canvas timing so the classic feel remains precise.`,
    architectureDecisions: [
      {
        title: 'Controlled Render Loop',
        decision: 'Ran gameplay with a steady frame and update cycle.',
        why: 'Real-time mechanics need predictability.',
        impact: 'Consistent pacing and visuals.'
      },
      {
        title: 'Grid-Based Pieces',
        decision: 'Modeled tetrominoes with matrix constraints.',
        why: 'Collision logic depends on precise spatial rules.',
        impact: 'Mechanics feel predictable and easy to tune.'
      },
      {
        title: 'Input Isolation',
        decision: 'Kept keyboard input separate from render logic.',
        why: 'Decoupling improves responsiveness.',
        impact: 'Cleaner flow and easier debugging.'
      }
    ],
    heroImage: tetrisImg,
    technologies: ['HTML5', 'JavaScript'],
    route: '/projects/tetris',
    liveUrl: 'https://esmaari.github.io/tetris-game/',
    github: 'https://github.com/esmaari/tetris-game'
  }

]

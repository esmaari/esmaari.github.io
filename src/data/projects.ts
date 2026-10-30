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
    title: 'CosmicTrack — Tarot Journey Journal',
    impact:
      'Personal tarot journal on Next.js 16. I hardened Ask AI — who writes the prompt, who can change quota, and what CI checks — and left it off on the friend-beta deploy.',
    overview:
      'Ask AI began as a thin Edge proxy. The browser built a free-text prompt, quota was check-then-update, profile billing columns were easy to write, and a failed call left little to look at afterward.',
    technical:
      'This slice keeps the journal and closes that gap in code. The Edge function owns the prompt. A trigger locks plan and AI counters. Quota uses atomic RPCs. Model output must be JSON. Tests and logs do not need a live OpenAI key.',
    strategy:
      'Friend-beta on Netlify still has Ask AI off. I will turn it on only after the Edge function is redeployed and AI_ENABLED is flipped. Payments, streaming, and Sentry were out of this slice.',
    availabilityNote:
      'Friend-beta on Netlify. Ask AI is off by default.',
    metaInfo: {
      role: 'Builder',
      timeline: 'Vue 3 MVP, then Next.js 16 friend-beta',
      stack: 'Next.js 16 · React 19 · Supabase',
      focus: 'AI boundary, quotas, tests',
      projectType: 'Personal product'
    },
    styleguideUrl: 'https://cosmictrack-react.netlify.app/en/styleguide',
    architectureFlow: [
      'Browser',
      'Next.js UI and Route Handlers',
      'Supabase Auth and RLS',
      'Edge function ai',
      'OpenAI'
    ],
    architectureFlowNote:
      'On the friend-beta deploy the chain stops before OpenAI. AI_ENABLED is off, so Ask AI does not call the model.',
    hardening: [
      {
        title: 'Billing lock',
        detail:
          'A trigger locks profile columns for plan and AI counters. A signed-in user cannot self-upgrade or reset quota. The service role can still update those columns from the Edge function.'
      },
      {
        title: 'Server-owned prompts',
        detail:
          'The client sends only { title, locale, cards }. The Edge function builds the prompt, enforces AI_ENABLED, applies a timeout, softly refuses off-topic input, and spends quota through reserve_ai_credit and release_ai_credit.'
      },
      {
        title: 'Structured output',
        detail:
          'The model must return JSON { interpretation }. If Zod parse fails, the credit is released and the client gets a stable error code. Golden fixtures cover this in CI, with no live OpenAI call.'
      },
      {
        title: 'Critical-path tests',
        detail:
          'askAI maps LIMIT_REACHED, empty, and disabled. Write APIs return 401 without a session. An auth browser test exists and is skipped in CI when secrets are not set.'
      },
      {
        title: 'Edge logs',
        detail:
          'Logs use scope "ai": request id, a hash of the user id, latency, outcome, and token usage when the provider sends it. They omit secrets, emails, and raw titles. The response sets X-Request-Id.'
      },
      {
        title: 'API cleanup',
        detail:
          'Shared constants for AI limits, Zod on write APIs, a CORS allowlist instead of *, and a tsconfig fix so the checks typecheck in CI.'
      },
      {
        title: 'UI around the same path',
        detail:
          'Skip link, a categories nav that works on a phone, prefers-reduced-motion, and AI retry toasts that can show remaining credits when the feature is on.'
      }
    ],
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
        title: 'Ask AI stays off until the flag flips',
        decision:
          'The client sends { title, locale, cards }. The Edge function owns the prompt and refuses the call when AI_ENABLED is off. Friend-beta ships with that switch off.',
        why:
          'The first Edge function accepted a client-built prompt and updated quota with a check-then-write. I did not want that path live while the lock, RPCs, and tests were landing.',
        impact:
          'The demo journal works without calling OpenAI. The AI code is in the repo, gated, and covered by fixtures that do not need a production key.'
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
        'Rebuilding CosmicTrack from Vue 3 to Next.js 16 (React 19) meant a new architecture for the same product, and a different mental model. Below is an honest map of what changed and where friction showed up.',
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
        'I am still torn on which ecosystem I prefer. Next.js asks for more boilerplate and explicit boundaries; in return I get strong typing and a server boundary I can test. For a quick MVP, the Vue SPA felt nimbler. For CosmicTrack, with two locales and a gated AI path, the React stack earns its complexity.',
      status:
        'Friend-beta is on Netlify, in English and Turkish. Ask AI is in the codebase and off by default until the Edge function is redeployed and AI_ENABLED is flipped. Vitest fixtures and the API auth tests run in CI without production secrets.',
      styleguideUrl: 'https://cosmictrack-react.netlify.app/en/styleguide',
      styleguideLabel: 'View component styleguide'
    },
    heroImage: cosmicReactHome,
    features: [
      {
        title: 'Tarot Step Flow',
        description:
          'Each step is a short reading: title the focus, pick three cards, confirm, reveal upright or reversed, and read the static meaning from local tarot data. Ask AI can add a short interpretation, and on friend-beta that button stays off.',
        bullets: [
          'CardPicker: select three backs, confirm, reveal. The same component covers add and edit-note.',
          'Picked cards persist as { id, isReversed } jsonb on steps.cards, the same shape as the Vue app.',
          'When AI is enabled, the client sends title, locale, and cards. It does not send a prompt.'
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
        'Not a cosmetic port: English and Turkish with next-intl, Next Route Handlers, TanStack Query, locale-aware Zod forms, and a later pass that locked the AI prompt and quota on the server.',
      highlights: [
        'Single-language (Turkish) — no locale routing',
        'Pinia for all server-shaped state + manual optimistic rollbacks',
        'CardPicker.vue — 26-column grid, three-card selection flow',
        'Anon-key AI calls. The Next.js app replaces that with a server-owned prompt, and friend-beta keeps the feature off.'
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
      'The browser was assembling the prompt, so a client could ask for something the product never intended.',
      'Quota used check-then-update, so two requests could both pass the check.',
      'Plan and AI counter columns on profiles needed a database lock, not only a UI that hides the fields.',
      'A model reply that was not JSON { interpretation } had to fail closed and give the credit back.',
      'Logs had to show latency and outcome without storing the title, the email, or the secret.'
    ],
    results: {
      technical: [
        'A signed-in user cannot update plan or AI counter columns. The service role still can.',
        'The prompt is built on the server. reserve_ai_credit and release_ai_credit take a row lock, so two requests cannot both spend the same credit.',
        'Invalid model JSON releases the credit and returns a stable error code.',
        'CI runs the golden fixtures and the askAI and API auth tests without production secrets.'
      ],
      product: [
        'Public pages: home, tarot library, and Card of the Day. Signed-in pages: journeys, steps, categories, favorites, profile, and account delete.',
        'English and Turkish, with locale prefixes.',
        'Ask AI is implemented and off on the friend-beta Netlify deploy.',
        'When the flag is on, a retry toast can show the credits that remain. This deploy does not send that traffic.'
      ]
    },
    nextStepsIntro:
      'Payments, streaming, and Sentry were left out of this slice. Ask AI stays off on the public demo until the Edge function is redeployed and the flag is flipped.',
    nextSteps: [
      'Turn Ask AI on for friend-beta only after that redeploy.',
      'Add Sentry, or another error sink, once there is production traffic to watch.',
      'Stream the interpretation after the JSON contract stays stable.',
      'Grow the eval set past the golden fixtures that already run in CI.'
    ],
    technologies: [
      'React 19',
      'Next.js 16',
      'TypeScript',
      'next-intl',
      'Supabase',
      'TanStack Query',
      'Zod',
      'Vitest',
      'Playwright',
      'Tailwind CSS v4',
      'Vue 3 (archived)'
    ],
    route: '/projects/cosmictrack',
    liveUrl: 'https://cosmictrack-react.netlify.app/',
    github: 'https://github.com/esmaari/cosmictrack-react'
  },

  /* ================= SINEVEGA ================= */

  {
    slug: 'sinevega',
    title: 'SineVega — Cinematic Discovery Hub',
    impact:
      'A public Vue movie browser. Film data still comes from TMDB. Favorites last only until refresh, because this demo no longer runs a database.',
    overview:
      'I first built browse, search, movie and person pages, plus register, login, profile, and a saved list. A visitor now can browse, search, and mark a favorite in the open tab. They cannot register or log in on the public site.',
    technical:
      'The public code is a Vue app on Netlify, a serverless function that requests TMDB, and a Pinia store for favorites. The first version also had Express and MySQL on Railway. I chose that so accounts and favorites had a database. I shut it down because this demo does not need its own database anymore.',
    strategy:
      'I still wanted a normal link, and I still wanted live film data, not a copied catalog. The membership screens, Express, and MySQL stay in the repository so that code is readable. They are not mounted on the public site, and that site does not collect emails or passwords.',
    availabilityNote:
      'The live demo is on Netlify. It does not collect accounts.',
    metaInfo: {
      role: 'Frontend engineer',
      timeline: 'First full-stack app, then a Netlify demo',
      stack: 'Vue 3 · TypeScript · Netlify',
      focus: 'Live movie data, in-tab favorites',
      projectType: 'Public demo'
    },
    architectureFlow: ['Browser', 'Vue on Netlify', 'Netlify function', 'TMDB'],
    architectureFlowNote:
      'I used to run Browser → Vue → Express on Railway → MySQL. I closed Railway. That path is not what the public site runs.',
    architectureDecisions: [
      {
        title: 'One server-side path for movie requests',
        decision:
          'Search, movie, trailer, cast, similar movies, and person pages call /api. A Netlify function requests TMDB.',
        why: 'I still wanted live film data, and I did not want each page to call TMDB on its own.',
        impact: 'The catalog is not a copy. A search or a movie id is sent to TMDB.'
      },
      {
        title: 'Favorites kept in the tab',
        decision: 'The heart writes to a Pinia store in memory. It does not use localStorage or a server.',
        why: 'I no longer keep a database for this demo. I still wanted a favorite action without an account.',
        impact: 'Refresh clears the list. The public site does not store favorites.'
      },
      {
        title: 'Membership code kept, public UI disconnected',
        decision:
          'Register, login, profile, Express, and MySQL remain in the repository. They are not mounted on the public UI.',
        why: 'I chose Railway for that version, then closed it. I kept the code, and I did not want the public site to collect emails or passwords.',
        impact:
          'The login, register, and profile screenshots are that earlier product. A visitor on the live site cannot sign in.'
      },
      {
        title: 'TMDB credited on the page',
        decision:
          'The site shows TMDB’s official logo, unmodified and smaller than the SineVega name, plus a notice that it uses TMDB and the TMDB APIs but is not endorsed, certified, or otherwise approved by TMDB.',
        why: 'Movie data still comes from their API. The demo is for learning and portfolio use, and it is non-commercial.',
        impact:
          'Privacy, terms, about, and the legal notice say the public site does not create accounts or store emails and passwords.'
      }
    ],
    design: {
      description:
        'Screenshots from the first version: home, movie, person, profile, and register. Login, register, and profile are not on the public site.',
      images: [svHome, svMovieDetails, svPersonDetails, svProfile, svRegister]
    },
    heroImage: sinevegaPreview,
    features: [
      {
        title: 'Search',
        description:
          'This is the public demo. Search goes through the Netlify function. The visible UI is in English.',
        image: svSearchResult
      },
      {
        title: 'Movie and person pages',
        description:
          'A title or a person still loads live from TMDB: details, trailer, cast, and similar movies use the same /api path.',
        image: svMovieDetails
      },
      {
        title: 'Account screens, earlier version',
        description:
          'Register, login, and profile are from the Railway version, when favorites were saved for the logged-in user. Those screens are not on the public site.',
        image: svLogin
      }
    ],
    technologies: ['Vue 3', 'TypeScript', 'Pinia', 'Bootstrap', 'TMDB API', 'Netlify'],
    route: '/projects/sinevega',
    liveUrl: 'https://sinevega.netlify.app/',
    github: 'https://github.com/esmaari/SineVega'
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

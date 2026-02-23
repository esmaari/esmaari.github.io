import sinevegaPreview from '@/assets/sinevega/sinevega-preview.png'
import cosmicPreview from '@/assets/cosmictrack/cosmicPreview26.png'
import cosmictrackJourneys from '@/assets/cosmictrack/cosmictrack-journeys.png'
import cosmictrackAddStep from '@/assets/cosmictrack/cosmictrack-addstep.png'

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

export const projects = [

  /* ================= COSMICTRACK ================= */

  {
    slug: 'cosmictrack',
    title: 'Cosmic Track',
    impact: 'Tarot-based journaling platform built with Vue 3 and Supabase.',
    overview: `A spiritual journaling app designed for structured reflection and personal growth.`,
    technical: `Vue 3, Supabase backend, categorized entries, scalable state management.`,
    architectureDecisions: [
      {
        title: 'Vue 3 + Composition API',
        decision: 'Organized core flows with composables and explicit component boundaries.',
        why: 'The journaling product has multiple dependent interactions that need predictable state handling.',
        impact: 'Improved maintainability and faster feature iteration without coupling UI logic.'
      },
      {
        title: 'Supabase + RLS',
        decision: 'Used Supabase as backend and applied row-level access boundaries for user-owned entries.',
        why: 'Personal journaling data requires strict ownership and clean auth-aware data access.',
        impact: 'Safer data operations and a production-ready auth/data foundation.'
      },
      {
        title: 'Relational Journey Model',
        decision: 'Modeled journeys and categorized steps as structured entities.',
        why: 'A clear relationship model was needed to scale flows beyond simple note-taking.',
        impact: 'Enabled extensible feature growth and clearer reporting logic in future releases.'
      }
    ],
    heroImage: cosmicPreview,
    features: [
      {
        title: 'Journey Management',
        description: 'Structured journaling flow with categorized steps.',
        image: cosmictrackJourneys
      },
      {
        title: 'Step Creation Interface',
        description: 'Composable UI system for adding dynamic entries.',
        image: cosmictrackAddStep
      }
    ],
    technologies: ['Vue 3', 'Vite', 'Supabase', 'Tailwind CSS'],
    route: '/projects/cosmictrack',
    liveUrl: 'https://cosmictrack.netlify.app/'
  },

  /* ================= SINEVEGA ================= */

  {
    slug: 'sinevega',
    title: 'SineVega',
    impact: 'Movie discovery platform with real-time TMDb API integration.',
    overview: `Search, explore and save movies using Vue 3 and Pinia.`,
    technical: `Real-time API integration with modular component architecture.`,
    architectureDecisions: [
      {
        title: 'Component-Driven Vue Architecture',
        decision: 'Split browse, detail, and account interactions into reusable UI modules.',
        why: 'Movie discovery includes repeated patterns that must stay consistent across screens.',
        impact: 'Reduced duplication and improved long-term maintainability.'
      },
      {
        title: 'TMDb API Service Layer',
        decision: 'Centralized API requests and response handling through dedicated service logic.',
        why: 'Search and detail endpoints require stable request handling and error resilience.',
        impact: 'Cleaner UI components and more reliable runtime behavior.'
      },
      {
        title: 'Pinia State Strategy',
        decision: 'Managed shared state (session/favorites) with Pinia stores.',
        why: 'User-specific actions needed predictable cross-view synchronization.',
        impact: 'Consistent UX and straightforward state updates across the app.'
      }
    ],
    design: {
      description: 'UI structure and layout planning prepared in Figma before implementation.',
      images: [svHome, svMovieDetails, svPersonDetails, svProfile, svRegister]
    },
    heroImage: sinevegaPreview,
    features: [
      {
        title: 'Search & Results',
        description: 'Dynamic API-driven search with paginated responses.',
        image: svSearchResult
      },
      {
        title: 'Authentication & Favorites',
        description: 'User sessions with personalized movie lists.',
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
    title: 'Kanban Issue Tracker',
    impact: 'Production-grade Vue 3 architecture with authentication and testing.',
    overview: `Feature-sliced Kanban board with real-world architecture decisions.`,
    technical: `Vue 3 + TypeScript, auth guards, CRUD workflows, Vitest & Cypress.`,
    architectureDecisions: [
      {
        title: 'Feature-Sliced Frontend Structure',
        decision: 'Grouped code by feature boundaries and reusable domain primitives.',
        why: 'Issue tracking workflows grow quickly and require clear ownership boundaries.',
        impact: 'Scalable codebase with lower onboarding and maintenance cost.'
      },
      {
        title: 'Auth Guards + Access Flow',
        decision: 'Implemented route guards and token-aware request behavior.',
        why: 'Protected product areas require deterministic access control.',
        impact: 'Safer navigation behavior and reliable protected workflows.'
      },
      {
        title: 'Type-Safe CRUD Contracts',
        decision: 'Applied TypeScript-first data contracts across issue operations.',
        why: 'CRUD-heavy products are sensitive to schema drift and runtime mismatch.',
        impact: 'Higher reliability and faster refactoring confidence.'
      }
    ],
    heroImage: kanbanBoard,
    features: [
      {
        title: 'Authentication Flow',
        description: 'Protected routes with token persistence.',
        image: kanbanLogin
      },
      {
        title: 'Issue Editing',
        description: 'Dialog-based CRUD workflow.',
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
    title: 'VanLife – React App',
    impact: 'React + Supabase app with protected routing.',
    overview: `Rebuilt VanLife project with real backend integration.`,
    technical: `React Router 6, TypeScript, Supabase, route guards.`,
    architectureDecisions: [
      {
        title: 'Route-First App Composition',
        decision: 'Built host/public experiences around clear route boundaries and nested layouts.',
        why: 'Different user roles require explicit navigation and access behavior.',
        impact: 'Clearer product flows and simpler extension of protected areas.'
      },
      {
        title: 'Supabase Data Integration',
        decision: 'Replaced mock backend with Supabase-driven real data operations.',
        why: 'Production-like behavior was needed for realistic product delivery.',
        impact: 'End-to-end app realism with stronger deployment confidence.'
      },
      {
        title: 'TypeScript + UI Contract Stability',
        decision: 'Used typed models across listings, details, and auth-related flows.',
        why: 'Shared data across routes required stable, explicit contracts.',
        impact: 'Reduced runtime ambiguity and safer iteration over product features.'
      }
    ],
    heroImage: vanlifePreview,
    features: [
      {
        title: 'Dynamic Van Listings',
        description: 'Real-time Supabase data with filtering.',
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
    title: 'Kozmik Bilinç Okulu',
    impact: 'WooCommerce-based digital product site.',
    overview: `WordPress site for an online spiritual school.`,
    architectureDecisions: [
      {
        title: 'WordPress Content Architecture',
        decision: 'Structured pages and product content around reusable CMS templates.',
        why: 'Frequent content and product updates required low-friction editing.',
        impact: 'Faster publishing workflow and consistent site structure.'
      },
      {
        title: 'WooCommerce Product Flow',
        decision: 'Integrated WooCommerce for digital product lifecycle management.',
        why: 'Checkout and catalog behavior needed a proven e-commerce base.',
        impact: 'Reliable conversion path with manageable operations.'
      },
      {
        title: 'Scalable IA for Learning Content',
        decision: 'Organized navigation and category structure around user learning journeys.',
        why: 'Users needed quicker access to multiple content/product layers.',
        impact: 'Improved discoverability and reduced navigation friction.'
      }
    ],
    heroImage: kboHomePage,
    features: [
      {
        title: 'Menu Layout',
        description: 'Structured navigation for digital content.',
        image: kboMenuPage
      },
      {
        title: 'Card Design',
        description: 'Visual tarot product presentation.',
        image: kboCardDesign
      }
    ],
    technologies: ['WordPress', 'WooCommerce', 'Elementor'],
    route: '/projects/kbo',
    liveUrl: 'https://kozmikbilincokulu.com/'
  },

  {
    slug: 'uad',
    title: 'Uranyen Astroloji Derneği',
    impact: 'Membership-based WordPress platform.',
    overview: `Custom login and gated content system.`,
    architectureDecisions: [
      {
        title: 'Membership-Gated Information Model',
        decision: 'Implemented gated access across premium content sections.',
        why: 'The platform required clear separation between public and member-only content.',
        impact: 'Controlled access model aligned with business and user expectations.'
      },
      {
        title: 'Login-Centric User Journey',
        decision: 'Designed authentication-first navigation for member interactions.',
        why: 'Key user value exists behind account boundaries.',
        impact: 'Clearer onboarding path and stronger member retention flow.'
      },
      {
        title: 'Plugin-Driven Extensibility',
        decision: 'Used stable WordPress plugin boundaries for account and content workflows.',
        why: 'Future capability additions needed predictable extension points.',
        impact: 'Lower maintenance overhead and easier iterative improvements.'
      }
    ],
    heroImage: uadImg,
    technologies: ['WordPress', 'Membership Plugin', 'Elementor'],
    route: '/projects/uad',
    liveUrl: 'https://uranyenastrolojidernegi.com/'
  },

  {
    slug: 'se',
    title: 'Sevilay Eriçdem Website',
    impact: 'Next.js corporate showcase site.',
    overview: `Corporate site with tarot-based interface.`,
    technical: `Next.js 16 + Figma-driven UI.`,
    architectureDecisions: [
      {
        title: 'Next.js App Structure',
        decision: 'Built the site with route-based composition and modular UI sections.',
        why: 'Corporate storytelling and interactive sections needed strong content/page control.',
        impact: 'Flexible content expansion with consistent rendering behavior.'
      },
      {
        title: 'Design-to-Code Pipeline',
        decision: 'Mapped Figma planning into reusable implementation blocks.',
        why: 'Visual consistency and delivery speed required a clear translation workflow.',
        impact: 'Lower UI drift and faster production of polished pages.'
      },
      {
        title: 'Interaction-Focused Component Model',
        decision: 'Structured interactive card experiences as independent, reusable units.',
        why: 'Feature-specific UI interactions needed maintainable logic boundaries.',
        impact: 'Improved maintainability for iterative UX updates.'
      }
    ],
    heroImage: SevilayE26,
    features: [
      {
        title: 'Card Choosing Interface',
        description: 'Interactive card experience.',
        image: SevilayECardChoosingPage
      },
      {
        title: 'Design Mockups',
        description: 'Responsive planning in Figma.',
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
    title: 'React ToDo App',
    impact: 'Task management with localStorage.',
    architectureDecisions: [
      {
        title: 'State-Driven Task Workflow',
        decision: 'Managed task operations through explicit local state transitions.',
        why: 'Even simple CRUD flows require predictable UI behavior.',
        impact: 'Clear interaction model and easier future enhancement.'
      },
      {
        title: 'Persistent Client Storage',
        decision: 'Used localStorage for task persistence between sessions.',
        why: 'Basic continuity was required without backend dependency.',
        impact: 'Practical product behavior with minimal infrastructure.'
      },
      {
        title: 'Reusable List Rendering',
        decision: 'Separated list rendering and action controls into maintainable UI units.',
        why: 'Clean component boundaries improve readability over time.',
        impact: 'Lower complexity and faster refactoring cycles.'
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
    title: 'React Weather App',
    impact: 'Weather app using Open-Meteo API.',
    architectureDecisions: [
      {
        title: 'API-First Data Flow',
        decision: 'Designed fetch and render sequence around external weather endpoints.',
        why: 'Network-driven apps need stable request state handling.',
        impact: 'More predictable UX for loading and result states.'
      },
      {
        title: 'Input-to-Result Pipeline',
        decision: 'Structured city search into a clear query-to-data transformation flow.',
        why: 'User input must map cleanly to API contracts.',
        impact: 'Reduced input ambiguity and improved reliability.'
      },
      {
        title: 'UI Simplicity by Design',
        decision: 'Kept component scope narrow for clarity and maintainability.',
        why: 'Focused apps benefit from minimal but robust UI structure.',
        impact: 'Easier upgrades and lower visual/logic noise.'
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
    title: 'React Meme Generator',
    impact: 'API-based meme generator.',
    architectureDecisions: [
      {
        title: 'Interactive Form State',
        decision: 'Managed text input and selected asset state in a single predictable flow.',
        why: 'Live preview interactions require tight state synchronization.',
        impact: 'Responsive editing experience with low complexity.'
      },
      {
        title: 'API Asset Loading',
        decision: 'Separated random image fetching from rendering logic.',
        why: 'External assets can fail or vary unpredictably.',
        impact: 'More stable rendering and cleaner UI control.'
      },
      {
        title: 'Composable Output Layer',
        decision: 'Built output as reusable composition of image + overlay text.',
        why: 'Output logic must stay clear for future feature extension.',
        impact: 'Maintainable code path for additional editing features.'
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
    title: 'React Travel Journal',
    impact: 'Reusable component-based postcard layout.',
    architectureDecisions: [
      {
        title: 'Data-to-Component Mapping',
        decision: 'Rendered journal entries from structured item data.',
        why: 'Content collections should scale without template duplication.',
        impact: 'Simple extensibility for additional entries.'
      },
      {
        title: 'Reusable Card Composition',
        decision: 'Designed travel cards as repeatable presentation components.',
        why: 'Consistency across entries is central to readability.',
        impact: 'Cleaner UI system and easier visual refinement.'
      },
      {
        title: 'Lightweight Styling Model',
        decision: 'Used scoped styling patterns aligned to component boundaries.',
        why: 'Small projects still benefit from strong style ownership.',
        impact: 'Reduced side effects and easier maintenance.'
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
    title: 'React Tenzies Game',
    impact: 'Dice game with state management.',
    architectureDecisions: [
      {
        title: 'State Transition Game Loop',
        decision: 'Modeled roll/hold/win as explicit state transitions.',
        why: 'Game mechanics depend on deterministic update order.',
        impact: 'Reliable gameplay logic and easier debugging.'
      },
      {
        title: 'Composable Dice Components',
        decision: 'Implemented dice as reusable interactive UI units.',
        why: 'Repeated interaction elements should share one logic model.',
        impact: 'Cleaner implementation and faster iteration.'
      },
      {
        title: 'Derived Win Conditions',
        decision: 'Computed completion state from current dice data rather than manual flags.',
        why: 'Derived state reduces mismatch risk in interactive apps.',
        impact: 'More stable behavior and simpler code paths.'
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
    impact: 'Film-themed word guessing game.',
    architectureDecisions: [
      {
        title: 'Progressive Failure Model',
        decision: 'Represented wrong attempts as staged visual/gameplay transitions.',
        why: 'Clear progression improves player feedback and engagement.',
        impact: 'More readable game state and stronger interaction rhythm.'
      },
      {
        title: 'Input + Validation Pipeline',
        decision: 'Separated guess handling from result evaluation logic.',
        why: 'Game input needs robust validation and deterministic updates.',
        impact: 'Reduced bug surface in repeated interaction cycles.'
      },
      {
        title: 'Theme-Driven UI Components',
        decision: 'Mapped film-themed visuals onto reusable gameplay primitives.',
        why: 'Thematic UI should not compromise maintainable logic.',
        impact: 'Consistent style with stable code organization.'
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
    title: 'Tetris Game',
    impact: 'Vanilla JS canvas game.',
    architectureDecisions: [
      {
        title: 'Canvas Render Loop',
        decision: 'Implemented gameplay via a controlled frame/update loop.',
        why: 'Real-time mechanics require deterministic rendering cadence.',
        impact: 'Stable gameplay pacing and reliable visual updates.'
      },
      {
        title: 'Grid-Based Piece Model',
        decision: 'Modeled tetromino behavior with matrix/grid constraints.',
        why: 'Collision and placement logic depends on explicit spatial rules.',
        impact: 'Predictable game behavior and easier mechanic tuning.'
      },
      {
        title: 'Input Separation',
        decision: 'Handled keyboard input independently from render logic.',
        why: 'Decoupling improves responsiveness and maintainability.',
        impact: 'Cleaner control flow and lower complexity in updates.'
      }
    ],
    heroImage: tetrisImg,
    technologies: ['HTML5', 'JavaScript'],
    route: '/projects/tetris',
    liveUrl: 'https://esmaari.github.io/tetris-game/',
    github: 'https://github.com/esmaari/tetris-game'
  }

]

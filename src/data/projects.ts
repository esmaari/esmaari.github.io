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
    {
        slug: 'cosmictrack',
        title: 'CosmicTrack',
        description: 'A tarot-based journaling app built with Vue 3 and Supabase, now upgraded for a 2026 release.',
        longDescription: `CosmicTrack is an early-stage spiritual journaling app designed for personal growth and self-reflection. 
        It includes tarot card pulls, step-by-step note-taking, and symbolic categorization. The first version was built in just 15 
        days with a focus on core functionality. In January 2026, I shipped a second version with significant improvements and a 
        redesigned interface, and it is now preparing for official public release. I’m also working on AI-powered tarot card 
        interpretations for instant readings. This project is not fully public yet — both the GitHub repository and full showcase 
        are currently private.`,
        image: cosmicPreview,
        gallery: [
            { name: 'Home Screen', path: cosmictrackJourneys },
            { name: 'Add Step Screen', path: cosmictrackAddStep }
        ],
        technologies: ['Vue 3', 'Vite', 'Supabase', 'Tailwind CSS'],
        route: '/projects/cosmictrack',
        liveUrl: 'https://cosmictrack.netlify.app/'
    },
    {
        slug: 'sinevega',
        title: 'SineVega',
        description: 'A movie search and favorites app built with Vue 3 and TMDb API.',
        longDescription: `This project was built with Vue 3 and uses the TMDb API in real time. 
        You can search for movies and create your own favorites list.`,
        image: sinevegaPreview,
        gallery: [
            { name: 'Home', path: svHome },
            { name: 'Login', path: svLogin },
            { name: 'Movie Details', path: svMovieDetails },
            { name: 'Person Details', path: svPersonDetails },
            { name: 'Profile', path: svProfile },
            { name: 'Register', path: svRegister },
            { name: 'Search Result', path: svSearchResult }
        ],
        technologies: ['Vue 3', 'TMDb API', 'Pinia', 'Bootstrap'],
        route: '/projects/sinevega',
        liveUrl: 'https://sinevega-fe-production.up.railway.app/',
        github: 'https://github.com/esmaari/sinevega'
    },
    {
        slug: 'tetris',
        title: 'Tetris Game',
        description: 'A classic Tetris game built with HTML, CSS and JavaScript.',
        longDescription: `A fun browser-based Tetris game created using only vanilla JavaScript and HTML canvas. (Best viewed on desktop.)`,
        image: tetrisImg,
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        route: '/projects/tetris',
        liveUrl: 'https://esmaari.github.io/tetris-game/',
        github: 'https://github.com/esmaari/tetris-game'
    },
    {
        slug: 'kbo',
        title: 'Kozmik Bilinç Okulu',
        description: 'A WordPress-based site for an online spiritual school, with digital product sales.',
        longDescription: `The site is designed for an online school offering digital products via WooCommerce.`,
        image: kboHomePage,
        gallery: [
            { name: 'Menu Page', path: kboMenuPage },
            { name: 'Card Design', path: kboCardDesign }
        ],
        technologies: ['WordPress', 'WooCommerce', 'Elementor'],
        route: '/projects/kbo',
        liveUrl: 'https://kozmikbilincokulu.com/'
    },
    {
        slug: 'uad',
        title: 'Uranyen Astroloji Derneği',
        description: 'A WordPress site with a custom membership system for an astrology association.',
        longDescription: `Built on WordPress with a customized membership system for user registration, login, and gated content.`,
        image: uadImg,
        technologies: ['WordPress', 'Membership Plugin', 'Elementor'],
        route: '/projects/uad',
        liveUrl: 'https://uranyenastrolojidernegi.com/'
    },
    {
        slug: 'se',
        title: 'Sevilay Eriçdem Website',
        description: 'Corporate showcase website built for Sevilay Eriçdem on Next.js 16.',
        longDescription: `A corporate showcase site for Sevilay Eriçdem built with Next.js 16. It includes a masculine/feminine card draw interface, articles, about, and contact pages.`,
        image: SevilayE26,
        gallery: [
            { name: 'Card Choosing Page', path: SevilayECardChoosingPage },
            { name: 'Design Mockups', path: SevilayEDesignMockups }
        ],
        technologies: ['Next.js 16', 'React', 'Figma'],
        route: '/projects/se',
        liveUrl: 'https://www.sevilayericdem.com/',
        github: 'https://github.com/esmaari/sevilayeV_1.0'
    },
    {
        slug: 'react-todo',
        title: 'React ToDo App',
        description: 'A simple to-do list app built with React and localStorage support.',
        longDescription: `A clean and functional to-do list application created with React. 
        Features persistent storage with localStorage, task completion toggles, and delete functionality.`,
        image: reactTodoImg,        
        technologies: ['React', 'JavaScript', 'localStorage', 'Vite'],
        route: '/projects/react-todo',
        liveUrl: 'https://esmasreactlabtodoapp.netlify.app/',
        github: 'https://github.com/esmaari/reactlab_todo_app' 
    },
    {
        slug: 'react-weather',
        title: 'React Weather App',
        description: 'A simple weather app using React and Open-Meteo API.',
        longDescription: `A responsive and lightweight weather application built with React. 
        Users can search for cities, view current weather conditions, and switch between Celsius and Fahrenheit units. 
        The app uses the Open-Meteo API and includes basic UI features with Tailwind CSS.`,
        image: reactWeatherApp, 
        technologies: ['React', 'JavaScript', 'Open-Meteo API', 'Tailwind CSS'],
        route: '/projects/react-weather',
        liveUrl: 'https://esmasreactlabweatherapp.netlify.app/',
        github: 'https://github.com/esmaari/reactlab_weather_app' 
    },
    {
        slug: 'react-meme',
        title: 'React Meme Generator',
        description: 'A fun meme generator app built with React, allowing users to add custom text to random images.',
        longDescription: `A small project built with React that fetches random meme images from an API 
        and lets users add custom top and bottom text. It’s designed to practice state management, 
        form handling, and image rendering in React.`,
        image: reactcreatememe,
        technologies: ['React', 'JavaScript', 'Vite', 'API'],
        route: '/projects/react-meme',
        liveUrl: 'https://esmasreactlabcreatememe.netlify.app/',
        github: 'https://github.com/esmaari/reactlab_create_meme'
    },
    {
        slug: 'react-travel-journal',
        title: 'React Travel Journal',
        description: 'A minimalist travel journal app built with React and custom components.',
        longDescription: `This project was created to explore React components, props, and reusable layouts. 
        It displays a series of travel cards with images, locations, and short notes — designed to feel like 
        a digital postcard gallery.`,
        image: reacttraveljournal,
        technologies: ['React', 'JavaScript', 'Vite', 'CSS Modules'],
        route: '/projects/react-travel-journal',
        liveUrl: 'https://esmasreactlabtraveljournal.netlify.app/',
        github: 'https://github.com/esmaari/reactlab_travel_journal'
  },
  {
        slug: 'react-tenzies-game',
        title: 'React Tenzies Game',
        description: 'A fun dice game built with React and Vite, featuring roll and hold mechanics.',
        longDescription: `This project was created to practice React state management and conditional rendering. 
        The goal is to roll the dice until all values match — players can hold dice between rolls, and a confetti 
        animation celebrates the win. It demonstrates component reusability, event handling, and state updates 
        with hooks.`,
        image: reactapptentiesgame,
        technologies: ['React', 'JavaScript', 'Vite', 'CSS'],
        route: '/projects/react-tenzies-game',
        liveUrl: 'https://esmasreactlabtenziesgame.netlify.app/',
        github: 'https://github.com/esmaari/tenziesgame'
    },
    {
        slug: 'react-take-a-guess',
        title: 'Take a Guess — Clapperboard Hangman',
        description: 'A film-themed hangman game built with React and Vite, featuring animated clapperboards and 9 takes to guess the word.',
        longDescription: `This project was built to practice React state management, conditional rendering, and component composition. 
        The game challenges players to guess a random word within 9 attempts — each wrong guess closes a clapperboard, 
        mimicking a real film take. It demonstrates useState logic, derived state, and clean UI updates with clsx.`,
        image: takeaguess, 
        technologies: ['React', 'JavaScript', 'Vite', 'clsx', 'CSS'],
        route: '/projects/react-take-a-guess',
        liveUrl: 'https://esmasreactlabtakeaguessgame.netlify.app/', 
        github: 'https://github.com/esmaari/take-a-guess'
    },
    {
    slug: 'kanban-issue-tracker',
    title: 'Kanban Issue Tracker',
    description: 'A feature-sliced Kanban board built with Vue 3, TypeScript, Pinia, and Vite.',
    longDescription: `Kanban Issue Tracker is a production-grade frontend architecture project that showcases real-world 
    concepts such as authentication, state management, routing, CRUD workflows, and multi-layer testing. It includes a 
    fully abstracted API layer with automatic mock-backend mode, enabling the entire app to run seamlessly on Netlify 
    without a server.

    The app provides a complete authentication flow with protected routes, token persistence, auto-logout on expiration, 
    and a mock login system (username: "demo", password: "1234") for demonstration purposes. Issues can be created, edited, 
    deleted, and filtered by status, priority, and search query — all built using the FAST UI methodology and 
    feature-based slice architecture.

    UI design focuses on accessibility, reusable Base UI components, and clean UX patterns such as loading, empty, and 
    error states. Testing includes Vitest for unit testing and Cypress for end-to-end flows. This project is fully public, 
    including both the GitHub repository and the live Netlify deployment.`,
    image: kanbanBoard, // you will add this yourself
    gallery: [
        { name: 'Login View', path: kanbanLogin },   
        { name: 'Edit Dialog Screen', path: kanbanEditDialog }
    ],
    technologies: ['Vue 3', 'TypeScript', 'Pinia', 'Vite', 'Cypress', 'Vitest'],
    route: '/projects/kanban-issue-tracker',
    liveUrl: 'https://kanban-issue-tracker.netlify.app/#/login',
    github: 'https://github.com/esmaari/-kanban-issue-tracker'
},


{
    slug: 'vanlife-react',
    title: 'VanLife – React App',
    description: 'A fully rebuilt VanLife application using React Router 6, TypeScript, and Supabase.',
    longDescription: `VanLife is a modern React application rebuilt from the classic Scrimba project but enhanced with 
    real backend capabilities using Supabase. The app features dynamic van listings, route-based filtering, protected 
    routes for host-only sections, real-time data loading from Supabase, and a fully implemented login flow using 
    localStorage-based auth guards.

    Supabase replaces the original MirageJS mock server, providing real API requests, Row Level Security policies, 
    and database-driven content. All vans are fetched from a Supabase table with dynamic filtering (simple, luxury, rugged) 
    and individual detail pages. Host-only routes are protected using a custom <AuthRequired /> component that redirects 
    guests to the login page while preserving their intended route (e.g., redirecting back to /host/vans after login).

    The project is deployed on Netlify with environment variables for Supabase keys, a SPA-friendly redirect configuration, 
    and a clean build pipeline using Vite. This version demonstrates end-to-end production flow: database schema design, 
    security policies, environment setup, dynamic routing, state handling, and optimized frontend architecture — all wrapped 
    in a polished UI following the original VanLife visual style.
    
    This project is fully public, including both the GitHub repository and the live Netlify deployment.`,
    
    image: vanlifePreview,   
    gallery: [
        { name: 'Vans Listing', path: vanlifeListing }
    ],
    technologies: ['React', 'TypeScript', 'React Router 6', 'Supabase', 'Vite', 'Netlify'],
    route: '/projects/vanlife-react',
    liveUrl: 'https://esmasreactlabvanlife.netlify.app/',
    github: 'https://github.com/esmaari/vanlife'
}


]

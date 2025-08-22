import sinevegaPreview from '@/assets/sinevega/sinevega-preview.png'
import cosmicPreview from '@/assets/cosmictrack/cosmicPreview.png'
import ctHome from '@/assets/cosmictrack/ctHome.png'
import ctAddStep from '@/assets/cosmictrack/ctAddstep.png'
import svHome from '@/assets/sinevega/SV_Desktop - 1140px (Home).png'
import svLogin from '@/assets/sinevega/SV_Desktop - 1140px (Login).png'
import svMovieDetails from '@/assets/sinevega/SV_Desktop - 1140px (Movie Details).png'
import svPersonDetails from '@/assets/sinevega/SV_Desktop - 1140px (PersonDetails).png'
import svProfile from '@/assets/sinevega/SV_Desktop - 1140px (Profile).png'
import svRegister from '@/assets/sinevega/SV_Desktop - 1140px (Register).png'
import svSearchResult from '@/assets/sinevega/SV_Desktop - 1140px (SearchResult).png'

import sevilayImg from '@/assets/SevilayE.png'
import uadImg from '@/assets/Uad.png'
import kboImg from '@/assets/project.png'
import tetrisImg from '@/assets/tetris.png'
import reactTodoImg from '@/assets/reacttodoapp.png'
import reactWeatherApp from '@/assets/reactweatherapp.png'

export const projects = [
    {
        slug: 'cosmictrack',
        title: 'CosmicTrack',
        description: 'A minimal tarot-based journaling app built in 15 days with Vue 3 and Supabase.',
        longDescription: `CosmicTrack is an early-stage spiritual journaling app designed for personal growth and self-reflection. 
        It includes tarot card pulls, step-by-step note-taking, and symbolic categorization.
        The first version was built in just 15 days, focusing on functionality over aesthetics. 
        The design is still a work in progress and will be a major focus in the next version.
        This project is not fully public yet — both the GitHub repository and full showcase are currently private.`,
        image: cosmicPreview,
        gallery: [
            ctHome,
            ctAddStep
        ],
        technologies: ['Vue 3', 'Vite', 'Supabase', 'Tailwind CSS'],
        route: '/projects/cosmictrack',
        liveUrl: 'https://jolly-chimera-f23145.netlify.app/'
        // no public GitHub link
    },
    {
        slug: 'sinevega',
        title: 'SineVega',
        description: 'A movie search and favorites app built with Vue 3 and TMDb API.',
        longDescription: `This project was built with Vue 3 and uses the TMDb API in real time. 
        You can search for movies and create your own favorites list.`,
        image: sinevegaPreview,
        gallery: [
            svHome,
            svLogin,
            svMovieDetails,
            svPersonDetails,
            svProfile,
            svRegister,
            svSearchResult
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
        image: kboImg,
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
        description: 'Personal brand website for an author, created with WordPress classic theme.',
        longDescription: `Personal blog and presentation site for Sevilay Eriçdem, author and public speaker.`,
        image: sevilayImg,
        technologies: ['WordPress', 'Classic Theme'],
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
    }
]

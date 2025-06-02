import sinevegaPreview from '@/assets/sinevega/sinevega-preview.png'
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

export const projects = [
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
    }
]

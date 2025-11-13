import verseHero from '../assets/images/verse/4461ADEF-3034-4F67-805B-5C7BD859C357.jpeg'
import highlyteHero from '../assets/images/highlyte/IMG_0098.JPG'
import highlyteGallery1 from '../assets/images/highlyte/IMG_2295.jpg'
import highlyteGallery2 from '../assets/images/highlyte/IMG_5618.jpg'
import highlyteGallery3 from '../assets/images/highlyte/IMG_7003.jpg'

export const collectiveGallery = [
  {
    image: highlyteGallery3,
    alt: 'Highlyte chorus layered in golden light',
    caption: 'HighLyte rehearses weekly in Littleton, building connection through shared singing.',
  },
  {
    image: verseHero,
    alt: 'Verse quartet posing after a performance',
    caption: 'Verse and Counterpoint bring their polish to stages across Colorado.',
  },
  {
    image: highlyteGallery1,
    alt: 'Community rehearsal with singers circled up',
    caption: 'Our quartets grow through competitions, collaborations, and local performances.',
  },
  {
    image: highlyteGallery2,
    alt: 'Singer leading a warmup',
    caption: 'Community events like Highlyte NightLyfe bring singers and neighbors together.',
  },
]

export const groupSpotlights = [
  {
    slug: 'verse',
    name: 'Verse',
    blurb: 'A polished barbershop quartet known for tight harmony, expressive singing, and a strong contest presence.',
    image: verseHero,
    video: 'https://www.youtube.com/embed/cIxYbt1IdgY',
    gallery: [
      verseHero,
      'https://images.unsplash.com/photo-1527766833261-b09c3163a791?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    slug: 'highlyte',
    name: 'Highlyte',
    blurb: 'A welcoming community chorus built on connection, expressive singing, and shared musical moments.',
    image: highlyteHero,
    video: 'https://www.youtube.com/embed/8ZcmTl_1ER8',
    gallery: [highlyteHero, highlyteGallery1, highlyteGallery2, highlyteGallery3],
  },
  {
    slug: 'counterpoint',
    name: 'Counterpoint',
    blurb: 'A lively barbershop quartet known for expressive singing, personality, and a natural sense of fun on stage.',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=80',
    video: 'https://www.youtube.com/embed/jhqyfrs3To0',
    gallery: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    slug: 'golden-ratio',
    name: 'Golden Ratio',
    blurb: 'A newly formed barbershop quartet with fresh harmony, warm blend, and growing momentum.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
    video: 'https://www.youtube.com/embed/1gCulUDvALM',
    gallery: [
      'https://images.unsplash.com/photo-1495435229349-e86db7bfa013?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    slug: 'out-of-range',
    name: 'Out of Range',
    blurb: 'A newly formed quartet with fresh energy, strong blend, and a growing presence in the barbershop contest scene.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
    video: 'https://www.youtube.com/embed/lp-EO5I60KA',
    gallery: [
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=1200&q=80',
    ],
  },
]

import verseHero from '../assets/images/verse/4461ADEF-3034-4F67-805B-5C7BD859C357.jpeg'
import verseGallery2 from '../assets/images/verse/IMG_3678.jpg'
import verseGallery3 from '../assets/images/verse/IMG_3997.jpg'
import highlyteHero from '../assets/images/highlyte/IMG_0098.JPG'
import highlyteGallery1 from '../assets/images/highlyte/IMG_2295.jpg'
import highlyteGallery2 from '../assets/images/highlyte/IMG_5618.jpg'
import highlyteGallery3 from '../assets/images/highlyte/IMG_7003.jpg'
import highlyteGallery4 from '../assets/images/highlyte/DSC04140.JPG'
import highlyteGallery5 from '../assets/images/highlyte/DSC04173.JPG'
import counterpointHero from '../assets/images/counterpoint/C273D0A0-5DC5-4B55-A765-49643EE2DFEE.jpeg'
import counterpointGallery1 from '../assets/images/counterpoint/6C54D227-E764-4BF6-B7F6-EEF059C4BCC0.jpeg'
import counterpointGallery3 from '../assets/images/counterpoint/DSC02144.JPG'
import counterpointGallery4 from '../assets/images/counterpoint/IMG_6405.jpg'
import goldenRatioHero from '../assets/images/goldenratio/DSC01846.JPG'
import outOfRangeHero from '../assets/images/outofrange/DSC02147.JPG'
import outOfRangeGallery2 from '../assets/images/outofrange/DSC02150.JPG'
import outOfRangeGallery3 from '../assets/images/outofrange/DSC02153.JPG'

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
    image: counterpointGallery3,
    alt: 'Counterpoint quartet laughing mid-rehearsal',
    caption: 'Counterpoint layers humor with precision for audiences across the Front Range.',
  },
  {
    image: highlyteGallery5,
    alt: 'Highlyte soloist leading the chorus',
    caption: 'Community events like Highlyte NightLyfe bring singers and neighbors together.',
  },
  {
    image: outOfRangeGallery2,
    alt: 'Out of Range quartet smiling after a set',
    caption: 'Out of Range keeps things playful while prepping for contest season.',
  },
  {
    image: goldenRatioHero,
    alt: 'Golden Ratio quartet in warm stage light',
    caption: 'Golden Ratio brings design-forward harmony to intimate venues.',
  },
]

export const groupSpotlights = [
  {
    slug: 'verse',
    name: 'Verse',
    blurb: 'A polished quartet shaped by blend, storytelling, and an ultra-modern approach to barbershop.',
    image: verseHero,
    video: 'https://www.youtube.com/embed/G6VdCiBoI8s?start=6',
    gallery: [verseHero, verseGallery2, verseGallery3],
  },
  {
    slug: 'highlyte',
    name: 'Highlyte',
    blurb: 'A welcoming community chorus built on connection, expressive singing, and shared musical moments.',
    image: highlyteHero,
    video: 'https://www.youtube.com/embed/8ZcmTl_1ER8',
    gallery: [highlyteHero, highlyteGallery1, highlyteGallery2, highlyteGallery3, highlyteGallery4],
  },
  {
    slug: 'counterpoint',
    name: 'Counterpoint',
    blurb: 'A lively barbershop quartet known for expressive singing, personality, and a natural sense of fun on stage.',
    image: counterpointHero,
    video: 'https://www.youtube.com/embed/t6O0xSyA72A?start=297',
    gallery: [counterpointHero, counterpointGallery1, counterpointGallery3, counterpointGallery4],
  },
  {
    slug: 'golden-ratio',
    name: 'Golden Ratio',
    blurb: 'A newly formed barbershop quartet with fresh harmony, warm blend, and growing momentum.',
    image: goldenRatioHero,
    video: 'https://www.youtube.com/embed/1gCulUDvALM',
    gallery: [goldenRatioHero],
  },
  {
    slug: 'out-of-range',
    name: 'Out of Range',
    blurb: 'A newly formed quartet with fresh energy, strong blend, and a growing presence in the barbershop contest scene.',
    image: outOfRangeHero,
    video: 'https://www.youtube.com/embed/4WyziviyIWg',
    gallery: [outOfRangeHero, outOfRangeGallery2, outOfRangeGallery3],
  },
]

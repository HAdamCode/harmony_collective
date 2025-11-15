import verseHero from '../assets/images/verse/4461ADEF-3034-4F67-805B-5C7BD859C357.jpeg'
import verseLogo from '../assets/images/logos/verse_full.PNG'
import verseGallery1 from '../assets/images/verse/DSC01801.JPG'
import verseGallery2 from '../assets/images/verse/IMG_3678.jpg'
import verseGallery3 from '../assets/images/verse/IMG_3997.jpg'
import verseGallery4 from '../assets/images/verse/IMG_8295.jpg'
import verseGallery5 from '../assets/images/verse/IMG_8824.jpg'
import highlyteHero from '../assets/images/highlyte/IMG_0098.JPG'
import highlyteLogo from '../assets/images/logos/highlyte_full.png'
import highlyteGallery1 from '../assets/images/highlyte/IMG_2295.jpg'
import highlyteGallery2 from '../assets/images/highlyte/IMG_5618.jpg'
import highlyteGallery3 from '../assets/images/highlyte/IMG_7003.jpg'
import highlyteGallery4 from '../assets/images/highlyte/DSC04140.JPG'
import highlyteGallery5 from '../assets/images/highlyte/DSC04173.JPG'
import highlyteGallery6 from '../assets/images/highlyte/DSC04245.JPG'
import counterpointHero from '../assets/images/counterpoint/C273D0A0-5DC5-4B55-A765-49643EE2DFEE.jpeg'
import counterpointGallery1 from '../assets/images/counterpoint/6C54D227-E764-4BF6-B7F6-EEF059C4BCC0.jpeg'
import counterpointGallery2 from '../assets/images/counterpoint/A3CF43F6-6F5B-4EF8-9311-5BF3F1278927.png'
import counterpointGallery3 from '../assets/images/counterpoint/DSC02144.JPG'
import counterpointGallery4 from '../assets/images/counterpoint/IMG_6405.jpg'
import counterpointGallery5 from '../assets/images/counterpoint/20250502_164037.jpg'
import counterpointGallery6 from '../assets/images/counterpoint/37952BA8-54D6-49FA-BB06-F883A8EB891F.jpeg'
import counterpointGallery7 from '../assets/images/counterpoint/F28FEFCF-1A5A-48F4-B2C8-A1521AA109C3.jpeg'
import outOfRangeHero from '../assets/images/outofrange/DSC02147.JPG'
import outOfRangeGallery2 from '../assets/images/outofrange/DSC02150.JPG'
import outOfRangeGallery3 from '../assets/images/outofrange/DSC02153.JPG'
import goldenRatioHero from '../assets/images/goldenratio/DSC01846.JPG'

export const groups = [
  {
    slug: 'verse',
    name: 'Verse',
    city: 'Denver, CO',
    type: 'Barbershop Quartet',
    shortDescription: 'A polished, high-level barbershop quartet known for precision, blend, and heartfelt performances.',
    longDescription:
      'Verse brings a clean, modern barbershop sound shaped by precision, blend, and genuine connection. Their performances balance strong musicianship with an inviting presence that audiences respond to instantly.',
    extendedDescription:
      'Whether singing for local events or competing on the BHS stage, Verse shows up with heart, energy, and a commitment to singing well together.',
    members: [
      { name: 'Grant Hamilton', role: 'Tenor' },
      { name: 'Holly Vose', role: 'Lead' },
      { name: 'Hunter Adam', role: 'Baritone' },
      { name: 'John Aragon', role: 'Bass' },
    ],
    achievements: [
      '2025 BHS International Quartet Contest — 28th place',
      '2025 Rocky Mountain District Champions',
      'Marco Gonzalez Audience Award',
      '2024 BHS Next Gen — 12th place',
    ],
    services: [
      {
        title: 'Spotlight Sets',
        copy: '15–25 minute feature moments that wrap audiences in velvet harmony.',
      },
      {
        title: 'Salon Performances',
        copy: 'Intimate living-room or lounge concerts with cinematic storytelling.',
      },
      {
        title: 'Arrangement Labs',
        copy: 'Custom arranging and coaching intensives for advanced vocal ensembles.',
      },
    ],
    auditionsOpen: false,
    auditionStatus: 'Closed to auditions',
    auditionNote: 'Verse is a competitive quartet and is not auditioning new members.',
    socials: {
      instagram: 'https://instagram.com/versequartet',
      facebook: 'https://www.facebook.com/profile.php?id=61576936911202',
    },
    contactEmail: 'versequartet@gmail.com',
    featuredVideo: 'https://www.youtube.com/embed/G6VdCiBoI8s?start=6',
    heroImage: verseHero,
    logo: verseLogo,
    gallery: [verseHero, verseGallery1, verseGallery2, verseGallery3, verseGallery4, verseGallery5],
    palette: {
      bg: '#0c0512',
      card: '#16071f',
      cardAlt: '#1f0a2e',
      text: '#fdf5ff',
      muted: '#d7c4ef',
      accent: '#f1a9ff',
      accent2: '#c27bff',
      heroGradient: 'linear-gradient(130deg, #2b0a3d, #7c1fe0 55%, #c67cff)',
      overlay: 'rgba(6, 2, 12, 0.55)',
      panelBorder: 'rgba(255, 255, 255, 0.12)',
    },
  },
  {
    slug: 'counterpoint',
    name: 'Counterpoint',
    city: 'Denver, CO',
    type: 'Barbershop Quartet',
    shortDescription: 'A vibrant quartet blending skilled musicianship with humor, heart, and unforgettable performances.',
    longDescription:
      'Counterpoint is a high-energy barbershop quartet known for expressive singing, strong musicianship, and a natural sense of fun on stage. Their performances blend personality, clarity, and charm, making them audience favorites wherever they sing.',
    extendedDescription:
      'Whether competing, performing at community events, or sharing music with friends, Counterpoint brings an infectious spark and a modern take on barbershop harmony.',
    members: [
      { name: 'Molly Rymes', role: 'Tenor' },
      { name: 'Jamie McIntyre', role: 'Lead' },
      { name: 'Rhianna Sponge', role: 'Baritone' },
      { name: 'Holly Vose', role: 'Bass' },
    ],
    achievements: [
      'BHS Rising Star — 3rd place (2023 & 2024)',
      'BHS Rising Star — 2nd place (2025)',
      'BHS International Comedy Contest — 2nd highest score',
    ],
    services: [
      {
        title: 'Mainstage Shows',
        copy: 'High-impact sets with choreography, rhythmic textures, and audience interaction.',
      },
      {
        title: 'Corporate Capsules',
        copy: 'Immersive musical interludes and transitions tailored to conferences or launches.',
      },
      {
        title: 'Residencies',
        copy: 'Weeklong deep dives in rhythm, arranging, and performance coaching.',
      },
    ],
    auditionsOpen: false,
    auditionStatus: 'Closed to auditions',
    auditionNote: 'Counterpoint is currently a fixed quartet and not replacing members.',
    socials: {
      instagram: 'https://instagram.com/counterpoint4tet',
      facebook: 'https://www.facebook.com/profile.php?id=61561243997263',
    },
    featuredVideo: 'https://www.youtube.com/embed/PtskxIfrooU?start=288',
    heroImage: counterpointHero,
    gallery: [
      counterpointHero,
      counterpointGallery1,
      counterpointGallery2,
      counterpointGallery3,
      counterpointGallery4,
      counterpointGallery5,
      counterpointGallery6,
      counterpointGallery7,
    ],
    palette: {
      bg: '#021312',
      card: '#062322',
      cardAlt: '#0d3432',
      text: '#e8fffb',
      muted: '#a6d9d1',
      accent: '#1cc5b7',
      accent2: '#f7c978',
      heroGradient: 'linear-gradient(130deg, #053f3b, #18c1b4 55%, #f7c978)',
      overlay: 'rgba(0, 20, 19, 0.6)',
      panelBorder: 'rgba(28, 197, 183, 0.35)',
    },
  },
  {
    slug: 'highlyte',
    name: 'Highlyte',
    city: 'Littleton, CO',
    type: 'Community Chorus',
    shortDescription: 'A growing community chorus built on connection, shared singing, and meaningful musical moments.',
    longDescription:
      'Highlyte is a growing community chorus based in Littleton, built on connection, shared singing, and welcoming energy. Formed in January 2025 and led by director Jaden Nguyen, the ensemble brings people together through weekly rehearsals and meaningful local performances.',
    extendedDescription:
      'Highlyte has quickly become part of the community through events like Highlyte NightLyfe, performances for organizations such as Bridging Hope, and their annual holiday concert featuring guest artists from across the Collective.',
    members: [],
    achievements: [
      'Hosted the inaugural Highlyte NightLyfe community concert',
      'Performed for Bridging Hope',
      'Holiday collaboration with Verse (2025)',
    ],
    services: [
      {
        title: 'Community Showcases',
        copy: 'Full chorus concerts built around uplifting repertoire and collective energy.',
      },
      {
        title: 'Open Rehearsals',
        copy: 'Interactive rehearsals and coachings for schools, conferences, and arts partners.',
      },
      {
        title: 'Mass Choir Builds',
        copy: 'Pop-up choir experiences that culminate in a powerful joint performance.',
      },
    ],
    auditionsOpen: true,
    auditionStatus: 'Auditions open year-round',
    auditionNote:
      'Attend three rehearsals, receive personalized feedback, and join when the fit feels right. Sign up via the Google Form.',
    auditionLink: 'https://forms.gle/YmyRcVhWfwUniu728',
    socials: {
      instagram: 'https://instagram.com/highlyte.vocals',
      facebook: 'https://www.facebook.com/profile.php?id=61570654318691',
    },
    contactEmail: 'highlyte.vocals@gmail.com',
    featuredVideo: 'https://www.youtube.com/embed/8ZcmTl_1ER8',
    heroImage: highlyteHero,
    logo: highlyteLogo,
    gallery: [
      highlyteHero,
      highlyteGallery1,
      highlyteGallery2,
      highlyteGallery3,
      highlyteGallery4,
      highlyteGallery5,
      highlyteGallery6,
    ],
    palette: {
      bg: '#fef9f2',
      card: '#fff8ec',
      cardAlt: '#fff2d7',
      text: '#2b1800',
      muted: '#7a5210',
      accent: '#f6b426',
      accent2: '#f26b60',
      heroGradient: 'linear-gradient(135deg, #fff5d0, #ffd08a 50%, #f8a07a 85%)',
      overlay: 'rgba(255, 230, 177, 0.25)',
      panelBorder: 'rgba(255, 180, 38, 0.35)',
    },
  },
  {
    slug: 'out-of-range',
    name: 'Out of Range',
    city: 'Golden, CO',
    type: 'Barbershop Quartet',
    shortDescription: 'A newly formed quartet with fresh energy, strong blend, and a growing presence in the barbershop contest scene.',
    longDescription:
      'Out of Range is a newly formed Colorado barbershop quartet bringing fresh energy, tight harmony, and steady growth to the contest stage. Founded in August 2025, they are preparing for the 2026 BHS Next Gen contest and building a sound grounded in blend, connection, and teamwork.',
    extendedDescription:
      'Formed in August 2025, the quartet is prepping for the 2026 BHS Next Gen contest. They are ideal for festivals, school residencies, and hybrid concerts where laughter is welcome.',
    members: [
      { name: 'Molly Rymes', role: 'Tenor' },
      { name: 'Holly Vose', role: 'Lead' },
      { name: 'Hunter Adam', role: 'Baritone' },
      { name: 'Alex Kaminer', role: 'Bass' },
    ],
    achievements: ['Preparing for 2026 BHS Next Gen International Contest'],
    services: [
      {
        title: 'Festival Features',
        copy: 'Fast-paced, comedic sets built for fairs and multi-stage events.',
      },
      {
        title: 'Interactive Workshops',
        copy: 'Audience-inclusive clinics that teach tags, improvisation, and performance tips.',
      },
      {
        title: 'Youth Outreach',
        copy: 'School-day performances and mentorship programs introducing barbershop.',
      },
    ],
    auditionsOpen: false,
    auditionStatus: 'Closed to auditions',
    auditionNote: 'Out of Range is focused on contest preparation with the founding members.',
    socials: {},
    featuredVideo: 'https://www.youtube.com/embed/lp-EO5I60KA',
    heroImage: outOfRangeHero,
    gallery: [outOfRangeHero, outOfRangeGallery2, outOfRangeGallery3],
    palette: {
      bg: '#1b050d',
      card: '#260712',
      cardAlt: '#320818',
      text: '#ffeef3',
      muted: '#f0b9c8',
      accent: '#d85b7a',
      accent2: '#ffa3b9',
      heroGradient: 'linear-gradient(130deg, #2b000d, #6a1b2d 55%, #c75a76)',
      overlay: 'rgba(10, 0, 3, 0.55)',
      panelBorder: 'rgba(255, 175, 196, 0.28)',
    },
  },
  {
    slug: 'golden-ratio',
    name: 'Golden Ratio',
    city: 'Golden, CO',
    type: 'Barbershop Quartet',
    shortDescription: 'A young quartet with tight harmony, heart, and a growing competitive spirit.',
    longDescription:
      'Golden Ratio is a young barbershop quartet bringing fresh harmony, enthusiasm, and heart to the Rocky Mountain District. Since forming in August 2025, they’ve built strong musical chemistry and earned the district’s Novice Quartet title.',
    extendedDescription:
      'Formed in August 2025, the quartet won the Rocky Mountain District Novice award and continues to lean into high-design experiences that feel as refined as their chords.',
    members: [
      { name: 'Molly Rymes', role: 'Tenor' },
      { name: 'Georgia Brooks', role: 'Lead' },
      { name: 'Hunter Adam', role: 'Baritone' },
      { name: 'Micah Zumtobel', role: 'Bass' },
    ],
    achievements: ['2025 Rocky Mountain District Novice Quartet Champions'],
    services: [
      {
        title: 'Listening Salons',
        copy: 'Seated, candlelit concerts highlighting resonance and story arcs.',
      },
      {
        title: 'Custom Scores',
        copy: 'Original vocal scoring for campaigns, films, and art installations.',
      },
      {
        title: 'Luxury Events',
        copy: 'Curated hospitality experiences for museums, resorts, and tastemaker gatherings.',
      },
    ],
    auditionsOpen: false,
    auditionStatus: 'Closed to auditions',
    auditionNote: 'Golden Ratio is currently a set ensemble with its founding members.',
    socials: {},
    featuredVideo: 'https://www.youtube.com/embed/1gCulUDvALM',
    heroImage: goldenRatioHero,
    gallery: [goldenRatioHero],
    palette: {
      bg: '#0f0a03',
      card: '#1b1307',
      cardAlt: '#261a09',
      text: '#fff9ed',
      muted: '#f0debf',
      accent: '#f5c66d',
      accent2: '#ffe3a8',
      heroGradient: 'linear-gradient(130deg, #3a2508, #f5c66d 55%, #ffe3a8)',
      overlay: 'rgba(10, 5, 0, 0.55)',
      panelBorder: 'rgba(245, 198, 109, 0.35)',
    },
  },
]

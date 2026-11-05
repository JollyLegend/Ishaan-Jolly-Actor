export interface PhysicalSpecs {
  height: string;
  heightMetric: string;
  playingAge: string;
  hairColor: string;
  eyeColor: string;
  build: string;
  vocalRange: string;
  vocalQuality: string;
  location: string;
  nationality: string;
  status: string;
}

export interface ShowreelItem {
  id: string;
  title: string;
  category: string;
  statusTag: string;
  duration: string;
  youtubeId: string;
  description: string;
  scenes: {
    time: string;
    seconds: number;
    title: string;
    project: string;
    type: string;
  }[];
}

export interface VoiceSample {
  id: string;
  title: string;
  category: 'commercial' | 'narration' | 'character' | 'documentary';
  duration: string;
  durationSeconds: number;
  tone: string;
  accent: string;
  clientExample: string;
  description: string;
  scriptExcerpt: string;
  isPaidCredit?: boolean;
}

export interface CreditItem {
  id: string;
  year: string;
  title: string;
  role: string;
  medium: string;
  category: 'theatre' | 'screen' | 'scene_study' | 'voiceover';
  directorOrCompany: string;
  notes: string;
  status?: string;
  highlight?: boolean;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'headshot' | 'production' | 'theatre' | 'filmmaking';
  imageUrl: string;
  photographer: string;
  year: string;
  caption: string;
  aspect: 'portrait' | 'landscape';
}

export const PHYSICAL_SPECS: PhysicalSpecs = {
  height: "6'4\"",
  heightMetric: "195 cm",
  playingAge: "20 – 30",
  hairColor: "Dark Brown / Black (Magenta Accent)",
  eyeColor: "Dark Brown",
  build: "Tall, Broad-Framed & Commanding",
  vocalRange: "Deep Resonant British Baritone / Bass",
  vocalQuality: "Authoritative, Warm, Projective, Expressive",
  location: "Southampton, Hampshire, United Kingdom",
  nationality: "British",
  status: "Spotlight Application In Progress · Seeking Representation",
};

export const CASTING_ATTRIBUTES = [
  {
    title: "Commanding 6'4\" Physicality",
    desc: "Unusually tall, broad-framed stature that immediately establishes authority, presence, and cinematic gravity on stage and screen.",
  },
  {
    title: "Deep Resonant Vocal Depth",
    desc: "Naturally deep British speaking voice with strong acoustic projection, clarity, and expressive dynamic range (University Voice Mark: 75).",
  },
  {
    title: "Strength Paired with Warmth",
    desc: "A distinct casting duality: the imposing physical silhouette of a leader or antagonist balanced by approachable charisma and emotional vulnerability.",
  },
  {
    title: "Mythological & Heightened Scale",
    desc: "Proven stage experience embodying larger-than-life figures (Lord Krishna, Lord Shiva, Oberon/Theseus) with poetic and philosophical weight.",
  },
];

export const SHOWREELS: ShowreelItem[] = [
  {
    id: "screen-demo-2026",
    title: "Screen Acting & Scene Studies (Showreel in Development)",
    category: "Screen & Scene Work",
    statusTag: "In Development",
    duration: "2:15",
    youtubeId: "ScMzIvxBSi4", // clean cinematic reel container placeholder
    description: "Screen performance highlights, naturalistic dialogue work, and classical Shakespeare monologues showcasing emotional range and screen presence.",
    scenes: [
      {
        time: "00:00",
        seconds: 0,
        title: "Jean — Power Dynamics & Class",
        project: "Julie: After Strindberg",
        type: "Naturalistic Scene Study",
      },
      {
        time: "00:45",
        seconds: 45,
        title: "Theseus & Oberon Dual Monologue",
        project: "A Midsummer Night's Dream",
        type: "Shakespearean Classical Verse",
      },
      {
        time: "01:25",
        seconds: 85,
        title: "Hamlet Confronts The Ghost",
        project: "Hamlet (Classical Workshop)",
        type: "Dramatic Screen Self-Tape",
      },
      {
        time: "01:50",
        seconds: 110,
        title: "Dan — Dramatic Sequence",
        project: "Dan (Student Film 2026)",
        type: "Contemporary Screen Acting",
      },
    ],
  },
  {
    id: "lakers-lodge-teaser",
    title: "Lakers Lodge (Pre-Production Preview & Concept)",
    category: "Independent Filmmaking",
    statusTag: "In Pre-Production (Dec 2026)",
    duration: "1:40",
    youtubeId: "kJQP7kiw5Fk",
    description: "Atmospheric teaser and visual concept for 'Lakers Lodge' — an actor-led psychological horror short film written, directed, and starring Ishaan Jolly as Leon.",
    scenes: [
      {
        time: "00:00",
        seconds: 0,
        title: "Leon at the Threshold",
        project: "Lakers Lodge (Extended Study)",
        type: "Psychological Horror Concept",
      },
      {
        time: "00:35",
        seconds: 35,
        title: "The Obsession & Audio Recordings",
        project: "Lakers Lodge",
        type: "Atmospheric Sound Design",
      },
      {
        time: "01:10",
        seconds: 70,
        title: "The House Investigation",
        project: "Lakers Lodge",
        type: "Cinematography (Lumix S5 II)",
      },
    ],
  },
];

export const VOICE_SAMPLES: VoiceSample[] = [
  {
    id: "vo-southampton-heritage",
    title: "Southampton: A City Built on Exchange (Paid Voiceover)",
    category: "documentary",
    duration: "0:45",
    durationSeconds: 45,
    tone: "Authoritative, Warm, Historical Gravitas",
    accent: "Contemporary British RP",
    clientExample: "Heritage & Cultural Documentary (Paid Professional Credit)",
    description: "Professional paid voiceover credit narrating the maritime heritage, trade, and cultural evolution of Southampton.",
    scriptExcerpt: "From medieval city walls to transatlantic departure docks, Southampton has always breathed the sea. A city sculpted not merely by stone and salt, but by the relentless rhythm of exchange—of commerce, culture, and human destiny.",
    isPaidCredit: true,
  },
  {
    id: "vo-dramatic-narration",
    title: "Cinematic Narration · 'The Quiet Abyss'",
    category: "narration",
    duration: "0:52",
    durationSeconds: 52,
    tone: "Deep, Resonant, Atmospheric & Paced",
    accent: "Standard British English",
    clientExample: "Cinematic Film Voiceover & Audio Monologue",
    description: "Exploring low-end vocal resonance and cinematic breath control, suited for epic film trailers, mystery narration, and prestige television.",
    scriptExcerpt: "When night settles over the Hampshire coast, the water forgets the day's sunlight. It waits. In the stillness between tides, ancient stories surface—spoken only to those patient enough to listen.",
  },
  {
    id: "vo-mythological-character",
    title: "Lord Krishna & Shiva · 'Divine Soliloquy'",
    category: "character",
    duration: "0:48",
    durationSeconds: 48,
    tone: "Commanding, Majestic, Warm Compassion",
    accent: "Cultivated British / Heightened Epic",
    clientExample: "Mythological & Theatrical Performance",
    description: "Drawing upon stage performances in Diwali Mela and Aum Namah Shivaay, fusing godly authority with profound philosophical warmth.",
    scriptExcerpt: "You worry for tomorrow's battlefield, Arjuna, as if the wheel of time were yours to turn. Lay down your fear. Duty is the only ground upon which the immortal soul stands.",
  },
  {
    id: "vo-video-game-villain",
    title: "Video Game Character · 'The Warlock General'",
    category: "character",
    duration: "0:40",
    durationSeconds: 40,
    tone: "Menacing, Guttural, Steel Resonance",
    accent: "Dark Fantasy British",
    clientExample: "AAA Video Game & Animation Casting",
    description: "Deep-chest character voice utilizing Ishaan's natural bass harmonics and acoustic projection with dark fantasy conviction.",
    scriptExcerpt: "Your walls may be forged of granite, little prince, but hunger has cracked greater fortresses. Open the gates, or watch the sky burn above your crown.",
  },
  {
    id: "vo-commercial-tech",
    title: "Commercial & Brand · 'Precision in Every Frame'",
    category: "commercial",
    duration: "0:35",
    durationSeconds: 35,
    tone: "Confident, Modern, Clean & Engaging",
    accent: "Neutral British Contemporary",
    clientExample: "Commercial & Digital Campaign",
    description: "Approachable, conversational commercial delivery for tech, digital media, and premium consumer campaigns.",
    scriptExcerpt: "Great stories aren't accidental. They're captured in the deliberate choice of light, the honesty of a human glance, and sound that moves you. Create without compromise.",
  },
];

export const CREDITS_DATA: CreditItem[] = [
  // Stage & Live Performance
  {
    id: "st-1",
    year: "2026",
    title: "Diwali Mela",
    role: "Adult Krishna (Lead Character)",
    medium: "Live Theatre / Community Production",
    category: "theatre",
    directorOrCompany: "Community Production (Southampton)",
    notes: "Portrayed Lord Krishna across multiple facets: playful romance, divine authority, philosophical wisdom, friendship (Sudama/Arjuna), and the gravity of the Mahabharata. Noted for emotional range and stage presence.",
    highlight: true,
  },
  {
    id: "st-2",
    year: "2026",
    title: "A Midsummer Night's Dream",
    role: "Theseus & Oberon (Dual Roles)",
    medium: "Shakespearean Classical Theatre",
    category: "theatre",
    directorOrCompany: "University of Winchester",
    notes: "Explored sharp contrasts between mortal law (Theseus) and supernatural woodland leadership (Oberon), requiring rigorous verse control and vocal differentiation.",
    highlight: true,
  },
  {
    id: "st-3",
    year: "2026",
    title: "Trinity: Humanity v Divinity",
    role: "Divinity (Lead Performer)",
    medium: "Original Devised Theatre",
    category: "theatre",
    directorOrCompany: "University of Winchester (Academic Devised)",
    status: "In Development (Nov 2026)",
    notes: "Three-person theatrical project examining morality, suffering, and philosophical conflict through courtroom drama, physical storytelling, sketches, and dance.",
    highlight: true,
  },
  {
    id: "st-4",
    year: "2025",
    title: "Aum Namah Shivaay",
    role: "Lord Shiva",
    medium: "Live Theatre / Community Production",
    category: "theatre",
    directorOrCompany: "Community Stage Production",
    notes: "Portrayed the Hindu deity Shiva, exploring spiritual authority and mythological stature, drawing on 6'4\" physical stature and powerful vocal delivery.",
    highlight: true,
  },

  // Screen & Independent Film
  {
    id: "sc-1",
    year: "2026",
    title: "Dan",
    role: "Dan",
    medium: "Student Short Film",
    category: "screen",
    directorOrCompany: "Independent / Student Film Production",
    notes: "Screen acting lead role focusing on grounded naturalistic performance and close-up camera work.",
  },
  {
    id: "sc-2",
    year: "2026",
    title: "Lakers Lodge",
    role: "Leon (Writer, Lead Actor & Filmmaker)",
    medium: "Independent Psychological Horror Short (25-30 min)",
    category: "screen",
    directorOrCompany: "Ishaan Jolly Films / Extended Independent Study",
    status: "Pre-Production (Planned Dec 2026)",
    notes: "Actor-led psychological horror following a grieving young man investigating a mysterious house and communication with the dead. Built around atmospheric sound and Lumix S5 II cinematography.",
    highlight: true,
  },

  // Voiceover
  {
    id: "vo-1",
    year: "2025",
    title: "Southampton, A City Built on Exchange",
    role: "Voiceover Narrator",
    medium: "Heritage Voiceover Documentary",
    category: "voiceover",
    directorOrCompany: "Professional Paid Voiceover Engagement",
    notes: "Recorded and delivered professional paid historical narration detailing Southampton's maritime trade and heritage.",
    highlight: true,
  },

  // Training & Scene Study Credits
  {
    id: "tr-1",
    year: "2025–2026",
    title: "Hamlet",
    role: "Hamlet & The Ghost",
    medium: "Classical Shakespeare Scene Study",
    category: "scene_study",
    directorOrCompany: "University of Winchester Acting Dept.",
    notes: "Heightened classical text, verse speaking, and psychological exploration of grief and vengeance.",
  },
  {
    id: "tr-2",
    year: "2025–2026",
    title: "Julie: After Strindberg",
    role: "Jean",
    medium: "Naturalistic Theatre Scene Study",
    category: "scene_study",
    directorOrCompany: "University of Winchester Acting Dept.",
    notes: "Psychological realism, power dynamics, class tension, and intimate interpersonal conflict.",
  },
  {
    id: "tr-3",
    year: "2025",
    title: "A Doll's House (Ibsen)",
    role: "Torvald",
    medium: "Naturalistic Scene Study",
    category: "scene_study",
    directorOrCompany: "University of Winchester Acting Dept.",
    notes: "Exploration of domestic authority, social standing, and emotional unraveling.",
  },
  {
    id: "tr-4",
    year: "2025",
    title: "Kramer vs. Kramer",
    role: "Ted Kramer",
    medium: "Dramatic Screen Scene Study",
    category: "scene_study",
    directorOrCompany: "University of Winchester Acting Dept.",
    notes: "Dramatic dialogue, emotional vulnerability, and parent-child emotional stakes.",
  },
  {
    id: "tr-5",
    year: "2024–2025",
    title: "Titus Andronicus",
    role: "Classical Character Work",
    medium: "Shakespearean Workshop",
    category: "scene_study",
    directorOrCompany: "University of Winchester Acting Dept.",
    notes: "Physical command, tragic resonance, and heightened dramatic intensity.",
  },
  {
    id: "tr-6",
    year: "2024",
    title: "A Midsummer Night's Dream (Training)",
    role: "Lysander & Demetrius",
    medium: "Classical Scene Study",
    category: "scene_study",
    directorOrCompany: "University of Winchester Acting Dept.",
    notes: "Physical comedy, romantic banter, and ensemble verse performance.",
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "g-headshot-primary",
    title: "Ishaan Jolly — Professional Headshot (2026)",
    category: "headshot",
    imageUrl: "/assets/aistudio/IshaanJollyHeadshot-ezgif.com-jpg-to-webp-converter_d5dbbc5b.webp",
    photographer: "Official Headshot Portfolio",
    year: "2026",
    caption: "Primary headshot showing Ishaan Jolly's 6'4\" presence, defined bone structure, warm gaze, and signature styled hair.",
    aspect: "portrait",
  },
  {
    id: "g-krishna-theatre",
    title: "Lord Krishna — Diwali Mela Production",
    category: "theatre",
    imageUrl: "/src/assets/images/actor_theatre_stage_still_1793904290085.jpg",
    photographer: "Stage Photography Archive",
    year: "2026",
    caption: "Live stage performance embodying Lord Krishna, blending playful charm with divine authority.",
    aspect: "landscape",
  },
  {
    id: "g-filmmaking-production",
    title: "Cinematography & Directing Rig (Lumix S5 II)",
    category: "filmmaking",
    imageUrl: "/src/assets/images/actor_production_still_1_1793904291572.jpg",
    photographer: "Lakers Lodge Production Still",
    year: "2026",
    caption: "On location for independent filmmaking and screen acting exploration.",
    aspect: "landscape",
  },
  {
    id: "g-voiceover-booth",
    title: "Voice Recording Setup — Sennheiser MKH 416",
    category: "production",
    imageUrl: "/src/assets/images/actor_voiceover_studio_1793904289908.jpg",
    photographer: "Studio Audio Archive",
    year: "2025",
    caption: "Voiceover setup for paid documentary and character voiceover engagements.",
    aspect: "landscape",
  },
  {
    id: "g-contemporary-portrait",
    title: "Screen Casting Portrait Study",
    category: "headshot",
    imageUrl: "/assets/aistudio/IshaanJollyHeadshot-ezgif.com-jpg-to-webp-converter_d5dbbc5b.webp",
    photographer: "Portrait Session",
    year: "2026",
    caption: "Naturalistic screen test showing versatile playing age (20–30) and expressive facial presence.",
    aspect: "portrait",
  },
];

export const TRAINING_AND_TECHNIQUES = {
  institution: "University of Winchester",
  degree: "BA (Hons) Acting (2024–2027 Expected)",
  voiceAchievement: "First-Year Voice Assessment: Mark of 75 (Distinction Level)",
  disciplines: [
    "Stanislavski-based acting & emotional memory",
    "Meisner technique & truthful responsiveness",
    "Naturalistic screen acting & self-tape technique",
    "Shakespearean performance & classical verse speaking",
    "Voice, speech & vocal characterisation",
    "Physical theatre, expressive movement & dance",
    "Ensemble performance & devised original theatre",
    "Improvisation & comedic timing",
    "Independent filmmaking & actor-led storytelling",
  ],
  filmmakingSkills: [
    "Digital Cinematography (Panasonic Lumix S5 II)",
    "Camera operation, framing & composition",
    "Studio & location lighting design",
    "Sound design, Foley & audio recording",
    "Video editing & colour grading",
    "Screenwriting & independent production management",
  ],
  contentCreation: {
    experience: "Online video creator and livestreamer since June 2020 (JollyLegend & JollySFX)",
    takeaway: "Strong confidence before live cameras and microphones, unscripted improvisation, and direct audience connection.",
  },
};

export const CONTACT_DETAILS = {
  name: "Ishaan Jolly",
  email: "ishaanjolly2@gmail.com",
  location: "Southampton, Hampshire, United Kingdom",
  base: "Southampton / London / South Coast",
  spotlightStatus: "Spotlight Application & Registration in Progress",
  representationStatus: "Currently Seeking Theatrical & Voiceover Representation",
  socials: [
    { label: "Email Directly", url: "mailto:ishaanjolly2@gmail.com" },
    { label: "University of Winchester", url: "https://www.winchester.ac.uk" },
  ],
};

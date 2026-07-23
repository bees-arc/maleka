export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  subcategory?: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  imageUrl: string;
  featured?: boolean;
  videoUrl?: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
}

export const MALEKA_BIO = {
  name: "Maleka Maroni",
  title: "Mrs Universe Central America 2026",
  tagline: "Nurse. Survivor. Mother. Advocate for the whole woman — mind, body, and confidence.",
  secondaryTagline: "Healing from the inside out.",
  quote: "Resilience, redefined.",
  instagram: "https://www.instagram.com/mrsuniversemaleka?igsh=MTN2Y2lpZ2g3bXoybQ==",
  handle: "@mrsuniversemaleka",
  heroImage: "/images/maleka-hero.png",
  crowningImage: "/images/maleka-crowning.png",
  nurseImage: "/images/maleka-nurse.png",
  avatarImage: "/images/maleka-hero.png",
  stats: [
    { label: "Years in Nursing", value: "15+" },
    { label: "Children", value: "2" },
    { label: "Crown", value: "2026" },
    { label: "Specialty", value: "MSN, PMHNP Candidate" },
  ],
  aboutSummary: `I'm a registered nurse with 15 years of experience, having built my career in the ICU and Emergency Medicine before discovering my true calling in aesthetics as a nurse injector. That path led me back to school — I recently completed my Master of Science in Nursing, and I'm now preparing for my board certification as a Psychiatric Mental Health Nurse Practitioner. My goal is simple: bring mental wellness and aesthetic medicine together, so the people I care for feel confident, healthy, and empowered from the inside out.`,
  storyDetails: `Nearly ten years ago, I lost my husband and best friend — a loss that reshaped everything I thought I knew about strength. I'm also a cancer survivor. Both experiences could have broken me. Instead, they deepened my compassion and sharpened my belief that even in life's hardest chapters, hope, purpose, and joy can still prevail. Today, I carry that belief into every room I walk into — as a nurse, as a mother, and now, as Mrs Universe Central America 2026.`,
};

export const CATEGORIES = [
  { name: "About", slug: "about", color: "#AE5238" },
  { name: "Advocacy", slug: "advocacy", color: "#225D65" },
  { name: "Pageant Journey", slug: "pageant-journey", color: "#D39932" },
  { name: "Career & MSN", slug: "career", color: "#5C633E" },
  { name: "Personal", slug: "personal", color: "#AE5238" },
];

export const ARTICLES: Article[] = [
  {
    id: "hero-1",
    slug: "a-life-built-on-resilience-maleka-maronis-story",
    title: "A Life Built on Resilience: Healing from the Inside Out",
    category: "About",
    subcategory: "Personal Story",
    excerpt: "From 15 years in ICU & Emergency Nursing to cancer survival and raising two wonderful children—how purpose, grief, and mental wellness formed the foundation for Mrs Universe Central America 2026.",
    content: `
      <p class="lead">I'm a registered nurse with 15 years of experience, having built my career in the ICU and Emergency Medicine before discovering my true calling in aesthetics as a nurse injector.</p>

      <h3>Bridging Mental Wellness & Aesthetic Medicine</h3>
      <p>That path led me back to school — I recently completed my Master of Science in Nursing (MSN), and I'm now preparing for my board certification as a Psychiatric Mental Health Nurse Practitioner (PMHNP). My goal is simple: bring mental wellness and aesthetic medicine together, so the people I care for feel confident, healthy, and empowered from the inside out.</p>

      <blockquote>
        "Confidence isn't cosmetic — it's foundational. Healing starts from the inside out."
      </blockquote>

      <h3>Triumph Through Adversity</h3>
      <p>Nearly ten years ago, I lost my husband and best friend — a loss that reshaped everything I thought I knew about strength. I'm also a cancer survivor. Both experiences could have broken me. Instead, they deepened my compassion and sharpened my belief that even in life's hardest chapters, hope, purpose, and joy can still prevail.</p>

      <p>Today, I carry that belief into every room I walk into — as a nurse, as a mother, and now, as Mrs Universe Central America 2026.</p>
    `,
    date: "July 23, 2026",
    readTime: "5 min read",
    imageUrl: "/images/maleka-hero.png",
    featured: true,
    tags: ["Resilience", "Nursing", "Mental Health", "Pageant Journey"],
    author: {
      name: "Maleka Maroni",
      avatar: "/images/maleka-hero.png"
    }
  },
  {
    id: "art-1",
    slug: "mental-health-for-every-age-platform-pillar",
    title: "Mental Health, For Every Age: Why Wellness Needs a New Conversation",
    category: "Advocacy",
    subcategory: "Platform Pillar 1",
    excerpt: "As a future Psychiatric Mental Health Nurse Practitioner, Maleka highlights how often mental health gets treated as an afterthought—especially for women juggling careers, families, and loss.",
    content: `
      <p>Mental health is not a luxury or a secondary consideration; it is the cornerstone of overall vitality. Women especially balance multi-faceted roles as caregivers, professionals, and mothers, often suppressing their own emotional needs.</p>
      <p>Through community outreach and integrative nursing care, Maleka advocates for accessible mental wellness resources and stigma-free conversations.</p>
    `,
    date: "June 18, 2026",
    readTime: "4 min read",
    imageUrl: "/images/maleka-nurse.png",
    tags: ["Mental Health", "PMHNP", "Advocacy"],
    author: {
      name: "Maleka Maroni",
      avatar: "/images/maleka-hero.png"
    }
  },
  {
    id: "art-2",
    slug: "womens-empowerment-from-scrubs-to-the-pageant-stage",
    title: "Women's Empowerment: From Scrubs to the Pageant Stage",
    category: "Advocacy",
    subcategory: "Platform Pillar 2",
    excerpt: "Confidence isn't cosmetic—it's foundational. Helping women reclaim ownership of how they look, feel, and show up in the world.",
    content: `
      <p>Whether in medical scrubs or wearing a national sash, true empowerment is about autonomy, self-advocacy, and recognizing your inherent worth.</p>
    `,
    date: "May 29, 2026",
    readTime: "3 min read",
    imageUrl: "/images/maleka-crowning.png",
    tags: ["Empowerment", "Women", "Leadership"],
    author: {
      name: "Maleka Maroni",
      avatar: "/images/maleka-hero.png"
    }
  },
  {
    id: "art-3",
    slug: "mrs-universe-central-america-2026-crowning-journey",
    title: "Mrs Universe Central America 2026: The Pageant Journey & Mission",
    category: "Pageant Journey",
    subcategory: "Pageant Title",
    excerpt: "Representing strength, resilience, and Central American heritage on the global stage as Mrs Universe Central America 2026.",
    content: `
      <p>The journey to Mrs Universe Central America represents a lifetime of service, healing, and overcoming obstacles. Maleka prepares to share her platform on the international stage.</p>
    `,
    date: "April 14, 2026",
    readTime: "5 min read",
    imageUrl: "/images/maleka-crowning.png",
    tags: ["Pageant", "Mrs Universe", "Central America"],
    author: {
      name: "Maleka Maroni",
      avatar: "/images/maleka-hero.png"
    }
  },
  {
    id: "art-4",
    slug: "life-outside-the-crown-family-dog-mom-scout-leader",
    title: "Life Outside the Crown: Family, Romeo & Community Leadership",
    category: "Personal",
    subcategory: "Family & Everyday Life",
    excerpt: "Mother to a 17-year-old daughter & 13-year-old son, dog mom to Romeo the Havanese, and dedicated Boy Scout leader.",
    content: `
      <p>Behind the crown and clinical practice is a warm home filled with laughter. Celebrating her daughter's high school graduation, supporting her son's 8th-grade milestones, spending weekends with Romeo, and mentoring youth in Boy Scouts.</p>
    `,
    date: "March 10, 2026",
    readTime: "4 min read",
    imageUrl: "/images/maleka-hero.png",
    tags: ["Personal", "Family", "Boy Scouts", "Romeo"],
    author: {
      name: "Maleka Maroni",
      avatar: "/images/maleka-hero.png"
    }
  },
  {
    id: "art-5",
    slug: "domestic-violence-awareness-voice-for-hope",
    title: "Domestic Violence Awareness: Standing Together for Hope & Safety",
    category: "Advocacy",
    subcategory: "Platform Pillar 3",
    excerpt: "Raising awareness, providing compassionate support, and standing as a beacon of light for survivors.",
    content: `
      <p>Advocating for safety, emotional recovery, and empowerment for individuals affected by domestic violence.</p>
    `,
    date: "February 22, 2026",
    readTime: "4 min read",
    imageUrl: "/images/maleka-nurse.png",
    tags: ["Advocacy", "Support", "Awareness"],
    author: {
      name: "Maleka Maroni",
      avatar: "/images/maleka-hero.png"
    }
  }
];

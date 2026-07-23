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

export const CATEGORIES = [
  { name: "Fashion", slug: "fashion", color: "#AE5238" },
  { name: "Beauty", slug: "beauty", color: "#225D65" },
  { name: "Travel", slug: "travel", color: "#D39932" },
  { name: "Video", slug: "video", color: "#5C633E" },
  { name: "Wellness", slug: "wellness", color: "#AE5238" },
];

export const ARTICLES: Article[] = [
  {
    id: "hero-1",
    slug: "stressed-skin-how-your-daily-routine-affects-the-skin-barrier",
    title: "Stressed Skin: How Your Daily Routine Affects the Skin Barrier",
    category: "Beauty",
    subcategory: "Skin Care",
    excerpt: "The term 'stressed skin' has been coming up more and more in conversations about skincare. Amid fast-paced schedules, environmental factors, and over-exfoliation, protecting your skin barrier is essential.",
    content: `
      <p class="lead">The term "stressed skin" has been coming up more and more in conversations about skincare, and it’s no coincidence. Amid urban pollution, constant blue light exposure, and complex 10-step routines, our skin barrier is under continuous pressure.</p>
      
      <h3>What is Stressed Skin?</h3>
      <p>When the skin barrier—the outermost layer that lock in moisture and repels irritants—becomes compromised, you might experience redness, sudden breakouts, extreme dryness, or a persistent dull look. It’s your skin's way of asking for a simplified, nourishing approach.</p>
      
      <blockquote>
        "Minimalism in skincare isn't just a trend; it's a therapeutic reset for your skin barrier."
      </blockquote>

      <h3>3 Pillars of Barrier Repair</h3>
      <ul>
        <li><strong>Simplify Your Routine:</strong> Pause active acids like AHA/BHA and retinol for 7 to 14 days.</li>
        <li><strong>Prioritize Ceramides & Hyaluronic Acid:</strong> Look for restorative lipid formulations that mirror your natural skin lipid structure.</li>
        <li><strong>Gentle Cleansing:</strong> Switch to a non-foaming, pH-balanced cream or oil cleanser.</li>
      </ul>

      <p>By giving your skin breathing room and sticking to high-performance, restorative ingredients, you will notice a visible glow and restored resilience within weeks.</p>
    `,
    date: "July 17, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    tags: ["Skincare", "Beauty Tips", "Self Care", "Barrier Health"],
    author: {
      name: "Camila Coelho",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    }
  },
  {
    id: "art-1",
    slug: "minimalist-skincare-why-less-is-more-for-your-skin",
    title: "Minimalist Skincare: Why Less is More for Your Skin",
    category: "Beauty",
    subcategory: "Skin Care",
    excerpt: "Discover the power of 'Skinminimalism'—how stripping back your vanity table can give you radiant, balanced skin.",
    content: `
      <p>Overloading your skin with dozens of serums can cause ingredient clashes and micro-inflammation. Skinminimalism focuses on quality over quantity.</p>
      <p>Key staples include a reliable sunscreen, antioxidant vitamin C for the morning, and a rich ceramide moisturizer for nighttime recovery.</p>
    `,
    date: "June 5, 2026",
    readTime: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1512290900673-70020087786f?q=80&w=800&auto=format&fit=crop",
    tags: ["Skincare", "Beauty", "Glow"],
    author: {
      name: "Camila Coelho",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    }
  },
  {
    id: "art-2",
    slug: "brown-in-the-spotlight-how-to-wear-the-trending-color",
    title: "Brown in the Spotlight: How to Wear the Trending Color",
    category: "Fashion",
    subcategory: "Looks",
    excerpt: "Rich chocolate brown, warm terracotta, and mocha shades are replacing black as the ultimate luxury neutral this season.",
    content: `
      <p>Warm earth tones are dominating runways from Paris to New York. Here is how to style monochrome brown tailored suits, liquid satin dresses, and leather boots seamlessly.</p>
    `,
    date: "May 19, 2026",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",
    tags: ["Trends", "Fashion", "Outfits", "Terracotta"],
    author: {
      name: "Camila Coelho",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    }
  },
  {
    id: "art-3",
    slug: "camila-coelho-collection-march",
    title: "Camila Coelho Collection: Spring Elegance",
    category: "Fashion",
    subcategory: "Camila Coelho Collection",
    excerpt: "An exclusive look at the newest drop from the Camila Coelho Collection—fluid silhouettes, statement tailoring, and warm sunset hues.",
    content: `
      <p>Inspired by coastal sunsets and sculpted minimalism, the new spring line blends lightweight linens with bold structural shoulders.</p>
    `,
    date: "March 26, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    tags: ["Collection", "Fashion", "Runway"],
    author: {
      name: "Camila Coelho",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    }
  },
  {
    id: "art-4",
    slug: "nievia-mini-dress-camila-coelhos-elegant-look",
    title: "Nievia Mini Dress: Camila Coelho's Elegant Look",
    category: "Fashion",
    subcategory: "Camila Coelho Collection",
    excerpt: "How to style crisp cream monochrome dresses with gold sculpted jewelry for daytime coffee or evening cocktail events.",
    content: `
      <p>The Nievia Mini Dress features subtle draping and architectural necklines. Pair it with strappy sandals or structured blazers for instant sophistication.</p>
    `,
    date: "March 20, 2026",
    readTime: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
    tags: ["Fashion", "Dresses", "Style Guide"],
    author: {
      name: "Camila Coelho",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    }
  },
  {
    id: "art-5",
    slug: "blue-makeup-is-the-trend-of-the-moment",
    title: "Blue Makeup & Deep Teal Shadows: The Trend of the Moment",
    category: "Beauty",
    subcategory: "Makeup",
    excerpt: "Retro aqua washes and high-pigment deep teal eyeliner are making a major comeback on the red carpet.",
    content: `
      <p>From graphic teal liners to soft cobalt eyeshadow washes, blue tones add effortless drama to warm skin complexions.</p>
    `,
    date: "February 17, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
    tags: ["Makeup", "Beauty", "Trends"],
    author: {
      name: "Camila Coelho",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    }
  },
  {
    id: "art-6",
    slug: "collagen-biostimulators-benefits-and-results",
    title: "Collagen Biostimulators: Benefits, Results, and When to Start",
    category: "Beauty",
    subcategory: "Skin Care",
    excerpt: "Everything you need to know about non-invasive skin treatments that encourage your body's natural collagen production.",
    content: `
      <p>Dermatologists share insights on bio-rejuvenation, long-term firmness, and pairing treatments with topical skincare.</p>
    `,
    date: "September 22, 2025",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
    tags: ["Dermatology", "Skincare", "Wellness"],
    author: {
      name: "Camila Coelho",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    }
  },
  {
    id: "art-7",
    slug: "episode-12-nursery-room-tour",
    title: "Episode 12: Baby Coelho's Room Tour & Interior Design",
    category: "Video",
    subcategory: "Vlog",
    excerpt: "Take an exclusive video tour of the serene, warm cream nursery room designed with custom wooden details and organic textures.",
    content: `
      <p>Watch the full video room tour where Camila reveals design choices, custom furniture, and calming neutral palettes created for the home.</p>
    `,
    date: "July 21, 2022",
    readTime: "12 min watch",
    imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["Video", "Home", "Vlog", "Interior"],
    author: {
      name: "Camila Coelho",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    }
  },
  {
    id: "art-8",
    slug: "summer-getaway-amalfi-coast-travel-guide",
    title: "Summer Getaway: My Amalfi Coast Travel & Style Guide",
    category: "Travel",
    subcategory: "Destinations",
    excerpt: "Cliffside dining, Mediterranean sunsets, and packing the ultimate warm terracotta capsule wardrobe for Italy.",
    content: `
      <p>From Positano boutique hotels to hidden lemon grove cafes, here are my top recommendations for a luxurious Italian escape.</p>
    `,
    date: "August 14, 2025",
    readTime: "7 min read",
    imageUrl: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop",
    tags: ["Travel", "Italy", "Summer", "Guide"],
    author: {
      name: "Camila Coelho",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    }
  },
  {
    id: "art-9",
    slug: "morning-mindfulness-and-glow-routine",
    title: "Morning Mindfulness & High-Vibe Wellness Routine",
    category: "Wellness",
    subcategory: "Lifestyle",
    excerpt: "How 15 minutes of quiet reflection, herbal matcha infusions, and gentle stretching transform your daily creative energy.",
    content: `
      <p>Creating space for mental clarity before opening phone notifications is the single most powerful habit for consistent inspiration.</p>
    `,
    date: "October 11, 2025",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
    tags: ["Wellness", "Mindfulness", "Morning Routine"],
    author: {
      name: "Camila Coelho",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    }
  }
];

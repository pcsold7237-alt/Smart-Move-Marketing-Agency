import { Service, Project, Testimonial, TeamMember, PricingPlan, FAQItem, IndustryNiche, ProcessStep } from "./types";

export const SERVICES: Service[] = [
  {
    id: "smm",
    title: "Social Media Management",
    description: "Complete organic social media execution. We construct your brand voice, plan interactive calendars, and cultivate vibrant organic digital communities.",
    icon: "Layers",
    metric: "3.4x Avg Engagement",
    accentColor: "cyan",
    tags: ["Organic Growth", "Scheduling", "Community Care"]
  },
  {
    id: "content",
    title: "Content Creation",
    description: "Studio-grade visual assets designed to stop the scroll. Bespoke photography, interactive custom grids, and premium copy written to command attention.",
    icon: "Sparkles",
    metric: "100% Original Brand Assets",
    accentColor: "purple",
    tags: ["Photography", "Art Direction", "Visual Tone"]
  },
  {
    id: "design",
    title: "Graphic Design",
    description: "Ultra-premium typography, visual systems, and vector assets. We construct high-end graphic suites that elevate your business from simple local space to iconic lifestyle brand.",
    icon: "PenTool",
    metric: "Bespoke Vector Artistry",
    accentColor: "blue",
    tags: ["Branding", "Vector assets", "Typography"]
  },
  {
    id: "fb-ads",
    title: "Facebook Ads",
    description: "High-yield paid acquisition funnels targeting absolute high-intent buyer cohorts. Optimized dynamically to compress customer acquisition cost.",
    icon: "Target",
    metric: "4.8x Average ROAS",
    accentColor: "magenta",
    tags: ["CBO scaling", "Lookalikes", "Pixel Tuning"]
  },
  {
    id: "ig-ads",
    title: "Instagram Ads",
    description: "Immersive visual ads engineered specifically for stories, explore feed, and vertical scrolls. Turning passive impressions into immediate sales leads.",
    icon: "Instagram",
    metric: "2.1% Click-Through Rate",
    accentColor: "cyan",
    tags: ["Story Funnels", "Grid Ads", "Dynamic Placements"]
  },
  {
    id: "lead-gen",
    title: "Lead Generation",
    description: "Automated pre-qualified sales pipelines. We capture, vet, and deliver high-value inquiries directly into your CRM, ready to sign five-figure deals.",
    icon: "Zap",
    metric: "500+ Qualified Leads/mo",
    accentColor: "purple",
    tags: ["Vetting Forms", "CRM Routing", "Automations"]
  },
  {
    id: "brand-strategy",
    title: "Brand Strategy",
    description: "Future-proof market positioning blueprints. We map your brand's unique value positioning, competitive blindspots, and conversion vectors.",
    icon: "Compass",
    metric: "Defensible Positioning",
    accentColor: "blue",
    tags: ["Competitive Audits", "Value Pillars", "Personas"]
  },
  {
    id: "video-editing",
    title: "Video Editing",
    description: "Cinematic desktop-grade editing tailored for digital platforms. Immersive SFX, dynamic typography overlays, custom audio syncs, and precise color grading.",
    icon: "Film",
    metric: "Award-grade Motion Cuts",
    accentColor: "magenta",
    tags: ["Sound design", "Color Grading", "Visual Hooks"]
  },
  {
    id: "reels",
    title: "Reels Creation",
    description: "Algorithm-optimized, vertical high-impact short-form reels. Built from custom script concepts, dynamic verbal hooks, and highly engaging structures.",
    icon: "Video",
    metric: "24M+ Organic Reach",
    accentColor: "cyan",
    tags: ["Vertical Reels", "Algorithm Scaling", "Script Hooks"]
  },
  {
    id: "performance",
    title: "Performance Marketing",
    description: "Omnichannel budget optimization. Allocating marketing dollars dynamically to channels with the highest lifetime customer value yield.",
    icon: "TrendingUp",
    metric: "-35% Cost per Acquisition",
    accentColor: "purple",
    tags: ["Budget Swaps", "LTV:CAC Scaling", "Omnichannel"]
  },
  {
    id: "analytics",
    title: "Analytics",
    description: "Interactive real-time visual client dashboards. Complete transparent attribution, pixel event logs, and clear customer lifecycle maps.",
    icon: "BarChart3",
    metric: "100% Attribution Clarity",
    accentColor: "blue",
    tags: ["Event logs", "Custom dashboards", "LTV mapping"]
  },
  {
    id: "optimization",
    title: "Optimization",
    description: "Continuous multivariate split testing. Tweaking copy, visual angles, and lead forms daily to lock in compound growth scaling.",
    icon: "RefreshCw",
    metric: "+82% Conversion Rate Growth",
    accentColor: "magenta",
    tags: ["MVT Testing", "A/B splits", "Friction reduction"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Amalfi Reserve Resort",
    category: "Luxury Travel & Hospitality",
    description: "An ultra-premium social strategy and custom brand development that drove full room bookings for the peak summer season through high-concept cinematic reels.",
    client: "Amalfi Reserve Luxury Resort",
    year: "2026",
    metrics: [
      { label: "Summer Bookings", value: "100% Filled" },
      { label: "Organic Reel Views", value: "8.4M+" },
      { label: "Direct ROI", value: "12.4x" }
    ],
    image: "amalfi",
    tags: ["Cinematic Reels", "Brand Identity", "High-Net-Worth Targeting"],
    challenge: "Amalfi Reserve lacked direct booking channels, relying heavily on high-commission agencies (OTAs) that ate into their margins.",
    solution: "We engineered a 'Day in Amalfi' visual narrative. Utilizing ultra-high-definition vertical video, elegant brand identity, and a simplified luxury booking web experience."
  },
  {
    id: "p2",
    title: "Aura Dental & Aesthetic Clinic",
    category: "High-End Medical & Wellness",
    description: "A comprehensive local lead generation funnel and Instagram brand facelift that positioned Aura as the state's premium medical aesthetics center.",
    client: "Aura Aesthetics Group",
    year: "2026",
    metrics: [
      { label: "Qualified Leads", value: "+450/mo" },
      { label: "Treatment Value", value: "Rs. 90M/mo" },
      { label: "Ad Spend ROAS", value: "5.2x" }
    ],
    image: "clinic",
    tags: ["Facebook Lead Ads", "Positioning", "Local Funnels"],
    challenge: "Competing in a saturated market, patients only selected the clinic based on cheap pricing discounts, eroding premium brand value.",
    solution: "We stopped discount advertising. We built an educational 'behind-the-science' video campaign and matched it with high-touch, automated lead vetting forms."
  },
  {
    id: "p3",
    title: "Velvet Lounge Café & Bistro",
    category: "Premium Gastronomy",
    description: "An viral influencer and Reels amplification campaign that established Velvet as the city's most aesthetic, Instagrammable weekend destination.",
    client: "Velvet Bistro Group",
    year: "2026",
    metrics: [
      { label: "Foot Traffic Growth", value: "+180%" },
      { label: "Instagram Followers", value: "+45k" },
      { label: "User Generated Content", value: "4,200+ Posts" }
    ],
    image: "cafe",
    tags: ["Micro-Influencers", "Viral Reel Hooks", "UGC Sourcing"],
    challenge: "Velvet Bistro was losing market share to newer lifestyle spaces despite offering superior cuisine and beautiful brutalist interior design.",
    solution: "We designed a signature menu reveal with theatrical smoke, paired with a VIP influencer launch sequence. We engineered custom photo-spots inside the space."
  },
  {
    id: "p4",
    title: "Arcadia Heights Real Estate",
    category: "Bespoke Property Brokerage",
    description: "A luxury lifestyle-focused video tour campaign and Facebook Ads targeting that sold an entire collection of premium hillside villas in under 45 days.",
    client: "Arcadia Developer Group",
    year: "2026",
    metrics: [
      { label: "Properties Sold", value: "24/24 Villas" },
      { label: "Inquiry to Tour Rate", value: "42%" },
      { label: "Total Asset Value Sold", value: "Rs. 13.5 Billion" }
    ],
    image: "realestate",
    tags: ["Cinematic Tours", "Ultra-HNW targeting", "Interactive Maps"],
    challenge: "Standard static listings were languishing on listing boards, failing to capture emotional buy-in from out-of-state luxury purchasers.",
    solution: "We shot cinematic lifestyle films featuring elite local experiences (helicopter transfers, personal chefs in-villa) instead of basic walkthroughs, backed by high-intent ads."
  },
  {
    id: "p5",
    title: "The Iron Sanctum Gym",
    category: "Luxury Fitness & Wellness",
    description: "A member-acquisition ad framework and community reel sequence that generated consistent high-ticket memberships for an elite fitness club.",
    client: "Iron Sanctum LLC",
    year: "2026",
    metrics: [
      { label: "Annual Memberships", value: "720+ New" },
      { label: "Acquisition Cost", value: "-48%" },
      { label: "Monthly Recurring Rev", value: "+Rs. 30M" }
    ],
    image: "gym",
    tags: ["Social Proof Funnels", "Member Spotlights", "Local Lead Ads"],
    challenge: "High-ticket club membership struggled with client churn and static sales conversions.",
    solution: "We built an aspirational membership-story series. Our campaigns targeted professional high-earning cohorts within a 5-mile radius with high-octane video reels."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Genevieve Dubois",
    role: "Creative Director",
    company: "Amalfi Reserve Resorts",
    quote: "Smart Move did not just handle our socials; they reconstructed our brand value. Booking commissions from external portals dropped by 40% because our direct channels became so incredibly desirable. Their cinematic work is unparalleled.",
    rating: 5,
    avatarSeed: "genevieve"
  },
  {
    id: "t2",
    name: "Dr. Marcus Sterling",
    role: "Founder & Chief Surgeon",
    company: "Aura Aesthetics Group",
    quote: "Our ROAS went from a mediocre 1.5x to an incredible 5.2x in less than sixty days. The leads we receive are highly qualified, ready to book five-figure treatment plans. MoveAI, their integrated strategist, is an incredible bonus.",
    rating: 5,
    avatarSeed: "marcus"
  },
  {
    id: "t3",
    name: "Elena Rostova",
    role: "Lead Partner",
    company: "Arcadia Heights Real Estate",
    quote: "We sold out our hillside villas in forty-five days. Forty-five! The cinematic lifestyle films Smart Move produced were so compelling that several buyers flew in solely based on the video hooks.",
    rating: 5,
    avatarSeed: "elena"
  },
  {
    id: "t4",
    name: "Takeshi Sato",
    role: "Managing Director",
    company: "Velvet Bistro Group",
    quote: "On weekends, we now have a line wrapping around the block. The influencer and viral Reels engine they created is a systemized foot-traffic printer. They are absolute geniuses of the modern algorithm.",
    rating: 5,
    avatarSeed: "takeshi"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Bespoke Research & Audit",
    subtitle: "Analyzing The Blindspots",
    description: "We deep-dive into your brand's digital anatomy, audit your competitors' absolute highest-performing funnels, and analyze target cohort psychology to find immediate high-yield growth opportunities.",
    deliverables: ["Competitor Funnel Breakdown", "Creative Blindspot Report", "Cohort Psychology Profile"],
    duration: "Week 1"
  },
  {
    step: "02",
    title: "High-End Positioning & Strategy",
    subtitle: "Drafting the Master Plan",
    description: "We outline your customized ROI growth formula. This defines your core brand messaging, premium aesthetic direction, content pillar calendar, and lead flow architecture.",
    deliverables: ["Strategic Brand Blueprint", "30-Day Content Matrix", "Lead Pipeline Architecture"],
    duration: "Week 2"
  },
  {
    step: "03",
    title: "Cinematic Content Production",
    subtitle: "Crafting Premium Digital Assets",
    description: "Our production team writes script hooks, directs elite visual shoots, edits cinematic-grade vertical video, and designs luxurious typography layouts that make scrolling past your brand impossible.",
    deliverables: ["High-Concept Reel Drafts", "Luxury Grid Layout Designs", "Conversion-Optimized Ad Creatives"],
    duration: "Weeks 3-4"
  },
  {
    step: "04",
    title: "Laser-Targeted Advertising",
    subtitle: "Deploying the Acquisition Engine",
    description: "We deploy high-intent paid advertising campaigns across Facebook, Instagram, and premium networks, utilizing advanced custom custom audiences, pixel setups, and dynamic creative splitting.",
    deliverables: ["Full Ad Account Restructure", "CBO Scaled Funnels", "A/B Dynamic Variants"],
    duration: "Ongoing"
  },
  {
    step: "05",
    title: "Dynamic Optimization & Analysis",
    subtitle: "Fusing Data with Art",
    description: "We analyze detailed visual watch-times, lead form drop-offs, and custom cohort tracking. We tweak copy, visual hooks, and budget distributions daily to compress your cost-per-acquisition.",
    deliverables: ["Transparent Real-Time Dashboard", "Cohort LTV Assessment", "Ad Variable Swaps"],
    duration: "Ongoing"
  },
  {
    step: "06",
    title: "Exponential Compound Growth",
    subtitle: "Dominating Your Niche",
    description: "With stable systems generating highly predictable lead flow, we aggressively scale top-performing assets, open secondary traffic networks, and establish complete organic/paid niche domination.",
    deliverables: ["Weekly Scaling Reviews", "Competitor Replacement Strategy", "Strategic Expansion Formula"],
    duration: "Scale Horizon"
  }
];

export const NICHES: IndustryNiche[] = [
  {
    id: "luxury-hospitality",
    name: "Hotels & Luxury Resorts",
    icon: "Compass",
    tagline: "Unlocking direct bookings from elite global wanderers.",
    painPoint: "Heavy reliance on third-party OTAs (Booking, Expedia) draining premium booking margins by up to 25%.",
    smartMove: "Interactive, cinematic-first visual journeys highlighting the 'emotional luxury' of your space, integrated with automated booking funnels.",
    roiEstimate: "+120% Direct Bookings"
  },
  {
    id: "aesthetic-medicine",
    name: "Clinics & Medical Spas",
    icon: "Activity",
    tagline: "Vetting five-figure aesthetic clients automatically.",
    painPoint: "Flooded with low-intent inquiries looking for cheap deals, burning hours of front-desk consultation time.",
    smartMove: "Educational 'behind-the-needle' authority content paired with automated, qualifying lead-form sequences.",
    roiEstimate: "+280% Qualified Consultation Rate"
  },
  {
    id: "luxury-real-estate",
    name: "Real Estate Agencies",
    icon: "Home",
    tagline: "Selling ultra-prime real estate via visual desire.",
    painPoint: "Boring MLS lists that fail to communicate the aspirational lifestyle, leading to long listing durations.",
    smartMove: "Cinematic lifestyle house-films featuring luxury neighborhood narratives, backed by hyper-segmented wealth targeting.",
    roiEstimate: "Average 45-Day Sell-Out Cycle"
  },
  {
    id: "gastronomy",
    name: "Cafés & Premium Restaurants",
    icon: "UtensilsCrossed",
    tagline: "Sourcing endless organic foot-traffic on auto-pilot.",
    painPoint: "High weekend foot traffic but empty tables during slow weekdays, heavily vulnerable to transient consumer trends.",
    smartMove: "Aesthetic menu hooks, theatrical UGC setups, and local micro-influencer launch events aimed at high-frequency locals.",
    roiEstimate: "180%+ Customer Foot-Traffic Surge"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "t_m1",
    name: "Muniba Inam",
    role: "Lead Certified AI Strategist & Growth Partner",
    bio: "Experienced in Facebook & Google Ads, content creation, branding and Shopify design. Passionate about using AI tools for creative and effective digital marketing.",
    avatarSeed: "muniba",
    specialty: "AI Digital Marketing Specialist",
    socials: { linkedin: "#", instagram: "#" },
    imagePath: "/src/assets/images/muniba_profile_1784543321645.jpg"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "plan_basic",
    name: "BASIC PACKAGE (Starter)",
    price: "PKR 25,000 - 35,000",
    period: "Month",
    description: "Best for small businesses or startups that are just beginning their online presence.",
    features: [
      "Platforms: Facebook & Instagram (2 Platforms)",
      "Content: 10–12 Static Graphic Posts per month",
      "Copywriting: Basic captions + hashtag research",
      "Ad Management: Basic boosting or single campaign setup (No advanced funnels)",
      "Reporting: Monthly performance report",
      "Inbox / Query Management: Not Included"
    ],
    featured: false
  },
  {
    id: "plan_advance",
    name: "ADVANCE PACKAGE (Growth)",
    price: "PKR 50,000 - 75,000",
    period: "Month",
    description: "Best for growing brands looking to generate consistent leads and sales.",
    features: [
      "Platforms: Facebook, Instagram & TikTok (3 Platforms)",
      "Content: 15 Static Posts + 4–6 Short-form Videos/Reels",
      "Video Editing: Basic editing using CapCut",
      "Story Updates: 3–4 Stories per week",
      "Ad Management: Meta & TikTok Ads with A/B Testing, Lookalike & Retargeting Audiences",
      "Competitor Analysis: Monitor competitor ad strategies",
      "Reporting: Detailed report every 15 days with optimization recommendations"
    ],
    featured: true,
    badge: "Most Selected"
  },
  {
    id: "plan_premium",
    name: "PREMIUM PACKAGE (Enterprise)",
    price: "PKR 100,000 - 150,000+",
    period: "Month",
    description: "Perfect for established businesses, eCommerce brands, and high-ticket service providers.",
    features: [
      "Platforms: Facebook, Instagram, TikTok, LinkedIn & Google Business (4–5 Platforms)",
      "Content: 20–22 Premium Posts including 10+ HD Reels & Videos, Animated Posts & Carousel Designs",
      "Daily Stories: Interactive stories & engagement updates",
      "Advanced Paid Ads: Pixel Setup, Conversion Tracking, Catalog Ads (eCommerce) & Multi-platform Campaign Scaling",
      "Community Management: Daily replies to DMs & Comments",
      "Reporting: Weekly dashboard + Monthly strategy call"
    ],
    featured: false
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq1",
    question: "Do you use basic pre-made social media templates?",
    answer: "Absolutely not. We believe pre-made templates are a quick way to look generic and destroy brand equity. Every vertical script, visual frame, typography layer, and landing page is built strictly from scratch based on custom visual guidelines crafted for your business.",
    category: "General"
  },
  {
    id: "faq2",
    question: "What industries do you specialize in?",
    answer: "We specialize in businesses where visual desire drives high-ticket purchasing decisions. This includes luxury travel and hospitality, aesthetic clinics, luxury real estate brokerages, premium cafes and restaurant groups, high-end fitness spaces, and elite service providers.",
    category: "Experience"
  },
  {
    id: "faq3",
    question: "Are paid ad budgets included in your agency fee?",
    answer: "No, paid ad budgets are paid directly to the advertising networks (Meta, Google, etc.). Our fee covers complete campaign structure, continuous optimization, copywriting, creative asset production, funnel design, and full reporting analysis.",
    category: "Pricing"
  },
  {
    id: "faq4",
    question: "How fast do we see tangible business results?",
    answer: "While building a compounding organic audience is a 3-6 month strategic horizon, our paid lead generation funnels and targeted cinematic campaigns are engineered to launch in under 14 days and generate qualified leads in their first 48 hours of activation.",
    category: "Process"
  }
];

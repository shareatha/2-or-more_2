// Brand content duplicated from the primary 2 or More site so this
// design concept stays fully independent. Update here first.

export const SITE = {
  name: "2 or More",
  tagline: "More than a plan. A perfectly executed experience.",
  email: "business@2ormoreevents.com",
  phone: "(302) 555-0142",
  instagram: "https://instagram.com/2ormoreevents",
  facebook: "https://facebook.com/2ormoreevents",
};

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export const WHAT_WE_DO = [
  {
    title: "Coordinate",
    description:
      "You planned it. We'll execute it — vendor logistics, timeline, and every detail on the day itself.",
    image: "/images/photos/notebook-menu.jpg",
  },
  {
    title: "Plan",
    description:
      "Need more support? We'll help bring the pieces together, from first idea to final walkthrough.",
    image: "/images/photos/tablescape-black-gold.jpg",
  },
  {
    title: "Celebrate",
    description:
      "Weddings, birthdays, showers, milestones, corporate events & more — worth gathering for.",
    image: "/images/photos/champagne-toast.jpg",
  },
];

export type PortfolioCategory =
  | "Weddings"
  | "Celebrations"
  | "Showers"
  | "Corporate"
  | "Behind the Scenes";

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  "Weddings",
  "Celebrations",
  "Showers",
  "Corporate",
  "Behind the Scenes",
];

export type PortfolioItem = {
  id: string;
  title: string;
  location: string;
  services: string;
  category: PortfolioCategory;
  image: string;
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "wedding-wilmington-garden",
    title: "A Garden Wedding",
    location: "Wilmington, Delaware",
    services: "Full-Service Planning",
    category: "Weddings",
    image: "/images/photos/ceremony-arch.jpg",
  },
  {
    id: "shower-newark-modern",
    title: "A Modern Baby Shower",
    location: "Newark, Delaware",
    services: "Coordination + Event Styling",
    category: "Showers",
    image: "/images/photos/baby-shower-modern.jpg",
  },
  {
    id: "corporate-philly-launch",
    title: "A Product Launch Evening",
    location: "Philadelphia, Pennsylvania",
    services: "Corporate Event Coordination",
    category: "Corporate",
    image: "/images/photos/champagne-toast.jpg",
  },
  {
    id: "birthday-annapolis-milestone",
    title: "A 40th Birthday Celebration",
    location: "Annapolis, Maryland",
    services: "Social Event Coordination",
    category: "Celebrations",
    image: "/images/photos/tablescape-gold.jpg",
  },
  {
    id: "wedding-kennett-square-fall",
    title: "A Fall Estate Wedding",
    location: "Kennett Square, Pennsylvania",
    services: "Month-of Management",
    category: "Weddings",
    image: "/images/photos/tablescape-black-gold.jpg",
  },
  {
    id: "bts-team-setup",
    title: "Setup Day, Start to Finish",
    location: "Behind the Scenes",
    services: "Event Setup + Styling",
    category: "Behind the Scenes",
    image: "/images/photos/founder-bw.jpg",
  },
  {
    id: "bridal-shower-rehoboth",
    title: "A Coastal Bridal Shower",
    location: "Rehoboth, Delaware",
    services: "Day-of Coordination",
    category: "Showers",
    image: "/images/photos/bridal-shower-coastal.jpg",
  },
  {
    id: "wedding-main-line-classic",
    title: "A Classic Main Line Wedding",
    location: "Main Line, Pennsylvania",
    services: "Full-Service Planning",
    category: "Weddings",
    image: "/images/photos/notebook-menu.jpg",
  },
];

export const SIGNATURE_OFFER = {
  name: "I've Got It From Here",
  price: "Starting at $2,500",
  headline: "You've planned the party. Now let 2 or More take it from here.",
  description:
    "2 or More steps in approximately 8 weeks before the event and takes over vendor communication, timeline, logistics, floor plan, final details, rehearsal, and event-day coordination.",
};

export const POWER_HOUR = {
  name: "Planning Power Hour",
  price: "$175 / 60 minutes",
  description:
    "For clients who need professional advice but aren't ready for full coordination.",
};

export const SERVICE_AREAS = [
  {
    state: "Delaware",
    cities: "Wilmington, Newark, Hockessin, Middletown, Dover, Rehoboth, Bethany",
  },
  {
    state: "Maryland",
    cities: "Elkton, North East, Baltimore, Annapolis, Eastern Shore",
  },
  {
    state: "Pennsylvania",
    cities: "Philadelphia, West Chester, Media, Kennett Square, Main Line",
  },
];

export const TESTIMONIAL_SPOTLIGHT = {
  quote:
    "2 or More took over two weeks before our wedding and it was the best decision we made. Everything ran exactly on time and I didn't think about logistics once.",
  name: "Alexis R.",
  service: "Wedding Coordination",
  image: "/images/photos/ceremony-arch.jpg",
};

export const FOUNDER = {
  name: "Founder & Lead Coordinator",
  quote:
    "The best events aren't just beautiful — they're well thought out, well executed, and actually enjoyable for the people hosting them.",
  image: "/images/photos/founder-portrait.jpg",
};

export type PricingTier = {
  name: string;
  price: string;
  bestFor: string;
  includes: string[];
};

export const WEDDING_TIERS: PricingTier[] = [
  {
    name: "Day-of Coordination",
    price: "Starting at $1,800",
    bestFor: "Hosts who've planned everything and need execution on the day.",
    includes: [
      "Two pre-event planning calls",
      "Timeline creation & vendor confirmation",
      "Up to 10 hours of on-site coordination",
      "Setup oversight & vendor management",
    ],
  },
  {
    name: "Month-of Management",
    price: "Starting at $2,400",
    bestFor: "Hosts who want a professional hand-off starting 30 days out.",
    includes: [
      "Everything in Day-of Coordination",
      "Vendor communication takeover 30 days prior",
      "Final walkthrough & rehearsal coordination",
      "Detailed timeline distributed to all vendors",
    ],
  },
  {
    name: "Partial Planning",
    price: "Starting at $3,500",
    bestFor: "Hosts who want a planning partner for the final stretch and beyond.",
    includes: [
      "Everything in Month-of Management",
      "Design & vendor recommendations",
      "Budget tracking support",
      "Ongoing planning check-ins",
    ],
  },
  {
    name: "Full-Service Planning",
    price: "Starting at $5,500",
    bestFor: "Hosts who want full support from the very first decision.",
    includes: [
      "Everything in Partial Planning",
      "Full vendor sourcing & booking support",
      "Unlimited planning check-ins",
      "Complete design & logistics management",
    ],
  },
];

export const CELEBRATION_INCLUDES = [
  "Birthdays",
  "Baby Showers",
  "Bridal Showers",
  "Graduations",
  "Engagement Parties",
  "Anniversaries",
  "Milestone Celebrations",
  "Holiday Events",
];

export const CORPORATE_INCLUDES = [
  "Corporate events",
  "Networking events",
  "Launches",
  "Meetings",
  "Fundraisers",
  "Community events",
  "Employee celebrations",
];

export const A_LA_CARTE = [
  { name: "Planning Power Hour", price: "$175" },
  { name: "90-Minute Event Rescue", price: "$250" },
  { name: "Event Design", price: "Starting at $350" },
  { name: "Rehearsal Coordination", price: "$250" },
  { name: "Setup", price: "Starting at $350" },
  { name: "Breakdown", price: "Starting at $350" },
  { name: "Floor Plan Assistance", price: "$150" },
  { name: "Seating Chart Assistance", price: "$150" },
  { name: "Additional Coordination", price: "$400+" },
  { name: "Additional Hours", price: "$125/hour" },
];

export const FAQ_ITEMS = [
  {
    question: "What is day-of coordination?",
    answer:
      "Day-of coordination means you handle the planning and we handle the execution. In the weeks leading up to your event, we take over vendor communication, build your timeline, and manage every detail on the day itself so you can be a guest at your own event.",
  },
  {
    question: "When should I book 2 or More?",
    answer:
      "The sooner the better, especially for weddings, but we regularly step in as late as a few weeks out through our \"I've Got It From Here\" service. Reach out even if you think it might be too late — we'll tell you honestly what's possible.",
  },
  {
    question: "Do you only coordinate weddings?",
    answer:
      "Not at all. We coordinate weddings, birthdays, baby and bridal showers, graduations, anniversaries, corporate events, fundraisers, and community gatherings — basically anything worth gathering for.",
  },
  {
    question: "Do you travel?",
    answer:
      "Yes. We're based in Delaware and regularly serve Maryland and Pennsylvania. If your event is outside our usual service area, reach out and we'll let you know if travel arrangements can be made.",
  },
  {
    question: "Can you help me find vendors?",
    answer:
      "Yes. Depending on your service level, we can recommend trusted vendors from our network or help you evaluate vendors you're already considering.",
  },
  {
    question: "Do you provide décor?",
    answer:
      "Event design and styling can be added on for select services. Let us know what you're envisioning and we'll tell you what's possible for your package.",
  },
  {
    question: "Can I customize a package?",
    answer:
      "Almost always. Our published tiers are starting points — during your consultation we'll talk through your specific event and build a plan that fits.",
  },
  {
    question: "How much does event coordination cost?",
    answer:
      "Pricing depends on the level of support you need, starting at $850 for social event coordination and $1,800 for wedding day-of coordination. Every quote is customized after a consultation.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "For weddings, 6-12 months out is ideal for full-service planning, and 2-3 months out for day-of coordination. For celebrations and corporate events, 4-8 weeks is generally comfortable — but reach out no matter your timeline.",
  },
];

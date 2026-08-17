export interface SiteData {
  hero: {
    eyebrow: string
    headline: string
    supporting: string
    primaryCta: string
    secondaryCta: string
  }
  stats: Array<{
    label: string
    value: string
    prefix?: string
    suffix?: string
  }>
  founder: {
    headline: string
    description: string
    signature: string
  }
  timeline: Array<{
    year: string
    title: string
    description: string
  }>
  companies: Array<{
    name: string
    slug: string
    description: string
    industry: string
    image: string
  }>
  projects: Array<{
    name: string
    subtitle?: string
    slug: string
    location: string
    industry: string
    value?: string
    image: string
    year: string
  }>
  whyUs: Array<{
    title: string
    description: string
    icon: string
  }>
  esg: {
    environment: string
    social: string
    governance: string
  }
  news: Array<{
    title: string
    category: string
    date: string
    excerpt: string
    image: string
  }>
  awards: Array<{
    name: string
    organization: string
    year: string
  }>
  contact: {
    phone: string
    email: string
    address: string
    locations: Array<{
      name: string
      address: string
    }>
  }
  nav: Array<{
    label: string
    href: string
  }>
  footer: {
    overview: string
    quickLinks: Array<{ label: string; href: string }>
    groupCompanies: Array<{ label: string; href: string }>
    socialLinks: Array<{ platform: string; url: string }>
  }
}

export const siteData: SiteData = {
  hero: {
    eyebrow: "SINCE 1952",
    headline: "Building Bahrain.\nBuilding the Future.",
    supporting:
      "A diversified business group with a legacy of excellence and a vision for generations to come.",
    primaryCta: "Explore Our Group",
    secondaryCta: "Watch Corporate Video",
  },
  stats: [
    { label: "Years of Legacy", value: "70", suffix: "+" },
    { label: "Group Companies", value: "16", suffix: "" },
    { label: "Employees", value: "1000", suffix: "+" },
    { label: "Projects Delivered", value: "500", suffix: "+" },
    { label: "BHD Project Value", value: "500", suffix: "M+" },
    { label: "Industries Served", value: "5", suffix: "" },
  ],
  founder: {
    headline: "A Legacy Built on Trust and Excellence",
    description:
      "Established in 1952, Haji Hassan Group has grown from a single vision into one of Bahrain's most respected and diversified business groups. Our commitment to quality, innovation, and integrity has shaped the nation's progress and infrastructure.",
    signature: "Haji Hassan Al-Ali",
  },
  timeline: [
    {
      year: "1952",
      title: "1952",
      description: "The beginning of a remarkable journey",
    },
    {
      year: "1970s",
      title: "1970s",
      description: "Expansion into contracting and infrastructure",
    },
    {
      year: "1990s",
      title: "1990s",
      description: "Diversification across multiple industries",
    },
    {
      year: "Today",
      title: "Today",
      description: "Continuing the legacy, shaping the future",
    },
  ],
  companies: [
    {
      name: "Construction & Engineering",
      slug: "construction",
      description:
        "Major civil engineering and building construction capabilities for large-scale infrastructure and commercial projects.",
      industry: "Construction",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
    },
    {
      name: "Infrastructure & Civil Works",
      slug: "infrastructure",
      description:
        "Roads, bridges, utilities, and public infrastructure development serving Bahrain's national growth.",
      industry: "Infrastructure",
      image:
        "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1000&q=80",
    },
    {
      name: "Ready Mix Concrete",
      slug: "ready-mix",
      description:
        "Large-scale ready-mix concrete production serving construction projects across the Kingdom.",
      industry: "Ready Mix",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",
    },
    {
      name: "Trading & Industries",
      slug: "trading",
      description:
        "Import, export, and distribution of construction materials, equipment, and industrial supplies.",
      industry: "Trading",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
    },
    {
      name: "Manufacturing & Steel",
      slug: "manufacturing",
      description:
        "Industrial manufacturing of construction materials, structural steel, and pre-cast products.",
      industry: "Manufacturing",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
    },
    {
      name: "Support & Services",
      slug: "services",
      description:
        "Comprehensive services including facility management, equipment rental, and operational support.",
      industry: "Services",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    },
  ],
  projects: [
    {
      name: "Bahrain International Airport",
      subtitle: "Expansion Project",
      slug: "airport-expansion",
      location: "Muharraq, Bahrain",
      industry: "Infrastructure",
      value: "BHD 120M+",
      image:
        "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1000&q=80",
      year: "2020",
    },
    {
      name: "Shaikh Isa bin Salman",
      subtitle: "Causeway & Highway",
      slug: "causeway-maintenance",
      location: "Manama, Bahrain",
      industry: "Roads",
      value: "BHD 80M+",
      image:
        "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1000&q=80",
      year: "2019",
    },
    {
      name: "Bahrain National Stadium",
      subtitle: "Sports Arena Complex",
      slug: "national-stadium",
      location: "Riffa, Bahrain",
      industry: "Buildings",
      value: "BHD 80M+",
      image:
        "https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&w=1000&q=80",
      year: "2021",
    },
    {
      name: "Government & Commercial",
      subtitle: "Financial Towers",
      slug: "commercial-buildings",
      location: "Manama, Bahrain",
      industry: "Buildings",
      value: "BHD 90M+",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
      year: "2022",
    },
    {
      name: "Sitra Heavy Industrial Zone",
      subtitle: "Logistics Hub",
      slug: "sitra-industrial",
      location: "Sitra, Bahrain",
      industry: "Industrial",
      value: "BHD 65M+",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
      year: "2021",
    },
    {
      name: "King Fahad Causeway Link",
      subtitle: "Bridge Infrastructure",
      slug: "king-fahad-causeway",
      location: "Bahrain-Saudi border",
      industry: "Infrastructure",
      value: "BHD 110M+",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
      year: "2023",
    },
    {
      name: "Budaiya Highway Network",
      subtitle: "Arterial Road Upgrade",
      slug: "budaiya-highway-network",
      location: "Budaiya, Bahrain",
      industry: "Roads",
      value: "BHD 45M+",
      image:
        "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1000&q=80",
      year: "2022",
    },
    {
      name: "Al Hidd Manufacturing Hub",
      subtitle: "Steel & Fabrication Plant",
      slug: "hidd-manufacturing",
      location: "Al Hidd, Bahrain",
      industry: "Industrial",
      value: "BHD 75M+",
      image:
        "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1000&q=80",
      year: "2020",
    },
  ],
  whyUs: [
    {
      title: "70+ Years Experience",
      description:
        "Seven decades of engineering and construction excellence across Bahrain and the Gulf region.",
      icon: "Clock",
    },
    {
      title: "Integrated Services",
      description:
        "End-to-end capabilities from design and engineering to construction and project delivery.",
      icon: "Layers",
    },
    {
      title: "Quality Assurance",
      description:
        "Commitment to international quality standards with rigorous processes across all operations.",
      icon: "ShieldCheck",
    },
    {
      title: "Safety Standards",
      description:
        "Industry-leading safety protocols ensuring the well-being of every team member and stakeholder.",
      icon: "HardHat",
    },
    {
      title: "Local Expertise",
      description:
        "Deep understanding of Bahrain's regulatory environment, market conditions, and cultural context.",
      icon: "MapPin",
    },
    {
      title: "Sustainability",
      description:
        "Responsible practices that balance development needs with environmental stewardship.",
      icon: "Leaf",
    },
  ],
  esg: {
    environment:
      "Committed to sustainable construction practices, resource efficiency, and minimizing environmental impact across all operations.",
    social:
      "Investing in community programs, employee welfare, skills development, and creating meaningful career pathways in Bahrain.",
    governance:
      "Upholding corporate responsibility through transparent governance, strict compliance, and unwavering safety standards.",
  },
  news: [
    {
      title: "Haji Hassan Group Unveils New Brand Identity",
      category: "Company News",
      date: "2024-05-15",
      excerpt:
        "The group has unveiled a refreshed corporate brand identity representing growth, innovation, and national leadership.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Green Factory 2025 Award for Haji Hassan Readymix",
      category: "Awards",
      date: "2024-04-28",
      excerpt:
        "Recognized for sustainable concrete production and eco-friendly manufacturing initiatives.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Motorworks Services Appointed Exclusive Bosch Service Partner",
      category: "Partnerships",
      date: "2024-04-10",
      excerpt:
        "A major strategic alliance strengthening technical capabilities and industrial service standards in Bahrain.",
      image:
        "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80",
    },
  ],
  awards: [
    { name: "ISO 9001", organization: "Quality Management", year: "2023" },
    { name: "ISO 14001", organization: "Environmental Management", year: "2023" },
    { name: "ISO 45001", organization: "Occupational Health & Safety", year: "2023" },
    { name: "Safety Excellence Award", organization: "Bahrain Society of Engineers", year: "2023" },
    { name: "Best Construction Company", organization: "Bahrain Industry Awards", year: "2022" },
    { name: "Green Building Award", organization: "Gulf Construction Awards", year: "2022" },
  ],
  contact: {
    phone: "+973 17 000 000",
    email: "info@hajihassangroup.com",
    address: "P.O. Box 1234, Manama, Kingdom of Bahrain",
    locations: [
      {
        name: "Head Office",
        address: "P.O. Box 1234, Manama, Kingdom of Bahrain",
      },
      {
        name: "Operations Office",
        address: "Industrial Area, Sitra, Kingdom of Bahrain",
      },
    ],
  },
  nav: [
    { label: "About Us", href: "#about" },
    { label: "Companies", href: "#companies" },
    { label: "Projects", href: "#projects" },
    { label: "Why Us", href: "#why-us" },
    { label: "News & Media", href: "#media" },
    { label: "Contact", href: "#contact" },
  ],
  footer: {
    overview:
      "Established in 1952, Haji Hassan Group is a diversified Bahraini enterprise with leading capabilities in construction, infrastructure, ready-mix concrete, trading, manufacturing, and services.",
    quickLinks: [
      { label: "About Us", href: "#about" },
      { label: "Our Companies", href: "#companies" },
      { label: "Projects", href: "#projects" },
      { label: "Careers", href: "#careers" },
      { label: "Contact Us", href: "#contact" },
    ],
    groupCompanies: [
      { label: "Haji Hassan Construction", href: "#companies" },
      { label: "Haji Hassan Infrastructure", href: "#companies" },
      { label: "Haji Hassan Ready Mix", href: "#companies" },
      { label: "Haji Hassan Trading", href: "#companies" },
      { label: "Haji Hassan Manufacturing", href: "#companies" },
      { label: "Haji Hassan Services", href: "#companies" },
    ],
    socialLinks: [
      { platform: "LinkedIn", url: "#" },
      { platform: "Twitter", url: "#" },
      { platform: "Instagram", url: "#" },
    ],
  },
}

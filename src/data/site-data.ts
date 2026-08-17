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
    slug: string
    location: string
    industry: string
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
    headline: "Building Bahrain.\nBuilding The Future.",
    supporting:
      "Supporting national growth through engineering, construction and diversified industries.",
    primaryCta: "Explore Group",
    secondaryCta: "Watch Corporate Film",
  },
  stats: [
    { label: "Years of Legacy", value: "70", suffix: "+" },
    { label: "Group Companies", value: "16", suffix: "" },
    { label: "Employees", value: "1000", suffix: "+" },
    { label: "Projects Delivered", value: "500", suffix: "+" },
    { label: "Industries", value: "5", suffix: "" },
  ],
  founder: {
    headline: "A Legacy Built on Trust and Excellence",
    description:
      "Since its founding in 1952, Haji Hassan Group has grown from a modest trading enterprise into one of Bahrain's most diversified business conglomerates. Rooted in the Kingdom's rich commercial heritage, the group has been instrumental in shaping Bahrain's modern infrastructure landscape — from roads and bridges to ready-mix concrete and industrial manufacturing. Across seven decades, the group has remained guided by the founding principles of integrity, quality, and an unwavering commitment to national development.",
    signature: "Haji Hassan Group",
  },
  timeline: [
    {
      year: "1952",
      title: "Foundation",
      description:
        "Haji Hassan Group was established in the Kingdom of Bahrain, beginning as a trading enterprise during the nation's early development era.",
    },
    {
      year: "1970",
      title: "Expansion into Construction",
      description:
        "The group expanded into construction and civil engineering, contributing to Bahrain's rapid infrastructure development.",
    },
    {
      year: "1990",
      title: "Diversification",
      description:
        "Significant diversification into manufacturing, ready-mix concrete, and industrial services, establishing multiple group companies.",
    },
    {
      year: "2020",
      title: "Modern Era",
      description:
        "Continued growth with large-scale infrastructure projects and further expansion of the group's diversified business portfolio.",
    },
  ],
  companies: [
    {
      name: "Haji Hassan Construction",
      slug: "construction",
      description:
        "Major civil engineering and building construction capabilities for large-scale infrastructure and commercial projects.",
      industry: "Construction",
      image: "/images/industrial.jpg",
    },
    {
      name: "Haji Hassan Infrastructure",
      slug: "infrastructure",
      description:
        "Roads, bridges, utilities, and public infrastructure development serving Bahrain's national growth.",
      industry: "Infrastructure",
      image: "/images/projects-bg.jpg",
    },
    {
      name: "Haji Hassan Ready Mix",
      slug: "ready-mix",
      description:
        "Large-scale ready-mix concrete production serving construction projects across the Kingdom.",
      industry: "Ready Mix",
      image: "/images/industrial.jpg",
    },
    {
      name: "Haji Hassan Trading",
      slug: "trading",
      description:
        "Import, export, and distribution of construction materials, equipment, and industrial supplies.",
      industry: "Trading",
      image: "/images/founder-section.jpg",
    },
    {
      name: "Haji Hassan Manufacturing",
      slug: "manufacturing",
      description:
        "Industrial manufacturing of construction materials and pre-cast products for the building sector.",
      industry: "Manufacturing",
      image: "/images/industrial.jpg",
    },
    {
      name: "Haji Hassan Services",
      slug: "services",
      description:
        "Comprehensive services including facility management, equipment rental, and operational support.",
      industry: "Services",
      image: "/images/careers-bg.jpg",
    },
  ],
  projects: [
    {
      name: "Bahrain International Airport Expansion",
      slug: "airport-expansion",
      location: "Muharraq, Bahrain",
      industry: "Infrastructure",
      image: "/images/mega-project.jpg",
      year: "2020",
    },
    {
      name: "King Fahad Causeway Maintenance",
      slug: "causeway-maintenance",
      location: "Bahrain-Saudi Arabia",
      industry: "Infrastructure",
      image: "/images/projects-bg.jpg",
      year: "2019",
    },
    {
      name: "Northern Town Infrastructure",
      slug: "northern-town",
      location: "Northern Bahrain",
      industry: "Infrastructure",
      image: "/images/hero-bg.png",
      year: "2021",
    },
    {
      name: "Bahrain Financial Harbour",
      slug: "financial-harbour",
      location: "Manama, Bahrain",
      industry: "Commercial",
      image: "/images/mega-project.jpg",
      year: "2022",
    },
    {
      name: "Budaiya Highway Upgrade",
      slug: "budaiya-highway",
      location: "Budaiya, Bahrain",
      industry: "Roads",
      image: "/images/projects-bg.jpg",
      year: "2023",
    },
    {
      name: "Industrial Area Development",
      slug: "industrial-area",
      location: "Sitra, Bahrain",
      industry: "Industrial",
      image: "/images/industrial.jpg",
      year: "2021",
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
      title: "Haji Hassan Group Completes Major Highway Project",
      category: "Projects",
      date: "2024-03-15",
      excerpt:
        "The group has successfully delivered a key infrastructure project as part of Bahrain's national road development program.",
      image: "/images/projects-bg.jpg",
    },
    {
      title: "New Ready Mix Concrete Facility Opens",
      category: "Company News",
      date: "2024-02-20",
      excerpt:
        "A state-of-the-art ready-mix production facility has been commissioned to meet growing construction demand in Bahrain.",
      image: "/images/industrial.jpg",
    },
    {
      title: "Group Recognized for Safety Excellence",
      category: "Awards",
      date: "2024-01-10",
      excerpt:
        "Haji Hassan Group has received recognition for maintaining industry-leading safety standards across all operations.",
      image: "/images/careers-bg.jpg",
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
    { label: "Investors", href: "#investors" },
    { label: "Careers", href: "#careers" },
    { label: "Media Center", href: "#media" },
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

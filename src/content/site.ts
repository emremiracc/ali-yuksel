export type WorkItem = {
  title: string;
  link: string;
  description: string;
  imageSrc: string;
  meta?: string;
};

export type ExperienceItem = {
  company: string;
  companyLink?: string;
  role: string;
  start: string;
  end?: string;
  description: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

export type Venture = {
  name: string;
  url: string;
  description: string;
};

export type Writing = {
  title: string;
  url: string;
  date: string;
};

export type PersonalImage = {
  src: string;
  alt: string;
};

export type SiteContent = {
  establishedYear: number;
  email: string;
  avatarSrc: string;
  name: string;
  title: string;
  bio: string;
  showCompanyLogo?: boolean;
  showVerificationBadge?: boolean;
  work: {
    title: string;
    subtitle: string;
  };
  works: WorkItem[];
  experiences: ExperienceItem[];
  testimonials: Testimonial[];
  stack: string[];
  ventures: Venture[];
  writings: Writing[];
  personalImages: PersonalImage[];
};

const siteContent: SiteContent = {
  establishedYear: 2022,
  email: "aliyuks@outlook.com",
  avatarSrc: "/avatar.jpg",
  name: "Ali Yüksel",
  title: "Business Development Professional",
  bio: "Hey, I'm Ali — a sales & business development director at Harvard Business Review, based in Türkiye. I work at the intersection of strategy, content and partnerships, helping connect global management thinking with local leaders through premium events, executive programs and strategic branded content collaborations.",
  showCompanyLogo: true,
  work: {
    title: "Work",
    subtitle: "A curated selection of work, full details available on request.",
  },
  works: [
    {
      title: "E-Commerce Platform",
      link: "https://example.com/work1",
      description: "Modern e-commerce solution with advanced filtering and checkout flow",
      imageSrc: "/works/work-1.png",
      meta: "Web Development",
    },
    {
      title: "SaaS Dashboard",
      link: "https://example.com/work2",
      description: "Analytics dashboard with real-time data visualization",
      imageSrc: "/works/work-2.png",
      meta: "Product Design",
    },
    {
      title: "Mobile App Redesign",
      link: "https://example.com/work3",
      description: "Complete UI/UX redesign for a popular mobile application",
      imageSrc: "/works/work-3.png",
      meta: "UI/UX Design",
    },
    {
      title: "Brand Identity System",
      link: "https://example.com/work4",
      description: "Comprehensive brand identity and visual language development",
      imageSrc: "/works/work-4.png",
      meta: "Branding",
    },
  ],
  experiences: [
    {
      company: "Tech Startup Inc.",
      companyLink: "https://example.com/company1",
      role: "Senior Frontend Engineer",
      start: "Jan 2022",
      end: "Present",
      description: "Leading frontend architecture and building core user-facing features for a fast-growing SaaS platform.",
    },
    {
      company: "Design Agency",
      companyLink: "https://example.com/company2",
      role: "Full-Stack Developer",
      start: "Mar 2020",
      end: "Dec 2021",
      description: "Developed custom web applications and interactive experiences for high-profile clients.",
    },
    {
      company: "Freelance",
      role: "Web Developer & Designer",
      start: "2018",
      end: "Feb 2020",
      description: "Worked with startups and small businesses to build their digital presence from the ground up.",
    },
  ],
  testimonials: [
    {
      name: "Sarah Johnson",
      role: "CTO at StartupCo",
      quote: "Exceptional work on our platform. The attention to detail and user experience is outstanding.",
      avatar: "/next.svg",
    },
    {
      name: "Michael Chen",
      role: "Product Lead",
      quote: "A true professional who brings both technical expertise and creative vision to every project.",
      avatar: "/testimonials/avatar2.jpg",
    },
    {
      name: "Emily Davis",
      role: "Founder & CEO",
      quote: "Transformed our product with clean code and beautiful design. Highly recommend!",
      avatar: "/testimonials/avatar3.jpg",
    },
  ],
  stack: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "Figma",
    "Git",
  ],
  ventures: [
    {
      name: "Project Alpha",
      url: "https://example.com/alpha",
      description: "An open-source tool for developers",
    },
    {
      name: "Project Beta",
      url: "https://example.com/beta",
      description: "A community-driven platform",
    },
  ],
  writings: [
    {
      title: "Building Scalable React Applications",
      url: "https://example.com/article1",
      date: "2024-01-15",
    },
    {
      title: "Design Systems in Practice",
      url: "https://example.com/article2",
      date: "2023-11-20",
    },
    {
      title: "Modern CSS Techniques",
      url: "https://example.com/article3",
      date: "2023-09-10",
    },
  ],
  personalImages: [
    { src: "/next.svg", alt: "Mountain hiking" },
    { src: "/personal/img2.jpg", alt: "Coffee and workspace" },
    { src: "/personal/img3.jpg", alt: "City skyline" },
    { src: "/personal/img4.jpg", alt: "Nature photography" },
  ],
};

export default siteContent;
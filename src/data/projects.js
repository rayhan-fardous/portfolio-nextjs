export const projects = [
  {
    slug: "skillforge-ai",
    title: "SkillForge AI",
    type: "AI Career Path & Skill Accelerator",
    category: "SaaS",
    year: "2025",
    summary: "An AI-powered learning and career-planning platform that generates personalized skill roadmaps, milestone tracking, and topic guidance for developers.",
    description: "SkillForge AI helps aspiring software engineers navigate their learning journey using artificial intelligence. The application generates customized step-by-step career roadmaps, aggregates learning resources, tracks skill acquisition progress, and answers technical questions in an interactive glassmorphic workspace.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Gemini API", "Vercel"],
    features: [
      "AI-generated personalized learning roadmaps & career paths",
      "Interactive milestone tracker with skill acquisition metrics",
      "Resource aggregation & detailed topic breakdowns",
      "Sleek dark glassmorphism user interface"
    ],
    accent: "from-purple-500 via-fuchsia-500 to-pink-500",
    metric: "AI Career Roadmaps",
    demoUrl: "https://skillforge-ai-lime.vercel.app",
    githubUrl: "https://github.com/rayhan-fardous/SkillForge-AI",
    images: [
      "/projects/skillforge-1.svg",
      "/projects/skillforge-2.svg"
    ],
    imageCaptions: [
      "AI Roadmap Generator & Step-by-Step Milestones",
      "Learning Analytics & Progress Tracker Dashboard"
    ]
  },
  {
    slug: "eventhub",
    title: "EventHub Platform",
    type: "Full-Stack Event Management & Booking",
    category: "Full-Stack",
    year: "2025",
    summary: "A modern event discovery, seat reservation, and hosting platform built with Next.js 15, Better-Auth, Express.js, and MongoDB.",
    description: "EventHub serves as a complete event discovery and seat reservation ecosystem. Attendees can browse events by category or location, reserve tickets, and submit reviews. Event organizers access a dashboard equipped with Recharts sales graphs, booking lists, and stateful session security powered by Better-Auth.",
    stack: ["Next.js 15", "React 19", "Express.js", "MongoDB", "Better-Auth", "Tailwind CSS v4", "HeroUI", "Recharts"],
    features: [
      "Real-time ticket booking and automatic capacity calculation",
      "Organizer dashboard with Recharts revenue & booking analytics",
      "Stateful MongoDB authentication powered by Better-Auth",
      "Interactive hero banner, event carousels & review rating engine"
    ],
    accent: "from-orange-400 via-rose-500 to-purple-600",
    metric: "Real-Time Booking Sync",
    demoUrl: "https://eventhub-bd.vercel.app",
    githubUrl: "https://github.com/rayhan-fardous/eventHub-client",
    images: [
      "/projects/eventhub-1.svg",
      "/projects/eventhub-2.svg"
    ],
    imageCaptions: [
      "Event Discovery Showcase & Ticket Reservation Flow",
      "Organizer Sales Dashboard & Recharts Analytics"
    ]
  },
  {
    slug: "blood-connect",
    title: "Blood Connect",
    type: "Emergency Blood Donation System",
    category: "Full-Stack",
    year: "2024",
    summary: "A life-saving blood donation platform connecting emergency blood seekers with registered donors, role-based admin/volunteer workflows, and Stripe funding.",
    description: "Blood Connect streamlines emergency blood requests across Bangladesh with instant district and upazila location filtering. It provides 3 role-based dashboards (Donor, Volunteer, Admin), Stripe Checkout for platform funding, and donor availability toggles to save lives quickly.",
    stack: ["Next.js 15", "React 19", "Express.js", "MongoDB Atlas", "Stripe", "Better Auth", "Tailwind CSS", "Recharts"],
    features: [
      "Public emergency blood request search by district & blood group",
      "3-Tier Role Management (Donor, Volunteer, Administrator)",
      "Integrated Stripe Checkout for online platform donations",
      "Real-time donor request tracking & status management"
    ],
    accent: "from-rose-500 via-red-600 to-amber-500",
    metric: "3-Tier Permission Portals",
    demoUrl: "https://blood-connect-liart.vercel.app",
    githubUrl: "https://github.com/rayhan-fardous/blood-connect-client",
    images: [
      "/projects/bloodconnect-1.svg",
      "/projects/bloodconnect-2.svg"
    ],
    imageCaptions: [
      "Public Blood Request Search & Emergency Feed",
      "Admin & Volunteer Control Dashboard"
    ]
  },
  {
    slug: "studynook",
    title: "StudyNook",
    type: "Study Space Discovery & Booking",
    category: "Full-Stack",
    year: "2024",
    summary: "A smart study room booking system for students and remote workers to discover and reserve quiet study spaces by amenity and price.",
    description: "StudyNook helps users find and reserve silent study environments, private pods, and group discussion rooms. The platform features double-booking prevention logic, Jose JWT session security, TanStack Query data fetching, and space owner management tools.",
    stack: ["Next.js", "React", "Node.js", "Express.js", "MongoDB", "Jose JWT", "HeroUI", "TanStack Query"],
    features: [
      "Smart room search with amenity, capacity & price filters",
      "Conflict-free real-time booking availability engine",
      "Secure JWT session authentication using Jose library",
      "Space owner listing manager & reservation tracking"
    ],
    accent: "from-cyan-400 via-teal-500 to-emerald-600",
    metric: "Conflict-Free Slot Booking",
    demoUrl: "https://study-nook-neon.vercel.app/",
    githubUrl: "https://github.com/rayhan-fardous/StudyNook",
    images: [
      "/projects/studynook-1.svg",
      "/projects/studynook-2.svg"
    ],
    imageCaptions: [
      "Study Room Discovery & Amenity Filters",
      "Real-time Slot Booking Engine & Reservation Manager"
    ]
  },
  {
    slug: "skillsphere",
    title: "SkillSphere",
    type: "Interactive E-Learning Platform",
    category: "SaaS",
    year: "2024",
    summary: "A modern e-learning application where students explore technology programs, view course lesson curricula, and manage learning profiles.",
    description: "SkillSphere provides an intuitive online education environment for software development and design. Built with Next.js App Router, DaisyUI components, Swiper.js carousels, and BetterAuth, learners can browse course catalogs, inspect lesson outlines, and track completed programs.",
    stack: ["Next.js", "React", "MongoDB", "BetterAuth", "Tailwind CSS", "DaisyUI", "Swiper.js"],
    features: [
      "Course catalog with interactive category filters & search",
      "Curriculum syllabus breakdown & video lesson preview UI",
      "User learning profile & enrollment history tracking",
      "Responsive glassmorphic UI styled with DaisyUI"
    ],
    accent: "from-emerald-400 via-green-500 to-teal-600",
    metric: "Multi-Course Curriculum",
    demoUrl: "https://skill-sphere-edu.vercel.app",
    githubUrl: "https://github.com/rayhan-fardous/SkillSphere",
    images: [
      "/projects/skillsphere-1.svg",
      "/projects/skillsphere-2.svg"
    ],
    imageCaptions: [
      "Course Discovery Catalog & Filter Interface",
      "Student Learning Profile & Syllabus Breakdown"
    ]
  },
  {
    slug: "nexora-commerce",
    title: "Nexora Commerce",
    type: "Full-Stack E-Commerce Storefront",
    category: "E-Commerce",
    year: "2025",
    summary: "A conversion-focused storefront with secure Stripe checkout, inventory tools, and a streamlined admin workspace.",
    description: "Nexora Commerce gives retailers one place to manage products, orders, customers, and promotions. Built with Next.js 15 App Router, Tailwind CSS, Stripe integration, and PostgreSQL, the experience provides sub-second page loads, instant search, and a dark glassmorphic operations dashboard.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS", "Prisma"],
    features: [
      "Role-based admin dashboard with real-time analytics",
      "Secure Stripe Payments with webhooks & invoice generation",
      "Real-time order status tracking and customer notifications",
      "Automated product catalog & dynamic inventory management"
    ],
    accent: "from-emerald-400 via-cyan-400 to-blue-500",
    metric: "42% Faster Checkout",
    demoUrl: "https://example.com/nexora-demo",
    githubUrl: "https://github.com/rayhan-fardous/nexora-commerce",
    images: [
      "/projects/nexora-1.jpg",
      "/projects/nexora-2.jpg"
    ],
    imageCaptions: [
      "Storefront & Product Catalog Experience",
      "Admin Operations & Revenue Analytics Dashboard"
    ]
  }
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

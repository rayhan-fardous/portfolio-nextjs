export const projects = [
  {
    slug: "skillforge-ai",
    title: "SkillForge AI",
    type: "AI Career Path & Skill Accelerator",
    category: "SaaS",
    year: "2026",
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
      "/projects/skillforge1.png",
      "/projects/skillforge2.png"
    ],
    imageCaptions: [
      "AI Roadmap Generator & Step-by-Step Milestones",
      "Learning Analytics & Progress Tracker Dashboard"
    ],
    challenges: "Integrating the Gemini API while maintaining low latency and predictably formatting the AI response into structured JSON for the roadmap visualizer. Additionally, managing the complex client-side state for tracking user progress across deeply nested skill trees.",
    futurePlans: "Implement robust user authentication to save career paths persistently, add a community feature allowing users to share custom roadmaps, and introduce advanced AI-driven code reviews and interactive quizzes to validate learning milestones."
  },
  {
    slug: "eventhub",
    title: "EventHub Platform",
    type: "Full-Stack Event Management & Booking",
    category: "Full-Stack",
    year: "2026",
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
      "/projects/eventhub1.png",
      "/projects/eventhub2.png"
    ],
    imageCaptions: [
      "Event Discovery Showcase & Ticket Reservation Flow",
      "Organizer Sales Dashboard & Recharts Analytics"
    ],
    challenges: "Handling concurrent ticket bookings safely to prevent overselling event capacity during high-traffic spikes. Implementing robust stateful session security with Better-Auth seamlessly alongside a decoupled Express.js backend and MongoDB database.",
    futurePlans: "Add an interactive real-time seat selection map using WebSockets, integrate Stripe for processing premium event ticket payments natively, and develop a cross-platform mobile application companion using React Native."
  },
  {
    slug: "blood-connect",
    title: "Blood Connect",
    type: "Emergency Blood Donation System",
    category: "Full-Stack",
    year: "2026",
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
      "/projects/bloodconnect1.png",
      "/projects/bloodconnect2.png"
    ],
    imageCaptions: [
      "Public Blood Request Search & Emergency Feed",
      "Admin & Volunteer Control Dashboard"
    ],
    challenges: "Designing and securing a complex 3-tier role-based access control (RBAC) system for Donors, Volunteers, and Admins. Ensuring instant data updates for critical emergency blood requests and structuring optimal geospatial queries for fast district and upazila location filtering.",
    futurePlans: "Integrate automated SMS and WhatsApp notifications for urgent local blood requests, introduce a secure live chat feature facilitating direct communication between donors and seekers, and implement a dedicated mobile app for faster push notifications."
  },
  {
    slug: "studynook",
    title: "StudyNook",
    type: "Study Space Discovery & Booking",
    category: "Full-Stack",
    year: "2026",
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
      "/projects/studynook1.png",
      "/projects/studynook2.png"
    ],
    imageCaptions: [
      "Study Room Discovery & Amenity Filters",
      "Real-time Slot Booking Engine & Reservation Manager"
    ],
    challenges: "Architecting a conflict-free real-time booking availability engine to strictly prevent double bookings of study spaces. Implementing secure, stateless JWT session authentication optimally on the Edge using the Jose library alongside TanStack Query for seamless client-side state management.",
    futurePlans: "Introduce dynamic pricing algorithms based on peak hours and capacity, add experimental IoT integration for generating temporary smart-lock access codes to study rooms, and expand platform coverage to multiple university campuses."
  },
  {
    slug: "skillsphere",
    title: "SkillSphere",
    type: "Interactive E-Learning Platform",
    category: "SaaS",
    year: "2026",
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
      "/projects/skillsphere1.png",
      "/projects/skillsphere2.png"
    ],
    imageCaptions: [
      "Course Discovery Catalog & Filter Interface",
      "Student Learning Profile & Syllabus Breakdown"
    ],
    challenges: "Structuring the MongoDB schema to elegantly handle deeply nested course curricula, video modules, and syllabus breakdowns efficiently. Optimizing the DaisyUI glassmorphic components to ensure a buttery-smooth, responsive experience across all mobile devices.",
    futurePlans: "Embed interactive coding environments directly within the browser for hands-on learning, implement a gamification system with achievement badges and leaderboards, and integrate AI-driven personalized course recommendations based on student progress."
  }
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

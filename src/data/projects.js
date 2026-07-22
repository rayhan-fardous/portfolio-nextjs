export const projects = [
  {
    slug: "nexora-commerce",
    title: "Nexora Commerce",
    type: "Full-stack e-commerce",
    year: "2025",
    summary: "A conversion-focused storefront with secure checkout, inventory tools, and a streamlined admin workspace.",
    description: "Nexora Commerce gives growing retailers one place to manage products, orders, customers, and promotions. The experience was designed around a fast shopping flow and a calm, practical operations dashboard.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    features: ["Role-based admin dashboard", "Secure Stripe checkout", "Real-time order tracking", "Product and inventory management"],
    accent: "from-emerald-400 via-cyan-400 to-blue-500",
    metric: "42% faster checkout",
  },
  {
    slug: "pulseboard",
    title: "Pulseboard",
    type: "Team collaboration platform",
    year: "2025",
    summary: "A shared workspace that turns product updates, tasks, and team discussion into focused momentum.",
    description: "Pulseboard is a collaborative work hub for distributed product teams. It combines planning, progress reporting, and lightweight discussion so teams can spend less time chasing context.",
    stack: ["React", "Express", "MongoDB", "Socket.io"],
    features: ["Live activity feed", "Drag-and-drop task boards", "Workspace permissions", "Real-time team updates"],
    accent: "from-violet-500 via-fuchsia-500 to-rose-400",
    metric: "Live collaboration",
  },
  {
    slug: "haven-stays",
    title: "Haven Stays",
    type: "Booking experience",
    year: "2024",
    summary: "A refined property discovery and booking journey built for guests who value clarity and confidence.",
    description: "Haven Stays helps guests find memorable places to stay through rich property pages, transparent availability, and a frictionless reservation flow. Hosts have a companion dashboard for listing management.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Cloudinary"],
    features: ["Property search and filters", "Availability calendar", "Host listing dashboard", "Optimized media delivery"],
    accent: "from-amber-300 via-orange-400 to-pink-500",
    metric: "Mobile-first booking",
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

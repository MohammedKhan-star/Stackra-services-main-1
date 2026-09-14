const services = [
  {
    id: "web-development",
    slug: "web-development",
    category: "Web & Digital",
    badge: "WEB DEVELOPMENT",
    shortTitle: "Modern Web Development",
    title: "Web Development",
    icon: "Globe2",
    image: "/services/webdevelopment.png",
    featured: true,

    desc: "Build fast, scalable, secure, and responsive websites and web applications designed to strengthen your digital presence and grow your business.",

    points: [
      "Business Websites",
      "Corporate Websites",
      "Custom Web Applications",
      "SEO Optimized",
      "Mobile Responsive",
      "High Performance",
    ],

    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "MongoDB",
      "Node.js",
    ],

    stats: [
      { label: "Responsive", value: "100%" },
      { label: "SEO Ready", value: "Yes" },
      { label: "Performance", value: "High" },
    ],

    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
  },

  {
    id: "portfolio-websites",
    slug: "portfolio-websites",
    category: "Web & Digital",
    badge: "PORTFOLIO",
    shortTitle: "Personal Branding Websites",
    title: "Portfolio & Personal Websites",
    icon: "UserRound",
    image: "/services/potfilo.png",
    featured: false,

    desc: "Create a premium online portfolio that showcases your skills, projects, experience, achievements, and personal brand with a modern user experience.",

    points: [
      "Custom Modern Design",
      "Project Showcase",
      "Resume Integration",
      "Contact & Inquiry Forms",
      "Mobile-First Responsive",
      "SEO Optimized",
    ],

    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
    ],

    stats: [
      { label: "Mobile Ready", value: "100%" },
      { label: "SEO Ready", value: "Yes" },
      { label: "Custom Design", value: "Yes" },
    ],

    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
  },

  {
    id: "business-corporate-websites",
    slug: "business-corporate-websites",
    category: "Business Solutions",
    badge: "BUSINESS",
    shortTitle: "Business & Corporate Websites",
    title: "Business & Corporate Websites",
    icon: "Building2",
    image: "/services/businesslanding.png",
    featured: true,

    desc: "Professional business websites engineered to build credibility, generate qualified leads, improve customer engagement, and convert visitors into customers.",

    points: [
      "Premium UI/UX Design",
      "Advanced SEO",
      "Google Maps Integration",
      "WhatsApp Integration",
      "Lead Generation Forms",
      "Lightning-Fast Performance",
    ],

    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "MongoDB",
      "Node.js",
      "REST APIs",
    ],

    stats: [
      { label: "Lead Ready", value: "Yes" },
      { label: "SEO", value: "Advanced" },
      { label: "Performance", value: "High" },
    ],

    gradient: "from-emerald-500/20 via-green-500/10 to-transparent",
  },

  {
    id: "education-technology",
    slug: "education-technology",
    category: "Education Technology",
    badge: "EDTECH",
    shortTitle: "Smart Education Platforms",
    title: "Education Technology Solutions",
    icon: "GraduationCap",
    image: "/services/schoolLP.png",
    featured: true,

    desc: "Smart digital platforms for schools, colleges, coaching institutes, and educational organizations to simplify administration and improve learning experiences.",

    points: [
      "School Management Systems",
      "Student Portals",
      "Online Admissions",
      "Result Management",
      "Teacher Management",
      "Admin Dashboard",
    ],

    technologies: [
      "Next.js",
      "React",
      "MongoDB",
      "Node.js",
      "REST APIs",
      "Tailwind CSS",
    ],

    stats: [
      { label: "Student Portal", value: "Yes" },
      { label: "Admin Panel", value: "Yes" },
      { label: "Cloud Ready", value: "Yes" },
    ],

    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
  },

  {
    id: "learning-management-system",
    slug: "learning-management-system",
    category: "Education Technology",
    badge: "LMS",
    shortTitle: "Online Learning Platform",
    title: "Learning Management System",
    icon: "BookOpenCheck",
    image: "/services/LMS.png",
    featured: true,

    desc: "A complete learning management platform for institutions, trainers, academies, and businesses to deliver, manage, and track digital education.",

    points: [
      "Course Management",
      "Student Management",
      "Online Classes",
      "Assignments & Quizzes",
      "Progress Tracking",
      "Certificates",
    ],

    technologies: [
      "Next.js",
      "React",
      "MongoDB",
      "Node.js",
      "Authentication",
      "REST APIs",
    ],

    stats: [
      { label: "Courses", value: "Unlimited*" },
      { label: "Progress Tracking", value: "Yes" },
      { label: "Certificates", value: "Yes" },
    ],

    gradient: "from-cyan-500/20 via-sky-500/10 to-transparent",
  },

  {
    id: "restaurant-food-solutions",
    slug: "restaurant-food-solutions",
    category: "Business Solutions",
    badge: "FOOD TECH",
    shortTitle: "Restaurant Digital Solutions",
    title: "Restaurant & Food Solutions",
    icon: "UtensilsCrossed",
    image: "/services/food.png",
    featured: false,

    desc: "Digital solutions for restaurants, cafes, bakeries, and food businesses with online menus, ordering, table bookings, location discovery, and customer engagement.",

    points: [
      "Digital Menu System",
      "Online Table Booking",
      "Food Ordering",
      "Google Maps Integration",
      "WhatsApp Ordering",
      "Mobile Optimized",
    ],

    technologies: [
      "Next.js",
      "React",
      "MongoDB",
      "Node.js",
      "WhatsApp Integration",
      "Google Maps",
    ],

    stats: [
      { label: "Digital Menu", value: "Yes" },
      { label: "Online Ordering", value: "Yes" },
      { label: "Mobile Ready", value: "100%" },
    ],

    gradient: "from-red-500/20 via-orange-500/10 to-transparent",
  },

  {
    id: "ecommerce-solutions",
    slug: "ecommerce-solutions",
    category: "Commerce",
    badge: "E-COMMERCE",
    shortTitle: "Online Commerce Platforms",
    title: "E-Commerce Solutions",
    icon: "ShoppingBag",
    image: "/services/e-commerce.png",
    featured: true,

    desc: "Scalable e-commerce platforms that help businesses sell online while managing products, customers, orders, inventory, payments, and operations.",

    points: [
      "Online Store Development",
      "Payment Gateway Integration",
      "Order Management",
      "Inventory Management",
      "Customer Management",
      "Secure Checkout",
    ],

    technologies: [
      "Next.js",
      "React",
      "MongoDB",
      "Node.js",
      "Razorpay",
      "REST APIs",
    ],

    stats: [
      { label: "Secure Checkout", value: "Yes" },
      { label: "Payments", value: "Integrated" },
      { label: "Inventory", value: "Yes" },
    ],

    gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
  },

  {
    id: "crm-solutions",
    slug: "crm-solutions",
    category: "Business Software",
    badge: "CRM",
    shortTitle: "Customer Relationship Management",
    title: "CRM Solutions",
    icon: "UsersRound",
    image: "/services/CRM.png",
    featured: true,

    desc: "Powerful CRM platforms that help businesses manage leads, customers, sales pipelines, follow-ups, communication, and relationships from one centralized system.",

    points: [
      "Lead Management",
      "Customer Management",
      "Sales Pipeline",
      "Follow-Up Management",
      "Communication Tracking",
      "CRM Dashboard",
    ],

    technologies: [
      "Next.js",
      "React",
      "MongoDB",
      "Node.js",
      "REST APIs",
      "AI Integration",
    ],

    stats: [
      { label: "Lead Tracking", value: "Yes" },
      { label: "Sales Pipeline", value: "Yes" },
      { label: "Analytics", value: "Yes" },
    ],

    gradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
  },

  {
    id: "erp-solutions",
    slug: "erp-solutions",
    category: "Business Software",
    badge: "ERP",
    shortTitle: "Enterprise Resource Planning",
    title: "ERP Solutions",
    icon: "Boxes",
    image: "/services/ERP.png",
    featured: true,

    desc: "Integrated ERP systems that connect finance, inventory, sales, purchasing, employees, and business operations into a centralized management platform.",

    points: [
      "Finance & Accounting",
      "Inventory Management",
      "Sales Management",
      "Purchase Management",
      "Employee Management",
      "Business Analytics",
    ],

    technologies: [
      "Next.js",
      "React",
      "MongoDB",
      "Node.js",
      "REST APIs",
      "AI Analytics",
    ],

    stats: [
      { label: "Centralized Data", value: "Yes" },
      { label: "Business Modules", value: "6+" },
      { label: "Analytics", value: "Yes" },
    ],

    gradient: "from-teal-500/20 via-cyan-500/10 to-transparent",
  },

  {
    id: "project-management",
    slug: "project-management",
    category: "Business Software",
    badge: "PROJECTS",
    shortTitle: "Project & Team Management",
    title: "Project Management System",
    icon: "KanbanSquare",
    image: "/services/project-management.png",
    featured: false,

    desc: "Collaborative project management platforms that help teams plan work, assign tasks, track progress, manage deadlines, and deliver projects efficiently.",

    points: [
      "Project Planning",
      "Task Management",
      "Team Collaboration",
      "Project Tracking",
      "Time & Progress Tracking",
      "Reports & Analytics",
    ],

    technologies: [
      "Next.js",
      "React",
      "MongoDB",
      "Node.js",
      "REST APIs",
      "Real-Time Updates",
    ],

    stats: [
      { label: "Task Management", value: "Yes" },
      { label: "Team Collaboration", value: "Yes" },
      { label: "Analytics", value: "Yes" },
    ],

    gradient: "from-yellow-500/20 via-orange-500/10 to-transparent",
  },
];

export default services;
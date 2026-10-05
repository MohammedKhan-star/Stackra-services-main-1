const servicePackages = {
  "web-development": {
    basic: {
      name: "Basic",
      price: 4999,
      description: "Professional website for individuals and small businesses.",
      features: [
        "Responsive Website",
        "Up to 5 Pages",
        "Mobile Friendly Design",
        "Contact Form",
        "Basic SEO",
        "Social Media Integration",
      ],
      sampleUrl: "",
    },

    intermediate: {
      name: "Intermediate",
      price: 9999,
      description: "Complete business website with advanced sections and features.",
      features: [
        "Everything in Basic",
        "Up to 10 Pages",
        "Advanced UI/UX",
        "Gallery / Portfolio",
        "Google Maps Integration",
        "Advanced SEO",
        "WhatsApp Integration",
      ],
      sampleUrl: "",
      popular: true,
    },

    advanced: {
      name: "Advanced",
      price: 19999,
      description: "Premium custom website with advanced business functionality.",
      features: [
        "Everything in Intermediate",
        "Unlimited Pages",
        "Custom Features",
        "Admin Panel",
        "Database Integration",
        "Advanced SEO",
        "Performance Optimization",
        "Deployment Support",
      ],
      sampleUrl: "",
    },
  },

  "portfolio-websites": {
    basic: {
      name: "Basic",
      price: 1999,
      description: "Clean professional portfolio website.",
      features: [
        "Responsive Design",
        "Home Page",
        "About Section",
        "Skills Section",
        "Contact Section",
        "Social Links",
      ],
      sampleUrl: "",
    },

    intermediate: {
      name: "Intermediate",
      price: 3999,
      description: "Professional portfolio with projects and advanced sections.",
      features: [
        "Everything in Basic",
        "Project Showcase",
        "Resume Section",
        "Gallery",
        "Animations",
        "WhatsApp Integration",
        "Basic SEO",
      ],
      sampleUrl: "",
      popular: true,
    },

    advanced: {
      name: "Advanced",
      price: 6999,
      description: "Premium portfolio website for professionals and creators.",
      features: [
        "Everything in Intermediate",
        "Advanced Animations",
        "Blog Section",
        "Testimonials",
        "Custom UI/UX",
        "Advanced SEO",
        "Deployment Support",
      ],
      sampleUrl: "",
    },
  },

  "business-corporate-websites": {
    basic: {
      name: "Basic",
      price: 2999,
      description: "Professional business landing website.",
      features: [
        "Responsive Design",
        "Home Page",
        "About Us",
        "Services",
        "Contact Page",
        "WhatsApp Integration",
      ],
      sampleUrl: "",
    },

    intermediate: {
      name: "Intermediate",
      price: 5999,
      description: "Complete corporate website for growing businesses.",
      features: [
        "Everything in Basic",
        "Multiple Service Pages",
        "Portfolio",
        "Testimonials",
        "Google Maps",
        "SEO Setup",
        "Social Media Integration",
      ],
      sampleUrl: "",
      popular: true,
    },

    advanced: {
      name: "Advanced",
      price: 9999,
      description: "Premium corporate website with advanced functionality.",
      features: [
        "Everything in Intermediate",
        "Custom UI/UX",
        "Admin Features",
        "Blog",
        "Advanced SEO",
        "Performance Optimization",
        "Analytics Integration",
      ],
      sampleUrl: "",
    },
  },

  "education-technology": {
    basic: {
      name: "Basic",
      price: 2999,
      description: "Professional school website for educational institutions.",
      features: [
        "Responsive School Website",
        "Home Page",
        "About School",
        "Academics",
        "Facilities",
        "Contact Page",
        "WhatsApp Integration",
      ],
      sampleUrl: "https://stackra-school-web-gamma.vercel.app/",
    },

    intermediate: {
      name: "Intermediate",
      price: 4999,
      description: "Complete school website with admissions and media sections.",
      features: [
        "Everything in Basic",
        "Admissions Section",
        "Faculty Section",
        "Gallery",
        "News & Events",
        "Video Gallery",
        "Downloads",
        "Google Maps",
      ],
      sampleUrl: "https://stackra-school-web-gamma.vercel.app/",
      popular: true,
    },

    advanced: {
      name: "Advanced",
      price: 7999,
      description: "Premium school website with complete institutional features.",
      features: [
        "Everything in Intermediate",
        "Advanced Admissions",
        "Transportation Section",
        "Online Enquiry",
        "Advanced Gallery",
        "SEO Optimization",
        "Analytics",
        "Deployment Support",
      ],
      sampleUrl: "https://stackra-school-web-gamma.vercel.app/",
    },
  },

  "learning-management-system": {
    basic: {
      name: "Basic",
      price: 24999,
      description: "Starter LMS for online courses and students.",
      features: [
        "Student Registration",
        "Course Management",
        "Student Dashboard",
        "Course Pages",
        "Basic Admin Panel",
        "Responsive Design",
      ],
      sampleUrl: "",
    },

    intermediate: {
      name: "Intermediate",
      price: 49999,
      description: "Complete LMS platform for training institutes.",
      features: [
        "Everything in Basic",
        "Teacher Dashboard",
        "Assignments",
        "Quizzes",
        "Certificates",
        "Progress Tracking",
        "Payment Integration",
      ],
      sampleUrl: "",
      popular: true,
    },

    advanced: {
      name: "Advanced",
      price: 79999,
      description: "Advanced LMS platform with complete management features.",
      features: [
        "Everything in Intermediate",
        "Advanced Admin Panel",
        "Live Classes",
        "Advanced Reports",
        "Subscription System",
        "Multiple Roles",
        "Advanced Analytics",
      ],
      sampleUrl: "",
    },
  },

  "restaurant-food-solutions": {
    basic: {
      name: "Basic",
      price: 6999,
      description: "Professional restaurant website with digital menu.",
      features: [
        "Responsive Website",
        "Restaurant Home Page",
        "About Restaurant",
        "Digital Menu",
        "Contact Page",
        "Google Maps",
      ],
      sampleUrl: "",
    },

    intermediate: {
      name: "Intermediate",
      price: 12999,
      description: "Restaurant website with ordering and customer features.",
      features: [
        "Everything in Basic",
        "Online Food Menu",
        "Order Enquiry",
        "WhatsApp Ordering",
        "Gallery",
        "Offers Section",
        "SEO Setup",
      ],
      sampleUrl: "",
      popular: true,
    },

    advanced: {
      name: "Advanced",
      price: 19999,
      description: "Complete restaurant digital platform.",
      features: [
        "Everything in Intermediate",
        "Online Ordering",
        "Order Management",
        "Customer Management",
        "Payment Integration",
        "Admin Panel",
        "Analytics",
      ],
      sampleUrl: "",
    },
  },

  "ecommerce-solutions": {
    basic: {
      name: "Basic",
      price: 14999,
      description: "Starter ecommerce website for online selling.",
      features: [
        "Product Catalogue",
        "Product Details",
        "Shopping Cart",
        "Responsive Design",
        "Contact Page",
        "WhatsApp Integration",
      ],
      sampleUrl: "",
    },

    intermediate: {
      name: "Intermediate",
      price: 29999,
      description: "Complete ecommerce store with payments and management.",
      features: [
        "Everything in Basic",
        "User Registration",
        "Checkout",
        "Online Payment",
        "Order Management",
        "Admin Panel",
        "Product Management",
      ],
      sampleUrl: "",
      popular: true,
    },

    advanced: {
      name: "Advanced",
      price: 49999,
      description: "Advanced ecommerce platform for growing businesses.",
      features: [
        "Everything in Intermediate",
        "Advanced Admin Panel",
        "Coupons",
        "Offers",
        "Customer Management",
        "Reports",
        "Analytics",
        "Advanced SEO",
      ],
      sampleUrl: "",
    },
  },

  "crm-solutions": {
    basic: {
      name: "Basic",
      price: 19999,
      description: "Customer management system for small businesses.",
      features: [
        "Customer Management",
        "Contact Management",
        "Customer Dashboard",
        "Search & Filters",
        "Basic Reports",
        "Responsive Interface",
      ],
      sampleUrl: "",
    },

    intermediate: {
      name: "Intermediate",
      price: 39999,
      description: "Complete CRM for sales and customer operations.",
      features: [
        "Everything in Basic",
        "Lead Management",
        "Sales Pipeline",
        "Task Management",
        "Employee Management",
        "Reports",
        "Notifications",
      ],
      sampleUrl: "",
      popular: true,
    },

    advanced: {
      name: "Advanced",
      price: 69999,
      description: "Advanced CRM platform with automation and analytics.",
      features: [
        "Everything in Intermediate",
        "Automation",
        "Advanced Reports",
        "Analytics Dashboard",
        "AI Assistant",
        "Email Integration",
        "Advanced Admin Panel",
      ],
      sampleUrl: "",
    },
  },

  "erp-solutions": {
    basic: {
      name: "Basic",
      price: 29999,
      description: "Business management system for essential operations.",
      features: [
        "Dashboard",
        "Customer Management",
        "Product Management",
        "Employee Management",
        "Invoice Management",
        "Basic Reports",
      ],
      sampleUrl: "",
    },

    intermediate: {
      name: "Intermediate",
      price: 59999,
      description: "Complete ERP system for growing organizations.",
      features: [
        "Everything in Basic",
        "Sales Management",
        "Inventory",
        "Projects",
        "Finance",
        "Advanced Reports",
        "Admin Panel",
      ],
      sampleUrl: "",
      popular: true,
    },

    advanced: {
      name: "Advanced",
      price: 99999,
      description: "Advanced ERP platform with integrated business operations.",
      features: [
        "Everything in Intermediate",
        "AI Assistant",
        "Advanced Analytics",
        "Automation",
        "Role-Based Access",
        "Advanced Finance",
        "Custom Modules",
        "Deployment Support",
      ],
      sampleUrl: "",
    },
  },

  "project-management": {
    basic: {
      name: "Basic",
      price: 14999,
      description: "Simple project management system for teams.",
      features: [
        "Project Dashboard",
        "Project Creation",
        "Task Management",
        "Team Management",
        "Task Status",
        "Responsive Design",
      ],
      sampleUrl: "",
    },

    intermediate: {
      name: "Intermediate",
      price: 29999,
      description: "Complete project management platform for organizations.",
      features: [
        "Everything in Basic",
        "Team Collaboration",
        "Deadlines",
        "Progress Tracking",
        "Notifications",
        "Reports",
        "User Roles",
      ],
      sampleUrl: "",
      popular: true,
    },

    advanced: {
      name: "Advanced",
      price: 49999,
      description: "Advanced project management system with analytics.",
      features: [
        "Everything in Intermediate",
        "Advanced Analytics",
        "Time Tracking",
        "Advanced Reports",
        "Automation",
        "Role-Based Access",
        "Custom Dashboard",
      ],
      sampleUrl: "",
    },
  },
};

export default servicePackages;
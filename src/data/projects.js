const projects = [
  {
    id: 1,
    title: "Financial Automation Platform",
    category: "Fintech / Real-Time Systems",
    subcategories: ["Fintech", "Real-Time Systems", "Backend"],
    description: "A centralized automation platform enabling 1,000+ users/hour to manage Turkish financial transaction accounts through 10-20 concurrent bots, without touching the main website. Built a live SignalR monitoring dashboard and a high-throughput Dapper import pipeline for large transaction batches.",
    image: "/financial-automation.svg",
    imageUrl: "/financial-automation.svg",
    features: [
      "SignalR hub for real-time bot status, record counts & error states",
      "Bulk import API: 1,000-5,000 records/batch, 8-10x faster with Dapper",
      "Dashboard query times cut from 20-30s to under 2s via indexing",
      "Automated affiliate registration bot processing 100-300 signups/day",
      "Authenticated web-scraping bot with retry logic & error recovery"
    ],
    technologies: [
      { name: ".NET Core", icon: "fa-solid fa-server", colorCode: "#512bd4" },
      { name: "C#", icon: "fa-solid fa-hashtag", colorCode: "#a270ff" },
      { name: "SignalR", icon: "fa-solid fa-tower-broadcast", colorCode: "#ec4899" },
      { name: "Dapper", icon: "fa-solid fa-bolt", colorCode: "#f59e0b" },
      { name: "SQL Server", icon: "fa-solid fa-database", colorCode: "#cc292b" },
      { name: "Vue.js", icon: "fa-brands fa-vuejs", colorCode: "#42b883" }
    ],
    techStack: [
      { name: ".NET Core", icon: "fa-solid fa-server", colorCode: "#512bd4" },
      { name: "C#", icon: "fa-solid fa-hashtag", colorCode: "#a270ff" },
      { name: "SignalR", icon: "fa-solid fa-tower-broadcast", colorCode: "#ec4899" },
      { name: "Dapper", icon: "fa-solid fa-bolt", colorCode: "#f59e0b" },
      { name: "SQL Server", icon: "fa-solid fa-database", colorCode: "#cc292b" },
      { name: "Vue.js", icon: "fa-brands fa-vuejs", colorCode: "#42b883" }
    ],
    github: null,
    githubLink: null,
    demo: null,
    liveLink: null,
    confidential: true
  },
  {
    id: 2,
    title: "SaaS Healthcare Management System",
    category: "Healthcare SaaS",
    subcategories: ["Healthcare SaaS", "Payments", "Backend"],
    description: "Integrated PayPal subscription payments into a legacy ASP.NET Web Forms healthcare SaaS platform that tracks medical staff hours, operation theater time, and lab rotations for automated payroll — turning manual subscription sales into a fully automated online flow for clinics and hospitals.",
    image: "/healthcare-paypal.svg",
    imageUrl: "/healthcare-paypal.svg",
    features: [
      "Secure PayPal subscription flow for modular clinic access plans",
      "SSL-secured callback handler for payment confirmations & failures",
      "Payment state management: transactions, tiers & module permissions",
      "Full lifecycle handling: redirects, return URLs, failed-payment recovery"
    ],
    technologies: [
      { name: "ASP.NET Web Forms", icon: "fa-solid fa-server", colorCode: "#512bd4" },
      { name: "C#", icon: "fa-solid fa-hashtag", colorCode: "#a270ff" },
      { name: "PayPal SDK", icon: "fa-brands fa-paypal", colorCode: "#003087" },
      { name: "SQL Server", icon: "fa-solid fa-database", colorCode: "#cc292b" }
    ],
    techStack: [
      { name: "ASP.NET Web Forms", icon: "fa-solid fa-server", colorCode: "#512bd4" },
      { name: "C#", icon: "fa-solid fa-hashtag", colorCode: "#a270ff" },
      { name: "PayPal SDK", icon: "fa-brands fa-paypal", colorCode: "#003087" },
      { name: "SQL Server", icon: "fa-solid fa-database", colorCode: "#cc292b" }
    ],
    github: null,
    githubLink: null,
    demo: null,
    liveLink: null,
    confidential: true
  },
  {
    id: 3,
    title: "Paperless Leave Management System",
    category: "Enterprise ERP",
    subcategories: ["Enterprise ERP", "Backend", "Frontend"],
    description: "A modular ERP system built for Askari Bank IT serving 100+ employees across Sales, Inventory, and HR — including a paperless leave management module integrated with Oracle ERP that cut HR administrative workload by 20+ hours a week.",
    image: "/erp-leave-management.svg",
    imageUrl: "/erp-leave-management.svg",
    features: [
      "Oracle ERP integration with automatic payroll sync for leave deductions",
      "Multi-level approval workflows with manager-absence delegation",
      "Real-time leave balance tracking & email notifications",
      "Angular upgrade v6 → v14, cutting page load times by 30%",
      "Migrated legacy MS Access layer to Oracle, improving API speed by 40%"
    ],
    technologies: [
      { name: ".NET Core", icon: "fa-solid fa-server", colorCode: "#512bd4" },
      { name: "C#", icon: "fa-solid fa-hashtag", colorCode: "#a270ff" },
      { name: "Angular", icon: "fa-brands fa-angular", colorCode: "#dd0031" },
      { name: "Oracle", icon: "fa-solid fa-database", colorCode: "#f80000" }
    ],
    techStack: [
      { name: ".NET Core", icon: "fa-solid fa-server", colorCode: "#512bd4" },
      { name: "C#", icon: "fa-solid fa-hashtag", colorCode: "#a270ff" },
      { name: "Angular", icon: "fa-brands fa-angular", colorCode: "#dd0031" },
      { name: "Oracle", icon: "fa-solid fa-database", colorCode: "#f80000" }
    ],
    github: null,
    githubLink: null,
    demo: null,
    liveLink: null,
    confidential: true
  },
  {
    id: 4,
    title: "CozyCrave",
    category: "E-Commerce",
    subcategories: ["E-Commerce", "Personal Project"],
    description: "A full-stack e-commerce platform for nuts and chocolates where users can browse products, manage carts, place orders, and securely complete purchases.",
    image: "/cozycrave.jpg",
    imageUrl: "/cozycrave.jpg",
    features: [
      "User authentication & profile",
      "Product catalog & browsing",
      "Cart management & checkout",
      "Order processing & history",
      "Admin product management"
    ],
    technologies: [
      { name: "React.js", icon: "fa-brands fa-react", colorCode: "#61dafb" },
      { name: "ASP.NET Core", icon: "fa-solid fa-server", colorCode: "#512bd4" },
      { name: "C#", icon: "fa-solid fa-hashtag", colorCode: "#a270ff" },
      { name: "Dapper", icon: "fa-solid fa-bolt", colorCode: "#f59e0b" },
      { name: "SQL Server", icon: "fa-solid fa-database", colorCode: "#cc292b" },
      { name: "JWT Auth", icon: "fa-solid fa-key", colorCode: "#d97706" }
    ],
    techStack: [
      { name: "React.js", icon: "fa-brands fa-react", colorCode: "#61dafb" },
      { name: "ASP.NET Core", icon: "fa-solid fa-server", colorCode: "#512bd4" },
      { name: "C#", icon: "fa-solid fa-hashtag", colorCode: "#a270ff" },
      { name: "Dapper", icon: "fa-solid fa-bolt", colorCode: "#f59e0b" },
      { name: "SQL Server", icon: "fa-solid fa-database", colorCode: "#cc292b" },
      { name: "JWT Auth", icon: "fa-solid fa-key", colorCode: "#d97706" }
    ],
    github: "https://github.com/YOUR_GITHUB_USERNAME/CozyCrave",
    githubLink: "https://github.com/YOUR_GITHUB_USERNAME/CozyCrave",
    demo: "#",
    liveLink: "#",
    confidential: false
  },
  {
    id: 5,
    title: "CottonHouse",
    category: "E-Commerce",
    subcategories: ["E-Commerce", "Personal Project"],
    description: "A men's clothing e-commerce platform designed for browsing and purchasing men's fashion wear with a smooth shopping experience.",
    image: "/cottonhouse.png",
    imageUrl: "/cottonhouse.png",
    features: [
      "Responsive clothing catalog",
      "Category-based sorting",
      "Interactive shopping cart",
      "User authentication system",
      "Secure checkout & order handling"
    ],
    technologies: [
      { name: "React.js", icon: "fa-brands fa-react", colorCode: "#61dafb" },
      { name: "ASP.NET Core", icon: "fa-solid fa-server", colorCode: "#512bd4" },
      { name: "Dapper", icon: "fa-solid fa-bolt", colorCode: "#f59e0b" },
      { name: "SQL Server", icon: "fa-solid fa-database", colorCode: "#cc292b" },
      { name: "REST API", icon: "fa-solid fa-cloud-arrow-up", colorCode: "#06b6d4" },
      { name: "JWT Auth", icon: "fa-solid fa-key", colorCode: "#d97706" }
    ],
    techStack: [
      { name: "React.js", icon: "fa-brands fa-react", colorCode: "#61dafb" },
      { name: "ASP.NET Core", icon: "fa-solid fa-server", colorCode: "#512bd4" },
      { name: "Dapper", icon: "fa-solid fa-bolt", colorCode: "#f59e0b" },
      { name: "SQL Server", icon: "fa-solid fa-database", colorCode: "#cc292b" },
      { name: "REST API", icon: "fa-solid fa-cloud-arrow-up", colorCode: "#06b6d4" },
      { name: "JWT Auth", icon: "fa-solid fa-key", colorCode: "#d97706" }
    ],
    github: "https://github.com/YOUR_GITHUB_USERNAME/CottonHouse",
    githubLink: "https://github.com/YOUR_GITHUB_USERNAME/CottonHouse",
    demo: "#",
    liveLink: "#",
    confidential: false
  },
  {
    id: 6,
    title: "GuideYu",
    category: "Learning Platform",
    subcategories: ["Learning Platform", "Personal Project"],
    description: "An online learning platform that helps users access educational resources, view course materials, and improve their learning experience.",
    image: "/guideyu.png",
    imageUrl: "/guideyu.png",
    features: [
      "User-friendly learning interface",
      "Course & content management",
      "Secure student authentication",
      "Resource download section"
    ],
    technologies: [
      { name: "React.js", icon: "fa-brands fa-react", colorCode: "#61dafb" },
      { name: "ASP.NET Core", icon: "fa-solid fa-server", colorCode: "#512bd4" },
      { name: "C#", icon: "fa-solid fa-hashtag", colorCode: "#a270ff" },
      { name: "SQL Server", icon: "fa-solid fa-database", colorCode: "#cc292b" },
      { name: "REST API", icon: "fa-solid fa-cloud-arrow-up", colorCode: "#06b6d4" }
    ],
    techStack: [
      { name: "React.js", icon: "fa-brands fa-react", colorCode: "#61dafb" },
      { name: "ASP.NET Core", icon: "fa-solid fa-server", colorCode: "#512bd4" },
      { name: "C#", icon: "fa-solid fa-hashtag", colorCode: "#a270ff" },
      { name: "SQL Server", icon: "fa-solid fa-database", colorCode: "#cc292b" },
      { name: "REST API", icon: "fa-solid fa-cloud-arrow-up", colorCode: "#06b6d4" }
    ],
    github: "https://github.com/YOUR_GITHUB_USERNAME/GuideYu",
    githubLink: "https://github.com/YOUR_GITHUB_USERNAME/GuideYu",
    demo: "#",
    liveLink: "#",
    confidential: false
  }
];

export default projects;

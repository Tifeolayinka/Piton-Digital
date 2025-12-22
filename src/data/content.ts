import { Map, Tent, Flag, AlertCircle, FileSpreadsheet, Figma, Clock, Link2, Layers, Layout, Code, Smartphone, Zap } from 'lucide-react';

export const projects = [
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
    title: "Dojohub CRM",
    type: "SaaS Platform",
    tags: ["EDTECH", "FULL SCALE", "AU"],
    color: "bg-white",
    caseStudy: {
       title: "Dojohub CRM",
       headline: "HELPING MARTIAL ARTS SCHOOLS GROW & STREAMLINE OPERATIONS USING A CUSTOM MANAGEMENT APP",
       services: ["UI/UX", "DEVELOPMENT"],
       tools: ["FIGMA", "BUBBLE", "CUSTOM WEBAPP", "MOBILE APP"],
       timeline: "3 MONTHS",
       mainImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
       intro: "DojoHub was built to help martial arts schools streamline operations and scale with ease. From belt tracking to recurring payments, it provides everything a modern dojo needs — with a beautiful admin dashboard for staff and a convenient mobile app for students and parents. Whether it’s signing up for a membership, booking a class, or tracking belt progress, DojoHub combines the flexibility of no-code development with a deep understanding of martial arts school workflows.",
       challenges: [
         "Dojo owners were spending excessive time managing class schedules, attendance, and belt/rank progress manually.",
         "Students missed classes or payments because of lack of reminders or clear dashboards.",
         "It's difficult to manage recurring subscriptions, track failed payments, or see which students are eligible for belt promotions.",
         "Onboarding new students or dojos was slow because of fragmented tools and lack of consistency."
       ],
       process: "We worked directly with our client a professional jiu-jitsu practitioner & product manager who brought firsthand knowledge of how martial arts schools operate day-to-day. Their insights shaped everything from student enrollment flows to belt grading logic and class scheduling patterns.\n\nTo build with even more empathy, I also started going to the gym myself to better understand the routines and mindset of students, parents, and instructors (Well I stopped going now).\n\nEverything was built in Bubble, both the admin dashboard and the student-facing mobile app. We created relational data models for programs, classes, belts, and memberships, and integrated Stripe to manage subscriptions, cancellations, and failed payments through webhook events.",
       stats: [
         { label: "Workload reduction", value: "70%" },
         { label: "From discovery to delivery", value: "3 MONTHS" },
         { label: "Cheaper than traditional code", value: "10X" }
       ],
       testimonial: {
         quote: "This saved us. We were drowning in spreadsheets. Now I can grade students, collect payments, and track everything from one place.",
         author: "Chad D.",
         role: "Founder - Bali Family Find",
         company: "Bali FF",
         avatar: "https://randomuser.me/api/portraits/men/32.jpg"
       },
       result: "DojoHub dramatically simplified operations for martial arts schools, replacing scattered tools with one seamless platform. By automating class schedules, belt tracking, and recurring payments, we helped instructors reclaim hours of admin work each week. New dojos were able to fully onboard — including student setup, membership plans, and classes — in a fraction of the time it used to take.",
       galleryImages: [
         "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
         "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop",
         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
       ]
     }
  },
  {
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
    title: "Tamashi LMS",
    type: "EdTech",
    tags: ["BRANDING", "WEB", "MOBILE"],
    color: "bg-white",
    caseStudy: {
         title: "Tamashi Academy",
         headline: "REDEFINING THE LEARNING EXPERIENCE FOR MODERN ACADEMIES",
         services: ["BRANDING", "WEB DESIGN", "DEVELOPMENT"],
         tools: ["WEBFLOW", "FIGMA", "ZAPIER"],
         timeline: "2 MONTHS",
         mainImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
         intro: "Tamashi Academy needed a digital presence that reflected their philosophy of 'Soulful Learning'. We crafted a brand identity and a learning management dashboard that feels as organic as it is technical.",
         challenges: [
           "Outdated student portal that discouraged engagement.",
           "Lack of brand cohesion across physical and digital touchpoints.",
           "Administrative bottlenecks in course scheduling."
         ],
         process: "We focused on 'Calm Technology'. The interface uses generous whitespace and soft typography to reduce cognitive load. We integrated Webflow for the frontend marketing site, connecting seamlessly to a custom backend for student progress tracking.",
         stats: [
           { label: "Student Engagement", value: "+45%" },
           { label: "Admin Hours Saved", value: "20/wk" },
           { label: "User Satisfaction", value: "4.9/5" }
         ],
         testimonial: {
           quote: "The interface is so intuitive, our students actually enjoy logging in. It's a breath of fresh air.",
           author: "Kenji S.",
           role: "Director",
           company: "Tamashi",
           avatar: "https://randomuser.me/api/portraits/men/64.jpg"
         },
         result: "A fully integrated LMS that matches the physical academy's premium aesthetic, resulting in higher retention rates and streamlined operations.",
         galleryImages: [
           "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
           "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
         ]
       }
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    title: "Piton Analytics",
    type: "FinTech",
    tags: ["SAAS", "DATA", "AI"],
    color: "bg-white",
    caseStudy: {
         title: "Piton Analytics",
         headline: "VISUALIZING COMPLEX FINANCIAL DATA WITH PRECISION",
         services: ["DATA VIZ", "FULL STACK"],
         tools: ["REACT", "D3.JS", "NODE.JS"],
         timeline: "4 MONTHS",
         mainImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
         intro: "Financial data is often dry and impenetrable. Piton Analytics sought to change that by creating a dashboard that makes market trends feel like a narrative story.",
         challenges: [
           "Rendering millions of data points without latency.",
           "Making complex financial models accessible to non-experts.",
           "Real-time data synchronization."
         ],
         process: "We utilized D3.js for custom visualization components, optimized with WebGL for performance. The design language borrows from high-end editorial print, using typography to guide the eye through the data.",
         stats: [
           { label: "Data Points Rendered", value: "1M+" },
           { label: "Load Time", value: "<0.5s" },
           { label: "Adoption Rate", value: "85%" }
         ],
         testimonial: {
           quote: "Finally, a financial tool that doesn't look like a spreadsheet from 1995. It's beautiful and incredibly fast.",
           author: "Elena R.",
           role: "CFO",
           company: "Vertex",
           avatar: "https://randomuser.me/api/portraits/women/22.jpg"
         },
         result: "A best-in-class analytics platform that gives traders and CFOs a clear, real-time view of their financial landscape.",
         galleryImages: [
           "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
           "https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=1600&auto=format&fit=crop"
         ]
       }
  },
  {
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop",
    title: "Apex Gear",
    type: "E-Commerce",
    tags: ["E-COMMERCE", "SHOPIFY", "UX"],
    color: "bg-white",
    caseStudy: {
         title: "Apex Gear",
         headline: "E-COMMERCE FOR THE MODERN ADVENTURER",
         services: ["SHOPIFY", "BRANDING", "UX"],
         tools: ["SHOPIFY PLUS", "LIQUID", "FIGMA"],
         timeline: "6 WEEKS",
         mainImage: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop",
         intro: "Apex Gear sells high-performance climbing equipment. They needed a store that performed as well as their gear.",
         challenges: [
           "High cart abandonment rates.",
           "Generic Shopify template feel.",
           "Complex product variants."
         ],
         process: "We built a headless Shopify storefront to give us complete control over the UX. We implemented a 3D product viewer and a simplified checkout flow.",
         stats: [
           { label: "Conversion Rate", value: "+2.5%" },
           { label: "Mobile Sales", value: "+60%" },
           { label: "ROI", value: "400%" }
         ],
         testimonial: {
           quote: "Our sales doubled in the first month. The design perfectly captures the rugged yet technical nature of our products.",
           author: "Tom H.",
           role: "Founder",
           company: "Apex",
           avatar: "https://randomuser.me/api/portraits/men/12.jpg"
         },
         result: "A flagship e-commerce experience that builds trust and drives sales.",
         galleryImages: [
           "https://images.unsplash.com/photo-1472851294608-4155f21180e9?q=80&w=1600&auto=format&fit=crop",
           "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop"
         ]
       }
   },
   {
     image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop",
     title: "Velvet Rope",
     type: "Social App",
     tags: ["SOCIAL", "MOBILE", "IOS"],
     color: "bg-white",
     caseStudy: null // Assuming no case study details for this one yet based on previous files
  }
];

export const services = [
  {
    number: "01",
    title: "UI/UX Design",
    desc: "For teams that have dev resources but need world-class interface design. We deliver production-ready Figma files.",
    tags: ['Product Design', 'Design Systems', 'Prototyping'],
    icon: Figma,
    price: "$2,500"
  },
  {
    number: "02",
    title: "No-Code Dev",
    desc: "For founders who have designs ready. We turn your Figma files into pixel-perfect, scalable software using Bubble or Webflow.",
    tags: ['Webflow', 'Bubble', 'React', 'Flutter'],
    icon: Code,
    price: "$4,000"
  },
  {
    number: "03",
    title: "Full-Cycle Product",
    desc: "From zero to launched. We handle strategy, design, and development for MVPs, SaaS platforms, and mobile apps.",
    tags: ['Strategy', 'Product Design', 'Development'],
    icon: Smartphone,
    price: "$7,500"
  },
  {
    number: "04",
    title: "Internal Systems",
    desc: "Custom admin panels and operational tools for businesses. Replace spreadsheets with powerful, automated software.",
    tags: ['Admin Panels', 'Dashboards', 'Automations'],
    icon: Layout,
    price: "$5,000"
  },
  {
    number: "05",
    title: "Automations",
    desc: "Connecting your favorite tools to save hours of manual data entry. Make.com and Zapier integrations.",
    tags: ['Make.com', 'Zapier', 'API Integrations'],
    icon: Zap,
    price: "$1,000"
  }
];

export const challenges = [
  {
    icon: AlertCircle,
    title: "GREAT IDEA, NO TECH TEAM?",
    desc: "You're a non-technical founder with a vision. You need a partner who can execute the tech side without equity."
  },
  {
    icon: FileSpreadsheet,
    title: "OPERATIONS IN SPREADSHEETS?",
    desc: "Your business is growing, but you're drowning in manual admin work. You need a custom internal system to automate the chaos."
  },
  {
    icon: Figma,
    title: "DESIGN READY, NEED BUILD?",
    desc: "You have beautiful Figma designs but your current dev team is too slow or expensive. We bring your designs to life in weeks."
  },
  {
    icon: Clock,
    title: "STUCK IN DEVELOPMENT HELL?",
    desc: "Traditional coding is taking months. We use modern No-Code infrastructure to ship your MVP or internal tool 5x faster."
  },
  {
    icon: Link2,
    title: "DISCONNECTED TOOLS?",
    desc: "Your CRM doesn't talk to your billing, and your billing doesn't talk to email. We build unified systems that connect everything."
  },
  {
    icon: Layers,
    title: "OUTDATED USER EXPERIENCE?",
    desc: "Your current software works but feels like 1999. We redesign your interface to be modern, intuitive, and user-friendly."
  }
];

export const testimonials = [
  {
    quote: "Life - working with you has been a pleasure. The level of detail and execution you bring to the development process has been crucial in ensuring we meet our MVP targets",
    name: "Chad D.",
    role: "Founder - Bali Family Find",
    companyShort: "Bali FF",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "Piton didn't just build our app; they completely reimagined our user journey. The Vibe Coding approach sounds like a gimmick until you feel the difference in the final product. Absolute game changer.",
    name: "Sarah J.",
    role: "CEO - Velvet Rope",
    companyShort: "Velvet",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "Fast, precise, and incredibly stylish. The team understood our brand constraints immediately and delivered a Webflow implementation that exceeded our wildest expectations.",
    name: "Marcus T.",
    role: "Director - Horizon Labs",
    companyShort: "Horizon",
    image: "https://randomuser.me/api/portraits/men/85.jpg"
  },
  {
    quote: "Working with the Piton team felt less like hiring an agency and more like bringing on a technical co-founder. They challenged our assumptions and made the product better for it.",
    name: "Elena Rodriguez",
    role: "Product Lead - Swift",
    companyShort: "Swift",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

export const faqs = [
  {
    q: "What is 'Full-Cycle' development?",
    a: "It means we handle everything. We start with strategy to define what we're building, move into UI/UX design to create the visual system, and then build the actual functional software. You don't need to hire a separate designer and developer."
  },
  {
    q: "I already have a design. Can you just build it?",
    a: "Absolutely. If you have Figma files ready, we can jump straight into the build phase. We specialize in converting designs into pixel-perfect Webflow, Bubble, or custom React applications."
  },
  {
    q: "I have a dev team but need a design update. Can you help?",
    a: "Yes. We often partner with technical teams to provide just the UI/UX layer. We deliver organized, developer-ready design files and design systems that your engineers will love working with."
  },
  {
    q: "What kind of 'Internal Systems' do you build?",
    a: "We build custom admin panels, client portals, inventory management systems, and automated CRM dashboards. Basically, if you're running your business on a mess of spreadsheets, we can turn that into a clean, automated software application."
  },
  {
    q: "Why No-Code/Low-Code?",
    a: "Speed and cost. Traditional development takes months and costs 6-figures. By using robust infrastructure like Bubble, Webflow, and Xano, we can ship enterprise-grade software in weeks for a fraction of the cost."
  }
];


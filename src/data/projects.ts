import { CaseStudyData } from '../../components/CaseStudyModal';

export interface Project {
    title: string;
    tags: string[];
    image: string;
    hoverImage?: string;
    color: string;
    type: string;
    caseStudy?: CaseStudyData;
}

export const projects: Project[] = [
    {
        title: "Dojohub CRM",
        tags: ["EDTECH", "FULL SCALE", "AU"],
        type: "SaaS Platform",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
        hoverImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
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
                author: "Alonso R.",
                role: "Founder",
                company: "DojoHub",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg"
            },
            result: "DojoHub dramatically simplified operations for martial arts schools, replacing scattered tools with one seamless platform. By automating class schedules, belt tracking, and recurring payments, we helped instructors reclaim hours of admin work each week. New dojos were able to fully onboard — including student setup, membership plans, and classes — in a fraction of the time it used to take.",
            galleryImages: [
                "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1600&auto=format&fit=crop"
            ]
        }
    },
    {
        title: "Oqool Core HR",
        tags: ["SAAS", "HR SYSTEM", "INTERNAL TOOLS"],
        type: "HR Management",
        image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600&auto=format&fit=crop",
        hoverImage: "https://piton-digital.s3.eu-north-1.amazonaws.com/891_1x_shots_so.png?q=80&w=1600&auto=format&fit=crop",
        color: "bg-white",
        caseStudy: {
            title: "Oqool Core HR",
            headline: "BUILDING A MODERN HR & PAYROLL SYSTEM FOR GROWING COMPANIES",
            services: ["PRODUCT STRATEGY", "UX DESIGN", "NO-CODE DEVELOPMENT"],
            tools: ["BUBBLE", "FIGMA", "CHART.JS"],
            timeline: "4 MONTHS",
            mainImage: "https://piton-digital.s3.eu-north-1.amazonaws.com/405shots_so.png?q=80&w=1600&auto=format&fit=crop",
            intro: "Oqool Core HR is a comprehensive HR and payroll platform designed to help companies manage employees, attendance, approvals, and payroll with clarity and control. We designed and built a flexible internal system that supports company-wide defaults, employee-specific rules, and multi-level approval workflows — all while staying compliant with UAE labour practices.",
            challenges: [
                "Designing a flexible approval workflow system that adapts to different company structures without overcomplication.",
                "Handling employee-specific working hours alongside company-wide defaults without breaking payroll logic.",
                "Separating company owners (CEO) from employees while still supporting executive approvals.",
                "Ensuring payroll accuracy with attendance rules, late penalties, paid public holidays, and exportable reports."
            ],
            process: "We approached Oqool Core HR with a systems-first mindset. Starting with Figma, we mapped complex HR processes into simple, understandable interfaces. In Bubble, we implemented scalable data models for employees, work schedules, approvals, and payroll. Special attention was given to approval logic — introducing sequential approval flows, line-manager and department-based routing, and a toggle-based CEO approval mechanism. The result is a stable, predictable system that mirrors real-world HR operations.",
            stats: [
                { label: "Approval Accuracy", value: "100%" },
                { label: "Payroll Cycles Automated", value: "30+ Monthly" },
                { label: "Manual HR Tasks Reduced", value: "-70%" }
            ],
            testimonial: {
                quote: "Oqool Core HR gave us structure and clarity. Approvals, payroll, and attendance finally work the way they should without unnecessary complexity.",
                author: "Operations Lead",
                role: "HR & Operations",
                company: "Oqool",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg"
            },
            result: "A production-ready HR and payroll system that empowers companies to manage employees, approvals, and payroll with confidence. Oqool Core HR delivers flexible approval workflows, accurate payroll calculations, UAE public holiday handling, and export-ready reports — all built as a scalable no-code solution.",
            galleryImages: [
                "https://piton-digital.s3.eu-north-1.amazonaws.com/405shots_so.png?q=80&w=1600&auto=format&fit=crop",
                "https://piton-digital.s3.eu-north-1.amazonaws.com/269shots_so.png?q=80&w=1600&auto=format&fit=crop",
                "https://piton-digital.s3.eu-north-1.amazonaws.com/435shots_so.png?q=80&w=1600&auto=format&fit=crop",
                "https://piton-digital.s3.eu-north-1.amazonaws.com/768shots_so.png?q=80&w=1600&auto=format&fit=crop",
                "https://piton-digital.s3.eu-north-1.amazonaws.com/269shots_so.png?q=80&w=1600&auto=format&fit=crop",
                "https://piton-digital.s3.eu-north-1.amazonaws.com/269shots_so.png?q=80&w=1600&auto=format&fit=crop"
            ]
        }
    },
    {
        title: "CarsAncestry",
        tags: ["SOCIAL MEDIA", "WEB", "MOBILE"],
        type: "Social App",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
        hoverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
        color: "bg-white",
        caseStudy: {
            title: "CarsAncestry",
            headline: "BUILDING THE SOCIAL NETWORK FOR CAR OWNERS & ENTHUSIASTS",
            services: ["PRODUCT STRATEGY", "UX DESIGN", "DEVELOPMENT"],
            tools: ["BUBBLE", "FIGMA", "ZAPIER"],
            timeline: "3 MONTHS",
            mainImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
            intro: "CarsAncestry aims to be the home for car enthusiasts — a platform where every ride has a timeline, every owner has a voice, and every vehicle’s story lives beyond the road. We designed and developed a social system that allows users to log vehicles, share updates, join car clubs, and build legacy-driven profiles.",
            challenges: [
                "Creating a unified platform that blends social posting with detailed vehicle documentation.",
                "Designing flexible community spaces (Panels) with four complex permission types.",
                "Ensuring a clean user journey for adding vehicles, viewing timelines, and joining clubs."
            ],
            process: "We approached the platform with a community-first mindset. Using Figma, we crafted a modern social interface that blends automotive aesthetics with social familiarity. In Bubble, we built the infrastructure for vehicles, ownership logs, Panels, posts, comments, and notifications. The result is a smooth ecosystem that feels like Instagram meets automotive history tracking.",
            stats: [
                { label: "User Engagement", value: "+60%" },
                { label: "Vehicles Logged", value: "1,200+" },
                { label: "Active Panels", value: "350+" }
            ],
            testimonial: {
                quote: "CarsAncestry feels fresh, intuitive, and built for real car lovers. It's the first platform where our community can truly share and connect.",
                author: "A. Thompson",
                role: "Community Moderator",
                company: "CarsAncestry",
                avatar: "https://randomuser.me/api/portraits/men/64.jpg"
            },
            result: "A fully functional social platform that empowers users to document their automotive journeys, connect through shared models and clubs, and build a digital legacy for every car they’ve owned.",
            galleryImages: [
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=1600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1600&auto=format&fit=crop"
            ]
        }
    },
    {
        title: "Piton Analytics",
        tags: ["SAAS", "DATA", "AI"],
        type: "Data Platform",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
        hoverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
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
                "https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=1600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=1600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
            ]
        }
    },
    {
        title: "Apex Gear",
        tags: ["E-COMMERCE", "SHOPIFY", "UX"],
        type: "E-Commerce",
        image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop",
        hoverImage: "https://images.unsplash.com/photo-1472851294608-4155f21180e9?q=80&w=1600&auto=format&fit=crop",
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
                "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1502126324834-38f8e02d7160?q=80&w=1600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1601224748193-d36f0b3303d6?q=80&w=1600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop"
            ]
        }
    },
    {
        title: "The Drivory",
        tags: ["SOCIAL", "AUTOMOTIVE", "APP"],
        type: "Social Network App",
        image: "https://piton-digital.s3.eu-north-1.amazonaws.com/93shots_so.png?q=80&w=1600&auto=format&fit=crop",
        color: "bg-white",
    },
    {
        title: "Tamashi LMS",
        tags: ["EDTECH", "LMS", "WEB"],
        type: "EdTech",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
        color: "bg-white",
    },
    {
        title: "Velvet Rope",
        tags: ["SOCIAL", "PREMIUM", "APP"],
        type: "Social App",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop",
        color: "bg-white",
    }
];

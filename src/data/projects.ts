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
            mainImage: "https://piton-digital.s3.eu-north-1.amazonaws.com/Trailhead/Dojohub+main.png?q=80&w=1600&auto=format&fit=crop",
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
            liveUrl: "https://dojohub.com",
            galleryImages: [
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Dojohub/714shots_so.png?q=80&w=1600&auto=format&fit=crop", caption: "Dashboard Overview" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Dojohub/586shots_so.png?q=80&w=1600&auto=format&fit=crop", caption: "Program Management" },
                { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop", caption: "Class Scheduling Interface" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Dojohub/543shots_so.png?q=80&w=1600&auto=format&fit=crop", caption: "Student Information" },
                { url: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1600&auto=format&fit=crop", caption: "Attendance Tracking" },
                { url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1600&auto=format&fit=crop", caption: "Belt Promotion System" },
                { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop", caption: "Billing & Payments" },
                { url: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1600&auto=format&fit=crop", caption: "Instructor Portal" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Dojohub/638shots_so.png?q=80&w=1600&auto=format&fit=crop", caption: "Membership Plans Management" }
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
            mainImage: "https://piton-digital.s3.eu-north-1.amazonaws.com/Main+image.png?q=80&w=1600&auto=format&fit=crop",
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
            liveUrl: "https://www.oqool.io/",
            galleryImages: [
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/405shots_so.png?q=80&w=1600&auto=format&fit=crop", caption: "Employee Dashboard" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/269shots_so.png?q=80&w=1600&auto=format&fit=crop", caption: "Employee Directory" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/435shots_so.png?q=80&w=1600&auto=format&fit=crop", caption: "Employee Info Popup" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/768shots_so.png?q=80&w=1600&auto=format&fit=crop", caption: "AI Assistant" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Hr/506shots_so.png?q=80&w=1600&auto=format&fit=crop", caption: "Custom Services" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/269shots_so.png?q=80&w=1600&auto=format&fit=crop", caption: "Settings Configuration" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Hr/647shots_so.png?q=80&w=1600&auto=format&fit=crop", caption: "Project Details" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Hr/249shots_so.png?q=80&w=1600&auto=format&fit=crop", caption: "Project Management" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Hr/591shots_so.png?q=80&w=1600&auto=format&fit=crop", caption: "Approval Workflow" }
            ]
        }
    },
    {
        title: "Recrewer",
        tags: ["SAAS", "TALENT PLATFORM", "MARKETPLACE"],
        type: "Hiring & Talent Management",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
        hoverImage: "https://piton-digital.s3.eu-north-1.amazonaws.com/Recrewer/762shots_so.png?q=80&w=1600&auto=format&fit=crop",
        color: "bg-white",
        caseStudy: {
            title: "Recrewer",
            headline: "DESIGNING A STRUCTURED, TRUST-DRIVEN HIRING PLATFORM FOR MODERN TEAMS",
            services: ["PRODUCT STRATEGY", "UX DESIGN", "SYSTEM DESIGN"],
            tools: ["FIGMA", "FIGJAM", "GOOGLE SHEET"],
            timeline: "Q3 2025",
            mainImage: "https://piton-digital.s3.eu-north-1.amazonaws.com/Recrewer/762shots_so.png?q=80&w=1600&auto=format&fit=crop",
            intro: "Recrewer is a hiring and talent management platform built to help companies discover, interview, hire, and manage contractors in a structured and compliant way. The platform removes the chaos from freelance hiring by centralising discovery, communication, offers, contracts, onboarding, and payments — all while maintaining trust, transparency, and control for both employers and contractors.",
            challenges: [
                "Designing multiple user roles (Contractors, Employers, Admins) with clearly separated permissions and responsibilities.",
                "Balancing a no-job-board hiring model while still enabling effective talent discovery and matching.",
                "Creating an offer and contract flow that feels flexible yet legally structured.",
                "Ensuring trust through verification, background checks, and controlled communication.",
                "Reducing hiring friction without oversimplifying complex real-world workflows."
            ],
            process: "We approached Recrewer with a design-phase-first mindset. Through collaborative call sessions with the founder, we unpacked the full hiring lifecycle — from talent discovery to post-hire management. Using Figma, we mapped detailed user journeys across Employers and Contractors, breaking down interviews, offers, hiring decisions, onboarding, and contracts into clear, modular steps. Special focus was placed on system clarity: job-centric hiring, offer tracking, role-based dashboards, and trust signals like verification and availability. Every design decision was tested against one question — does this reduce uncertainty for the user?",
            stats: [
                { label: "Hiring Flow Coverage", value: "End-to-End" },
                { label: "User Roles Designed", value: "3 Core Roles" },
                { label: "Hiring Friction Reduced", value: "-60%" }
            ],
            /* testimonial: {
                 quote: "Working through the design phase together brought immediate clarity. The structure, flows, and decisions now reflect how hiring actually works in the real world.",
                 author: "Founder",
                 role: "Product & Operations",
                 company: "Recrewer",
                 avatar: "https://randomuser.me/api/portraits/men/45.jpg"
             },*/
            result: "A fully defined hiring platform design that translates complex recruitment processes into simple, intuitive workflows. Recrewer now has a clear system for talent discovery, interviews, offers, contracts, onboarding, and payments — all aligned around trust, clarity, and scalability. The design phase established a strong foundation for development, partnerships, and long-term growth.",
            liveUrl: "https://recrewer.com",
            galleryImages: [
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Recrewer/115shots_so.png?q=80&w=1600&auto=format&fit=crop", caption: "Talent Discovery & Matching" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Recrewer/761shots_so.png?q=80&w=1600&auto=format&fit=crop", caption: "Job Board" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Recrewer/551shots_so.png?q=80&w=1600&auto=format&fit=crop", caption: "Job details & Management" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Recrewer/541shots_so+(1).png?q=80&w=1600&auto=format&fit=crop", caption: "Offer Creation Modal" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Recrewer/443shots_so+(1).png?q=80&w=1600&auto=format&fit=crop", caption: "Contracts & Onboarding" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Recrewer/762shots_so.png?q=80&w=1600&auto=format&fit=crop", caption: "Employer Dashboard" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Recrewer/246shots_so.png?q=80&w=1600&auto=format&fit=crop", caption: "Interview Management" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Recrewer/383shots_so.png?q=80&w=1600&auto=format&fit=crop", caption: "Interview Rescheduling" }
            ]
        }
    },
    /*
    {
        title: "The Drivory",
        tags: ["SOCIAL MEDIA", "WEB", "MOBILE"],
        type: "Social App",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
        hoverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
        color: "bg-white",
        caseStudy: {
            title: "CarsAncestry",
            headline: "BUILDING THE SOCIAL NETWORK FOR CAR OWNERS & ENTHUSIASTS",
            services: ["PRODUCT STRATEGY", "UX DESIGN", "NOCODE DEVELOPMENT"],
            tools: ["BUBBLE", "FIGMA"],
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
            liveUrl: "https://recrewer.com",
            galleryImages: [
                { url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop", caption: "Community Feed" },
                { url: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop", caption: "Vehicle Profile" },
                { url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop", caption: "Event Map" },
                { url: "https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=1600&auto=format&fit=crop", caption: "Club Management" },
                { url: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1600&auto=format&fit=crop", caption: "User Settings" }
            ]
        }
    },*/
    {
        title: "DemmyPay",
        tags: ["FINTECH", "WEB", "MOBILE"],
        type: "B2B & B2C Fintech Platform",
        image: "https://piton-digital.s3.eu-north-1.amazonaws.com/Demmypay/424shots_so.png?q=80&w=1600&auto=format&fit=crop",
        hoverImage: "https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=1600&auto=format&fit=crop",
        color: "bg-white",
        caseStudy: {
            title: "DemmyPay",
            headline: "POWERING AIRTIME & DATA PAYMENTS FOR BUSINESSES AND EVERYDAY NIGERIANS",
            services: ["PRODUCT STRATEGY", "UX/UI DESIGN", "PRODUCT MANAGEMENT"],
            tools: ["FIGJAM", "FIGMA", "GOOGLE SHEETS"],
            timeline: "6 WEEKS",
            mainImage: "https://piton-digital.s3.eu-north-1.amazonaws.com/Demmypay/417shots_so.png?q=80&w=1600&auto=format&fit=crop",
            intro: "DemmyPay is a Nigerian B2B and B2C fintech platform that enables fast, secure, and reliable airtime and data transactions. The product serves everyday consumers as well as businesses and high-volume vendors through wallet-based payments, instant fulfillment, and reseller pricing. To date, DemmyPay has processed over $1B in transaction volume across consumer and business use cases.",
            challenges: [
                "Designing a product that works equally well for individual consumers and business users with very different needs.",
                "Building trust at scale in a market where users are cautious about digital payment platforms.",
                "Clearly communicating speed, reliability, and business value within seconds of landing on the site."
            ],
            process: "We adopted a dual-audience, trust-first approach. In Figma, we designed a clean, modular interface that supports both consumer purchase flows and business dashboards without overlap or confusion. Using Bubble, we implemented wallet systems, transaction flows, vendor pricing logic, and business dashboards while maintaining high performance under large transaction volumes.",
            /*  
            stats: [
                  { label: "Total Transaction Volume", value: "$1B+" },
                  { label: "Transactions Processed", value: "Millions+" },
                  { label: "Transaction Success Rate", value: "99.9%" }
                    ],
            */
            testimonial: {
                quote: "DemmyPay works perfectly for both our personal use and our data business. It’s fast, reliable, and easy to manage.",
                author: "Ayomide",
                role: "Product Manager",
                company: "DemmyPay",
                avatar: "https://randomuser.me/api/portraits/men/45.jpg"
            },
            result: "A scalable B2B and B2C fintech platform that powers billions in airtime and data transactions, supports businesses with reliable vendor tools, and delivers a fast, trustworthy experience for everyday Nigerian consumers.",
            liveUrl: "https://demmypay.com",
            galleryImages: [
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Demmypay/417shots_so.png?q=80&w=1600&auto=format&fit=crop", caption: "Business & Vendor Dashboard" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Demmypay/424shots_so.png?q=80&w=1600&auto=format&fit=crop", caption: "API Documentation" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Demmypay/646shots_so.png?q=80&w=1600&auto=format&fit=crop", caption: "Transaction History" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Demmypay/497shots_so.png?q=80&w=1600&auto=format&fit=crop", caption: "Beneficiaries Management" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Demmypay/735shots_so+(1).png?q=80&w=1600&auto=format&fit=crop", caption: "Export Transaction record" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Demmypay/645shots_so.png?q=80&w=1600&auto=format&fit=crop", caption: "Settings" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Demmypay/952shots_so+(1).png?q=80&w=1600&auto=format&fit=crop", caption: "Transaction History" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Demmypay/161shots_so+(1).png?q=80&w=1600&auto=format&fit=crop", caption: "Pin Setup" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Demmypay/161shots_so+(1).png?q=80&w=1600&auto=format&fit=crop", caption: "Data & Airtime Purchase" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Demmypay/532shots_so.png?q=80&w=1600&auto=format&fit=crop", caption: "Share 'n' Sell Data Sharing" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Demmypay/258shots_so+(1).png?q=80&w=1600&auto=format&fit=crop", caption: "Beneficiary Selection" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Demmypay/397shots_so.png?q=80&w=1600&auto=format&fit=crop", caption: "Beneficiary Selection" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Demmypay/261shots_so.png?q=80&w=1600&auto=format&fit=crop", caption: "Auto Contact Addition" },
            ]
        }
    },
    {
        title: "TrailHead",
        tags: ["FINTECH", "MOBILE", "RETIREMENT"],
        type: "Personal Finance & Retirement Planning App",
        image: "https://piton-digital.s3.eu-north-1.amazonaws.com/Trailhead/Main+image.png",
        hoverImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
        color: "bg-white",
        caseStudy: {
            title: "TrailHead",
            headline: "HELPING PEOPLE VISUALIZE AND STAY ON TRACK WITH THEIR RETIREMENT JOURNEY",
            services: ["PRODUCT STRATEGY", "UX/UI DESIGN", "DESIGN SYSTEM"],
            tools: ["FIGJAM", "FIGMA", "NOTION"],
            timeline: "10+ WEEKS",
            mainImage: "https://piton-digital.s3.eu-north-1.amazonaws.com/Trailhead/Main+image.png",
            intro:
                "TrailHead is a mobile retirement planning app designed to help users understand, visualize, and stay motivated on their long-term savings journey. Instead of relying on spreadsheets or manual tracking, TrailHead uses a one-time onboarding setup to generate personalized projections, progress scoring, and benchmark comparisons. The product focuses on clarity, habit-building, and behavioral motivation for everyday users planning for retirement.",
            challenges: [
                "Designing a retirement planning experience that feels approachable rather than intimidating.",
                "Translating complex financial concepts like projections, benchmarks, and volatility into simple visuals.",
                "Keeping users engaged over time without requiring manual data entry or daily input.",
                "Balancing data density with a calm, motivating interface suitable for a wide age range."
            ],
            process:
                "We started by mapping the full user journey, from first launch to long-term usage. The product was designed around a one-time Trail Setup flow that collects key inputs and powers the entire experience. From there, I designed a modular dashboard system that surfaces projections, progress scores, and peer benchmarks through visual storytelling. A scalable design system was created to support charts, scoring states, and future premium features, ensuring consistency across the app.",
            stats: [
                { label: "Primary User Input Time", value: "< 5 minutes" },
                { label: "Manual Data Logging Required", value: "0" },
                { label: "Core Dashboards Designed", value: "5+" }
            ],
            testimonial: {
                quote:
                    "Tife did a perfect job and I am willing to hire him again when the opportunity comes.",
                author: "Sam C.",
                role: "Client",
                company: "TrailHead",
                avatar: "https://piton-digital.s3.eu-north-1.amazonaws.com/Trailhead/Samuel+Cousin.avif"
            },
            result:
                "TrailHead delivers a clean, scalable retirement planning experience that replaces spreadsheets with intuitive visuals. Users gain immediate clarity on their savings trajectory, ongoing motivation through scoring and benchmarks, and confidence in their long-term financial decisions without needing advanced financial knowledge.",
            liveUrl: "",
            galleryImages: [
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Trailhead/742shots_so.png?q=80&w=1600&auto=format&fit=crop", caption: "Dashboard" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Trailhead/21shots_so.png?q=80&w=1600&auto=format&fit=crop", caption: "Dashboard, Checkpoint & Pace vs Pack" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Trailhead/231shots_so.png?q=80&w=1600&auto=format&fit=crop", caption: "Pace vs Pack" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Trailhead/149shots_so.png?q=80&w=1600&auto=format&fit=crop", caption: "Trail Checkpoint" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Trailhead/536shots_so.png?q=80&w=1600&auto=format&fit=crop", caption: "Settings -> Email Change Process" },
                { url: "https://piton-digital.s3.eu-north-1.amazonaws.com/Trailhead/536shots_so.png?q=80&w=1600&auto=format&fit=crop", caption: "Trail Checkpoint" },
            ]
        }
    }

]

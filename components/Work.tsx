import React, { useRef, useState } from 'react';
import { motion, useTransform, useScroll, AnimatePresence } from 'framer-motion';
import CaseStudyModal, { CaseStudyData } from './CaseStudyModal';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  tags: string[];
  image: string;
  color: string;
  onClick?: () => void;
  hasCaseStudy: boolean;
  index: number;
  hoverImage?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, tags, image, onClick, hasCaseStudy, index, hoverImage }) => {
  return (
    <div
      onClick={onClick}
      className={`min-w-[80vw] md:min-w-[600px] lg:min-w-[800px] h-[70vh] relative group mx-4 md:mx-8 ${hasCaseStudy ? 'cursor-pointer' : ''}`}
    >
      {/* Image Container */}
      <div className="w-full h-full relative overflow-hidden bg-zinc-900 flex">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10 pointer-events-none" />

        {/* Left Image (Main) */}
        <div className={`relative h-full overflow-hidden transition-all duration-700 ease-in-out ${hoverImage ? 'w-1/2 group-hover:w-0' : 'w-full'}`}>
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
        </div>

        {/* Right Image (Hover) */}
        {hoverImage && (
          <div className="relative h-full overflow-hidden w-1/2 group-hover:w-full transition-all duration-700 ease-in-out">
            <motion.img
              src={hoverImage}
              alt={`${title} Preview`}
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />
          </div>
        )}

        {/* Content Overlay */}
        <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-between text-white">
          <div className="flex justify-between items-start">
            <span className="text-xs font-mono uppercase tracking-widest opacity-70">0{index + 1}</span>
            <div className="flex gap-2">
              {tags.map((tag, i) => (
                <span key={i} className="px-2 py-1 border border-white/20 text-[10px] font-mono uppercase tracking-wider backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-5xl md:text-7xl font-display font-bold leading-[0.9] tracking-tighter mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              {title.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h3>

            {hasCaseStudy && (
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <span className="text-sm font-mono uppercase tracking-wider">View Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Work: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [selectedProject, setSelectedProject] = useState<CaseStudyData | null>(null);

  // Transform vertical scroll progress into horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  const projects = [
    {
      title: "Dojohub CRM",
      tags: ["EDTECH", "FULL SCALE", "AU"],
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
      "title": "Oqool Core HR",
      "tags": ["SAAS", "HR SYSTEM", "INTERNAL TOOLS"],
      "image": "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600&auto=format&fit=crop",
      "hoverImage": "https://piton-digital.s3.eu-north-1.amazonaws.com/891_1x_shots_so.png?q=80&w=1600&auto=format&fit=crop",
      "color": "bg-white",
      "caseStudy": {
        "title": "Oqool Core HR",
        "headline": "BUILDING A MODERN HR & PAYROLL SYSTEM FOR GROWING COMPANIES",
        "services": ["PRODUCT STRATEGY", "UX DESIGN", "NO-CODE DEVELOPMENT"],
        "tools": ["BUBBLE", "FIGMA", "CHART.JS"],
        "timeline": "4 MONTHS",
        "mainImage": "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600&auto=format&fit=crop",
        "intro": "Oqool Core HR is a comprehensive HR and payroll platform designed to help companies manage employees, attendance, approvals, and payroll with clarity and control. We designed and built a flexible internal system that supports company-wide defaults, employee-specific rules, and multi-level approval workflows — all while staying compliant with UAE labour practices.",
        "challenges": [
          "Designing a flexible approval workflow system that adapts to different company structures without overcomplication.",
          "Handling employee-specific working hours alongside company-wide defaults without breaking payroll logic.",
          "Separating company owners (CEO) from employees while still supporting executive approvals.",
          "Ensuring payroll accuracy with attendance rules, late penalties, paid public holidays, and exportable reports."
        ],
        "process": "We approached Oqool Core HR with a systems-first mindset. Starting with Figma, we mapped complex HR processes into simple, understandable interfaces. In Bubble, we implemented scalable data models for employees, work schedules, approvals, and payroll. Special attention was given to approval logic — introducing sequential approval flows, line-manager and department-based routing, and a toggle-based CEO approval mechanism. The result is a stable, predictable system that mirrors real-world HR operations.",
        "stats": [
          { "label": "Approval Accuracy", "value": "100%" },
          { "label": "Payroll Cycles Automated", "value": "30+ Monthly" },
          { "label": "Manual HR Tasks Reduced", "value": "-70%" }
        ],
        "testimonial": {
          "quote": "Oqool Core HR gave us structure and clarity. Approvals, payroll, and attendance finally work the way they should without unnecessary complexity.",
          "author": "Operations Lead",
          "role": "HR & Operations",
          "company": "Oqool",
          "avatar": "https://randomuser.me/api/portraits/men/32.jpg"
        },
        "result": "A production-ready HR and payroll system that empowers companies to manage employees, approvals, and payroll with confidence. Oqool Core HR delivers flexible approval workflows, accurate payroll calculations, UAE public holiday handling, and export-ready reports — all built as a scalable no-code solution.",
        "galleryImages": [
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop"
        ]
      }
    },
    {
      "title": "CarsAncestry",
      "tags": ["SOCIAL MEDIA", "WEB", "MOBILE"],
      "image": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
      "hoverImage": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
      "color": "bg-white",
      "caseStudy": {
        "title": "CarsAncestry",
        "headline": "BUILDING THE SOCIAL NETWORK FOR CAR OWNERS & ENTHUSIASTS",
        "services": ["PRODUCT STRATEGY", "UX DESIGN", "DEVELOPMENT"],
        "tools": ["BUBBLE", "FIGMA", "ZAPIER"],
        "timeline": "3 MONTHS",
        "mainImage": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
        "intro": "CarsAncestry aims to be the home for car enthusiasts — a platform where every ride has a timeline, every owner has a voice, and every vehicle’s story lives beyond the road. We designed and developed a social system that allows users to log vehicles, share updates, join car clubs, and build legacy-driven profiles.",
        "challenges": [
          "Creating a unified platform that blends social posting with detailed vehicle documentation.",
          "Designing flexible community spaces (Panels) with four complex permission types.",
          "Ensuring a clean user journey for adding vehicles, viewing timelines, and joining clubs."
        ],
        "process": "We approached the platform with a community-first mindset. Using Figma, we crafted a modern social interface that blends automotive aesthetics with social familiarity. In Bubble, we built the infrastructure for vehicles, ownership logs, Panels, posts, comments, and notifications. The result is a smooth ecosystem that feels like Instagram meets automotive history tracking.",
        "stats": [
          { "label": "User Engagement", "value": "+60%" },
          { "label": "Vehicles Logged", "value": "1,200+" },
          { "label": "Active Panels", "value": "350+" }
        ],
        "testimonial": {
          "quote": "CarsAncestry feels fresh, intuitive, and built for real car lovers. It's the first platform where our community can truly share and connect.",
          "author": "A. Thompson",
          "role": "Community Moderator",
          "company": "CarsAncestry",
          "avatar": "https://randomuser.me/api/portraits/men/64.jpg"
        },
        "result": "A fully functional social platform that empowers users to document their automotive journeys, connect through shared models and clubs, and build a digital legacy for every car they’ve owned.",
        "galleryImages": [
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=1600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1600&auto=format&fit=crop"
        ]
      }
    }
    ,
    {
      title: "Piton Analytics",
      tags: ["SAAS", "DATA", "AI"],
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
    }
  ];

  return (
    <>
      <section id="work" ref={targetRef} className="relative h-[300vh] bg-[#FDFDFD]">
        {/* Sticky Container */}
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">

          <div className="absolute top-10 left-10 z-10 flex items-center gap-4">
            <span className="w-3 h-3 bg-piton-accent rounded-full animate-pulse"></span>
            <span className="text-sm font-mono uppercase tracking-widest">Selected Expeditions</span>
          </div>

          {/* Horizontal Scroll Content */}
          <motion.div style={{ x }} className="flex gap-0 px-4 md:px-20 items-center relative z-10">

            {/* Intro / Title Slide */}
            <div className="min-w-[50vw] md:min-w-[40vw] pr-20 pl-10">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-[10vw] font-display font-bold text-piton-black leading-[0.85] tracking-tighter mb-12"
              >
                PROVEN<br />RESULTS
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-zinc-400"
              >
                <ArrowRight className="w-4 h-4 text-piton-accent" />
                <span>See What's Possible</span>
              </motion.div>
            </div>

            {projects.map((project, i) => (
              <ProjectCard
                key={i}
                index={i}
                {...project}
                onClick={() => project.caseStudy && setSelectedProject(project.caseStudy)}
                hasCaseStudy={!!project.caseStudy}
              />
            ))}

            {/* End Card */}
            <div className="min-w-[400px] flex items-center justify-center pl-20">
              <a href="#contact" className="group flex items-center gap-4 text-4xl font-display font-bold text-piton-black hover:text-piton-accent transition-colors">
                <span>View All Projects</span>
                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            data={selectedProject}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Work;
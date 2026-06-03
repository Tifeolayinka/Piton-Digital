import React, { useState } from 'react';
import {
  ArrowRight,
  Shield,
  Check,
  Star,
  Calendar,
  MessageSquare,
  Play,
  Zap,
  HelpCircle,
  FileText,
  ChevronRight,
} from 'lucide-react';
import Reveal from '../../components/Reveal';
import PortfolioFooter from '../../components/PortfolioFooter';
import { CaseStudyData } from '../../components/CaseStudyModal';

interface OfferProps {
  onProjectClick: (project: CaseStudyData) => void;
}

const CALENDLY_URL = 'https://calendly.com/pitondigital';
const VIDEO_EMBED_URL = 'https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1';

const benefits = [
  {
    n: '1',
    icon: Zap,
    title: "Explore what's possible",
    desc: "See how we've helped service businesses streamline messy ops and reclaim 12+ hours per week.",
  },
  {
    n: '2',
    icon: HelpCircle,
    title: 'Your questions answered',
    desc: 'Get answers to all your questions about developing your own custom internal tool.',
  },
  {
    n: '3',
    icon: FileText,
    title: 'Get an estimate',
    desc: 'Walk away with a clear timeline and fixed-cost estimate to build your internal tool.',
  },
  {
    n: '4',
    icon: Shield,
    title: 'Zero-risk guarantees',
    desc: "Learn how we remove all risk — your project gets delivered right, or you don't pay.",
  },
];

const portfolioItems = [
  {
    title: 'DojoHub CRM',
    category: 'Martial Arts Platform',
    description: 'Full CRM replacing manual scheduling, belt-tracking, and payment spreadsheets.',
    tag: 'CRM System',
    color: 'from-violet-100 to-violet-50',
    accent: 'text-violet-600 bg-violet-50 border-violet-100',
  },
  {
    title: 'Oqool Core HR',
    category: 'HR & Payroll Platform',
    description: 'Automated payroll, attendance tracking, and multi-level approval workflows.',
    tag: 'HR Management',
    color: 'from-sky-100 to-sky-50',
    accent: 'text-sky-600 bg-sky-50 border-sky-100',
  },
  {
    title: 'Closy',
    category: 'Sales Automation',
    description: 'Manage your sales pipeline, commission tracking, and analytics in one portal.',
    tag: 'Sales CRM',
    color: 'from-amber-100 to-amber-50',
    accent: 'text-amber-600 bg-amber-50 border-amber-100',
  },
  {
    title: 'TestDrive Check',
    category: 'Field Operations',
    description: 'End-to-end test drive management, lead capture, and follow-up tracking system.',
    tag: 'Operations',
    color: 'from-emerald-100 to-emerald-50',
    accent: 'text-emerald-600 bg-emerald-50 border-emerald-100',
  },
  {
    title: 'SubTrack',
    category: 'Subscription Management',
    description: 'Custom subscription billing, renewal tracking, and self-serve client portal.',
    tag: 'Billing',
    color: 'from-rose-100 to-rose-50',
    accent: 'text-rose-600 bg-rose-50 border-rose-100',
  },
  {
    title: 'Project Portal',
    category: 'Client Management',
    description: 'All-in-one client communication, file delivery, and milestone tracking portal.',
    tag: 'Client Portal',
    color: 'from-indigo-100 to-indigo-50',
    accent: 'text-indigo-600 bg-indigo-50 border-indigo-100',
  },
];

const testimonials = [
  {
    name: 'Andrew',
    stars: 5,
    quote:
      "Tife came in with a clear execution plan that truly delivered value. We went from two separate systems to one clean view — and haven't looked back since.",
  },
  {
    name: 'Matt',
    stars: 5,
    quote:
      'We needed a sales tracking dashboard for our team. Piton built a clean system with real-time reporting that our whole team actually uses daily.',
  },
  {
    name: 'Tang',
    stars: 5,
    quote:
      'Digital tool for our inventory management, done right. Easy for non-tech staff to navigate. Saves us hours of admin work throughout the week.',
  },
  {
    name: 'Shamir',
    stars: 5,
    quote:
      'Delivered a custom inventory platform with error-free payouts and full audit trails — the entire client onboarding workflow is now completely automated.',
  },
  {
    name: 'Nika',
    stars: 5,
    quote:
      'The tool has shift management with real-time status, role-based access, and a clean UI that works great on mobile and desktop.',
  },
  {
    name: 'Rob',
    stars: 5,
    quote:
      'Our operations team finally has a platform built for them. Custom workflows, automated reports, and real-time dashboards throughout the day.',
  },
];

const AVAILABLE_DAYS = [3, 4, 5, 10, 11, 12, 17, 18, 19, 24, 25, 26];
const TIME_SLOTS = ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'];

function CalendarWidget({ dark = false }: { dark?: boolean }) {
  const bookCall = () => window.open(CALENDLY_URL, '_blank');
  const border = dark ? 'border-zinc-800' : 'border-zinc-200';
  const bg = dark ? 'bg-zinc-950' : 'bg-white';
  const text = dark ? 'text-white' : 'text-zinc-900';
  const sub = dark ? 'text-zinc-500' : 'text-zinc-400';
  const slotBase = dark
    ? 'border-zinc-800 text-zinc-400 hover:border-piton-accent hover:text-piton-accent hover:bg-piton-accent/5'
    : 'border-zinc-200 text-zinc-700 hover:border-piton-accent hover:text-piton-accent hover:bg-piton-accent/5';
  const dayAvail = dark ? 'text-zinc-400 hover:bg-zinc-800' : 'text-zinc-700 hover:bg-zinc-100';

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
      <div className={`md:col-span-3 ${bg} rounded-xl border ${border} p-5`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`font-bold ${text} text-sm`}>Free App Consultation (Business)</h3>
          <span className={`text-xs ${sub} font-mono`}>45 min</span>
        </div>
        <div className="mb-3 flex items-center justify-between">
          <span className={`text-sm font-bold ${dark ? 'text-zinc-300' : 'text-zinc-700'}`}>June 2026</span>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
            <div key={d} className={`text-[10px] font-bold ${sub} uppercase py-1`}>{d}</div>
          ))}
          {[...Array(6)].map((_, i) => <div key={i} className="py-1.5" />)}
          {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
            const avail = AVAILABLE_DAYS.includes(day);
            const hi = day === 10;
            return (
              <button
                key={day}
                onClick={avail ? bookCall : undefined}
                className={`text-[11px] py-1.5 rounded-full transition-colors font-mono ${
                  hi
                    ? 'bg-piton-accent text-white font-bold'
                    : avail
                    ? `${dayAvail} cursor-pointer`
                    : `${dark ? 'text-zinc-700' : 'text-zinc-300'} cursor-default`
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      <div className="md:col-span-2 space-y-2.5">
        <p className={`text-xs font-bold ${sub} uppercase tracking-widest`}>Available times</p>
        {TIME_SLOTS.map((time) => (
          <button
            key={time}
            onClick={bookCall}
            className={`w-full py-2.5 px-4 border rounded-lg text-sm font-mono transition-colors text-left ${slotBase}`}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
}

const Offer: React.FC<OfferProps> = ({ onProjectClick: _onProjectClick }) => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const bookCall = () => window.open(CALENDLY_URL, '_blank');

  return (
    <main className="bg-[#FDFDFD] text-zinc-900 overflow-x-hidden antialiased">

      {/* Slim Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <span className="font-display font-bold text-zinc-900 text-sm tracking-tight">Piton App</span>
          <button
            onClick={bookCall}
            className="px-4 py-2 bg-piton-black text-white rounded-full font-bold text-xs hover:bg-zinc-800 transition-colors interactive"
          >
            Book a Discovery Call
          </button>
        </div>
      </nav>

      {/* 1. Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-tight leading-[1.05] text-zinc-950 mb-6">
              Custom internal tools for service businesses —{' '}
              built in <span className="text-piton-accent">weeks</span>, for a{' '}
              <span className="underline decoration-wavy decoration-piton-accent/40 underline-offset-4">
                fraction of the cost
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Stop running your business on memory, group chats, and 6 disconnected tools. We build one
              custom tool around HOW your business actually runs, so admin disappears and jobs stop slipping.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex items-center justify-center gap-8 md:gap-16 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold font-mono text-zinc-900">15+</div>
                <div className="text-xs text-zinc-500 mt-1">Tools delivered</div>
              </div>
              <div className="w-px h-10 bg-zinc-200" />
              <div className="text-center">
                <div className="text-3xl font-bold font-mono text-zinc-900">12+ hrs</div>
                <div className="text-xs text-zinc-500 mt-1">Saved per team / week</div>
              </div>
              <div className="w-px h-10 bg-zinc-200" />
              <div className="text-center">
                <div className="flex items-center gap-1 justify-center">
                  <span className="text-3xl font-bold font-mono text-zinc-900">5</span>
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                </div>
                <div className="text-xs text-zinc-500 mt-1">Founders &amp; teams</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Step 1 — Watch video */}
      <section className="py-14 px-4 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-7">
              <span className="text-xs font-bold text-piton-accent uppercase tracking-widest font-mono">
                Step 1 of 2: Watch this short video (important)
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-bold uppercase mt-2 text-zinc-900">
                See how we build it — and{' '}
                <span className="text-piton-accent">why it works</span>
              </h2>
              <p className="text-zinc-500 text-sm mt-2 max-w-lg mx-auto">
                Discover how we deliver production-ready internal tools in weeks for a{' '}
                <strong>fraction of the cost</strong>. See real case studies, results, and our zero-risk guarantee.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} width="100%">
            <div
              className="relative rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl aspect-video group cursor-pointer"
              onClick={() => setVideoPlaying(true)}
            >
              {!videoPlaying ? (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-18 h-18 w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                        <Play className="w-7 h-7 text-white fill-white ml-1" />
                      </div>
                      <p className="text-zinc-400 text-sm">Watch how we build it</p>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs font-mono px-2 py-1 rounded">
                    3:42
                  </div>
                </>
              ) : (
                <iframe
                  className="w-full h-full"
                  src={VIDEO_EMBED_URL}
                  title="Piton App — How It Works"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Step 2 — Book a discovery call */}
      <section className="py-14 px-4 bg-white border-b border-zinc-100">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-piton-accent uppercase tracking-widest font-mono">
                Step 2 of 2: Book a discovery call
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-bold uppercase mt-2 text-zinc-900">
                Pick a time that works for you
              </h2>
              <p className="text-zinc-500 text-sm mt-2 max-w-md mx-auto">
                We'll map the key workflows, confirm scope, and give you a clear timeline and fixed quote.
                Everything is confidential.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} width="100%">
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <CalendarWidget />
              <div className="mt-6 pt-6 border-t border-zinc-200 text-center">
                <button
                  onClick={bookCall}
                  className="px-8 py-3.5 bg-piton-black text-white rounded-full font-bold text-sm hover:bg-zinc-800 transition-colors inline-flex items-center gap-2 interactive shadow-lg shadow-black/10"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Booking</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-zinc-400 mt-3">No credit card. No pressure. Everything is confidential.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. What you'll get from the call */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold uppercase text-zinc-950">
                What you'll get{' '}
                <span className="text-piton-accent">from the call</span>
              </h2>
              <p className="text-zinc-500 text-sm mt-3 max-w-md mx-auto">
                A clear answer on whether a custom internal tool is right for your business. No pressure,
                no pitch deck.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.1} width="100%">
                <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 hover:border-zinc-300 transition-colors h-full">
                  <div className="w-8 h-8 rounded-lg bg-piton-accent text-white font-bold text-sm flex items-center justify-center mb-4 font-mono">
                    {b.n}
                  </div>
                  <h3 className="font-bold text-zinc-900 mb-2">{b.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Quality Guarantee */}
      <section className="py-14 px-4 bg-zinc-950 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-display font-bold uppercase mb-2">
              Our <span className="text-piton-accent">Quality of Build</span> Guarantee
            </h2>
            <p className="text-zinc-400 text-sm mb-8 max-w-md mx-auto">
              If we fail to deliver your tool on-spec, you get a full refund. No questions asked.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-3 text-left max-w-sm mx-auto">
              {[
                'Unlimited revisions during development',
                '30 days free maintenance after launch',
                'Free staff onboarding and training',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-piton-accent/20 border border-piton-accent/40 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-piton-accent" />
                  </div>
                  <span className="text-sm text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. Featured Work */}
      <section className="py-20 px-4 bg-[#FDFDFD]">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-4">
              <span className="text-xs font-bold text-piton-accent uppercase tracking-widest font-mono">
                Featured Work
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold uppercase mt-2 text-zinc-950">
                Internal tools we've built for service businesses
              </h2>
              <p className="text-zinc-500 text-sm mt-2">
                9+ tools delivered across healthcare, agencies, and construction
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex justify-center mt-6 mb-10">
              <a
                href="/"
                className="px-5 py-2 border border-zinc-300 rounded-full text-sm font-bold text-zinc-700 hover:border-piton-accent hover:text-piton-accent transition-colors interactive"
              >
                Check Portfolio →
              </a>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolioItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08} width="100%">
                <div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-zinc-300 transition-all group cursor-pointer">
                  <div className={`aspect-[4/3] bg-gradient-to-br ${item.color} relative overflow-hidden flex items-center justify-center`}>
                    <div className="w-14 h-14 rounded-2xl bg-white/80 border border-white shadow flex items-center justify-center">
                      <span className={`font-bold text-2xl font-mono ${item.accent.split(' ')[0]}`}>
                        {item.title[0]}
                      </span>
                    </div>
                    <div className={`absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-bold border ${item.accent}`}>
                      {item.tag}
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider font-mono">
                      {item.category}
                    </span>
                    <h3 className="font-bold text-zinc-900 mt-1 mb-1">{item.title}</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed">{item.description}</p>
                    <button className="mt-3 text-xs font-bold text-piton-accent hover:underline flex items-center gap-1 interactive">
                      See Case Study <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-20 px-4 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest font-mono">Reviews</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold uppercase mt-2 text-zinc-950">
                What founders <span className="text-piton-accent">are saying</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08} width="100%">
                <div className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
                  <div className="h-24 bg-gradient-to-br from-zinc-100 to-zinc-200 rounded-xl mb-4 flex items-center justify-center">
                    <span className="text-zinc-300 text-xs font-mono">Tool Preview</span>
                  </div>
                  <div className="flex items-center gap-0.5 mb-3">
                    {Array.from({ length: t.stars }).map((_, si) => (
                      <Star key={si} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-zinc-600 text-sm leading-relaxed italic flex-1">"{t.quote}"</p>
                  <div className="flex items-center gap-2 pt-4 mt-4 border-t border-zinc-100">
                    <div className="w-7 h-7 rounded-full bg-zinc-200 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-zinc-600">{t.name[0]}</span>
                    </div>
                    <span className="text-sm font-bold text-zinc-800">{t.name}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="text-center mt-10">
              <div className="inline-flex items-center gap-2 text-sm text-zinc-500">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-bold text-zinc-900">4.9 / 5</span>
                <span>based on 12+ reviews on Trustpilot &amp; Clutch →</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="py-20 px-4 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,166,81,0.07),transparent_50%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase leading-tight mb-4">
                Ready to stop running your business on{' '}
                <span className="text-red-400">duct tape?</span>
              </h2>
              <p className="text-zinc-400 text-sm max-w-lg mx-auto">
                Book a discovery call. We'll map the key workflows, confirm scope, and fix invoices. Fast
                quote, fixed timeline, zero risk.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} width="100%">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8">
              <CalendarWidget dark />
              <div className="mt-6 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row gap-4 items-center justify-center">
                <button
                  onClick={bookCall}
                  className="px-8 py-3.5 bg-white text-zinc-950 hover:bg-zinc-100 rounded-full font-bold text-sm transition-colors inline-flex items-center gap-2 interactive shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Booking</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    const msg = encodeURIComponent("Hi Tife, I checked out the Piton offer page and I'd like to discuss a custom internal tool for my business.");
                    window.open(`https://wa.me/2348123456789?text=${msg}`, '_blank');
                  }}
                  className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold text-sm transition-colors inline-flex items-center gap-2 interactive"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <PortfolioFooter />
    </main>
  );
};

export default Offer;

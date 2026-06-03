import React, { useEffect } from 'react';
import {
  ArrowRight,
  Shield,
  Check,
  Star,
  Zap,
  HelpCircle,
  FileText,
  ChevronRight,
  MessageSquare,
} from 'lucide-react';
import Reveal from '../../components/Reveal';
import PortfolioFooter from '../../components/PortfolioFooter';
import { CaseStudyData } from '../../components/CaseStudyModal';
import { projects } from '../data/projects';

interface OfferProps {
  onProjectClick: (project: CaseStudyData) => void;
}

const CAL_LINK = 'tifeolayinka/free-app-consultation-business';
const CAL_URL = `https://cal.com/${CAL_LINK}`;

function CalEmbed() {
  useEffect(() => {
    const w = window as any;
    (function (C: any, A: string, L: string) {
      const p = (a: any, ar: any) => { a.q.push(ar); };
      const d = C.document;
      C.Cal = C.Cal || function (...args: any[]) {
        const cal = C.Cal;
        if (!cal.loaded) {
          cal.ns = {}; cal.q = cal.q || [];
          d.head.appendChild(d.createElement('script')).src = A;
          cal.loaded = true;
        }
        if (args[0] === L) {
          const api: any = (...a: any[]) => p(api, a);
          const ns = args[1]; api.q = api.q || [];
          if (typeof ns === 'string') { cal.ns[ns] = cal.ns[ns] || api; p(cal.ns[ns], args); p(cal, ['initNamespace', ns]); }
          else p(cal, args); return;
        }
        p(cal, args);
      };
    })(w, 'https://app.cal.com/embed/embed.js', 'init');

    w.Cal('init', CAL_LINK, { origin: 'https://app.cal.com' });
    w.Cal.ns[CAL_LINK]('inline', {
      elementOrSelector: '#cal-inline-embed',
      config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true' },
      calLink: CAL_LINK,
    });
    w.Cal.ns[CAL_LINK]('ui', { hideEventTypeDetails: false, layout: 'month_view' });
  }, []);

  return (
    <div
      id="cal-inline-embed"
      style={{ width: '100%', minHeight: '700px', overflow: 'scroll' }}
    />
  );
}

const VIDEO_SRC =
  'https://www.dropbox.com/scl/fi/yw0qecltes8m24g35xlnu/VIDEO-FOR-TIFE.mp4?rlkey=dnxoimcvgvjo93kss7bi69fnj&raw=1';

const siteTestimonials = [
  {
    quote:
      'Working with Tife has been an excellent experience. He contributed to a few projects that demanded quick turnarounds and creative problem-solving. His strong design sense and attention to user experience made him an indispensable asset to our team.',
    name: 'Chad D.',
    role: 'Founder',
    company: 'ChiaDigital',
  },
  {
    quote:
      "Tife has been great to work with. He's helped on a project where we need quick turn-arounds and outside of the box thinking! He's got a good eye for design and UX and would be a great compliment to your project!",
    name: 'Jonathan B.',
    role: 'CEO',
    company: 'Ajuda Benefit',
  },
  {
    quote:
      'Tife has a great eye for design, works quickly and easy to work alongside. He built a marketplace and custom CMS for us in Bubble. I look forward to working with him again.',
    name: 'Nick A.',
    role: 'Product Manager',
    company: 'Alteams',
  },
  {
    quote:
      'Working with the Piton team felt less like hiring an agency and more like bringing on a technical co-founder. They challenged our assumptions and made the product better for it.',
    name: 'Elena Rodriguez',
    role: 'Product Lead',
    company: 'Swift',
  },
];

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

const Offer: React.FC<OfferProps> = ({ onProjectClick }) => {
  const bookCall = () => window.open(CAL_URL, '_blank');

  const whatsapp = () => {
    const msg = encodeURIComponent(
      "Hi Tife, I visited the Piton offer page and I'd like to discuss a custom internal tool for my business."
    );
    window.open(`https://wa.me/2348123456789?text=${msg}`, '_blank');
  };

  return (
    <main className="bg-[#FDFDFD] text-zinc-900 overflow-x-hidden antialiased">

      {/* ── 1. HERO ──────────────────────────────────────────── */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-24 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-display font-bold uppercase tracking-tight leading-[1.05] text-zinc-950 mb-5">
              Custom internal tools for service businesses —{' '}
              built in <span className="text-piton-accent">weeks</span>, for a{' '}
              <span className="underline decoration-wavy decoration-piton-accent/40 underline-offset-4">
                fraction of the cost
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-base md:text-lg text-zinc-500 max-w-xl mx-auto mb-10 leading-relaxed">
              Stop running your business on memory, group chats, and 6 disconnected tools. We build one
              custom tool around HOW your business actually runs, so admin disappears and jobs stop slipping.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex items-center justify-center gap-10 md:gap-16">
              <div>
                <div className="text-3xl font-bold font-mono text-zinc-900">15+</div>
                <div className="text-xs text-zinc-400 mt-0.5">Tools delivered</div>
              </div>
              <div className="w-px h-10 bg-zinc-200" />
              <div>
                <div className="text-3xl font-bold font-mono text-zinc-900">12+ hrs</div>
                <div className="text-xs text-zinc-400 mt-0.5">Saved per team / week</div>
              </div>
              <div className="w-px h-10 bg-zinc-200" />
              <div>
                <div className="flex items-center gap-1 justify-center">
                  <span className="text-3xl font-bold font-mono text-zinc-900">5</span>
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                </div>
                <div className="text-xs text-zinc-400 mt-0.5">Average rating</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 2. STEP 1 — VIDEO ────────────────────────────────── */}
      <section className="py-14 px-4 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-xs font-bold text-piton-accent uppercase tracking-widest font-mono mb-2">
              Step 1 of 2 — Watch this short video (important)
            </p>
            <h2 className="text-2xl md:text-3xl font-display font-bold uppercase text-zinc-900 mb-2">
              See how we build it & why it works
            </h2>
            <p className="text-zinc-500 text-sm mb-8 max-w-md mx-auto">
              Discover how we deliver production-ready internal tools in weeks for a{' '}
              <strong className="text-zinc-700">fraction of the cost</strong>. Real case studies, real results.
            </p>
          </Reveal>

          <Reveal delay={0.1} width="100%">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-zinc-900 aspect-video">
              <video
                src={VIDEO_SRC}
                autoPlay
                loop
                playsInline
                muted
                controls
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 3. STEP 2 — CALENDLY EMBED ───────────────────────── */}
      <section className="py-14 px-4 bg-white border-b border-zinc-100">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-xs font-bold text-piton-accent uppercase tracking-widest font-mono mb-2">
              Step 2 of 2 — Book a discovery call
            </p>
            <h2 className="text-2xl md:text-3xl font-display font-bold uppercase text-zinc-900 mb-2">
              Pick a time that works for you
            </h2>
            <p className="text-zinc-500 text-sm mb-8 max-w-md mx-auto">
              We'll map the key workflows, confirm scope, and give you a clear timeline and fixed quote.
              Everything is confidential.
            </p>
          </Reveal>

          <Reveal delay={0.1} width="100%">
            <div className="rounded-2xl overflow-hidden border border-zinc-200 shadow-sm bg-white">
              <CalEmbed />
            </div>
            <p className="text-xs text-zinc-400 mt-4 text-center">
              No credit card. No pressure. Everything is confidential.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 4. WHAT YOU'LL GET ───────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold uppercase text-zinc-950">
                What you'll get{' '}
                <span className="text-piton-accent">from the call</span>
              </h2>
              <p className="text-zinc-500 text-sm mt-3">
                A clear answer on whether a custom internal tool is right for your business. No pressure, no pitch deck.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08} width="100%">
                <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 h-full">
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

      {/* ── 5. QUALITY GUARANTEE ─────────────────────────────── */}
      <section className="py-14 px-4 bg-zinc-950 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-display font-bold uppercase mb-2">
              Our <span className="text-piton-accent">Quality of Build</span> Guarantee
            </h2>
            <p className="text-zinc-400 text-sm mb-8">
              If we fail to deliver your tool on-spec, you get a full refund. No questions asked.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="space-y-3 inline-flex flex-col items-start text-left">
              {[
                'Unlimited revisions during development',
                '30 days free maintenance after launch',
                'Free staff onboarding and training',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-piton-accent/20 border border-piton-accent/40 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-piton-accent" />
                  </div>
                  <span className="text-sm text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── 6. FEATURED WORK ─────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#FDFDFD]">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-4">
              <p className="text-xs font-bold text-piton-accent uppercase tracking-widest font-mono mb-2">
                Featured Work
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold uppercase text-zinc-950">
                Internal tools we've built for service businesses
              </h2>
              <p className="text-zinc-500 text-sm mt-2">
                {projects.length}+ tools delivered across healthcare, agencies, and construction
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex justify-center mt-5 mb-10">
              <a
                href="/"
                className="px-5 py-2 border border-zinc-300 rounded-full text-sm font-bold text-zinc-700 hover:border-piton-accent hover:text-piton-accent transition-colors interactive"
              >
                Check Portfolio →
              </a>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <Reveal key={project.title} delay={i * 0.07} width="100%">
                <div
                  className={`bg-zinc-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group ${project.caseStudy ? 'cursor-pointer' : ''}`}
                  onClick={() => project.caseStudy && onProjectClick(project.caseStudy)}
                >
                  {/* Image */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    {project.caseStudy?.mainImage ? (
                      <img
                        src={project.caseStudy.mainImage}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                        <span className="text-zinc-600 text-sm font-mono">{project.title[0]}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <div className="flex gap-1 mb-1 flex-wrap">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-[9px] px-1.5 py-0.5 bg-white/10 border border-white/20 text-white font-mono uppercase tracking-wider">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-white font-bold text-sm">{project.title}</h3>
                    </div>
                  </div>

                  {/* Footer */}
                  {project.caseStudy && (
                    <div className="px-4 py-3 border-t border-zinc-800">
                      <button className="text-xs font-bold text-piton-accent flex items-center gap-1 interactive">
                        See Case Study <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. TESTIMONIALS ──────────────────────────────────── */}
      <section className="py-20 px-4 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest font-mono mb-2">Reviews</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold uppercase text-zinc-950">
                What founders <span className="text-piton-accent">are saying</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {siteTestimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08} width="100%">
                <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm flex flex-col h-full">
                  <div className="flex items-center gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star key={si} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-zinc-700 text-sm leading-relaxed flex-1">"{t.quote}"</p>
                  <div className="flex items-center gap-3 pt-5 mt-5 border-t border-zinc-100">
                    <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-white">{t.name[0]}</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-zinc-900">{t.name}</div>
                      <div className="text-xs text-zinc-400">{t.role} — {t.company}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FINAL CTA ─────────────────────────────────────── */}
      <section className="py-20 px-4 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,166,81,0.07),transparent_50%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase leading-tight mb-4">
              Ready to stop running your business on{' '}
              <span className="text-red-400">duct tape?</span>
            </h2>
            <p className="text-zinc-400 text-sm max-w-md mx-auto mb-10">
              Book a discovery call. We'll map the key workflows, confirm scope, and fix invoices. Fast
              quote, fixed timeline, zero risk.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={bookCall}
                className="px-7 py-3.5 bg-white text-zinc-950 hover:bg-zinc-100 rounded-full font-bold text-sm transition-colors inline-flex items-center gap-2 interactive"
              >
                Open Booking Page
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={whatsapp}
                className="px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold text-sm transition-colors inline-flex items-center gap-2 interactive"
              >
                <MessageSquare className="w-4 h-4" />
                Chat on WhatsApp
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <PortfolioFooter />
    </main>
  );
};

export default Offer;

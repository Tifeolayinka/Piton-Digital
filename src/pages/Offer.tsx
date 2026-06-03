import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileSpreadsheet,
  Database,
  AlertCircle,
  ArrowRight,
  Shield,
  Zap,
  Check,
  X,
  TrendingUp,
  DollarSign,
  Clock,
  Users,
  Settings,
  Layers,
  ChevronRight,
  Sparkles,
  MessageSquare,
  Lock,
  RefreshCw
} from 'lucide-react';
import Reveal from '../../components/Reveal';
import PortfolioFooter from '../../components/PortfolioFooter';
import { CaseStudyData } from '../../components/CaseStudyModal';

interface OfferProps {
  onProjectClick: (project: CaseStudyData) => void;
}

const Offer: React.FC<OfferProps> = ({ onProjectClick }) => {
  // Playground State
  const [isMigrated, setIsMigrated] = useState(false);
  const [hoveredCell, setHoveredCell] = useState<string | null>(null);

  // Calculator States
  const [employees, setEmployees] = useState(5);
  const [hoursPerWeek, setHoursPerWeek] = useState(8);
  const [hourlyRate, setHourlyRate] = useState(50);

  // Contact Form States
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedSheetType, setSelectedSheetType] = useState<string>('CRM / Pipelines');
  const [selectedPainPoint, setSelectedPainPoint] = useState<string>('Formula errors / broken sheets');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');

  // Calculations for Spreadsheet Tax
  const monthlyWastedHours = employees * hoursPerWeek * 4;
  const monthlyWastedLaborCost = monthlyWastedHours * hourlyRate;
  const yearlyWastedLaborCost = monthlyWastedLaborCost * 12;

  // Static Data
  const sheetTypes = [
    'CRM / Sales Pipelines',
    'Inventory / Order Management',
    'Billing / Invoicing Systems',
    'Employee Scheduling / HR',
    'Project Tracking & Client Portals',
    'Custom Operations / Other'
  ];

  const painPoints = [
    'Formula errors / broken sheets (#REF!, #VALUE!)',
    'Manual double data entry & copy-pasting',
    'No mobile responsiveness (hard to use on site/phone)',
    'No role-based permissions (anyone can delete anything)',
    'Lack of database/API connections'
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a production app, this would send data to an API
    setFormSubmitted(true);
  };

  const triggerWhatsApp = () => {
    const text = `Hi Tife, I checked out the Piton /offer page. My team is currently using spreadsheets for "${selectedSheetType}" and we are losing about ${hoursPerWeek} hours/week per person to manual work. The main issue we face is "${selectedPainPoint}". I'd like to talk about custom internal tools!`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/2348123456789?text=${encoded}`, '_blank'); // Mock phone number or dynamic direct contact
  };

  return (
    <main className="bg-[#FDFDFD] text-zinc-900 overflow-x-hidden antialiased">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-zinc-50 to-[#FDFDFD]">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,rgba(0,166,81,0.08),transparent_50%)] pointer-events-none z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
                <AlertCircle className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-red-600">The Spreadsheet Trap</span>
              </div>
            </Reveal>
            
            <Reveal delay={0.1}>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold uppercase tracking-tight leading-[1.05] text-zinc-950 mb-8">
                Stop running your operations on <span className="text-piton-accent underline decoration-wavy decoration-piton-accent/30 underline-offset-4">fragile spreadsheets</span>
              </h1>
            </Reveal>
            
            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl text-zinc-600 leading-relaxed font-sans max-w-2xl mx-auto mb-10">
                You're growing fast, but your daily workflows are held together by copy-paste duct tape and broken Excel formulas. We replace your chaotic spreadsheets with high-speed, secure, custom internal tools built to fit your business.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#migration-form"
                  className="w-full sm:w-auto px-8 py-4 bg-piton-black text-white rounded-full font-bold text-sm hover:bg-zinc-800 transition-colors shadow-lg shadow-black/10 flex items-center justify-center gap-2 group interactive"
                >
                  <span>Migrate My Spreadsheet</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#tax-calculator"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-800 border border-zinc-200 rounded-full font-bold text-sm hover:bg-zinc-50 transition-colors flex items-center justify-center gap-2 interactive"
                >
                  <span>Calculate Sheet Cost</span>
                  <span className="text-red-500 font-mono text-xs font-bold bg-red-50 px-2 py-0.5 rounded border border-red-100">Tax Calculator</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Interactive Comparison / Migration Playground */}
      <section className="py-20 bg-zinc-950 text-white relative overflow-hidden border-y border-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,166,81,0.06),transparent_40%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-piton-accent/15 border border-piton-accent/30">
                  <Sparkles className="w-3.5 h-3.5 text-piton-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-piton-accent">Visual Demo</span>
                </div>
              </Reveal>
              
              <Reveal delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight leading-snug">
                  From <span className="text-red-400">spreadsheet chaos</span> to a <span className="text-piton-accent">polished portal</span> in seconds
                </h2>
              </Reveal>
              
              <Reveal delay={0.2}>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  Interactive Playground: See how a messy, fragile operational sheet full of broken references, formatting quirks, and user mistakes is transformed into a secure, database-backed web dashboard.
                </p>
              </Reveal>

              <Reveal delay={0.3} width="100%">
                <button
                  onClick={() => setIsMigrated(!isMigrated)}
                  className="px-6 py-3.5 bg-piton-accent hover:bg-[#008c44] text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-piton-accent/15 flex items-center justify-center gap-3 w-full sm:w-auto interactive"
                >
                  <RefreshCw className={`w-4 h-4 ${!isMigrated ? 'animate-spin-slow' : ''}`} />
                  <span>{isMigrated ? "Reset to Spreadsheet View" : "Migrate Spreadsheet to Custom App"}</span>
                </button>
              </Reveal>
            </div>

            {/* Right Interactive Playground Widget */}
            <div className="lg:col-span-7 h-[420px] relative flex items-center justify-center">
              <AnimatePresence mode="wait">
                {!isMigrated ? (
                  /* ================= SPREADSHEET CARD ================= */
                  <motion.div
                    key="spreadsheet"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full bg-[#18181B] border border-zinc-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden flex flex-col font-mono text-xs select-none"
                  >
                    {/* Header Bar */}
                    <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-4 shrink-0">
                      <div className="flex items-center gap-2">
                        <FileSpreadsheet className="w-5 h-5 text-emerald-500" />
                        <span className="text-zinc-300 font-medium">Pipeline_Master_v4_FINAL_copy.xlsx</span>
                      </div>
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      </div>
                    </div>

                    {/* Alert Box */}
                    <div className="mb-4 bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-[11px] text-red-400 flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">Caution:</span> Formula in cell D3 broke due to manual value deletion by "David". Customer billings reporting error.
                      </div>
                    </div>

                    {/* Sheet Grid */}
                    <div className="flex-1 overflow-x-auto border border-zinc-800 rounded-lg bg-zinc-950">
                      <table className="w-full text-left border-collapse min-w-[500px]">
                        <thead>
                          <tr className="bg-zinc-900 border-b border-zinc-800 text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                            <th className="py-2 px-3 border-r border-zinc-800 text-center w-10"></th>
                            <th className="py-2 px-3 border-r border-zinc-800">A (Client)</th>
                            <th className="py-2 px-3 border-r border-zinc-800">B (Status)</th>
                            <th className="py-2 px-3 border-r border-zinc-800">C (Billings)</th>
                            <th className="py-2 px-3">D (Next Billing)</th>
                          </tr>
                        </thead>
                        <tbody className="text-zinc-400">
                          {/* Row 1 */}
                          <tr 
                            className={`border-b border-zinc-900 hover:bg-zinc-900/50 transition-colors ${hoveredCell === 'row1' ? 'bg-zinc-900/50' : ''}`}
                            onMouseEnter={() => setHoveredCell('row1')}
                            onMouseLeave={() => setHoveredCell(null)}
                          >
                            <td className="py-2.5 px-3 border-r border-zinc-800 bg-zinc-900 text-zinc-500 font-bold text-center">1</td>
                            <td className="py-2.5 px-3 border-r border-zinc-850 font-sans text-zinc-200">Acme Corp</td>
                            <td className="py-2.5 px-3 border-r border-zinc-850">
                              <span className="px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-500 text-[10px] border border-yellow-500/20">Pending</span>
                            </td>
                            <td className="py-2.5 px-3 border-r border-zinc-850 font-bold">$15,200</td>
                            <td className="py-2.5 px-3 font-semibold text-zinc-300">05/12/2026</td>
                          </tr>
                          
                          {/* Row 2 (BROKEN ROW) */}
                          <tr 
                            className={`border-b border-zinc-900 bg-red-950/10 hover:bg-red-950/20 transition-colors ${hoveredCell === 'row2' ? 'bg-red-950/25' : ''}`}
                            onMouseEnter={() => setHoveredCell('row2')}
                            onMouseLeave={() => setHoveredCell(null)}
                          >
                            <td className="py-2.5 px-3 border-r border-zinc-850 bg-zinc-900 text-zinc-500 font-bold text-center">2</td>
                            <td className="py-2.5 px-3 border-r border-zinc-850 font-sans text-zinc-200">Globex Inc</td>
                            <td className="py-2.5 px-3 border-r border-zinc-850 text-red-400 font-bold">#REF!</td>
                            <td className="py-2.5 px-3 border-r border-zinc-850 text-zinc-500">$0</td>
                            <td className="py-2.5 px-3 text-red-400 font-bold bg-red-500/5">ERROR: #VALUE!</td>
                          </tr>

                          {/* Row 3 */}
                          <tr 
                            className={`border-b border-zinc-900 hover:bg-zinc-900/50 transition-colors ${hoveredCell === 'row3' ? 'bg-zinc-900/50' : ''}`}
                            onMouseEnter={() => setHoveredCell('row3')}
                            onMouseLeave={() => setHoveredCell(null)}
                          >
                            <td className="py-2.5 px-3 border-r border-zinc-850 bg-zinc-900 text-zinc-500 font-bold text-center">3</td>
                            <td className="py-2.5 px-3 border-r border-zinc-850 font-sans text-zinc-200">Initech Systems</td>
                            <td className="py-2.5 px-3 border-r border-zinc-850">
                              <span className="px-2 py-0.5 rounded bg-zinc-500/10 text-zinc-400 text-[10px] border border-zinc-500/20">Inactive</span>
                            </td>
                            <td className="py-2.5 px-3 border-r border-zinc-850 text-red-400 font-bold">#VALUE!</td>
                            <td className="py-2.5 px-3 font-semibold text-zinc-300">04/01/2026</td>
                          </tr>

                          {/* Row 4 */}
                          <tr 
                            className={`hover:bg-zinc-900/50 transition-colors ${hoveredCell === 'row4' ? 'bg-zinc-900/50' : ''}`}
                            onMouseEnter={() => setHoveredCell('row4')}
                            onMouseLeave={() => setHoveredCell(null)}
                          >
                            <td className="py-2.5 px-3 border-r border-zinc-850 bg-zinc-900 text-zinc-500 font-bold text-center">4</td>
                            <td className="py-2.5 px-3 border-r border-zinc-850 font-sans text-zinc-200">Umbrella Corp</td>
                            <td className="py-2.5 px-3 border-r border-zinc-850">
                              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] border border-emerald-500/20">Active</span>
                            </td>
                            <td className="py-2.5 px-3 border-r border-zinc-850 font-bold text-zinc-200">$22,500</td>
                            <td className="py-2.5 px-3 font-semibold text-zinc-300">06/01/2026</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    
                    {/* Hover Cell Hint overlay */}
                    {hoveredCell === 'row2' && (
                      <div className="absolute bottom-4 right-4 bg-zinc-900 border border-zinc-850 p-2.5 rounded-lg text-[10px] text-zinc-300 max-w-[200px] shadow-lg animate-fade-in">
                        💡 <span className="font-bold text-red-400">Formula Broken:</span> Cell B2's VLOOKUP refers to a worksheet that was deleted. There's no audit trail or undo option!
                      </div>
                    )}
                  </motion.div>
                ) : (
                  /* ================= CUSTOM PORTAL CARD ================= */
                  <motion.div
                    key="portal"
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full bg-[#111111] border border-piton-accent/30 rounded-2xl p-6 shadow-2xl shadow-piton-accent/5 flex flex-col font-sans text-sm relative overflow-hidden"
                  >
                    {/* Background Green Glow */}
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-piton-accent/10 rounded-full blur-2xl" />

                    {/* Top Info Bar */}
                    <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6 shrink-0 relative z-10">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-piton-accent/10 border border-piton-accent/20 flex items-center justify-center">
                          <Database className="w-4 h-4 text-piton-accent" />
                        </div>
                        <div>
                          <span className="text-white font-display font-semibold block text-xs">Piton Operations Portal</span>
                          <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1 font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                            SECURE DATABASE CONNECTED
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-zinc-400 font-mono bg-zinc-900 border border-zinc-800 px-2 py-1 rounded flex items-center gap-1.5">
                          <Lock className="w-3 h-3 text-piton-accent" />
                          Role: Admin
                        </span>
                      </div>
                    </div>

                    {/* Dynamic Stats Row */}
                    <div className="grid grid-cols-3 gap-3 mb-6 shrink-0 relative z-10">
                      <div className="bg-zinc-900/50 border border-zinc-850 p-3 rounded-xl">
                        <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider block mb-1">Total Pipeline</span>
                        <span className="text-base font-bold text-white font-mono">$37,700</span>
                      </div>
                      <div className="bg-zinc-900/50 border border-zinc-850 p-3 rounded-xl">
                        <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider block mb-1">Active Accounts</span>
                        <span className="text-base font-bold text-white font-mono">3 / 4</span>
                      </div>
                      <div className="bg-zinc-900/50 border border-zinc-850 p-3 rounded-xl">
                        <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider block mb-1">Errors Resolved</span>
                        <span className="text-base font-bold text-emerald-400 font-mono flex items-center gap-1">
                          <Check className="w-4 h-4 shrink-0" />
                          100%
                        </span>
                      </div>
                    </div>

                    {/* Structured Grid */}
                    <div className="flex-1 bg-zinc-950/40 border border-zinc-850 rounded-xl overflow-hidden flex flex-col">
                      <div className="bg-zinc-900/50 px-4 py-2 border-b border-zinc-850 grid grid-cols-4 text-[9px] text-zinc-500 font-bold uppercase tracking-wider">
                        <div>Client</div>
                        <div className="text-center">Status</div>
                        <div className="text-right">Billings</div>
                        <div className="text-right">Next Billing</div>
                      </div>
                      
                      <div className="flex-1 overflow-y-auto divide-y divide-zinc-900 text-xs">
                        {/* Row 1 */}
                        <div className="px-4 py-2.5 grid grid-cols-4 items-center">
                          <div className="text-white font-medium">Acme Corp</div>
                          <div className="flex justify-center">
                            <span className="px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-500 text-[9px] border border-yellow-500/20 font-medium">Pending</span>
                          </div>
                          <div className="text-right font-mono text-zinc-300 font-semibold">$15,200</div>
                          <div className="text-right text-zinc-400 font-mono text-[10px]">05/12/2026</div>
                        </div>

                        {/* Row 2 (RESOLVED ROW!) */}
                        <div className="px-4 py-2.5 grid grid-cols-4 items-center bg-piton-accent/5">
                          <div className="text-white font-medium flex items-center gap-1">
                            Globex Inc
                            <Sparkles className="w-3 h-3 text-piton-accent shrink-0 animate-pulse" />
                          </div>
                          <div className="flex justify-center">
                            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] border border-emerald-500/20 font-medium">Active</span>
                          </div>
                          <div className="text-right font-mono text-zinc-300 font-semibold">$0</div>
                          <div className="text-right text-emerald-400 font-mono text-[10px] font-bold">AUTOMATED</div>
                        </div>

                        {/* Row 3 */}
                        <div className="px-4 py-2.5 grid grid-cols-4 items-center">
                          <div className="text-white font-medium">Initech Systems</div>
                          <div className="flex justify-center">
                            <span className="px-2 py-0.5 rounded-full bg-zinc-500/10 text-zinc-400 text-[9px] border border-zinc-500/20 font-medium">Inactive</span>
                          </div>
                          <div className="text-right font-mono text-zinc-300 font-semibold">$22,500</div>
                          <div className="text-right text-zinc-400 font-mono text-[10px]">04/01/2026</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The "Spreadsheet Tax" Cost Calculator */}
      <section id="tax-calculator" className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
                <DollarSign className="w-3.5 h-3.5 text-red-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-red-600 font-mono">Financial Impact</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight text-zinc-950">
                Calculate your <span className="text-red-500">Spreadsheet Tax</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-zinc-650 text-sm md:text-base mt-4 max-w-xl mx-auto">
                Spreadsheets aren't free. Calculate the hidden labor cost your business pays every single month to manage data entry friction and fix mistakes.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.3} width="100%">
            <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-6 md:p-10 shadow-xl shadow-zinc-100 flex flex-col md:flex-row gap-10 items-stretch">
              
              {/* Sliders Container */}
              <div className="flex-1 space-y-8 flex flex-col justify-center">
                {/* Slider 1: Team Members */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <label className="font-bold text-zinc-800 flex items-center gap-2">
                      <Users className="w-4 h-4 text-zinc-500" />
                      Team Members Using Sheets
                    </label>
                    <span className="font-mono font-bold text-piton-accent text-base bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">{employees} people</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={employees}
                    onChange={(e) => setEmployees(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-piton-accent"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400 font-mono">
                    <span>1 person</span>
                    <span>50 people</span>
                  </div>
                </div>

                {/* Slider 2: Hours spent */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <label className="font-bold text-zinc-800 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-zinc-500" />
                      Hours Spent / Person / Week
                    </label>
                    <span className="font-mono font-bold text-piton-accent text-base bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">{hoursPerWeek} hrs / wk</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="40"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-piton-accent"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400 font-mono">
                    <span>1 hour</span>
                    <span>40 hours</span>
                  </div>
                </div>

                {/* Slider 3: Hourly Salary */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <label className="font-bold text-zinc-800 flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-zinc-500" />
                      Avg. Hourly Team Salary
                    </label>
                    <span className="font-mono font-bold text-piton-accent text-base bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">${hourlyRate} / hr</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="250"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-piton-accent"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400 font-mono">
                    <span>$15/hr</span>
                    <span>$250/hr</span>
                  </div>
                </div>
              </div>

              {/* Math Dashboard Output */}
              <div className="w-full md:w-80 bg-zinc-950 text-white rounded-2xl p-6 md:p-8 flex flex-col justify-between border border-zinc-800 shadow-inner">
                <div className="space-y-6">
                  <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase block font-mono">Monthly Spreadsheet Tax</span>
                  
                  <div className="space-y-1">
                    <div className="text-4xl md:text-5xl font-mono font-extrabold text-red-400">
                      ${monthlyWastedLaborCost.toLocaleString()}
                    </div>
                    <span className="text-[11px] text-zinc-400 block font-mono">
                      or <strong className="text-white">${yearlyWastedLaborCost.toLocaleString()} / year</strong> in lost operational drag.
                    </span>
                  </div>

                  <div className="h-px bg-zinc-850" />

                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block font-mono">Hours Wasted Monthly</span>
                    <div className="text-2xl font-mono font-bold text-white flex items-center gap-1">
                      <Clock className="w-5 h-5 text-piton-accent" />
                      {monthlyWastedHours} hours
                    </div>
                    <span className="text-[11px] text-zinc-400 block">
                      spent doing manual imports, typing duplicate values, and hunting errors.
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="#migration-form"
                    className="w-full py-3 bg-piton-accent hover:bg-[#008c44] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors interactive shadow-lg shadow-piton-accent/15"
                  >
                    <span>Eliminate This Cost</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. "Spreadsheet Chaos vs. Piton System" Comparison Table */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-20 flex flex-col items-center">
            <Reveal>
              <span className="text-piton-secondary font-bold text-xs tracking-widest uppercase mb-4 block">Head-To-Head Comparison</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-zinc-950 uppercase max-w-2xl leading-tight">
                Spreadsheets are tools.<br />
                <span className="text-piton-accent">Piton is a system.</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Spreadsheet Column */}
            <Reveal delay={0.2} width="100%">
              <div className="bg-white border border-zinc-200 rounded-3xl p-8 relative overflow-hidden shadow-sm h-full flex flex-col">
                <div className="w-12 h-12 bg-red-50 rounded-xl border border-red-100 flex items-center justify-center mb-6 shadow-sm">
                  <FileSpreadsheet className="w-6 h-6 text-red-500" />
                </div>

                <h3 className="text-lg font-bold text-zinc-950 uppercase mb-6 flex items-center gap-2">
                  <span>Fragile Spreadsheets</span>
                  <span className="text-[10px] bg-red-50 text-red-500 font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-red-100">Fragile</span>
                </h3>

                <div className="space-y-6 flex-1 text-sm text-zinc-650">
                  <div className="space-y-2 border-b border-zinc-100 pb-5">
                    <h4 className="font-bold text-zinc-900 flex items-center gap-2">
                      <X className="w-4 h-4 text-red-500 shrink-0" />
                      Who broke the VLOOKUP?
                    </h4>
                    <p className="leading-relaxed">
                      Anyone with file access can accidentally delete a formula, rename a column tab, or overwrite cells. Data has zero security layers and zero user roles.
                    </p>
                  </div>
                  
                  <div className="space-y-2 border-b border-zinc-100 pb-5">
                    <h4 className="font-bold text-zinc-900 flex items-center gap-2">
                      <X className="w-4 h-4 text-red-500 shrink-0" />
                      Double Data Entry
                    </h4>
                    <p className="leading-relaxed">
                      Your team spends hours copy-pasting customer details from emails to Stripe, and from Stripe to Excel. Disconnected tools cause major delays and errors.
                    </p>
                  </div>

                  <div className="space-y-2 pb-2">
                    <h4 className="font-bold text-zinc-900 flex items-center gap-2">
                      <X className="w-4 h-4 text-red-500 shrink-0" />
                      The Mobile Nightmare
                    </h4>
                    <p className="leading-relaxed">
                      Pinching, zooming, and scrolling sideways on small mobile screens to check rows or type parameters in grid lines. An operational bottleneck for field staff.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Piton System Column */}
            <Reveal delay={0.3} width="100%">
              <div className="bg-zinc-950 text-white border border-zinc-800 rounded-3xl p-8 relative overflow-hidden shadow-2xl h-full flex flex-col">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-piton-accent/10 rounded-full blur-xl" />
                
                <div className="w-12 h-12 bg-piton-accent/10 rounded-xl border border-piton-accent/20 flex items-center justify-center mb-6 shadow-sm">
                  <Sparkles className="w-6 h-6 text-piton-accent" />
                </div>

                <h3 className="text-lg font-bold text-white uppercase mb-6 flex items-center gap-2">
                  <span>Custom Piton Portal</span>
                  <span className="text-[10px] bg-piton-accent/15 text-piton-accent font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-piton-accent/30">Elevated</span>
                </h3>

                <div className="space-y-6 flex-1 text-sm text-zinc-400">
                  <div className="space-y-2 border-b border-zinc-850 pb-5">
                    <h4 className="font-bold text-white flex items-center gap-2">
                      <Check className="w-4 h-4 text-piton-accent shrink-0" />
                      Role-Based Security
                    </h4>
                    <p className="leading-relaxed">
                      Formulas are locked inside application logic. Logins are customized. David only sees his sales pipelines, managers can verify payouts, and admins control configs.
                    </p>
                  </div>
                  
                  <div className="space-y-2 border-b border-zinc-850 pb-5">
                    <h4 className="font-bold text-white flex items-center gap-2">
                      <Check className="w-4 h-4 text-piton-accent shrink-0" />
                      API-First Integrations
                    </h4>
                    <p className="leading-relaxed">
                      We connect your systems directly. A sale in Stripe automatically fires webhooks that update your customer records, alert Slack, and trigger auto-invoicing.
                    </p>
                  </div>

                  <div className="space-y-2 pb-2">
                    <h4 className="font-bold text-white flex items-center gap-2">
                      <Check className="w-4 h-4 text-piton-accent shrink-0" />
                      Sleek Responsive Layouts
                    </h4>
                    <p className="leading-relaxed">
                      Custom, high-fidelity responsive screens designed exactly for desktop, iPad, or mobile viewport sizes. Field staff can log data instantly with clean buttons.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Success Cases (Dojohub CRM & Oqool Core HR) */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 flex flex-col items-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">Proven Results</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-zinc-950 uppercase max-w-2xl leading-tight">
                Case studies: Replacing manual chaos
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Case Study 1: DojoHub CRM */}
            <Reveal delay={0.2} width="100%">
              <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between h-full group hover:border-zinc-300 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-bold tracking-widest font-mono text-zinc-450 uppercase">Martial Arts Platform</span>
                    <span className="px-3 py-1 rounded-full bg-piton-accent/10 border border-piton-accent/20 text-piton-accent text-xs font-bold font-mono">Replacing Sheets</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-display font-bold text-zinc-900 uppercase mb-4">
                    Dojohub CRM
                  </h3>
                  
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                    Martial arts schools spent excessive hours manual-tracking schedules, check-ins, and student belt promotions in fragmented, fragile spreadsheet tabs.
                  </p>

                  <div className="bg-white border border-zinc-150 rounded-2xl p-4.5 mb-6 shadow-sm">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-2 font-mono">Quote From DojoHub Founder:</span>
                    <p className="text-zinc-700 italic text-[13px] leading-relaxed">
                      "This saved us. We were drowning in spreadsheets. Now I can grade students, collect recurring payments, and track attendance all from one dashboard."
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 border-t border-zinc-200 pt-6">
                  <div>
                    <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider block font-mono mb-0.5">Admin Workload</span>
                    <span className="text-xl font-bold font-mono text-emerald-600">-70%</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider block font-mono mb-0.5">Build Timeline</span>
                    <span className="text-xl font-bold font-mono text-zinc-800">3 Months</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider block font-mono mb-0.5">Friction Resolved</span>
                    <span className="text-xl font-bold font-mono text-zinc-850">100%</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Case Study 2: Oqool Core HR */}
            <Reveal delay={0.3} width="100%">
              <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between h-full group hover:border-zinc-300 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-bold tracking-widest font-mono text-zinc-450 uppercase">HR & Payroll Platform</span>
                    <span className="px-3 py-1 rounded-full bg-piton-accent/10 border border-piton-accent/20 text-piton-accent text-xs font-bold font-mono">Replacing Sheets</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-display font-bold text-zinc-900 uppercase mb-4">
                    Oqool Core HR
                  </h3>
                  
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                    Growing companies were manual-logging working hours, attendance policies, late penalties, and payroll calculations inside unstable Excel workbooks.
                  </p>

                  <div className="bg-white border border-zinc-150 rounded-2xl p-4.5 mb-6 shadow-sm">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-2 font-mono">Quote From Operations Lead:</span>
                    <p className="text-zinc-700 italic text-[13px] leading-relaxed">
                      "Oqool gave us structure and clarity. Approvals, payroll rules, and employee attendance metrics finally calculate automatically without manual errors."
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 border-t border-zinc-200 pt-6">
                  <div>
                    <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider block font-mono mb-0.5">Manual HR Tasks</span>
                    <span className="text-xl font-bold font-mono text-emerald-600">-70%</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider block font-mono mb-0.5">Approval Error</span>
                    <span className="text-xl font-bold font-mono text-zinc-800">0%</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider block font-mono mb-0.5">Payroll Runs</span>
                    <span className="text-xl font-bold font-mono text-zinc-850">Automated</span>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 6. The Sheet Audit & Action Call - Customized Lead Form */}
      <section id="migration-form" className="py-24 bg-zinc-950 text-white relative border-t border-zinc-800 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,166,81,0.05),transparent_40%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-piton-accent/15 border border-piton-accent/30 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-piton-accent" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-piton-accent">Get Started</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tight">
                Request a <span className="text-piton-accent">Free Spreadsheet Audit</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-zinc-400 text-sm md:text-base mt-4 max-w-xl mx-auto">
                Send us a description or sample of your current spreadsheets. We'll map your data structure and provide a high-fidelity workflow blueprint showing how a custom tool would streamline it.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.3} width="100%">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl relative">
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form
                    key="lead-form"
                    onSubmit={handleFormSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 block font-mono">Your Name</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. David Alao"
                          className="w-full px-4 py-3.5 bg-zinc-950 border border-zinc-800 rounded-xl focus:border-piton-accent focus:outline-none transition-colors text-sm text-white"
                        />
                      </div>
                      
                      {/* Email input */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 block font-mono">Business Email</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="david@company.com"
                          className="w-full px-4 py-3.5 bg-zinc-950 border border-zinc-800 rounded-xl focus:border-piton-accent focus:outline-none transition-colors text-sm text-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Spreadsheet Category Select */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 block font-mono">What Spreadsheet Are You Replacing?</label>
                        <select
                          value={selectedSheetType}
                          onChange={(e) => setSelectedSheetType(e.target.value)}
                          className="w-full px-4 py-3.5 bg-zinc-950 border border-zinc-800 rounded-xl focus:border-piton-accent focus:outline-none transition-colors text-sm text-zinc-300"
                        >
                          {sheetTypes.map((type) => (
                            <option key={type} value={type} className="bg-zinc-900 text-white">
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Main Pain Point Select */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 block font-mono">What is your biggest frustration?</label>
                        <select
                          value={selectedPainPoint}
                          onChange={(e) => setSelectedPainPoint(e.target.value)}
                          className="w-full px-4 py-3.5 bg-zinc-950 border border-zinc-800 rounded-xl focus:border-piton-accent focus:outline-none transition-colors text-sm text-zinc-300"
                        >
                          {painPoints.map((pain) => (
                            <option key={pain} value={pain} className="bg-zinc-900 text-white">
                              {pain}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Operational Details */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 block font-mono">Tell us about your spreadsheet workflow (Optional)</label>
                      <textarea
                        rows={4}
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        placeholder="Briefly describe what your sheets track and who updates them. This helps us provide a better audit."
                        className="w-full px-4 py-3.5 bg-zinc-950 border border-zinc-800 rounded-xl focus:border-piton-accent focus:outline-none transition-colors text-sm text-white resize-none"
                      />
                    </div>

                    {/* CTA Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <button
                        type="submit"
                        className="flex-1 py-4 bg-white text-zinc-950 hover:bg-zinc-100 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2 interactive"
                      >
                        <Sparkles className="w-4 h-4 text-piton-accent shrink-0" />
                        <span>Submit Spreadsheet Audit Request</span>
                      </button>
                      
                      <button
                        type="button"
                        onClick={triggerWhatsApp}
                        className="w-full sm:w-auto px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2 interactive"
                      >
                        <MessageSquare className="w-4 h-4 shrink-0" />
                        <span>Chat via WhatsApp</span>
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-screen"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 space-y-6"
                  >
                    <div className="w-16 h-16 bg-piton-accent/10 border border-piton-accent/20 rounded-full flex items-center justify-center mx-auto shadow-md">
                      <Check className="w-8 h-8 text-piton-accent" />
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-2xl font-display font-bold text-white uppercase">Thank you, {name}!</h3>
                      <p className="text-zinc-450 text-sm max-w-md mx-auto leading-relaxed">
                        We have received your request for a spreadsheet audit of your <strong>{selectedSheetType}</strong> workflow. We are already mapping out a solution and will reach out to you within 24 hours.
                      </p>
                    </div>

                    <div className="pt-6">
                      <button
                        onClick={triggerWhatsApp}
                        className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold text-sm transition-transform hover:scale-105 flex items-center justify-center gap-2 mx-auto interactive shadow-lg shadow-emerald-600/10"
                      >
                        <MessageSquare className="w-4.5 h-4.5" />
                        <span>Fast-Track & Talk on WhatsApp Now</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer component */}
      <PortfolioFooter />
    </main>
  );
};

export default Offer;

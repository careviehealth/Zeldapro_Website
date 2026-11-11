import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HeartPulse,
  ShieldCheck,
  FileText,
  Pill,
  Users,
  Sparkles,
  Smartphone,
  Lock,
  CheckCircle2,
  ArrowRight,
  Share2,
  ExternalLink,
  ChevronRight,
  EyeOff,
  Activity,
  Building2,
  FileCheck,
  Check,
  Copy,
} from 'lucide-react';
import { Footer } from '../Components/Footer';

export default function CarevieProduct() {
  const [activeTab, setActiveTab] = useState('vault');
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyShareLink = () => {
    navigator.clipboard.writeText('https://carevie.in/share/demo-token-98f2');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-teal-600 selection:text-white flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#062c28] via-[#0b3d37] to-[#0f172a] text-white pt-12 pb-20 border-b border-teal-500/20">
        {/* Subtle background glow effect */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 left-1/3 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-6 sm:px-10 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-mono text-teal-200/60 mb-6">
            <Link to="/" className="hover:text-teal-300 transition-colors">
              HOME
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-teal-400/40" />
            <span className="text-teal-200/60">PRODUCTS & PLATFORMS</span>
            <ChevronRight className="w-3.5 h-3.5 text-teal-400/40" />
            <span className="text-teal-300 font-semibold">CAREVIE</span>
          </nav>

          {/* Product Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider font-medium bg-teal-500/20 border border-teal-400/30 text-teal-200 mb-6 backdrop-blur-md">
            <HeartPulse className="w-4 h-4 text-teal-400 animate-pulse" />
            <span>FLAGSHIP HEALTHCARE PRODUCT OF ZELDAPRO CONSULTANCY</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading & Description */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-[1.1]">
                Carevie{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-200 to-teal-400">
                  Health Vault
                </span>
                <br />
                <span className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-300">
                  Intelligent Personal Health Management
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Developed, engineered, and operated by{' '}
                <strong className="text-white font-semibold">
                  Zeldapro Consultancy Private Limited
                </strong>
                , Carevie is a next-generation personal health record (PHR) platform. It empowers
                patients and families to vault diagnostic reports, automate medication logs with AI,
                coordinate family care, and share records with doctors securely in seconds.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://carevie.in"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-white shadow-lg shadow-teal-950/40 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <span>Visit Carevie Platform</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-md transition-colors cursor-pointer"
                >
                  <span>Enterprise Health Inquiries</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/privacy-policy"
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-xs font-mono text-teal-200/80 hover:text-white transition-colors"
                >
                  <ShieldCheck className="w-4 h-4 text-teal-400" />
                  <span>View Privacy Protocol</span>
                </Link>
              </div>

              {/* Key Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>AES-256 Encrypted Vault</span>
                </div>
                <div className="flex items-center gap-2">
                  <EyeOff className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero Ads / No Data Selling</span>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>iOS & Android Ready</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive App Interface Mockup */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm sm:max-w-md bg-slate-900/90 border border-teal-500/30 rounded-3xl p-5 shadow-2xl backdrop-blur-xl">
                {/* Phone Notch / Top Bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-white font-medium">CAREVIE VAULT</span>
                  </div>
                  <span className="text-teal-300">SECURE SESSION</span>
                </div>

                {/* Patient Emergency Card Preview */}
                <div className="bg-gradient-to-r from-teal-900/60 to-slate-900/80 border border-teal-500/40 rounded-2xl p-4 mb-4 shadow-inner">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-teal-300 uppercase tracking-wider block">
                        EMERGENCY HEALTH PROFILE
                      </span>
                      <h3 className="text-white font-display font-bold text-base mt-0.5">
                        Patient Health ID
                      </h3>
                      <p className="text-slate-400 text-xs mt-0.5">CareCircle Primary Vault</p>
                    </div>
                    <div className="bg-rose-500/20 border border-rose-400/40 px-2.5 py-1 rounded-lg text-rose-300 font-mono font-bold text-xs">
                      Blood: O+
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-teal-500/20 text-[11px] font-mono">
                    <div>
                      <span className="text-slate-400 block text-[9px]">ALLERGIES</span>
                      <span className="text-emerald-300">Penicillin (Nil Reported)</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[9px]">EMERGENCY CONTACT</span>
                      <span className="text-slate-200">+91 98XXX XXXXX</span>
                    </div>
                  </div>
                </div>

                {/* Recent Medical Vault Documents */}
                <div className="space-y-2.5 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    Recent Vaulted Documents
                  </span>

                  {/* Doc 1 */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:border-teal-500/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-300 shrink-0">
                        <FileCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-white text-xs font-semibold">Comprehensive Metabolic Panel</h4>
                        <span className="text-slate-400 text-[10px] font-mono">
                          Diagnostic Lab • Verified
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                      AI Summarized
                    </span>
                  </div>

                  {/* Doc 2 */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:border-teal-500/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-300 shrink-0">
                        <Pill className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-white text-xs font-semibold">Cardiology Rx & Treatment</h4>
                        <span className="text-slate-400 text-[10px] font-mono">
                          2 Active Medications Logged
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-blue-400 bg-blue-950/60 border border-blue-500/30 px-2 py-0.5 rounded">
                      OCR Parsed
                    </span>
                  </div>
                </div>

                {/* Live Share Token Demo */}
                <div className="p-3 bg-teal-950/40 border border-teal-500/30 rounded-xl flex items-center justify-between text-xs">
                  <div className="truncate mr-2">
                    <span className="text-teal-400 font-mono text-[10px] block">
                      CLINICAL SHARE LINK (EXPIRES 24H)
                    </span>
                    <span className="text-slate-300 font-mono text-[11px] truncate">
                      carevie.in/share/demo-token
                    </span>
                  </div>
                  <button
                    onClick={handleCopyShareLink}
                    className="shrink-0 p-2 rounded-lg bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 transition-colors cursor-pointer"
                    title="Copy sample token"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Platform Pillars Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs font-semibold tracking-wider uppercase text-teal-600 block mb-2">
              COMPREHENSIVE CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
              Engineered for Clinical Precision & Patient Sovereignty
            </h2>
            <p className="text-slate-600 leading-relaxed text-base">
              Carevie reconciles fragmented healthcare paper trails into a single, encrypted,
              searchable timeline accessible at the bedside, during travel, or in clinical consults.
            </p>
          </div>

          {/* Interactive Feature Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {[
              { id: 'vault', label: 'Encrypted Vault', icon: Lock },
              { id: 'ai-ocr', label: 'AI Prescription OCR', icon: Sparkles },
              { id: 'carecircle', label: 'Family CareCircle', icon: Users },
              { id: 'share', label: 'Doctor Clinical Links', icon: Share2 },
              { id: 'emergency', label: 'Emergency Health Card', icon: HeartPulse },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${activeTab === tab.id
                      ? 'bg-teal-600 text-white shadow-md shadow-teal-700/20 scale-105'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
            {activeTab === 'vault' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-100 border border-teal-200 flex items-center justify-center text-teal-700">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
                    Zero-Knowledge Encrypted Health Vault
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Store lifelong health history including blood work, pathology biopsies, MRI/CT
                    scans, surgical discharge summaries, and medical invoices. Every file is
                    encrypted at rest with AES-256 and stored in dedicated patient buckets.
                  </p>
                  <ul className="space-y-2 pt-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>Instant camera capture of physical paperwork and multi-page PDFs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>Filter by treating physician, diagnostic clinic, category, and date</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>Zero data scraping: medical documents are never read by ad systems</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                  <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                    Vault Categorization Architecture
                  </span>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                      <FileText className="w-4 h-4 text-teal-600 mb-1" />
                      <strong className="block text-slate-900">Lab Diagnostic Tests</strong>
                      <span className="text-slate-500">Blood panels, hormones, lipid profiles</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                      <Activity className="w-4 h-4 text-blue-600 mb-1" />
                      <strong className="block text-slate-900">Imaging & Radiology</strong>
                      <span className="text-slate-500">X-Rays, Ultrasounds, MRI, CT scans</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                      <Pill className="w-4 h-4 text-purple-600 mb-1" />
                      <strong className="block text-slate-900">Doctor Prescriptions</strong>
                      <span className="text-slate-500">Active dosages, refills, clinical advice</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                      <Building2 className="w-4 h-4 text-emerald-600 mb-1" />
                      <strong className="block text-slate-900">Hospital Discharge</strong>
                      <span className="text-slate-500">Surgical summaries, IPD bills, insurance</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'ai-ocr' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
                    AI Prescription OCR & Plain-Language Explanations
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Doctor handwriting is notoriously difficult to parse. Carevie leverages vision
                    LLMs (Google Gemini & OpenAI) via stateless, encrypted APIs to extract drug
                    names, intake frequencies (morning/afternoon/night), and course durations.
                  </p>
                  <ul className="space-y-2 pt-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                      <span>Auto-populates active medication schedules from prescription photos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                      <span>Translates complex clinical terminology and abnormal flag metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                      <span>Enterprise privacy guarantee: data is not used to train AI models</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-xs font-mono font-semibold text-purple-700 uppercase">
                      AI OCR Extracted Log
                    </span>
                    <span className="text-[11px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      Confidence 98.4%
                    </span>
                  </div>
                  <div className="space-y-2.5 text-xs">
                    <div className="p-3 rounded-xl bg-purple-50/60 border border-purple-100 flex items-center justify-between">
                      <div>
                        <strong className="text-slate-900 block font-sans text-sm">
                          Metformin 500mg
                        </strong>
                        <span className="text-slate-500">Twice daily after meals • 30 Days</span>
                      </div>
                      <span className="font-mono text-purple-700 bg-white px-2 py-1 rounded border border-purple-200">
                        1 - 0 - 1
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-purple-50/60 border border-purple-100 flex items-center justify-between">
                      <div>
                        <strong className="text-slate-900 block font-sans text-sm">
                          Atorvastatin 10mg
                        </strong>
                        <span className="text-slate-500">Once daily at bedtime • 60 Days</span>
                      </div>
                      <span className="font-mono text-purple-700 bg-white px-2 py-1 rounded border border-purple-200">
                        0 - 0 - 1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'carecircle' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
                    Family CareCircle & Minor Child Profiles
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Healthcare is collaborative. CareCircle allows you to manage health records for
                    dependent elderly parents or minor children from a single master account, with
                    instant sharing among siblings or authorized guardians.
                  </p>
                  <ul className="space-y-2 pt-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>Dedicated Child Profiles under parental guardian supervision</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>Role-based viewing: decide exactly which reports each member can see</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>Instant one-tap permission revocation at any time</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                  <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                    Connected Family Network
                  </span>
                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
                          M
                        </div>
                        <div>
                          <strong className="block text-slate-900">Mother (Elder Profile)</strong>
                          <span className="text-slate-500">Chronic Care & Vitals Vault</span>
                        </div>
                      </div>
                      <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-mono text-[10px]">
                        Full Access
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center text-xs">
                          C
                        </div>
                        <div>
                          <strong className="block text-slate-900">Child (Minor Profile)</strong>
                          <span className="text-slate-500">Immunization & Pediatric Log</span>
                        </div>
                      </div>
                      <span className="text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded font-mono text-[10px]">
                        Parental Supervised
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'share' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700">
                    <Share2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
                    Tokenized Clinical Share Links for Doctors
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Treating doctors and hospital receptionists shouldn’t need to download an app or
                    create an account to review your medical reports. Carevie enables you to generate
                    time-limited, expiring clinical links with instant revocation.
                  </p>
                  <ul className="space-y-2 pt-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Configurable expiration (e.g. 1 hour, 24 hours, 7 days)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Access audit log: see exactly when and where your link was opened</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Instantly revoke access with a single button if needed</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                  <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                    Share Link Management Console
                  </span>
                  <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200 text-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-emerald-900">Active Doctor Link</span>
                      <span className="font-mono text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-200">
                        Expires in 18 hrs
                      </span>
                    </div>
                    <p className="text-slate-600 text-[11px]">
                      Target: Dr. Sharma (Consultant Cardiologist) • Includes 3 Selected ECG Reports
                    </p>
                    <button className="w-full py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-medium text-xs transition-colors cursor-pointer">
                      Revoke Link Immediately
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'emergency' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-rose-100 border border-rose-200 flex items-center justify-center text-rose-700">
                    <HeartPulse className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
                    Verified Emergency Health Card & Quick Retrieval
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    In emergency medical situations, every minute counts. Carevie provides a verified
                    Emergency Health Card displaying declared blood group backed by uploaded lab
                    verification, critical drug allergies, and emergency phone numbers.
                  </p>
                  <ul className="space-y-2 pt-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <span>Verified blood group documentation upload for clinical validation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <span>Quick-tap call for emergency family contacts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <span>Lock screen or widget ready for immediate clinical triage</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-slate-900 to-rose-950 p-6 rounded-2xl border border-rose-500/30 text-white shadow-xl space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="font-mono text-xs text-rose-400 font-bold uppercase tracking-wider">
                      Carevie Emergency Medical Card
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">ID: CRV-9802</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                    <div>
                      <span className="text-slate-400 block text-[10px]">BLOOD GROUP</span>
                      <strong className="text-rose-400 text-lg font-bold">O+ POSITIVE</strong>
                      <span className="text-[9px] text-emerald-400 block">✓ Report Verified</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">ALLERGIC REACTIONS</span>
                      <strong className="text-white text-sm">Penicillin, Sulfa</strong>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono">
                    <span className="text-slate-400 block text-[9px]">EMERGENCY NOMINEE</span>
                    <span className="text-slate-200">Aditi Sharma (Spouse) • +91 98200 XXXXX</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. Engineering & Security Architecture */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-xs font-semibold tracking-wider uppercase text-teal-400 block">
                ZELDAPRO ENGINEERING SPECIFICATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                Built to Bank-Grade Data Security Standards
              </h2>
              <p className="text-slate-300 leading-relaxed text-base">
                As an enterprise engineering and artificial intelligence consultancy,{' '}
                <strong>Zeldapro Consultancy Private Limited</strong> applies strict cybersecurity
                protocols to Carevie. Patient data is isolated, protected against leaks, and stored
                with forward secrecy.
              </p>

              <div className="space-y-4 pt-2 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">AES-256 Storage & TLS 1.3 Transport</strong>
                    <span className="text-slate-400 text-xs">
                      Every packet across client apps, web portals, and microservices is encrypted.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <EyeOff className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">Zero Advertising Surveillance</strong>
                    <span className="text-slate-400 text-xs">
                      We never deploy tracking pixels, third-party data brokers, or IDFA analytics.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">Apple Secure Enclave Biometrics</strong>
                    <span className="text-slate-400 text-xs">
                      Face ID and Touch ID authentication stay strictly on-device; credentials never leave your iPhone.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 sm:p-8 space-y-6">
                <h3 className="font-display font-bold text-xl text-white">
                  Technical Architecture Overview
                </h3>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                    <span className="text-slate-400">Core Cloud Compute:</span>
                    <span className="text-teal-300 font-semibold">DigitalOcean Isolated Cluster</span>
                  </div>
                  <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                    <span className="text-slate-400">Database & Vault Storage:</span>
                    <span className="text-teal-300 font-semibold">Supabase Postgres + Encrypted S3</span>
                  </div>
                  <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                    <span className="text-slate-400">Rate Limiting & Security:</span>
                    <span className="text-teal-300 font-semibold">Upstash Distributed Redis</span>
                  </div>
                  <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                    <span className="text-slate-400">Mobile Authentication:</span>
                    <span className="text-teal-300 font-semibold">Cryptographic OTP via 2Factor</span>
                  </div>
                  <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                    <span className="text-slate-400">Statutory Privacy Compliance:</span>
                    <span className="text-emerald-400 font-semibold">India DPDP Act 2023 & SPDI Rules</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Banner Section */}
      <section className="py-16 bg-gradient-to-r from-teal-700 via-emerald-800 to-slate-900 text-white">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10 text-center space-y-6">
          <span className="font-mono text-xs tracking-wider uppercase text-teal-200">
            START YOUR HEALTH JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white max-w-2xl mx-auto">
            Experience the Future of Personal Medical Data Organization
          </h2>
          <p className="text-slate-200 text-base max-w-xl mx-auto">
            Carevie is available on web and mobile. Discover how easy it is to organize lifetime
            medical records in one secure place.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="https://carevie.in"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-white text-slate-900 hover:bg-slate-100 shadow-xl transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>Visit carevie.in</span>
              <ExternalLink className="w-4 h-4 text-teal-700" />
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors cursor-pointer"
            >
              <span>Connect with Zeldapro</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
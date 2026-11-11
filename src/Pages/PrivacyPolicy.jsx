import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Lock,
  Smartphone,
  Trash2,
  EyeOff,
  HeartPulse,
  Bot,
  Share2,
  UserCheck,
  Server,
  AlertTriangle,
  Mail,
  Building,
  CheckCircle2,
  Copy,
  Check,
  Printer,
  ChevronRight,
  ArrowUp,
  Search,
} from 'lucide-react';
import { Footer } from '../Components/Footer';

// Legal and corporate metadata
const LEGAL_CONFIG = {
  companyName: 'Zeldapro Consultancy Private Limited',
  shortCompanyName: 'Zeldapro',
  flagshipProduct: 'Carevie',
  productDomain: 'carevie.in',
  corporateDomain: 'zeldapro.com',
  corporateWebsite: 'https://zeldapro.com',
  corporateEmail: 'connect@zeldapro.ai',
  supportEmail: 'support@carevie.in',
  privacyEmail: 'privacy@carevie.in',
  grievanceEmail: 'grievance@zeldapro.com',
  grievanceOfficer: 'Designated Grievance Officer, Zeldapro Consultancy Private Limited',
  registeredAddress:
    '1st FLR/102, C-38-39, PARINEE CRESCENZO, Bandra(East), Mumbai, Mumbai- 400051, Maharashtra',
  effectiveDate: 'May 26, 2026',
  lastUpdated: 'November 11, 2026',
  version: '2.4.0',
  jurisdiction: 'Mumbai, Maharashtra, India',
};

// Section navigation structure
const SECTIONS = [
  { id: 'overview', title: '1. Executive Overview & Scope' },
  { id: 'entity', title: '2. Corporate Identity & Data Fiduciary' },
  { id: 'carevie-product', title: '3. Carevie Healthcare Product Details' },
  { id: 'definitions', title: '4. Key Legal & Technical Definitions' },
  { id: 'information-collected', title: '5. Information We Collect' },
  { id: 'apple-permissions', title: '6. Apple iOS & Mobile Device Permissions' },
  { id: 'collection-methods', title: '7. How We Collect Your Data' },
  { id: 'purposes-processing', title: '8. Lawful Basis & Purposes of Processing' },
  { id: 'ai-processing', title: '9. AI Processing & Third-Party LLM Services' },
  { id: 'data-sharing', title: '10. Data Sharing, Disclosures & Sub-Processors' },
  { id: 'carecircle-sharing', title: '11. CareCircle & Secure Share Links' },
  { id: 'child-privacy', title: '12. Child Profiles & Protection of Minors' },
  { id: 'cross-border', title: '13. Cross-Border Data Storage & Transfers' },
  { id: 'security-measures', title: '14. Security Safeguards & Encryption' },
  { id: 'retention-deletion', title: '15. Data Retention & Account Deletion' },
  { id: 'user-rights', title: '16. Data Principal Rights (DPDP Act & Apple)' },
  { id: 'cookies-tracking', title: '17. Cookies & Tracking Technologies' },
  { id: 'grievance-redressal', title: '18. Grievance Redressal Mechanism' },
  { id: 'policy-updates', title: '19. Updates to this Privacy Policy' },
  { id: 'contact-us', title: '20. Official Corporate Contact Details' },
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedEmail, setCopiedEmail] = useState('');
  const sectionRefs = useRef({});

  // Active section tracking on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = SECTIONS[i];
        const element = sectionRefs.current[section.id];
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = sectionRefs.current[id];
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(label);
    setTimeout(() => setCopiedEmail(''), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const filteredSections = SECTIONS.filter((s) =>
    s.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white flex flex-col">
      {/* Top Header / Breadcrumb Hero */}
      <section className="bg-gradient-to-b from-[#0B1220] via-[#0F172A] to-[#1E293B] text-white pt-12 pb-14 border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
            <Link to="/" className="hover:text-blue-400 transition-colors">
              HOME
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-slate-400">LEGAL COMPLIANCE</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-blue-400 font-semibold">PRIVACY POLICY</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white mb-4">
            Privacy Policy & Health Data Protection Protocol
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed mb-8">
            Governing the personal, technical, and health data processing practices of{' '}
            <strong className="text-white font-semibold">{LEGAL_CONFIG.companyName}</strong>,
            its corporate digital infrastructure, and its flagship digital health platform and
            mobile application suite, <strong className="text-white font-semibold">{LEGAL_CONFIG.flagshipProduct}</strong>.
          </p>

          {/* Quick Meta Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-xs font-mono text-slate-400">
            <div>
              <span className="block text-slate-500 text-[10px] uppercase">Legal Entity</span>
              <span className="text-white font-medium">{LEGAL_CONFIG.companyName}</span>
            </div>
            <div>
              <span className="block text-slate-500 text-[10px] uppercase">Product Covered</span>
              <span className="text-blue-400 font-medium">Carevie Health Platform</span>
            </div>
            <div>
              <span className="block text-slate-500 text-[10px] uppercase">Last Updated</span>
              <span className="text-slate-200">{LEGAL_CONFIG.lastUpdated}</span>
            </div>
            <div>
              <span className="block text-slate-500 text-[10px] uppercase">Jurisdiction</span>
              <span className="text-slate-200">{LEGAL_CONFIG.jurisdiction}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Apple App Store & Trust Highlights Cards */}
      <section className="relative -mt-6 z-10 max-w-[1240px] mx-auto px-6 sm:px-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-3">
              <EyeOff className="w-5 h-5" />
            </div>
            <h3 className="font-display font-semibold text-sm text-slate-900 mb-1">
              Zero Data Monetization
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We never sell, rent, or trade your personal or health data. We do not use health data
              for third-party advertising or cross-app tracking.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-3">
              <HeartPulse className="w-5 h-5" />
            </div>
            <h3 className="font-display font-semibold text-sm text-slate-900 mb-1">
              Carevie Health Vault
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Medical records, lab tests, and prescriptions are stored with zero third-party access,
              available strictly to you and your authorized CareCircle members.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-3">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="font-display font-semibold text-sm text-slate-900 mb-1">
              Apple Privacy Compliance
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              iOS permissions (Camera, Photos, Face ID) operate strictly on-demand for document
              uploads. Biometrics never leave the local Apple Secure Enclave.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 mb-3">
              <Trash2 className="w-5 h-5" />
            </div>
            <h3 className="font-display font-semibold text-sm text-slate-900 mb-1">
              Full Account Deletion
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              In full compliance with Apple Guideline 5.1.1(v), delete your account directly inside
              the app (Settings → Delete Account) with complete data purging.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Body: Sticky Sidebar + Structured Document */}
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 py-12 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Sticky Sidebar (Table of Contents) */}
          <aside className="lg:col-span-4 sticky top-24 space-y-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <span className="font-mono text-xs font-semibold tracking-wider uppercase text-slate-500">
                  Document Index
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  {SECTIONS.length} Sections
                </span>
              </div>

              {/* Quick Search in TOC */}
              <div className="relative mb-3">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter sections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Section Links */}
              <nav className="max-h-[55vh] overflow-y-auto space-y-1 pr-1 text-xs">
                {filteredSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-all flex items-center justify-between cursor-pointer ${
                      activeSection === section.id
                        ? 'bg-blue-600 text-white font-medium shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <span className="truncate">{section.title}</span>
                    {activeSection === section.id && (
                      <ChevronRight className="w-3.5 h-3.5 shrink-0 ml-1 text-white" />
                    )}
                  </button>
                ))}
              </nav>

              {/* Action Buttons in Sidebar */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5 text-slate-500" />
                  <span>Print / PDF</span>
                </button>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-flex items-center justify-center p-2 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                  title="Scroll to top"
                >
                  <ArrowUp className="w-4 h-4 text-slate-500" />
                </button>
              </div>
            </div>

            {/* Quick Contact Box in Sidebar */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 shadow-sm text-xs">
              <h4 className="font-display font-semibold text-white text-sm mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                Privacy & Data Inquiries
              </h4>
              <p className="text-slate-400 mb-3 leading-relaxed">
                Have questions or need to exercise your DPDP or Apple privacy rights? Contact our
                designated Data Protection and Grievance desk.
              </p>
              <div className="space-y-2 font-mono text-[11px]">
                <div className="flex items-center justify-between bg-slate-800/80 p-2 rounded-lg border border-slate-700">
                  <span className="text-slate-400">Carevie Desk:</span>
                  <button
                    onClick={() => handleCopy(LEGAL_CONFIG.supportEmail, 'support')}
                    className="text-blue-300 hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <span>{LEGAL_CONFIG.supportEmail}</span>
                    {copiedEmail === 'support' ? (
                      <Check className="w-3 h-3 text-emerald-400" />
                    ) : (
                      <Copy className="w-3 h-3 text-slate-400" />
                    )}
                  </button>
                </div>
                <div className="flex items-center justify-between bg-slate-800/80 p-2 rounded-lg border border-slate-700">
                  <span className="text-slate-400">Corporate:</span>
                  <button
                    onClick={() => handleCopy(LEGAL_CONFIG.corporateEmail, 'corp')}
                    className="text-blue-300 hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <span>{LEGAL_CONFIG.corporateEmail}</span>
                    {copiedEmail === 'corp' ? (
                      <Check className="w-3 h-3 text-emerald-400" />
                    ) : (
                      <Copy className="w-3 h-3 text-slate-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Main Legal Document */}
          <main className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm text-slate-700 space-y-12">
            {/* SECTION 1: OVERVIEW */}
            <section
              id="overview"
              ref={(el) => (sectionRefs.current['overview'] = el)}
              className="scroll-mt-28"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-semibold mb-2">
                <span>SECTION 01</span>
                <span>/</span>
                <span>INTRODUCTION & SCOPE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                1. Executive Overview & Scope
              </h2>
              <p className="leading-relaxed mb-4">
                This Privacy Policy (“Policy”) sets forth the principles, practices, and protocols
                governing how <strong>{LEGAL_CONFIG.companyName}</strong> (referred to as “Zeldapro”,
                “the Company”, “we”, “us”, or “our”) collects, utilizes, processes, protects,
                stores, transfers, and purges personal and sensitive health data.
              </p>
              <p className="leading-relaxed mb-4">
                This Policy covers our corporate website (
                <a href={LEGAL_CONFIG.corporateWebsite} className="text-blue-600 underline">
                  {LEGAL_CONFIG.corporateDomain}
                </a>
                ), our proprietary digital health product <strong>{LEGAL_CONFIG.flagshipProduct}</strong>{' '}
                (accessible at{' '}
                <a
                  href={`https://${LEGAL_CONFIG.productDomain}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  {LEGAL_CONFIG.productDomain}
                </a>
                ), its iOS and Android mobile applications, backend APIs, client portals, and all
                associated digital interactions.
              </p>
              <p className="leading-relaxed mb-4">
                This Policy is enacted in strict compliance with the{' '}
                <strong>Digital Personal Data Protection Act, 2023 (“DPDP Act”)</strong>, the{' '}
                <strong>Information Technology Act, 2000</strong>, the Information Technology
                (Reasonable Security Practices and Procedures and Sensitive Personal Data or
                Information) Rules, 2011 (<strong>“SPDI Rules”</strong>), the Information Technology
                (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, and the{' '}
                <strong>Apple App Store Review Guidelines (specifically Guideline 5.1 on Privacy and Data Collection)</strong>.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-xl my-6 text-sm text-slate-700">
                <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  Our Core Privacy Commitment
                </h4>
                <p className="leading-relaxed">
                  We believe that health records belong exclusively to the patient. We do not sell
                  user data to brokers, pharmaceutical marketers, advertising networks, or insurance
                  underwriters. All data stored within Carevie is encrypted, access-restricted, and
                  completely within your control.
                </p>
              </div>
            </section>

            {/* SECTION 2: CORPORATE IDENTITY */}
            <section
              id="entity"
              ref={(el) => (sectionRefs.current['entity'] = el)}
              className="scroll-mt-28 pt-8 border-t border-slate-100"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-semibold mb-2">
                <span>SECTION 02</span>
                <span>/</span>
                <span>LEGAL ENTITY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                2. Corporate Identity & Data Fiduciary
              </h2>
              <p className="leading-relaxed mb-4">
                For the purposes of the DPDP Act and international data privacy regulations, the legal
                entity responsible for determining the purposes and means of personal data processing
                (“Data Fiduciary”) is:
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-4 text-sm font-mono space-y-2">
                <div>
                  <span className="text-slate-500">Legal Name:</span>{' '}
                  <strong className="text-slate-900">{LEGAL_CONFIG.companyName}</strong>
                </div>
                <div>
                  <span className="text-slate-500">Corporate Type:</span> Private Limited Company
                  incorporated under the Companies Act, 2013 (India)
                </div>
                <div>
                  <span className="text-slate-500">Registered Office:</span>{' '}
                  <span className="text-slate-800">{LEGAL_CONFIG.registeredAddress}</span>
                </div>
                <div>
                  <span className="text-slate-500">Corporate Email:</span>{' '}
                  <a href={`mailto:${LEGAL_CONFIG.corporateEmail}`} className="text-blue-600 underline">
                    {LEGAL_CONFIG.corporateEmail}
                  </a>
                </div>
                <div>
                  <span className="text-slate-500">Jurisdiction:</span> {LEGAL_CONFIG.jurisdiction}
                </div>
              </div>
              <p className="leading-relaxed text-sm">
                When you use our services or the Carevie platform, you act as the “Data Principal”
                endowed with non-negotiable statutory privacy rights over your personal and sensitive
                health information.
              </p>
            </section>

            {/* SECTION 3: CAREVIE PRODUCT DETAILS */}
            <section
              id="carevie-product"
              ref={(el) => (sectionRefs.current['carevie-product'] = el)}
              className="scroll-mt-28 pt-8 border-t border-slate-100"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-semibold mb-2">
                <span>SECTION 03</span>
                <span>/</span>
                <span>PRODUCT OVERVIEW</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                3. Carevie Healthcare Product Details
              </h2>
              <p className="leading-relaxed mb-4">
                <strong>Carevie</strong> is a proprietary personal health records (PHR) and medical
                information management platform developed, owned, maintained, and operated by{' '}
                <strong>{LEGAL_CONFIG.companyName}</strong>.
              </p>
              <p className="leading-relaxed mb-4">
                The Carevie platform allows users to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm leading-relaxed mb-6">
                <li>
                  <strong>Digitally Vault Medical Documents:</strong> Securely upload, categorize, and
                  organize diagnostic laboratory reports, doctor prescriptions, medical bills, and
                  discharge summaries.
                </li>
                <li>
                  <strong>Manage Medication Logs:</strong> Track ongoing medication dosages,
                  treatment plans, and appointment schedules.
                </li>
                <li>
                  <strong>Form a Family CareCircle:</strong> Securely share selected health records
                  with trusted family members, legal guardians, or emergency caregivers.
                </li>
                <li>
                  <strong>Generate Temporary Clinical Share Links:</strong> Create time-limited,
                  tokenized access links for treating physicians and clinical staff without requiring
                  them to download the app.
                </li>
                <li>
                  <strong>Emergency Health Card:</strong> Maintain voluntary blood group, allergy, and
                  critical medical condition notes accessible during medical emergencies.
                </li>
                <li>
                  <strong>AI Health Insights:</strong> Receive synthesized explanations of complex
                  medical jargon extracted from uploaded test documents.
                </li>
              </ul>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4 text-sm text-slate-700">
                <h4 className="font-bold text-amber-900 mb-1 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  Crucial Medical Disclaimer
                </h4>
                <p className="leading-relaxed">
                  Carevie and Zeldapro Consultancy Private Limited are not licensed healthcare
                  providers, medical clinics, pathology laboratories, or telemedicine practitioners.
                  Carevie does not render clinical diagnoses, medical advice, drug prescriptions, or
                  emergency triage services. All content, document summaries, and AI interpretations
                  are provided solely for informational and personal organizational convenience.
                  Always consult a licensed physician or registered medical specialist for health
                  decisions.
                </p>
              </div>
            </section>

            {/* SECTION 4: DEFINITIONS */}
            <section
              id="definitions"
              ref={(el) => (sectionRefs.current['definitions'] = el)}
              className="scroll-mt-28 pt-8 border-t border-slate-100"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-semibold mb-2">
                <span>SECTION 04</span>
                <span>/</span>
                <span>LEGAL DEFINITIONS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                4. Key Legal & Technical Definitions
              </h2>
              <div className="space-y-3 text-sm leading-relaxed">
                <p>
                  <strong className="text-slate-900 font-semibold">• “Personal Data”:</strong> Any
                  data about an individual who is identifiable by or in relation to such data.
                </p>
                <p>
                  <strong className="text-slate-900 font-semibold">
                    • “Sensitive Personal Data or Information” (“SPDI”):
                  </strong>{' '}
                  Personal data comprising medical history, lab reports, physiological records,
                  health documents, biometric authentication tokens, and related records covered under
                  Rule 3 of the SPDI Rules and the DPDP Act.
                </p>
                <p>
                  <strong className="text-slate-900 font-semibold">• “Data Principal”:</strong> The
                  natural person to whom the personal or health data relates (you, the user).
                </p>
                <p>
                  <strong className="text-slate-900 font-semibold">• “Data Fiduciary”:</strong>{' '}
                  Zeldapro Consultancy Private Limited, which determines the purpose and means of
                  processing personal data.
                </p>
                <p>
                  <strong className="text-slate-900 font-semibold">• “CareCircle”:</strong> The
                  feature within Carevie permitting users to grant granular, revocable access to
                  designated records to family members or caregivers.
                </p>
                <p>
                  <strong className="text-slate-900 font-semibold">• “Child Profile”:</strong> A
                  sub-profile created and supervised by a registered parent or lawful guardian for a
                  minor below 18 years of age.
                </p>
                <p>
                  <strong className="text-slate-900 font-semibold">• “Processing”:</strong> Any
                  wholly or partly automated operation or set of operations performed on personal data,
                  including collection, recording, organization, structuring, storage, adaptation,
                  retrieval, consultation, transmission, dissemination, erasure, or destruction.
                </p>
              </div>
            </section>

            {/* SECTION 5: INFORMATION WE COLLECT */}
            <section
              id="information-collected"
              ref={(el) => (sectionRefs.current['information-collected'] = el)}
              className="scroll-mt-28 pt-8 border-t border-slate-100"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-semibold mb-2">
                <span>SECTION 05</span>
                <span>/</span>
                <span>DATA CATEGORIES</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                5. Information We Collect
              </h2>
              <p className="leading-relaxed mb-4">
                We collect personal and technical information strictly to provide, authenticate, and
                secure our services. The categories of data collected include:
              </p>

              <div className="space-y-6">
                {/* 5.1 Account & Identity */}
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h3 className="text-lg font-display font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-blue-600" />
                    5.1 Identity & Authentication Data
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-700">
                    <li>
                      <strong>Mobile Phone Number:</strong> Used as your primary account identifier and
                      for OTP (One-Time Password) cryptographic verification.
                    </li>
                    <li>
                      <strong>Full Legal Name:</strong> To personalize your health vault and match
                      uploaded medical reports.
                    </li>
                    <li>
                      <strong>Date of Birth & Age:</strong> Required to compute age-appropriate health
                      metrics and verify adult user consent status.
                    </li>
                    <li>
                      <strong>Gender:</strong> Optionally provided for clinical calibration of normal
                      laboratory reference ranges.
                    </li>
                    <li>
                      <strong>Email Address:</strong> Optional or provided during support/grievance
                      inquiries and transaction confirmations.
                    </li>
                    <li>
                      <strong>Profile Photo:</strong> Optional image voluntarily uploaded to assist in
                      CareCircle identification.
                    </li>
                    <li>
                      <strong>Emergency Contacts:</strong> Phone numbers and names of relatives or
                      caregivers voluntarily designated by you.
                    </li>
                  </ul>
                </div>

                {/* 5.2 Health & SPDI */}
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h3 className="text-lg font-display font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <HeartPulse className="w-5 h-5 text-rose-600" />
                    5.2 Health & Medical Vault Data (Sensitive Personal Data - SPDI)
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-700">
                    <li>
                      <strong>Diagnostic & Lab Test Reports:</strong> Blood tests, lipid profiles,
                      imaging reports, scans, and biopsies uploaded as PDFs or photographs.
                    </li>
                    <li>
                      <strong>Prescriptions & Invoices:</strong> Doctor treatment slips, handwritten or
                      printed prescriptions, and hospital billing receipts.
                    </li>
                    <li>
                      <strong>Declared Blood Group:</strong> Stored along with voluntary blood report
                      verification documentation.
                    </li>
                    <li>
                      <strong>Medication Logs:</strong> Drug names, schedules, dosages, and treatment
                      durations entered or extracted from prescriptions.
                    </li>
                    <li>
                      <strong>Health Attributes:</strong> Voluntary entries regarding allergies,
                      chronic conditions (e.g. hypertension, diabetes), and medical history.
                    </li>
                  </ul>
                </div>

                {/* 5.3 Device & Technical */}
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h3 className="text-lg font-display font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <Server className="w-5 h-5 text-purple-600" />
                    5.3 Technical, Device & Audit Data
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-700">
                    <li>
                      <strong>Device Telemetry:</strong> Device model, operating system version (iOS /
                      Android), screen resolution, and language settings.
                    </li>
                    <li>
                      <strong>Push Notification Token:</strong> Apple APNs or Google FCM device tokens
                      used strictly to deliver transactional updates.
                    </li>
                    <li>
                      <strong>IP Address & Network Logs:</strong> Recorded during logins and API calls
                      solely for fraud prevention, rate-limiting, and security defense.
                    </li>
                    <li>
                      <strong>Audit Trail:</strong> Timestamps of file uploads, CareCircle permission
                      changes, and temporary share link creations.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SECTION 6: APPLE PERMISSIONS */}
            <section
              id="apple-permissions"
              ref={(el) => (sectionRefs.current['apple-permissions'] = el)}
              className="scroll-mt-28 pt-8 border-t border-slate-100"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-semibold mb-2">
                <span>SECTION 06</span>
                <span>/</span>
                <span>APPLE APP STORE & MOBILE COMPLIANCE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                6. Apple iOS & Mobile Device Permissions
              </h2>
              <p className="leading-relaxed mb-4">
                To satisfy the strict standards of <strong>Apple App Store Review Guideline 5.1</strong>{' '}
                and equivalent Android specifications, our mobile applications request only the bare
                minimum device capabilities necessary to execute core user-requested actions:
              </p>

              <div className="overflow-x-auto border border-slate-200 rounded-2xl mb-6">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900 font-mono border-b border-slate-200">
                      <th className="p-3">iOS Permission Key</th>
                      <th className="p-3">User-Facing Purpose</th>
                      <th className="p-3">Data Handled & Restrictions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="p-3 font-mono font-semibold text-blue-600">
                        NSCameraUsageDescription
                      </td>
                      <td className="p-3">
                        Allows capturing images of paper prescriptions, lab reports, and medical bills
                        directly from the device camera.
                      </td>
                      <td className="p-3">
                        Camera stream is active only while the capture UI is open. Images are saved
                        directly to your private vault; no background camera access occurs.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono font-semibold text-blue-600">
                        NSPhotoLibraryUsageDescription
                      </td>
                      <td className="p-3">
                        Allows browsing and selecting existing medical report photographs, scan images,
                        or PDF receipts from your Photo Library.
                      </td>
                      <td className="p-3">
                        Access is limited only to items you explicitly select. We do not index, scan, or
                        transmit unselected photos.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono font-semibold text-blue-600">
                        NSFaceIDUsageDescription
                      </td>
                      <td className="p-3">
                        Provides local on-device biometric app lock/unlock for enhanced health record
                        confidentiality.
                      </td>
                      <td className="p-3">
                        Biometric validation is processed exclusively by Apple’s LocalAuthentication
                        framework within the device’s Secure Enclave. We never access, capture, or store
                        your facial geometry or fingerprint data.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono font-semibold text-blue-600">
                        Push Notifications (APNs)
                      </td>
                      <td className="p-3">
                        Delivers medication reminders, CareCircle sharing notifications, and critical
                        security login alerts.
                      </td>
                      <td className="p-3">
                        We never transmit medical records, diagnosis text, or health details through push
                        notification payloads. Can be toggled off anytime in iOS Settings.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm text-emerald-900">
                <h4 className="font-bold mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  No Apple IDFA / Tracking Transparency (ATT) Tracking
                </h4>
                <p className="leading-relaxed">
                  Carevie does not collect Apple’s Identifier for Advertisers (IDFA), does not engage
                  in third-party ad tracking, does not profile users across external apps, and does
                  not sell data to data brokers. Consequently, no App Tracking Transparency (ATT)
                  cross-app tracking authorization is required because tracking does not occur.
                </p>
              </div>
            </section>

            {/* SECTION 7: COLLECTION METHODS */}
            <section
              id="collection-methods"
              ref={(el) => (sectionRefs.current['collection-methods'] = el)}
              className="scroll-mt-28 pt-8 border-t border-slate-100"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-semibold mb-2">
                <span>SECTION 07</span>
                <span>/</span>
                <span>HOW DATA IS COLLECTED</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                7. How We Collect Your Data
              </h2>
              <div className="space-y-3 text-sm leading-relaxed">
                <p>
                  <strong>• Direct User Input:</strong> When you register with your phone number, fill
                  in your profile, take an onboarding survey, or upload health records.
                </p>
                <p>
                  <strong>• Camera & File Uploads:</strong> When you use in-app camera or document
                  picker tools to submit medical tests, scans, or prescriptions.
                </p>
                <p>
                  <strong>• Cryptographic OTP Authentication:</strong> When you request and verify a
                  6-digit SMS code delivered via our telecommunications provider (2Factor).
                </p>
                <p>
                  <strong>• Delegated Family Uploads:</strong> When an authorized CareCircle family
                  member or parent uploads records to a shared profile.
                </p>
                <p>
                  <strong>• Automated System Logging:</strong> Standard web server logs capturing IP
                  addresses, browser user-agents, and API response latencies to ensure platform uptime
                  and security defense.
                </p>
              </div>
            </section>

            {/* SECTION 8: LAWFUL BASIS & PURPOSES */}
            <section
              id="purposes-processing"
              ref={(el) => (sectionRefs.current['purposes-processing'] = el)}
              className="scroll-mt-28 pt-8 border-t border-slate-100"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-semibold mb-2">
                <span>SECTION 08</span>
                <span>/</span>
                <span>LAWFUL BASIS & PURPOSES</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                8. Lawful Basis & Purposes of Processing
              </h2>
              <p className="leading-relaxed mb-4">
                Under the DPDP Act (Sections 4, 5, and 6) and the SPDI Rules, we process data only
                under legally recognized grounds:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm leading-relaxed mb-6">
                <li>
                  <strong>Explicit, Informed Consent:</strong> For all Sensitive Personal Data (health
                  documents, lab tests, prescriptions). Consent is requested prior to upload and can be
                  withdrawn at any time.
                </li>
                <li>
                  <strong>Contractual Necessity:</strong> To deliver the Carevie services requested
                  by you under our Terms of Service (e.g. authenticating your login, organizing your
                  vault).
                </li>
                <li>
                  <strong>Compliance with Legal Obligations:</strong> To adhere to statutory orders, tax
                  regulations, and lawful investigative demands from judicial or regulatory authorities.
                </li>
                <li>
                  <strong>Legitimate Operational Uses:</strong> Mitigating cyber security attacks,
                  enforcing API rate-limits, detecting fraudulent multi-account generation, and
                  investigating system anomalies.
                </li>
              </ul>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono text-slate-700">
                PROHIBITED USES: We strictly forbid the use of personal or medical data for targeted
                behavioral advertising, automated credit risk scoring, health insurance denial, or
                surveillance.
              </div>
            </section>

            {/* SECTION 9: AI PROCESSING */}
            <section
              id="ai-processing"
              ref={(el) => (sectionRefs.current['ai-processing'] = el)}
              className="scroll-mt-28 pt-8 border-t border-slate-100"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-semibold mb-2">
                <span>SECTION 09</span>
                <span>/</span>
                <span>ARTIFICIAL INTELLIGENCE & LLM SERVICES</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                9. AI Processing & Third-Party LLM Services
              </h2>
              <p className="leading-relaxed mb-4">
                Carevie integrates advanced Artificial Intelligence (AI) and Large Language Model (LLM)
                features to help users decipher complex medical reports and automate medicine
                schedules:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm">
                  <h4 className="font-semibold text-slate-900 mb-1 flex items-center gap-2">
                    <Bot className="w-4 h-4 text-purple-600" />
                    OpenAI API Integration
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-xs">
                    Employed to generate plain-language summaries of complex laboratory test values,
                    defining medical terms and highlighting flagged reference ranges.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm">
                  <h4 className="font-semibold text-slate-900 mb-1 flex items-center gap-2">
                    <Bot className="w-4 h-4 text-blue-600" />
                    Google Gemini API Integration
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-xs">
                    Employed for optical character recognition (OCR) parsing of doctor handwriting,
                    extracting medication dosages, frequency, and duration to auto-populate your
                    prescription log.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-sm text-slate-700 space-y-2">
                <p className="font-semibold text-amber-900">
                  Zero Model Training on Your Health Records
                </p>
                <p className="text-xs leading-relaxed">
                  Data sent to OpenAI and Google Gemini is transmitted exclusively through enterprise
                  commercial API contracts over encrypted TLS connections. Under these enterprise API
                  agreements, <strong>your personal medical data is NOT retained by these providers to train public models</strong>. Processing is stateless and strictly transient.
                </p>
              </div>
            </section>

            {/* SECTION 10: DATA SHARING & SUB-PROCESSORS */}
            <section
              id="data-sharing"
              ref={(el) => (sectionRefs.current['data-sharing'] = el)}
              className="scroll-mt-28 pt-8 border-t border-slate-100"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-semibold mb-2">
                <span>SECTION 10</span>
                <span>/</span>
                <span>DATA DISCLOSURES & SUB-PROCESSORS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                10. Data Sharing, Disclosures & Sub-Processors
              </h2>
              <p className="leading-relaxed mb-4">
                <strong>We never sell, rent, or commercialize your personal data.</strong> To operate
                our infrastructure securely, we partner with industry-leading sub-processors under
                strict Data Processing Agreements (DPAs):
              </p>

              <div className="space-y-3 text-xs leading-relaxed">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <strong className="text-slate-900 text-sm">Supabase Inc.</strong>
                    <p className="text-slate-500">Database & Object Storage Infrastructure (AES-256)</p>
                  </div>
                  <span className="font-mono text-slate-600 bg-white px-2.5 py-1 rounded border border-slate-200 shrink-0">
                    Primary Encrypted Vault Storage
                  </span>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <strong className="text-slate-900 text-sm">DigitalOcean LLC</strong>
                    <p className="text-slate-500">Cloud Compute & Application Servers</p>
                  </div>
                  <span className="font-mono text-slate-600 bg-white px-2.5 py-1 rounded border border-slate-200 shrink-0">
                    Backend API Host & Microservices
                  </span>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <strong className="text-slate-900 text-sm">Upstash Inc.</strong>
                    <p className="text-slate-500">Distributed Redis Cache & Edge Rate Limiting</p>
                  </div>
                  <span className="font-mono text-slate-600 bg-white px-2.5 py-1 rounded border border-slate-200 shrink-0">
                    Security Defense & Abuse Prevention
                  </span>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <strong className="text-slate-900 text-sm">2Factor (SMS Gateway)</strong>
                    <p className="text-slate-500">Telecommunications Provider (India)</p>
                  </div>
                  <span className="font-mono text-slate-600 bg-white px-2.5 py-1 rounded border border-slate-200 shrink-0">
                    Cryptographic OTP SMS Delivery
                  </span>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <strong className="text-slate-900 text-sm">Apple Push Notification service (APNs)</strong>
                    <p className="text-slate-500">Apple Inc. Notification Gateways</p>
                  </div>
                  <span className="font-mono text-slate-600 bg-white px-2.5 py-1 rounded border border-slate-200 shrink-0">
                    Transactional iOS Push Alerts
                  </span>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <strong className="text-slate-900 text-sm">Google Analytics</strong>
                    <p className="text-slate-500">Anonymized Web Performance Analytics</p>
                  </div>
                  <span className="font-mono text-slate-600 bg-white px-2.5 py-1 rounded border border-slate-200 shrink-0">
                    Aggregated Metrics (Zero Health Data)
                  </span>
                </div>
              </div>
            </section>

            {/* SECTION 11: CARECIRCLE & SHARING */}
            <section
              id="carecircle-sharing"
              ref={(el) => (sectionRefs.current['carecircle-sharing'] = el)}
              className="scroll-mt-28 pt-8 border-t border-slate-100"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-semibold mb-2">
                <span>SECTION 11</span>
                <span>/</span>
                <span>USER-CONTROLLED SHARING</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                11. CareCircle & Secure Share Links
              </h2>
              <p className="leading-relaxed mb-4">
                Carevie incorporates peer-to-peer sharing tools designed to keep patients in total
                command of who inspects their health data:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-display font-semibold text-sm text-slate-900 mb-2 flex items-center gap-1.5">
                    <Share2 className="w-4 h-4 text-blue-600" />
                    CareCircle Family Sharing
                  </h4>
                  <p className="text-slate-600 mb-2">
                    Grant granular read permissions to chosen family members or caregivers. You can
                    revoke CareCircle members instantly with one click from within your account
                    settings.
                  </p>
                  <span className="text-[11px] font-mono text-slate-500">
                    Full revocation takes immediate effect across active sessions.
                  </span>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-display font-semibold text-sm text-slate-900 mb-2 flex items-center gap-1.5">
                    <Lock className="w-4 h-4 text-purple-600" />
                    Tokenized Clinical Share Links
                  </h4>
                  <p className="text-slate-600 mb-2">
                    Generate temporary cryptographic URLs to share specific test results with doctors
                    or hospital registries. Each link features configurable expiration times and can
                    be revoked at any moment.
                  </p>
                  <span className="text-[11px] font-mono text-slate-500">
                    Links become immediately invalid once revoked or expired.
                  </span>
                </div>
              </div>
            </section>

            {/* SECTION 12: CHILD PROFILES & MINORS */}
            <section
              id="child-privacy"
              ref={(el) => (sectionRefs.current['child-privacy'] = el)}
              className="scroll-mt-28 pt-8 border-t border-slate-100"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-semibold mb-2">
                <span>SECTION 12</span>
                <span>/</span>
                <span>MINORS & CHILD DATA</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                12. Child Profiles & Protection of Minors
              </h2>
              <p className="leading-relaxed mb-4">
                Carevie is strictly designed for operation by individuals who are at least 18 years of
                age. We do not knowingly permit minors to create independent accounts.
              </p>
              <p className="leading-relaxed mb-4">
                Under Section 9 of the DPDP Act 2023, a registered adult parent or lawful legal
                guardian may create and manage a <strong>Child Profile</strong> solely to organize the
                minor child's pediatric health documents:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm leading-relaxed mb-4">
                <li>
                  The parent or legal guardian represents and confirms full legal authority to grant
                  consent for processing the child’s health information.
                </li>
                <li>
                  We do not engage in behavioral monitoring, tracking, or targeted advertising directed
                  at child profiles.
                </li>
                <li>
                  We do not process any child data in any manner detrimental to the child's physical or
                  mental well-being.
                </li>
                <li>
                  Parents can delete the child profile and all associated medical files permanently at
                  any time.
                </li>
              </ul>
            </section>

            {/* SECTION 13: CROSS-BORDER TRANSFERS */}
            <section
              id="cross-border"
              ref={(el) => (sectionRefs.current['cross-border'] = el)}
              className="scroll-mt-28 pt-8 border-t border-slate-100"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-semibold mb-2">
                <span>SECTION 13</span>
                <span>/</span>
                <span>DATA TRANSFERS & HOSTING</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                13. Cross-Border Data Storage & Transfers
              </h2>
              <p className="leading-relaxed mb-4">
                Our primary database infrastructure and medical document stores are hosted with
                Supabase and DigitalOcean, with primary servers situated to serve our Indian and global
                user base. When you utilize on-demand AI processing features (OpenAI / Google Gemini),
                document text is processed via encrypted cross-border API endpoints located in the
                United States or other jurisdictions adhering to rigorous international security
                protocols.
              </p>
              <p className="leading-relaxed text-sm">
                Such transfers are permitted under Section 16 of the DPDP Act, and we ensure that all
                overseas sub-processors are contractually bound to provide levels of data protection
                at least equal to Indian statutory standards.
              </p>
            </section>

            {/* SECTION 14: SECURITY MEASURES */}
            <section
              id="security-measures"
              ref={(el) => (sectionRefs.current['security-measures'] = el)}
              className="scroll-mt-28 pt-8 border-t border-slate-100"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-semibold mb-2">
                <span>SECTION 14</span>
                <span>/</span>
                <span>CYBER SECURITY & SAFEGUARDS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                14. Security Safeguards & Encryption
              </h2>
              <p className="leading-relaxed mb-4">
                We implement comprehensive technical and organizational security measures meeting or
                exceeding ISO/IEC 27001 recommendations and Rule 8 of the SPDI Rules:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                  <strong className="text-slate-900 font-semibold block">AES-256 At-Rest Encryption</strong>
                  <p className="text-slate-600">
                    All stored files, medical scans, PDF reports, and database records are encrypted
                    using Advanced Encryption Standard (AES) 256-bit keys.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                  <strong className="text-slate-900 font-semibold block">TLS 1.3 In-Transit Encryption</strong>
                  <p className="text-slate-600">
                    All data exchanged between client applications, web browsers, and our APIs is
                    protected by modern Transport Layer Security (TLS 1.3 / HTTPS).
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                  <strong className="text-slate-900 font-semibold block">OTP-Only Authentication</strong>
                  <p className="text-slate-600">
                    Eliminates weak, reused, or compromised passwords through cryptographically
                    throttled one-time mobile verification tokens.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                  <strong className="text-slate-900 font-semibold block">Principle of Least Privilege</strong>
                  <p className="text-slate-600">
                    Internal engineers and personnel do not have arbitrary read access to unencrypted
                    patient health records or diagnostic files.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 15: DATA RETENTION & DELETION */}
            <section
              id="retention-deletion"
              ref={(el) => (sectionRefs.current['retention-deletion'] = el)}
              className="scroll-mt-28 pt-8 border-t border-slate-100"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-semibold mb-2">
                <span>SECTION 15</span>
                <span>/</span>
                <span>RETENTION & APPLE 5.1.1(v) ACCOUNT DELETION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                15. Data Retention & Account Deletion
              </h2>
              <p className="leading-relaxed mb-4">
                In strict adherence to <strong>Apple App Store Review Guideline 5.1.1(v)</strong> and
                Section 12 of the DPDP Act 2023, every user has the absolute right to terminate their
                account and request permanent deletion of all stored health files and credentials.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-6 text-sm space-y-3">
                <h4 className="font-display font-semibold text-slate-900 flex items-center gap-2">
                  <Trash2 className="w-5 h-5 text-rose-600" />
                  How to Initiate Self-Service Account Deletion
                </h4>
                <ol className="list-decimal pl-5 space-y-2 text-xs leading-relaxed text-slate-700">
                  <li>
                    <strong>Within the iOS or Android App:</strong> Navigate to{' '}
                    <code className="bg-white px-2 py-0.5 rounded border border-slate-200 font-mono text-rose-700">
                      Settings → Account Settings → Delete Account
                    </code>
                    .
                  </li>
                  <li>
                    <strong>Confirmation:</strong> Confirm your intent. Your account enters an
                    immediate deactivation state.
                  </li>
                  <li>
                    <strong>Via Email Request:</strong> Alternatively, submit a deletion request from
                    your registered phone number or email to{' '}
                    <a href={`mailto:${LEGAL_CONFIG.supportEmail}`} className="text-blue-600 underline">
                      {LEGAL_CONFIG.supportEmail}
                    </a>{' '}
                    or{' '}
                    <a href={`mailto:${LEGAL_CONFIG.corporateEmail}`} className="text-blue-600 underline">
                      {LEGAL_CONFIG.corporateEmail}
                    </a>
                    .
                  </li>
                </ol>
              </div>

              <div className="space-y-3 text-xs leading-relaxed">
                <h4 className="font-semibold text-slate-900 text-sm">
                  Deletion Workflow & 30-Day Security Recovery Grace Period:
                </h4>
                <p>
                  <strong>1. Immediate Deactivation (Day 0 to 30):</strong> Upon requesting deletion,
                  your account is hidden immediately. Active CareCircle links and share tokens are
                  revoked. All push notifications and automated processing are ceased. If you change
                  your mind, you can restore your account within 30 days by authenticating via your
                  registered phone number.
                </p>
                <p>
                  <strong>2. Permanent Cryptographic Purge (Day 31):</strong> After 30 days, all
                  personal data, medical records, diagnostic scans, prescriptions, medications, and
                  child profiles are permanently scrubbed from our active database systems.
                </p>
                <p>
                  <strong>3. Minimal Residual Audit Data:</strong> A strictly hashed and minimal
                  record (such as account creation/deletion timestamps and fraud-prevention flags) is
                  retained for statutory compliance, anti-fraud prevention, and judicial defense under
                  applicable laws.
                </p>
              </div>
            </section>

            {/* SECTION 16: USER RIGHTS */}
            <section
              id="user-rights"
              ref={(el) => (sectionRefs.current['user-rights'] = el)}
              className="scroll-mt-28 pt-8 border-t border-slate-100"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-semibold mb-2">
                <span>SECTION 16</span>
                <span>/</span>
                <span>YOUR STATUTORY RIGHTS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                16. Data Principal Rights (DPDP Act & Apple)
              </h2>
              <p className="leading-relaxed mb-4">
                As a Data Principal, you are entitled to exercise the following legal rights without
                hindrance or fee:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <strong className="text-slate-900 block mb-1">Right to Access Summary</strong>
                  <p className="text-slate-600">
                    Receive a full summary of all personal and health data stored about you and the list
                    of sub-processors with whom it has been shared.
                  </p>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <strong className="text-slate-900 block mb-1">Right to Rectification</strong>
                  <p className="text-slate-600">
                    Correct, update, or complete any inaccurate or out-of-date personal information in
                    your profile.
                  </p>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <strong className="text-slate-900 block mb-1">Right to Erasure</strong>
                  <p className="text-slate-600">
                    Request complete permanent erasure of personal data that is no longer required for
                    the purpose it was collected.
                  </p>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <strong className="text-slate-900 block mb-1">Right to Grievance Redressal</strong>
                  <p className="text-slate-600">
                    Register complaints with our designated Grievance Officer and escalate to the Data
                    Protection Board of India.
                  </p>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <strong className="text-slate-900 block mb-1">Right to Nominate</strong>
                  <p className="text-slate-600">
                    Nominate a surrogate individual to exercise your privacy rights in the event of
                    death or legal incapacity.
                  </p>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <strong className="text-slate-900 block mb-1">Right to Withdraw Consent</strong>
                  <p className="text-slate-600">
                    Revoke previously granted consent at any time without impacting processing conducted
                    prior to the withdrawal.
                  </p>
                </div>
              </div>

              <p className="leading-relaxed text-xs mt-4">
                To exercise any statutory right, simply send an email request to{' '}
                <a href={`mailto:${LEGAL_CONFIG.privacyEmail}`} className="text-blue-600 underline">
                  {LEGAL_CONFIG.privacyEmail}
                </a>{' '}
                or{' '}
                <a href={`mailto:${LEGAL_CONFIG.corporateEmail}`} className="text-blue-600 underline">
                  {LEGAL_CONFIG.corporateEmail}
                </a>
                .
              </p>
            </section>

            {/* SECTION 17: COOKIES & TRACKING */}
            <section
              id="cookies-tracking"
              ref={(el) => (sectionRefs.current['cookies-tracking'] = el)}
              className="scroll-mt-28 pt-8 border-t border-slate-100"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-semibold mb-2">
                <span>SECTION 17</span>
                <span>/</span>
                <span>COOKIES & TELEMETRY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                17. Cookies & Tracking Technologies
              </h2>
              <p className="leading-relaxed mb-4 text-sm">
                Our websites use essential first-party session cookies and security cookies to maintain
                secure user sessions, prevent Cross-Site Request Forgery (CSRF), and remember interface
                preferences. We do not use third-party behavioral retargeting or cross-site tracking
                cookies.
              </p>
              <p className="leading-relaxed text-xs text-slate-600">
                You can manage or disable cookies via your browser settings; however, disabling
                essential session cookies may impair your ability to authenticate into the platform.
              </p>
            </section>

            {/* SECTION 18: GRIEVANCE REDRESSAL */}
            <section
              id="grievance-redressal"
              ref={(el) => (sectionRefs.current['grievance-redressal'] = el)}
              className="scroll-mt-28 pt-8 border-t border-slate-100"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-semibold mb-2">
                <span>SECTION 18</span>
                <span>/</span>
                <span>STATUTORY GRIEVANCE DESK</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                18. Grievance Redressal Mechanism
              </h2>
              <p className="leading-relaxed mb-4 text-sm">
                In strict accordance with the DPDP Act 2023, the Information Technology (Intermediary
                Guidelines and Digital Media Ethics Code) Rules, 2021, and the SPDI Rules,{' '}
                <strong>{LEGAL_CONFIG.companyName}</strong> has established a dedicated Grievance
                Redressal Office:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-sm space-y-2.5">
                <div className="flex items-center gap-2 font-display font-bold text-slate-900 text-base mb-2">
                  <Building className="w-5 h-5 text-blue-600" />
                  Statutory Grievance Officer Details
                </div>
                <div>
                  <span className="font-mono text-slate-500 text-xs">Officer / Desk:</span>{' '}
                  <strong className="text-slate-900">{LEGAL_CONFIG.grievanceOfficer}</strong>
                </div>
                <div>
                  <span className="font-mono text-slate-500 text-xs">Company:</span>{' '}
                  <span className="text-slate-900">{LEGAL_CONFIG.companyName}</span>
                </div>
                <div>
                  <span className="font-mono text-slate-500 text-xs">Direct Email:</span>{' '}
                  <a href={`mailto:${LEGAL_CONFIG.grievanceEmail}`} className="text-blue-600 underline font-mono">
                    {LEGAL_CONFIG.grievanceEmail}
                  </a>
                </div>
                <div>
                  <span className="font-mono text-slate-500 text-xs">Physical Address:</span>{' '}
                  <span className="text-slate-800">{LEGAL_CONFIG.registeredAddress}</span>
                </div>
                <div className="pt-2 text-xs text-slate-600 border-t border-slate-200">
                  <strong>Statutory Response Timelines:</strong> Acknowledgment within forty-eight (48)
                  hours; complete resolution within fifteen (15) working days from date of receipt.
                </div>
              </div>
            </section>

            {/* SECTION 19: POLICY UPDATES */}
            <section
              id="policy-updates"
              ref={(el) => (sectionRefs.current['policy-updates'] = el)}
              className="scroll-mt-28 pt-8 border-t border-slate-100"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-semibold mb-2">
                <span>SECTION 19</span>
                <span>/</span>
                <span>AMENDMENTS & REVISIONS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                19. Updates to this Privacy Policy
              </h2>
              <p className="leading-relaxed mb-4 text-sm">
                We reserve the right to amend this Policy periodically to reflect technical
                advancements, changes in our mobile applications, or regulatory notifications issued by
                the Data Protection Board of India or Apple App Store review boards.
              </p>
              <p className="leading-relaxed text-sm text-slate-600">
                Any material revisions will be accompanied by prominent notifications within the
                Carevie application, web banners, or registered email notifications. The “Last Updated”
                timestamp at the top of this document indicates the effective date of the current
                revision.
              </p>
            </section>

            {/* SECTION 20: CONTACT US */}
            <section
              id="contact-us"
              ref={(el) => (sectionRefs.current['contact-us'] = el)}
              className="scroll-mt-28 pt-8 border-t border-slate-100"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-semibold mb-2">
                <span>SECTION 20</span>
                <span>/</span>
                <span>CONTACT INFORMATION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                20. Official Corporate Contact Details
              </h2>
              <p className="leading-relaxed mb-6 text-sm">
                For questions regarding this Privacy Policy, our Apple Developer Organization
                verification, or our Carevie health technology infrastructure, please connect with us:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <span className="text-slate-500 uppercase text-[10px] block">Corporate Headquarters</span>
                  <strong className="text-slate-900 block font-sans text-sm">
                    {LEGAL_CONFIG.companyName}
                  </strong>
                  <p className="text-slate-600 font-sans text-xs leading-relaxed">
                    {LEGAL_CONFIG.registeredAddress}
                  </p>
                  <a
                    href={`mailto:${LEGAL_CONFIG.corporateEmail}`}
                    className="text-blue-600 underline block pt-1"
                  >
                    {LEGAL_CONFIG.corporateEmail}
                  </a>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <span className="text-slate-500 uppercase text-[10px] block">Product & User Support</span>
                  <strong className="text-slate-900 block font-sans text-sm">
                    {LEGAL_CONFIG.flagshipProduct} Support Desk
                  </strong>
                  <p className="text-slate-600 font-sans text-xs leading-relaxed">
                    General, technical, and privacy support for Carevie users.
                  </p>
                  <a
                    href={`mailto:${LEGAL_CONFIG.supportEmail}`}
                    className="text-blue-600 underline block pt-1"
                  >
                    {LEGAL_CONFIG.supportEmail}
                  </a>
                  <a
                    href={`mailto:${LEGAL_CONFIG.privacyEmail}`}
                    className="text-blue-600 underline block"
                  >
                    {LEGAL_CONFIG.privacyEmail}
                  </a>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

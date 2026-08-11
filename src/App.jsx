import {
  Activity,
  ArrowRight,
  Baby,
  BadgeCheck,
  Bone,
  Brain,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Dumbbell,
  Facebook,
  HeartPulse,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Microscope,
  Phone,
  Pill,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  TestTube2,
  Waves,
  X,
} from 'lucide-react';
import { useState } from 'react';

const heroImage = '/images/hero-physiotherapy.png';

const images = {
  about: '/images/clinic-consultation.png',
  physiotherapy: '/images/rehab-exercise.png',
  pain: '/images/hero-physiotherapy.png',
  rehabilitation: '/images/rehab-exercise.png',
  diagnostics: '/images/diagnostics-care.png',
};

const navItems = [
  ['About', '#about'],
  ['Services', '#services'],
  ['Conditions', '#conditions'],
  ['Doctor', '#doctor'],
  ['Contact', '#contact'],
];

const services = [
  {
    title: 'Physiotherapy',
    text: 'Back & Neck Pain, Sciatica, Slip Disc, Arthritis, Frozen Shoulder, Knee Pain, Sports Injuries, Muscle & Joint Pain, Post-Surgical Rehabilitation, Stroke Rehabilitation, Parkinson\'s Rehabilitation, Balance & Vestibular Rehabilitation, Pediatric Physiotherapy, Geriatric Physiotherapy, Women\'s Health Physiotherapy.',
    icon: Activity,
    image: '/images/service-physiotherapy.jpg',
  },
  {
    title: 'Pain Management',
    text: 'Personalized treatment plans for acute and chronic pain using modern rehabilitation techniques.',
    icon: HeartPulse,
    image: '/images/service-pain-management.jpg',
  },
  {
    title: 'Chiropractic & Joint Mobilization',
    text: 'Safe manual therapy to restore spinal alignment, improve mobility, and reduce pain.',
    icon: Bone,
    image: '/images/service-chiropractic.jpg',
  },
  {
    title: 'Acupuncture',
    text: 'Drug-free pain relief using evidence-based acupuncture techniques.',
    icon: Sparkles,
    image: '/images/service-acupuncture.jpg',
  },
  {
    title: 'Varma Therapy',
    text: 'Traditional therapeutic methods for pain relief and improved circulation.',
    icon: Waves,
    image: '/images/service-varma.jpg',
  },
  {
    title: 'Ayurveda & Panchakarma',
    text: 'Holistic therapies that support healing, detoxification, and long-term wellness.',
    icon: ShieldCheck,
    image: '/images/service-ayurveda.jpg',
  },
  {
    title: 'Rehabilitation Programs',
    text: 'Stroke Rehabilitation, Sports Rehabilitation, Orthopedic Rehabilitation, Neurological Rehabilitation, Geriatric Rehabilitation, Post-Fracture Rehabilitation.',
    icon: Brain,
    image: '/images/service-rehabilitation.jpg',
  },
  {
    title: 'Yoga & Strength Training',
    text: 'Customized movement programs for flexibility, posture, strength, and injury prevention.',
    icon: Dumbbell,
    image: '/images/service-yoga-strength.jpg',
  },
  {
    title: 'Pharmacy',
    text: 'Quality medicines available at affordable prices.',
    icon: Pill,
    image: '/images/service-pharmacy.jpg',
  },
  {
    title: 'Laboratory Services',
    text: 'Routine laboratory investigations with reliable reporting.',
    icon: TestTube2,
    image: '/images/service-laboratory.jpg',
  },
  {
    title: 'Digital X-Ray',
    text: 'Quick, accurate, and affordable diagnostic imaging.',
    icon: Microscope,
    image: '/images/service-digital-xray.jpg',
  },
];

const physiotherapyList = [
  'Back & Neck Pain',
  'Sciatica',
  'Slip Disc',
  'Arthritis',
  'Frozen Shoulder',
  'Knee Pain',
  'Sports Injuries',
  'Muscle & Joint Pain',
  'Post-Surgical Rehabilitation',
  'Stroke Rehabilitation',
  "Parkinson's Rehabilitation",
  'Balance & Vestibular Rehabilitation',
  'Pediatric Physiotherapy',
  'Geriatric Physiotherapy',
  "Women's Health Physiotherapy",
];

const rehabilitationPrograms = [
  {
    title: 'Stroke Rehabilitation',
    image: '/images/rehab-stroke.jpg',
  },
  {
    title: 'Sports Rehabilitation',
    image: '/images/rehab-sports.jpg',
  },
  {
    title: 'Orthopedic Rehabilitation',
    image: '/images/rehab-orthopedic.jpg',
  },
  {
    title: 'Neurological Rehabilitation',
    image: '/images/rehab-neurological.jpg',
  },
  {
    title: 'Geriatric Rehabilitation',
    image: '/images/rehab-geriatric.jpg',
  },
  {
    title: 'Post-Fracture Rehabilitation',
    image: '/images/rehab-fracture.jpg',
  },
];

const conditions = [
  'Back Pain',
  'Neck Pain',
  'Sciatica',
  'Cervical Spondylosis',
  'Lumbar Spondylosis',
  'Osteoarthritis',
  'Rheumatoid Arthritis',
  'Frozen Shoulder',
  'Tennis Elbow',
  "Golfer's Elbow",
  'Plantar Fasciitis',
  'Heel Pain',
  'Knee Pain',
  'Hip Pain',
  'Shoulder Pain',
  'Ligament Injuries',
  'Sports Injuries',
  'Stroke',
  "Bell's Palsy",
  "Parkinson's Disease",
  'Diabetic Neuropathy',
  'Vertigo',
  'Balance Disorders',
  'Post-Operative Recovery',
  'Muscle Weakness',
  'Posture Problems',
];

const benefits = [
  'Experienced Healthcare Team',
  'Personalized Treatment Plans',
  'Evidence-Based Care',
  'Modern Equipment',
  'Advanced Rehabilitation',
  'Affordable Packages',
  'Friendly Environment',
  'Comprehensive Healthcare Under One Roof',
  'Patient Education & Prevention',
  'High Patient Satisfaction',
];

const testimonials = [
  {
    quote: 'Excellent treatment with caring staff. My back pain improved within a few sessions.',
    name: 'Back pain recovery patient',
  },
  {
    quote: 'The best physiotherapy clinic. Highly professional and friendly.',
    name: 'Physiotherapy patient',
  },
  {
    quote: 'Advanced treatment with genuine care. Highly recommended.',
    name: 'Rehabilitation patient',
  },
];

const faqs = [
  ["Do I need a doctor's referral?", 'No. You can book an appointment directly.'],
  ['How many sessions will I need?', 'It depends on your condition and recovery goals.'],
  ['Do you provide online consultation?', 'Yes. Online physiotherapy consultation is available.'],
  ['Do you treat elderly patients?', 'Yes. We offer specialized geriatric rehabilitation.'],
];

const doctorExpertise = [
  'Neuromuscular & Myofascial Manual Therapy',
  'Sports Injury Rehabilitation',
  'Musculoskeletal Rehabilitation',
  'Pain Management',
  'Functional Rehabilitation',
  'Sujok Therapy',
  'Movement & Mobility Rehabilitation',
  'Post-Injury Recovery',
  'Strength & Conditioning',
  'Personalized Rehabilitation Programs',
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7FBFA] text-clinic-ink">
      <TopBar />
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur">
        <div className="section-shell flex h-20 items-center justify-between gap-4">
          <a href="#home" className="focus-ring flex items-center gap-2 rounded-md">
            <img
              src="/images/new-logo.png"
              alt="SMAART HEALTH CARE logo"
              className="h-16 w-16 object-contain"
            />
            <span className="font-display text-lg font-extrabold leading-[1.05] text-clinic-navy sm:text-xl">
              <span className="block">
                SMAART
              </span>
              <span className="block">
                HEALTH CARE
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="focus-ring rounded-md text-sm font-bold text-slate-700 transition hover:text-clinic-teal"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+917449144440"
              className="focus-ring inline-flex items-center gap-2 rounded-md border border-clinic-teal px-4 py-3 text-sm font-bold text-clinic-teal transition hover:bg-clinic-mint"
            >
              <Phone className="h-4 w-4" />
              74491 44440
            </a>
            <a
              href="#appointment"
              className="focus-ring inline-flex items-center gap-2 rounded-md bg-clinic-coral px-4 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-[#cf5c4a]"
            >
              <CalendarCheck className="h-4 w-4" />
              Book Appointment
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((current) => !current)}
            className="focus-ring inline-grid h-11 w-11 place-items-center rounded-md border border-slate-200 text-clinic-navy lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <div className="section-shell grid gap-2 py-4">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="focus-ring rounded-md px-2 py-3 font-bold text-slate-700"
                >
                  {label}
                </a>
              ))}
              <a
                href="#appointment"
                onClick={() => setMenuOpen(false)}
                className="focus-ring mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-clinic-coral px-4 py-3 font-bold text-white"
              >
                <CalendarCheck className="h-4 w-4" />
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <Hero />
        <About />
        <Services />
        <Conditions />
        <WhyChoose />
        <Doctor />
        <Testimonials />
        <Faq />
        <Appointment />
        <Contact />
      </main>

      <footer className="bg-clinic-navy py-8 text-white">
        <div className="section-shell flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold">SMAART HEALTH CARE. Move Better. Live Better. Stay Healthy.</p>
          <p className="text-white/70">smaarthealthcare.in</p>
        </div>
      </footer>
    </div>
  );
}

function TopBar() {
  return (
    <div className="bg-clinic-navy text-white">
      <div className="section-shell flex flex-col gap-2 py-3 text-sm font-semibold sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a href="tel:+917449144440" className="focus-ring inline-flex items-center gap-2 rounded-md">
            <Phone className="h-4 w-4 text-clinic-amber" />
            74491 44440
          </a>
          <a
            href="mailto:smaarthealthcarecentre@gmail.com"
            className="focus-ring inline-flex items-center gap-2 rounded-md"
          >
            <Mail className="h-4 w-4 text-clinic-amber" />
            smaarthealthcarecentre@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-4 text-white/85">
          <a href="https://facebook.com/smaarthealthcare" className="focus-ring rounded-md" aria-label="Facebook">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="https://instagram.com/smaarthealthcare" className="focus-ring rounded-md" aria-label="Instagram">
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[calc(100svh-8rem)] overflow-hidden bg-clinic-navy text-white"
    >
      <img
        src={heroImage}
        alt="Healthcare professional consulting with a patient"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-clinic-navy via-clinic-navy/78 to-clinic-teal/45" />
      <div className="section-shell grid min-h-[calc(100svh-8rem)] items-center py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-md bg-white/12 px-4 py-2 text-sm font-bold backdrop-blur">
            <BadgeCheck className="h-4 w-4 text-clinic-amber" />
            Welcome to SMAART HEALTH CARE
          </p>
          <h1 className="font-display text-5xl font-extrabold leading-[1.04] text-white sm:text-6xl lg:text-7xl">
            SMAART HEALTH CARE
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-semibold text-clinic-mint sm:text-2xl">
            Move Better. Live Better. Stay Healthy.
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            A comprehensive healthcare and rehabilitation center dedicated to providing high-quality,
            evidence-based, and compassionate patient care.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#appointment"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-clinic-coral px-6 py-4 font-bold text-white shadow-soft transition hover:bg-[#cf5c4a]"
            >
              Book Your Appointment
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#services"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-white/35 bg-white/10 px-6 py-4 font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              View Services
            </a>
          </div>
        </div>
        <div className="hidden justify-end lg:flex">
          <div className="w-full max-w-sm rounded-md border border-white/20 bg-white/12 p-5 backdrop-blur">
            <div className="grid grid-cols-2 gap-4">
            {[
              ['2', 'Clinic branches'],
              ['15+', 'Core care areas'],
              ['Direct', 'Appointments'],
              ['Online', 'Consultation'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-md bg-white p-5 text-clinic-navy">
                  <p className="font-display text-3xl font-extrabold">{value}</p>
                  <p className="mt-1 text-sm font-bold text-slate-600">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative">
          <img
            src={images.about}
            alt="Modern healthcare clinic consultation"
            className="h-[420px] w-full rounded-md object-cover shadow-soft"
          />
          <div className="absolute bottom-5 left-5 right-5 rounded-md bg-white p-5 shadow-soft">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-clinic-teal">Patient-first care</p>
            <p className="mt-2 text-lg font-extrabold text-clinic-navy">
              Relief, function, independence, and quality of life.
            </p>
          </div>
        </div>
        <div>
          <p className="eyebrow">About Us</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight text-clinic-navy sm:text-5xl">
            Holistic rehabilitation care under one roof.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            Welcome to SMAART HEALTH CARE, a comprehensive healthcare and rehabilitation center dedicated to providing high-quality, evidence-based, and compassionate patient care. We believe that every patient deserves personalized treatment aimed not only at relieving pain but also at restoring function, independence, and quality of life.
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            Our multidisciplinary approach combines modern physiotherapy with complementary therapies to deliver holistic healthcare under one roof.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <InfoBlock
              title="Vision"
              text="To become the most trusted healthcare and rehabilitation center, providing world-class, affordable, and patient-centered care."
            />
            <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-display text-xl font-extrabold text-clinic-navy">Mission</h3>
              <ul className="mt-3 grid gap-2 leading-7 text-slate-600">
                {[
                  'Deliver evidence-based healthcare.',
                  'Restore mobility and improve quality of life.',
                  'Educate patients about prevention and healthy living.',
                  'Continuously adopt advanced treatment techniques.',
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-clinic-teal" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({ title, text }) {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="font-display text-xl font-extrabold text-clinic-navy">{title}</h3>
      <p className="mt-2 leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Our Services</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight text-clinic-navy sm:text-5xl">
            Complete care for pain, movement, recovery, and wellness.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, text, icon: Icon, image }) => (
            <article
              key={title}
              className="group overflow-hidden rounded-md border border-slate-200 bg-[#F8FBFB] shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={image}
                  alt={`${title} service`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-md bg-white text-clinic-teal shadow-soft">
                  <Icon className="h-6 w-6" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-extrabold text-clinic-navy">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 rounded-md bg-clinic-mint p-6 sm:p-8">
          <h3 className="font-display text-2xl font-extrabold text-clinic-navy">Physiotherapy care includes</h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {physiotherapyList.map((item) => (
              <span key={item} className="rounded-md bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-6 rounded-md bg-[#FFF7EA] p-6 sm:p-8">
          <h3 className="font-display text-2xl font-extrabold text-clinic-navy">Rehabilitation Programs</h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rehabilitationPrograms.map(({ title, image }) => (
              <article
                key={title}
                className="group overflow-hidden rounded-md bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={image}
                    alt={`${title} related therapy`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-clinic-navy/82 via-clinic-navy/25 to-transparent" />
                  <h4 className="absolute bottom-4 left-4 right-4 font-display text-xl font-extrabold leading-snug text-white">
                    {title}
                  </h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RehabIllustration({ variant, title }) {
  const scenes = {
    stroke: (
      <>
        <rect x="38" y="92" width="244" height="12" rx="6" fill="#8AA0B2" />
        <rect x="58" y="92" width="8" height="72" rx="4" fill="#8AA0B2" />
        <rect x="254" y="92" width="8" height="72" rx="4" fill="#8AA0B2" />
        <circle cx="160" cy="66" r="18" fill="#F0A58A" />
        <path d="M145 64c5-18 24-19 32-5-7-1-14-4-20-10-2 6-6 10-12 15z" fill="#17324D" />
        <path d="M143 86h36l10 54h-54l8-54z" fill="#86CFF4" />
        <path d="M140 141h20l-8 43h-14l2-43z" fill="#2769C7" />
        <path d="M162 141h20l9 43h-14l-15-43z" fill="#1C4EA8" />
        <path d="M129 92c-25 7-37 24-36 52" stroke="#0E8F87" strokeWidth="12" strokeLinecap="round" fill="none" />
        <circle cx="100" cy="67" r="16" fill="#E99A7C" />
        <path d="M84 66c4-19 26-19 31-2-8 1-17-1-25-8 0 5-2 8-6 10z" fill="#5B210F" />
        <path d="M86 86h28l5 55H81l5-55z" fill="#0E8F87" />
        <path d="M98 141h13l4 43H99l-1-43z" fill="#1855B8" />
        <path d="M84 141h13l-8 43H73l11-43z" fill="#2769C7" />
        <path d="M201 85c-12 8-18 22-18 44" stroke="#0E8F87" strokeWidth="14" strokeLinecap="round" fill="none" />
        <path d="M205 87h34l-4 58h-36l6-58z" fill="#0E8F87" />
        <circle cx="223" cy="64" r="17" fill="#E69B7C" />
        <path d="M207 58c6-18 27-19 35-4-9 0-19-3-28-10-1 6-3 10-7 14z" fill="#6B260F" />
        <path d="M204 145h14l-5 42h-16l7-42z" fill="#1855B8" />
        <path d="M224 145h14l10 42h-16l-8-42z" fill="#0F3F9B" />
      </>
    ),
    sports: (
      <>
        <rect x="46" y="145" width="210" height="18" rx="9" fill="#9A2878" />
        <rect x="58" y="163" width="8" height="40" fill="#8AA0B2" />
        <rect x="232" y="163" width="8" height="40" fill="#8AA0B2" />
        <circle cx="139" cy="81" r="17" fill="#E99A7C" />
        <path d="M124 78c8-17 25-19 33-5-11 1-21-3-29-11 0 6-1 11-4 16z" fill="#17324D" />
        <path d="M122 102h42l9 45H105l17-45z" fill="#86CFF4" />
        <path d="M107 145h48l-26 36h-19l17-21-35-4 15-11z" fill="#D7A1BB" />
        <path d="M158 145h43l26 25-12 13-37-26-20-12z" fill="#F0A58A" />
        <path d="M87 105c-28 5-41 21-42 48" stroke="#0E8F87" strokeWidth="13" strokeLinecap="round" fill="none" />
        <circle cx="68" cy="82" r="16" fill="#E99A7C" />
        <path d="M54 81c3-18 23-22 31-6-10 2-19-1-27-8 0 5-1 9-4 14z" fill="#751D11" />
        <path d="M52 101h31l7 43H45l7-43z" fill="#0E8F87" />
        <path d="M200 93h34l-3 61h-39l8-61z" fill="#0E8F87" />
        <circle cx="219" cy="70" r="16" fill="#E99A7C" />
        <path d="M203 65c4-17 23-21 34-7-8 2-18-1-26-9-1 6-4 11-8 16z" fill="#6B260F" />
        <path d="M193 110c-21 9-30 21-31 39" stroke="#0E8F87" strokeWidth="12" strokeLinecap="round" fill="none" />
        <rect x="158" y="112" width="26" height="14" rx="3" fill="#1F2937" />
      </>
    ),
    orthopedic: (
      <>
        <rect x="58" y="126" width="196" height="20" rx="10" fill="#9A2878" />
        <rect x="72" y="146" width="8" height="52" fill="#8AA0B2" />
        <rect x="232" y="146" width="8" height="52" fill="#8AA0B2" />
        <circle cx="151" cy="67" r="18" fill="#F0A58A" />
        <path d="M134 63c7-20 29-20 37-3-12 1-22-3-31-11-1 6-3 11-6 14z" fill="#17324D" />
        <path d="M132 89h38l12 40h-62l12-40z" fill="#86CFF4" />
        <path d="M122 129h44l-17 45h-18l4-30-33-4 20-11z" fill="#F0A58A" />
        <path d="M165 129h26l30 22-10 14-42-16-4-20z" fill="#AAB3C2" />
        <rect x="185" y="144" width="31" height="18" rx="4" fill="#1F2937" />
        <circle cx="78" cy="74" r="16" fill="#E99A7C" />
        <path d="M64 72c4-16 23-19 30-5-10 2-18-1-26-8 0 5-1 9-4 13z" fill="#751D11" />
        <path d="M61 94h31l5 53H56l5-53z" fill="#0E8F87" />
        <path d="M91 121c22 6 39 15 51 27" stroke="#0E8F87" strokeWidth="11" strokeLinecap="round" fill="none" />
        <circle cx="226" cy="82" r="16" fill="#E99A7C" />
        <path d="M209 77c7-18 27-19 34-2-11 0-21-4-28-11-1 6-3 10-6 13z" fill="#6B260F" />
        <path d="M211 102h32l-4 55h-36l8-55z" fill="#0E8F87" />
        <path d="M211 117c-19 8-31 19-36 33" stroke="#0E8F87" strokeWidth="11" strokeLinecap="round" fill="none" />
      </>
    ),
    neurological: (
      <>
        <rect x="55" y="132" width="205" height="16" rx="8" fill="#8AA0B2" />
        <rect x="70" y="148" width="8" height="48" fill="#8AA0B2" />
        <rect x="239" y="148" width="8" height="48" fill="#8AA0B2" />
        <path d="M140 72c-7-22 9-38 27-31 4-11 21-8 25 4 15 2 20 22 8 32 5 14-8 27-22 21-9 11-29 5-29-9-5-2-8-8-9-17z" fill="#86CFF4" />
        <path d="M161 48v45M180 47v50M151 69h52M156 85h38" stroke="#0E8F87" strokeWidth="5" strokeLinecap="round" />
        <circle cx="135" cy="102" r="16" fill="#F0A58A" />
        <path d="M121 100c5-17 24-18 31-4-10 2-19-1-26-8-1 5-2 9-5 12z" fill="#17324D" />
        <path d="M120 122h31l10 47h-49l8-47z" fill="#86CFF4" />
        <path d="M109 168h20l-10 35h-16l6-35z" fill="#2769C7" />
        <path d="M136 168h19l13 35h-16l-16-35z" fill="#1855B8" />
        <circle cx="220" cy="99" r="16" fill="#E99A7C" />
        <path d="M204 95c7-17 25-18 33-3-11 0-20-3-28-11-1 6-2 10-5 14z" fill="#6B260F" />
        <path d="M204 120h33l-4 57h-38l9-57z" fill="#0E8F87" />
        <path d="M202 134c-18 8-31 18-40 31" stroke="#0E8F87" strokeWidth="11" strokeLinecap="round" fill="none" />
        <path d="M151 133c18 8 30 18 37 31" stroke="#86CFF4" strokeWidth="10" strokeLinecap="round" fill="none" />
      </>
    ),
    geriatric: (
      <>
        <rect x="112" y="90" width="103" height="79" rx="14" fill="#8AA0B2" opacity="0.35" />
        <circle cx="139" cy="76" r="17" fill="#F0C0A8" />
        <path d="M124 74c4-16 23-21 32-7-8 2-18-1-26-8-1 6-3 11-6 15z" fill="#D8DCE3" />
        <path d="M120 99h38l8 56h-54l8-56z" fill="#86CFF4" />
        <path d="M113 154h18l-8 43h-16l6-43z" fill="#2769C7" />
        <path d="M140 154h18l11 43h-16l-13-43z" fill="#1855B8" />
        <path d="M173 83h33l-3 63h-39l9-63z" fill="#0E8F87" />
        <circle cx="190" cy="62" r="16" fill="#E99A7C" />
        <path d="M175 58c6-17 25-19 33-3-10 1-20-2-28-10-1 6-2 10-5 13z" fill="#6B260F" />
        <path d="M165 105c-19 11-31 24-38 42" stroke="#0E8F87" strokeWidth="11" strokeLinecap="round" fill="none" />
        <path d="M78 142h78M78 142v55M156 142v55M78 166h78" stroke="#657A8D" strokeWidth="7" strokeLinecap="round" fill="none" />
      </>
    ),
    fracture: (
      <>
        <rect x="65" y="122" width="190" height="19" rx="9" fill="#9A2878" />
        <rect x="78" y="141" width="8" height="54" fill="#8AA0B2" />
        <rect x="231" y="141" width="8" height="54" fill="#8AA0B2" />
        <circle cx="145" cy="67" r="18" fill="#F0A58A" />
        <path d="M128 63c6-18 27-20 36-4-11 1-21-3-29-11-1 7-3 11-7 15z" fill="#17324D" />
        <path d="M126 90h39l11 34h-64l14-34z" fill="#86CFF4" />
        <path d="M115 124h36l-18 45h-18l5-27-25-6 20-12z" fill="#F0A58A" />
        <path d="M154 124h36l31 18-8 18-44-10-15-26z" fill="#E8EEF3" />
        <rect x="191" y="136" width="32" height="21" rx="5" fill="#E8EEF3" stroke="#8AA0B2" strokeWidth="3" />
        <path d="M88 99h31l4 57H84l4-57z" fill="#0E8F87" />
        <circle cx="105" cy="76" r="16" fill="#E99A7C" />
        <path d="M90 73c4-17 24-19 32-4-10 2-19-1-28-8 0 5-1 9-4 12z" fill="#751D11" />
        <path d="M121 120c22 6 39 14 52 25" stroke="#0E8F87" strokeWidth="11" strokeLinecap="round" fill="none" />
        <path d="M233 104l24 92M261 104l-24 92" stroke="#657A8D" strokeWidth="6" strokeLinecap="round" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 320 220"
      role="img"
      aria-label={`${title} illustration`}
      className="h-full w-full bg-[#DDEEF8] transition duration-500 group-hover:scale-105"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="320" height="220" fill="#DDEEF8" />
      <ellipse cx="160" cy="202" rx="128" ry="14" fill="#B5CCDA" opacity="0.55" />
      {scenes[variant]}
    </svg>
  );
}

function Conditions() {
  return (
    <section id="conditions" className="py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow">Conditions We Treat</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight text-clinic-navy">
            Focused treatment for everyday pain and complex recovery needs.
          </h2>
          <p className="mt-5 leading-8 text-slate-700">
            From chronic pain to neurological rehabilitation, each plan starts with careful assessment and
            practical recovery goals.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {conditions.map((condition) => (
            <div key={condition} className="flex items-center gap-3 rounded-md bg-white p-4 shadow-sm">
              <CheckCircle2 className="h-5 w-5 flex-none text-clinic-teal" />
              <span className="font-semibold text-slate-700">{condition}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="bg-clinic-navy py-20 text-white">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-clinic-amber">
            Why Choose SMAART HEALTH CARE?
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            Modern clinical care with a friendly, practical recovery path.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 rounded-md bg-white/10 p-4">
                <BadgeCheck className="h-5 w-5 flex-none text-clinic-amber" />
                <span className="font-semibold">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          {[
            [Stethoscope, 'Assessment-led treatment'],
            [TestTube2, 'Lab and imaging support'],
            [Pill, 'Affordable pharmacy access'],
            [Baby, 'Pediatric to geriatric care'],
          ].map(([Icon, title]) => (
            <div key={title} className="rounded-md bg-white p-6 text-clinic-navy shadow-soft">
              <Icon className="h-8 w-8 text-clinic-teal" />
              <h3 className="mt-4 font-display text-xl font-extrabold">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Doctor() {
  return (
    <section id="doctor" className="bg-white py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="grid gap-6">
          <div className="overflow-hidden rounded-md bg-clinic-mint shadow-sm">
            <img
              src="/images/docter.jpeg"
              alt="Dr. J. Ilavarasan"
              className="h-[460px] w-full object-cover object-top"
            />
            <div className="p-8">
              <h2 className="font-display text-3xl font-extrabold text-clinic-navy">
                Dr. J. ILAVARASAN, BPT, MD (AM), S. ACUP., MIAP
              </h2>
              <p className="mt-3 font-bold text-clinic-teal">Founder & Lead Rehabilitation Therapist</p>
              <p className="mt-2 font-semibold text-slate-700">SMAART HEALTH CARE</p>
              <p className="mt-3 leading-7 text-slate-700">
                Neuromuscular & Myofascial Manual Therapist | Sujok Therapist
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-md bg-[#FFF7EA] shadow-sm">
            <img
              src="/images/OurLeadership.jpeg"
              alt="Mrs. Bessilya Divya"
              className="h-[600px] w-full object-cover object-top"
            />
            <div className="p-8">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-clinic-teal">Our Leadership</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-clinic-navy">
                Mrs.Bessilya Divya, M.A., B.Ed.
              </h2>
              <p className="mt-3 font-bold text-clinic-coral">
                Administrative & Special Education Professional
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="eyebrow">Meet Our Chief Physiotherapist</p>
          <h3 className="mt-3 font-display text-4xl font-extrabold leading-tight text-clinic-navy">
            Founder & Lead Rehabilitation Therapist
          </h3>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            Dr. J. Ilavarasan is an experienced rehabilitation professional with more than 16 years of clinical experience in the fields of sports medicine, physical rehabilitation, pain management, and functional recovery.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Over the course of his professional journey, he has worked with patients across various institutes and clinical settings, providing individualized rehabilitation care for a wide range of musculoskeletal and neuromuscular conditions.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            With extensive hands-on clinical experience, Dr. Ilavarasan has treated more than 20,000 patients, helping individuals improve movement, reduce pain, restore function, and return to their daily activities with greater confidence.
          </p>
          <div className="mt-8 rounded-md bg-[#F8FBFB] p-6">
            <h4 className="font-display text-xl font-extrabold text-clinic-navy">Areas of Expertise</h4>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {doctorExpertise.map((item) => (
                <div key={item} className="flex gap-3 rounded-md bg-white p-3 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-clinic-teal" />
                  <span className="font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-md border-l-4 border-clinic-coral bg-[#FFF6F3] p-6">
              <h4 className="font-display text-xl font-extrabold text-clinic-navy">Our Approach</h4>
              <p className="mt-3 leading-8 text-slate-700">
                At SMAART HEALTH CARE, Dr. Ilavarasan focuses on understanding the individual rather than treating only the symptoms. His approach combines clinical assessment, hands-on therapy, rehabilitation exercises, functional training, and individualized care plans according to each patient's needs.
              </p>
            </div>
            <div className="rounded-md border-l-4 border-clinic-teal bg-clinic-mint p-6">
              <h4 className="font-display text-xl font-extrabold text-clinic-navy">His Vision</h4>
              <p className="mt-3 leading-8 text-slate-700">
                To provide accessible, evidence-informed, personalized rehabilitation care under one roof, helping every individual move better, live better, and stay healthy.
              </p>
            </div>
          </div>
          <div className="mt-8 rounded-md bg-[#F8FBFB] p-6">
            <p className="eyebrow">Our Leadership</p>
            <h4 className="mt-3 font-display text-2xl font-extrabold text-clinic-navy">
              Mrs.Bessilya Divya, M.A., B.Ed.
            </h4>
            <p className="mt-2 font-bold text-clinic-teal">
              Administrative & Special Education Professional
            </p>
            <p className="mt-5 leading-8 text-slate-700">
              Bessilya Divya brings valuable experience in special education, administration, and patient support to SMAART HEALTH CARE. She oversees administrative coordination and contributes to creating a compassionate, organized, and patient-friendly environment.
            </p>
            <p className="mt-5 leading-8 text-slate-700">
              Her experience in special education strengthens our commitment to holistic, family-centred rehabilitation and healthcare, ensuring that every patient and family receives caring guidance and support.
            </p>
            <p className="mt-5 font-bold leading-8 text-clinic-navy">
              Together, our leadership team is committed to delivering holistic rehabilitation and healthcare under one roof.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-20">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Patient Testimonials</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight text-clinic-navy">
            Trusted care from real recovery experiences.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.quote} className="rounded-md bg-white p-6 shadow-sm">
              <blockquote className="text-lg font-semibold leading-8 text-clinic-navy">"{item.quote}"</blockquote>
              <figcaption className="mt-5 text-sm font-bold text-clinic-teal">{item.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="bg-white py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">Frequently Asked Questions</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight text-clinic-navy">
            Quick answers before your visit.
          </h2>
        </div>
        <div className="grid gap-4">
          {faqs.map(([question, answer]) => (
            <div key={question} className="rounded-md border border-slate-200 p-5">
              <h3 className="font-display text-lg font-extrabold text-clinic-navy">{question}</h3>
              <p className="mt-2 leading-7 text-slate-600">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Appointment() {
  const [appointmentStatus, setAppointmentStatus] = useState('');

  const handleAppointmentSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name')?.toString().trim();
    const center = formData.get('center')?.toString().trim();
    const phone = formData.get('phone')?.toString().trim();

    if (!name || !phone) {
      setAppointmentStatus('Please enter your name and phone number.');
      return;
    }

    try {
      await fetch('https://mydreamstechnology.in/api-mail/mailapi.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          center,
          phone,
        }),
      });
      form.reset();
      setAppointmentStatus('Appointment request sent successfully.');
    } catch {
      setAppointmentStatus('Unable to send now. Please call or WhatsApp 74491 44440.');
    }
  };

  return (
    <section id="appointment" className="bg-[#EAF7FC] py-16 sm:py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl rounded-md bg-white p-6 shadow-soft sm:p-8">
          <h3 className="font-display text-3xl font-extrabold text-[#2B3037]">Book an Appointment</h3>
          <form
            className="mt-6 grid gap-4"
            onSubmit={handleAppointmentSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              required
              className="focus-ring h-14 w-full rounded-none border border-slate-300 px-4 text-slate-700 placeholder:text-slate-400"
            />
            <label className="relative block">
              <select
                name="center"
                defaultValue="Tiruvannamalai Main Center"
                className="focus-ring h-14 w-full appearance-none rounded-none border border-slate-300 bg-white px-4 pr-11 text-slate-700"
              >
                <option>Tiruvannamalai Main Center</option>
                <option>Branch1 - Big street near Gandhi statue</option>
                <option>Branch2 - Devarchikanahalli, Bengaluru</option>
                <option>Online Consultation</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter Phone Number"
              required
              className="focus-ring h-14 w-full rounded-none border border-slate-300 px-4 text-slate-700 placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="focus-ring mt-5 h-14 rounded-none bg-clinic-amber font-bold text-clinic-navy transition hover:bg-[#e8ab31]"
            >
              Submit
            </button>
            {appointmentStatus && (
              <p className="text-sm font-semibold text-clinic-teal" role="status">
                {appointmentStatus}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const branches = [
    ['SMAART HEALTH CARE', '4, Sriram Nagar, Thaneerpanthal, Near Government School, Kilsirupakkam, Tiruvannamalai - 606604'],
    ['Branch1', '108/90, Big street near Gandhi statue Tiruvannamalai 606601.'],
    ['Branch2', 'opposite to stone Park, Devarchikanahalli, Bengaluru 560076'],
  ];
  const mapLocations = [
    {
      title: 'Main Branch',
      address:
        '4, Sriram Nagar, Thaneerpanthal, Near Government School, Kilsirupakkam, Tiruvannamalai - 606604',
      embed:
        'https://maps.google.com/maps?q=12.1745642%2C78.9957648&t=k&z=15&ie=UTF8&iwloc=&output=embed',
      link:
        'https://www.google.com/maps/place/SMAART+HEALTHCARE/@12.1741568,78.9945097,399m/data=!3m1!1e3!4m6!3m5!1s0x3bac95be6c3e96fb:0xc60b29bb524d87f5!8m2!3d12.1745642!4d78.9957648!16s%2Fg%2F11nt_4b8rm?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D',
    },
    {
      title: 'Branch1',
      address: '108/90, Big street near Gandhi statue Tiruvannamalai 606601.',
      embed:
        'https://maps.google.com/maps?q=12.2338989%2C79.0695799&t=k&z=15&ie=UTF8&iwloc=&output=embed',
      link:
        'https://www.google.com/maps/place/SMAART+HEALTH+CARE+Tiruvannamalai/@12.2339718,79.0693836,82m/data=!3m1!1e3!4m6!3m5!1s0x3bacc1801616c883:0xb3dc4a29767f7030!8m2!3d12.2338989!4d79.0695799!16s%2Fg%2F11zh6pd4_7?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D',
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Contact Us</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight text-clinic-navy">
            Visit the nearest SMAART HEALTH CARE center.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {branches.map(([title, address]) => (
            <div key={title} className="rounded-md bg-white p-6 shadow-sm">
              <MapPin className="h-7 w-7 text-clinic-coral" />
              <h3 className="mt-4 font-display text-xl font-extrabold text-clinic-navy">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{address}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <h3 className="font-display text-2xl font-extrabold text-clinic-navy">Location Map</h3>
          <div className="mt-5 grid gap-6 lg:grid-cols-2">
            {mapLocations.map((location) => (
              <article key={location.title} className="overflow-hidden rounded-md bg-white shadow-sm">
                <iframe
                  title={`${location.title} map`}
                  src={location.embed}
                  className="h-72 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="grid h-10 w-10 flex-none place-items-center rounded-md bg-clinic-mint text-clinic-teal">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <h4 className="font-display text-xl font-extrabold text-clinic-navy">{location.title}</h4>
                      <p className="mt-2 leading-7 text-slate-600">{location.address}</p>
                    </div>
                  </div>
                  <a
                    href={location.link}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-clinic-teal px-4 py-3 text-sm font-bold text-white transition hover:bg-[#0b7d76]"
                  >
                    <MapPin className="h-4 w-4" />
                    Open in Google Maps
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-4 rounded-md bg-white p-6 shadow-sm md:grid-cols-3">
          <ContactLine icon={Phone} label="Phone / WhatsApp" value="74491 44440" href="tel:+917449144440" />
          <ContactLine icon={Phone} label="Whatsapp" value="7449144440" href="https://wa.me/917449144440" />
          {/* <ContactLine icon={Mail} label="Email" value="smaarthealthcare@gmail.com" href="mailto:smaarthealthcare@gmail.com" /> */}
          <ContactLine icon={Mail} label="Email" value="smaarthealthcarecentre@gmail.com" href="mailto:smaarthealthcarecentre@gmail.com" />
          {/* <ContactLine icon={Instagram} label="fb and instagram" value="smaarthealthcare" href="https://instagram.com/smaarthealthcare" />
          <ContactLine icon={MapPin} label="Website" value="smaarthealthcare.in" href="https://smaarthealthcare.in" />
          <ContactLine
            icon={MapPin}
            label="SMAART HEALTH CARE Tiruvannamalai"
            value="https://share.google/qMJC0xaXesS3Xg64D"
            href="https://share.google/qMJC0xaXesS3Xg64D"
          /> */}
        </div>
        <div className="mt-6 rounded-md bg-clinic-navy p-6 text-white shadow-soft">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-display text-2xl font-extrabold">Follow SMAART HEALTH CARE</h3>
              <p className="mt-2 text-white/75">fb and instagram: smaarthealthcare</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href="https://facebook.com/smaarthealthcare"
                target="_blank"
                rel="noreferrer"
                className="focus-ring flex items-center gap-3 rounded-md bg-white px-5 py-4 font-bold text-clinic-navy transition hover:bg-clinic-mint"
              >
                <span className="grid h-11 w-11 place-items-center rounded-md bg-[#1877F2] text-white">
                  <Facebook className="h-6 w-6" />
                </span>
                Facebook
              </a>
              <a
                href="https://instagram.com/smaarthealthcare"
                target="_blank"
                rel="noreferrer"
                className="focus-ring flex items-center gap-3 rounded-md bg-white px-5 py-4 font-bold text-clinic-navy transition hover:bg-clinic-mint"
              >
                <span className="grid h-11 w-11 place-items-center rounded-md bg-[#E4405F] text-white">
                  <Instagram className="h-6 w-6" />
                </span>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLine({ icon: Icon, label, value, href }) {
  return (
    <a href={href} className="focus-ring flex items-center gap-4 rounded-md p-2 transition hover:bg-clinic-mint">
      <span className="grid h-11 w-11 flex-none place-items-center rounded-md bg-clinic-mint text-clinic-teal">
        <Icon className="h-5 w-5" />
      </span>
      <span>
        <span className="block text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{label}</span>
        <span className="block break-words font-bold text-clinic-navy">{value}</span>
      </span>
    </a>
  );
}

export default App;

import type { Metadata } from "next";
import styles from "./page.module.css";
import ConsultationForm from './ConsultationForm'
import PopupForm from './PopupForm'

export const metadata: Metadata = {
  title: "Uttar Basti Therapy in Pune | SNDH Care – Specialized Ayurvedic Women's Wellness",
  description:
    "Doctor-guided Uttar Basti day-care Ayurvedic procedure at SNDH Care, Pune. Personalized wellness plans, holistic approach & professional clinical setup.",
  keywords:
    "Uttar Basti therapy Pune, Ayurvedic women's wellness, SNDH Care Panchakarma, Uttar Basti Baner Pune",
  robots: "index, follow",
  alternates: { canonical: "https://sndhcare.com/uttar-basti" },
  openGraph: {
    type: "website",
    url: "https://sndhcare.com/uttar-basti",
    title: "Uttar Basti Therapy in Pune | SNDH Care",
    description:
      "Specialized Ayurvedic women's wellness care. Doctor-guided day-care procedure at SNDH Care, Pune.",
    images: [{ url: "/images/og-uttar-basti.jpg" }],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "SNDH Care",
  url: "https://sndhcare.com",
  logo: "/images/sndh-logo.png",
  description: "SNDH Care offers specialized Ayurvedic Uttar Basti therapy in Pune.",
  telephone: ["+917230074009", "+917690032009"],
  email: "info@sndhcare.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Silviana Apartment, Near Gera Regent Park, Pan Card Road, Baner",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411045",
    addressCountry: "IN",
  },
  medicalSpecialty: "Ayurveda",
  openingHours: "Mo-Sa 09:00-19:00",
};

const benefits = [
  { label: "Supports Women's Reproductive Wellness" },
  { label: "Promotes Holistic Women's Health" },
  { label: "Supports Hormonal Balance" },
  { label: "Encourages Reproductive System Nourishment" },
  { label: "Personalized Ayurvedic Care" },
  { label: "Non-Surgical Ayurvedic Approach" },
  { label: "Doctor-Guided Procedure" },
  { label: "Day-Care Treatment" },
  { label: "Integrates with Holistic Wellness Programs" },
];

const whyChoose = [
  { title: "Experienced Ayurvedic Team", desc: "Our doctors bring years of specialized clinical experience in Panchakarma therapies." },
  { title: "Personalized Attention", desc: "Each patient receives focused, individualized care from consultation to follow-up." },
  { title: "Professional Clinical Setup", desc: "Modern, hygienic facilities designed to international wellness standards." },
  { title: "Wellness-Focused Approach", desc: "We focus on long-term well-being and sustainable health outcomes." },
];

const faqs = [
  {
    q: "What is Uttar Basti therapy?",
    a: "Uttar Basti is a specialized Ayurvedic procedure where medicated oils or herbal preparations are administered through the urinary or reproductive tract. It is a classical Panchakarma therapy aimed at promoting wellness of the pelvic and reproductive system.",
  },
  {
    q: "Who is Uttar Basti suitable for?",
    a: "Uttar Basti is generally recommended for adult women experiencing concerns related to urinary health, menstrual wellness, or reproductive health. An Ayurvedic consultation is required to assess individual suitability before proceeding.",
  },
  {
    q: "How many sessions are typically recommended?",
    a: "The number of sessions depends on the individual's constitution (Prakriti), health history, and wellness goals. Our doctors will design a personalized protocol after an initial consultation — typically 7 to 21 sessions.",
  },
  {
    q: "Is the procedure safe and comfortable?",
    a: "When performed by trained Ayurvedic practitioners in a clinical setting, Uttar Basti is a gentle procedure. Patient comfort and safety are our foremost priorities, and every step is conducted under doctor supervision.",
  },
  {
    q: "Do I need a prior consultation before the procedure?",
    a: "Yes. A thorough Ayurvedic consultation is mandatory. Our doctors assess your overall health, medical history, and individual suitability before recommending Uttar Basti therapy.",
  },
  {
    q: "What should I expect during and after the procedure?",
    a: "You will be guided through each step by our medical team. Post-procedure care instructions and dietary guidelines are provided. Follow-up appointments are scheduled to monitor your progress.",
  },
];

const galleryImages = [
  { src: "/images/gallery-reception.jpg", alt: "SNDH Care Reception Area" },
  { src: "/images/gallery-consultation.jpg", alt: "Consultation Room" },
  { src: "/images/gallery-therapy.jpg", alt: "Therapy Room" },
  { src: "/images/gallery-panchakarma.jpg", alt: "Panchakarma Setup" },
  { src: "/images/gallery-lounge.jpg", alt: "Waiting Lounge" },
  { src: "/images/gallery-team.jpg", alt: "Our Team" },
  { src: "/images/gallery-herbs.jpg", alt: "Ayurvedic Herbs" },
  { src: "/images/gallery-clinic.jpg", alt: "SNDH Care Clinic" },
];

const doctors = [
  {
    name: "Dr.Supriya Pawar",
    qual: ["B.A.M.S", "M.S (ENT & HEAD)", "M.S (Gynaec)"],
    spec: "Ayurvedic Women's Health Specialist",
    img: "/images/Doctor.jpg",
  },
  {
    name: "Dr. Yogita Jethava",
    qual: ["M.D. (Ayu.)"],
    spec: "Ayurvedic Women's Health Specialist",
    img: "/images/Dr-Yogita.jpg",
  },
];

const whatsappSvg = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function UttarBastiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ===== NAVBAR ===== */}
      <header className={styles.navbar} role="banner">
        <div className={`${styles.container} ${styles.navInner}`}>
          <img src="/images/sndh-logo.png" alt="SNDH Care Logo" className={styles.logoImg} width={90} height={40} />
        </div>
      </header>

      <main className={styles.main}>

        {/* ===== SECTION 1: HERO ===== */}
<section className={styles.hero} aria-label="Hero">
  <div className={styles.heroInner}>
    <picture>
      <source media="(max-width: 600px)" srcSet="/images/HeroSNDHMobileUI.png" />
      <img
        src="/images/HeroSNDH.png"
        alt="SNDH Care Ayurvedic Wellness"
        className={styles.heroImg}
      />
    </picture>
  </div>
</section>
        {/* ===== SECTION 2: ABOUT ===== */}
        <section className={styles.aboutSection} id="about" aria-labelledby="about-heading">
          <div className={styles.container}>
            <div className={styles.aboutContent}>
              <div className={styles.aboutLeft}>
                <h2 id="about-heading" className={styles.sectionTitle}>What Is Uttar Basti</h2>
                <div className={styles.aboutText}>
                  <p>
                    <br />Uttar Basti is a specialized Ayurvedic procedure described in
                    classical Ayurvedic texts. It is performed under the guidance of
                    qualified Ayurvedic practitioners and may be recommended as part
                    of an individualized wellness plan after a detailed consultation.
                  </p>
                  <p>
                    At SNDH Care, every individual's health needs are carefully
                    assessed before any therapy is recommended. Our focus is on
                    personalized care, professional supervision, and overall women's
                    wellness.
                  </p>
                </div>
              </div>
              <div className={styles.aboutImgWrap}>
                <img
                  src="/images/about-uttar-basti.jpg"
                  alt="Uttar Basti Ayurvedic therapy at SNDH Care"
                  className={styles.aboutImg}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 3: VIDEO ===== */}
        <section className={`${styles.videoSection} ${styles.darkSection}`} aria-labelledby="video-heading">
          <div className={styles.container}>
            <h2 id="video-heading" className={`${styles.sectionTitle} ${styles.pinkTitle}`}>
              Understand Uttar Basti Therapy from Our Experts
            </h2><br />
            <div className={styles.videoWrap}>
              <div className={styles.videoThumb}>
                <img src="/images/video-thumbnail.jpg" alt="Doctor explaining Uttar Basti therapy" className={styles.videoThumbImg} />
                <div className={styles.videoOverlay}>
                  <button suppressHydrationWarning className={styles.playBtn} aria-label="Play video">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.videoCta}>
              <a href="#lead-form" className={styles.btnPrimary}>Book Consultation</a>
            </div>
          </div>
        </section>

        {/* ===== SECTION: ICON STRIP ===== */}
        <section className={styles.iconStrip} aria-label="Key Highlights">
          <div className={styles.container}>
            <div className={styles.iconStripGrid}>
              <div className={styles.iconStripItem}>
                <img
                  src="/images/doctorguidance.jpg"
                  alt="Doctor Guidance"
                  className={styles.iconStripImg}
                  width={80}
                  height={80}
                />
                <p className={styles.iconStripLabel}>Doctor Guidance</p>
              </div>
              <div className={styles.iconStripItem}>
                <img
                  src="/images/personalizedtreatment.jpg"
                  alt="Personalized Wellness Plans"
                  className={styles.iconStripImg}
                  width={80}
                  height={80}
                />
                <p className={styles.iconStripLabel}>Personalized Treatment</p>
              </div>
              <div className={styles.iconStripItem}>
                <img
                  src="/images/rootednature.jpg"
                  alt="Holistic Approach"
                  className={styles.iconStripImgNoFilter}
                  width={80}
                  height={80}
                />
                <p className={styles.iconStripLabel}>Rooted In Nature</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION: IMAGE LEFT ===== */}
<section className={styles.imageLeftSection} aria-label="Therapy Visual">
  <div className={styles.container}>
    <div className={styles.imageLeftImgWrap}>
      {/* Desktop image */}
      <img
        src="/images/Uttar Basti-SNDH Banerwebpage.png"
        alt="Uttar Basti procedure setup at SNDH Care"
        className={`${styles.imageLeftImg} ${styles.imageLeftImgDesktop}`}
      />
      {/* Mobile image */}
      <img
        src="/images/Uttar Basti - SNDH Baner.png"
        alt="Uttar Basti procedure setup at SNDH Care"
        className={`${styles.imageLeftImg} ${styles.imageLeftImgMobile}`}
      />
    </div>
  </div>
</section>

        {/* ===== SECTION: WELLNESS AREAS ===== */}
        <section className={styles.wellnessSection} aria-labelledby="wellness-heading">
          <div className={styles.container}>
            <h2 id="wellness-heading" className={`${styles.sectionTitle} ${styles.light}`}>
              Common Wellness Areas Where Uttar Basti May Be Considered
            </h2>
            <p className={`${styles.sectionSub} ${styles.light}`} style={{ color: "#ffffff" }}>
            Traditional Ayurvedic therapy that supports women's health and restores natural balance.
          </p>
            <div className={styles.wellnessGrid}>
              {[
                "Women's Reproductive Wellness",
                "Menstrual Health Support",
                "Hormonal Wellness Support",
                "PCOS / PCOD Wellness Programs",
                "Gynaecological Wellness Programs",
                "Fertility Wellness Consultations",
                "Tubal Blockage",
                "Low AMH",
                "Fibroid",
              ].map((item) => (
                <div key={item} className={styles.wellnessChip}>{item}</div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 4: DOCTORS ===== */}
        <section className={styles.doctorsSection} id="doctors" aria-labelledby="doctors-heading">
          <div className={styles.container}>
            <h2 id="doctors-heading" className={`${styles.sectionTitle} ${styles.pinkTitle}`}>Meet Our Doctors</h2>
            <p className={styles.sectionSub}>
              Our team of experienced Ayurvedic doctors brings specialized expertise in women's wellness and Panchakarma therapies.
            </p>
            <div className={styles.doctorsGrid}>
              {doctors.map((doc) => (
                <div key={doc.name} className={styles.doctorCard}>
                  <div className={styles.doctorImgWrap}>
                    <img src={doc.img} alt={`${doc.name} – SNDH Care`} className={styles.doctorImg} />
                  </div>
                  <div className={styles.doctorInfo}>
                    <h3 className={styles.doctorName}>{doc.name}</h3>
                    <p className={styles.doctorQual}>
                      {doc.qual.map((q, i) => (
                        <span key={i} style={{ display: "block" }}>{q}</span>
                      ))}
                    </p>
                    <p className={styles.doctorSpec}>Specialization: {doc.spec}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 5: BENEFITS ===== */}
        <section className={`${styles.benefitsSection} ${styles.pinkBg}`} aria-labelledby="benefits-heading">
          <div className={styles.container}>
            <h2 id="benefits-heading" className={styles.sectionTitle}>Benefits of Professional Ayurvedic Care</h2>
            <p className={styles.sectionSub}>
              Choosing a clinical, doctor-guided approach ensures safety, personalization, and the best possible wellness outcomes.
            </p>
            <div className={styles.benefitsGrid}>
              {benefits.map((b) => (
                <div key={b.label} className={styles.benefitBox}>
                  <h4 className={styles.benefitLabel}>{b.label}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 6: GALLERY ===== */}
        <section className={styles.gallerySection} aria-labelledby="gallery-heading">
          <div className={styles.container}>
            <h2 id="gallery-heading" className={`${styles.sectionTitle} ${styles.pinkTitle}`}>SNDH Care Gallery</h2>
            <p className={styles.sectionSub}>A glimpse into our clinic — designed for your comfort, care, and wellness.</p>
            <div className={styles.galleryGrid}>
              {galleryImages.map((img) => (
                <figure key={img.src} className={styles.galleryItem}>
                  <img src={img.src} alt={img.alt} loading="lazy" />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 7: WHY CHOOSE ===== */}
        <section className={styles.whySection} aria-labelledby="why-heading">
          <div className={styles.container}>
            <h2 id="why-heading" className={`${styles.sectionTitle} ${styles.light}`}>Why Choose SNDH Care</h2>
            <p className={`${styles.sectionSub} ${styles.light}`}>
              At SNDH, we offer personalized Ayurvedic and Naturopathic care focused on supporting balance,
               wellness, and overall health naturally.
            </p>
            <div className={styles.whyGrid}>
              {whyChoose.map((w) => (
                <div key={w.title} className={styles.whyCard}>
                  <h4 className={styles.whyTitle}>{w.title}</h4>
                  <p className={styles.whyDesc}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 8: FAQ ===== */}
        <section className={styles.faqSection} id="faq" aria-labelledby="faq-heading">
          <div className={`${styles.container} ${styles.faqInner}`}>
            <h2 id="faq-heading" className={`${styles.sectionTitle} ${styles.pinkTitle}`}>Frequently Asked Questions</h2>
            <div className={styles.faqList} role="list">
              {faqs.map((faq) => (
                <details key={faq.q} className={styles.faqItem} role="listitem">
                  <summary className={styles.faqQ}>{faq.q}</summary>
                  <div className={styles.faqA}>{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 9: LEAD BLOCK ===== */}
        <section className={`${styles.leadSection} ${styles.pinkBg}`} aria-label="Book Consultation">
          <div className={styles.container}>
            <div className={styles.leadInner}>
              <div className={styles.leadText}>
                <h2>Schedule Your Consultation</h2>
                <p>
                  Take the first step towards your wellness journey. Our doctors will assess your individual
                  needs and design a personalized care plan for you.
                </p>
                <a href="https://wa.me/917230074009" className={styles.btnWhatsapp} target="_blank" rel="noopener noreferrer">
                  {whatsappSvg} WhatsApp Now
                </a>
              </div>
              <ConsultationForm />
            </div>
          </div>
        </section>
      </main>

      {/* ===== SECTION 10: FOOTER ===== */}
      <footer className={`${styles.footer} ${styles.darkSection}`} role="contentinfo">
        <div className={`${styles.container} ${styles.footerInner}`}>
          <div className={styles.footerCol}>
            <p className={styles.footerAbout}>Ayurvedic wellness rooted in tradition, personalised for you.</p>
          </div>
          <div className={styles.footerCol}>
            <h4 className={styles.footerHeading}>Contact Us</h4>
            <ul className={styles.footerContact}>
              <li>
                <svg className={styles.fcIcon} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M2 3.5A1.5 1.5 0 013.5 2h2.879a1.5 1.5 0 011.415 1.004l.86 2.579a1.5 1.5 0 01-.344 1.561L6.94 8.53a11.05 11.05 0 005.53 5.53l1.386-1.371a1.5 1.5 0 011.561-.344l2.579.86A1.5 1.5 0 0118 14.62V17.5a1.5 1.5 0 01-1.5 1.5C8.716 19 1 11.284 1 3.5A1.5 1.5 0 012 2v1.5z" />
                </svg>
                <a href="tel:+917230074009">+91 72300 74009</a>
              </li>
              <li>
                <svg className={styles.fcIcon} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M2 3.5A1.5 1.5 0 013.5 2h2.879a1.5 1.5 0 011.415 1.004l.86 2.579a1.5 1.5 0 01-.344 1.561L6.94 8.53a11.05 11.05 0 005.53 5.53l1.386-1.371a1.5 1.5 0 011.561-.344l2.579.86A1.5 1.5 0 0118 14.62V17.5a1.5 1.5 0 01-1.5 1.5C8.716 19 1 11.284 1 3.5A1.5 1.5 0 012 2v1.5z" />
                </svg>
                <a href="tel:+917690032009">+91 76900 32009</a>
              </li>
              <li>
                <svg className={styles.fcIcon} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M2.94 4.44A2 2 0 014.5 4h11a2 2 0 011.56.44L10 11 2.94 4.44zM2 6.366V14a2 2 0 002 2h12a2 2 0 002-2V6.366l-7.447 6.697a1 1 0 01-1.106 0L2 6.366z" />
                </svg>
                <a href="mailto:info@sndhcare.com">info@sndhcare.com</a>
              </li>
              <li className={styles.address}>
                <svg className={styles.fcIcon} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.464-.966 2.315-1.773C15.253 15.045 17 12.65 17 9.5a7 7 0 10-14 0c0 3.15 1.747 5.545 3.312 7.077.851.807 1.695 1.39 2.316 1.773a13.76 13.76 0 00.757.433 5.819 5.819 0 00.281.14l.018.008.006.003zM10 11.5a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Silviana Apartment, Near Gera Regent Park, Pan Card Road, Baner, Pune – 411045</span>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4 className={styles.footerHeading}>Google Map</h4>
            <div className={styles.footerMap}>
              <iframe
                src="https://www.google.com/maps?q=SNDH+Care,+Silviana+Apartment,+Athashri+Society+Rd,+near+GERA+REGENT+PARK,+Baner,+Pune,+Maharashtra+411069&output=embed"
                width="100%"
                height="160"
                style={{ border: 0, borderRadius: 8 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SNDH Care Location"
              />
            </div>
            <div className={styles.socialLinks} style={{ marginTop: "1rem" }}>
              <a href="https://instagram.com/sndhcare" className={styles.socialBtn} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
                  <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0120.5 7.75v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zM12 7a5 5 0 100 10A5 5 0 0012 7zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm5.25-.75a.875.875 0 100 1.75.875.875 0 000-1.75z" />
                </svg>
              </a>
              <a href="https://facebook.com/sndhcare" className={styles.socialBtn} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>
            © 2025 SNDH Care. All rights reserved.{" "}
            <a href="/privacy-policy">Privacy Policy</a>{" "}
            |{" "}
            <a href="/terms">Terms &amp; Conditions</a>{" "}
            |{" "}
            <a href="/medical-disclaimer">Medical Disclaimer</a>
          </p>
        </div>
      </footer>

      {/* ===== POPUP ===== */}
      <PopupForm />
    </>
  );
}
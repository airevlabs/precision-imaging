import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Activity, Calendar, Search, Stethoscope, Heart, ShieldCheck, Info, CheckCircle2, Clock, ArrowRight, FileBadge, UserCheck, Eye, ShieldAlert, Sparkles, TrendingUp } from 'lucide-react';

const WellnessPreventive = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="!pt-32 lg:!pt-44 !pb-12 !bg-slate-50 !flex !flex-col !gap-8 sm:!gap-12 !font-sans">
      <Helmet>
        <title>Wellness & Preventive Ultrasound Screenings | Precision Imaging Downers Grove</title>
        <meta name="description" content="Proactive wellness ultrasound screenings for stroke prevention, heart health, and early detection. High-precision preventive imaging in Chicago suburbs." />
        <meta name="keywords" content="preventive ultrasound near me, stroke screening Chicago, carotid artery screening, AAA screening, wellness ultrasound package" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalService",
              "name": "Wellness & Preventive Imaging",
              "provider": {
                "@type": "MedicalOrganization",
                "name": "Precision Imaging",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Downers Grove",
                  "addressRegion": "IL"
                }
              },
              "description": "Proactive health screenings using non-invasive ultrasound to detect potential medical issues before symptoms appear."
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <header className="reveal-section opacity-0 translate-y-8 !bg-slate-900 !rounded-3xl !mx-4 md:!mx-auto md:!max-w-7xl !px-6 !py-20 md:!py-28 lg:!py-32 !text-white !relative !overflow-hidden transition-all duration-700 shadow-2xl">
        <div className="!absolute !inset-0 !opacity-10 !bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] !from-emerald-400 !to-transparent"></div>
        <div className="!relative !z-10 !max-w-4xl !mx-auto !text-center flex flex-col items-center">
          <span className="!uppercase !tracking-wider !text-emerald-300 !font-semibold !text-sm !mb-4 flex items-center gap-2">
            <Sparkles className="!w-4 !h-4" /> Proactive Health Journey
          </span>
          <h1 className="!text-5xl md:!text-6xl lg:!text-7xl !font-bold !mb-8 !text-white leading-tight !tracking-tight text-center">
            Wellness & <br className="hidden md:block" /> Preventive Screenings
          </h1>
          <p className="!text-xl md:!text-2xl !mb-10 max-w-3xl !text-slate-300 font-medium !leading-relaxed text-center">
            Catch potential health issues before they catch you. Non‑invasive, radiation‑free imaging for detailed insight and absolute peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://precisionimagingus.com/#/booking" className="!bg-blue-600 hover:!bg-blue-500 !px-8 !py-4 rounded-xl !font-semibold flex items-center justify-center transition hover:-translate-y-1 shadow-lg hover:shadow-blue-500/25 !text-white !text-lg">
              Book Appointment <Calendar className="!ml-2 !w-5 !h-5" />
            </a>
            <a href="https://precisionimagingus.com/#/contact" className="!bg-transparent border-2 !border-slate-600 hover:!border-white hover:!bg-white/10 !px-8 !py-4 rounded-xl !font-semibold flex items-center justify-center transition hover:-translate-y-1 !text-white !text-lg">
              Contact Us
            </a>
          </div>
        </div>
      </header>

      {/* Overview Section */}
      <section aria-labelledby="prevention-overview" className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6">
        <div className="!max-w-4xl !mx-auto !text-center">
          <h2 id="prevention-overview" className="!text-3xl md:!text-4xl !font-bold !text-slate-900 !mb-6 text-center">The Power of Proactive Imaging</h2>
          <div className="!bg-white !p-8 md:!p-12 !rounded-3xl !shadow-sm !border !border-slate-100">
            <p className="!text-lg md:!text-xl !text-slate-600 !leading-relaxed !mb-6 text-center">
              Modern medicine is moving from <strong>reactive</strong> to <strong>proactive</strong>. Many conditions, such as fatty liver disease or carotid artery plaque, don't show symptoms until they've progressed.
            </p>
            <p className="!text-lg md:!text-xl !text-slate-600 !leading-relaxed text-center">
              Our <strong>Wellness & Preventive Screenings</strong> are designed for asymptomatic individuals who want to take full control of their health roadmap using the same high-resolution technology used in diagnostic hospitals.
            </p>
          </div>
        </div>
      </section>

      {/* Screening Grid */}
      <section aria-labelledby="screening-options" className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6">
        <div className="!max-w-7xl !mx-auto">
          <h2 id="screening-options" className="!text-3xl md:!text-4xl !font-bold !text-slate-900 !text-center !mb-12">Preventive Screening Options</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <article className="!bg-white !rounded-3xl !p-8 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
              <div className="!bg-blue-50 !w-14 !h-14 !rounded-2xl flex items-center justify-center !mb-6 text-blue-600">
                <Activity className="!w-7 !h-7" />
              </div>
              <h3 className="!text-2xl !font-bold !text-slate-900 !mb-4">Stroke Prevention</h3>
              <p className="!text-slate-600 !leading-relaxed !flex-grow">
                Detailed Carotid Artery screening to detect plaque buildup and assess the risk of stroke long before symptoms occur.
              </p>
            </article>

            <article className="!bg-white !rounded-3xl !p-8 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-rose-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
              <div className="!bg-rose-50 !w-14 !h-14 !rounded-2xl flex items-center justify-center !mb-6 text-rose-600">
                <Heart className="!w-7 !h-7" />
              </div>
              <h3 className="!text-2xl !font-bold !text-slate-900 !mb-4">Heart & Aorta Health</h3>
              <p className="!text-slate-600 !leading-relaxed !flex-grow">
                Screening for Abdominal Aortic Aneurysms (AAA) and cardiac function evaluation to ensure your heart is operating at peak performance.
              </p>
            </article>

            <article className="!bg-white !rounded-3xl !p-8 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
              <div className="!bg-blue-50 !w-14 !h-14 !rounded-2xl flex items-center justify-center !mb-6 text-blue-600">
                <Stethoscope className="!w-7 !h-7" />
              </div>
              <h3 className="!text-2xl !font-bold !text-slate-900 !mb-4">Abdominal Wellness</h3>
              <p className="!text-slate-600 !leading-relaxed !flex-grow">
                A comprehensive look at your major organs—liver, gallbladder, kidneys, spleen, and pancreas—to screen for silent abnormalities.
              </p>
            </article>

            <article className="!bg-white !rounded-3xl !p-8 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
              <div className="!bg-blue-50 !w-14 !h-14 !rounded-2xl flex items-center justify-center !mb-6 text-blue-600">
                <Search className="!w-7 !h-7" />
              </div>
              <h3 className="!text-2xl !font-bold !text-slate-900 !mb-4">Thyroid Health Check</h3>
              <p className="!text-slate-600 !leading-relaxed !flex-grow">
                Early detection screening for thyroid nodules and cysts, providing a baseline for one of the body's most critical endocrine organs.
              </p>
            </article>

            <article className="!bg-white !rounded-3xl !p-8 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full relative overflow-hidden">
              <div className="!bg-blue-50 !w-14 !h-14 !rounded-2xl flex items-center justify-center !mb-6 text-blue-600">
                <ShieldCheck className="!w-7 !h-7" />
              </div>
              <h3 className="!text-2xl !font-bold !text-slate-900 !mb-4">Gender-Specific Wellness</h3>
              <p className="!text-slate-600 !leading-relaxed !flex-grow">
                Focused screenings including Pelvic wellness for women and Prostate/Bladder health checks for men.
              </p>
            </article>

            <article className="!bg-white !rounded-3xl !p-8 !shadow-sm hover:!shadow-xl !border !border-blue-200 hover:!border-blue-300 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full relative overflow-hidden ring-2 ring-blue-500/10">
              <div className="absolute top-0 right-0 !bg-blue-600 !text-white !text-[10px] !font-bold !px-3 !py-1 rounded-bl-xl uppercase tracking-tighter shadow-sm z-10">Most Popular</div>
              <div className="!bg-blue-100 !w-14 !h-14 !rounded-2xl flex items-center justify-center !mb-6 text-blue-700">
                <FileBadge className="!w-7 !h-7" />
              </div>
              <h3 className="!text-2xl !font-bold !text-slate-900 !mb-4">Full Wellness Package</h3>
              <p className="!text-slate-600 !leading-relaxed !flex-grow">
                Our ultimate screening package combining vascular, abdominal, and thyroid checks into a single, comprehensive health audit.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Early Detection Section */}
      <section aria-labelledby="early-detection" className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6">
        <div className="!max-w-5xl !mx-auto !bg-slate-900 !rounded-3xl !p-8 md:!p-12 !shadow-xl !text-white overflow-hidden relative">
          <div className="!absolute !top-0 !right-0 !opacity-5 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
            <ShieldAlert className="!w-96 !h-96" />
          </div>
          <div className="relative z-10">
            <h2 id="early-detection" className="!text-3xl md:!text-4xl !font-bold !text-white !mb-8">Catch it early. Keep it treated.</h2>
            <p className="!text-lg !text-slate-100 !font-medium !mb-10 !leading-relaxed max-w-2xl">
              Preventive screening is about more than just finding problems—it's about establishing a digital baseline of your internal health that can be referenced for years to come.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit"><TrendingUp className="!w-6 !h-6 !text-emerald-300" /></div>
                <div>
                  <h4 className="!text-xl !font-bold !mb-2 !text-white">Trend Tracking</h4>
                  <p className="!text-slate-100 !font-medium">Identify subtle changes over time by comparing year‑over‑year results, detecting issues before they become chronic.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit"><UserCheck className="!w-6 !h-6 !text-emerald-300" /></div>
                <div>
                  <h4 className="!text-xl !font-bold !mb-2 !text-white">Empowered Decisions</h4>
                  <p className="!text-slate-100 !font-medium">Equip your primary care doctor with detailed imaging reports that inform your lifestyle and medication choices.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit"><Eye className="!w-6 !h-6 !text-emerald-300" /></div>
                <div>
                  <h4 className="!text-xl !font-bold !mb-2 !text-white">Crystal Clarity</h4>
                  <p className="!text-slate-100 !font-medium">Get a "visual audit" of your internal organs using the highest grade of ultrasound resolution available in the suburbs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit"><ShieldCheck className="!w-6 !h-6 !text-emerald-300" /></div>
                <div>
                  <h4 className="!text-xl !font-bold !mb-2 !text-white">Zero Radiation</h4>
                  <p className="!text-slate-100 !font-medium">Ultrasound uses safe sound waves, making it the ideal choice for repeat, proactive wellness screenings.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Pay & Accessibility */}
      <section className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6">
        <div className="!max-w-7xl !mx-auto grid lg:grid-cols-2 gap-12">
          {/* Why Direct Access */}
          <div className="!bg-white !p-8 md:!p-12 !rounded-3xl !shadow-sm !border !border-slate-100 flex flex-col justify-center">
            <h2 className="!text-3xl !font-bold !text-slate-900 !mb-8 flex items-center gap-3">
              <CheckCircle2 className="!w-8 !h-8 !text-emerald-600" /> Direct-to-Patient Access
            </h2>
            <p className="!text-lg !text-slate-600 !mb-8">We believe that checking your internal health should be as easy as a routine blood test. Many patients choose us for:</p>
            <ul className="space-y-5 !mb-8">
              <li className="flex items-start">
                <div className="!bg-slate-100 !p-1.5 !rounded-full !mr-4 !mt-0.5"><CheckCircle2 className="!w-5 !h-5 !text-slate-700" /></div>
                <span className="!text-lg !text-slate-700"><strong>Transparent Self-Pay:</strong> Affordable flat-rate pricing for individuals without a doctor's referral.</span>
              </li>
              <li className="flex items-start">
                <div className="!bg-slate-100 !p-1.5 !rounded-full !mr-4 !mt-0.5"><CheckCircle2 className="!w-5 !h-5 !text-slate-700" /></div>
                <span className="!text-lg !text-slate-700"><strong>No Long Waits:</strong> Schedule your wellness audit quickly and get results within 48 hours.</span>
              </li>
              <li className="flex items-start">
                <div className="!bg-slate-100 !p-1.5 !rounded-full !mr-4 !mt-0.5"><CheckCircle2 className="!w-5 !h-5 !text-slate-700" /></div>
                <span className="!text-lg !text-slate-700"><strong>Radiologist Signed:</strong> Every wellness scan is interpreted by a Board-Certified radiologist.</span>
              </li>
            </ul>
          </div>

          {/* Simple Process */}
          <div className="!bg-white !p-8 md:!p-12 !rounded-3xl !shadow-sm !border !border-slate-100">
            <h2 className="!text-3xl !font-bold !text-slate-900 !mb-8 flex items-center gap-3">
              <Clock className="!w-8 !h-8 !text-blue-600" /> Professional Process
            </h2>
            <div className="!flex !flex-col !gap-8 !border-l-2 !border-slate-200 !ml-4 !py-4">
              <div className="!flex !gap-4 !items-start !-ml-[17px]">
                <div className="!w-8 !h-8 !rounded-full !bg-blue-600 !text-white !flex !items-center !justify-center !font-bold !flex-shrink-0 !border-4 !border-white !shadow-sm">1</div>
                <div className="!flex-1 !pt-0.5"><h4 className="!text-xl !font-bold !text-slate-900 !mb-2 !mt-0 text-left">Quick Booking</h4><p className="!text-slate-600 !leading-relaxed !m-0 text-left">Select your package online or via phone. No physician order is required for preventive screenings.</p></div>
              </div>
              <div className="!flex !gap-4 !items-start !-ml-[17px]">
                <div className="!w-8 !h-8 !rounded-full !bg-blue-600 !text-white !flex !items-center !justify-center !font-bold !flex-shrink-0 !border-4 !border-white !shadow-sm">2</div>
                <div className="!flex-1 !pt-0.5"><h4 className="!text-xl !font-bold !text-slate-900 !mb-2 !mt-0 text-left">The Screening</h4><p className="!text-slate-600 !leading-relaxed !m-0 text-left">Our technologist performs the scan in a comfortable, clinical environment. Most screenings take 15–30 minutes.</p></div>
              </div>
              <div className="!flex !gap-4 !items-start !-ml-[17px]">
                <div className="!w-8 !h-8 !rounded-full !bg-blue-600 !text-white !flex !items-center !justify-center !font-bold !flex-shrink-0 !border-4 !border-white !shadow-sm">3</div>
                <div className="!flex-1 !pt-0.5"><h4 className="!text-xl !font-bold !text-slate-900 !mb-2 !mt-0 text-left">Results Delivered</h4><p className="!text-slate-600 !leading-relaxed !m-0 text-left">Receive a professional report signed by a radiologist, ready to keep or share with your care team.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq" className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6">
        <div className="!max-w-4xl !mx-auto">
          <h2 id="faq" className="!text-3xl md:!text-4xl !font-bold !text-center !text-slate-900 !mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid gap-6">
            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">Do I need a doctor's order for a wellness screening? <span className="transition-transform group-open:rotate-180"><ChevronDownIcon /></span></summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">For preventive/elective screenings, we can perform the exam without a prior physician’s order. We provide the final report directly to you.</div>
            </details>
            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">Will my insurance cover a preventive scan? <span className="transition-transform group-open:rotate-180"><ChevronDownIcon /></span></summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">Insurance typically covers "diagnostic" scans (when you have symptoms). Elective wellness screenings are often not covered by traditional insurance, which is why we offer transparent self-pay rates.</div>
            </details>
            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">Is ultrasound as effective as a CT for screenings? <span className="transition-transform group-open:rotate-180"><ChevronDownIcon /></span></summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">Ultrasound is highly effective for soft tissue, organs, and vascular structures, and has the distinct advantage of using NO radiation, making it safer for routine preventive use.</div>
            </details>
            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">What age should I start having preventive scans? <span className="transition-transform group-open:rotate-180"><ChevronDownIcon /></span></summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">This varies by risk factor (family history, smoking, diabetes). Many start vascular screenings at 40 or 50, while abdominal wellness can be beneficial at any adult age for a baseline.</div>
            </details>
            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">How long until I receive my results? <span className="transition-transform group-open:rotate-180"><ChevronDownIcon /></span></summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">Most reports are ready within 24-48 hours. You will receive a copy that you can share with your primary care provider.</div>
            </details>
            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">What happens if the screening finds something suspicious? <span className="transition-transform group-open:rotate-180"><ChevronDownIcon /></span></summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">We will flag any significant findings in your report. You should take this report to your doctor for follow-up diagnostic testing or specialist referral.</div>
            </details>
            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">Is prep required for the abdominal wellness scan? <span className="transition-transform group-open:rotate-180"><ChevronDownIcon /></span></summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">Yes. For the best views of the liver, gallbladder, and pancreas, we recommend fasting (no food or drink except water) for 6–8 hours prior to the exam.</div>
            </details>
            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">Can I screen for more than one area at a time? <span className="transition-transform group-open:rotate-180"><ChevronDownIcon /></span></summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">Absolutely. Our "Full Wellness Package" covers vascular, abdominal, and thyroid areas in a single integrated appointment for maximum efficiency.</div>
            </details>
            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">Is the screening process invasive? <span className="transition-transform group-open:rotate-180"><ChevronDownIcon /></span></summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">Not at all. Ultrasound is completely external, using a small handheld probe to see inside the body. There are no needles and no discomfort.</div>
            </details>
            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">How often should I have a wellness screening? <span className="transition-transform group-open:rotate-180"><ChevronDownIcon /></span></summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">Many proactive patients choose an annual or biennial (every 2 years) wellness check to keep their health tracking up to date.</div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <footer className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6">
        <div className="!max-w-7xl !mx-auto !bg-slate-900 !rounded-3xl !p-10 md:!p-16 !text-center shadow-xl">
          <h2 className="!text-3xl md:!text-4xl !font-bold !text-white !mb-6 text-center">Your health. Your future. Your control.</h2>
          <p className="!text-xl !text-slate-300 !mb-10 !max-w-3xl !mx-auto text-center">Don't wait for symptoms to appear. Start your proactive health journey today with precision preventive imaging.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="https://precisionimagingus.com/#/booking" className="!bg-blue-600 hover:!bg-blue-500 !text-white !px-10 !py-5 rounded-xl !font-bold !text-xl flex items-center transition hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto justify-center">
              Book Appointment <ArrowRight className="!ml-3 !w-6 !h-6" />
            </a>
            <a href="https://precisionimagingus.com/#/contact" className="!bg-slate-800 hover:!bg-slate-700 !text-white !border !border-slate-600 hover:!border-slate-400 !px-10 !py-5 rounded-xl !font-bold !text-xl transition hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto justify-center flex items-center">
              Contact Us
            </a>
          </div>
        </div>
      </footer>

      {/* Local Service Area */}
      <section aria-labelledby="service-area" className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6 !py-8">
        <div className="!max-w-5xl !mx-auto !text-center">
          <h2 id="service-area" className="sr-only">Local Service Area</h2>
          <p className="!text-xs md:!text-sm !text-slate-400 !leading-relaxed inline-block text-center">
            <strong>Proudly serving patients for preventive care in:</strong> Downers Grove, Westmont, Clarendon Hills, Lisle, Oak Brook, Hinsdale, Darien, Willowbrook, Woodridge, Lombard, Glen Ellyn, Western Springs, Villa Park, Wheaton, Burr Ridge, Indian Head Park, Naperville, Elmhurst, Westchester, La Grange, Countryside, Carol Stream, Northlake, Oakbrook Terrace, Bolingbrook, Addison, Aurora, Brookfield, Berkeley, Hillside, Broadview, Roselle, Itasca, Bensenville, Lemont, Franklin Park, Schiller Park, River Forest, Forest Park, Maywood, Bellwood, Oak Park, Oak Forest, Tinley Park, Rolling Meadows, Ridgewood, Sauganash, Crest Hill, Mount Prospect, Niles, Crystal Lawns, Edgebrook, Mayfair, Joliet, Ingalls Park, East Joliet, South Elgin, Plum Grove Village, Winthrop Village, Fernway, Hoffman Estates, Albany Park, Creekside, Valley View, Raynor Park, Arlington Heights, Forest River, Lidice, Fernway Park, Lincolnwood, Morton Grove, Cherry Hill, Gougars, Fairfax Village, Sherwood Oaks, Clintonville, Coleman, and Schaumburg.
          </p>
        </div>
      </section>
    </div>
  );
};

const ChevronDownIcon = () => (
  <svg className="!w-6 !h-6 !text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export default WellnessPreventive;

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Activity, Calendar, Search, Stethoscope, Heart, ShieldCheck, Info, CheckCircle2, Clock, ArrowRight, FileBadge, ClipboardCheck, History, Eye, BarChart3 } from 'lucide-react';

const FollowUpSurveillance = () => {
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
        <title>Ultrasound Follow-Up & Surveillance | Precision Imaging Downers Grove</title>
        <meta name="description" content="Expert long-term surveillance and follow-up ultrasound for nodules, cysts, and chronic conditions. High-precision monitoring in the Chicago suburbs." />
        <meta name="keywords" content="ultrasound follow-up near me, nodule surveillance Chicago, chronic condition monitoring, thyroid nodule follow-up, AAA monitoring" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalService",
              "name": "Follow-Up & Surveillance Imaging",
              "provider": {
                "@type": "MedicalOrganization",
                "name": "Precision Imaging",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Downers Grove",
                  "addressRegion": "IL"
                }
              },
              "description": "Continuous monitoring of known medical findings using high-resolution ultrasound for comparative analysis and long-term care."
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <header className="reveal-section opacity-0 translate-y-8 !bg-slate-900 !rounded-3xl !mx-4 md:!mx-auto md:!max-w-7xl !px-6 !py-20 md:!py-28 lg:!py-32 !text-white !relative !overflow-hidden transition-all duration-700 shadow-2xl">
        <div className="!absolute !inset-0 !opacity-10 !bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] !from-blue-400 !to-transparent"></div>
        <div className="!relative !z-10 !max-w-4xl !mx-auto !text-center flex flex-col items-center">
          <span className="!uppercase !tracking-wider !text-blue-300 !font-semibold !text-sm !mb-4 flex items-center gap-2">
            <History className="!w-4 !h-4" /> Continuity of Care
          </span>
          <h1 className="!text-5xl md:!text-6xl lg:!text-7xl !font-bold !mb-8 !text-white leading-tight !tracking-tight text-center">
            Follow-Up & <br className="hidden md:block" /> Surveillance Imaging
          </h1>
          <p className="!text-xl md:!text-2xl !mb-10 max-w-3xl !text-slate-300 font-medium !leading-relaxed text-center">
            Precision monitoring for your long‑term health. Detailed comparative analysis to track changes in nodules, cysts, and chronic conditions.
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
      <section aria-labelledby="surveillance-overview" className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6">
        <div className="!max-w-4xl !mx-auto !text-center">
          <h2 id="surveillance-overview" className="!text-3xl md:!text-4xl !font-bold !text-slate-900 !mb-6 text-center">Why Monitoring Matters</h2>
          <div className="!bg-white !p-8 md:!p-12 !rounded-3xl !shadow-sm !border !border-slate-100">
            <p className="!text-lg md:!text-xl !text-slate-600 !leading-relaxed !mb-6 text-center">
              A single snapshot of your health is valuable, but <strong>surveillance</strong> provides the full story. Many medical findings, such as nodules or cysts, are benign but require regular monitoring to ensure they remain stable over time.
            </p>
            <p className="!text-lg md:!text-xl !text-slate-600 !leading-relaxed text-center">
              Our advanced ultrasound systems and expert radiologists specialize in <strong>comparative imaging</strong>, allowing us to detect even the most subtle changes between your current scan and previous results.
            </p>
          </div>
        </div>
      </section>

      {/* Surveillance Categories */}
      <section aria-labelledby="exam-categories" className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6">
        <div className="!max-w-7xl !mx-auto">
          <h2 id="exam-categories" className="!text-3xl md:!text-4xl !font-bold !text-slate-900 !text-center !mb-12">Surveillance & Follow-Up Areas</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <article className="!bg-white !rounded-3xl !p-8 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
              <div className="!bg-blue-50 !w-14 !h-14 !rounded-2xl flex items-center justify-center !mb-6 text-blue-600">
                <Search className="!w-7 !h-7" />
              </div>
              <h3 className="!text-2xl !font-bold !text-slate-900 !mb-4">Nodule Monitoring</h3>
              <p className="!text-slate-600 !leading-relaxed !flex-grow">
                Regular surveillance of thyroid, breast, or lung nodules to track size, composition, and vascularity over months or years.
              </p>
            </article>

            <article className="!bg-white !rounded-3xl !p-8 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
              <div className="!bg-rose-50 !w-14 !h-14 !rounded-2xl flex items-center justify-center !mb-6 text-rose-600">
                <Heart className="!w-7 !h-7" />
              </div>
              <h3 className="!text-2xl !font-bold !text-slate-900 !mb-4">Vascular Surveillance</h3>
              <p className="!text-slate-600 !leading-relaxed !flex-grow">
                Long-term monitoring of Abdominal Aortic Aneurysms (AAA) or carotid plaque stability to assess risk profiles and intervention needs.
              </p>
            </article>

            <article className="!bg-white !rounded-3xl !p-8 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
              <div className="!bg-blue-50 !w-14 !h-14 !rounded-2xl flex items-center justify-center !mb-6 text-blue-600">
                <ShieldCheck className="!w-7 !h-7" />
              </div>
              <h3 className="!text-2xl !font-bold !text-slate-900 !mb-4">Cyst Tracking</h3>
              <p className="!text-slate-600 !leading-relaxed !flex-grow">
                Surveillance of kidney cysts, liver lesions, or pelvic masses to ensure they remain benign and do not cause symptoms.
              </p>
            </article>

            <article className="!bg-white !rounded-3xl !p-8 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
              <div className="!bg-blue-50 !w-14 !h-14 !rounded-2xl flex items-center justify-center !mb-6 text-blue-600">
                <Activity className="!w-7 !h-7" />
              </div>
              <h3 className="!text-2xl !font-bold !text-slate-900 !mb-4">Obstetric Continuity</h3>
              <p className="!text-slate-600 !leading-relaxed !flex-grow">
                Follow-up scans for fetal growth monitoring, viability checks, or detailed anatomy re-evaluation for high-risk or uncertain findings.
              </p>
            </article>

            <article className="!bg-white !rounded-3xl !p-8 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
              <div className="!bg-blue-50 !w-14 !h-14 !rounded-2xl flex items-center justify-center !mb-6 text-blue-600">
                <Stethoscope className="!w-7 !h-7" />
              </div>
              <h3 className="!text-2xl !font-bold !text-slate-900 !mb-4">Chronic Organ Care</h3>
              <p className="!text-slate-600 !leading-relaxed !flex-grow">
                Surveillance for known conditions like liver cirrhosis, kidney stones, or gallbladder polyps to monitor disease progression.
              </p>
            </article>

            <article className="!bg-white !rounded-3xl !p-8 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 !bg-blue-600 !text-white !text-[10px] !font-bold !px-3 !py-1 rounded-bl-xl uppercase tracking-tighter shadow-sm z-10">Essential</div>
              <div className="!bg-blue-50 !w-14 !h-14 !rounded-2xl flex items-center justify-center !mb-6 text-blue-600">
                <ClipboardCheck className="!w-7 !h-7" />
              </div>
              <h3 className="!text-2xl !font-bold !text-slate-900 !mb-4">Post-Surgical Tracking</h3>
              <p className="!text-slate-600 !leading-relaxed !flex-grow">
                Follow-up imaging of surgical sites, stent placements, or organ transplants to ensure proper healing and long-term success.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Comparative Analysis Section */}
      <section aria-labelledby="precision-tracking" className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6">
        <div className="!max-w-5xl !mx-auto !bg-slate-900 !rounded-3xl !p-8 md:!p-12 !shadow-xl !text-white overflow-hidden relative">
          <div className="!absolute !bottom-0 !right-0 !opacity-5 pointer-events-none">
            <BarChart3 className="!w-96 !h-96" />
          </div>
          <div className="relative z-10">
            <h2 id="precision-tracking" className="!text-3xl md:!text-4xl !font-bold !text-white !mb-8">Precision Comparative Analysis</h2>
            <p className="!text-lg !text-slate-100 !font-medium !mb-10 !leading-relaxed">
              When you choose us for your surveillance imaging, we don't just look at today's scan. We perform a three-step precision check:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit"><Eye className="!w-6 !h-6 !text-blue-300" /></div>
                <div>
                  <h4 className="!text-xl !font-bold !mb-2 !text-white">Historical Review</h4>
                  <p className="!text-slate-100 !font-medium">Our radiologists review your previous images and reports from our facility or others to establish a clear baseline.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit"><Activity className="!w-6 !h-6 !text-blue-300" /></div>
                <div>
                  <h4 className="!text-xl !font-bold !mb-2 !text-white">Interval Change Detection</h4>
                  <p className="!text-slate-100 !font-medium">We measure down to the millimeter to determine if a finding has grown, shrunk, or remained stable since the last visit.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit"><CheckCircle2 className="!w-6 !h-6 !text-blue-300" /></div>
                <div>
                  <h4 className="!text-xl !font-bold !mb-2 !text-white">Trend Reporting</h4>
                  <p className="!text-slate-100 !font-medium">Your final report includes a specific comparison section, giving your doctor a clear "trend" rather than just a single data point.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit"><ShieldCheck className="!w-6 !h-6 !text-blue-300" /></div>
                <div>
                  <h4 className="!text-xl !font-bold !mb-2 !text-white">Risk Stratification</h4>
                  <p className="!text-slate-100 !font-medium">Using standardized scoring (like TI-RADS or BI-RADS), we update your risk category based on the latest findings.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Expectations */}
      <section className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6">
        <div className="!max-w-7xl !mx-auto grid lg:grid-cols-2 gap-12">
          {/* Consistency */}
          <div className="!bg-white !p-8 md:!p-12 !rounded-3xl !shadow-sm !border !border-slate-100">
            <h2 className="!text-3xl !font-bold !text-slate-900 !mb-8 flex items-center gap-3">
              <History className="!w-8 !h-8 !text-blue-600" /> The Value of Consistency
            </h2>
            <p className="!text-lg !text-slate-600 !mb-8 text-center">Using the same facility for your surveillance scans offers significant medical advantages:</p>
            <ul className="space-y-5 !mb-8">
              <li className="flex items-start">
                <div className="!bg-slate-100 !p-1.5 !rounded-full !mr-4 !mt-0.5"><CheckCircle2 className="!w-5 !h-5 !text-slate-700" /></div>
                <span className="!text-lg !text-slate-700"><strong>Same Technology:</strong> Comparing images taken on the same high-resolution equipment reduces measurement error.</span>
              </li>
              <li className="flex items-start">
                <div className="!bg-slate-100 !p-1.5 !rounded-full !mr-4 !mt-0.5"><CheckCircle2 className="!w-5 !h-5 !text-slate-700" /></div>
                <span className="!text-lg !text-slate-700"><strong>Integrated Records:</strong> Rapid access to all previous scans ensures nothing is missed during the comparative review.</span>
              </li>
              <li className="flex items-start">
                <div className="!bg-slate-100 !p-1.5 !rounded-full !mr-4 !mt-0.5"><CheckCircle2 className="!w-5 !h-5 !text-slate-700" /></div>
                <span className="!text-lg !text-slate-700"><strong>Long-term Trends:</strong> We maintain your tracking data across multiple visits to visualize changes over years.</span>
              </li>
            </ul>
            <div className="!bg-blue-50 !border-l-4 !border-blue-600 !p-5 !rounded-xl">
              <p className="!text-blue-900 !font-medium !flex !items-center !gap-2 text-center">
                We work closely with your referring specialist to ensure every follow-up scan is medically justified and timely.
              </p>
            </div>
          </div>

          {/* What to Expect */}
          <div className="!bg-white !p-8 md:!p-12 !rounded-3xl !shadow-sm !border !border-slate-100">
            <h2 className="!text-3xl !font-bold !text-slate-900 !mb-8 flex items-center gap-3">
              <Info className="!w-8 !h-8 !text-blue-600" /> What to Expect
            </h2>
            <div className="!flex !flex-col !gap-6 !border-l-2 !border-slate-200 !ml-4 !py-4">
              <div className="!flex !gap-4 !items-start !-ml-[17px]">
                <div className="!w-8 !h-8 !rounded-full !bg-blue-600 !text-white !flex !items-center !justify-center !font-bold !flex-shrink-0 !border-4 !border-white !shadow-sm">1</div>
                <div className="!flex-1 !pt-0.5"><h4 className="!text-xl !font-bold !text-slate-900 !mb-2 !mt-0 text-left">Record Retrieval</h4><p className="!text-slate-600 !leading-relaxed !m-0 text-left">If your previous scan was at a different facility, we may ask you to provide the disk or report ahead of time.</p></div>
              </div>
              <div className="!flex !gap-4 !items-start !-ml-[17px]">
                <div className="!w-8 !h-8 !rounded-full !bg-blue-600 !text-white !flex !items-center !justify-center !font-bold !flex-shrink-0 !border-4 !border-white !shadow-sm">2</div>
                <div className="!flex-1 !pt-0.5"><h4 className="!text-xl !font-bold !text-slate-900 !mb-2 !mt-0 text-left">The Exam</h4><p className="!text-slate-600 !leading-relaxed !m-0 text-left">Surveillance scans are standard ultrasound procedures, typically taking 20–45 minutes depending on the anatomy.</p></div>
              </div>
              <div className="!flex !gap-4 !items-start !-ml-[17px]">
                <div className="!w-8 !h-8 !rounded-full !bg-blue-600 !text-white !flex !items-center !justify-center !font-bold !flex-shrink-0 !border-4 !border-white !shadow-sm">3</div>
                <div className="!flex-1 !pt-0.5"><h4 className="!text-xl !font-bold !text-slate-900 !mb-2 !mt-0 text-left">Expert Reporting</h4><p className="!text-slate-600 !leading-relaxed !m-0 text-left">Results are sent to your doctor within 24-48 hours, highlighting any significant interval changes.</p></div>
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
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">How often do I need a follow-up scan? <span className="transition-transform group-open:rotate-180"><ChevronDownIcon /></span></summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">This depends on the finding. For example, low-risk thyroid nodules may be monitored every 12-24 months, while more suspicious findings may require scans every 6 months. Your doctor will determine the best interval.</div>
            </details>
            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">Do I need a new referral for every follow-up? <span className="transition-transform group-open:rotate-180"><ChevronDownIcon /></span></summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">Generally, yes. Most insurance plans require a current order from your healthcare provider for each diagnostic exam, even for long-term surveillance.</div>
            </details>
            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">What if my previous scan was at a different hospital? <span className="transition-transform group-open:rotate-180"><ChevronDownIcon /></span></summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">We can still perform your surveillance. However, for the best comparative analysis, it is helpful to provide us with the previous report and images (on a CD or via digital link).</div>
            </details>
            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">Does ultrasound use radiation? <span className="transition-transform group-open:rotate-180"><ChevronDownIcon /></span></summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">No. One of the main reasons ultrasound is preferred for long-term surveillance is that it uses sound waves, meaning no radiation exposure even if you require multiple scans over your lifetime.</div>
            </details>
            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">What constitutes a 'significant' change in a nodule? <span className="transition-transform group-open:rotate-180"><ChevronDownIcon /></span></summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">A significant change is usually defined as a 20% increase in at least two dimensions or a 50% increase in volume. Our radiologists will explicitly note if a change meets these clinical thresholds.</div>
            </details>
            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">Can I book a surveillance scan without symptoms? <span className="transition-transform group-open:rotate-180"><ChevronDownIcon /></span></summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">Yes. Surveillance is specifically for monitoring findings that are often asymptomatic. The goal is to detect changes before symptoms develop.</div>
            </details>
            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">Will my insurance cover routine surveillance? <span className="transition-transform group-open:rotate-180"><ChevronDownIcon /></span></summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">Most plans cover surveillance scans when ordered by a doctor for a recorded finding. We recommend checking with your provider; we also offer affordable self-pay options.</div>
            </details>
            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">How long until my doctor gets the comparison report? <span className="transition-transform group-open:rotate-180"><ChevronDownIcon /></span></summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">Reporting times are typically 24-48 hours. The comparison often takes slightly longer than a primary scan as our radiologist meticulously reviews the old versus new data.</div>
            </details>
            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">Should I fast for my follow-up appointment? <span className="transition-transform group-open:rotate-180"><ChevronDownIcon /></span></summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">Fasting requirements depend on the anatomy being scanned (e.g., fasting is standard for Abdominal/AAA follow-ups, but not for Thyroid/Breast scans).</div>
            </details>
            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">What if a nodule has disappeared? <span className="transition-transform group-open:rotate-180"><ChevronDownIcon /></span></summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">Finding that a nodule or cyst has resolved is a positive outcome! In such cases, your doctor may decide to end surveillance or move to a much longer monitoring interval.</div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <footer className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6">
        <div className="!max-w-7xl !mx-auto !bg-slate-900 !rounded-3xl !p-10 md:!p-16 !text-center shadow-xl">
          <h2 className="!text-3xl md:!text-4xl !font-bold !text-white !mb-6 text-center">Maintain continuity with precision monitoring.</h2>
          <p className="!text-xl !text-slate-300 !mb-10 !max-w-3xl !mx-auto text-center">Whether you have a known nodule, a stable cyst, or a chronic condition, our expert team is here to provide the detailed tracking you need for long‑term peace of mind.</p>
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
            <strong>Proudly serving patients in:</strong> Downers Grove, Westmont, Clarendon Hills, Lisle, Oak Brook, Hinsdale, Darien, Willowbrook, Woodridge, Lombard, Glen Ellyn, Western Springs, Villa Park, Wheaton, Burr Ridge, Indian Head Park, Naperville, Elmhurst, Westchester, La Grange, Countryside, Carol Stream, Northlake, Oakbrook Terrace, Bolingbrook, Addison, Aurora, Brookfield, Berkeley, Hillside, Broadview, Roselle, Itasca, Bensenville, Lemont, Franklin Park, Schiller Park, River Forest, Forest Park, Maywood, Bellwood, Oak Park, Oak Forest, Tinley Park, Rolling Meadows, Ridgewood, Sauganash, Crest Hill, Mount Prospect, Niles, Crystal Lawns, Edgebrook, Mayfair, Joliet, Ingalls Park, East Joliet, South Elgin, Plum Grove Village, Winthrop Village, Fernway, Hoffman Estates, Albany Park, Creekside, Valley View, Raynor Park, Arlington Heights, Forest River, Lidice, Fernway Park, Lincolnwood, Morton Grove, Cherry Hill, Gougars, Fairfax Village, Sherwood Oaks, Clintonville, Coleman, and Schaumburg.
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

export default FollowUpSurveillance;

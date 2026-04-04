import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, Clock, Calendar, FileText, Activity, Stethoscope, Search, FileBadge, Info, ChevronDown } from 'lucide-react';

const ThyroidUltrasound = () => {
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
        <title>Thyroid Ultrasound & Screening Near Me | Downers Grove, IL</title>
        <meta name="description" content="Safe thyroid sonogram and screening in Downers Grove and the Chicago suburbs. High-quality imaging for thyroid nodules and enlargement." />
        <meta name="keywords" content="thyroid ultrasound near me, thyroid screening Chicago, thyroid nodules ultrasound, thyroid sonogram" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalService",
              "name": "Thyroid Ultrasound",
              "provider": {
                "@type": "MedicalOrganization",
                "name": "Precision Imaging",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Downers Grove",
                  "addressRegion": "IL"
                }
              },
              "description": "Safe, non-invasive imaging of the thyroid gland to evaluate nodules, enlargement, or function abnormalities."
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <header className="reveal-section opacity-0 translate-y-8 !bg-slate-900 !rounded-3xl !mx-4 md:!mx-auto md:!max-w-7xl !px-6 !py-20 md:!py-28 lg:!py-32 !text-white !relative !overflow-hidden transition-all duration-700 shadow-2xl">
        <div className="!absolute !inset-0 !opacity-10 !bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] !from-blue-400 !to-transparent"></div>
        <div className="!relative !z-10 !max-w-4xl !mx-auto !text-center flex flex-col items-center">
          <span className="!uppercase !tracking-wider !text-blue-300 !font-semibold !text-sm !mb-4 flex items-center gap-2">
            <Activity className="!w-4 !h-4" /> Diagnostic Ultrasound Center
          </span>
          <h1 className="!text-5xl md:!text-6xl lg:!text-7xl !font-bold !mb-8 !text-white leading-tight !tracking-tight">
            Thyroid Ultrasound <br className="hidden md:block" /> & Screening Services
          </h1>
          <p className="!text-xl md:!text-2xl !mb-10 max-w-3xl !text-slate-300 font-medium !leading-relaxed">
            Precision thyroid imaging for patients in the Western Chicago suburbs. Our outpatient center provides detailed evaluations of thyroid nodules and enlargement using expert sonography.
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

      {/* Center Overview */}
      <section aria-labelledby="center-overview" className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6">
        <div className="!max-w-4xl !mx-auto !text-center">
          <h2 id="center-overview" className="!text-3xl md:!text-4xl !font-bold !text-slate-900 !mb-6">Our Diagnostic Ultrasound Center</h2>
          <div className="!bg-white !p-8 md:!p-12 !rounded-3xl !shadow-sm !border !border-slate-100">
            <p className="!text-lg md:!text-xl !text-slate-600 !leading-relaxed !mb-6">
              Our outpatient diagnostic ultrasound center provides high‑quality thyroid imaging for patients and referring providers throughout the western Chicago suburbs. 
            </p>
            <p className="!text-lg md:!text-xl !text-slate-600 !leading-relaxed !mb-8">
              Every exam is performed using modern equipment that produces clear, detailed images to help your provider answer specific clinical questions about your thyroid health. These ultrasound studies use sound waves only—there is no <strong>radiation exposure</strong>, making it a safe choice for monitoring thyroid nodules or assessing thyroid enlargement.
            </p>
            <div className="!bg-blue-50 !rounded-2xl !p-6 !text-left">
              <h4 className="!text-xl !font-bold !text-blue-900 !mb-4">Why Get a Thyroid Exam?</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Evaluate thyroid nodules",
                  "Assess gland enlargement",
                  "Follow-up on abnormal labs",
                  "Investigate neck lumps",
                  "Monitor known goiters",
                  "Screen at-risk individuals"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 !text-slate-700">
                    <CheckCircle2 className="!w-5 !h-5 !text-blue-600" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Available Exam Options */}
      <section aria-labelledby="exam-options" className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6">
        <div className="!max-w-5xl !mx-auto">
          <h2 id="exam-options" className="!text-3xl md:!text-4xl !font-bold !text-slate-900 !text-center !mb-12">Available Exam Options</h2>
          <p className="!text-lg !text-slate-600 !text-center !mb-10 !max-w-3xl !mx-auto">We offer the following exam options so your provider can select the study that best matches your clinical needs:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
            <article className="!bg-white !rounded-3xl !p-8 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
              <div className="!bg-blue-50 !w-14 !h-14 !rounded-2xl flex items-center justify-center !mb-6 text-blue-600">
                <Activity className="!w-7 !h-7" />
              </div>
              <h3 className="!text-2xl !font-bold !text-slate-900 !mb-4">Thyroid Ultrasound</h3>
              <p className="!text-slate-600 !leading-relaxed !flex-grow">
                Detailed imaging of the thyroid gland to evaluate nodules, enlargement (goiter), or abnormal thyroid-function tests.
              </p>
            </article>

            <article className="!bg-white !rounded-3xl !p-8 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
              <div className="!bg-blue-50 !w-14 !h-14 !rounded-2xl flex items-center justify-center !mb-6 text-blue-600">
                <Search className="!w-7 !h-7" />
              </div>
              <h3 className="!text-2xl !font-bold !text-slate-900 !mb-4">Thyroid Screening</h3>
              <p className="!text-slate-600 !leading-relaxed !flex-grow">
                Preventive ultrasound intended to look for unsuspected thyroid nodules or enlargement in higher-risk individuals or those seeking peace of mind.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* What These Exams Show */}
      <section aria-labelledby="what-it-shows" className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6">
        <div className="!max-w-5xl !mx-auto !bg-slate-900 !rounded-3xl !p-8 md:!p-12 !shadow-xl !text-white overflow-hidden relative">
          <div className="!absolute !bottom-0 !right-0 !opacity-5 pointer-events-none">
            <Activity className="!w-96 !h-96" />
          </div>
          <div className="relative z-10">
            <h2 id="what-it-shows" className="!text-3xl md:!text-4xl !font-bold !text-white !mb-8">What These Exams Show</h2>
            <p className="!text-lg !text-slate-100 !font-medium !mb-10 !leading-relaxed">
              During your thyroid ultrasound, our experienced technologists evaluate several key factors:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit"><CheckCircle2 className="!w-6 !h-6 !text-blue-300" /></div>
                <div>
                  <h4 className="!text-xl !font-bold !mb-2 !text-white">Gland Assessment</h4>
                  <p className="!text-slate-100 !font-medium">Evaluation of overall thyroid size, shape, and symmetry to detect uniform enlargement or uneven growth.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit"><CheckCircle2 className="!w-6 !h-6 !text-blue-300" /></div>
                <div>
                  <h4 className="!text-xl !font-bold !mb-2 !text-white">Nodule Characterization</h4>
                  <p className="!text-slate-100 !font-medium">Identifying whether nodules are solid or cystic, checking for calcifications, and evaluating their edges.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit"><CheckCircle2 className="!w-6 !h-6 !text-blue-300" /></div>
                <div>
                  <h4 className="!text-xl !font-bold !mb-2 !text-white">Vascular Evaluation</h4>
                  <p className="!text-slate-100 !font-medium">Using Doppler ultrasound to assess blood flow within the gland or specific nodules.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit"><CheckCircle2 className="!w-6 !h-6 !text-blue-300" /></div>
                <div>
                  <h4 className="!text-xl !font-bold !mb-2 !text-white">Lymph Nodes</h4>
                  <p className="!text-slate-100 !font-medium">Checking nearby lymph nodes in the neck for enlargement or abnormal appearance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prep & Expect */}
      <section className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6">
        <div className="!max-w-7xl !mx-auto grid lg:grid-cols-2 gap-12">
          {/* Prep */}
          <div className="!bg-white !p-8 md:!p-12 !rounded-3xl !shadow-sm !border !border-slate-100">
            <h2 className="!text-3xl !font-bold !text-slate-900 !mb-8 flex items-center gap-3">
              <Info className="!w-8 !h-8 !text-blue-600" /> Preparation
            </h2>
            <p className="!text-lg !text-slate-600 !mb-8">One of the benefits of thyroid ultrasound is its simplicity. No special fasting or dietary prep is required.</p>
            <ul className="space-y-5 !mb-8">
              <li className="flex items-start">
                <div className="!bg-slate-100 !p-1.5 !rounded-full !mr-4 !mt-0.5"><CheckCircle2 className="!w-5 !h-5 !text-slate-700" /></div>
                <span className="!text-lg !text-slate-700">Wear loose, comfortable clothing. A shirt with a low collar or one that opens in the front is ideal.</span>
              </li>
              <li className="flex items-start">
                <div className="!bg-slate-100 !p-1.5 !rounded-full !mr-4 !mt-0.5"><CheckCircle2 className="!w-5 !h-5 !text-slate-700" /></div>
                <span className="!text-lg !text-slate-700">Remove necklaces or other jewelry around the neck before the exam.</span>
              </li>
              <li className="flex items-start">
                <div className="!bg-slate-100 !p-1.5 !rounded-full !mr-4 !mt-0.5"><CheckCircle2 className="!w-5 !h-5 !text-slate-700" /></div>
                <span className="!text-lg !text-slate-700">Arrive 15 minutes before your scheduled appointment to check in.</span>
              </li>
            </ul>
          </div>

          {/* What to Expect */}
          <div className="!bg-white !p-8 md:!p-12 !rounded-3xl !shadow-sm !border !border-slate-100">
            <h2 className="!text-3xl !font-bold !text-slate-900 !mb-8 flex items-center gap-3">
              <Activity className="!w-8 !h-8 !text-blue-600" /> What to Expect
            </h2>
            <div className="!flex !flex-col !gap-6 !border-l-2 !border-slate-200 !ml-4 !py-4">
              <div className="!flex !gap-4 !items-start !-ml-[17px]">
                <div className="!w-8 !h-8 !rounded-full !bg-blue-600 !text-white !flex !items-center !justify-center !font-bold !flex-shrink-0 !border-4 !border-white !shadow-sm">1</div>
                <div className="!flex-1 !pt-0.5">
                  <h4 className="!text-xl !font-bold !text-slate-900 !mb-2 !mt-0">Positioning</h4>
                  <p className="!text-slate-600 !leading-relaxed !m-0">You will lie on an exam table with your neck slightly extended (often with a pillow under your shoulders).</p>
                </div>
              </div>
              <div className="!flex !gap-4 !items-start !-ml-[17px]">
                <div className="!w-8 !h-8 !rounded-full !bg-blue-600 !text-white !flex !items-center !justify-center !font-bold !flex-shrink-0 !border-4 !border-white !shadow-sm">2</div>
                <div className="!flex-1 !pt-0.5">
                  <h4 className="!text-xl !font-bold !text-slate-900 !mb-2 !mt-0">Imaging</h4>
                  <p className="!text-slate-600 !leading-relaxed !m-0">The technologist moves the transducer over your neck. You may feel mild pressure but no pain.</p>
                </div>
              </div>
              <div className="!flex !gap-4 !items-start !-ml-[17px]">
                <div className="!w-8 !h-8 !rounded-full !bg-blue-600 !text-white !flex !items-center !justify-center !font-bold !flex-shrink-0 !border-4 !border-white !shadow-sm">3</div>
                <div className="!flex-1 !pt-0.5">
                  <h4 className="!text-xl !font-bold !text-slate-900 !mb-2 !mt-0">Quick Exam</h4>
                  <p className="!text-slate-600 !leading-relaxed !m-0">The entire process typically takes 15–20 minutes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section aria-labelledby="faq" className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6">
        <div className="!max-w-4xl !mx-auto">
          <h2 id="faq" className="!text-3xl md:!text-4xl !font-bold !text-center !text-slate-900 !mb-12">Frequently Asked Questions</h2>
          <div className="grid gap-6">
            {[
              { q: "Is a thyroid ultrasound painful?", a: "No. It is a non-invasive procedure. You might feel some pressure from the transducer, but it is generally very comfortable." },
              { q: "Does the ultrasound show if a nodule is cancerous?", a: "While an ultrasound can show features that make a nodule look suspicious (like irregular borders or microcalcifications), it cannot definitely diagnose cancer. It helps your doctor decide if a biopsy is needed." },
              { q: "What is a multinodular goiter?", a: "This is a term used when the thyroid gland is enlarged and contains multiple distinct nodules." },
              { q: "Can I eat before the exam?", a: "Yes. Unlike some other ultrasounds, there is no fasting required for a thyroid study." },
              { q: "How long does it take for results?", a: "A radiologist will review the images, and a report is typically sent to your provider within 24–48 hours." },
              { q: "What should I wear?", a: "Loose clothing is best. You'll need to expose your neck area, so avoid turtlenecks or multiple heavy layers." },
              { q: "Do I need to remove my jewelry?", a: "Yes, any necklaces or chains will need to be removed as they can interfere with the transducer's path." },
              { q: "Is there radiation?", a: "No. Ultrasound uses sound waves to create images, making it completely radiation-free." },
              { q: "Can thyroid ultrasound show thyroid function?", a: "Ultrasound shows the structure (size, nodules, etc.) but not the function. Blood tests (like TSH) are usually needed to check how the gland is working." },
              { q: "Will I need a follow-up?", a: "Depending on the findings (like small nodules), your doctor may recommend a follow-up ultrasound in 6–12 months to monitor for changes." },
              { q: "Is a doctor's order required?", a: "To receive a formal radiologist report, yes. We can also provide images on CD for self-pay patients without an order." },
              { q: "Where is the exam performed?", a: "High-quality thyroid imaging is performed right here at our outpatient diagnostic center in Downers Grove." }
            ].map((faq, index) => (
              <details key={index} className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
                <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">
                  {faq.q}
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronDown className="!w-6 !h-6 !text-blue-500" />
                  </span>
                </summary>
                <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <footer className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6">
        <div className="!max-w-7xl !mx-auto !bg-slate-900 !rounded-3xl !p-10 md:!p-16 !text-center shadow-xl">
          <h2 className="!text-3xl md:!text-4xl !font-bold !text-white !mb-6">Ready to schedule your thyroid exam?</h2>
          <p className="!text-xl !text-slate-300 !mb-10 !max-w-3xl !mx-auto">
            Use our online scheduling page or click <strong>Contact Us</strong> to request an appointment. Our team is here to help you get the clear answers you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="https://precisionimagingus.com/#/booking" className="!bg-blue-600 hover:!bg-blue-500 !text-white !px-10 !py-5 rounded-xl !font-bold !text-xl flex items-center transition hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto justify-center">
              Book Appointment <ArrowRight className="!ml-3 !w-6 !h-6" />
            </a>
            <a href="https://precisionimagingus.com/#/contact" className="!bg-slate-800 hover:!bg-slate-700 !text-white !border !border-slate-600 hover:!border-slate-400 !px-10 !py-5 rounded-xl !font-bold !text-xl transition hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto justify-center flex items-center">
              Contact Us
            </a>
          </div>
        </div>
      </footer >

      {/* Service Area */}
      <section aria-labelledby="service-area" className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6 !py-8">
        <div className="!max-w-5xl !mx-auto !text-center">
          <h2 id="service-area" className="sr-only">Local Service Area</h2>
          <p className="!text-xs md:!text-sm !text-slate-400 !leading-relaxed inline-block">
            <strong>Proudly serving patients in:</strong> Downers Grove, Westmont, Clarendon Hills, Lisle, Oak Brook, Hinsdale, Darien, Willowbrook, Woodridge, Lombard, Glen Ellyn, Western Springs, Villa Park, Wheaton, Burr Ridge, Indian Head Park, Naperville, Elmhurst, Westchester, La Grange, Countryside, Carol Stream, Northlake, Oakbrook Terrace, Bolingbrook, Addison, Aurora, Brookfield, Berkeley, Hillside, Broadview, Roselle, Itasca, Bensenville, Lemont, Franklin Park, Schiller Park, River Forest, Forest Park, Maywood, Bellwood, Oak Park, Oak Forest, Tinley Park, Rolling Meadows, Ridgewood, Sauganash, Crest Hill, Mount Prospect, Niles, Crystal Lawns, Edgebrook, Mayfair, Joliet, Ingalls Park, East Joliet, South Elgin, Plum Grove Village, Winthrop Village, Fernway, Hoffman Estates, Albany Park, Creekside, Valley View, Raynor Park, Arlington Heights, Forest River, Lidice, Fernway Park, Lincolnwood, Morton Grove, Cherry Hill, Gougars, Fairfax Village, Sherwood Oaks, Clintonville, Coleman, and Schaumburg.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ThyroidUltrasound;

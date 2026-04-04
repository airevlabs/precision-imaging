import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Activity, Calendar, Search, Stethoscope, Heart, ShieldCheck, Info, CheckCircle2, Clock, ArrowRight, FileBadge } from 'lucide-react';

const VascularUltrasound = () => {
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
        <title>Vascular Ultrasound & Doppler Near Me | Downers Grove, IL</title>
        <meta name="description" content="Safe artery and vein ultrasound in Downers Grove. Detailed Doppler imaging for DVT, PAD, and carotid screening in the Chicago suburbs." />
        <meta name="keywords" content="vascular ultrasound near me, artery and vein ultrasound Downers Grove, leg vein ultrasound Chicago, DVT ultrasound, PAD screening" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalService",
              "name": "Vascular Ultrasound",
              "provider": {
                "@type": "MedicalOrganization",
                "name": "Precision Imaging",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Downers Grove",
                  "addressRegion": "IL"
                }
              },
              "description": "Safe, non-invasive Doppler imaging of the arteries and veins to evaluate blood flow and detect clots or blockages."
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
            Vascular Ultrasound <br className="hidden md:block" /> & Doppler Services
          </h1>
          <p className="!text-xl md:!text-2xl !mb-10 max-w-3xl !text-slate-300 font-medium !leading-relaxed">
            Expert circulation and blood flow assessments for patients in the Western Chicago suburbs. Advanced Doppler imaging for arteries and veins.
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

      {/* 1. Our Diagnostic Ultrasound Center */}
      <section aria-labelledby="center-overview" className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6">
        <div className="!max-w-4xl !mx-auto !text-center">
          <h2 id="center-overview" className="!text-3xl md:!text-4xl !font-bold !text-slate-900 !mb-6">Our Diagnostic Ultrasound Center</h2>
          <div className="!bg-white !p-8 md:!p-12 !rounded-3xl !shadow-sm !border !border-slate-100">
            <p className="!text-lg md:!text-xl !text-slate-600 !leading-relaxed !mb-6">
              Our outpatient diagnostic ultrasound center provides high‑quality vascular imaging for patients and referring providers throughout the western Chicago suburbs.
            </p>
            <p className="!text-lg md:!text-xl !text-slate-600 !leading-relaxed">
              Every exam is performed using modern equipment that produces clear, detailed images of your arteries and veins. These vascular ultrasound studies use sound waves only—there is no <strong>radiation exposure</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Available Exam Options */}
      <section aria-labelledby="exam-options" className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6">
        <div className="!max-w-7xl !mx-auto">
          <h2 id="exam-options" className="!text-3xl md:!text-4xl !font-bold !text-slate-900 !text-center !mb-12">Available Exam Options</h2>
          <p className="!text-lg !text-slate-600 !text-center !mb-10 !max-w-3xl !mx-auto">We offer the following vascular ultrasound options so your provider can select the study that best matches your clinical needs:</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <article className="!bg-white !rounded-3xl !p-8 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
              <div className="!bg-blue-50 !w-14 !h-14 !rounded-2xl flex items-center justify-center !mb-6 text-blue-600">
                <Search className="!w-7 !h-7" />
              </div>
              <h3 className="!text-2xl !font-bold !text-slate-900 !mb-4">Carotid Doppler</h3>
              <p className="!text-slate-600 !leading-relaxed !flex-grow">
                Detailed study of the carotid arteries in the neck to measure plaque burden and blood-flow velocity, helping to assess stroke risk.
              </p>
            </article>

            <article className="!bg-white !rounded-3xl !p-8 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
              <div className="!bg-blue-50 !w-14 !h-14 !rounded-2xl flex items-center justify-center !mb-6 text-blue-600">
                <Activity className="!w-7 !h-7" />
              </div>
              <h3 className="!text-2xl !font-bold !text-slate-900 !mb-4">Venous Doppler (DVT)</h3>
              <p className="!text-slate-600 !leading-relaxed !flex-grow">
                Evaluation of deep and superficial veins in the arms or legs to look for blood clots (Deep Vein Thrombosis) or venous insufficiency.
              </p>
            </article>

            <article className="!bg-white !rounded-3xl !p-8 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
              <div className="!bg-rose-50 !w-14 !h-14 !rounded-2xl flex items-center justify-center !mb-6 text-rose-600">
                <Heart className="!w-7 !h-7" />
              </div>
              <h3 className="!text-2xl !font-bold !text-slate-900 !mb-4">Aorta Doppler</h3>
              <p className="!text-slate-600 !leading-relaxed !flex-grow">
                Ultrasound and Doppler evaluation of the abdominal aorta to look for aneurysms (AAA), narrowing, or plaque formation.
              </p>
            </article>

            <article className="!bg-white !rounded-3xl !p-8 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
              <div className="!bg-blue-50 !w-14 !h-14 !rounded-2xl flex items-center justify-center !mb-6 text-blue-600">
                <Stethoscope className="!w-7 !h-7" />
              </div>
              <h3 className="!text-2xl !font-bold !text-slate-900 !mb-4">Arterial Doppler (PAD)</h3>
              <p className="!text-slate-600 !leading-relaxed !flex-grow">
                Assessment of arterial blood flow in the arms or legs to detect Peripheral Artery Disease (PAD) and other circulation problems.
              </p>
            </article>

            <article className="!bg-white !rounded-3xl !p-8 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
              <div className="!bg-blue-50 !w-14 !h-14 !rounded-2xl flex items-center justify-center !mb-6 text-blue-600">
                <ShieldCheck className="!w-7 !h-7" />
              </div>
              <h3 className="!text-2xl !font-bold !text-slate-900 !mb-4">PAD Screening</h3>
              <p className="!text-slate-600 !leading-relaxed !flex-grow">
                Noninvasive ultrasound evaluation of leg or arm arteries to detect narrowing or blockages affecting circulation in high-risk individuals.
              </p>
            </article>

            <article className="!bg-white !rounded-3xl !p-8 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 !bg-blue-600 !text-white !text-[10px] !font-bold !px-3 !py-1 rounded-bl-xl uppercase tracking-tighter shadow-sm z-10">Popular</div>
              <div className="!bg-blue-50 !w-14 !h-14 !rounded-2xl flex items-center justify-center !mb-6 text-blue-600">
                <FileBadge className="!w-7 !h-7" />
              </div>
              <h3 className="!text-2xl !font-bold !text-slate-900 !mb-4">Stroke Screening</h3>
              <p className="!text-slate-600 !leading-relaxed !flex-grow">
                A bundled preventive screening that combines Carotid Ultrasound, AAA Screening, and PAD evaluation in a single visit.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 3. What These Exams Show */}
      <section aria-labelledby="what-it-shows" className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6">
        <div className="!max-w-5xl !mx-auto !bg-slate-900 !rounded-3xl !p-8 md:!p-12 !shadow-xl !text-white overflow-hidden relative">
          <div className="!absolute !bottom-0 !right-0 !opacity-5 pointer-events-none">
            <Activity className="!w-96 !h-96" />
          </div>
          <div className="relative z-10">
            <h2 id="what-it-shows" className="!text-3xl md:!text-4xl !font-bold !text-white !mb-8">What These Exams Show</h2>
            <p className="!text-lg !text-slate-100 !font-medium !mb-10 !leading-relaxed">
              During your vascular ultrasound, our experienced technologists evaluate several key factors:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit"><CheckCircle2 className="!w-6 !h-6 !text-blue-300" /></div>
                <div>
                  <h4 className="!text-xl !font-bold !mb-2 !text-white">Blood Flow Patterns</h4>
                  <p className="!text-slate-100 !font-medium">Direction and speed of blood flow in arteries and veins using advanced Doppler ultrasound technology.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit"><CheckCircle2 className="!w-6 !h-6 !text-blue-300" /></div>
                <div>
                  <h4 className="!text-xl !font-bold !mb-2 !text-white">Vessel Infrastructure</h4>
                  <p className="!text-slate-100 !font-medium">Checking for presence of plaque, narrowing (stenosis), or aneurysms in major vessels throughout the body.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit"><CheckCircle2 className="!w-6 !h-6 !text-blue-300" /></div>
                <div>
                  <h4 className="!text-xl !font-bold !mb-2 !text-white">Clot Detection</h4>
                  <p className="!text-slate-100 !font-medium">Identifying clots (DVT) or reflux in leg veins that may explain swelling, pain, or discomfort.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit"><CheckCircle2 className="!w-6 !h-6 !text-blue-300" /></div>
                <div>
                  <h4 className="!text-xl !font-bold !mb-2 !text-white">PAD Indicators</h4>
                  <p className="!text-slate-100 !font-medium">Detecting areas of reduced blood flow in the limbs that may indicate peripheral artery disease.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 & 5. Prep & What to Expect */}
      <section className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6">
        <div className="!max-w-7xl !mx-auto grid lg:grid-cols-2 gap-12">
          {/* Prep */}
          <div className="!bg-white !p-8 md:!p-12 !rounded-3xl !shadow-sm !border !border-slate-100">
            <h2 className="!text-3xl !font-bold !text-slate-900 !mb-8 flex items-center gap-3">
              <Info className="!w-8 !h-8 !text-blue-600" /> Preparation
            </h2>
            <p className="!text-lg !text-slate-600 !mb-8">One of the benefits of vascular ultrasound is the minimal preparation required for most exams.</p>
            <ul className="space-y-5 !mb-8">
              <li className="flex items-start">
                <div className="!bg-slate-100 !p-1.5 !rounded-full !mr-4 !mt-0.5"><CheckCircle2 className="!w-5 !h-5 !text-slate-700" /></div>
                <span className="!text-lg !text-slate-700">Most exams require no fasting, though AAA screening may require 4-6 hours without solid food.</span>
              </li>
              <li className="flex items-start">
                <div className="!bg-slate-100 !p-1.5 !rounded-full !mr-4 !mt-0.5"><CheckCircle2 className="!w-5 !h-5 !text-slate-700" /></div>
                <span className="!text-lg !text-slate-700">Wear loose sleeves or pants to allow easy access to the arms or legs being scanned.</span>
              </li>
              <li className="flex items-start">
                <div className="!bg-slate-100 !p-1.5 !rounded-full !mr-4 !mt-0.5"><CheckCircle2 className="!w-5 !h-5 !text-slate-700" /></div>
                <span className="!text-lg !text-slate-700">Avoid applying lotions to the scan areas on the day of your appointment.</span>
              </li>
            </ul>
            <div className="!bg-blue-50 !border-l-4 !border-blue-600 !p-5 !rounded-xl">
              <p className="!text-blue-900 !font-medium !flex !items-center !gap-2">
                <Clock className="!w-5 !h-5" /> Arrive 15 minutes before your scheduled appointment.
              </p>
            </div>
          </div>

          {/* What to Expect */}
          <div className="!bg-white !p-8 md:!p-12 !rounded-3xl !shadow-sm !border !border-slate-100">
            <h2 className="!text-3xl !font-bold !text-slate-900 !mb-8 flex items-center gap-3">
              <Activity className="!w-8 !h-8 !text-blue-600" /> What to Expect
            </h2>
            <div className="!flex !flex-col !gap-6 !border-l-2 !border-slate-200 !ml-4 !py-4">
              <div className="!flex !gap-4 !items-start !-ml-[17px]">
                <div className="!w-8 !h-8 !rounded-full !bg-blue-600 !text-white !flex !items-center !justify-center !font-bold !flex-shrink-0 !border-4 !border-white !shadow-sm">1</div>
                <div className="!flex-1 !pt-0.5"><h4 className="!text-xl !font-bold !text-slate-900 !mb-2 !mt-0">Positioning</h4><p className="!text-slate-600 !leading-relaxed !m-0">You will lie on an exam table while the technologist applies gel and use a small transducer over the area of interest.</p></div>
              </div>
              <div className="!flex !gap-4 !items-start !-ml-[17px]">
                <div className="!w-8 !h-8 !rounded-full !bg-blue-600 !text-white !flex !items-center !justify-center !font-bold !flex-shrink-0 !border-4 !border-white !shadow-sm">2</div>
                <div className="!flex-1 !pt-0.5"><h4 className="!text-xl !font-bold !text-slate-900 !mb-2 !mt-0">Doppler Sound</h4><p className="!text-slate-600 !leading-relaxed !m-0">You may hear rhythmic "whooshing" sounds during the exam; this is the Doppler signal representing your blood flow.</p></div>
              </div>
              <div className="!flex !gap-4 !items-start !-ml-[17px]">
                <div className="!w-8 !h-8 !rounded-full !bg-blue-600 !text-white !flex !items-center !justify-center !font-bold !flex-shrink-0 !border-4 !border-white !shadow-sm">3</div>
                <div className="!flex-1 !pt-0.5"><h4 className="!text-xl !font-bold !text-slate-900 !mb-2 !mt-0">Quick Process</h4><p className="!text-slate-600 !leading-relaxed !m-0">Most vascular exams take 30–60 minutes depending on the regions being studied.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section aria-labelledby="faq" className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6">
        <div className="!max-w-4xl !mx-auto">
          <h2 id="faq" className="!text-3xl md:!text-4xl !font-bold !text-center !text-slate-900 !mb-12">Frequently Asked Questions</h2>
          <div className="grid gap-6">
            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">Is a vascular ultrasound painful? <span className="transition-transform group-open:rotate-180"><ChevronDownIcon /></span></summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">No. It is a completely non-invasive procedure. You might feel mild pressure from the transducer, but it is generally very comfortable.</div>
            </details>
            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">What is a sonogram? <span className="transition-transform group-open:rotate-180"><ChevronDownIcon /></span></summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">A sonogram is the picture or moving image created during your ultrasound exam. The terms sonogram and ultrasound are often used interchangeably.</div>
            </details>
            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">Does vascular ultrasound replace angiography? <span className="transition-transform group-open:rotate-180"><ChevronDownIcon /></span></summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">Ultrasound is a noninvasive screening and follow-up tool. While it provides excellent data, more invasive angiography or CT scans may still be needed for certain surgical plans.</div>
            </details>
            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">What is PAD screening? <span className="transition-transform group-open:rotate-180"><ChevronDownIcon /></span></summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">PAD (Peripheral Artery Disease) screening is an ultrasound evaluation of the leg arteries to detect narrowing or blockages that could affect circulation.</div>
            </details>
            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">Will the test require injections or contrast? <span className="transition-transform group-open:rotate-180"><ChevronDownIcon /></span></summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">No. Vascular ultrasound and Doppler studies use only sound waves. No needles, dyes, or contrast agents are required.</div>
            </details>
            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">How long does the exam take? <span className="transition-transform group-open:rotate-180"><ChevronDownIcon /></span></summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">A typical vascular exam takes between 30 and 60 minutes, depending on the complexity and the number of areas being evaluated.</div>
            </details>
            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">Do I need to fast before the exam? <span className="transition-transform group-open:rotate-180"><ChevronDownIcon /></span></summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">For most vascular studies, no fasting is needed. However, if you are having an Aorta Doppler (AAA screening), we typically recommend 4–6 hours without solid food.</div>
            </details>
            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">What should I wear? <span className="transition-transform group-open:rotate-180"><ChevronDownIcon /></span></summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">Loose-fitting clothing is recommended. We need easy access to the arms or legs being scanned (e.g., shorts or loose sleeves).</div>
            </details>
            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">How long until I get my results? <span className="transition-transform group-open:rotate-180"><ChevronDownIcon /></span></summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">A specialized radiologist will review your images and a report is typically sent to your provider within 24 to 48 hours.</div>
            </details>
            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">Is there any radiation? <span className="transition-transform group-open:rotate-180"><ChevronDownIcon /></span></summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">No. Like all diagnostic ultrasound, vascular studies use sound waves only, making them completely radiation-free.</div>
            </details>
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <footer className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6">
        <div className="!max-w-7xl !mx-auto !bg-slate-900 !rounded-3xl !p-10 md:!p-16 !text-center shadow-xl">
          <h2 className="!text-3xl md:!text-4xl !font-bold !text-white !mb-6">Ready to schedule your vascular exam?</h2>
          <p className="!text-xl !text-slate-300 !mb-10 !max-w-3xl !mx-auto">Use our online scheduling page or click <strong>Contact Us</strong> to request an appointment. Our team is here to help you get the clear answers you need.</p>
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

      {/* 8. Local Service Area */}
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

const ChevronDownIcon = () => (
  <svg className="!w-6 !h-6 !text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export default VascularUltrasound;

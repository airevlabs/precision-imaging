import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, Clock, Calendar, FileText, Activity, Stethoscope, Search, FileBadge, Info } from 'lucide-react';

const AbdomenUltrasound = () => {
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
    <div className="!pt-32 lg:!pt-44 !pb-12 !bg-slate-50 flex flex-col gap-12 sm:gap-16 font-sans">
      <Helmet>
        <title>Abdominal Ultrasound | Precision Imaging Diagnostic Center</title>
        <meta name="description" content="Safe abdominal sonogram imaging in Downers Grove. High-quality liver and gallbladder ultrasound serving the Chicago suburbs." />
        <meta name="keywords" content="abdominal ultrasound near me, abdominal sonogram Downers Grove, liver and gallbladder ultrasound Chicago suburbs" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalService",
              "name": "Abdominal Ultrasound",
              "provider": {
                "@type": "MedicalOrganization",
                "name": "Precision Imaging",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Downers Grove",
                  "addressRegion": "IL"
                }
              },
              "description": "Safe, non-invasive imaging of the liver, gallbladder, kidneys, and pancreas."
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
            Abdominal Ultrasound
          </h1>
          <p className="!text-xl md:!text-2xl !mb-10 max-w-3xl !text-slate-300 font-medium !leading-relaxed">
            Safe, High‑Quality Sonography for the Liver, Gallbladder, Kidneys, and Pancreas in Downers Grove
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/#/booking" className="!bg-blue-600 hover:!bg-blue-500 !px-8 !py-4 rounded-xl !font-semibold flex items-center justify-center transition hover:-translate-y-1 shadow-lg hover:shadow-blue-500/25 !text-white !text-lg">
              Book Appointment <Calendar className="!ml-2 !w-5 !h-5" />
            </a>
            <a href="#contact" className="!bg-transparent border-2 !border-slate-600 hover:!border-white hover:!bg-white/10 !px-8 !py-4 rounded-xl !font-semibold flex items-center justify-center transition hover:-translate-y-1 !text-white !text-lg">
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
              Our outpatient diagnostic ultrasound center provides high‑quality abdominal imaging for patients and referring providers throughout the western Chicago suburbs.
            </p>
            <p className="!text-lg md:!text-xl !text-slate-600 !leading-relaxed">
              Every exam is performed using modern equipment that produces clear, detailed images to help your provider answer specific clinical questions. These ultrasound studies use sound waves only—there is no radiation exposure.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Available Exam Options */}
      <section aria-labelledby="exam-options" className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6">
        <div className="!max-w-7xl !mx-auto">
          <h2 id="exam-options" className="!text-3xl md:!text-4xl !font-bold !text-slate-900 !text-center !mb-12">Available Exam Options</h2>
          <p className="!text-lg !text-slate-600 !text-center !mb-10 !max-w-3xl !mx-auto">We offer the following exam options in this category so your provider can select the study that best matches your needs:</p>
          <div className="grid md:grid-cols-3 gap-8">

            <article className="!bg-white !rounded-3xl !p-8 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
              <div className="!bg-blue-50 !w-14 !h-14 !rounded-2xl flex items-center justify-center !mb-6 text-blue-600">
                <Search className="!w-7 !h-7" />
              </div>
              <h3 className="!text-2xl !font-bold !text-slate-900 !mb-4">Abdomen – Complete</h3>
              <p className="!text-slate-600 !leading-relaxed !flex-grow">
                Comprehensive evaluation of the liver, gallbladder, bile ducts, pancreas, spleen, kidneys, and abdominal aorta for pain, abnormal labs, or follow‑up of prior imaging.
              </p>
            </article>

            <article className="!bg-white !rounded-3xl !p-8 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full relative overflow-hidden">
              <div className="!bg-blue-50 !w-14 !h-14 !rounded-2xl flex items-center justify-center !mb-6 text-blue-600">
                <Activity className="!w-7 !h-7" />
              </div>
              <h3 className="!text-2xl !font-bold !text-slate-900 !mb-4">Abdomen – Limited</h3>
              <p className="!text-slate-600 !leading-relaxed !flex-grow">
                Targeted upper‑abdominal exam focused on liver, gallbladder, bile ducts, and pancreas when symptoms or lab results point to these organs.
              </p>
            </article>

            <article className="!bg-white !rounded-3xl !p-8 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
              <div className="!bg-rose-50 !w-14 !h-14 !rounded-2xl flex items-center justify-center !mb-6 text-rose-600">
                <Stethoscope className="!w-7 !h-7" />
              </div>
              <h3 className="!text-2xl !font-bold !text-slate-900 !mb-4">AAA Screening</h3>
              <p className="!text-slate-600 !leading-relaxed !flex-grow">
                Focused screening of the abdominal aorta to measure its diameter and look for aneurysm or enlargement, often recommended for adults with vascular risk factors.
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
              During your abdominal ultrasound, we evaluate multiple key indicators. Your provider uses these diagnostic ultrasound findings alongside your history, physical exam, and lab results to make an accurate diagnosis.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit"><CheckCircle2 className="!w-6 !h-6 !text-blue-300" /></div>
                <div>
                  <h4 className="!text-xl !font-bold !mb-2 !text-white">Organ Integrity</h4>
                  <p className="!text-slate-100 !font-medium">Size, shape, and texture of each abdominal organ to look for inflammation, fatty change, cirrhosis, cysts, or masses.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit"><CheckCircle2 className="!w-6 !h-6 !text-blue-300" /></div>
                <div>
                  <h4 className="!text-xl !font-bold !mb-2 !text-white">Gallbladder & Ducts</h4>
                  <p className="!text-slate-100 !font-medium">Gallstones, gallbladder wall thickening, and bile‑duct dilation that might indicate blockage or infection.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit"><CheckCircle2 className="!w-6 !h-6 !text-blue-300" /></div>
                <div>
                  <h4 className="!text-xl !font-bold !mb-2 !text-white">Pancreas & Kidneys</h4>
                  <p className="!text-slate-100 !font-medium">Pancreatic enlargement or mass, spleen size, kidney appearance, and any free fluid within the abdomen.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit"><CheckCircle2 className="!w-6 !h-6 !text-blue-300" /></div>
                <div>
                  <h4 className="!text-xl !font-bold !mb-2 !text-white">Aorta Screening</h4>
                  <p className="!text-slate-100 !font-medium">For AAA screening, aortic diameter and plaque to assess aneurysm risk.</p>
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
              <Info className="!w-8 !h-8 !text-blue-600" /> Preparation Instructions
            </h2>
            <p className="!text-lg !text-slate-600 !mb-8">To help your abdominal ultrasound produce the clearest images, please follow these guidelines:</p>
            <ul className="space-y-5 !mb-8">
              <li className="flex items-start">
                <div className="!bg-slate-100 !p-1.5 !rounded-full !mr-4 !mt-0.5"><CheckCircle2 className="!w-5 !h-5 !text-slate-700" /></div>
                <span className="!text-lg !text-slate-700">Do not eat or drink anything except small sips of water for <strong>6–8 hours</strong> before your appointment.</span>
              </li>
              <li className="flex items-start">
                <div className="!bg-slate-100 !p-1.5 !rounded-full !mr-4 !mt-0.5"><CheckCircle2 className="!w-5 !h-5 !text-slate-700" /></div>
                <span className="!text-lg !text-slate-700">Take essential medications with a small amount of water unless your provider gives different instructions.</span>
              </li>
              <li className="flex items-start">
                <div className="!bg-slate-100 !p-1.5 !rounded-full !mr-4 !mt-0.5"><CheckCircle2 className="!w-5 !h-5 !text-slate-700" /></div>
                <span className="!text-lg !text-slate-700">Wear loose, two‑piece clothing so we can easily access your upper abdomen.</span>
              </li>
            </ul>
            <div className="!bg-blue-50 !border-l-4 !border-blue-600 !p-5 !rounded-r-xl">
              <p className="!text-blue-900 !font-medium !flex !items-center !gap-2">
                <Clock className="!w-5 !h-5" /> Arrive 15 minutes early to complete registration.
              </p>
            </div>
            <p className="!text-sm !text-slate-500 !mt-6 !italic">If your appointment combines more than one ultrasound type, our scheduling team will review the best preparation plan with you.</p>
          </div>

          {/* What to Expect */}
          <div className="!bg-white !p-8 md:!p-12 !rounded-3xl !shadow-sm !border !border-slate-100">
            <h2 className="!text-3xl !font-bold !text-slate-900 !mb-8 flex items-center gap-3">
              <Activity className="!w-8 !h-8 !text-blue-600" /> What to Expect
            </h2>
            <p className="!text-lg !text-slate-600 !mb-8">Here is what a typical visit looks like at our diagnostic ultrasound center:</p>
            <div className="space-y-6 relative border-l-2 border-slate-100 ml-4 pb-4">

              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
                <h4 className="!text-xl !font-bold !text-slate-900 !mb-2">1. Preparation</h4>
                <p className="!text-slate-600 !leading-relaxed">You will lie on a padded exam table while the technologist applies warm gel over your upper abdomen.</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
                <h4 className="!text-xl !font-bold !text-slate-900 !mb-2">2. Imaging Process</h4>
                <p className="!text-slate-600 !leading-relaxed">The transducer is moved in several directions to obtain real‑time images of each organ. You may be asked to hold your breath or change position briefly to improve visualization.</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
                <h4 className="!text-xl !font-bold !text-slate-900 !mb-2">3. Duration</h4>
                <p className="!text-slate-600 !leading-relaxed">Most abdominal ultrasound appointments take about <strong>20–30 minutes</strong>; add a few minutes if AAA screening is performed at the same visit.</p>
              </div>

            </div>
            <p className="!text-sm !text-slate-500 !mt-6 !italic">Throughout the exam you are welcome to ask questions; our technologist will let you know when each part of the study is complete.</p>
          </div>

        </div>
      </section>

      {/* 6. Results & Follow-up */}
      <section aria-labelledby="results" className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6">
        <div className="!max-w-7xl !mx-auto !bg-blue-50 !rounded-3xl !p-8 md:!p-12 border border-blue-100 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/3 flex justify-center">
            <div className="!w-32 !h-32 !bg-white !rounded-full !shadow-lg flex items-center justify-center">
              <FileBadge className="!w-16 !h-16 !text-blue-600" />
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h2 id="results" className="!text-3xl md:!text-4xl !font-bold !text-slate-900 !mb-6">Results & Follow-up</h2>
            <ul className="space-y-4 !text-lg !text-slate-700 !mb-6">
              <li className="flex items-start md:items-center">
                <ArrowRight className="!w-5 !h-5 !text-blue-500 !mr-3 shrink-0 !mt-1 md:!mt-0" />
                <span>If a doctor order is provided, a detailed report is sent directly to your ordering provider so they can review results and plan next steps.</span>
              </li>
              <li className="flex items-start md:items-center">
                <ArrowRight className="!w-5 !h-5 !text-blue-500 !mr-3 shrink-0 !mt-1 md:!mt-0" />
                <span>Your provider may recommend medication changes, additional testing, or follow‑up imaging based on the ultrasound findings.</span>
              </li>
            </ul>
            <p className="!text-lg !text-slate-700 !font-bold">Disclaimer: If there is no doctor's order, images will be provided after the exam on a CD. In order to receive a radiology report, a doctor's order is required.</p>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section aria-labelledby="faq" className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6">
        <div className="!max-w-4xl !mx-auto">
          <h2 id="faq" className="!text-3xl md:!text-4xl !font-bold !text-center !text-slate-900 !mb-12">Frequently Asked Questions</h2>
          <div className="grid gap-6">

            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm border !border-slate-200 group cursor-pointer transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">
                Is this the same as an ultrasound?
                <span className="transition-transform group-open:rotate-180">
                  <ChevronDownIcon />
                </span>
              </summary>
              <div className="!mt-4 !pt-4 !border-t border-slate-100 !text-slate-600 !text-lg !leading-relaxed">
                Yes. The terms ultrasound, sonogram, and diagnostic ultrasound all refer to the same type of imaging test that uses sound waves.
              </div>
            </details>

            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm border !border-slate-200 group cursor-pointer transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">
                What is a sonogram? What is sonography?
                <span className="transition-transform group-open:rotate-180">
                  <ChevronDownIcon />
                </span>
              </summary>
              <div className="!mt-4 !pt-4 !border-t border-slate-100 !text-slate-600 !text-lg !leading-relaxed">
                <p className="!mb-3">A <strong>sonogram</strong> is the picture or moving image created during your exam.</p>
                <p className="!mb-3"><strong>Sonography</strong> is the medical imaging specialty that uses ultrasound to evaluate organs and tissues.</p>
                <p>A <strong>sonograph</strong> describes the ultrasound machine or the images it produces.</p>
              </div>
            </details>

            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm border !border-slate-200 group cursor-pointer transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">
                Can this test replace a CT scan?
                <span className="transition-transform group-open:rotate-180">
                  <ChevronDownIcon />
                </span>
              </summary>
              <div className="!mt-4 !pt-4 !border-t border-slate-100 !text-slate-600 !text-lg !leading-relaxed">
                In many cases abdominal ultrasound is the first‑line test because it is noninvasive and radiation‑free, but your provider may still recommend a CT or MRI for certain specific conditions if more detail is needed.
              </div>
            </details>

            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm border !border-slate-200 group cursor-pointer transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">
                Will an ultrasound see all gallstones?
                <span className="transition-transform group-open:rotate-180">
                  <ChevronDownIcon />
                </span>
              </summary>
              <div className="!mt-4 !pt-4 !border-t border-slate-100 !text-slate-600 !text-lg !leading-relaxed">
                Ultrasound is very good at detecting gallstones, especially those in the gallbladder. However, very small stones or "sludge" can occasionally be difficult to see depending on position.
              </div>
            </details>

          </div>
        </div>
      </section>

      {/* 8. Local Service Area */}
      <section aria-labelledby="service-area" className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6 !py-8">
        <div className="!max-w-5xl !mx-auto !text-center">
          <h2 id="service-area" className="sr-only">Local Service Area</h2>
          <p className="!text-xs md:!text-sm !text-slate-400 !leading-relaxed inline-block">
            <strong>Proudly serving patients in:</strong> Downers Grove, Westmont, Clarendon Hills, Lisle, Oak Brook, Hinsdale, Darien, Willowbrook, Woodridge, Lombard, Glen Ellyn, Western Springs, Villa Park, Wheaton, Burr Ridge, Indian Head Park, Naperville, Elmhurst, Westchester, La Grange, Countryside, Carol Stream, Northlake, Oakbrook Terrace, Bolingbrook, Addison, Aurora, Brookfield, Berkeley, Hillside, Broadview, Roselle, Itasca, Bensenville, Lemont, Franklin Park, Schiller Park, River Forest, Forest Park, Maywood, Bellwood, Oak Park, Oak Forest, Tinley Park, Rolling Meadows, Ridgewood, Sauganash, Crest Hill, Mount Prospect, Niles, Crystal Lawns, Edgebrook, Mayfair, Joliet, Ingalls Park, East Joliet, South Elgin, Plum Grove Village, Winthrop Village, Fernway, Hoffman Estates, Albany Park, Creekside, Valley View, Raynor Park, Arlington Heights, Forest River, Lidice, Fernway Park, Lincolnwood, Morton Grove, Cherry Hill, Gougars, Fairfax Village, Sherwood Oaks, Clintonville, Coleman, and Schaumburg.
          </p>
        </div>
      </section>

      {/* 9. Final CTA */}
      <footer className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6">
        <div className="!max-w-7xl !mx-auto !bg-slate-900 !rounded-3xl !p-10 md:!p-16 !text-center shadow-xl">
          <h2 className="!text-3xl md:!text-4xl !font-bold !text-white !mb-6">Ready to schedule your abdomen ultrasound?</h2>
          <p className="!text-xl !text-slate-300 !mb-10 !max-w-3xl !mx-auto">
            Use our online scheduling page or click <strong>Contact Us</strong> on the website to request an appointment. Our team is happy to answer questions and help you select the most appropriate exam option listed above.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/#/booking" className="!bg-blue-600 hover:!bg-blue-500 !text-white !px-10 !py-5 rounded-xl !font-bold !text-xl flex items-center transition hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto justify-center">
              Book Appointment <ArrowRight className="!ml-3 !w-6 !h-6" />
            </a>
            <a href="#contact" className="!bg-slate-800 hover:!bg-slate-700 !text-white !border !border-slate-600 hover:!border-slate-400 !px-10 !py-5 rounded-xl !font-bold !text-xl transition hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto justify-center flex items-center">
              Contact Us
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};

const ChevronDownIcon = () => (
  <svg className="!w-6 !h-6 !text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export default AbdomenUltrasound;

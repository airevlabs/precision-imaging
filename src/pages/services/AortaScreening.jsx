import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, Clock, Calendar, FileText, Activity, Stethoscope, Search, FileBadge, Info } from 'lucide-react';

const AortaScreening = () => {
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
        <title>Aorta Screening | Precision Imaging Diagnostic Center</title>
        <meta name="description" content="Safe abdominal aorta screening (AAA) in Downers Grove. High-quality vascular ultrasound serving the Chicago suburbs." />
        <meta name="keywords" content="aorta screening near me, AAA ultrasound Downers Grove, abdominal aortic aneurysm screening Chicago suburbs" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalService",
              "name": "Abdominal Aortic Aneurysm (AAA) Screening",
              "provider": {
                "@type": "MedicalOrganization",
                "name": "Precision Imaging",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Downers Grove",
                  "addressRegion": "IL"
                }
              },
              "description": "Safe, non-invasive ultrasound imaging to evaluate the abdominal aorta for aneurysms or enlargement."
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
            Aorta Screening
          </h1>
          <p className="!text-xl md:!text-2xl !mb-10 max-w-3xl !text-slate-300 font-medium !leading-relaxed">
            Safe, High‑Quality Sonography for Abdominal Aortic Aneurysm (AAA) evaluation in Downers Grove and Chicago Suburbs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/#/booking" className="!bg-blue-600 hover:!bg-blue-500 !px-8 !py-4 rounded-xl !font-semibold flex items-center justify-center transition hover:-translate-y-1 shadow-lg hover:shadow-blue-500/25 !text-white !text-lg">
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
              Every exam is performed using modern equipment that produces clear, detailed images to help evaluate your abdominal aorta. These ultrasound studies use sound waves only—there is no radiation exposure.
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
              <div className="!bg-rose-50 !w-14 !h-14 !rounded-2xl flex items-center justify-center !mb-6 text-rose-600">
                <Stethoscope className="!w-7 !h-7" />
              </div>
              <h3 className="!text-2xl !font-bold !text-slate-900 !mb-4">AAA Screening</h3>
              <p className="!text-slate-600 !leading-relaxed !flex-grow">
                Focused screening of the abdominal aorta to measure its diameter and look for aneurysm or enlargement, often recommended for adults with vascular risk factors.
              </p>
            </article>

            <article className="!bg-white !rounded-3xl !p-8 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full relative overflow-hidden">
              <div className="!bg-blue-50 !w-14 !h-14 !rounded-2xl flex items-center justify-center !mb-6 text-blue-600">
                <Search className="!w-7 !h-7" />
              </div>
              <h3 className="!text-2xl !font-bold !text-slate-900 !mb-4">Abdomen – Complete</h3>
              <p className="!text-slate-600 !leading-relaxed !flex-grow">
                Comprehensive evaluation of the liver, gallbladder, bile ducts, pancreas, spleen, kidneys, and abdominal aorta. Ideal if symptoms are widespread and not exclusively vascular.
              </p>
            </article>

            <article className="!bg-white !rounded-3xl !p-8 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full relative overflow-hidden">
              <div className="!bg-blue-50 !w-14 !h-14 !rounded-2xl flex items-center justify-center !mb-6 text-blue-600">
                <Activity className="!w-7 !h-7" />
              </div>
              <h3 className="!text-2xl !font-bold !text-slate-900 !mb-4">Aorta Follow-up</h3>
              <p className="!text-slate-600 !leading-relaxed !flex-grow">
                A scheduled, targeted exam designed to monitor the size of a previously known enlarged aorta or aneurysm over time.
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
              During your aorta screening, we look closely at the primary blood vessel in the abdomen. This diagnostic ultrasound provides vital information to your physician.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit"><CheckCircle2 className="!w-6 !h-6 !text-blue-300" /></div>
                <div>
                  <h4 className="!text-xl !font-bold !mb-2 !text-white">Aortic Diameter</h4>
                  <p className="!text-slate-100 !font-medium">Direct measurements of the aorta's width to check for swelling (aneurysm) or abnormal dilation.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit"><CheckCircle2 className="!w-6 !h-6 !text-blue-300" /></div>
                <div>
                  <h4 className="!text-xl !font-bold !mb-2 !text-white">Plaque & Calcification</h4>
                  <p className="!text-slate-100 !font-medium">Visualization of the aorta wall to identify cholesterol build-up and hardening associated with vascular disease.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit"><CheckCircle2 className="!w-6 !h-6 !text-blue-300" /></div>
                <div>
                  <h4 className="!text-xl !font-bold !mb-2 !text-white">Blood Flow</h4>
                  <p className="!text-slate-100 !font-medium">Assessment of the blood flow passing through the vessel using Doppler ultrasound functionality.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit"><CheckCircle2 className="!w-6 !h-6 !text-blue-300" /></div>
                <div>
                  <h4 className="!text-xl !font-bold !mb-2 !text-white">Iliac Arteries</h4>
                  <p className="!text-slate-100 !font-medium">Evaluation of the branches of the lower aorta as they supply blood to the legs and pelvic region.</p>
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
            <p className="!text-lg !text-slate-600 !mb-8">To help your aorta ultrasound produce the clearest images, please follow these guidelines:</p>
            <ul className="space-y-5 !mb-8">
              <li className="flex items-start">
                <div className="!bg-slate-100 !p-1.5 !rounded-full !mr-4 !mt-0.5"><CheckCircle2 className="!w-5 !h-5 !text-slate-700" /></div>
                <span className="!text-lg !text-slate-700">Do not eat or drink anything except small sips of water for <strong>6–8 hours</strong> before your appointment. This prevents bowel gas from obscuring the aorta.</span>
              </li>
              <li className="flex items-start">
                <div className="!bg-slate-100 !p-1.5 !rounded-full !mr-4 !mt-0.5"><CheckCircle2 className="!w-5 !h-5 !text-slate-700" /></div>
                <span className="!text-lg !text-slate-700">Take essential medications with a small amount of water unless your provider gives different instructions.</span>
              </li>
              <li className="flex items-start">
                <div className="!bg-slate-100 !p-1.5 !rounded-full !mr-4 !mt-0.5"><CheckCircle2 className="!w-5 !h-5 !text-slate-700" /></div>
                <span className="!text-lg !text-slate-700">Wear loose, two‑piece clothing so we can easily access your abdominal area.</span>
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
            <div className="!flex !flex-col !gap-6 !border-l-2 !border-slate-200 !ml-4 !py-4">

              <div className="!flex !gap-4 !items-start !-ml-[17px]">
                <div className="!w-8 !h-8 !rounded-full !bg-blue-600 !text-white !flex !items-center !justify-center !font-bold !flex-shrink-0 !border-4 !border-white !shadow-sm">1</div>
                <div className="!flex-1 !pt-0.5">
                  <h4 className="!text-xl !font-bold !text-slate-900 !mb-2 !mt-0">Preparation</h4>
                  <p className="!text-slate-600 !leading-relaxed !m-0">You will lie flat on a padded exam table while the technologist applies warm water-based gel over your abdomen.</p>
                </div>
              </div>

              <div className="!flex !gap-4 !items-start !-ml-[17px]">
                <div className="!w-8 !h-8 !rounded-full !bg-blue-600 !text-white !flex !items-center !justify-center !font-bold !flex-shrink-0 !border-4 !border-white !shadow-sm">2</div>
                <div className="!flex-1 !pt-0.5">
                  <h4 className="!text-xl !font-bold !text-slate-900 !mb-2 !mt-0">Imaging Process</h4>
                  <p className="!text-slate-600 !leading-relaxed !m-0">The transducer is moved across the middle of your stomach to obtain real‑time measurements. You may be asked to hold your breath briefly or shift positions.</p>
                </div>
              </div>

              <div className="!flex !gap-4 !items-start !-ml-[17px]">
                <div className="!w-8 !h-8 !rounded-full !bg-blue-600 !text-white !flex !items-center !justify-center !font-bold !flex-shrink-0 !border-4 !border-white !shadow-sm">3</div>
                <div className="!flex-1 !pt-0.5">
                  <h4 className="!text-xl !font-bold !text-slate-900 !mb-2 !mt-0">Duration</h4>
                  <p className="!text-slate-600 !leading-relaxed !m-0">A dedicated AAA screening usually takes about <strong>15–20 minutes</strong>.</p>
                </div>
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
          <div className="md:w-2/3 !text-center md:!text-left">
            <h2 id="results" className="!text-3xl md:!text-4xl !font-bold !text-slate-900 !mb-6">Results & Follow-up</h2>
            <ul className="space-y-4 !text-lg !text-slate-700 !mb-6">
              <li className="!flex !items-start">
                <ArrowRight className="!w-5 !h-5 !text-blue-500 !mr-3 !shrink-0 !mt-1" />
                <span>If a doctor order is provided, a detailed report is sent directly to your ordering provider so they can review results and plan next steps.</span>
              </li>
              <li className="!flex !items-start">
                <ArrowRight className="!w-5 !h-5 !text-blue-500 !mr-3 !shrink-0 !mt-1" />
                <span>If an aneurysm is discovered, your provider will recommend whether it needs immediate attention or simply regular monitoring.</span>
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

            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">
                What exactly is an Abdominal Aortic Aneurysm (AAA)?
                <span className="transition-transform group-open:rotate-180">
                  <ChevronDownIcon />
                </span>
              </summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">
                <p>The aorta is the main blood vessel that supplies blood to your abdomen, pelvis, and legs. An aneurysm occurs when a weaker part of the vessel wall expands or bulges out like a balloon. Without detection, it can eventually become dangerously large.</p>
              </div>
            </details>

            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">
                Who should consider getting an AAA screening?
                <span className="transition-transform group-open:rotate-180">
                  <ChevronDownIcon />
                </span>
              </summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">
                Screenings are highly recommended for men aged 65 to 75 who have ever smoked. They may also be advised for both men and women over 60 with a family history of aneurysms, or those with other significant vascular risk factors.
              </div>
            </details>

            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">
                Are there symptoms of an abdominal aortic aneurysm?
                <span className="transition-transform group-open:rotate-180">
                  <ChevronDownIcon />
                </span>
              </summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">
                Most abdominal aortic aneurysms produce no symptoms at all, which is why preventive screening is critical. If symptoms do occur, they may present as a deep, steady pain in your abdomen or on the side of your back.
              </div>
            </details>

            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">
                Is preparation necessary for a simple aorta screening?
                <span className="transition-transform group-open:rotate-180">
                  <ChevronDownIcon />
                </span>
              </summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">
                Yes. We ask that you abstain from eating or drinking anything (except small sips of water for medications) for 6 to 8 hours prior to the test to prevent stomach gas from obstructing the view of your aorta.
              </div>
            </details>

            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">
                Do I need a follow-up if my aorta is slightly enlarged?
                <span className="transition-transform group-open:rotate-180">
                  <ChevronDownIcon />
                </span>
              </summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">
                If the aorta shows slight swelling but is not dangerously large, your provider will likely recommend scheduling a routine "Aorta Follow-up" ultrasound every 6 to 12 months to monitor the growth rate.
              </div>
            </details>

            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">
                What is the difference between an AAA Screening and a Complete Abdominal Ultrasound?
                <span className="transition-transform group-open:rotate-180">
                  <ChevronDownIcon />
                </span>
              </summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">
                An AAA screening exclusively focuses on measuring the abdominal aorta. A complete abdominal ultrasound examines the aorta plus the liver, gallbladder, bile ducts, pancreas, spleen, and kidneys.
              </div>
            </details>

            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">
                How long does the aorta screening take?
                <span className="transition-transform group-open:rotate-180">
                  <ChevronDownIcon />
                </span>
              </summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">
                A dedicated AAA screening is very quick, typically taking only 15 to 20 minutes from start to finish.
              </div>
            </details>

            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">
                Does this test use radiation?
                <span className="transition-transform group-open:rotate-180">
                  <ChevronDownIcon />
                </span>
              </summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">
                No, ultrasound uses harmless, high-frequency sound waves to generate images. It is completely noninvasive and does not rely on radiation, unlike a CT scan or X-ray.
              </div>
            </details>

            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">
                What does a normal aorta measure?
                <span className="transition-transform group-open:rotate-180">
                  <ChevronDownIcon />
                </span>
              </summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">
                A normal abdominal aorta typically measures around 2 centimeters in diameter. Swelling greater than 3 centimeters is generally considered an aneurysm, and the risk of rupture increases as the diameter grows larger.
              </div>
            </details>

            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">
                Will my insurance cover an AAA screening?
                <span className="transition-transform group-open:rotate-180">
                  <ChevronDownIcon />
                </span>
              </summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">
                Medicare often covers a one-time prevention screening for individuals with specific risk factors (like a smoking history or family history). For others, check with your insurance provider or view our very affordable transparent self-pay pricing.
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
          <h2 className="!text-3xl md:!text-4xl !font-bold !text-white !mb-6">Ready to schedule your aorta screening?</h2>
          <p className="!text-xl !text-slate-300 !mb-10 !max-w-3xl !mx-auto">
            Use our online scheduling page or click <strong>Contact Us</strong> on the website to request an appointment. Our team is happy to answer questions and help you select the most appropriate exam option listed above.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/#/booking" className="!bg-blue-600 hover:!bg-blue-500 !text-white !px-10 !py-5 rounded-xl !font-bold !text-xl flex items-center transition hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto justify-center">
              Book Appointment <ArrowRight className="!ml-3 !w-6 !h-6" />
            </a>
            <a href="https://precisionimagingus.com/#/contact" className="!bg-slate-800 hover:!bg-slate-700 !text-white !border !border-slate-600 hover:!border-slate-400 !px-10 !py-5 rounded-xl !font-bold !text-xl transition hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto justify-center flex items-center">
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

export default AortaScreening;

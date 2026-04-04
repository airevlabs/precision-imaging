import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, Clock, Calendar, Search, Activity, FileBadge, Info, ChevronDown, Microscope, Zap } from 'lucide-react';

const SoftTissueUltrasound = () => {
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
        <title>Soft Tissue Ultrasound | Muscle & Tendon Imaging Downers Grove</title>
        <meta name="description" content="Expert soft tissue ultrasound in Downers Grove. Specialized imaging for lumps, muscles, and tendons in the Chicago suburbs. No radiation, clear results." />
        <meta name="keywords" content="soft tissue ultrasound near me, muscle and tendon ultrasound Downers Grove, lump ultrasound Chicago, soft tissue sonogram" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalService",
              "name": "Soft Tissue Ultrasound",
              "provider": {
                "@type": "MedicalOrganization",
                "name": "Precision Imaging",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Downers Grove",
                  "addressRegion": "IL"
                }
              },
              "description": "Specialized ultrasound imaging for evaluating soft tissue lumps, muscle tears, and tendon injuries with high-resolution diagnostic technology."
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
            Soft Tissue Ultrasound
          </h1>
          <p className="!text-xl md:!text-2xl !mb-10 max-w-3xl !text-slate-300 font-medium !leading-relaxed">
            Specialized Muscle, Tendon, and Lump Imaging in Downers Grove and the Chicago Suburbs.
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
              Our outpatient diagnostic ultrasound center provides high‑quality soft tissue imaging for patients and referring providers throughout the western Chicago suburbs.
            </p>
            <p className="!text-lg md:!text-xl !text-slate-600 !leading-relaxed">
              Every exam is performed using modern equipment that produces clear, detailed images to help your provider answer specific clinical questions. These ultrasound studies use sound waves only—there is no radiation exposure.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Available Exam Options */}
      <section aria-labelledby="exam-options" className="reveal-section flex flex-col items-center opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6 !max-w-7xl !mx-auto">
        <h2 id="exam-options" className="!text-3xl md:!text-4xl !font-bold !text-slate-900 !text-center !mb-12 w-full">Available Exam Options</h2>
        <p className="!text-center !text-lg !text-slate-600 !mb-10 !max-w-3xl !mx-auto w-full">We offer specialized soft tissue evaluations to help your provider select the study that best matches your needs:</p>
        
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 w-full max-w-[850px] mx-auto">
          <article className="!bg-white !rounded-3xl !p-8 md:!p-10 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-start items-center text-center w-full md:w-1/2">
            <div className="!bg-blue-50 !w-16 !h-16 !rounded-2xl flex items-center justify-center !mb-6 text-blue-600 shrink-0">
              <Microscope className="!w-8 !h-8" />
            </div>
            <h3 className="!text-2xl md:!text-3xl !font-bold !text-slate-900 !mb-5">Lumps & Bumps</h3>
            <p className="!text-slate-600 !text-lg !leading-relaxed !flex-grow flex items-center">
              Targeted exam of a specific area such as a lump, mass, or swollen region to determine if it is solid, cystic, or mixed.
            </p>
          </article>

          <article className="!bg-white !rounded-3xl !p-8 md:!p-10 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-start items-center text-center w-full md:w-1/2">
            <div className="!bg-indigo-50 !w-16 !h-16 !rounded-2xl flex items-center justify-center !mb-6 text-indigo-600 shrink-0">
              <Zap className="!w-8 !h-8" />
            </div>
            <h3 className="!text-2xl md:!text-3xl !font-bold !text-slate-900 !mb-5">Muscle & Tendon</h3>
            <p className="!text-slate-600 !text-lg !leading-relaxed !flex-grow flex items-center">
              Detailed evaluation of muscle tears, ligament injury, inflammation, bursitis, or tendon snapping through dynamic movement scanning.
            </p>
          </article>
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
              During your soft tissue ultrasound, we evaluate the internal structure of the area of concern. Your provider uses these findings to make an accurate diagnosis.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit"><CheckCircle2 className="!w-6 !h-6 !text-blue-300" /></div>
                <div>
                  <h4 className="!text-xl !font-bold !mb-2 !text-white">Lump Characterization</h4>
                  <p className="!text-slate-100 !font-medium">Distinguishing whether a palpable lump is solid (like a lipoma), cystic (fluid-filled), or mixed in character.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit"><CheckCircle2 className="!w-6 !h-6 !text-blue-300" /></div>
                <div>
                  <h4 className="!text-xl !font-bold !mb-2 !text-white">Injury Assessment</h4>
                  <p className="!text-slate-100 !font-medium">Identifying signs of muscle or tendon tear, inflammation, bursitis, or localized fluid collections.</p>
                </div>
              </div>
              <div className="flex gap-4 md:col-span-2">
                <div className="!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit"><CheckCircle2 className="!w-6 !h-6 !text-blue-300" /></div>
                <div>
                  <h4 className="!text-xl !font-bold !mb-2 !text-white">Dynamic Evaluation</h4>
                  <p className="!text-slate-100 !font-medium">Observing the movement of tendons or muscles in real-time while you move, helping identify impingement, popping, or snapping issues.</p>
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
            <p className="!text-lg !text-slate-600 !mb-8">Soft tissue exams require very little preparation. Please follow these simple guidelines:</p>
            <ul className="space-y-5 !mb-8">
              <li className="flex items-start">
                <div className="!bg-slate-100 !p-1.5 !rounded-full !mr-4 !mt-0.5"><CheckCircle2 className="!w-5 !h-5 !text-slate-700" /></div>
                <span className="!text-lg !text-slate-700"><strong>No fasting:</strong> You may eat and drink normally before your appointment.</span>
              </li>
              <li className="flex items-start">
                <div className="!bg-slate-100 !p-1.5 !rounded-full !mr-4 !mt-0.5"><CheckCircle2 className="!w-5 !h-5 !text-slate-700" /></div>
                <span className="!text-lg !text-slate-700">Wear clothing that allows easy access to the area (short sleeves, shorts, or loose garments).</span>
              </li>
              <li className="flex items-start">
                <div className="!bg-slate-100 !p-1.5 !rounded-full !mr-4 !mt-0.5"><CheckCircle2 className="!w-5 !h-5 !text-slate-700" /></div>
                <span className="!text-lg !text-slate-700">Bring any prior imaging reports or doctor's notes related to the area being examined.</span>
              </li>
            </ul>
            <div className="!bg-blue-50 !border-l-4 !border-blue-600 !p-5 !rounded-r-xl">
              <p className="!text-blue-900 !font-medium !flex !items-center !gap-2">
                <Clock className="!w-5 !h-5" /> Most exams are completed in 15–30 minutes.
              </p>
            </div>
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
                  <h4 className="!text-xl !font-bold !text-slate-900 !mb-2 !mt-0">Introduction</h4>
                  <p className="!text-slate-600 !leading-relaxed !m-0">The technologist will confirm the area of concern and explain exactly how the scan will be performed.</p>
                </div>
              </div>

              <div className="!flex !gap-4 !items-start !-ml-[17px]">
                <div className="!w-8 !h-8 !rounded-full !bg-blue-600 !text-white !flex !items-center !justify-center !font-bold !flex-shrink-0 !border-4 !border-white !shadow-sm">2</div>
                <div className="!flex-1 !pt-0.5">
                  <h4 className="!text-xl !font-bold !text-slate-900 !mb-2 !mt-0">Scanning</h4>
                  <p className="!text-slate-600 !leading-relaxed !m-0">Warm gel is applied. The technologist uses a high-frequency transducer to get high-resolution images of the tissues.</p>
                </div>
              </div>

              <div className="!flex !gap-4 !items-start !-ml-[17px]">
                <div className="!w-8 !h-8 !rounded-full !bg-blue-600 !text-white !flex !items-center !justify-center !font-bold !flex-shrink-0 !border-4 !border-white !shadow-sm">3</div>
                <div className="!flex-1 !pt-0.5">
                  <h4 className="!text-xl !font-bold !text-slate-900 !mb-2 !mt-0">Dynamic Motion</h4>
                  <p className="!text-slate-600 !leading-relaxed !m-0">You may be asked to move or flex nearby joints so we can see your muscles and tendons in motion on the screen.</p>
                </div>
              </div>

            </div>
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
                <span>A detailed report is sent directly to your ordering provider after review by a specialized radiologist.</span>
              </li>
              <li className="!flex !items-start">
                <ArrowRight className="!w-5 !h-5 !text-blue-500 !mr-3 !shrink-0 !mt-1" />
                <span>Your doctor will use these results to determine the best treatment, such as physical therapy, medication, or further diagnostic testing.</span>
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

            <FAQItem 
              question="What is a soft tissue ultrasound?"
              answer="It is a painless diagnostic test that uses sound waves to create images of the muscles, tendons, ligaments, and other soft tissues (including lumps or cysts) just beneath the skin."
            />

            <FAQItem 
              question="Can ultrasound tell if a lump is cancer?"
              answer="Ultrasound is excellent at distinguishing simple fluid-filled cysts from solid masses. While it can identify suspicious features, a tissue biopsy or MRI may still be needed for a definitive cancer diagnosis."
            />

            <FAQItem 
              question="Will this exam hurt?"
              answer="Generally, no. You may feel mild pressure when the technologist scans specifically over a tender or injured area, but the sound waves themselves are completely painless."
            />

            <FAQItem 
              question="What is a 'dynamic' ultrasound scan?"
              answer="Unlike an X-ray or MRI where you must remain perfectly still, ultrasound allows us to scan you while you move your arm, leg, or joint. This helps us see if a tendon is 'snapping' or 'catching' during movement."
            />

            <FAQItem 
              question="Is a sonogram different from an ultrasound?"
              answer="No, they describe the same thing. Ultrasound is the technology (sound waves), and a sonogram is the resulting image or picture we look at."
            />

            <FAQItem 
              question="What is a lipoma?"
              answer="A lipoma is a common, non-cancerous growth of fatty tissue. Ultrasound is often used to confirm that a palpable lump has the characteristic features of a lipoma."
            />

            <FAQItem 
              question="Do I need to fast for a soft tissue scan?"
              answer="No fasting is required. You can eat, drink, and take your usual medications before your appointment."
            />

            <FAQItem 
              question="How long does the test take?"
              answer="Most targeted soft tissue scans are relatively quick, typically taking between 15 and 30 minutes depending on the complexity of the area."
            />

            <FAQItem 
              question="Can ultrasound show a muscle tear?"
              answer="Yes, ultrasound is very effective at seeing muscle fibers. We can often identify the exact location and severity of a tear or hematoma (bruise) within the muscle."
            />

            <FAQItem 
              question="What should I wear?"
              answer="Please wear comfortable, loose-fitting clothing that allows the technologist to easily reach the part of your body being scanned without needing to remove your clothes entirely."
            />

          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <footer className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6">
        <div className="!max-w-7xl !mx-auto !bg-slate-900 !rounded-3xl !p-10 md:!p-16 !text-center shadow-xl">
          <h2 className="!text-3xl md:!text-4xl !font-bold !text-white !mb-6">Ready to schedule your soft tissue ultrasound?</h2>
          <p className="!text-xl !text-slate-300 !mb-10 !max-w-3xl !mx-auto">
            Use our online scheduling page or click <strong>Contact Us</strong> on the website to request an appointment. Our team is here to help you get the clear answers you need.
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
      </footer>

      {/* 8. Local Service Area */}
      <section aria-labelledby="service-area" className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6 !py-8">
        <div className="!max-w-5xl !mx-auto !text-center">
          <h2 id="service-area" className="sr-only">Local Service Area</h2>
          <p className="!text-xs md:!text-sm !text-slate-400 !leading-relaxed inline-block">
            <strong>Serving patients in:</strong> Downers Grove, Westmont, Clarendon Hills, Lisle, Oak Brook, Hinsdale, Darien, Willowbrook, Woodridge, Lombard, Glen Ellyn, Western Springs, Villa Park, Wheaton, Burr Ridge, Indian Head Park, Naperville, Elmhurst, Westchester, La Grange, Countryside, Carol Stream, Northlake, Oakbrook Terrace, Bolingbrook, Addison, Aurora, Brookfield, Berkeley, Hillside, Broadview, Roselle, Itasca, Bensenville, Lemont, Franklin Park, Schiller Park, River Forest, Forest Park, Maywood, Bellwood, Oak Park, Oak Forest, Tinley Park, Rolling Meadows, Ridgewood, Sauganash, Crest Hill, Mount Prospect, Niles, Crystal Lawns, Edgebrook, Mayfair, Joliet, Ingalls Park, East Joliet, South Elgin, Plum Grove Village, Winthrop Village, Fernway, Hoffman Estates, Albany Park, Creekside, Valley View, Raynor Park, Arlington Heights, Forest River, Lidice, Fernway Park, Lincolnwood, Morton Grove, Cherry Hill, Gougars, Fairfax Village, Sherwood Oaks, Clintonville, Coleman, and Schaumburg.
          </p>
        </div>
      </section>

    </div>
  );
};

const FAQItem = ({ question, answer }) => (
  <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
    <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none focus:outline-none">
      {question}
      <span className="transition-transform group-open:rotate-180">
        <ChevronDown className="!w-6 !h-6 !text-blue-500" />
      </span>
    </summary>
    <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">
      {answer}
    </div>
  </details>
);

export default SoftTissueUltrasound;

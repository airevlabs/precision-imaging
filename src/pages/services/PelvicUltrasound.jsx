import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, Clock, Calendar, Search, Activity, Baby, FileBadge, Info, ChevronDown } from 'lucide-react';

const PelvicUltrasound = () => {
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
        <title>Pelvic Ultrasound | Precision Imaging Diagnostic Center</title>
        <meta name="description" content="High-quality pelvic ultrasound in Downers Grove. Expert transvaginal and transabdominal imaging for uterus and ovaries in the Chicago suburbs." />
        <meta name="keywords" content="pelvic ultrasound near me, transvaginal ultrasound Downers Grove, uterus and ovary ultrasound Chicago, pelvic sonogram" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalService",
              "name": "Pelvic Ultrasound",
              "provider": {
                "@type": "MedicalOrganization",
                "name": "Precision Imaging",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Downers Grove",
                  "addressRegion": "IL"
                }
              },
              "description": "Expert pelvic imaging including transabdominal and transvaginal ultrasounds for comprehensive evaluation of the uterus and ovaries."
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
            Pelvic Ultrasound
          </h1>
          <p className="!text-xl md:!text-2xl !mb-10 max-w-3xl !text-slate-300 font-medium !leading-relaxed">
            Professional Pelvic Imaging for Uterus and Ovaries in Downers Grove and the Chicago Suburbs.
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
              Our outpatient diagnostic ultrasound center provides high‑quality pelvic imaging for patients and referring providers throughout the western Chicago suburbs.
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
        <p className="!text-center !text-lg !text-slate-600 !mb-10 !max-w-3xl !mx-auto w-full">We offer the following exam options in this category so your provider can select the study that best matches your needs:</p>
        
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 w-full max-w-[850px] mx-auto">
          <article className="!bg-white !rounded-3xl !p-8 md:!p-10 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-start items-center text-center w-full md:w-1/2">
            <div className="!bg-blue-50 !w-16 !h-16 !rounded-2xl flex items-center justify-center !mb-6 text-blue-600 shrink-0">
              <Search className="!w-8 !h-8" />
            </div>
            <h3 className="!text-2xl md:!text-3xl !font-bold !text-slate-900 !mb-5">Transabdominal Pelvic</h3>
            <p className="!text-slate-600 !text-lg !leading-relaxed !flex-grow flex items-center">
              External pelvic exam performed through the lower abdomen with a full bladder; often the first step in evaluation.
            </p>
          </article>

          <article className="!bg-white !rounded-3xl !p-8 md:!p-10 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-start items-center text-center w-full md:w-1/2">
            <div className="!bg-purple-50 !w-16 !h-16 !rounded-2xl flex items-center justify-center !mb-6 text-purple-600 shrink-0">
              <Activity className="!w-8 !h-8" />
            </div>
            <h3 className="!text-2xl md:!text-3xl !font-bold !text-slate-900 !mb-5">Transvaginal Pelvic</h3>
            <p className="!text-slate-600 !text-lg !leading-relaxed !flex-grow flex items-center">
              Internal exam using a thin probe placed in the vagina for closer views of the uterus and ovaries when appropriate.
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
              During your pelvic ultrasound, we evaluate multiple key indicators. Your provider uses these findings alongside your history, physical exam, and lab results to make an accurate diagnosis.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit"><CheckCircle2 className="!w-6 !h-6 !text-blue-300" /></div>
                <div>
                  <h4 className="!text-xl !font-bold !mb-2 !text-white">Uterine Assessment</h4>
                  <p className="!text-slate-100 !font-medium">Evaluation of uterine size, shape, presence of fibroids, and endometrial thickness.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit"><CheckCircle2 className="!w-6 !h-6 !text-blue-300" /></div>
                <div>
                  <h4 className="!text-xl !font-bold !mb-2 !text-white">Ovarian Study</h4>
                  <p className="!text-slate-100 !font-medium">Monitoring of ovary size, detection of cysts or masses, and blood‑flow patterns.</p>
                </div>
              </div>
              <div className="flex gap-4 md:col-span-2">
                <div className="!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit"><CheckCircle2 className="!w-6 !h-6 !text-blue-300" /></div>
                <div>
                  <h4 className="!text-xl !font-bold !mb-2 !text-white">Abnormality Detection</h4>
                  <p className="!text-slate-100 !font-medium">Searching for presence of pelvic fluid or other abnormalities that may explain pain or abnormal bleeding.</p>
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
            <p className="!text-lg !text-slate-600 !mb-8">To help your pelvic ultrasound produce the clearest images, please follow these guidelines:</p>
            <ul className="space-y-5 !mb-8">
              <li className="flex items-start">
                <div className="!bg-slate-100 !p-1.5 !rounded-full !mr-4 !mt-0.5"><CheckCircle2 className="!w-5 !h-5 !text-slate-700" /></div>
                <span className="!text-lg !text-slate-700"><strong>Transabdominal exams:</strong> Drink enough water so that your bladder is comfortably full at appointment time.</span>
              </li>
              <li className="flex items-start">
                <div className="!bg-slate-100 !p-1.5 !rounded-full !mr-4 !mt-0.5"><CheckCircle2 className="!w-5 !h-5 !text-slate-700" /></div>
                <span className="!text-lg !text-slate-700"><strong>Transvaginal imaging:</strong> You will be asked to empty your bladder just before the exam begins.</span>
              </li>
              <li className="flex items-start">
                <div className="!bg-slate-100 !p-1.5 !rounded-full !mr-4 !mt-0.5"><CheckCircle2 className="!w-5 !h-5 !text-slate-700" /></div>
                <span className="!text-lg !text-slate-700">Wear comfortable, two‑piece clothing. Consider bringing a sanitary pad if currently bleeding.</span>
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
                  <h4 className="!text-xl !font-bold !text-slate-900 !mb-2 !mt-0">Introduction</h4>
                  <p className="!text-slate-600 !leading-relaxed !m-0">Your technologist will explain each step and confirm which pelvic ultrasound type your provider ordered.</p>
                </div>
              </div>

              <div className="!flex !gap-4 !items-start !-ml-[17px]">
                <div className="!w-8 !h-8 !rounded-full !bg-blue-600 !text-white !flex !items-center !justify-center !font-bold !flex-shrink-0 !border-4 !border-white !shadow-sm">2</div>
                <div className="!flex-1 !pt-0.5">
                  <h4 className="!text-xl !font-bold !text-slate-900 !mb-2 !mt-0">Imaging Process</h4>
                  <p className="!text-slate-600 !leading-relaxed !m-0">Warm gel is used for external scans. For internal scans, a thin, covered probe is gently inserted for optimal detail.</p>
                </div>
              </div>

              <div className="!flex !gap-4 !items-start !-ml-[17px]">
                <div className="!w-8 !h-8 !rounded-full !bg-blue-600 !text-white !flex !items-center !justify-center !font-bold !flex-shrink-0 !border-4 !border-white !shadow-sm">3</div>
                <div className="!flex-1 !pt-0.5">
                  <h4 className="!text-xl !font-bold !text-slate-900 !mb-2 !mt-0">Duration</h4>
                  <p className="!text-slate-600 !leading-relaxed !m-0">Most pelvic ultrasounds take <strong>20–30 minutes</strong> and are performed with close attention to privacy and comfort.</p>
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

            <FAQItem 
              question="Is a sonogram different from an ultrasound?"
              answer="No, they describe the same procedure. Ultrasound is the technology using high-frequency sound waves, and a sonogram is the image produced during the exam."
            />

            <FAQItem 
              question="What is a transvaginal ultrasound?"
              answer="A transvaginal ultrasound is an internal pelvic exam where a thin, sanitized probe is gently placed in the vagina. This provides highly detailed images of the uterus and ovaries that may not be possible through the abdomen alone."
            />

            <FAQItem 
              question="Do I have to have a transvaginal exam?"
              answer="Transvaginal imaging provides the clearest detail for the provider, but it is entirely your choice. You may decline the internal portion; however, the external images may be less detailed."
            />

            <FAQItem 
              question="Why do I need a full bladder for an external pelvic scan?"
              answer="A full bladder pushes the air-filled bowel out of the way and acts as a 'window' to let sound waves pass through more easily to the uterus and ovaries, resulting in much clearer images."
            />

            <FAQItem 
              question="Is pelvic ultrasound safe during my period?"
              answer="Yes, it is perfectly safe and common to perform pelvic ultrasounds during menstruation. In fact, for certain evaluations like fibroids or cysts, your doctor may even request it at a specific time in your cycle."
            />

            <FAQItem 
              question="Does a pelvic ultrasound show endometriosis?"
              answer="While ultrasound can detect certain signs of endometriosis like 'chocolate cysts' (endometriomas), it may not see all small areas of endometrial tissue. Your provider uses the scan as one piece of the diagnostic puzzle."
            />

            <FAQItem 
              question="How long until my doctor gets the results?"
              answer="A specialized radiologist reviews the images and sends a formal report to your ordering doctor, typically within 24–48 hours."
            />

            <FAQItem 
              question="Can ultrasound tell if I am pregnant?"
              answer="Yes, pelvic ultrasound can confirm pregnancy. However, if you are very early in your pregnancy (less than 5-6 weeks), a specialized OB ultrasound might be more appropriate to confirm a heartbeat."
            />

            <FAQItem 
              question="Is a pelvic ultrasound painful?"
              answer="Most patients find the exam comfortable. You may feel a bit of pressure from the transducer on a full bladder, or mild pressure during a transvaginal exam, but it should not be painful."
            />

            <FAQItem 
              question="What is sonography?"
              answer="Sonography is the medical imaging specialty itself. It is the skilled practice of using high-frequency sound waves to visualize organs, blood vessels, and soft tissues for diagnostic purposes."
            />

          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <footer className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6">
        <div className="!max-w-7xl !mx-auto !bg-slate-900 !rounded-3xl !p-10 md:!p-16 !text-center shadow-xl">
          <h2 className="!text-3xl md:!text-4xl !font-bold !text-white !mb-6">Ready to schedule your pelvic ultrasound?</h2>
          <p className="!text-xl !text-slate-300 !mb-10 !max-w-3xl !mx-auto">
            Use our online scheduling page or click <strong>Contact Us</strong> on the website to request an appointment. Our team is happy to answer questions and help you select the most appropriate exam option.
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

export default PelvicUltrasound;

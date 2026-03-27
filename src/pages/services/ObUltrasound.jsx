import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, Clock, Calendar, Activity, Heart, Info, FileBadge, Baby, Mail, ShieldCheck, Users } from 'lucide-react';

const ObUltrasound = () => {
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
        <title>OB Ultrasound (Dating & Gender Reveal) | Precision Imaging</title>
        <meta name="description" content="Clear, state-of-the-art pregnancy ultrasounds in Downers Grove and the Chicago suburbs. Specializing in accurate early dating and memorable gender reveals." />
        <meta name="keywords" content="OB ultrasound near me, pregnancy ultrasound Downers Grove, gender reveal ultrasound Chicago suburbs, early viability scan, pregnancy sonogram" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "MedicalService",
                  "name": "OB Ultrasound (Dating & Gender Reveal)",
                  "provider": {
                    "@type": "MedicalOrganization",
                    "name": "Precision Imaging",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Downers Grove",
                      "addressRegion": "IL"
                    }
                  },
                  "description": "High-quality diagnostic ultrasound for confirmed dating and memorable gender reveals with clear imaging and a welcoming atmosphere."
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Is an ultrasound safe for my baby?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, ultrasound is considered exceptionally safe for both mother and baby. It uses high-frequency sound waves—not radiation—to create images, and has been safely utilized in obstetrics for decades."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "When is the best time for a dating ultrasound?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The optimal time for a dating (or early viability) ultrasound is between 8 and 13 weeks of gestation, when measuring the baby offers the most accurate due date prediction."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "When is the best time for a gender reveal ultrasound?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For the clearest anatomical visualization and gender determination, the sweet spot is typically between 16 and 20 weeks of pregnancy."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can I bring my family or partner to the appointment?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely! We encourage you to bring your partner, children, or a loved one to share in this joyful experience. Our outpatient clinic is specifically designed to be family-friendly and welcoming."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Why do I need a full bladder for early pregnancy exams?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "In the first trimester, your uterus sits deep within the pelvis. A comfortably full bladder lifts the uterus up and acts as an acoustic window, allowing sound waves to clearly visualize your early pregnancy."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What if the baby is hiding or uncooperative for the gender reveal?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "If the baby is in a challenging position, we don’t rush! We may have you shift positions or take a short walk to encourage the baby down a bit. Occasionally, we will recommend a short follow-up visit if we absolutely cannot get a definitive, clear image."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do I get to take images home?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes! For self-pay patients and ordered clinical scans, images will be provided on a CD after the exam, allowing you to view and share these early memories."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How accurate is the due date given by an early ultrasound?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "First‑trimester dating ultrasounds are typically highly accurate—usually within about one week—and are clinically considered the most reliable method for confirming your due date."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can you always determine the gender with 100% certainty?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "While our state-of-the-art ultrasound machines provide exceptionally clear imaging and our technologists are highly trained, gender determination always depends on fetal positioning and fluid levels. While accuracy is incredibly high, 100% guarantees cannot be made universally."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Is this the same as an ultrasound?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. The terms sonogram, sonography, and ultrasound all describe the exact same imaging test utilizing sound waves."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What is a sonogram?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A sonogram is the technical term for the picture or moving image created and presented during your ultrasound exam."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What is sonography?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sonography is the medical imaging specialty focusing on the use of ultrasound waves to evaluate the developing fetus, as well as organs, vessels, and soft tissues throughout the body."
                      }
                    }
                  ]
                }
              ]
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
            OB Ultrasound (Dating & Gender Reveal)
          </h1>
          <p className="!text-xl md:!text-2xl !mb-10 max-w-3xl !text-slate-300 font-medium !leading-relaxed">
            Experience the joy of seeing your baby with our dedicated OB ultrasounds. From early dating and heartbeat confirmation to memorable, picture-perfect gender reveals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://precisionimagingus.com/#/booking" className="!bg-blue-600 hover:!bg-blue-500 !px-8 !py-4 rounded-xl !font-semibold flex items-center justify-center transition hover:-translate-y-1 shadow-lg hover:shadow-blue-500/25 !text-white !text-lg w-full sm:w-auto">
              Book Appointment <Calendar className="!ml-2 !w-5 !h-5" />
            </a>
            <a href="https://precisionimagingus.com/#/contact" className="!bg-transparent border-2 !border-slate-600 hover:!border-white hover:!bg-white/10 !px-8 !py-4 rounded-xl !font-semibold flex items-center justify-center transition hover:-translate-y-1 !text-white !text-lg w-full sm:w-auto">
              Contact Us
            </a>
          </div>
        </div>
      </header>

      {/* 1. The Precision OB Experience */}
      <section aria-labelledby="center-overview" className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6">
        <div className="!max-w-7xl !mx-auto !text-center">
          <h2 id="center-overview" className="!text-3xl md:!text-4xl !font-bold !text-slate-900 !mb-6">The Precision OB Experience</h2>
          <p className="!text-center !text-lg !text-slate-600 !mb-12 !max-w-3xl !mx-auto">
            Your pregnancy journey is extraordinary. We believe your imaging experience should reflect that, which is why we've designed our center to prioritize comfort, clarity, and celebration.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <article className="!bg-white !rounded-3xl !p-8 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full items-center text-center">
              <div className="!bg-blue-50 !w-16 !h-16 !rounded-full flex items-center justify-center !mb-6 text-blue-600">
                <ShieldCheck className="!w-8 !h-8" />
              </div>
              <h3 className="!text-2xl !font-bold !text-slate-900 !mb-4">Zero Radiation</h3>
              <p className="!text-slate-600 !leading-relaxed !flex-grow">
                Our state-of-the-art imaging strictly uses safe, high-frequency sound waves. Complete peace of mind for you and your baby.
              </p>
            </article>

            <article className="!bg-white !rounded-3xl !p-8 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full items-center text-center">
              <div className="!bg-blue-50 !w-16 !h-16 !rounded-full flex items-center justify-center !mb-6 text-blue-600">
                <Users className="!w-8 !h-8" />
              </div>
              <h3 className="!text-2xl !font-bold !text-slate-900 !mb-4">Family Friendly</h3>
              <p className="!text-slate-600 !leading-relaxed !flex-grow">
                Unlike crowded hospital waiting rooms, our welcoming outpatient environment explicitly encourages partners and loved ones to join in the room.
              </p>
            </article>

            <article className="!bg-white !rounded-3xl !p-8 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full items-center text-center">
              <div className="!bg-blue-50 !w-16 !h-16 !rounded-full flex items-center justify-center !mb-6 text-blue-600">
                <Activity className="!w-8 !h-8" />
              </div>
              <h3 className="!text-2xl !font-bold !text-slate-900 !mb-4">Unmatched Clarity</h3>
              <p className="!text-slate-600 !leading-relaxed !flex-grow">
                Our modern equipment produces incredibly sharp, detailed real-time images, bringing you closer to your baby before they even arrive.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Exam Options Map section - Light Slate */}
      <section aria-labelledby="exam-options" className="reveal-section flex flex-col items-center opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6 !max-w-7xl !mx-auto">
        <h2 id="exam-options" className="!text-3xl md:!text-4xl !font-bold !text-slate-900 !text-center !mb-6 w-full">Our Specialized Pregnancy Ultrasounds</h2>
        <p className="!text-center !text-lg !text-slate-600 !mb-10 !max-w-3xl !mx-auto w-full">We offer the following exam options in this category:</p>
        
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 w-full max-w-[850px] mx-auto">
          <article className="!bg-white !rounded-3xl !p-8 md:!p-10 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-start items-center text-center w-full md:w-1/2">
            <div className="!bg-purple-50 !w-16 !h-16 !rounded-2xl flex items-center justify-center !mb-6 text-purple-600 shrink-0">
              <Baby className="!w-8 !h-8" />
            </div>
            <h3 className="!text-2xl md:!text-3xl !font-bold !text-slate-900 !mb-5">OB Dating Ultrasound</h3>
            <p className="!text-slate-600 !text-lg !leading-relaxed !flex-grow flex items-center">
              Early pregnancy exam, usually performed between 8–13 weeks, to confirm early viability, measure the baby, and establish or definitively confirm the due date.
            </p>
          </article>

          <article className="!bg-white !rounded-3xl !p-8 md:!p-10 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-start items-center text-center w-full md:w-1/2">
            <div className="!bg-blue-50 !w-16 !h-16 !rounded-2xl flex items-center justify-center !mb-6 text-blue-600 shrink-0">
              <Heart className="!w-8 !h-8" />
            </div>
            <h3 className="!text-2xl md:!text-3xl !font-bold !text-slate-900 !mb-5">OB Gender Reveal Ultrasound</h3>
            <p className="!text-slate-600 !text-lg !leading-relaxed !flex-grow flex items-center">
              A joyous second‑trimester milestone. Typically from 16–20 weeks, focused on confirming fetal sex while also viewing basic anatomy and amniotic fluid levels. Perfect for parents planning a celebration.
            </p>
          </article>
        </div>
      </section>

      {/* 3. What These Exams Show */}
      <section aria-labelledby="what-it-shows" className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6">
        <div className="!max-w-5xl !mx-auto !bg-slate-900 !rounded-3xl !p-8 md:!p-12 !shadow-xl !text-white overflow-hidden relative">
          <div className="!absolute !bottom-0 !right-0 !opacity-5 pointer-events-none">
            <Baby className="!w-96 !h-96" />
          </div>
          <div className="relative z-10">
            <h2 id="what-it-shows" className="!text-3xl md:!text-4xl !font-bold !text-white !mb-8">What These Exams Show</h2>
            <p className="!text-lg !text-slate-100 !font-medium !mb-10 !leading-relaxed">
              These scans balance emotional reassurance with critical clinical insights. Depending on the stage of your pregnancy, we systematically evaluate:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit"><CheckCircle2 className="!w-6 !h-6 !text-blue-300" /></div>
                <div>
                  <h4 className="!text-xl !font-bold !mb-2 !text-white">Heartbeat & Viability</h4>
                  <p className="!text-slate-100 !font-medium">Confirms early growth patterns, the number of fetuses, and the fetal heartbeat.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit"><CheckCircle2 className="!w-6 !h-6 !text-blue-300" /></div>
                <div>
                  <h4 className="!text-xl !font-bold !mb-2 !text-white">Due Date Accuracy</h4>
                  <p className="!text-slate-100 !font-medium">Calculates gestational age and your estimated due date based on precise crown‑rump length measurements.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit"><CheckCircle2 className="!w-6 !h-6 !text-blue-300" /></div>
                <div>
                  <h4 className="!text-xl !font-bold !mb-2 !text-white">Fetal Position & Anatomy</h4>
                  <p className="!text-slate-100 !font-medium">Identifies position, confirms basic anatomic landmarks, and checks placenta location during mid-pregnancy.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit"><CheckCircle2 className="!w-6 !h-6 !text-blue-300" /></div>
                <div>
                  <h4 className="!text-xl !font-bold !mb-2 !text-white">The Gender Reveal</h4>
                  <p className="!text-slate-100 !font-medium">Pinpoints fetal sex and verifies healthy amniotic‑fluid volume for your complete peace of mind.</p>
                </div>
              </div>
            </div>
            <div className="!mt-10 !pt-6 !border-t !border-white/20">
              <p className="!text-slate-200 !italic">
                Your primary provider uses these findings alongside your history, physical exam, and lab results to make an accurate diagnosis.
              </p>
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
            <p className="!text-lg !text-slate-600 !mb-8">To help your pregnancy ultrasound produce the clearest images, please follow these guidelines:</p>
            <ul className="space-y-5 !mb-8">
              <li className="flex items-start">
                <div className="!bg-slate-100 !p-1.5 !rounded-full !mr-4 !mt-0.5"><CheckCircle2 className="!w-5 !h-5 !text-slate-700" /></div>
                <span className="!text-lg !text-slate-700"><strong>Full Bladder is Essential (Early Scans):</strong> For early dating scans, arrive with a comfortably full bladder to provide a clear view of the deep uterus.</span>
              </li>
              <li className="flex items-start">
                <div className="!bg-slate-100 !p-1.5 !rounded-full !mr-4 !mt-0.5"><CheckCircle2 className="!w-5 !h-5 !text-slate-700" /></div>
                <span className="!text-lg !text-slate-700"><strong>Comfortable Clothing:</strong> Wear a comfortable, two‑piece outfit so the technologist can seamlessly access your abdomen without requiring you to change.</span>
              </li>
              <li className="flex items-start">
                <div className="!bg-slate-100 !p-1.5 !rounded-full !mr-4 !mt-0.5"><CheckCircle2 className="!w-5 !h-5 !text-slate-700" /></div>
                <span className="!text-lg !text-slate-700"><strong>Keeping the Secret:</strong> Planning a party? Let our sonographer know immediately if you would like the gender written securely in a sealed envelope!</span>
              </li>
            </ul>
            <div className="!bg-blue-50 !border-l-4 !border-blue-600 !p-5 !rounded-r-xl">
              <p className="!text-blue-900 !font-medium !flex !items-center !gap-2">
                <Clock className="!w-5 !h-5" /> If your appointment combines more than one ultrasound type, our scheduling team will review the best preparation plan with you.
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
                  <h4 className="!text-xl !font-bold !text-slate-900 !mb-2 !mt-0">Relax on the Table</h4>
                  <p className="!text-slate-600 !leading-relaxed !m-0">You will lie on a comfortably padded table while warm, water-based gel is applied to your lower abdomen.</p>
                </div>
              </div>
              <div className="!flex !gap-4 !items-start !-ml-[17px]">
                <div className="!w-8 !h-8 !rounded-full !bg-blue-600 !text-white !flex !items-center !justify-center !font-bold !flex-shrink-0 !border-4 !border-white !shadow-sm">2</div>
                <div className="!flex-1 !pt-0.5">
                  <h4 className="!text-xl !font-bold !text-slate-900 !mb-2 !mt-0">Real-Time Viewing</h4>
                  <p className="!text-slate-600 !leading-relaxed !m-0">The transducer is moved gently over your belly to obtain real‑time images of your baby and begin measurements.</p>
                </div>
              </div>
              <div className="!flex !gap-4 !items-start !-ml-[17px]">
                <div className="!w-8 !h-8 !rounded-full !bg-blue-600 !text-white !flex !items-center !justify-center !font-bold !flex-shrink-0 !border-4 !border-white !shadow-sm">3</div>
                <div className="!flex-1 !pt-0.5">
                  <h4 className="!text-xl !font-bold !text-slate-900 !mb-2 !mt-0">The Keepsakes</h4>
                  <p className="!text-slate-600 !leading-relaxed !m-0">We capture keepsake images when appropriate, answer questions, and do our best to keep the atmosphere relaxed. Dating scans take 20–30 mins; gender‑reveals typically last 25–40 mins.</p>
                </div>
              </div>
            </div>
            <p className="!text-sm !text-slate-500 !mt-6 !italic">Throughout the exam you are welcome to ask questions; our technologist will let you know when each part is complete.</p>
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
                <span>If a doctor order is provided, a detailed clinical radiology report is sent directly to your provider so they can review results and plan next steps.</span>
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

            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">
                Is an ultrasound safe for my baby?
                <span className="transition-transform group-open:rotate-180">
                  <ChevronDownIcon />
                </span>
              </summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">
                Yes, ultrasound is considered exceptionally safe for both mother and baby. It uses high-frequency sound waves—not radiation—to create images, and has been safely utilized in obstetrics for decades.
              </div>
            </details>

            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">
                When is the best time for a dating ultrasound?
                <span className="transition-transform group-open:rotate-180">
                  <ChevronDownIcon />
                </span>
              </summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">
                The optimal time for a dating (or early viability) ultrasound is between 8 and 13 weeks of gestation, when measuring the baby offers the most accurate due date prediction.
              </div>
            </details>

            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">
                When is the best time for a gender reveal ultrasound?
                <span className="transition-transform group-open:rotate-180">
                  <ChevronDownIcon />
                </span>
              </summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">
                For the clearest anatomical visualization and gender determination, the sweet spot is typically between 16 and 20 weeks of pregnancy.
              </div>
            </details>

            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">
                Can I bring my family or partner to the appointment?
                <span className="transition-transform group-open:rotate-180">
                  <ChevronDownIcon />
                </span>
              </summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">
                Absolutely! We encourage you to bring your partner, children, or a loved one to share in this joyful experience. Our outpatient clinic is specifically designed to be family-friendly and welcoming.
              </div>
            </details>

            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">
                Why do I need a full bladder for early pregnancy exams?
                <span className="transition-transform group-open:rotate-180">
                  <ChevronDownIcon />
                </span>
              </summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">
                In the first trimester, your uterus sits deep within the pelvis. A comfortably full bladder lifts the uterus up and acts as an acoustic window, allowing sound waves to clearly visualize your early pregnancy.
              </div>
            </details>

            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">
                What if the baby is hiding or uncooperative for the gender reveal?
                <span className="transition-transform group-open:rotate-180">
                  <ChevronDownIcon />
                </span>
              </summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">
                If the baby is in a challenging position, we don’t rush! We may have you shift positions or take a short walk to encourage the baby down a bit. Occasionally, we will recommend a short follow-up visit if we absolutely cannot get a definitive, clear image.
              </div>
            </details>

            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">
                Do I get to take images home?
                <span className="transition-transform group-open:rotate-180">
                  <ChevronDownIcon />
                </span>
              </summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">
                Yes! For self-pay patients and ordered clinical scans, images will be provided on a CD after the exam, allowing you to view and share these early memories. Keepsake printed images may also be provided when appropriate.
              </div>
            </details>

            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">
                How accurate is the due date given by an early ultrasound?
                <span className="transition-transform group-open:rotate-180">
                  <ChevronDownIcon />
                </span>
              </summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">
                First‑trimester dating ultrasounds are typically highly accurate—usually within about one week—and are clinically considered the most reliable method for confirming your due date compared to LMP.
              </div>
            </details>

            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">
                Can you always determine the gender with 100% certainty?
                <span className="transition-transform group-open:rotate-180">
                  <ChevronDownIcon />
                </span>
              </summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">
                While our state-of-the-art ultrasound machines provide exceptionally clear imaging and our technologists are highly trained, gender determination always depends on fetal positioning and fluid levels. While accuracy is incredibly high, 100% guarantees cannot be universally made.
              </div>
            </details>

            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">
                Is this the same as an ultrasound?
                <span className="transition-transform group-open:rotate-180">
                  <ChevronDownIcon />
                </span>
              </summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">
                Yes. The terms sonogram, sonography, and ultrasound all describe the exact same imaging test utilizing safe sound waves.
              </div>
            </details>

            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">
                What is a sonogram?
                <span className="transition-transform group-open:rotate-180">
                  <ChevronDownIcon />
                </span>
              </summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">
                A sonogram is the technical term for the picture or moving image created and presented during your ultrasound exam.
              </div>
            </details>

            <details className="!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md">
              <summary className="!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none">
                What is sonography?
                <span className="transition-transform group-open:rotate-180">
                  <ChevronDownIcon />
                </span>
              </summary>
              <div className="!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed">
                Sonography is the medical imaging specialty focusing on the use of ultrasound waves to evaluate the developing fetus, as well as organs, vessels, and soft tissues throughout the body.
              </div>
            </details>

          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <footer className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6">
        <div className="!max-w-7xl !mx-auto !bg-slate-900 !rounded-3xl !p-10 md:!p-16 !text-center shadow-xl">
          <h2 className="!text-3xl md:!text-4xl !font-bold !text-white !mb-6">Ready to see your baby?</h2>
          <p className="!text-xl !text-slate-300 !mb-10 !max-w-3xl !mx-auto">
            Use our rapid online scheduling to secure your dating check or gender reveal appointment. Our welcoming team is happy to answer questions and help you select the most appropriate option.
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

export default ObUltrasound;

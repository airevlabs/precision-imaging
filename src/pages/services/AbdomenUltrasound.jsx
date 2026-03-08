import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, Clock, Calendar, FileText, Heart, Activity } from 'lucide-react';

const AbdomenUltrasound = () => {
  return (
    <div className="!pt-32 lg:!pt-44 !pb-12 !bg-gray-50 flex flex-col gap-12 sm:gap-16">
      <Helmet>
        <title>Abdominal Ultrasound Downers Grove | Precision Imaging</title>
        <meta name="description" content="Safe ultrasound imaging of liver, gallbladder, kidneys, pancreas & more in Downers Grove. Transparent pricing, fast scheduling." />
        <meta name="keywords" content="abdominal ultrasound near me, abdominal scan Downers Grove, liver ultrasound Chicago suburbs" />
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
      <section className="reveal-section opacity-0 translate-y-8 !bg-blue-900 !text-white !py-24 !px-6 transition-all duration-700 ease-out">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <h1 className="!text-4xl md:!text-6xl !font-bold !mb-8 !text-white leading-tight">Abdominal Ultrasound Downers Grove | Precision Imaging</h1>
          <p className="!text-xl md:!text-2xl !mb-6 max-w-3xl !text-white font-medium">Safe imaging of liver, gallbladder, kidneys, pancreas & more</p>
          <p className="!text-lg !text-blue-200 !mb-8 max-w-2xl">Transparent pricing. Fast scheduling. Results to your doctor.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/#/booking" className="!bg-blue-500 hover:!bg-blue-600 !px-8 !py-4 rounded-lg !font-semibold flex items-center justify-center transition hover:-translate-y-1 hover:shadow-lg !text-white">
              Book Abdominal Ultrasound <Calendar className="ml-2 w-5 h-5" />
            </a>
            <a href="#contact" className="bg-transparent border-2 !border-white hover:!bg-white hover:!text-blue-900 !px-8 !py-4 rounded-lg !font-semibold flex items-center justify-center transition hover:-translate-y-1 !text-white">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* What it Shows & Common Findings */}
      <section className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !py-16 !bg-gray-50 !px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="hover:transform hover:translate-x-2 transition-transform duration-300">
            <h2 className="!text-3xl !font-bold !text-gray-900 !mb-6 flex flex-row items-center justify-start text-left">
              <Activity className="w-8 h-8 !text-blue-600 !mr-3" />
              What Does an Abdominal Ultrasound Examine?
            </h2>
            <p className="!text-gray-600 !mb-6 !text-lg text-left">
              Noninvasive sound waves create clear images without radiation, allowing us to safely examine:
            </p>
            <ul className="space-y-3">
              {['Liver', 'Gallbladder', 'Pancreas', 'Spleen', 'Kidneys', 'Aorta', 'Appendix'].map((organ, idx) => (
                <li key={idx} className="!flex !items-center !text-gray-700 hover:!text-blue-600 transition-colors">
                  <CheckCircle2 className="!w-5 !h-5 !text-green-500 !mr-3 shrink-0" /> {organ}
                </li>
              ))}
            </ul>
          </div>
          <div className="hover:transform hover:translate-x-2 transition-transform duration-300">
            <h2 className="!text-3xl !font-bold !text-gray-900 !mb-6 flex flex-row items-center justify-start text-left mt-10 md:mt-0">
              <Heart className="w-8 h-8 !text-red-500 !mr-3" />
              Common Conditions Detected
            </h2>
            <p className="!text-gray-600 !mb-6 !text-lg text-left">
              Early detection allows for timely treatment. We commonly screen for:
            </p>
            <ul className="space-y-3">
              {['Gallstones', 'Kidney stones', 'Cysts', 'Tumors', 'Aneurysms', 'Fluid collections', 'Appendicitis'].map((condition, idx) => (
                <li key={idx} className="!flex !items-center !text-gray-700 hover:!text-blue-600 transition-colors">
                  <CheckCircle2 className="!w-5 !h-5 !text-blue-500 !mr-3 shrink-0" /> {condition}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Preparation & Process */}
      <section className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out py-16 bg-white px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="!bg-blue-50 !p-8 rounded-2xl hover:shadow-md transition-shadow h-full sm:min-h-[300px]">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-blue-600" /> How to Prepare
            </h2>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 shrink-0" /> Fast 6-8 hours before exam</li>
              <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 shrink-0" /> Water OK after 2 hours fasting</li>
              <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 shrink-0" /> Wear loose clothing</li>
              <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 shrink-0" /> No lotions on abdomen</li>
            </ul>
            <p className="font-medium text-blue-800 bg-blue-100 p-3 rounded-lg inline-block">Please arrive 15 mins early.</p>
          </div>

          <div className="!bg-gray-50 !p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow mt-10 md:mt-0 h-full sm:min-h-[300px]">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Clock className="w-6 h-6 mr-3 text-blue-600" /> What Happens During Exam
            </h2>
            <div className="mb-6 space-y-4">
              <p className="text-gray-700"><strong>Step 1:</strong> Gel is applied to the skin.</p>
              <p className="text-gray-700"><strong>Step 2:</strong> Transducer smoothly moved over abdomen.</p>
              <p className="text-gray-700"><strong>Step 3:</strong> High-resolution images are captured.</p>
              <p className="text-gray-700"><strong>Step 4:</strong> Quick clean up and you're done.</p>
            </div>
            <div className="flex gap-4 mb-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold shadow-sm">Duration: 20-45 mins</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold shadow-sm">Painless / Mild Pressure</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !py-20 !bg-blue-900 !text-white !px-6 mt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="!text-3xl md:!text-4xl !font-bold text-center !mb-12 !text-white">Why Get Your Abdominal Ultrasound Here</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="!bg-blue-800/50 !p-6 rounded-xl text-center hover:!bg-blue-800 transition-colors hover:-translate-y-2 duration-300">
              <div className="!bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto !mb-4">
                <CheckCircle2 className="w-6 h-6 !text-white" />
              </div>
              <h3 className="!font-semibold !text-xl !mb-2 !text-white">Transparent Pricing</h3>
              <p className="!text-blue-200 !text-sm">No hidden fees, simple self-pay rates.</p>
            </div>
            <div className="!bg-blue-800/50 !p-6 rounded-xl text-center hover:!bg-blue-800 transition-colors hover:-translate-y-2 duration-300">
              <div className="!bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto !mb-4">
                <Activity className="w-6 h-6 !text-white" />
              </div>
              <h3 className="!font-semibold !text-xl !mb-2 !text-white">Modern Equipment</h3>
              <p className="!text-blue-200 !text-sm">Latest portable ultrasound technology.</p>
            </div>
            <div className="!bg-blue-800/50 !p-6 rounded-xl text-center hover:!bg-blue-800 transition-colors hover:-translate-y-2 duration-300">
              <div className="!bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto !mb-4">
                <Clock className="w-6 h-6 !text-white" />
              </div>
              <h3 className="!font-semibold !text-xl !mb-2 !text-white">Fast Scheduling</h3>
              <p className="!text-blue-200 !text-sm">Appointments available when you need them.</p>
            </div>
            <div className="!bg-blue-800/50 !p-6 rounded-xl text-center hover:!bg-blue-800 transition-colors hover:-translate-y-2 duration-300">
              <div className="!bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto !mb-4">
                <FileText className="w-6 h-6 !text-white" />
              </div>
              <h3 className="!font-semibold !text-xl !mb-2 !text-white">Direct Results</h3>
              <p className="!text-blue-200 !text-sm">Sent directly to your referring doctor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out py-16 bg-gray-50 px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          <h2 className="!text-3xl md:!text-4xl !font-bold text-center !text-gray-900 !mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="!bg-white !p-6 !rounded-xl shadow-sm border !border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="!font-semibold !text-lg !text-gray-900 !mb-2">Do I need to fast?</h3>
              <p className="!text-gray-600">Yes, please fast for 6-8 hours prior to your exam. Water is OK after 2 hours of fasting.</p>
            </div>
            <div className="!bg-white !p-6 !rounded-xl shadow-sm border !border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="!font-semibold !text-lg !text-gray-900 !mb-2">How long does it take?</h3>
              <p className="!text-gray-600">The entire process typically takes between 20 to 45 minutes.</p>
            </div>
            <div className="!bg-white !p-6 !rounded-xl shadow-sm border !border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="!font-semibold !text-lg !text-gray-900 !mb-2">Is it safe and painful?</h3>
              <p className="!text-gray-600">Ultrasounds are incredibly safe, using zero radiation. It is generally painless, though you may feel mild pressure.</p>
            </div>
            <div className="!bg-white !p-6 !rounded-xl shadow-sm border !border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="!font-semibold !text-lg !text-gray-900 !mb-2">When will I get results?</h3>
              <p className="!text-gray-600">Results are typically sent directly to your doctor on the same day as your exam.</p>
            </div>
            <div className="!bg-white !p-6 !rounded-xl shadow-sm border !border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="!font-semibold !text-lg !text-gray-900 !mb-2">Do I need a referral?</h3>
              <p className="!text-gray-600">A referral is not necessary if you are paying out of pocket (self-pay), but it is required if you are billing through insurance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !py-16 !bg-white border-t border-gray-200 !px-6 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="!text-2xl !font-bold !text-gray-900 !mb-4">Local Service Area</h2>
          <p className="!text-sm !text-gray-500 leading-relaxed max-w-4xl mx-auto">
            Serving Downers Grove, Westmont, Clarendon Hills, Lisle, Oak Brook, Hinsdale, Darien, Willowbrook, Woodridge, Lombard, Glen Ellyn, Western Springs, Villa Park, Wheaton, Burr Ridge, Indian Head Park, Naperville, Elmhurst, Westchester, La Grange, Countryside, Carol Stream, Northlake, Oakbrook Terrace, Bolingbrook, Addison, Aurora, Brookfield, Berkeley, Hillside, Broadview, Roselle, Itasca, Bensenville, Lemont, Franklin Park, Schiller Park, River Forest, Forest Park, Maywood, Bellwood, Oak Park, Oak Forest, Tinley Park, Rolling Meadows, Ridgewood, Sauganash, Crest Hill, Mount Prospect, Niles, Crystal Lawns, Edgebrook, Mayfair, Joliet, Ingalls Park, East Joliet, South Elgin, Plum Grove Village, Winthrop Village, Fernway, Hoffman Estates, Albany Park, Creekside, Valley View, Raynor Park, Arlington Heights, Forest River, Lidice, Fernway Park, Lincolnwood, Morton Grove, Cherry Hill, Gougars, Fairfax Village, Sherwood Oaks, Clintonville, Coleman, and Schaumburg.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !py-20 !bg-gray-50 !px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="!text-3xl !font-bold !text-gray-900 !mb-6">Ready to Schedule?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="/#/booking" className="!bg-blue-600 hover:!bg-blue-700 !text-white !px-8 !py-4 rounded-lg !font-semibold flex items-center transition hover:-translate-y-1 hover:shadow-lg">
              Book Appointment <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="#contact" className="!bg-white !text-blue-600 border-2 !border-blue-600 hover:!bg-blue-50 !px-8 !py-4 rounded-lg !font-semibold transition hover:-translate-y-1">
              Contact Us
            </a>
          </div>
          <p className="!text-sm !font-medium !text-gray-500 flex items-center justify-center gap-4">
            <span className="flex items-center"><CheckCircle2 className="w-4 h-4 !text-green-500 mr-1" /> Licensed Providers</span>
            <span className="flex items-center"><CheckCircle2 className="w-4 h-4 !text-green-500 mr-1" /> HIPAA Compliant</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default AbdomenUltrasound;

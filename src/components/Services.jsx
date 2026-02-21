import React from 'react';
import { motion } from 'framer-motion';
import {
    Activity,
    Baby,
    Heart,
    ShieldCheck,
    ClipboardList,
    Brain,
} from 'lucide-react';

// Custom Anatomical SVGs

const AbdominalIcon = (props) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        {/* Stomach Shape */}
        <path d="M6 8C6 8 6 4 10 4C14 4 16 6 16 9C16 12 14 14 12 15L10 16C8 17 6 16 5 14C4 12 6 8 6 8Z" />
        <path d="M16 9C18 10 19 12 18 14C17 16 15 17 13 17" />
    </svg>
);

const PelvicIcon = (props) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        {/* Anatomical Pelvis Bone - Butterfly shape */}
        <path d="M12 4C8 2 3 5 3 9C3 13 6 16 9 17" />
        <path d="M12 4C16 2 21 5 21 9C21 13 18 16 15 17" />
        <path d="M9 17C8 20 10 22 12 21C14 22 16 20 15 17" />
        <path d="M9 17H15" />
        <path d="M12 4V10" />
        <circle cx="7" cy="9" r="1.5" strokeWidth="1.5" />
        <circle cx="17" cy="9" r="1.5" strokeWidth="1.5" />
    </svg>
);

const BreastIcon = (props) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}>
        {/* Refined Ribbon - Thicker, Rounded Loop */}
        <path d="M12 22C12 22 19 14 19 9C19 4 14 3 12 5C10 3 5 4 5 9C5 14 12 22 12 22Z" opacity="0" fill="none" /> {/* Spacer */}
        <path d="M7 21L12 14" />
        <path d="M17 21L12 14" />
        <path d="M12 14L16 8C18 5 15 2 12 2C9 2 6 5 8 8L12 14" />
    </svg>
);

const OBIcon = (props) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        {/* Full Body Baby Icon */}
        {/* Head */}
        <circle cx="12" cy="7" r="3.5" />
        {/* Torso */}
        <path d="M12 10.5V17" />
        {/* Rounded Body/Diaper Area */}
        <path d="M9 17C9 18.6569 10.3431 20 12 20C13.6569 20 15 18.6569 15 17" />
        {/* Arms - slightly curved upwards like reaching or happy */}
        <path d="M8 13C7 12 6 11 5 12" />
        <path d="M16 13C17 12 18 11 19 12" />
        <path d="M8 13L12 12" />
        <path d="M16 13L12 12" />
        {/* Legs - cute little extensions */}
        <path d="M10.5 19L9 21" />
        <path d="M13.5 19L15 21" />
    </svg>
);

const VascularIcon = (props) => (
    <svg width="28" height="28" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect x="20" y="20" width="472" height="472" rx="100" ry="100" fill="#e4f4fd" />
        <g fill="none" stroke="#004785" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 240,460 L 240,350 C 230,280 260,250 230,150 L 240,80" />
            <path d="M 280,460 L 280,380 C 290,300 270,280 300,240" />
            <path d="M 235,280 C 180,280 160,330 110,350 C 110,400 150,420 180,440" />
            <path d="M 230,180 C 150,200 120,250 100,220" />
            <path d="M 140,220 C 120,160 150,140 100,120" />
            <path d="M 290,260 C 350,280 380,220 440,240" />
            <path d="M 300,320 C 360,350 380,400 440,450" />
            <path d="M 360,360 C 400,340 420,300 390,280" />
            <path d="M 400,230 C 420,200 450,180 430,160" />
        </g>
    </svg>
);

const SoftTissueIcon = (props) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        {/* Three stacked wavy lines representing flow/vessels */}
        <path d="M4 8C8 5 12 11 16 8C19 5.75 20.8 7 21 8" />
        <path d="M4 12C8 9 12 15 16 12C19 9.75 20.8 11 21 12" />
        <path d="M4 16C8 13 12 19 16 16C19 13.75 20.8 15 21 16" />
    </svg>
);

const ThyroidIcon = (props) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        {/* Large Filled Thyroid Gland */}
        <path
            d="M12 15C11 15 9 11 5 11C2 11 2 17 5 19C8 21 11 17 12 15Z"
            fill="currentColor"
            stroke="none"
        />
        <path
            d="M12 15C13 15 15 11 19 11C22 11 22 17 19 19C16 21 13 17 12 15Z"
            fill="currentColor"
            stroke="none"
        />
        {/* Isthmus Connection */}
        <path d="M11 15H13" stroke="currentColor" strokeWidth="2" />
    </svg>
);

const AortaIcon = (props) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        {/* Aorta with Iliac Bifurcation */}
        <path d="M12 2V16" strokeWidth="3" />
        <path d="M12 16L8 22" strokeWidth="2.5" />
        <path d="M12 16L16 22" strokeWidth="2.5" />
        <path d="M12 5L8 7" />
        <path d="M12 7L16 9" />
    </svg>
);

const KidneyIcon = (props) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        {/* Larger Left Kidney */}
        <path d="M7 4 C4 4 3 8 5 11 C6 13 8 13 9 10 C10 8 9 4 7 4Z" />
        {/* Larger Right Kidney */}
        <path d="M17 4 C20 4 21 8 19 11 C18 13 16 13 15 10 C14 8 15 4 17 4Z" />
        {/* Connected Ureters (Lines) */}
        <path d="M7 11 L11 17.5" opacity="0.5" />
        <path d="M17 11 L13 17.5" opacity="0.5" />
        {/* Smaller Bladder (Pear shaped) at bottom */}
        <path d="M12 17.5 C11 17.5 10 18.5 10 19.5 C10 21 11 22 12 22 C13 22 14 21 14 19.5 C14 18.5 13 17.5 12 17.5Z" />
    </svg>
);

const services = [
    {
        title: "Abdominal Ultrasound",
        icon: "https://storage.googleapis.com/msgsndr/GuXeu5l7u85zbTGI5UHS/media/6992648f3b3cc92f95cb2556.png",
        desc: "Imaging of organs like liver, gallbladder, spleen, pancreas, and kidneys."
    },
    {
        title: "Pelvic Ultrasound",
        icon: "https://storage.googleapis.com/msgsndr/GuXeu5l7u85zbTGI5UHS/media/6992648f3b3cc91d0acb2557.png",
        desc: "Detailed imaging of the pelvic region for women."
    },
    { title: "Breast Ultrasound", icon: BreastIcon, desc: "Ultrasound for breast cancer screening or for imaging palpable concerns." },
    {
        title: "Pediatric Imaging",
        icon: Baby,
        desc: "Gentle and precise ultrasound exams tailored for infants and children."
    },
    {
        title: "OB / Gender Reveal",
        icon: "https://storage.googleapis.com/msgsndr/GuXeu5l7u85zbTGI5UHS/media/6992773ea9efde7c998b3d80.png",
        desc: "Monitoring fetal development and creating special gender reveal moments."
    },
    {
        title: "Vascular Ultrasound",
        icon: VascularIcon,
        desc: "Evaluating blood flow and detecting blockages or clots in veins and arteries."
    },
    {
        title: "Soft Tissue Ultrasound",
        icon: SoftTissueIcon, // Using original wavy lines SVG
        desc: "Assessing masses, cysts, and other abnormalities in soft tissues."
    },
    {
        title: "Thyroid Ultrasound",
        icon: "https://storage.googleapis.com/msgsndr/GuXeu5l7u85zbTGI5UHS/media/6992648f1d5e04cd98344426.png",
        desc: "Detailed examination of the thyroid gland and neck structures."
    },
    { title: "Aorta Screening", icon: AortaIcon, desc: "Preventive screening for abdominal aortic aneurysms." },
    {
        title: "Carotid Screening",
        icon: "https://storage.googleapis.com/msgsndr/GuXeu5l7u85zbTGI5UHS/media/699271511d5e0468f3363b52.png",
        desc: "Assessing stroke risk by imaging the carotid arteries."
    },
    { title: "Kidney & Bladder", icon: KidneyIcon, desc: "Comprehensive evaluation of the renal system." },
    { title: "Echocardiogram", icon: Heart, desc: "Specialized ultrasound to assess heart structure and function." },
    { title: "Follow-Up & Surveillance", icon: ClipboardList, desc: "Regular monitoring of known conditions or previous findings." },
    { title: "Wellness & Preventive", icon: ShieldCheck, desc: "Proactive imaging for peace of mind and early detection." },
];

const ServiceCard = ({ title, icon: IconOrUrl, desc, index }) => {
    const isUrl = typeof IconOrUrl === 'string';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            whileHover={{
                y: -10,
                boxShadow: 'var(--shadow-lg)',
                transition: { duration: 0.2, ease: "easeOut" }
            }}
            style={{
                backgroundColor: 'var(--color-white)',
                padding: '2rem',
                borderRadius: '1rem',
                border: '1px solid var(--color-soft-gray-border)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                transition: 'var(--transition-smooth)',
                cursor: 'default',
                height: '100%'
            }}
        >
            <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                backgroundColor: 'var(--color-light-blue)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-primary-blue)',
                marginBottom: '0.5rem',
                overflow: 'hidden'
            }}>
                {isUrl ? (
                    <img
                        src={IconOrUrl}
                        alt={title}
                        style={{
                            width: '28px',
                            height: '28px',
                            objectFit: 'contain'
                        }}
                    />
                ) : (
                    <IconOrUrl size={28} strokeWidth={1.5} />
                )}
            </div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-navy)', fontWeight: '600' }}>{title}</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-body)', lineHeight: '1.5' }}>{desc}</p>
        </motion.div>
    );
};

const Services = () => {
    return (
        <section id="services" style={{ backgroundColor: 'var(--color-soft-gray-bg)', padding: '6rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-primary-navy)', fontWeight: '700' }}
                    >
                        Ultrasound Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem', color: 'var(--color-text-body)' }}
                    >
                        We offer a wide range of diagnostic ultrasound exams tailored to patient needs and provider recommendations.
                    </motion.p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {services.map((service, index) => (
                        <ServiceCard key={service.title} {...service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

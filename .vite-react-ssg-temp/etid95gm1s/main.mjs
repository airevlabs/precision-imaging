import { ViteReactSSG } from "vite-react-ssg";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { useLocation, Link, useNavigate, Outlet } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowUp, Baby, Brain, Heart, ClipboardList, ShieldCheck, CheckCircle2, Info, Monitor, Clock, Shield, Share2, Award, Zap, Camera, HeartHandshake, Phone, Mail, MapPin, CheckCircle } from "lucide-react";
const Logo = ({ animated = false, theme = "light" }) => {
  const isDark = theme === "dark";
  const primaryColor = isDark ? "#ffffff" : "var(--color-primary-navy)";
  const secondaryColor = isDark ? "var(--color-sky-blue)" : "var(--color-secondary-blue)";
  const gradientStart = isDark ? "#ebf8ff" : "#4299e1";
  const gradientEnd = isDark ? "#bee3f8" : "#2b6cb0";
  return /* @__PURE__ */ jsxs("div", { className: "logo-container", style: { display: "flex", alignItems: "center", gap: "0px" }, children: [
    /* @__PURE__ */ jsxs(
      motion.svg,
      {
        width: "80",
        height: "40",
        viewBox: "0 0 120 60",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        initial: "initial",
        whileHover: !animated ? "hover" : void 0,
        animate: animated ? "animate" : void 0,
        children: [
          /* @__PURE__ */ jsx(
            motion.path,
            {
              d: "M0 30H15L20 20L30 40L40 10L50 50L60 20L70 40L75 30H120",
              stroke: "url(#waveGradient)",
              strokeWidth: "3",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              variants: {
                initial: { pathLength: animated ? 0 : 1, opacity: animated ? 1 : 0.8 },
                hover: {
                  pathLength: [1, 0.95, 1],
                  opacity: 1,
                  transition: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                },
                animate: {
                  pathLength: [0, 1],
                  opacity: 1,
                  transition: {
                    pathLength: { repeat: Infinity, duration: 2.5, ease: "linear", repeatDelay: 0.5 }
                  }
                }
              }
            }
          ),
          /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "waveGradient", x1: "0", y1: "30", x2: "120", y2: "30", gradientUnits: "userSpaceOnUse", children: [
            /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: gradientStart }),
            /* @__PURE__ */ jsx("stop", { offset: "75%", stopColor: gradientEnd, stopOpacity: "1" }),
            /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: gradientEnd, stopOpacity: "0" })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", lineHeight: "1", alignItems: "center", marginLeft: "-15px" }, children: [
      /* @__PURE__ */ jsx("span", { style: {
        fontSize: "1.5rem",
        fontWeight: "700",
        color: primaryColor,
        letterSpacing: "-0.02em"
      }, children: "Precision" }),
      /* @__PURE__ */ jsx("span", { style: {
        fontSize: "1.2rem",
        fontWeight: "500",
        color: secondaryColor,
        marginTop: "-2px"
      }, children: "Imaging" })
    ] })
  ] });
};
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Ultrasound Services", to: "/#services" },
    { name: "Self-Pay Options", to: "/#self-pay" },
    { name: "What to Expect", to: "/#what-to-expect" },
    { name: "Why Choose Us", to: "/#why-choose-us" }
    // Book Now is handled separately as a button
  ];
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `header ${isScrolled ? "scrolled" : ""}`,
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1e3,
        padding: isScrolled ? "0.75rem 0" : "1.5rem 0",
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
        boxShadow: isScrolled ? "var(--shadow-md)" : "none",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        transition: "var(--transition-smooth)"
      },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "container", style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
          /* @__PURE__ */ jsx(Link, { to: "/", children: /* @__PURE__ */ jsx(Logo, { animated: true }) }),
          /* @__PURE__ */ jsx("nav", { className: "desktop-nav", style: { display: "none" }, children: /* @__PURE__ */ jsxs("ul", { style: { display: "flex", gap: "2rem", alignItems: "center" }, children: [
            navLinks.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              Link,
              {
                to: link.to,
                style: {
                  fontWeight: "600",
                  fontSize: "0.925rem",
                  color: "var(--color-primary-navy)",
                  position: "relative"
                },
                className: "nav-link",
                children: [
                  link.name,
                  /* @__PURE__ */ jsx("style", { children: `
                    .nav-link::after {
                      content: '';
                      position: absolute;
                      bottom: -4px;
                      left: 0;
                      width: 0;
                      height: 2px;
                      background-color: var(--color-secondary-blue);
                      transition: var(--transition-smooth);
                    }
                    .nav-link:hover::after {
                      width: 100%;
                    }
                  ` })
                ]
              }
            ) }, link.name)),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              Link,
              {
                to: "/booking",
                className: "btn btn-primary",
                style: {
                  padding: "0.75rem 1.5rem",
                  fontSize: "0.9rem",
                  borderRadius: "9999px",
                  // Rounded full like pills
                  textDecoration: "none",
                  display: "inline-block"
                },
                children: "Book Now"
              }
            ) })
          ] }) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "mobile-toggle",
              onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
              style: {
                fontSize: "1.5rem",
                color: "var(--color-primary-navy)",
                zIndex: 1001
              },
              children: isMobileMenuOpen ? "✕" : "☰"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: isMobileMenuOpen && /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -20 },
            style: {
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              backgroundColor: "var(--color-white)",
              padding: "2rem",
              boxShadow: "var(--shadow-lg)",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              zIndex: 999
            },
            children: [
              navLinks.map((link) => /* @__PURE__ */ jsx(
                Link,
                {
                  to: link.to,
                  onClick: () => setIsMobileMenuOpen(false),
                  style: { fontWeight: "600", color: "var(--color-primary-navy)" },
                  children: link.name
                },
                link.name
              )),
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/booking",
                  onClick: () => setIsMobileMenuOpen(false),
                  className: "btn btn-primary",
                  style: {
                    textAlign: "center",
                    padding: "0.75rem",
                    borderRadius: "0.5rem"
                  },
                  children: "Book Now"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("style", { jsx: true, children: `
        @media (min-width: 1024px) {
          .desktop-nav { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
      ` })
      ]
    }
  );
};
const Footer = () => {
  return /* @__PURE__ */ jsxs("footer", { style: { backgroundColor: "var(--color-primary-navy)", color: "var(--color-white)", padding: "5rem 0 2rem" }, children: [
    /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "4rem", marginBottom: "4rem" }, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { style: { marginBottom: "1.5rem" }, children: /* @__PURE__ */ jsx(Logo, { theme: "dark" }) }),
          /* @__PURE__ */ jsx("p", { style: { opacity: 0.8, marginBottom: "1.5rem", fontSize: "0.95rem" }, children: "Professional diagnostic ultrasound services with transparent pricing and flexible scheduling." }),
          /* @__PURE__ */ jsx("p", { style: { fontWeight: "700", fontSize: "1.1rem" }, children: "Phone: 630-344-9449" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { style: { fontSize: "1.25rem", marginBottom: "1.5rem", color: "var(--color-white)", fontWeight: "700" }, children: "Quick Links" }),
          /* @__PURE__ */ jsxs("ul", { style: { display: "flex", flexDirection: "column", gap: "0.75rem", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", className: "footer-link", children: "Home" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/#services", className: "footer-link", children: "Services" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/#self-pay", className: "footer-link", children: "Self-Pay Options" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/#contact", className: "footer-link", children: "Contact Us" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { style: { fontSize: "1.25rem", marginBottom: "1.5rem", color: "var(--color-white)", fontWeight: "700" }, children: "Patient Resources" }),
          /* @__PURE__ */ jsxs("ul", { style: { display: "flex", flexDirection: "column", gap: "0.75rem", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/#what-to-expect", className: "footer-link", children: "What to Expect" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/#why-choose-us", className: "footer-link", children: "Why Choose Us" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/privacy", className: "footer-link", children: "Privacy Policy" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/hipaa", className: "footer-link", children: "HIPAA Notice" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/terms", className: "footer-link", children: "Terms & Conditions" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: {
        borderTop: "1px solid rgba(255,255,255,0.1)",
        paddingTop: "2rem",
        textAlign: "center",
        fontSize: "0.85rem",
        opacity: 0.6
      }, children: [
        /* @__PURE__ */ jsx("p", { children: "© 2026 PRECISIONIMAGINGUSA LLC. All rights reserved. Professional medical imaging services provided by licensed specialists." }),
        /* @__PURE__ */ jsx("p", { style: { marginTop: "0.5rem" }, children: "This website is for informational purposes and does not constitute medical advice. Please consult with a healthcare professional for diagnosis or treatment." }),
        /* @__PURE__ */ jsxs("p", { style: { marginTop: "1.5rem", opacity: 0.8 }, children: [
          "Designed by ",
          /* @__PURE__ */ jsx("a", { href: "https://airevlabs.com", target: "_blank", rel: "noopener noreferrer", style: { fontWeight: "bold", color: "var(--color-white)", textDecoration: "underline" }, children: "AI REV LABS" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
        .footer-link:hover {
          color: var(--color-sky-blue);
          padding-left: 5px;
        }
      ` })
  ] });
};
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isVisible && /* @__PURE__ */ jsx(
    motion.button,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
      onClick: scrollToTop,
      whileHover: { scale: 1.1 },
      whileTap: { scale: 0.9 },
      style: {
        position: "fixed",
        bottom: "6rem",
        right: "2rem",
        backgroundColor: "var(--color-primary-blue)",
        color: "var(--color-white)",
        border: "none",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: "var(--shadow-lg)",
        zIndex: 1e3
      },
      children: /* @__PURE__ */ jsx(ArrowUp, { size: 24 })
    }
  ) });
};
const FloatingContactForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = () => {
    if (location.pathname !== "/") {
      navigate("/#contact");
    } else {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const headerOffset = 80;
        const elementPosition = contactSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };
  return /* @__PURE__ */ jsx("div", { style: { position: "fixed", bottom: "2rem", right: "2rem", zIndex: 1001 }, children: /* @__PURE__ */ jsx(
    motion.button,
    {
      onClick: handleClick,
      whileHover: { scale: 1.1 },
      whileTap: { scale: 0.9 },
      className: "floating-btn",
      style: {
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        backgroundColor: "var(--color-primary-blue)",
        color: "var(--color-white)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "var(--shadow-lg)",
        cursor: "pointer",
        border: "none"
      },
      children: /* @__PURE__ */ jsxs("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ jsx("path", { d: "M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M8 9H16", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M8 13H14", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
      ] })
    }
  ) });
};
const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref,
      className: "hero",
      style: {
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, var(--color-white) 0%, var(--color-light-blue) 100%)",
        padding: "120px 0 120px 0"
      },
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            style: {
              position: "absolute",
              top: "10%",
              right: "-5%",
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              background: "radial-gradient(circle, var(--color-sky-blue) 0%, transparent 70%)",
              opacity: 0.3,
              y: y1
            }
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            style: {
              position: "absolute",
              bottom: "10%",
              left: "-10%",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background: "radial-gradient(circle, var(--color-secondary-blue) 0%, transparent 70%)",
              opacity: 0.1,
              y: y2
            }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "container", style: { position: "relative", zIndex: 1 }, children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, ease: "easeOut" },
            style: { maxWidth: "700px", opacity },
            children: [
              /* @__PURE__ */ jsxs("h1", { style: { fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "1.5rem", color: "var(--color-primary-navy)" }, children: [
                "Reliable Diagnostic Ultrasound — ",
                /* @__PURE__ */ jsx("span", { style: { color: "var(--color-secondary-blue)" }, children: "When You Need It" })
              ] }),
              /* @__PURE__ */ jsx("p", { style: { fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem", color: "var(--color-primary-blue)" }, children: "Clear - Convenient - Self-Pay Friendly" }),
              /* @__PURE__ */ jsx("p", { style: { fontSize: "1.125rem", marginBottom: "2.5rem", maxWidth: "600px" }, children: "Precision Imaging provides professional diagnostic ultrasound services with transparent self-pay pricing and flexible scheduling, making imaging accessible, efficient, and stress-free for patients and referring providers." }),
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: "1rem", flexWrap: "wrap" }, children: [
                /* @__PURE__ */ jsx(
                  motion.a,
                  {
                    href: "#contact",
                    className: "btn btn-primary",
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    children: "Request an Appointment"
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.a,
                  {
                    href: "#services",
                    className: "btn btn-secondary",
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    children: "View Ultrasound Services"
                  }
                )
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("div", { style: {
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100px",
          zIndex: 0,
          overflow: "hidden",
          opacity: 0.6
        }, children: /* @__PURE__ */ jsx(
          motion.svg,
          {
            width: "100%",
            height: "100%",
            viewBox: "0 0 1440 100",
            fill: "none",
            preserveAspectRatio: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              motion.path,
              {
                d: "M0 50 H200 L220 10 L240 90 L260 50 H500 L520 20 L540 80 L560 50 H900 L920 30 L940 70 L960 50 H1440",
                stroke: "var(--color-primary-blue)",
                strokeWidth: "2",
                strokeLinecap: "square",
                strokeLinejoin: "miter",
                initial: { pathLength: 0, opacity: 0 },
                animate: { pathLength: 1, opacity: 1 },
                transition: {
                  duration: 6,
                  ease: "linear",
                  repeat: Infinity
                }
              }
            )
          }
        ) })
      ]
    }
  );
};
const AbdominalIcon = (props) => /* @__PURE__ */ jsxs("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [
  /* @__PURE__ */ jsx("path", { d: "M6 8C6 8 6 4 10 4C14 4 16 6 16 9C16 12 14 14 12 15L10 16C8 17 6 16 5 14C4 12 6 8 6 8Z" }),
  /* @__PURE__ */ jsx("path", { d: "M16 9C18 10 19 12 18 14C17 16 15 17 13 17" })
] });
const PelvicIcon = (props) => /* @__PURE__ */ jsxs("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [
  /* @__PURE__ */ jsx("path", { d: "M12 4C8 2 3 5 3 9C3 13 6 16 9 17" }),
  /* @__PURE__ */ jsx("path", { d: "M12 4C16 2 21 5 21 9C21 13 18 16 15 17" }),
  /* @__PURE__ */ jsx("path", { d: "M9 17C8 20 10 22 12 21C14 22 16 20 15 17" }),
  /* @__PURE__ */ jsx("path", { d: "M9 17H15" }),
  /* @__PURE__ */ jsx("path", { d: "M12 4V10" }),
  /* @__PURE__ */ jsx("circle", { cx: "7", cy: "9", r: "1.5", strokeWidth: "1.5" }),
  /* @__PURE__ */ jsx("circle", { cx: "17", cy: "9", r: "1.5", strokeWidth: "1.5" })
] });
const BreastIcon = (props) => /* @__PURE__ */ jsxs("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [
  /* @__PURE__ */ jsx("path", { d: "M12 22C12 22 19 14 19 9C19 4 14 3 12 5C10 3 5 4 5 9C5 14 12 22 12 22Z", opacity: "0", fill: "none" }),
  " ",
  /* @__PURE__ */ jsx("path", { d: "M7 21L12 14" }),
  /* @__PURE__ */ jsx("path", { d: "M17 21L12 14" }),
  /* @__PURE__ */ jsx("path", { d: "M12 14L16 8C18 5 15 2 12 2C9 2 6 5 8 8L12 14" })
] });
const OBIcon = (props) => /* @__PURE__ */ jsxs("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "5", r: "3.5" }),
  /* @__PURE__ */ jsx("path", { d: "M7 10C7 10 7 21 12 21C17 21 17 10 17 10" }),
  /* @__PURE__ */ jsx("path", { d: "M7 10H17", strokeWidth: "1.5" }),
  /* @__PURE__ */ jsx("path", { d: "M7 14C9 15 15 15 17 14", opacity: "0.5" })
] });
const VascularIcon = (props) => /* @__PURE__ */ jsxs("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [
  /* @__PURE__ */ jsx("path", { d: "M12 2V22", strokeWidth: "3" }),
  /* @__PURE__ */ jsx("path", { d: "M12 6L6 9" }),
  /* @__PURE__ */ jsx("path", { d: "M6 9L4 12" }),
  /* @__PURE__ */ jsx("path", { d: "M12 10L18 13" }),
  /* @__PURE__ */ jsx("path", { d: "M18 13L20 16" }),
  /* @__PURE__ */ jsx("path", { d: "M12 16L7 18" }),
  /* @__PURE__ */ jsx("path", { d: "M12 18L17 20" })
] });
const ThyroidIcon = (props) => /* @__PURE__ */ jsxs("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M12 15C11 15 9 11 5 11C2 11 2 17 5 19C8 21 11 17 12 15Z",
      fill: "currentColor",
      stroke: "none"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M12 15C13 15 15 11 19 11C22 11 22 17 19 19C16 21 13 17 12 15Z",
      fill: "currentColor",
      stroke: "none"
    }
  ),
  /* @__PURE__ */ jsx("path", { d: "M11 15H13", stroke: "currentColor", strokeWidth: "2" })
] });
const AortaIcon = (props) => /* @__PURE__ */ jsxs("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [
  /* @__PURE__ */ jsx("path", { d: "M12 2V16", strokeWidth: "3" }),
  /* @__PURE__ */ jsx("path", { d: "M12 16L8 22", strokeWidth: "2.5" }),
  /* @__PURE__ */ jsx("path", { d: "M12 16L16 22", strokeWidth: "2.5" }),
  /* @__PURE__ */ jsx("path", { d: "M12 5L8 7" }),
  /* @__PURE__ */ jsx("path", { d: "M12 7L16 9" })
] });
const KidneyIcon = (props) => /* @__PURE__ */ jsxs("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [
  /* @__PURE__ */ jsx("path", { d: "M9 7C7 7 5 9 5 12C5 16 7 18 9 18C11 18 12 16 12 13C12 10 11 7 9 7Z" }),
  /* @__PURE__ */ jsx("path", { d: "M15 7C17 7 19 9 19 12C19 16 17 18 15 18C13 18 12 16 12 13C12 10 13 7 15 7Z" }),
  /* @__PURE__ */ jsx("path", { d: "M9 18L10 22" }),
  /* @__PURE__ */ jsx("path", { d: "M15 18L14 22" })
] });
const services = [
  { title: "Abdominal Ultrasound", icon: AbdominalIcon, desc: "Imaging of organs like liver, gallbladder, spleen, pancreas, and kidneys." },
  { title: "Pelvic Ultrasound", icon: PelvicIcon, desc: "Detailed imaging of the pelvic region for both men and women." },
  { title: "Breast Ultrasound", icon: BreastIcon, desc: "Diagnostic imaging to evaluate breast health and specific concerns." },
  { title: "Pediatric Imaging", icon: Baby, desc: "Gentle and precise ultrasound exams tailored for infants and children." },
  { title: "OB / Limited OB Ultrasound", icon: OBIcon, desc: "Monitoring fetal development and pregnancy progression." },
  { title: "Vascular & Soft Tissue", icon: VascularIcon, desc: "Evaluating blood flow and assessing soft tissue abnormalities." },
  { title: "Thyroid Ultrasound", icon: ThyroidIcon, desc: "Detailed examination of the thyroid gland and neck structures." },
  { title: "Aorta Screening", icon: AortaIcon, desc: "Preventive screening for abdominal aortic aneurysms." },
  { title: "Carotid Screening", icon: Brain, desc: "Assessing stroke risk by imaging the carotid arteries." },
  { title: "Kidney & Bladder", icon: KidneyIcon, desc: "Comprehensive evaluation of the renal system." },
  { title: "Echocardiogram", icon: Heart, desc: "Specialized ultrasound to assess heart structure and function." },
  { title: "Follow-Up & Surveillance", icon: ClipboardList, desc: "Regular monitoring of known conditions or previous findings." },
  { title: "Wellness & Preventive", icon: ShieldCheck, desc: "Proactive imaging for peace of mind and early detection." }
];
const ServiceCard = ({ title, icon: Icon, desc, index }) => {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { delay: index * 0.05, duration: 0.5 },
      whileHover: {
        y: -10,
        boxShadow: "var(--shadow-lg)",
        transition: { duration: 0.2, ease: "easeOut" }
      },
      style: {
        backgroundColor: "var(--color-white)",
        padding: "2rem",
        borderRadius: "1rem",
        border: "1px solid var(--color-soft-gray-border)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        transition: "var(--transition-smooth)",
        cursor: "default",
        height: "100%"
      },
      children: [
        /* @__PURE__ */ jsx("div", { style: {
          width: "50px",
          height: "50px",
          borderRadius: "12px",
          backgroundColor: "var(--color-light-blue)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--color-primary-blue)",
          marginBottom: "0.5rem"
        }, children: /* @__PURE__ */ jsx(Icon, { size: 28, strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsx("h3", { style: { fontSize: "1.25rem", color: "var(--color-primary-navy)", fontWeight: "600" }, children: title }),
        /* @__PURE__ */ jsx("p", { style: { fontSize: "0.95rem", color: "var(--color-text-body)", lineHeight: "1.5" }, children: desc })
      ]
    }
  );
};
const Services = () => {
  return /* @__PURE__ */ jsx("section", { id: "services", style: { backgroundColor: "var(--color-soft-gray-bg)", padding: "6rem 0" }, children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxs("div", { style: { textAlign: "center", marginBottom: "4rem" }, children: [
      /* @__PURE__ */ jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          style: { fontSize: "2.5rem", marginBottom: "1rem", color: "var(--color-primary-navy)", fontWeight: "700" },
          children: "Ultrasound Services"
        }
      ),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: 0.1 },
          style: { maxWidth: "600px", margin: "0 auto", fontSize: "1.125rem", color: "var(--color-text-body)" },
          children: "We offer a wide range of diagnostic ultrasound exams tailored to patient needs and provider recommendations."
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "2rem"
    }, children: services.map((service, index) => /* @__PURE__ */ jsx(ServiceCard, { ...service, index }, service.title)) })
  ] }) });
};
const highlights = [
  "Transparent, upfront pricing",
  "No insurance billing required",
  "Faster scheduling and reduced wait times",
  "Ideal for uninsured and cash-pay patients"
];
const SelfPay = () => {
  return /* @__PURE__ */ jsx("section", { id: "self-pay", style: { backgroundColor: "var(--color-white)" }, children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "4rem",
    alignItems: "center"
  }, children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        children: [
          /* @__PURE__ */ jsx("h2", { style: { fontSize: "2.5rem", marginBottom: "1.5rem", color: "var(--color-primary-navy)" }, children: "Simple Self-Pay Options" }),
          /* @__PURE__ */ jsx("p", { style: { fontSize: "1.125rem", marginBottom: "2rem" }, children: "Precision Imaging operates on a self-pay model designed to provide clarity and faster access to care. We believe high-quality imaging should be straightforward and accessible." }),
          /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }, children: highlights.map((text, i) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              style: { display: "flex", alignItems: "center", gap: "12px" },
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.1 },
              children: [
                /* @__PURE__ */ jsx(CheckCircle2, { color: "var(--color-secondary-blue)", size: 24 }),
                /* @__PURE__ */ jsx("span", { style: { fontWeight: "500", fontSize: "1.1rem" }, children: text })
              ]
            },
            i
          )) }),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              style: {
                padding: "1.5rem",
                backgroundColor: "var(--color-light-blue)",
                borderRadius: "12px",
                display: "flex",
                gap: "1rem",
                marginBottom: "2rem"
              },
              whileHover: { scale: 1.02 },
              children: [
                /* @__PURE__ */ jsx(Info, { color: "var(--color-primary-blue)", style: { flexShrink: 0 } }),
                /* @__PURE__ */ jsx("p", { style: { fontSize: "0.95rem", fontWeight: "500", color: "var(--color-primary-navy)" }, children: "Pricing information is available upon request. We offer competitive rates for all our ultrasound services." })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.a,
            {
              href: "#contact",
              className: "btn btn-primary",
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              children: "Request Pricing Details"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.9 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        style: {
          position: "relative",
          height: "400px",
          backgroundColor: "var(--color-sky-blue)",
          borderRadius: "2rem",
          overflow: "hidden",
          boxShadow: "var(--shadow-lg)"
        },
        children: /* @__PURE__ */ jsxs("div", { style: {
          position: "absolute",
          inset: 0,
          background: "linear-gradient(45deg, var(--color-primary-blue), var(--color-sky-blue))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }, children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              animate: {
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              },
              transition: { duration: 4, repeat: Infinity },
              style: {
                width: "200px",
                height: "200px",
                border: "2px solid rgba(255,255,255,0.3)",
                borderRadius: "50%"
              }
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              animate: {
                scale: [1.1, 1, 1.1],
                opacity: [0.8, 0.5, 0.8]
              },
              transition: { duration: 4, repeat: Infinity, delay: 1 },
              style: {
                position: "absolute",
                width: "150px",
                height: "150px",
                border: "2px solid rgba(255,255,255,0.5)",
                borderRadius: "50%"
              }
            }
          ),
          /* @__PURE__ */ jsxs("div", { style: { color: "white", textAlign: "center", zIndex: 1 }, children: [
            /* @__PURE__ */ jsx("span", { style: { fontSize: "4rem", fontWeight: "800" }, children: "$" }),
            /* @__PURE__ */ jsx("p", { style: { fontWeight: "600", textTransform: "uppercase", letterSpacing: "2px" }, children: "Transparent Pricing" })
          ] })
        ] })
      }
    )
  ] }) }) });
};
const steps = [
  {
    icon: Monitor,
    title: "Modern Equipment",
    description: "We use high-tech, portable ultrasound equipment for the clearest possible diagnostic imaging."
  },
  {
    icon: Clock,
    title: "Quick Exams",
    description: "Most exams are completed efficiently (under 30-45 mins), allowing you to return to your day immediately."
  },
  {
    icon: Shield,
    title: "Private Environment",
    description: "Your comfort and privacy are our top priorities in our professional, clinical setting."
  },
  {
    icon: Share2,
    title: "Direct Results",
    description: "Findings are shared directly with your referring healthcare provider for seamless follow-up care."
  }
];
const WhatToExpect = () => {
  return /* @__PURE__ */ jsxs("section", { id: "what-to-expect", style: { backgroundColor: "var(--color-soft-gray-bg)" }, children: [
    /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { style: { textAlign: "center", marginBottom: "5rem" }, children: [
        /* @__PURE__ */ jsx(
          motion.h2,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            style: { fontSize: "2.5rem", marginBottom: "1.5rem", color: "var(--color-primary-navy)" },
            children: "What to Expect"
          }
        ),
        /* @__PURE__ */ jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: 0.1 },
            style: { maxWidth: "650px", margin: "0 auto", fontSize: "1.125rem" },
            children: "Patients can expect a professional, straightforward experience from start to finish. Most exams are completed efficiently, allowing you to return to normal activities right away."
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "2.5rem",
        position: "relative"
      }, children: [
        /* @__PURE__ */ jsx("div", { style: {
          position: "absolute",
          top: "45px",
          left: "10%",
          right: "10%",
          height: "2px",
          backgroundColor: "var(--color-sky-blue)",
          zIndex: 0,
          display: "none"
        }, className: "step-line" }),
        steps.map((step, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: index * 0.2 },
            style: { textAlign: "center", position: "relative", zIndex: 1 },
            children: [
              /* @__PURE__ */ jsx("div", { style: {
                width: "90px",
                height: "90px",
                backgroundColor: "var(--color-white)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem",
                color: "var(--color-primary-blue)",
                boxShadow: "var(--shadow-md)",
                border: "4px solid var(--color-light-blue)"
              }, children: /* @__PURE__ */ jsx(step.icon, { size: 36 }) }),
              /* @__PURE__ */ jsx("h3", { style: { fontSize: "1.25rem", marginBottom: "0.75rem", color: "var(--color-primary-navy)" }, children: step.title }),
              /* @__PURE__ */ jsx("p", { style: { fontSize: "0.95rem", color: "var(--color-text-body)", lineHeight: "1.6" }, children: step.description })
            ]
          },
          index
        ))
      ] })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
        @media (min-width: 1024px) {
          .step-line { display: block !important; }
        }
      ` })
  ] });
};
const reasons = [
  {
    icon: Award,
    title: "Licensed & Credentialed",
    description: "Our providers are highly skilled, licensed, and credentialed professionals."
  },
  {
    icon: Zap,
    title: "Fast Documentation",
    description: "Quick turnaround times for exam results and reporting to your providers."
  },
  {
    icon: Camera,
    title: "Modern Portable Equipment",
    description: "State-of-the-art ultrasound technology for high-resolution imaging."
  },
  {
    icon: Shield,
    title: "HIPAA-Compliant",
    description: "Your health information is handled with the highest level of security and privacy."
  },
  {
    icon: HeartHandshake,
    title: "Patient-Focused Care",
    description: "Professional care that prioritizes patient comfort and convenience."
  }
];
const WhyChooseUs = () => {
  return /* @__PURE__ */ jsx("section", { id: "why-choose-us", style: { backgroundColor: "var(--color-white)" }, children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }, children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        style: { flex: "1 1 400px" },
        initial: { opacity: 0, x: -30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        children: [
          /* @__PURE__ */ jsx("h2", { style: { fontSize: "2.5rem", marginBottom: "1.5rem", color: "var(--color-primary-navy)" }, children: "Why Choose Precision Imaging" }),
          /* @__PURE__ */ jsx("p", { style: { fontSize: "1.2rem", color: "var(--color-secondary-blue)", fontWeight: "600", marginBottom: "1.5rem" }, children: "Trust, Reliability, and Convenience." }),
          /* @__PURE__ */ jsx("p", { style: { fontSize: "1.125rem", marginBottom: "2rem", lineHeight: "1.8" }, children: "We pride ourselves on providing a clinical experience that feels high-tech yet personal. Our self-pay model ensures that financial transparency is never a barrier to quality diagnostic care." }),
          /* @__PURE__ */ jsx(
            motion.a,
            {
              href: "#contact",
              className: "btn btn-primary",
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              children: "Book Your Scan Today"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { style: { flex: "1 1 400px", display: "flex", flexDirection: "column", gap: "1.5rem" }, children: reasons.map((reason, index) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: 30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { delay: index * 0.1 },
        whileHover: { x: 10 },
        style: {
          display: "flex",
          gap: "1.5rem",
          padding: "1.5rem",
          borderRadius: "1rem",
          backgroundColor: "var(--color-soft-gray-bg)",
          borderLeft: "4px solid var(--color-secondary-blue)"
        },
        children: [
          /* @__PURE__ */ jsx("div", { style: { color: "var(--color-primary-blue)", flexShrink: 0 }, children: /* @__PURE__ */ jsx(reason.icon, { size: 28 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { style: { fontSize: "1.125rem", marginBottom: "0.25rem", color: "var(--color-primary-navy)" }, children: reason.title }),
            /* @__PURE__ */ jsx("p", { style: { fontSize: "0.925rem" }, children: reason.description })
          ] })
        ]
      },
      index
    )) })
  ] }) }) });
};
const Contact = () => {
  const [formState, setFormState] = useState("idle");
  return /* @__PURE__ */ jsx("section", { id: "contact", style: { backgroundColor: "var(--color-soft-gray-bg)", padding: "5rem 0" }, children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxs("div", { style: { textAlign: "center", marginBottom: "4rem" }, children: [
      /* @__PURE__ */ jsx("h2", { style: { fontSize: "2.5rem", marginBottom: "1rem", color: "var(--color-primary-navy)" }, children: "Contact Us" }),
      /* @__PURE__ */ jsx("p", { style: { fontSize: "1.125rem", maxWidth: "600px", margin: "0 auto" }, children: "Ready to book an appointment or have questions? Reach out to us today." })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem", alignItems: "start" }, children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "2rem" }, children: [
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: "1.5rem", alignItems: "flex-start" }, children: [
                /* @__PURE__ */ jsx("div", { style: { width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "var(--color-white)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-primary-blue)", boxShadow: "var(--shadow-sm)" }, children: /* @__PURE__ */ jsx(Phone, { size: 24 }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { style: { fontSize: "1.25rem", color: "var(--color-primary-navy)", marginBottom: "0.25rem" }, children: "Phone" }),
                  /* @__PURE__ */ jsx("a", { href: "tel:630-344-9449", style: { fontSize: "1.5rem", fontWeight: "700", color: "var(--color-secondary-blue)" }, children: "630-344-9449" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: "1.5rem", alignItems: "center" }, children: [
                /* @__PURE__ */ jsx("div", { style: { width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "var(--color-white)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-primary-blue)", boxShadow: "var(--shadow-sm)" }, children: /* @__PURE__ */ jsx(Mail, { size: 24 }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { style: { fontSize: "1.25rem", color: "var(--color-primary-navy)", marginBottom: "0.25rem" }, children: "Email" }),
                  /* @__PURE__ */ jsx("a", { href: "mailto:precisionimageusa@gmail.com", style: { fontSize: "1.1rem", color: "var(--color-gray-text)" }, children: "precisionimageusa@gmail.com" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: "1.5rem", alignItems: "flex-start" }, children: [
                /* @__PURE__ */ jsx("div", { style: { width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "var(--color-white)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-primary-blue)", boxShadow: "var(--shadow-sm)" }, children: /* @__PURE__ */ jsx(MapPin, { size: 24 }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { style: { fontSize: "1.25rem", color: "var(--color-primary-navy)", marginBottom: "0.25rem" }, children: "Location" }),
                  /* @__PURE__ */ jsx("p", { style: { fontSize: "1.1rem" }, children: "Serving Chicago Metro Area & Surrounding Suburbs" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: "1.5rem", alignItems: "center" }, children: [
                /* @__PURE__ */ jsx("div", { style: { width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "var(--color-white)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-primary-blue)", boxShadow: "var(--shadow-sm)" }, children: /* @__PURE__ */ jsx(Link, { to: "/booking", children: /* @__PURE__ */ jsx(CheckCircle, { size: 24 }) }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { style: { fontSize: "1.25rem", color: "var(--color-primary-navy)", marginBottom: "0.25rem" }, children: /* @__PURE__ */ jsx(Link, { to: "/booking", style: { textDecoration: "none", color: "inherit" }, children: "Book Appointment" }) }),
                  /* @__PURE__ */ jsx("p", { style: { fontSize: "1rem", color: "var(--color-gray-text)" }, children: "Schedule online instantly" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { style: { marginTop: "3rem", padding: "2rem", backgroundColor: "var(--color-sky-blue)", borderRadius: "1rem", opacity: 0.8 }, children: [
              /* @__PURE__ */ jsx("h4", { style: { color: "var(--color-primary-navy)", marginBottom: "0.5rem" }, children: "REFERRING PROVIDERS" }),
              /* @__PURE__ */ jsx("p", { style: { fontSize: "0.95rem" }, children: "We provide fast documentation turnaround and HIPAA-compliant results sharing for all referring physicians and healthcare practices." })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          style: {
            backgroundColor: "var(--color-white)",
            padding: "1rem",
            borderRadius: "1.5rem",
            boxShadow: "var(--shadow-lg)",
            overflow: "hidden",
            height: "700px"
            // Increased height
          },
          children: /* @__PURE__ */ jsx(
            "iframe",
            {
              src: "https://links.airevlabs.com/widget/form/Oj5KV4C0BEXGHFjfqGLp",
              style: {
                width: "100%",
                border: "none",
                height: "100%"
              },
              scrolling: "no",
              title: "Contact Form"
            }
          )
        }
      )
    ] })
  ] }) });
};
const Home = () => {
  return /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Services, {}),
    /* @__PURE__ */ jsx(SelfPay, {}),
    /* @__PURE__ */ jsx(WhatToExpect, {}),
    /* @__PURE__ */ jsx(WhyChooseUs, {}),
    /* @__PURE__ */ jsx(Contact, {})
  ] });
};
const Booking = () => {
  return /* @__PURE__ */ jsx("div", { className: "pt-24 pb-12 px-4 min-h-screen bg-gray-50 flex flex-col items-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden p-4 md:p-8", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-6 text-center", children: "Book Your Appointment" }),
    /* @__PURE__ */ jsx("div", { className: "w-full h-[800px] md:h-[1000px]", children: /* @__PURE__ */ jsx(
      "iframe",
      {
        src: "https://links.airevlabs.com/widget/booking/ID42mfbX2KQb6dnEDDlZ",
        title: "Book Appointment",
        width: "100%",
        height: "100%",
        frameBorder: "0",
        scrolling: "yes"
      }
    ) })
  ] }) });
};
const Hipaa = () => {
  return /* @__PURE__ */ jsxs("div", { className: "pt-24 pb-12 px-4 max-w-4xl mx-auto min-h-screen", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-8", children: "HIPAA Notice of Privacy Practices" }),
    /* @__PURE__ */ jsxs("div", { className: "prose max-w-none text-gray-700 space-y-6", children: [
      /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsxs("strong", { children: [
        "Effective Date: Jan 1st, ",
        (/* @__PURE__ */ new Date()).getFullYear()
      ] }) }),
      /* @__PURE__ */ jsx("p", { className: "text-lg font-semibold", children: "THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY." }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900 mb-2", children: "Our Legal Duty" }),
        /* @__PURE__ */ jsx("p", { children: "PRECISIONIMAGINGUSA LLC is required by applicable federal and state law to maintain the privacy of your health information. We are also required to give you this Notice about our privacy practices, our legal duties, and your rights concerning your health information. We must follow the privacy practices that are described in this Notice while it is in effect." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900 mb-2", children: "Uses and Disclosures of Health Information" }),
        /* @__PURE__ */ jsx("p", { children: "We use and disclose health information about you for treatment, payment, and healthcare operations. For example:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 mt-2 space-y-1", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Treatment:" }),
            " We may use or disclose your health information to a physician or other healthcare provider providing treatment to you."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Payment:" }),
            " We may use and disclose your health information to obtain payment for services we provide to you."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Healthcare Operations:" }),
            " We may use and disclose your health information in connection with our healthcare operations, such as quality assessment and improvement activities."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900 mb-2", children: "Your Rights" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 mt-2 space-y-2", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Access:" }),
            " You have the right to look at or get copies of your health information, with limited exceptions."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Disclosure Accounting:" }),
            " You have the right to receive a list of instances in which we or our business associates disclosed your health information for purposes, other than treatment, payment, healthcare operations and certain other activities."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Restriction:" }),
            " You have the right to request that we place additional restrictions on our use or disclosure of your health information."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Alternative Communication:" }),
            " You have the right to request that we communicate with you about your health information by alternative means or to alternative locations."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Amendment:" }),
            " You have the right to request that we amend your health information."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Electronic Notice:" }),
            " If you receive this Notice on our Web site or by electronic mail (e-mail), you are entitled to receive this Notice in written form."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900 mb-2", children: "Questions and Complaints" }),
        /* @__PURE__ */ jsx("p", { children: "If you want more information about our privacy practices or have questions or concerns, please contact us." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("strong", { children: "Privacy Officer" }) }),
          /* @__PURE__ */ jsx("p", { children: "PRECISIONIMAGINGUSA LLC" }),
          /* @__PURE__ */ jsx("p", { children: "Westmont, IL" }),
          /* @__PURE__ */ jsx("p", { children: "Phone: 630-344-9449" }),
          /* @__PURE__ */ jsx("p", { children: "Email: precisionimageusa@gmail.com" })
        ] })
      ] })
    ] })
  ] });
};
const Privacy = () => {
  return /* @__PURE__ */ jsxs("div", { className: "pt-24 pb-12 px-4 max-w-4xl mx-auto min-h-screen", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-8", children: "Privacy Policy" }),
    /* @__PURE__ */ jsxs("div", { className: "prose max-w-none text-gray-700 space-y-6", children: [
      /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsxs("strong", { children: [
        "Effective Date: Jan 1st, ",
        (/* @__PURE__ */ new Date()).getFullYear()
      ] }) }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900 mb-2", children: "IMPORTANT NOTICE REGARDING TEXT MESSAGING" }),
        /* @__PURE__ */ jsx("p", { children: 'PRECISIONIMAGINGUSA LLC ("we," "us," or "our") DOES NOT share customer opt-in information, including phone numbers and consent records, with any affiliates or third parties for marketing, promotional, or any other purposes unrelated to providing our direct services. All text messaging originator opt-in data is kept strictly confidential.' })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900 mb-2", children: "1. Information We Collect" }),
        /* @__PURE__ */ jsx("p", { children: "We collect the following types of information:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 mt-2 space-y-1", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Personal Information:" }),
            " Name, email address, phone number, physical address, payment information, opt-in records."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Non-Personal Information:" }),
            " IP address, browser type, device info, analytics, cookies."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Customer Communication:" }),
            " Records of inquiries, appointment details, service history."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900 mb-2", children: "2. How We Use Your Information" }),
        /* @__PURE__ */ jsx("p", { children: "We use collected data for:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 mt-2 space-y-1", children: [
          /* @__PURE__ */ jsx("li", { children: "Providing and improving our services" }),
          /* @__PURE__ */ jsx("li", { children: "Processing transactions and payments" }),
          /* @__PURE__ */ jsx("li", { children: "Communicating with you about your inquiries and appointments" }),
          /* @__PURE__ */ jsx("li", { children: "Ensancing website functionality and security" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900 mb-2", children: "3. SMS Messaging & Compliance" }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2", children: "Text Message Program Terms & Conditions" }),
        /* @__PURE__ */ jsx("p", { className: "mb-2", children: "By opting into our SMS messaging services, you agree to receive text messages related to our services, including appointment reminders and customer support." }),
        /* @__PURE__ */ jsx("h4", { className: "font-semibold mt-2", children: "Opt-In & Consent:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 mb-2", children: [
          /* @__PURE__ */ jsx("li", { children: "You will only receive messages if you have explicitly opted in." }),
          /* @__PURE__ */ jsx("li", { children: "We maintain timestamped records of all opt-in actions." }),
          /* @__PURE__ */ jsx("li", { children: "We comply with the TCPA and applicable laws." })
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "font-semibold mt-2", children: "Opt-Out Instructions:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 mb-2", children: [
          /* @__PURE__ */ jsx("li", { children: 'Reply "STOP" to cancel at any time.' }),
          /* @__PURE__ */ jsx("li", { children: "You will receive a final confirmation message, and no further messages will be sent unless you re-opt in." })
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "font-semibold mt-2", children: "Message Frequency & Content:" }),
        /* @__PURE__ */ jsx("p", { children: "Message frequency varies based on your interactions. Messages will be directly related to requested services. We do not send promotional content without specific consent." }),
        /* @__PURE__ */ jsx("h4", { className: "font-semibold mt-2", children: "Help & Support:" }),
        /* @__PURE__ */ jsx("p", { children: 'Reply "HELP" for assistance or contact us at precisionimageusa@gmail.com.' })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900 mb-2", children: "4. Information Sharing & Disclosure" }),
        /* @__PURE__ */ jsx("p", { children: "We do not sell, rent, or trade personal information. We may share information with Service Providers for operations (e.g., payment, scheduling), but strictly excluding text messaging originator opt-in data for marketing purposes." }),
        /* @__PURE__ */ jsx("p", { className: "mt-2", children: /* @__PURE__ */ jsx("strong", { children: "All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties, excluding aggregators and providers of the Text Message services." }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900 mb-2", children: "5. Data Security" }),
        /* @__PURE__ */ jsx("p", { children: "We implement reasonable security measures (encryption, access controls) to protect your personal information, though no method is 100% secure." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900 mb-2", children: "6. Cookies & Tracking" }),
        /* @__PURE__ */ jsx("p", { children: "We use cookies to analyze traffic and improve user experience. You may control cookies through your browser settings." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900 mb-2", children: "7. Your Rights & Choices" }),
        /* @__PURE__ */ jsx("p", { children: "You have the right to access, update, or delete your info, opt-out of marketing/SMS, and withdraw consent. Contact us to exercise these rights." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900 mb-2", children: "10. Contact Us" }),
        /* @__PURE__ */ jsx("p", { children: "If you have questions about this Privacy Policy, contact us at:" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-2", children: [
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("strong", { children: "PRECISIONIMAGINGUSA LLC" }) }),
          /* @__PURE__ */ jsx("p", { children: "Phone: 630-344-9449" }),
          /* @__PURE__ */ jsx("p", { children: "Email: precisionimageusa@gmail.com" }),
          /* @__PURE__ */ jsx("p", { children: "Website: precisionimagingus.com" })
        ] })
      ] })
    ] })
  ] });
};
const Terms = () => {
  return /* @__PURE__ */ jsxs("div", { className: "pt-24 pb-12 px-4 max-w-4xl mx-auto min-h-screen", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-8", children: "Terms of Service" }),
    /* @__PURE__ */ jsxs("div", { className: "prose max-w-none text-gray-700 space-y-6", children: [
      /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsxs("strong", { children: [
        "Effective Date: Jan 1st, ",
        (/* @__PURE__ */ new Date()).getFullYear()
      ] }) }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900 mb-2", children: "SMS Messaging Terms & Compliance" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "1. Program Description" }),
            /* @__PURE__ */ jsx("p", { children: "This messaging program sends appointment confirmation and reminder messages to customers who have booked an appointment with PRECISIONIMAGINGUSA LLC through our website or scheduling forms and opted in. Messages include scheduling confirmations, reminders, rescheduling updates, and support." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "2. Cancellation Instructions" }),
            /* @__PURE__ */ jsx("p", { children: 'You can cancel the SMS service at any time by texting "STOP". We will confirm your unsubscribe status via SMS. Create a new appointment to opt back in.' })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "3. Support Information" }),
            /* @__PURE__ */ jsx("p", { children: 'Reply "HELP" for assistance, or contact precisionimageusa@gmail.com or call 630-344-9449.' })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "4. Messaging Terms" }),
            /* @__PURE__ */ jsx("p", { children: "Carriers are not liable for delayed or undelivered messages. Message and data rates may apply. Message frequency varies based on your service usage." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "5. Age Restriction" }),
            /* @__PURE__ */ jsx("p", { children: "You must be 18 years or older to participate in our SMS program." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "6. Privacy Policy" }),
            /* @__PURE__ */ jsx("p", { children: "For privacy-related inquiries, please refer to our Privacy Policy." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900 mb-2", children: "General Terms" }),
        /* @__PURE__ */ jsx("p", { children: 'This website (the "Site") is owned and operated by PRECISIONIMAGINGUSA LLC. By using the Site, you agree to be bound by these Terms of Service.' }),
        /* @__PURE__ */ jsx("p", { className: "mt-2", children: "Accessing the Site, in any manner, constitutes use of the Site and your agreement to be bound by these Terms." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900 mb-2", children: "Intellectual Property Rights" }),
        /* @__PURE__ */ jsx("p", { children: "This Site and all materials available on it are the property of PRECISIONIMAGINGUSA LLC and are protected by copyright, trademark, and other intellectual property laws. The Site is provided solely for your personal non-commercial use." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900 mb-2", children: "Disclaimers" }),
        /* @__PURE__ */ jsx("p", { children: 'The information, products, and services offered on or through the Site are provided "as is" and without warranties of any kind. We disclaim all warranties, including implied warranties of merchantability and fitness for a particular purpose.' }),
        /* @__PURE__ */ jsx("p", { className: "mt-2", children: "You agree to indemnify and hold harmless PRECISIONIMAGINGUSA LLC from any claims arising out of your breach of these Terms." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900 mb-2", children: "Termination" }),
        /* @__PURE__ */ jsx("p", { children: "We reserve the right to terminate or suspend your access to the Site without notice if we determine that you have violated these Terms of Service." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900 mb-2", children: "Governing Law" }),
        /* @__PURE__ */ jsx("p", { children: "These Terms of Service shall be governed by and construed in accordance with the laws of the state in which PRECISIONIMAGINGUSA LLC operates." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900 mb-2", children: "Contact Us" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-2", children: [
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("strong", { children: "PRECISIONIMAGINGUSA LLC" }) }),
          /* @__PURE__ */ jsx("p", { children: "Phone: 630-344-9449" }),
          /* @__PURE__ */ jsx("p", { children: "Email: precisionimageusa@gmail.com" }),
          /* @__PURE__ */ jsx("p", { children: "Website: precisionimagingus.com" })
        ] })
      ] })
    ] })
  ] });
};
const ScrollToAnchor = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);
  return null;
};
const routes = [
  { path: "/", element: /* @__PURE__ */ jsx(Home, {}) },
  { path: "/booking", element: /* @__PURE__ */ jsx(Booking, {}) },
  { path: "/hipaa", element: /* @__PURE__ */ jsx(Hipaa, {}) },
  { path: "/privacy", element: /* @__PURE__ */ jsx(Privacy, {}) },
  { path: "/terms", element: /* @__PURE__ */ jsx(Terms, {}) }
];
function App() {
  return /* @__PURE__ */ jsxs("div", { className: "app", children: [
    /* @__PURE__ */ jsx(ScrollToAnchor, {}),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Outlet, {}),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(BackToTop, {}),
    /* @__PURE__ */ jsx(FloatingContactForm, {})
  ] });
}
const createApp = ViteReactSSG(
  // the root component
  App,
  // react-router-dom data routes
  { routes }
);
export {
  createApp
};

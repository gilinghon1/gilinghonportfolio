import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Brain,
  Code,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  PenTool,
  Wrench,
} from "lucide-react";
import cutout from "./image/profile-cutout.webp";
import brainbloomImage from "./image/brainbloom.png";

/* ---------- Content (edit these) ---------- */
const PROFILE = {
  name: "GI LINGHON",
  displayName: "Gi Linghon",
  role: "Frontend Developer & UI/UX Designer",
  status: "Available for select freelance projects",
  intro:
    "Designing and coding digital products that people love to use. From initial wireframes to lightning-fast code, I build seamless, accessible web applications that elevate your brand and drive actual business results.",
  email: "glinghon133@gmail.com",
  location: "Philippines, Davao City (Remote-friendly)",
  photo: cutout,
  photoWidth: 320,
  badge: "Open for projects",
  initials: "GL",
};

const NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/gyaaaay/", icon: "instagram", brand: "#dc2743", bg: "linear-gradient(45deg,#f09433,#dc2743 55%,#bc1888)" },
  { label: "GitHub", href: "https://github.com/gilinghon1", icon: "github", brand: "#8b5cf6", bg: "#6e40c9" },
  { label: "Facebook", href: "https://www.facebook.com/g.linghon/", icon: "facebook", brand: "#1877f2", bg: "#1877f2" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gi-d-linghon-22a49a325/", icon: "linkedin", brand: "#0a66c2", bg: "#0a66c2" },
  { label: "Email", href: `mailto:${PROFILE.email}`, icon: "mail", brand: "#a5b4fc", bg: "#4f5bd5" },
];

const ABOUT_PARAGRAPHS = [
  "I'm an Information Technology student at the University of the Immaculate Conception, specializing in UI/UX design. I enjoy creating clean, simple, and user-friendly designs.",
  "I like turning ideas into designs through user research, wireframes, and prototypes using Figma. I also enjoy bringing my designs to life using HTML, CSS, JavaScript, and React.",
  "I'm always looking for opportunities to learn new skills, work on creative projects, and grow as a UI/UX designer and front-end developer.",
];

const SKILLS = [
  {
    title: "Frontend Development",
    icon: Code,
    tone: "violet",
    text: "Building responsive, high-performance web applications using modern paradigms.",
    tags: ["HTML", "CSS3 / PostCSS", "React", "JavaScript", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "UI/UX Design",
    icon: PenTool,
    tone: "indigo",
    text: "Translating complex user requirements into intuitive, accessible interfaces.",
    tags: ["UI/UX Strategy", "Figma", "Prototyping", "Wireframing", "User Research"],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    tone: "teal",
    text: "Leveraging industry-standard toolchains for maximum productivity and quality.",
    tags: ["Git / GitHub", "VS Code", "Vite"],
  },
];

const PROJECTS = [
  {
    title: "BrainBloom",
    text: "An AI-Powered Web Application for Note Summarization and Quiz Generation",
    kind: "brainbloom",
    url: "https://brainbloom.uic.edu.ph/",
  },
  {
    title: "Echoverse Lead Chatbot",
    text: "Automated customer chatbots that answer messages, collect new leads, and help businesses respond faster.",
    kind: "analytics",
  },
  {
    title: "Personal Portfolio",
    text: "A responsive developer portfolio focused on clear storytelling, accessible interactions, and a polished visual system.",
    kind: "system",
  },
];

/* ---------- Brand icons (inline so no extra deps) ---------- */
function SocialIcon({ name }) {
  const common = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true };
  switch (name) {
    case "instagram":
      return (
        <svg {...common}>
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5.25-3.25a1.05 1.05 0 1 1-1.05 1.05 1.05 1.05 0 0 1 1.05-1.05Z" />
        </svg>
      );
    case "github":
      return (
        <svg {...common}>
          <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common}>
          <path d="M12 2a10 10 0 0 0-1.56 19.88v-7H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v7A10 10 0 0 0 12 2Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm2.4 7.2v7.4h2.3v-7.4H6.4Zm1.15-3.6a1.34 1.34 0 1 0 0 2.68 1.34 1.34 0 0 0 0-2.68Zm3.13 3.6v7.4h2.3v-3.9c0-1 .5-1.7 1.4-1.7s1.2.7 1.2 1.7v3.9h2.3v-4.4c0-2-1.05-3.2-2.75-3.2-1 0-1.7.5-2.05 1.1v-.9h-2.4Z" />
        </svg>
      );
    default:
      return <Mail size={20} strokeWidth={2.2} aria-hidden="true" />;
  }
}

/* ---------- Project thumbnails (CSS-drawn placeholders) ---------- */
function Thumb({ kind }) {
  if (kind === "brainbloom") {
    return (
      <div className="thumb thumb-brainbloom">
        <img src={brainbloomImage} alt="BrainBloom website preview" />
      </div>
    );
  }
  if (kind === "analytics") {
    return (
      <div className="thumb thumb-analytics" aria-hidden="true">
        <div className="mock-screen">
          <div className="mock-bars">
            {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
              <span key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
          <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="mock-line">
            <polyline fill="none" stroke="#a5b4fc" strokeWidth="1.5" points="0,24 15,18 30,20 45,10 60,14 75,6 100,9" />
          </svg>
        </div>
      </div>
    );
  }
  if (kind === "shop") {
    return (
      <div className="thumb thumb-shop" aria-hidden="true">
        <div className="mock-screen light">
          <div className="mock-nav" />
          <div className="mock-shop-grid">
            <span className="hero-tile" />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="thumb thumb-system" aria-hidden="true">
      <div className="mock-screen light">
        <div className="mock-tokens">
          {["#6366f1", "#a78bfa", "#14b8a6", "#f59e0b", "#ef4444", "#e2e8f0"].map((c) => (
            <span key={c} style={{ background: c }} />
          ))}
        </div>
        <div className="mock-btn-row">
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

/* ---------- Radial Reveal Button (Originkit) ----------
   Ported to plain JS and animated with requestAnimationFrame,
   so it needs no framer-motion dependency. */
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
const radiusFromPercent = (w, h, pct) =>
  (Math.min(w, h) / 2) * (Math.max(0, Math.min(100, pct)) / 100);

const BTN_FONT = { fontFamily: "inherit", fontWeight: 500, fontSize: 13, lineHeight: 1.2 };
const BTN = {
  primary: {
    fill: "#c4c6ff", textColor: "#1b1d4a", hoverFill: "#1b1d4a", hoverTextColor: "#e6e8ef",
    borderColor: "#c4c6ff", font: BTN_FONT, padding: "10px 18px", rounded: 35,
  },
  ghost: {
    fill: "#1c2130", textColor: "#e6e8ef", hoverFill: "#c4c6ff", hoverTextColor: "#1b1d4a",
    borderColor: "rgba(255,255,255,0.1)", font: BTN_FONT, padding: "10px 18px", rounded: 35,
  },
  resume: {
    fill: "#06070b", textColor: "#e6e8ef", hoverFill: "#c4c6ff", hoverTextColor: "#1b1d4a",
    borderColor: "rgba(255,255,255,0.1)", font: { ...BTN_FONT, fontSize: 12, fontWeight: 600 },
    padding: "8px 16px", rounded: 40,
  },
  cream: {
    fill: "#e6e8ef", textColor: "#0d1017", hoverFill: "#c4c6ff", hoverTextColor: "#1b1d4a",
    borderColor: "#e6e8ef", font: { ...BTN_FONT, fontSize: 14, fontWeight: 600 }, padding: "14px 26px", rounded: 100,
  },
  outline: {
    fill: "transparent", textColor: "#e6e8ef", hoverFill: "#e6e8ef", hoverTextColor: "#0d1017",
    borderColor: "rgba(255,255,255,0.35)", font: { ...BTN_FONT, fontSize: 14, fontWeight: 600 }, padding: "14px 26px", rounded: 100,
  },
  send: {
    fill: "#a5b4fc", textColor: "#1b1d4a", hoverFill: "#1b1d4a", hoverTextColor: "#e6e8ef",
    borderColor: "#a5b4fc", font: { ...BTN_FONT, fontSize: 12 }, padding: "12px 16px", rounded: 35,
  },
};

function RadialRevealButton({
  label = "Button",
  font = BTN_FONT,
  padding = "10px 18px",
  rounded = 100,
  fill = "#000000",
  textColor = "#ffffff",
  hoverFill = "#ffffff",
  hoverTextColor = "#000000",
  addIcon = false,
  icon = "→",
  iconSize = 14,
  gap = 8,
  borderWidth = 1,
  borderColor = "transparent",
  link = "",
  newTab = false,
  duration = 0.45,
  onClick,
  style,
}) {
  const ref = useRef(null);
  const overlayRef = useRef(null);
  const raf = useRef(0);
  const clip = useRef({ r: 0, x: 100, y: 100, max: 160 });
  const [box, setBox] = useState({ w: 0, h: 0 });

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const read = () =>
      setBox((prev) =>
        prev.w === el.offsetWidth && prev.h === el.offsetHeight
          ? prev
          : { w: el.offsetWidth, h: el.offsetHeight }
      );
    read();
    const ro = new ResizeObserver(read);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const radiusPx = radiusFromPercent(box.w, box.h, rounded);

  const applyClip = () => {
    const el = overlayRef.current;
    if (!el) return;
    const { r, x, y } = clip.current;
    const value = `circle(${r}% at ${x}% ${y}%)`;
    el.style.clipPath = value;
    el.style.webkitClipPath = value;
  };

  const anchorTo = (clientX, clientY) => {
    const el = overlayRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const px = clientX - rect.left;
    const py = clientY - rect.top;
    const unit = Math.hypot(rect.width, rect.height) / Math.SQRT2;
    const far = Math.max(
      Math.hypot(px, py),
      Math.hypot(rect.width - px, py),
      Math.hypot(px, rect.height - py),
      Math.hypot(rect.width - px, rect.height - py)
    );
    clip.current.x = (px / rect.width) * 100;
    clip.current.y = (py / rect.height) * 100;
    clip.current.max = (far / unit) * 100 + 2;
  };

  const growTo = (to) => {
    cancelAnimationFrame(raf.current);
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      clip.current.r = to;
      applyClip();
      return;
    }
    const from = clip.current.r;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      clip.current.r = from + (to - from) * easeInOut(t);
      applyClip();
      if (t < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
  };

  const onEnter = (e) => {
    anchorTo(e.clientX, e.clientY);
    applyClip();
    growTo(clip.current.max);
  };
  const onLeave = (e) => {
    if (clip.current.r >= clip.current.max - 0.5) {
      anchorTo(e.clientX, e.clientY);
      clip.current.r = clip.current.max;
      applyClip();
    }
    growTo(0);
  };
  const onFocus = () => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    anchorTo(rect.left + rect.width / 2, rect.top + rect.height / 2);
    growTo(clip.current.max);
  };
  const onBlur = () => growTo(0);

  useIsoLayoutEffect(() => {
    applyClip();
    return () => cancelAnimationFrame(raf.current);
  }, []);

  const Tag = link ? "a" : "button";
  const tagProps = link
    ? { href: link, target: newTab ? "_blank" : undefined, rel: newTab ? "noopener noreferrer" : undefined }
    : { type: "button", onClick };

  const face = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    gap: addIcon ? gap : 0,
  };

  const content = (
    <>
      <span>{label}</span>
      {addIcon && (
        <span aria-hidden="true" style={{ fontSize: iconSize, lineHeight: 1, flex: "none" }}>
          {icon}
        </span>
      )}
    </>
  );

  return (
    <Tag
      {...tagProps}
      ref={ref}
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: radiusPx,
        borderWidth,
        borderStyle: "solid",
        borderColor,
        backgroundColor: fill,
        textDecoration: "none",
        cursor: "pointer",
        overflow: "hidden",
        boxSizing: "border-box",
        userSelect: "none",
        ...font,
        ...style,
      }}
    >
      <span style={{ ...face, color: textColor }}>{content}</span>
      <span
        ref={overlayRef}
        aria-hidden="true"
        style={{
          ...face,
          position: "absolute",
          inset: 0,
          backgroundColor: hoverFill,
          color: hoverTextColor,
          pointerEvents: "none",
          borderRadius: Math.max(0, radiusPx - borderWidth),
          clipPath: "circle(0% at 100% 100%)",
          WebkitClipPath: "circle(0% at 100% 100%)",
        }}
      >
        {content}
      </span>
    </Tag>
  );
}

/* ---------- Warp Field background ---------- */
const WARP = {
  speed: 380,
  density: 1,
  letterChance: 0.1,
  opacity: 0.8,
  letters: "abcdefghij",
  colors: ["#e6d33a", "#2dd4bf", "#5b52e0", "#a3e635"],
};

function WarpField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const DEPTH = 1000;
    const FOCAL = 300;
    let w = 0;
    let h = 0;
    let raf = 0;
    let last = 0;
    let stars = [];

    const reset = (s, fresh) => {
      s.x = (Math.random() - 0.5) * w * 2;
      s.y = (Math.random() - 0.5) * h * 2;
      s.z = fresh ? Math.random() * DEPTH + 1 : DEPTH;
      s.letter = Math.random() < WARP.letterChance;
      s.char = WARP.letters[Math.floor(Math.random() * WARP.letters.length)];
      s.color = WARP.colors[Math.floor(Math.random() * WARP.colors.length)];
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(380, Math.round(((w * h) / 6000) * WARP.density));
      stars = Array.from({ length: count }, () => {
        const s = {};
        reset(s, true);
        return s;
      });
    };

    const draw = (dt) => {
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2;
      const cy = h / 2;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (const s of stars) {
        const step = WARP.speed * dt;
        s.z -= step;
        const zPrev = Math.min(DEPTH * 1.2, s.z + step * 4 + (reduce ? 60 : 0));
        const k = FOCAL / s.z;
        const kPrev = FOCAL / zPrev;
        const x = cx + s.x * k;
        const y = cy + s.y * k;
        const off = x < -40 || x > w + 40 || y < -40 || y > h + 40;
        if (s.z <= 1 || off) {
          reset(s, false);
          continue;
        }
        const near = 1 - s.z / DEPTH;
        const alpha = Math.max(0, Math.min(1, near * 1.2)) * WARP.opacity;

        if (s.letter) {
          ctx.globalAlpha = alpha;
          ctx.fillStyle = s.color;
          ctx.font = `${Math.round(6 + near * 26)}px "Archivo", system-ui, sans-serif`;
          ctx.fillText(s.char, x, y);
        } else {
          ctx.globalAlpha = alpha * 0.55;
          ctx.strokeStyle = "#cfd6e6";
          ctx.lineWidth = 0.4 + near * 1.4;
          ctx.beginPath();
          ctx.moveTo(cx + s.x * kPrev, cy + s.y * kPrev);
          ctx.lineTo(x, y);
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;
    };

    const loop = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000 || 0.016);
      last = now;
      draw(dt);
      raf = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);
    if (reduce) {
      draw(0.5);
    } else {
      raf = requestAnimationFrame(loop);
    }
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="warp" aria-hidden="true" />;
}

/* ---------- Hero photo with badge ---------- */
function HeroPhoto() {
  return (
    <figure className="photo-frame" style={{ width: `min(100%, ${PROFILE.photoWidth || 400}px)` }}>
      {PROFILE.photo ? (
        <img src={PROFILE.photo} alt={`Portrait of ${PROFILE.name}`} />
      ) : (
        <div className="photo-placeholder" role="img" aria-label="Profile photo placeholder">
          <span>{PROFILE.initials}</span>
          <small>Add your photo in PROFILE.photo</small>
        </div>
      )}
      <figcaption className="photo-badge">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 1.5c.6 5.6 4.9 9.9 10.5 10.5-5.6.6-9.9 4.9-10.5 10.5C11.4 16.9 7.1 12.6 1.5 12 7.1 11.4 11.4 7.1 12 1.5Z" />
        </svg>
        {PROFILE.badge}
      </figcaption>
    </figure>
  );
}

/* ---------- Spin Cursor ----------
   A small arrow that follows the mouse, turns to face the direction you
   move, grows over clickable things, and does a full spin when you click.
   Only active for mouse-type pointers; touch screens keep normal behavior. */
const CURSOR = {
  size: 24,
  follow: 0.35,
  turn: 0.2,
  hoverScale: 1.35,
  color: "#ffffff",
};

function SpinCursor() {
  const ref = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(pointer: fine)").matches) setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;
    const el = ref.current;
    const host = el.parentElement;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    host.classList.add("cursor-on");

    const target = { x: -100, y: -100 };
    const pos = { x: -100, y: -100 };
    let angle = -135;
    let spin = 0;
    let spinTarget = 0;
    let scale = 1;
    let hover = false;
    let visible = false;
    let raf = 0;

    const setVisible = (v) => {
      visible = v;
      el.style.opacity = v ? "1" : "0";
    };

    const onMove = (e) => {
      if (e.pointerType && e.pointerType !== "mouse") return;
      if (!visible && !e.target.closest?.("input, textarea")) {
        pos.x = e.clientX;
        pos.y = e.clientY;
      }
      target.x = e.clientX;
      target.y = e.clientY;
      const overField = !!e.target.closest?.("input, textarea");
      hover = !!e.target.closest?.("a, button, [role='button']");
      setVisible(!overField);
    };
    const onDown = (e) => {
      if (e.pointerType && e.pointerType !== "mouse") return;
      if (!reduce) spinTarget += 360;
    };
    const onLeave = () => setVisible(false);

    const tick = () => {
      const px = pos.x;
      const py = pos.y;
      pos.x += (target.x - pos.x) * (reduce ? 1 : CURSOR.follow);
      pos.y += (target.y - pos.y) * (reduce ? 1 : CURSOR.follow);
      const vx = pos.x - px;
      const vy = pos.y - py;
      if (Math.hypot(vx, vy) > 0.6) {
        const heading = (Math.atan2(vy, vx) * 180) / Math.PI;
        const diff = ((heading - angle + 540) % 360) - 180;
        angle += diff * (reduce ? 1 : CURSOR.turn);
      }
      spin += (spinTarget - spin) * 0.15;
      scale += ((hover ? CURSOR.hoverScale : 1) - scale) * 0.2;
      const h = CURSOR.size / 2;
      el.style.transform = `translate(${pos.x - h}px, ${pos.y - h}px) rotate(${angle + spin}deg) scale(${scale})`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerdown", onDown);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      host.classList.remove("cursor-on");
    };
  }, [enabled]);

  if (!enabled) return <span ref={ref} hidden />;
  return (
    <div ref={ref} className="spin-cursor" style={{ width: CURSOR.size, height: CURSOR.size }} aria-hidden="true">
      <svg viewBox="0 0 24 24" width="100%" height="100%">
        <path
          d="M3 4 L21 12 L3 20 L8 12 Z"
          fill={CURSOR.color}
          stroke="#0d1017"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/* ---------- Page ---------- */
export default function Portfolio() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const update = (key) => (e) => {
    setForm({ ...form, [key]: e.target.value });
    if (status !== "idle") setStatus("idle");
  };

  const send = () => {
    const valid = form.name.trim() && /\S+@\S+\.\S+/.test(form.email) && form.message.trim();
    if (!valid) {
      setStatus("error");
      return;
    }
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <div className="page">
      <style>{css}</style>
      <WarpField />
      <SpinCursor />

      <header className="nav">
        <nav className="nav-inner" aria-label="Main">
          <ul className="nav-links">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
          <div className="btn-resume">
            <RadialRevealButton label="Resume" link="/GILINGHON-RESUME.pdf" newTab {...BTN.resume} />
          </div>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-copy">
            <span className="status-pill">
              <i /> {PROFILE.status}
            </span>
            <h1>I’m {PROFILE.name}</h1>
            <p className="role">{PROFILE.role}</p>
            <p className="intro">{PROFILE.intro}</p>

            <div className="cta-row">
              <RadialRevealButton label="Explore Projects" link="#experience" addIcon icon="→" {...BTN.primary} />
              <RadialRevealButton label="Contact Me" link="#contact" {...BTN.ghost} />
            </div>

            <ul className="socials">
              {SOCIALS.map((s, i) => (
                <li key={s.label} style={{ "--i": i }}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    data-label={s.label}
                    style={{ "--brand": s.brand, "--bg": s.bg }}
                  >
                    <SocialIcon name={s.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-photo">
            <HeroPhoto />
          </div>
        </section>

        <section className="section" id="about">
          <h2 className="h2">About Me</h2>
          <span className="rule" />

          <div className="about-grid">
            <div>
              <div className="about-text">
                {ABOUT_PARAGRAPHS.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="chips">
                <div className="chip">
                  <GraduationCap size={16} />
                  <strong>B.S. Information Technology</strong>
                  <small>University of the Immaculate Conception</small>
                </div>
                <div className="chip">
                  <PenTool size={16} color="#a5b4fc" />
                  <strong>UI/UX Specialization</strong>
                  <small>Advanced Interaction Design</small>
                </div>
              </div>
            </div>

            <aside className="philosophy">
              <Brain className="philo-icon" size={84} strokeWidth={1.2} aria-hidden="true" />
              <h3>Design Philosophy</h3>
              <blockquote>
                “Simplicity is about subtracting the obvious and adding the meaningful. Great code is merely the
                invisible scaffolding of a great experience.”
              </blockquote>
            </aside>
          </div>
        </section>

        <section className="section" id="skills">
          <h2 className="h2">Skills &amp; Expertise</h2>
          <span className="rule" />

          <div className="skills-grid">
            {SKILLS.map(({ title, icon: Icon, tone, text, tags }) => (
              <article className="card skill" key={title}>
                <span className={`icon-box ${tone}`}>
                  <Icon size={18} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
                <ul className="tags">
                  {tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

        </section>

        <section className="section" id="experience">
          <p className="eyebrow">
            <i /> Selected works
          </p>
          <h2 className="h2">Featured Projects</h2>
          <span className="rule" />

          <div className="projects-grid">
            {PROJECTS.map((p) => (
              <article className="card project" key={p.title}>
                <Thumb kind={p.kind} />
                <div className="project-body">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
                <div className="project-foot">
                  <a href={p.url || "#contact"} target={p.url ? "_blank" : undefined} rel={p.url ? "noreferrer" : undefined}>
                    View Case Study <ArrowRight size={12} />
                  </a>
                  <a className="icon-link" href="#" aria-label={`Open ${p.title}`}>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="center">
            <RadialRevealButton
              label="View Full Project Archive"
              link="#"
              addIcon
              icon="→"
              iconSize={12}
              {...BTN.ghost}
              font={{ ...BTN_FONT, fontSize: 12 }}
              padding="9px 20px"
              rounded={100}
            />
          </div>
        </section>

        <section className="section" id="contact">
          <h2 className="h2">Get In Touch</h2>
          <span className="rule" />

          <div className="contact-grid">
            <div>
              <h3 className="contact-title">Let’s build something amazing together.</h3>
              <p className="contact-text">
                Have a project in mind, an open role, or just want to connect? Drop a message and I’ll get back to
                you within 24 hours.
              </p>
              <div className="info">
                <Mail size={16} />
                <div>
                  <small>Email Me</small>
                  <span>{PROFILE.email}</span>
                </div>
              </div>
              <div className="info">
                <MapPin size={16} />
                <div>
                  <small>Location</small>
                  <span>{PROFILE.location}</span>
                </div>
              </div>
            </div>

            <div className="card contact-card">
              <div className="field">
                <label htmlFor="c-name">Your Name</label>
                <input id="c-name" value={form.name} onChange={update("name")} placeholder="Your name" />
              </div>
              <div className="field">
                <label htmlFor="c-email">Your Email</label>
                <input
                  id="c-email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@example.com"
                />
              </div>
              <div className="field">
                <label htmlFor="c-msg">Your Message</label>
                <textarea
                  id="c-msg"
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell me about your project..."
                />
              </div>
              <RadialRevealButton
                label="Send Message"
                onClick={send}
                addIcon
                icon="→"
                {...BTN.send}
                style={{ width: "100%" }}
              />
              <p className={`form-note ${status}`} role="status">
                {status === "error" && "Add your name, a valid email, and a message to send."}
                {status === "sent" && "Your email app should open with the message ready to send."}
              </p>
            </div>
          </div>
        </section>
        <section className="closing" aria-labelledby="closing-title">
          <p className="closing-eyebrow">( Contact )</p>
          <h2 id="closing-title" className="closing-title">
            Let’s build your product.
          </h2>
          <p className="closing-text">
            I take on a few freelance projects at a time. Tell me what you’re building and I’ll reply within 24
            hours.
          </p>
          <div className="cta-row closing-cta">
            <RadialRevealButton label={PROFILE.email} link={`mailto:${PROFILE.email}`} addIcon icon="↗" {...BTN.cream} />
            <RadialRevealButton label="See the work" link="#experience" {...BTN.outline} />
          </div>
          <p className="script" aria-hidden="true">
            Say hello
          </p>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 1.5c.6 5.6 4.9 9.9 10.5 10.5-5.6.6-9.9 4.9-10.5 10.5C11.4 16.9 7.1 12.6 1.5 12 7.1 11.4 11.4 7.1 12 1.5Z" />
          </svg>
          <strong>
            {PROFILE.displayName} — {PROFILE.role}
          </strong>
        </div>
        <ul className="footer-nav">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <p className="footer-copy">© {new Date().getFullYear()} {PROFILE.displayName}</p>
      </footer>
    </div>
  );
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&display=swap');

:root {
  --bg: #0d1017;
  --surface: #161a25;
  --surface-2: #1c2130;
  --border: rgba(255,255,255,0.07);
  --text: #e6e8ef;
  --muted: #9aa1b2;
  --accent: #c4c6ff;
  --accent-strong: #a5b4fc;
  --accent-ink: #1b1d4a;
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } * { transition: none !important; } }

.page {
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: 'Archivo', system-ui, sans-serif;
  line-height: 1.55;
}
:where(.page) a { color: inherit; text-decoration: none; }
:where(.page) ul { list-style: none; margin: 0; padding: 0; }
:where(.page) :is(h1, h2, h3, p) { margin: 0; }
.page :focus-visible { outline: 2px solid var(--accent-strong); outline-offset: 3px; border-radius: 6px; }

.page { position: relative; isolation: isolate; }
.warp { position: fixed; inset: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none; }
.page > main, .page > .footer { position: relative; z-index: 1; }

.closing { max-width: 900px; margin: 0 auto; padding: 96px 24px 0; text-align: center; }
.closing-eyebrow { font-family: 'Archivo', system-ui, sans-serif; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); }
.closing-title { margin-top: 20px; font-weight: 800; font-stretch: 125%; font-size: clamp(38px, 7vw, 72px); letter-spacing: -0.045em; line-height: 1.02; color: #f4f2ec; }
.closing-text { margin: 22px auto 0; max-width: 46ch; font-size: 15px; color: #c3c7d2; }
.closing-cta { justify-content: center; margin-top: 32px; }
.script { margin: 56px 0 0; padding-bottom: 72px; font-stretch: 125%; font-weight: 800; font-size: clamp(44px, 9vw, 120px); line-height: 1.15; letter-spacing: -0.03em; white-space: nowrap; color: transparent; -webkit-text-stroke: 1.5px rgba(255,255,255,0.28); user-select: none; }
.footer { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 16px; padding: 22px 24px; background: rgba(13,16,23,0.88); border-top: 1px solid var(--border); font-size: 12px; }
.footer-brand { display: inline-flex; align-items: center; gap: 10px; }
.footer-brand strong { font-weight: 600; font-size: 12px; }
.footer-nav { display: flex; gap: 24px; font-family: 'Archivo', system-ui, sans-serif; font-size: 10.5px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); }
.footer-nav a:hover { color: var(--text); }
.footer-copy { justify-self: end; font-family: 'Archivo', system-ui, sans-serif; font-size: 10.5px; color: var(--muted); }

.spin-cursor { position: fixed; left: 0; top: 0; z-index: 9999; pointer-events: none; opacity: 0; transition: opacity 0.15s; will-change: transform; }
.page.cursor-on, .page.cursor-on * { cursor: none !important; }
.page.cursor-on :is(input, textarea) { cursor: text !important; }

.nav { position: sticky; top: 0; z-index: 10; background: rgba(13,16,23,0.85); backdrop-filter: blur(10px); border-bottom: 1px solid var(--border); }
.nav-inner { max-width: 1200px; margin: 0 auto; height: 56px; padding: 0 24px; display: flex; align-items: center; justify-content: center; position: relative; }
.nav-links { display: flex; gap: 28px; font-size: 12px; color: var(--muted); }
.nav-links a:hover { color: var(--text); }
.btn-resume { position: absolute; right: 24px; }

.hero { position: relative; max-width: 1200px; margin: 0 auto; padding: 96px 24px 80px; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 48px; align-items: center; min-height: 640px; }
.hero-glow { position: absolute; left: 14%; top: 50%; width: 520px; height: 520px; transform: translateY(-50%); background: radial-gradient(circle, rgba(120,120,190,0.28), transparent 65%); filter: blur(30px); pointer-events: none; }
.hero-copy { position: relative; }
.status-pill { display: inline-flex; align-items: center; gap: 8px; background: var(--surface-2); border: 1px solid var(--border); border-radius: 999px; padding: 4px 12px; font-size: 10px; font-weight: 500; color: var(--accent); margin-bottom: 20px; }
.status-pill i { width: 6px; height: 6px; border-radius: 50%; background: var(--accent-strong); }
.hero h1 { font-size: clamp(38px, 6vw, 56px); font-weight: 700; font-stretch: 125%; letter-spacing: -0.03em; line-height: 1; }
.role { margin-top: 16px; font-size: 15px; font-weight: 500; }
.intro { margin-top: 16px; max-width: 46ch; font-size: 13.5px; color: var(--muted); }
.cta-row { display: flex; gap: 12px; margin-top: 28px; flex-wrap: wrap; }
.socials { display: flex; gap: 14px; margin-top: 36px; align-items: center; }
.socials li { opacity: 0; transform: translateY(14px); animation: social-in 0.55s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; animation-delay: calc(0.45s + var(--i, 0) * 0.09s); }
@keyframes social-in { to { opacity: 1; transform: none; } }
.socials a { position: relative; isolation: isolate; display: grid; place-items: center; width: 46px; height: 46px; border-radius: 14px; color: #e6e8ef; background: rgba(255,255,255,0.045); border: 1px solid rgba(255,255,255,0.09); backdrop-filter: blur(6px); transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.2s, border-color 0.2s, box-shadow 0.25s; }
.socials a::after { content: ""; position: absolute; inset: 0; z-index: -1; border-radius: inherit; background: var(--bg, #4f5bd5); opacity: 0; transition: opacity 0.25s; }
.socials a::before { content: attr(data-label); position: absolute; bottom: calc(100% + 10px); left: 50%; transform: translate(-50%, 4px); padding: 4px 9px; border-radius: 6px; background: #000; border: 1px solid rgba(255,255,255,0.07); color: #fff; font-size: 10.5px; font-weight: 600; letter-spacing: 0.03em; white-space: nowrap; pointer-events: none; opacity: 0; transition: opacity 0.2s, transform 0.2s; }
.socials a:hover, .socials a:focus-visible { color: #fff; border-color: transparent; transform: translateY(-5px) scale(1.07); box-shadow: 0 14px 26px -10px var(--brand, rgba(165,180,252,0.6)); }
.socials a:hover::after, .socials a:focus-visible::after { opacity: 1; }
.socials a:hover::before, .socials a:focus-visible::before { opacity: 1; transform: translate(-50%, 0); }
.socials a:active { transform: translateY(-1px) scale(0.95); }
@media (prefers-reduced-motion: reduce) {
  .socials li { opacity: 1; transform: none; animation: none; }
  .socials a:hover, .socials a:focus-visible { transform: none; }
}

.hero-photo { position: relative; width: 100%; display: flex; justify-content: center; padding-bottom: 20px; }
.photo-frame { position: relative; isolation: isolate; margin: 0; }
.photo-frame::before {
  content: "";
  position: absolute;
  inset: -18% -32%;
  z-index: -1;
  pointer-events: none;
  background: radial-gradient(closest-side, rgba(120,120,190,0.30), rgba(120,120,190,0.10) 55%, transparent 100%);
}
.photo-frame img, .photo-placeholder { display: block; width: 100%; max-width: 100%; height: auto; border-radius: 0; object-fit: contain; object-position: center center; border: none; box-shadow: none; background: transparent; outline: none; }
.photo-frame img {
  display: block;
  width: 100%;
  height: auto;
  background: transparent;
  -webkit-mask-image: linear-gradient(to bottom, #000 68%, transparent 100%);
  mask-image: linear-gradient(to bottom, #000 68%, transparent 100%);
  filter: none;
  padding: 0;
  margin: 0;
}
.photo-placeholder { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; background: radial-gradient(circle at 35% 30%, #2b3150, #151827); color: var(--accent); }
.photo-placeholder span { font-size: 72px; font-weight: 300; letter-spacing: -0.04em; line-height: 1; }
.photo-placeholder small { font-size: 11px; color: var(--muted); }
.photo-badge { position: absolute; right: 18px; bottom: 18px; display: inline-flex; align-items: center; gap: 8px; padding: 12px 20px; border-radius: 999px; background: linear-gradient(135deg, #2d5eff, #4b7bff); color: #fff; font-family: 'Archivo', system-ui, sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; box-shadow: 0 8px 18px rgba(45,94,255,0.4); }

.section { max-width: 1200px; margin: 0 auto; padding: 56px 24px; scroll-margin-top: 56px; }
.h2 { font-size: 26px; font-weight: 700; font-stretch: 125%; letter-spacing: -0.02em; }
.rule { display: block; width: 48px; height: 2px; background: var(--accent-strong); margin: 12px 0 28px; border-radius: 2px; }
.eyebrow { display: flex; align-items: center; gap: 8px; font-size: 10px; font-weight: 600; color: var(--accent-strong); margin-bottom: 8px; letter-spacing: 0.06em; text-transform: uppercase; }
.eyebrow i { width: 5px; height: 5px; border-radius: 50%; background: var(--accent-strong); }

.card { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; }

.about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; align-items: start; }
.about-text { display: grid; gap: 10px; font-size: 13px; color: #c9cdd8; max-width: 62ch; }
.chips { display: flex; gap: 12px; margin-top: 28px; flex-wrap: wrap; }
.chip { flex: 1 1 200px; background: var(--surface); border: 1px solid var(--border); border-radius: 8px; padding: 14px 14px; display: grid; gap: 4px; color: #cfd3e0; }
.chip strong { font-size: 12.5px; font-weight: 500; margin-top: 4px; }
.chip small { font-size: 9.5px; color: var(--muted); font-family: 'Archivo', system-ui, sans-serif; }
.philosophy { position: relative; overflow: hidden; margin-top: 44px; background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 28px; }
.philosophy h3 { font-size: 17px; font-weight: 500; margin-bottom: 18px; position: relative; }
.philo-icon { position: absolute; right: 22px; top: 16px; color: rgba(255,255,255,0.07); }
.philosophy blockquote { position: relative; margin: 0; padding-left: 14px; border-left: 2px solid var(--accent-strong); font-size: 12.5px; color: #c9cdd8; max-width: 44ch; }

.skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.skill { padding: 22px; min-height: 190px; }
.icon-box { display: inline-grid; place-items: center; width: 34px; height: 34px; border-radius: 8px; margin-bottom: 16px; }
.icon-box.violet { background: #2a2e45; color: var(--accent); }
.icon-box.indigo { background: #2b2c52; color: #b4b8ff; }
.icon-box.teal { background: #16343a; color: #5eead4; }
.skill h3 { font-size: 17px; font-weight: 500; }
.skill p { margin-top: 8px; font-size: 11.5px; color: var(--muted); }
.tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 18px; }
.tags li { background: var(--surface-2); border: 1px solid var(--border); border-radius: 4px; padding: 3px 8px; font-size: 9.5px; font-family: 'Archivo', system-ui, sans-serif; color: #c9cdd8; }

.projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.project { overflow: hidden; display: flex; flex-direction: column; }
.thumb { height: 170px; padding: 18px 22px 0; display: flex; align-items: flex-end; justify-content: center; }
.thumb-analytics { background: linear-gradient(160deg, #3a3f52, #232736); }
.thumb-shop { background: linear-gradient(160deg, #2f3346, #1c2030); }
.thumb-system { background: linear-gradient(160deg, #3a3a46, #242531); }
.thumb-brainbloom { padding: 0; background: #3158d8; overflow: hidden; }
.thumb-brainbloom img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: top center; }
.mock-screen { width: 100%; height: 86%; border-radius: 8px 8px 0 0; background: #0f1220; border: 1px solid rgba(255,255,255,0.08); padding: 12px; display: flex; flex-direction: column; justify-content: space-between; }
.mock-screen.light { background: #f3f4f8; }
.mock-bars { display: flex; align-items: flex-end; gap: 6px; height: 55%; }
.mock-bars span { flex: 1; background: linear-gradient(#818cf8, #4f46e5); border-radius: 2px 2px 0 0; }
.mock-line { width: 100%; height: 30%; }
.mock-nav { height: 8px; border-radius: 4px; background: #d5d8e3; }
.mock-shop-grid { display: grid; grid-template-columns: 2fr 1fr; grid-template-rows: 1fr 1fr; gap: 6px; height: 78%; }
.mock-shop-grid span { background: #dfe2ee; border-radius: 4px; }
.mock-shop-grid .hero-tile { grid-row: span 2; background: linear-gradient(135deg, #1f2937, #4b5563); }
.mock-tokens { display: grid; grid-template-columns: repeat(6, 1fr); gap: 6px; }
.mock-tokens span { aspect-ratio: 1; border-radius: 4px; }
.mock-btn-row { display: flex; gap: 8px; }
.mock-btn-row span { height: 14px; width: 44px; border-radius: 4px; background: #6366f1; }
.mock-btn-row span + span { background: #d5d8e3; }
.project-body { padding: 16px 18px 8px; flex: 1; }
.project-body h3 { font-size: 15px; font-weight: 500; }
.project-body p { margin-top: 8px; font-size: 10.5px; color: var(--muted); }
.project-foot { display: flex; justify-content: space-between; align-items: center; margin: 8px 18px 0; padding: 12px 0 14px; border-top: 1px solid var(--border); }
.project-foot a:first-child { display: inline-flex; align-items: center; gap: 6px; font-size: 10.5px; color: var(--accent); }
.icon-link { display: grid; place-items: center; width: 26px; height: 26px; border-radius: 6px; background: var(--surface-2); color: var(--muted); }
.icon-link:hover { color: var(--text); }
.center { display: flex; justify-content: center; margin-top: 28px; }

.contact-grid { display: grid; grid-template-columns: 1fr 1.05fr; gap: 40px; align-items: start; }
.contact-title { font-size: 20px; font-weight: 500; }
.contact-text { margin-top: 10px; font-size: 11.5px; color: var(--muted); max-width: 46ch; }
.info { display: flex; gap: 12px; align-items: center; margin-top: 12px; padding: 12px 14px; background: var(--surface); border: 1px solid var(--border); border-radius: 8px; color: #cfd3e0; }
.info:first-of-type { margin-top: 24px; }
.info small { display: block; font-size: 9px; color: var(--muted); }
.info span { font-size: 11.5px; }
.contact-card { padding: 22px; display: grid; gap: 14px; }
.field label { display: block; font-size: 10px; color: var(--muted); margin-bottom: 6px; }
.field input, .field textarea { width: 100%; background: #0f131c; border: 1px solid var(--border); border-radius: 8px; padding: 10px 12px; font: inherit; font-size: 12px; color: var(--text); resize: vertical; }
.field input::placeholder, .field textarea::placeholder { color: #5e6577; }
.field input:focus, .field textarea:focus { outline: none; border-color: var(--accent-strong); }
.form-note { min-height: 16px; font-size: 11px; color: var(--muted); }
.form-note.error { color: #fca5a5; }
.form-note.sent { color: #86efac; }

@media (max-width: 900px) {
  .hero { gap: 24px; padding-top: 72px; }
  .hero-glow { width: 380px; height: 380px; }
  .skill { padding: 16px; }
  .skill p { font-size: 11px; }
}
@media (max-width: 720px) {
  .hero { grid-template-columns: 1fr; padding-top: 56px; min-height: 0; }
  .hero-photo { order: -1; }
  .about-grid, .contact-grid { grid-template-columns: 1fr; }
  .philosophy { margin-top: 0; }
  .skills-grid, .projects-grid { grid-template-columns: 1fr; }
  .nav-inner { justify-content: flex-start; }
  .nav-links { gap: 16px; }
}
@media (max-width: 720px) {
  .footer { grid-template-columns: 1fr; justify-items: center; text-align: center; }
  .footer-copy { justify-self: center; }
}
@media (max-width: 480px) {
  .btn-resume { right: 12px; }
  .nav-links { gap: 12px; font-size: 11px; }
}
`;

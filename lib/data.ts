// =====================================================================
//  แก้ข้อมูลส่วนตัวทั้งหมดได้ที่ไฟล์นี้ไฟล์เดียว (รองรับ 2 ภาษา TH / EN)
//  Edit all personal content here. Bilingual (TH / EN).
// =====================================================================

export type Lang = "th" | "en";

// ---- ข้อมูลที่ใช้ร่วมกันทั้งสองภาษา (ไม่ต้องแปล) ----
export const profile = {
  name: "Tanakorn",
  fullName: "Tanakorn Niamchaona",
  nickname: "Jamebond",
  email: "tanakorn.niamchaona@gmail.com",
  phone: "+66 92 964 6940",
  phoneRaw: "+66929646940",
  // รูปภาพ (วางไฟล์ไว้ใน public/)
  photos: {
    headshot: "/headshot.jpg", // รูปหน้าตรง — ใช้เป็น avatar วงกลมใน Hero
    portrait: "/portrait.jpg", // รูปยืน — ใช้ในเซกชันเกี่ยวกับฉัน
  },
  socials: {
    github: "",
    linkedin: "",
    facebook: "",
  },
};

// ไฟล์ Resume — วางไฟล์ PDF ไว้ในโฟลเดอร์ public/ ตามชื่อนี้
export const resumes = {
  th: "/resume-th.pdf",
  en: "/resume-en.pdf",
  profile: "/profile-jamebond.pdf",
};

// สี + ลิงก์ของแต่ละโปรเจกต์ (ใช้ร่วมกัน เรียงลำดับตรงกับ projects ในแต่ละภาษา)
export const projectMeta = [
  { accent: "#37b6ff", link: "#" },
  { accent: "#6b8cff", link: "#" },
  { accent: "#22c9a9", link: "#" },
  { accent: "#f59e0b", link: "#" },
  { accent: "#a855f7", link: "#" },
  { accent: "#ef4444", link: "#" },
];

// ตำแหน่งงาน (แสดงเหมือนกันทั้งสองภาษา)
const ROLE = "Full-Stack Developer & Embedded / Firmware Engineer";

// หมวดทักษะ (ชื่อเทคโนโลยีเป็นสากล ใช้ร่วมกันได้)
const SKILL_GROUPS = [
  {
    group: "Frontend & Mobile",
    items: ["React.js", "Next.js", "React Native", "Electron", "TypeScript", "JavaScript"],
  },
  {
    group: "Backend & Database",
    items: ["Node.js", "REST API", "Fastify", "NestJS", "MySQL", "SQL Server", "MongoDB", "Docker"],
  },
  {
    group: "Embedded & Hardware",
    items: ["C / C++", "Firmware", "Circuit & PCB Design", "ESP32", "Arduino", "Raspberry Pi", "Jetson"],
  },
  {
    group: "IoT & Protocols",
    items: ["MQTT", "HTTP", "UART", "I2C", "SPI", "RS485 / RS232", "OTA Update"],
  },
];

// =====================================================================
//  พจนานุกรมเนื้อหา 2 ภาษา
// =====================================================================
type Content = {
  nav: { about: string; skills: string; experience: string; work: string; contact: string };
  hero: {
    badge: string;
    greeting: string;
    role: string;
    tagline: string;
    ctaWork: string;
    ctaResume: string;
    scroll: string;
    location: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    stats: { value: string; label: string }[];
    eduLabel: string;
  };
  education: { school: string; degree: string; detail: string };
  skills: { eyebrow: string; title: string; sub: string; groups: { group: string; items: string[] }[] };
  experience: {
    eyebrow: string;
    title: string;
    sub: string;
    jobs: { company: string; role: string; period: string; points: string[] }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    sub: string;
    viewDetail: string;
    items: { title: string; description: string; tags: string[] }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    sub: string;
    resumeTh: string;
    resumeEn: string;
    viewPortfolio: string;
    fullProfile: string;
  };
};

export const dict: Record<Lang, Content> = {
  // -------------------------------------------------- THAI
  th: {
    nav: { about: "เกี่ยวกับ", skills: "ทักษะ", experience: "ประสบการณ์", work: "ผลงาน", contact: "ติดต่อ" },
    hero: {
      badge: "เปิดรับงาน / ว่างสำหรับโปรเจกต์ใหม่",
      greeting: "สวัสดี, ผมคือ",
      role: ROLE,
      tagline:
        "ผมสร้างเว็บและแอปพลิเคชันแบบครบวงจร ตั้งแต่ Frontend, Backend ไปจนถึงฮาร์ดแวร์และระบบ IoT",
      ctaWork: "ดูผลงาน →",
      ctaResume: "ดาวน์โหลด Resume",
      scroll: "เลื่อนลง",
      location: "กรุงเทพฯ ประเทศไทย",
    },
    about: {
      eyebrow: "เกี่ยวกับฉัน",
      title: "Full-Stack Developer ที่สร้างได้ครบ ตั้งแต่เว็บ แอป จนถึงฮาร์ดแวร์",
      paragraphs: [
        "ผมเป็น Full-Stack Developer ที่สร้างเว็บและแอปพลิเคชันแบบครบวงจร ตั้งแต่ออกแบบ UI/UX บน Frontend ด้วย React, Next.js และ React Native ไปจนถึงวางระบบ Backend และฐานข้อมูลด้วย Node.js, REST API และ SQL/NoSQL โดยเข้าใจภาพรวมสถาปัตยกรรมของทั้งระบบ",
        "จุดแข็งที่ทำให้ผมต่างจากนักพัฒนาทั่วไป คือพื้นฐานสาย Embedded & IoT — ออกแบบวงจร เขียนเฟิร์มแวร์บน ESP32/Arduino และเชื่อมต่ออุปกรณ์จริงผ่าน MQTT และ RS485 ทำให้ผมสร้างผลิตภัณฑ์ได้ตั้งแต่ฮาร์ดแวร์จนถึงหน้าจอผู้ใช้ พร้อมเรียนรู้เทคโนโลยีใหม่และรับงานที่ท้าทายอยู่เสมอ",
      ],
      stats: [
        { value: "6+", label: "ปีประสบการณ์" },
        { value: "3", label: "บริษัทที่เคยร่วมงาน" },
        { value: "10+", label: "โปรเจกต์ End-to-End" },
      ],
      eduLabel: "การศึกษา",
    },
    education: {
      school: "Southeast Asia University (SAU)",
      degree: "วิศวกรรมศาสตรบัณฑิต สาขาวิศวกรรมคอมพิวเตอร์",
      detail: "GPA 2.59 · Senior Project: ระบบ IoT Monitoring สำหรับเครื่องทำความร้อนแบบหยอดเหรียญ",
    },
    skills: {
      eyebrow: "Tech Stack",
      title: "เครื่องมือและทักษะที่ใช้",
      sub: "เทคโนโลยีที่ผมใช้สร้างเว็บและแอป ตั้งแต่ Frontend, Backend ไปจนถึงฮาร์ดแวร์และ IoT",
      groups: SKILL_GROUPS,
    },
    experience: {
      eyebrow: "Experience",
      title: "ประสบการณ์การทำงาน",
      sub: "เส้นทางการทำงานด้าน Embedded, IoT และการพัฒนาซอฟต์แวร์",
      jobs: [
        {
          company: "Skysee AI Technology Co., Ltd.",
          role: "IT Programmer & Embedded Software",
          period: "2023 - ปัจจุบัน",
          points: [
            "ออกแบบและพัฒนาระบบ IoT แบบ End-to-End สำหรับเครื่องซักผ้า เครื่องอบผ้า และตู้แลกเหรียญเชิงพาณิชย์",
            "ออกแบบวงจรและ PCB, เขียนเฟิร์มแวร์ C/C++ บน Arduino / ESP32 (UART, I2C, SPI, RS485, MQTT, HTTP)",
            "วางสถาปัตยกรรม IoT & Cloud, ระบบ OTA update, device provisioning และ predictive maintenance",
            "พัฒนา Backend ด้วย Node.js — RESTful API, Microservices, SQL/NoSQL และ Message Queue",
          ],
        },
        {
          company: "YAP International Co., Ltd.",
          role: "IT Programmer",
          period: "2021 - 2023",
          points: [
            "พัฒนาแอปพลิเคชันมือถือแบบ Cross-platform ด้วย React Native เป็นงานหลัก",
            "พัฒนาระบบควบคุมสำหรับมอเตอร์ไซค์ไฟฟ้า (Electric Motorcycle Control System)",
          ],
        },
        {
          company: "Tanatat Solution",
          role: "IT Programmer",
          period: "2019 - 2021",
          points: [
            "พัฒนาแอปมือถือสำหรับระบบ Kiosk B2B ในรูปแบบ Outsource ด้วย React Native",
            "วิเคราะห์ความต้องการลูกค้าเพื่อส่งมอบระบบที่เสถียรและใช้งานลื่นไหล",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "Portfolio",
      title: "ผลงานที่เลือกมา",
      sub: "ตัวอย่างโปรเจกต์ที่ผมมีส่วนร่วมในการออกแบบและพัฒนา",
      viewDetail: "ดูรายละเอียด →",
      items: [
        {
          title: "ระบบ IoT เครื่องซักผ้าเชิงพาณิชย์",
          description:
            "ระบบ IoT แบบ End-to-End สำหรับเครื่องซักผ้า เครื่องอบผ้า และตู้แลกเหรียญ ครอบคลุมตั้งแต่เฟิร์มแวร์บนบอร์ด, MQTT, Cloud จนถึงหน้าจอแอดมิน",
          tags: ["ESP32", "MQTT", "Node.js", "React"],
        },
        {
          title: "Full-Stack POS & Store Management",
          description:
            "ระบบจัดการร้านค้าครบวงจร ระบบขายหน้าร้าน จัดการสต็อกแบบไดนามิก และเชื่อมต่อเครื่องพิมพ์ใบเสร็จความร้อนโดยตรง",
          tags: ["Electron", "React.js", "POS"],
        },
        {
          title: "Smart Agriculture IoT App",
          description:
            "แอปมือถือควบคุมและมอนิเตอร์ระบบ IoT สำหรับเกษตรอัจฉริยะ แสดงข้อมูลเซนเซอร์เรียลไทม์และสั่งงานฮาร์ดแวร์ระยะไกล",
          tags: ["React Native", "IoT", "MQTT"],
        },
        {
          title: "ระบบควบคุมมอเตอร์ไซค์ไฟฟ้า",
          description:
            "พัฒนาระบบควบคุมสำหรับมอเตอร์ไซค์ไฟฟ้า เชื่อมต่อระหว่างแอปมือถือกับฮาร์ดแวร์ควบคุมแบบเรียลไทม์",
          tags: ["React Native", "Embedded", "BLE"],
        },
        {
          title: "B2B Kiosk Mobile Solutions",
          description:
            "แอปมือถือสำหรับระบบ Kiosk B2B แบบ Cross-platform ที่เสถียรและปรับตามความต้องการของลูกค้าแต่ละราย",
          tags: ["React Native", "B2B", "Cross-platform"],
        },
        {
          title: "IoT Monitoring เครื่องหยอดเหรียญ",
          description:
            "Senior Project — ระบบมอนิเตอร์ IoT สำหรับเครื่องทำความร้อนแบบหยอดเหรียญ เก็บและแสดงผลสถานะการทำงานแบบเรียลไทม์",
          tags: ["IoT", "Embedded", "Monitoring"],
        },
      ],
    },
    contact: {
      eyebrow: "พร้อมร่วมงาน",
      title: "ดาวน์โหลดเรซูเม่ หรือดูผลงานของผม",
      sub: "เลือกดาวน์โหลดเรซูเม่ภาษาไทยหรือภาษาอังกฤษ และดูตัวอย่างผลงานเพิ่มเติมได้เลย",
      resumeTh: "Resume (ไทย)",
      resumeEn: "Resume (English)",
      viewPortfolio: "ดู Portfolio",
      fullProfile: "📄 ดูโปรไฟล์ฉบับเต็ม (PDF)",
    },
  },

  // -------------------------------------------------- ENGLISH
  en: {
    nav: { about: "About", skills: "Skills", experience: "Experience", work: "Work", contact: "Contact" },
    hero: {
      badge: "Open to work / Available for new projects",
      greeting: "Hi, I'm",
      role: ROLE,
      tagline:
        "I build complete web and mobile applications — from frontend and backend all the way to hardware and IoT.",
      ctaWork: "View Work →",
      ctaResume: "Download Resume",
      scroll: "Scroll",
      location: "Bangkok, Thailand",
    },
    about: {
      eyebrow: "About Me",
      title: "A full-stack developer who builds it all — from web and apps to hardware",
      paragraphs: [
        "I'm a full-stack developer who builds complete web and mobile applications — from crafting the UI/UX on the frontend with React, Next.js, and React Native, to designing the backend and databases with Node.js, REST APIs, and SQL/NoSQL — with a solid grasp of the whole system architecture.",
        "What sets me apart is a strong embedded & IoT foundation: circuit design, firmware on ESP32/Arduino, and connecting real devices via MQTT and RS485. That means I can build products end to end — from the hardware to the user's screen — and I'm always ready to learn new technologies and take on challenging projects.",
      ],
      stats: [
        { value: "6+", label: "Years of experience" },
        { value: "3", label: "Companies" },
        { value: "10+", label: "End-to-end projects" },
      ],
      eduLabel: "Education",
    },
    education: {
      school: "Southeast Asia University (SAU)",
      degree: "Bachelor of Engineering in Computer Engineering",
      detail: "GPA 2.59 · Senior Project: IoT Monitoring System for Coin-Operated Heating Machines",
    },
    skills: {
      eyebrow: "Tech Stack",
      title: "Tools & Skills",
      sub: "The technologies I use to build web and mobile products — from frontend and backend to hardware and IoT.",
      groups: SKILL_GROUPS,
    },
    experience: {
      eyebrow: "Experience",
      title: "Work Experience",
      sub: "My journey across embedded, IoT, and software development.",
      jobs: [
        {
          company: "Skysee AI Technology Co., Ltd.",
          role: "IT Programmer & Embedded Software",
          period: "2023 - Present",
          points: [
            "Designed and developed end-to-end IoT solutions for commercial washers, dryers, and coin-exchange machines.",
            "Circuit & PCB design and C/C++ firmware on Arduino / ESP32 (UART, I2C, SPI, RS485, MQTT, HTTP).",
            "IoT & cloud architecture, OTA updates, device provisioning, and predictive maintenance.",
            "Backend development with Node.js — RESTful APIs, microservices, SQL/NoSQL, and message queues.",
          ],
        },
        {
          company: "YAP International Co., Ltd.",
          role: "IT Programmer",
          period: "2021 - 2023",
          points: [
            "Cross-platform mobile app development with React Native as the core focus.",
            "Built control systems for electric motorcycles.",
          ],
        },
        {
          company: "Tanatat Solution",
          role: "IT Programmer",
          period: "2019 - 2021",
          points: [
            "Developed cross-platform mobile apps for B2B kiosk systems as an outsourced provider.",
            "Analyzed client requirements to deliver stable, seamless solutions.",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "Portfolio",
      title: "Selected Work",
      sub: "A selection of projects I designed and built.",
      viewDetail: "View details →",
      items: [
        {
          title: "Commercial Laundry IoT System",
          description:
            "An end-to-end IoT platform for commercial washers, dryers, and coin-exchange machines — from on-board firmware and MQTT to the cloud and admin dashboard.",
          tags: ["ESP32", "MQTT", "Node.js", "React"],
        },
        {
          title: "Full-Stack POS & Store Management",
          description:
            "A complete retail management system: point-of-sale, dynamic inventory control, and direct thermal-printer integration for automated receipts.",
          tags: ["Electron", "React.js", "POS"],
        },
        {
          title: "Smart Agriculture IoT App",
          description:
            "A mobile app to control and monitor IoT systems for smart farming, with real-time sensor data and remote hardware actuation.",
          tags: ["React Native", "IoT", "MQTT"],
        },
        {
          title: "Electric Motorcycle Control System",
          description:
            "A control system for electric motorcycles, bridging the mobile app and control hardware in real time.",
          tags: ["React Native", "Embedded", "BLE"],
        },
        {
          title: "B2B Kiosk Mobile Solutions",
          description:
            "Cross-platform mobile apps for B2B kiosk systems — stable and tailored to each client's requirements.",
          tags: ["React Native", "B2B", "Cross-platform"],
        },
        {
          title: "IoT Monitoring for Coin-Operated Machines",
          description:
            "Senior project — an IoT monitoring system for coin-operated heating machines, collecting and visualizing status in real time.",
          tags: ["IoT", "Embedded", "Monitoring"],
        },
      ],
    },
    contact: {
      eyebrow: "Let's work together",
      title: "Download my resume or explore my work",
      sub: "Grab my resume in Thai or English, and browse more of my work below.",
      resumeTh: "Resume (Thai)",
      resumeEn: "Resume (English)",
      viewPortfolio: "View Portfolio",
      fullProfile: "📄 View full profile (PDF)",
    },
  },
};

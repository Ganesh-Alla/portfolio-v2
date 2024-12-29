import { type ProjectListProps } from "@/components/ProjectsList";


export const PROJECTS_CARD: ProjectListProps[] =  [
  {
    name: "Portfolio v1",
    imageUrl: '/projects/Portfoliov1.png',
    description: "A portfolio website showcasing my skills, projects, and achievements in web and mobile app development.",
    techStack: ["Next.js", "JavaScript", "Tailwind CSS","Framer Motion", "MongoDB"],
    sourceCodeHref: "https://github.com/Ganesh-Alla/next-portfolio",
    liveWebsiteHref: "https://ganeshalla-v1.vercel.app/",
    date: "Dec 2024"
  },
  {
    name: "College Website Attendance Scraper",
    imageUrl: "/projects/Attendance.jpg",
    description: "Developed a dashboard to fetch and display attendance data by scraping the college website using Puppeteer, integrated with Next.js and TypeScript.",
    techStack: ["Next.js", "TypeScript", "Puppeteer", "Node.js"],
    sourceCodeHref: "https://github.com/Ganesh-Alla/attendance-webscrape",
    liveWebsiteHref: "https://srkratt.vercel.app/",
    date: "Nov 2024"
  },
  {
    name: "Liveblocks Text Editor",
    imageUrl: "/projects/LiveBlocks.png",
    description: "A collaborative text editor built with Liveblocks and React, supporting real-time editing and synchronization, designed for local usage.",
    techStack: ["Next.js", "BlockNote", "Liveblocks", "TypeScript"],
    sourceCodeHref: "https://github.com/Ganesh-Alla/LiveBlocks",
    liveWebsiteHref: "https://live-blocks-delta.vercel.app/",
    date: "Oct 2024"
  },

  {
    name: "CryptoGuard - Secure Text Encryption App",
    imageUrl: "/projects/Cryptoguard.jpg",
    description: "A mobile application designed to securely encrypt text using a variety of cryptographic algorithms, including Caesar Cipher, DES, AES, RSA, SHA, MD5, and Playfair.",
    techStack: ["React Native", "Expo", "Crypto.js", "Math.js", "NativeWind"],
    sourceCodeHref: "https://github.com/Ganesh-Alla/CRYPTOGUARD",
    date: "Aug 2024"
  },
  {
    name: "Hatchery Order Tracking System",
    imageUrl: "/projects/Hatcheries.png",
    description: "A web application designed to record, track, filter, and print orders for hatcheries.",
    techStack: ["Next.js", "Tailwind CSS", "Ant Design", "PostgreSQL", "Supabase", "jsPDF"],
    sourceCodeHref: "https://github.com/Ganesh-Alla/SriManjunathaHatcheries/",
    liveWebsiteHref: "https://tech4aqua123.vercel.app/",
    date: "Jul 2024"
  },
  {
    name: "Next.js NextAuth Authentication",
    imageUrl: "/projects/NextAuth.png",
    description: "A Next.js application demonstrating advanced use of NextAuth for authentication and Google API integration to fetch and display authenticated users' Gmail data.",
    techStack: ["Next.js", "NextAuth", "Google APIs"],
    sourceCodeHref: "https://github.com/Ganesh-Alla/google-api",
    liveWebsiteHref: "https://gmail-phi.vercel.app/",
    date: "Jun 2024"
  },
  {
    name: "Faculty Load Allocation",
    imageUrl: "/projects/Faculty.png",
    description: "An application to streamline the allocation of examination invigilation duties, reducing manual allocation time.",
    techStack: ["Next.js, Redux, TailwindCSS, Ant-Design, MongoDB"],
    sourceCodeHref: "https://github.com/Ganesh-Alla/Faculty-Load",
    liveWebsiteHref: "https://faculty-load.vercel.app/",
    date: "May 2024"
  },
  
  {
    name: "Code Combat Exam Portal",
    imageUrl: "/projects/Quizapp.jpg",
    description: "A scalable quiz platform built for the NIPUNA event, handling over 200 concurrent users and 300+ registrations.",
    techStack: ["Next.js", "TailwindCSS", "Ant Design", "MongoDB",],
    sourceCodeHref: "https://github.com/Ganesh-Alla/QuizApp",
    liveWebsiteHref: "https://codecombat.vercel.app/",
    date: "Mar 2024"
  },
  {
    "name": "Netflix UI Clone",
    "imageUrl": "/projects/Netflix.png",
    "description": "A responsive front-end clone of the Netflix interface.",
    "techStack": ["HTML", "CSS", "JavaScript"],
    "sourceCodeHref": "https://github.com/Ganesh-Alla/Bharat-Intern/tree/main/Netflix",
    "liveWebsiteHref": "https://ganesh-alla.github.io/Bharat-Intern/Netflix/",
    "date": "Sep 2023"
  },
  {
    "name": "Temperature Converter",
    "imageUrl": "/projects/Temperature.png",
    "description": "A simple, functional web app that converts temperatures between Celsius, Fahrenheit, and Kelvin.",
    "techStack": ["HTML", "CSS", "JavaScript"],
    "sourceCodeHref": "https://github.com/Ganesh-Alla/Bharat-Intern/tree/main/Temperature",
    "liveWebsiteHref": "https://ganesh-alla.github.io/Bharat-Intern/Temperature/",
    "date": "Sep 2023"
  },  
  {
    "name": "Virat Kohli Tribute Page",
    "imageUrl": "/projects/ViratKohli.png",
    "description": "A tribute page highlighting Virat Kohli's achievements and milestones, with an elegant design and responsive layout.",
    "techStack": ["HTML", "CSS", "JavaScript"],
    "sourceCodeHref": "https://github.com/Ganesh-Alla/TributePage",
    "liveWebsiteHref": "https://ganesh-alla.github.io/TributePage/",
    "date": "Aug 2023"
  },
  {
    "name": "SRKRCSE Department Website",
    "imageUrl": "/projects/Srkrcse.png",
    "description": "A departmental website for SRKR CSE, for accessing Lecture Notes, Contact details, Events, News , Timetables, Syllabus and so on.",
    "techStack": ["HTML", "CSS", "JavaScript", "Bootstrap"],
    "sourceCodeHref": "https://github.com/Ganesh-Alla/SRKRCSE",
    "liveWebsiteHref": "https://srkrcse.com/",
    "date": "Aug 2023"
  },
  {
    "name": "Nothing Phone Landing Page",
    "imageUrl": "/projects/Nothing.png",
    "description": "A sleek and minimalistic landing page for the Nothing Phone, featuring responsive design and clean animations.",
    "techStack": ["HTML", "CSS", "JavaScript"],
    "sourceCodeHref": "https://github.com/Ganesh-Alla/LandingPage",
    "liveWebsiteHref": "https://ganesh-alla.github.io/LandingPage/",
    "date": "Aug 2023"
  },
  {
    "name": "Flight Booking System",
    "imageUrl": "/projects/Flight.png",
    "description": "A full-stack flight booking system with user authentication using MongoDB, middleware sessions, and features like setting departure and return journeys. Booked tickets are stored in the database and marked invalid after expiration.",
    "techStack": ["HTML", "CSS", "JavaScript", "Express", "Node.js", "MongoDB"],
    "sourceCodeHref": "https://github.com/Ganesh-Alla/FlightBookingSystem",
    "liveWebsiteHref": "https://ganesh-alla.github.io/FlightBookingSystem/public/login.html",
    "date": "Aug 2023"
  },  
  {
    "name": "ChopNow E-commerce Website",
    "imageUrl": "/projects/ChopNow.png",
    "description": "An e-commerce website for selling beverages, fruits, vegetables, and groceries, designed with a responsive layout and user-friendly navigation.",
    "techStack": ["HTML", "CSS", "JavaScript"],
    "sourceCodeHref": "https://github.com/Ganesh-Alla/chop-now",
    "liveWebsiteHref": "https://ganesh-alla.github.io/chop-now/",
    "date": "Jul 2023"
  }
  
  
  
  
  
  
  
]
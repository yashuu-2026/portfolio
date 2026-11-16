export interface SkillItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  highlights: string[];
  accentColor: string; // Pastel accent hex
  bgColor: string;     // Soft background hex/rgba
  badgeColor: string;
  borderColor: string;
  iconName: 'Python' | 'C' | 'Cpp' | 'Java';
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveDemoUrl: string;
  gradient: string;
  iconAccent: string;
  isPlaceholder: boolean;
  placeholderHint: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  gradeOrScore?: string;
  highlights: string[];
  isCurrent?: boolean;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Yashaswini V N",
    shortName: "Yashaswini",
    initials: "YV",
    role: "Student | Aspiring Software Developer",
    experienceLevel: "Fresher",
    tagline: "Passionate about programming, creativity, technology, and turning ideas into reality.",
    introduction: "I am Yashaswini V N, a passionate student and aspiring software developer. I enjoy learning new technologies, exploring programming, solving problems, and creating meaningful digital experiences.",
    longBio: [
      "I am Yashaswini V N, a passionate student and aspiring software developer. I enjoy learning new technologies, exploring programming, solving problems, and creating meaningful digital experiences.",
      "My journey in computer science began with curiosity about how software powers everyday lives. Starting with foundational languages like C and C++, I developed a deep appreciation for algorithmic efficiency, memory fundamentals, and object-oriented paradigms.",
      "As I expanded into Python and Java, I discovered the joy of crafting modular, readable, and functional solutions. Whether working through data structure challenges or experimenting with creative side projects, I approach every challenge with enthusiasm and dedication.",
      "I am currently looking for opportunities where I can contribute fresh perspectives, learn from experienced mentors, and build software that makes a genuine positive impact."
    ],
    email: "yashuyashu2620@gmail.com",
    github: "https://github.com/yashuu-2026",
    linkedin: "https://linkedin.com/in/yashaswini-vn",
    location: "Karnataka, India",
    statusText: "Open to Internships & Entry-Level Developer Roles",
  },

  skills: [
    {
      id: "python",
      name: "Python",
      subtitle: "Dynamic & Expressive Programming",
      description: "Appreciated for its clean, readable syntax and versatility. Used for algorithmic problem-solving, data manipulation, automation scripts, and logical building blocks.",
      highlights: ["Clean Syntax & Readability", "Data Structures & Algorithms", "Automation & Scripting", "Rapid Prototyping"],
      accentColor: "#B69CFF", // Lavender
      bgColor: "rgba(182, 156, 255, 0.12)",
      badgeColor: "bg-[#B69CFF]/20 text-[#29243A]",
      borderColor: "border-[#B69CFF]/40",
      iconName: "Python"
    },
    {
      id: "c-lang",
      name: "C",
      subtitle: "System Foundations & Low-Level Logic",
      description: "The foundational language that forged my understanding of computer architecture, memory allocation, pointers, and procedural logic execution.",
      highlights: ["Pointers & Memory Management", "Data Structures from Scratch", "Algorithmic Precision", "Foundational Computer Science"],
      accentColor: "#F5B8D2", // Soft Pink
      bgColor: "rgba(245, 184, 210, 0.14)",
      badgeColor: "bg-[#F5B8D2]/25 text-[#29243A]",
      borderColor: "border-[#F5B8D2]/50",
      iconName: "C"
    },
    {
      id: "cpp-lang",
      name: "C++",
      subtitle: "Object-Oriented & High-Performance Computing",
      description: "Combines procedural speed with object-oriented programming. Skilled in Standard Template Library (STL), modular code structuring, and complex problem breakdown.",
      highlights: ["Object-Oriented Programming (OOP)", "Standard Template Library (STL)", "Algorithm Optimization", "Inheritance & Polymorphism"],
      accentColor: "#B8E5E1", // Mint Green
      bgColor: "rgba(184, 229, 225, 0.18)",
      badgeColor: "bg-[#B8E5E1]/30 text-[#29243A]",
      borderColor: "border-[#B8E5E1]/60",
      iconName: "Cpp"
    },
    {
      id: "java-lang",
      name: "Java",
      subtitle: "Robust, Platform-Independent Software",
      description: "Strengthened my understanding of strong typing, class hierarchies, exception handling, encapsulation, and modular enterprise software design patterns.",
      highlights: ["Strict OOP Architecture", "Collections Framework", "Exception Handling & Robustness", "Modular Code Organization"],
      accentColor: "#FFF0C9", // Cream
      bgColor: "rgba(255, 240, 201, 0.35)",
      badgeColor: "bg-[#E6D49F]/30 text-[#29243A]",
      borderColor: "border-[#E6D49F]/60",
      iconName: "Java"
    }
  ] as SkillItem[],

  additionalCompetencies: [
    "Object-Oriented Programming (OOP)",
    "Data Structures & Algorithms (DSA)",
    "Problem Solving & Logic Design",
    "Git & GitHub Version Control",
    "Clean Code & Documentation",
    "Debugging & Code Refactoring"
  ],

  aboutHighlights: [
    {
      title: "Problem Solver",
      description: "Enthusiastic about breaking down intricate challenges into step-by-step logical solutions.",
      accent: "#B69CFF"
    },
    {
      title: "Continuous Learner",
      description: "Consistently exploring modern tech stacks, libraries, and industry best practices.",
      accent: "#F5B8D2"
    },
    {
      title: "Strong Fundamentals",
      description: "Grounded in core CS concepts across C, C++, Java, and Python.",
      accent: "#B8E5E1"
    },
    {
      title: "Creative Builder",
      description: "Driven to transform conceptual programming ideas into pleasant, usable digital experiences.",
      accent: "#FFF0C9"
    }
  ],

  projects: [
    {
      id: "project-1",
      title: "Algorithm & Data Structure Visualizer",
      subtitle: "[Editable Placeholder #1]",
      description: "An interactive educational application demonstrating sorting, graph traversals, and search algorithms step-by-step with intuitive animations and performance metrics.",
      technologies: ["Python", "Algorithms", "GUI / Web", "Data Structures"],
      githubUrl: "https://github.com/yashuu-2026/algorithm-visualizer-placeholder",
      liveDemoUrl: "https://yashaswini-demo-preview.example.com/project-1",
      gradient: "from-[#B69CFF]/30 via-[#F5B8D2]/20 to-[#FFF0C9]/30",
      iconAccent: "#B69CFF",
      isPlaceholder: true,
      placeholderHint: "Easily replace this placeholder with your actual project details in src/data/portfolioData.ts"
    },
    {
      id: "project-2",
      title: "Student Academic & Task Companion",
      subtitle: "[Editable Placeholder #2]",
      description: "A desktop or web productivity suite built to help students manage course schedules, track assignment deadlines, calculate grade milestones, and organize study notes.",
      technologies: ["Java", "OOP Design", "Collections", "File I/O"],
      githubUrl: "https://github.com/yashuu-2026/student-companion-placeholder",
      liveDemoUrl: "https://yashaswini-demo-preview.example.com/project-2",
      gradient: "from-[#B8E5E1]/35 via-[#FFF0C9]/30 to-[#F5B8D2]/25",
      iconAccent: "#B8E5E1",
      isPlaceholder: true,
      placeholderHint: "Easily replace this placeholder with your actual project details in src/data/portfolioData.ts"
    },
    {
      id: "project-3",
      title: "High-Performance Data Processing CLI",
      subtitle: "[Editable Placeholder #3]",
      description: "A fast command-line utility built for text file parsing, dataset filtering, and statistical analysis with optimal time complexity and robust memory management.",
      technologies: ["C++", "STL", "Memory Management", "CLI"],
      githubUrl: "https://github.com/yashuu-2026/data-processor-placeholder",
      liveDemoUrl: "https://yashaswini-demo-preview.example.com/project-3",
      gradient: "from-[#F5B8D2]/30 via-[#B69CFF]/20 to-[#B8E5E1]/30",
      iconAccent: "#F5B8D2",
      isPlaceholder: true,
      placeholderHint: "Easily replace this placeholder with your actual project details in src/data/portfolioData.ts"
    }
  ] as ProjectItem[],

  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Engineering / Technology (B.E. / B.Tech)",
      field: "Computer Science and Engineering",
      institution: "[Your College / University Name]",
      location: "[City, State, India]",
      period: "2022 - 2026 (Expected)",
      gradeOrScore: "[CGPA / Percentage Placeholder - e.g., 8.5+ / 10]",
      highlights: [
        "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Computer Networks, Operating Systems",
        "Active member of Technical & Coding Student Communities",
        "Participated in collegiate coding contests and algorithmic challenges"
      ],
      isCurrent: true
    },
    {
      id: "edu-2",
      degree: "Pre-University Course / Higher Secondary (12th)",
      field: "Science Stream (Physics, Chemistry, Mathematics, Computer Science)",
      institution: "[Your Junior College / Pre-University Institution]",
      location: "[City, State, India]",
      period: "2020 - 2022",
      gradeOrScore: "[Percentage Placeholder - e.g., First Class with Distinction]",
      highlights: [
        "Focused study in Mathematics and Computer Foundations",
        "Introduced to structural programming and analytical problem solving",
        "Maintained strong academic standing across foundational sciences"
      ],
      isCurrent: false
    },
    {
      id: "edu-3",
      degree: "Secondary School Leaving Certificate (10th)",
      field: "General Academic Curriculum",
      institution: "[Your High School Name]",
      location: "[City, State, India]",
      period: "Completed 2020",
      gradeOrScore: "[Percentage / Grade Placeholder]",
      highlights: [
        "Excellence in Mathematics and Science subjects",
        "Active participation in science exhibitions, quiz competitions, and cultural events"
      ],
      isCurrent: false
    }
  ] as EducationItem[],

  navLinks: [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "education", label: "Education", href: "#education" },
    { id: "contact", label: "Contact", href: "#contact" },
  ]
};

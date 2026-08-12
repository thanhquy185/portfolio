import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code,
  Briefcase,
} from "lucide-react";

interface SkillItem {
  name: string;
  icon: string;
}

interface SkillCategory {
  [key: string]: SkillItem[];
}

export default function CVSidebar() {
  const skills: SkillCategory = {
    "Ngôn Ngữ": [
      {
        name: "C",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      },
      {
        name: "C++",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "C#",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      },
    ],
    Frontend: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Vue",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      },
      {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "Tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
    Backend: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "NestJS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
      },
      {
        name: "Spring Boot",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
    ],
    Database: [
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
    ],
    Tools: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "Postman",
        icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      },
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
    ],
  };

  return (
    <div className="p-8 md:p-10">
      {/* Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center mb-8"
      >
        <img
          src="/images/others/avatar.jpg"
          alt="Trần Thanh Quy"
          className="w-40 h-40 rounded-full border-4 border-blue-500 object-cover shadow-lg"
        />
      </motion.div>

      {/* Name and Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold text-white mb-2">Trần Thanh Quy</h1>
        <div className="h-1 w-12 bg-blue-500 mx-auto mb-4"></div>
        <p className="text-blue-300 font-semibold text-lg">Sinh Viên CNTT</p>
        <p className="text-gray-400 text-sm">Fullstack Developer</p>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8 space-y-3 text-sm"
      >
        <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition">
          <Phone className="w-5 h-5 flex-shrink-0 text-blue-500" />
          <span>+84 xxx xxx xxx</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition">
          <Mail className="w-5 h-5 flex-shrink-0 text-blue-500" />
          <span className="truncate">thanhquy@email.com</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition">
          <MapPin className="w-5 h-5 flex-shrink-0 text-blue-500" />
          <span>TP. Hồ Chí Minh, VN</span>
        </div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-8 flex space-x-4 justify-center"
      >
        <a
          href="#"
          className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition text-white"
          title="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="#"
          className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition text-white"
          title="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </motion.div>

      {/* Academic Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-8 pb-8 border-b border-gray-700"
      >
        <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
          <Briefcase className="w-5 h-5" />
          <span>Học Tập</span>
        </h3>
        <div className="text-sm space-y-2">
          <p className="font-semibold text-blue-300">CNTT - Đại Học Sài Gòn</p>
          <p className="text-gray-400">GPA: 3.65 / 4.00</p>
          <p className="text-gray-400">8.79 / 10.00</p>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
          <Code className="w-5 h-5" />
          <span>Kỹ Năng</span>
        </h3>
        <div className="space-y-4">
          {Object.entries(skills).map((category, idx) => (
            <div key={idx}>
              <p className="text-sm font-semibold text-blue-300 mb-2">
                {category[0]}
              </p>
              <div className="grid grid-cols-3 gap-3">
                {category[1].map((skill, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition group cursor-pointer"
                    title={skill.name}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-6 h-6 object-contain mb-1 group-hover:scale-110 transition"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3C/svg%3E";
                      }}
                    />
                    <span className="text-xs text-gray-300 text-center line-clamp-1">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

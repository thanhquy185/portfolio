import { motion } from "framer-motion";
import { Code } from "lucide-react";

interface SkillItem {
  name: string;
  icon: string;
}

interface SkillCategory {
  [key: string]: SkillItem[];
}

const skills: SkillCategory = {
  "Ngôn Ngữ": [
    {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "C#",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
  ],
  Frontend: [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
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
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "SCSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Tailwind",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
  ],
  Backend: [
    {
      name: "Spring Boot",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    },
    {
      name: ".NET",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    },
  ],
  Database: [
    {
      name: "SQL Server",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
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
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
  ],
};

const SkillsComponent: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
        <Code className="w-5 h-5" />
        <span>Công nghệ</span>
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
  );
};

export default SkillsComponent;

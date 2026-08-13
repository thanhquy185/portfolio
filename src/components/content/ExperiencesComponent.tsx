import TitleComponent from "./TitleComponent";
import { motion } from "framer-motion";

interface ExperiencesComponentProps {
  itemVariants: {
    hidden: {
      opacity: number;
      y: number;
    };
    visible: {
      opacity: number;
      y: number;
    };
  };
}

interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
  responsibilities: string[];
}

const experiences: Experience[] = [
  //   {
  //     company: "Tên công ty",
  //     position: "Backend Developer",
  //     duration: "07/2025 - Hiện tại",
  //     description:
  //       "Tham gia phát triển và duy trì các chức năng backend cho hệ thống.",
  //     responsibilities: [
  //       "Xây dựng và phát triển REST API",
  //       "Xử lý các chức năng và nghiệp vụ của hệ thống",
  //       "Thiết kế và làm việc với cơ sở dữ liệu",
  //       "Phối hợp với các thành viên frontend để tích hợp API",
  //     ],
  //   },
];

const ExperiencesComponent: React.FC<ExperiencesComponentProps> = ({
  itemVariants,
}) => {
  return (
    <motion.section variants={itemVariants}>
      <TitleComponent title="Kinh nghiệm đi làm" />
      <div className="border-t border-gray-200">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
            className="py-7 border-b border-gray-200"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {experience.position}
                </h3>

                <p className="text-blue-600 font-medium mt-1">
                  {experience.company}
                </p>
              </div>

              <span className="text-sm text-gray-500 whitespace-nowrap">
                {experience.duration}
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed mt-4">
              {experience.description}
            </p>

            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {experience.responsibilities.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ExperiencesComponent;

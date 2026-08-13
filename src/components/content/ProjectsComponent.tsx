import TitleComponent from "./TitleComponent";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

type ProjectsComponentProps = {
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
};

interface Project {
  title: string;
  role: string;
  shortDescription: string;
  technologies: string[];
  features: string[];
  duration?: string;
  teamMembers?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "VINAEATERY - Hệ thống quản lý nhà hàng thông minh",
    role: "Fullstack",
    shortDescription:
      "Hệ thống quản lý nhà hàng thông minh với React, Spring Boot và MySQL",
    technologies: [
      "React",
      "TypeScript",
      "Ant Design",
      "Tailwind CSS",
      "SCSS",
      "Java",
      "Spring Boot",
      "Hibernate",
      "JWT",
      "Flyway",
      "Redis",
      "MySQL",
      "MoMo",
      "ZaloPay",
      "Docker",
      "Nginx",
    ],
    liveUrl: "...",
    githubUrl: "https://github.com/thanhquy185/vinaeatery",
    duration: "Tháng 07, 2025 - Hiện tại",
    teamMembers: ["Trần Thanh Quy"],
    features: [
      "Quản lý nhiều nhà hàng trong cùng một hệ thống",
      "Quản lý tầng, loại bàn và bàn ăn",
      "Quản lý món ăn, danh mục món ăn và thực đơn",
      "Quản lý công thức chế biến, nguyên liệu và nhà cung cấp",
      "Quản lý phiếu nhập kho",
      "Quản lý nhân viên, chức vụ và quyền hạn",
      "Khách hàng đặt bàn trước khi đến nhà hàng",
      "Khách hàng xem thực đơn và lựa chọn Buffet hoặc gọi món tự do",
      "Khách hàng gọi món trực tiếp tại bàn",
      "Theo dõi trạng thái gọi món và quá trình phục vụ",
      "Thanh toán tại quầy POS",
      "Thanh toán tiền mặt, QR, MoMo và ZaloPay",
      "Đăng ký bằng tài khoản thông thường, Google hoặc Facebook",
      "Đánh giá chất lượng món ăn và dịch vụ",
      "Theo dõi và thống kê dữ liệu hoạt động nhà hàng",
    ],
  },
];

const ProjectsComponent: React.FC<ProjectsComponentProps> = ({
  itemVariants,
}) => {
  return (
    <motion.section variants={itemVariants}>
      <TitleComponent title="Dự án nổi bật" />
      <div className="space-y-6">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="pb-6 border-b border-gray-200 last:border-b-0 cursor-pointer group hover:bg-blue-50 p-5 -mx-5 rounded-lg transition duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition">
                  {project.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                  {project.role && (
                    <span className="text-sm text-gray-600">
                      {project.role}
                    </span>
                  )}
                  {project.duration && (
                    <span className="text-xs text-gray-500">
                      {project.duration}
                    </span>
                  )}
                </div>
                <p className="text-sm text-blue-600 font-medium mt-2 break-words">
                  {project.technologies.join(" • ")}
                </p>
              </div>
              <div className="flex space-x-2 ml-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-500 hover:text-blue-600 hover:bg-white rounded-lg transition"
                    title="View Live"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-500 hover:text-blue-600 hover:bg-white rounded-lg transition"
                    title="GitHub"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
            <p className="text-gray-700 text-base mb-3">
              {project.shortDescription}
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-600">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <ChevronRight className="w-4 h-4 mt-0.5 mr-2 text-blue-600 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-sm">
              {project.teamMembers && project.teamMembers.length > 0 && (
                <p className="text-gray-600">
                  <span className="font-semibold">Thành viên: </span>
                  {project.teamMembers.join(", ")}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectsComponent;

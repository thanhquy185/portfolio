import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  challenges: string;
  outcome: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<"personal" | "team">("personal");

  // 🔹 Dự án cá nhân
  const personalProjects: Project[] = [
    {
      id: 1,
      title: "Portfolio Website",
      shortDescription:
        "Website portfolio cá nhân với animations và thiết kế hiện đại",
      fullDescription:
        "Website portfolio showcasing các dự án và kỹ năng với thiết kế tối giản, animations mượt mà và hiệu suất tối ưu.",
      images: [
        "/src/images/portfolio/hero.png",
        "/src/images/portfolio/about.png",
        "/src/images/portfolio/skill.png",
        "/src/images/portfolio/projects.png",
        "/src/images/portfolio/contact.png",
      ],
      technologies: ["React", "Framer Motion", "Tailwind CSS", "TypeScript"],
      liveUrl: "https://portfolio-demo.com",
      githubUrl: "https://github.com/user/portfolio",
      features: [
        "Smooth page transitions",
        "Interactive animations",
        "Dark/Light mode toggle",
        "SEO optimized",
        "Progressive Web App",
        "Contact form integration",
      ],
      challenges:
        "Cân bằng giữa visual effects và performance, đảm bảo website load nhanh trên mọi thiết bị.",
      outcome:
        "Website đạt điểm Lighthouse 98/100 và giúp tăng 200% inquiries từ khách hàng tiềm năng.",
    },
    {
      id: 2,
      title: "Vinahome Website",
      shortDescription:
        "Website quản lý khu căn hộ với thiết kế hiện đại và tính ứng dụng cao",
      fullDescription:
        "Đang cập nhật...",
      images: [
        "/src/images/vinahome/login.png",
        "/src/images/vinahome/building-park.png",
      ],
      technologies: ["Vue", "Nest", "PostgreSQL", "TypeScript", "Sass"],
      liveUrl: "javascript:void(0)",
      githubUrl: "javascript:void(0)",
      features: [
        "Đang cập nhật"
      ],
      challenges:
        "Đang cập nhật...",
      outcome:
        "Đang cập nhật...",
    },
    {
      id: 3,
      title: "Vinaeatery Website",
      shortDescription:
        "Website quản lý nhà hàng với thiết kế đơn giản và tính ứng dụng cao",
      fullDescription:
        "Đang cập nhật...",
      images: [
        "/src/images/vinaeatery/public-landing.png",
        "/src/images/vinaeatery/public-login.png",
        "/src/images/vinaeatery/admin-dashboard-profit.png",
        "/src/images/vinaeatery/admin-dashboard-orders.png",
        "/src/images/vinaeatery/admin-objects.png",
        "/src/images/vinaeatery/admin-tickets.png",
        "/src/images/vinaeatery/admin-table-histories.png",
        "/src/images/vinaeatery/admin-detail-table-history.png",
        "/src/images/vinaeatery/admin-use-tables.png",
        "/src/images/vinaeatery/admin-table-has-customer.png",
        "/src/images/vinaeatery/admin-order-sheets.png",
        "/src/images/vinaeatery/admin-detail-order-sheet.png",
        "/src/images/vinaeatery/client-main.png",
        "/src/images/vinaeatery/client-cart.png",
        "/src/images/vinaeatery/client-orders.png",
        "/src/images/vinaeatery/payment-info.png",
        "/src/images/vinaeatery/payment-methods.png",
        "/src/images/vinaeatery/payment-selected.png",
        "/src/images/vinaeatery/payment-feedback.png",
      ],
      technologies: ["React", "Spring-Boot", "MySQL", "TypeScript", "Sass", "Docker"],
      liveUrl: "javascript:void(0)",
      githubUrl: "https://github.com/thanhquy185/vinaeatery",
      features: [
        "Các tác vụ cơ bản cho đối tượng",
        "Xác thực 2 lớp: jwt token, lớp tự định nghĩa",
        "Quản lý trạng thái bàn ăn và lịch sử bàn ăn",
        "Khách hàng có thể gọi món, xem giỏ hàng và trạng thái phiếu gọi món ăn",
        "Mỗi món ăn có công thức với các nguyên liệu khác nhau",
        "Có phân quyền linh động tài khoản nhân viên",
        "Có thanh toán thông qua các ví điện tử",
      ],
      challenges:
        "Khó khăn khi xử lý trạng thái bàn ăn, công thức món ăn và khách hàng gọi món ăn.",
      outcome:
        "Đang cập nhật...",
    },
    {
      id: 4,
      title: "Vinamart Website",
      shortDescription:
        "Website quản lý cửa hàng thực phẩm với thiết kế đơn giản",
      fullDescription:
        "Đang cập nhật...",
      images: [
        "/src/images/vinamart/login.png",
        "/src/images/vinamart/client-foods.png",
        "/src/images/vinamart/client-info.png",
        "/src/images/vinamart/client-order-history.png",
        "/src/images/vinamart/client-order-detail.png",
        "/src/images/vinamart/client-shopping-cart.png",
        "/src/images/vinamart/client-payment.png",
        "/src/images/vinamart/admin-dashboard.png",
        "/src/images/vinamart/admin-order.png",
        "/src/images/vinamart/admin-input-ticket.png",
        "/src/images/vinamart/admin-supplier.png",
        "/src/images/vinamart/admin-category.png",
        "/src/images/vinamart/admin-food.png",
        "/src/images/vinamart/admin-role.png",
        "/src/images/vinamart/admin-user.png",
      ],
      technologies: ["React", "Spring-boot", "MySQL", "Sass"],
      liveUrl: "javascript:void(0)",
      githubUrl: "https://github.com/thanhquy185/vinamart",
      features: [
        "Đang cập nhật"
      ],
      challenges:
        "Đang cập nhật...",
      outcome:
        "Đang cập nhật...",
    },
  ];

  // 🔹 Dự án nhóm
  const teamProjects: Project[] = [
    {
      id: 1,
      title: "School Bus Website",
      shortDescription:
        "Website quản lý việc đưa đón học sinh",
      fullDescription:
        "Đang cập nhật...",
      images: [
        "/src/images/schoolbus/public-login.png",
        "/src/images/schoolbus/admin-students.png",
      ],
      technologies: ["React", "Express", "MySQL", "Docker"],
      liveUrl: "javascript:void(0)",
      githubUrl: "https://github.com/thanhquy185/school-bus",
      features: [
        "Đang cập nhật"
      ],
      challenges:
        "Đang cập nhật...",
      outcome:
        "Đang cập nhật...",
    },
    {
      id: 2,
      title: "CSchool App (Avalonia UI)",
      shortDescription:
        "Ứng dụng quản lý học sinh đơn giản",
      fullDescription:
        "Đang cập nhật...",
      images: [
        "/src/images/cschool/public-login.png",
        "/src/images/cschool/admin-students.png",
      ],
      technologies: ["C#", "MySQL"],
      liveUrl: "javascript:void(0)",
      githubUrl: "https://github.com/thanhquy185/cschool",
      features: [
        "Đang cập nhật"
      ],
      challenges:
        "Đang cập nhật...",
      outcome:
        "Đang cập nhật...",
    },
    {
      id: 4,
      title: "Karaoke Manager App (Java Swing)",
      shortDescription:
        "Ứng dụng quản lý quán hát đơn giản",
      fullDescription:
        "Ứng dụng quản lý quán hát được thiết kế và xây dựng toàn bộ bằng ngôn ngữ Java (Java Swing).",
      images: [
        "/src/images/karaoke/login.png",
        "/src/images/karaoke/dashboard.png",
        "/src/images/karaoke/account.png",
        "/src/images/karaoke/order.png",
        "/src/images/karaoke/room.png",
        "/src/images/karaoke/customer.png",
        "/src/images/karaoke/input-ticket.png",
        "/src/images/karaoke/supplier.png",
        "/src/images/karaoke/category.png",
        "/src/images/karaoke/food.png",
      ],
      technologies: ["Java", "HTML", "CSS", "MySQL"],
      liveUrl: "javascript:void(0)",
      githubUrl: "https://github.com/thanhquy185/KaraokeManager_JavaSwing",
      features: [
        "Các tác vụ cơ bản cho đối tượng",
        "Có thống kê, in phiếu báo cáo",
        "Có phân quyền cơ bản theo chức năng",
        "Mã hoá mật khẩu người dùng theo thuật toán MD5"
      ],
      challenges:
        "Code Java Swing thuần thay vì sử dụng các thư viện UI hiện đại.",
      outcome:
        "Vì là đồ án học phần và giảng viên dễ nên đạt điểm tuyệt đối nhưng với em vẫn chưa xử lý được đúng nghiệp vụ.",
    },
  ];

  // Lấy danh sách theo tab
  const currentProjects =
    activeTab === "personal" ? personalProjects : teamProjects;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dự Án Của Tôi
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Chọn để xem các dự án cá nhân hoặc dự án nhóm mà tôi đã thực hiện.
          </p>
        </motion.div>

        {/* 🔹 Tabs */}
        <div className="flex justify-center gap-6 mb-12">
          <button
            onClick={() => setActiveTab("personal")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === "personal"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Dự Án Cá Nhân
          </button>
          <button
            onClick={() => setActiveTab("team")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === "team"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Dự Án Nhóm
          </button>
        </div>

        {/* 🔹 Grid projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  {project.liveUrl && (
                    <div className="flex items-center gap-1">
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </div>
                  )}
                  {project.githubUrl && (
                    <div className="flex items-center gap-1">
                      <Github className="w-4 h-4" />
                      <span>Source</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

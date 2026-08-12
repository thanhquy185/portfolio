import { motion } from "framer-motion";
import { ChevronRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import ProjectDetailModal from "./ProjectDetailModal";

interface Project {
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  features: string[];
  challenges: string;
  outcome: string;
  images?: string[];
  duration?: string;
  teamMembers?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export default function CVMainContent() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Portfolio Website",
      shortDescription: "Website portfolio cá nhân với animations và thiết kế hiện đại",
      description:
        "Website portfolio showcasing các dự án và kỹ năng với thiết kế tối giản, animations mượt mà và hiệu suất tối ưu. Tích hợp đầy đủ các phần giới thiệu, kỹ năng, dự án và liên hệ với SEO optimization.",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "TypeScript"],
      liveUrl: "https://portfolio-demo.com",
      githubUrl: "https://github.com/user/portfolio",
      duration: "Tháng 9 - Tháng 11, 2024 (3 tháng)",
      teamMembers: ["Trần Thanh Quy"],
      images: [
        "https://via.placeholder.com/400x300?text=Hero+Section",
        "https://via.placeholder.com/400x300?text=Projects+Section",
        "https://via.placeholder.com/400x300?text=Skills+Section",
        "https://via.placeholder.com/400x300?text=Contact+Section",
      ],
      features: [
        "Smooth page transitions với Framer Motion",
        "Interactive animations trên tất cả các section",
        "Dark/Light mode toggle",
        "SEO optimized với meta tags",
        "Progressive Web App ready",
        "Contact form integration",
        "Responsive design trên tất cả devices",
        "Performance optimized (Lighthouse 95+)",
      ],
      challenges:
        "Thách thức chính là tối ưu hóa animations để không ảnh hưởng đến hiệu suất. Giải pháp: Sử dụng will-change CSS, lazy loading, code splitting. Đảm bảo responsive design hoạt động trơn tru trên mobile với animations vẫn mượt mà bằng cách test trên nhiều devices.",
      outcome:
        "Hoàn thành CV-style portfolio với hiệu suất cao (Lighthouse score 95+), animations mượt mà trên tất cả devices, tỷ lệ bounce rate thấp nhờ UX tốt, và thu nhận 50+ visits/tháng.",
    },
    {
      title: "E-commerce Platform",
      shortDescription: "Nền tảng thương mại điện tử fullstack",
      description:
        "Xây dựng nền tảng thương mại điện tử hoàn chỉnh với tính năng quản lý sản phẩm, giỏ hàng, thanh toán an toàn và quản lý đơn hàng. Bao gồm cả admin dashboard để quản lý inventory, customers, và analytics.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/user/ecommerce",
      duration: "Tháng 1 - Tháng 6, 2024 (6 tháng)",
      teamMembers: ["Trần Thanh Quy", "Nguyễn Văn A", "Phạm Thị B"],
      images: [
        "https://via.placeholder.com/400x300?text=Product+Listing",
        "https://via.placeholder.com/400x300?text=Shopping+Cart",
        "https://via.placeholder.com/400x300?text=Checkout",
        "https://via.placeholder.com/400x300?text=Admin+Dashboard",
      ],
      features: [
        "Catalog sản phẩm với search, filter, sort (100+ sản phẩm)",
        "Shopping cart với persistent storage (localStorage)",
        "Thanh toán Stripe integration (production-ready)",
        "User authentication & authorization (JWT)",
        "Order tracking real-time",
        "Admin dashboard để quản lý sản phẩm, orders, customers",
        "Email notifications cho orders",
        "Inventory management",
      ],
      challenges:
        "Tích hợp Stripe payment gateway một cách an toàn và xử lý webhook để update order status correctly. Quản lý state phức tạp với Redux. Tối ưu database queries cho hiệu suất cao khi có nhiều concurrent users. Xử lý lỗi payment flow một cách elegant.",
      outcome:
        "Platform hoạt động ổn định xử lý 100+ orders/day, tỷ lệ conversion 5%, user satisfaction 4.8/5 stars, server uptime 99.9%, payment success rate 99.7%.",
    },
    {
      title: "Task Management App",
      shortDescription: "Ứng dụng quản lý nhiệm vụ realtime",
      description:
        "Ứng dụng quản lý dự án và nhiệm vụ với tính năng real-time collaboration, gán việc cho team members, tracking progress, và notifications. Hỗ trợ comment, attachment, activity log, và team chat tích hợp.",
      technologies: ["React", "NestJS", "PostgreSQL", "WebSocket", "Redux", "Socket.io"],
      liveUrl: "https://taskapp-demo.com",
      githubUrl: "https://github.com/user/taskapp",
      duration: "Tháng 7 - Tháng 12, 2024 (6 tháng)",
      teamMembers: ["Trần Thanh Quy", "Lê Minh C", "Võ Thái D", "Hoàng Thị E"],
      images: [
        "https://via.placeholder.com/400x300?text=Project+Dashboard",
        "https://via.placeholder.com/400x300?text=Task+Board",
        "https://via.placeholder.com/400x300?text=Team+Chat",
        "https://via.placeholder.com/400x300?text=Analytics",
      ],
      features: [
        "Tạo và quản lý projects (unlimited)",
        "Gán tasks cho team members với priority levels",
        "Real-time updates với WebSocket (sub 100ms)",
        "Comments & attachments trên tasks",
        "Activity timeline cho tất cả changes",
        "Notifications (email + in-app)",
        "Team chat integration",
        "Gantt chart & Kanban board views",
        "Task reminders & due dates",
      ],
      challenges:
        "Xử lý real-time updates với WebSocket mà không ảnh hưởng đến performance. Đồng bộ hóa dữ liệu giữa multiple users một cách correct. Xây dựng notification system hiệu quả. Quản lý permissions và roles cho team members.",
      outcome:
        "App được sử dụng bởi 50+ users trong 10 teams, real-time sync dưới 100ms latency, uptime 99.9%, team productivity tăng 30%, user retention rate 85%.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-8"
      >
        {/* Header / Summary */}
        <motion.section variants={itemVariants}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-blue-600">
            Giới Thiệu
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Sinh viên năm 3 Công nghệ Thông tin tại Trường Đại học Sài Gòn với niềm
            đam mê phát triển ứng dụng web hiện đại. Có kinh nghiệm làm việc với React,
            Node.js, và các công nghệ web stack. Luôn sẵn sàng học hỏi công nghệ mới
            và đóng góp cho các dự án ý nghĩa.
          </p>
        </motion.section>

        {/* Experience / Projects */}
        <motion.section variants={itemVariants}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
            Dự Án Nổi Bật
          </h2>
          <div className="space-y-6">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                onClick={() => setSelectedProject(project)}
                className="pb-6 border-b border-gray-200 last:border-b-0 cursor-pointer group hover:bg-blue-50 p-5 -mx-5 rounded-lg transition duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">
                      {project.title}
                    </h3>
                    <p className="text-sm text-blue-600 font-medium mt-1">
                      {project.technologies.join(" • ")}
                    </p>
                    {project.duration && (
                      <p className="text-xs text-gray-500 mt-1">⏱️ {project.duration}</p>
                    )}
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
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-gray-700 text-base mb-3">
                  {project.shortDescription}
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  {project.features.slice(0, 4).map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="w-4 h-4 mt-0.5 mr-2 text-blue-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-sm">
                  {project.teamMembers && project.teamMembers.length > 0 && (
                    <p className="text-gray-600">
                      👥 <span className="font-semibold">{project.teamMembers.length} thành viên:</span> {project.teamMembers.join(", ")}
                    </p>
                  )}
                </div>
                <p className="text-sm text-blue-600 font-semibold mt-3 group-hover:translate-x-1 transition">
                  Xem chi tiết đầy đủ →
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Key Achievements */}
        <motion.section variants={itemVariants}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
            Thành Tựu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 bg-blue-50 rounded-xl border-l-4 border-blue-600 hover:shadow-lg transition"
            >
              <p className="text-4xl font-bold text-blue-600">5+</p>
              <p className="text-gray-700 mt-2 font-semibold">Dự án cá nhân & nhóm</p>
              <p className="text-sm text-gray-600 mt-1">Từ backend đến fullstack</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 bg-green-50 rounded-xl border-l-4 border-green-600 hover:shadow-lg transition"
            >
              <p className="text-4xl font-bold text-green-600">2+</p>
              <p className="text-gray-700 mt-2 font-semibold">Năm học lập trình</p>
              <p className="text-sm text-gray-600 mt-1">Liên tục học hỏi</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 bg-purple-50 rounded-xl border-l-4 border-purple-600 hover:shadow-lg transition"
            >
              <p className="text-4xl font-bold text-purple-600">3.65</p>
              <p className="text-gray-700 mt-2 font-semibold">GPA / 4.00</p>
              <p className="text-sm text-gray-600 mt-1">8.79 / 10.00</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Education */}
        <motion.section variants={itemVariants}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
            Học Tập
          </h2>
          <motion.div
            whileHover={{ y: -2 }}
            className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Cử Nhân Công nghệ Thông tin
                </h3>
                <p className="text-gray-600 mt-1">Trường Đại học Sài Gòn</p>
              </div>
              <span className="text-sm text-gray-500 whitespace-nowrap ml-4 bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
                2022 - Hiện tại
              </span>
            </div>
            <p className="text-base text-gray-700 mb-3 font-semibold">
              GPA: 3.65 / 4.00 (8.79 / 10.00)
            </p>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 mt-0.5 mr-2 text-blue-600 flex-shrink-0" />
                Các môn học: Lập trình C/C++, Java, Cơ sở dữ liệu, Phát triển web, Kiến trúc phần mềm
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 mt-0.5 mr-2 text-blue-600 flex-shrink-0" />
                Hoạt động: Câu lạc bộ lập trình, Dự án khoa học kỹ thuật, Hackathon
              </li>
            </ul>
          </motion.div>
        </motion.section>

        {/* Skills Summary */}
        <motion.section variants={itemVariants}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
            Năng Lực
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ y: -2 }}
              className="p-6 bg-blue-50 rounded-xl border border-blue-200 hover:shadow-lg transition"
            >
              <p className="font-bold text-gray-900 mb-3 text-lg">💻 Kỹ Năng Kỹ Thuật</p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Frontend:</strong> React, Vue, HTML/CSS, Tailwind CSS • <strong>Backend:</strong> Node.js, Express, NestJS, Spring Boot • <strong>Database:</strong> MySQL, PostgreSQL, MongoDB • <strong>Tools:</strong> Git, Docker, AWS, Postman
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -2 }}
              className="p-6 bg-green-50 rounded-xl border border-green-200 hover:shadow-lg transition"
            >
              <p className="font-bold text-gray-900 mb-3 text-lg">🤝 Kỹ Năng Mềm</p>
              <p className="text-gray-700 leading-relaxed">
                Làm việc nhóm, Giao tiếp hiệu quả, Quản lý thời gian, Giải quyết vấn đề, Sáng tạo, Kiên trì học hỏi, Leadership, Adaptability
              </p>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </>
  );
}

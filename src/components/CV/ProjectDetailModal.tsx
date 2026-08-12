import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, ChevronRight, Users, Calendar, Zap, Award, Code2 } from "lucide-react";
import { useState } from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    technologies: string[];
    features: string[];
    challenges: string;
    outcome: string;
    images?: string[];
    duration?: string;
    teamMembers?: string[];
    liveUrl?: string;
    githubUrl?: string;
  } | null;
}

export default function ProjectDetailModal({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");

  const nextImage = () => {
    if (project?.images) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (project?.images) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-40"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col"
            >
              {/* Header with Gradient */}
              <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 flex justify-between items-center z-10">
                <div>
                  <h2 className="text-3xl font-bold">{project.title}</h2>
                  <p className="text-blue-100 mt-1 text-sm">{project.technologies.slice(0, 3).join(" • ")}</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-full transition text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto flex-1">
                <div className="p-8 space-y-6">
                  {/* Hero Image with Carousel */}
                  {project.images && project.images.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="relative"
                    >
                      <div className="relative bg-gray-100 rounded-xl overflow-hidden aspect-video group">
                        <motion.img
                          key={currentImageIndex}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          src={project.images[currentImageIndex]}
                          alt={`Preview ${currentImageIndex + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23e5e7eb' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='18' fill='%239ca3af' text-anchor='middle' dominant-baseline='middle'%3EImage Placeholder%3C/text%3E%3C/svg%3E";
                          }}
                        />
                        
                        {/* Navigation Arrows */}
                        {project.images.length > 1 && (
                          <>
                            <button
                              onClick={prevImage}
                              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition opacity-0 group-hover:opacity-100 z-10"
                            >
                              <ChevronRight className="w-5 h-5 text-gray-900 rotate-180" />
                            </button>
                            <button
                              onClick={nextImage}
                              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition opacity-0 group-hover:opacity-100 z-10"
                            >
                              <ChevronRight className="w-5 h-5 text-gray-900" />
                            </button>
                          </>
                        )}

                        {/* Image Indicators */}
                        {project.images.length > 1 && (
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {project.images.map((_, i) => (
                              <button
                                key={i}
                                onClick={() => setCurrentImageIndex(i)}
                                className={`h-2 rounded-full transition ${
                                  i === currentImageIndex
                                    ? "bg-white w-8"
                                    : "bg-white/50 w-2 hover:bg-white/70"
                                }`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* Stats Row */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="grid grid-cols-3 gap-4"
                  >
                    {project.duration && (
                      <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-5 h-5 text-blue-600" />
                          <span className="font-semibold text-gray-900 text-sm">Thời Gian</span>
                        </div>
                        <p className="text-sm font-bold text-blue-700">{project.duration}</p>
                      </div>
                    )}
                    {project.teamMembers && project.teamMembers.length > 0 && (
                      <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="w-5 h-5 text-purple-600" />
                          <span className="font-semibold text-gray-900 text-sm">Thành Viên</span>
                        </div>
                        <p className="text-sm font-bold text-purple-700">{project.teamMembers.length} người</p>
                      </div>
                    )}
                    <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Code2 className="w-5 h-5 text-green-600" />
                        <span className="font-semibold text-gray-900 text-sm">Tech Stack</span>
                      </div>
                      <p className="text-sm font-bold text-green-700">{project.technologies.length} công nghệ</p>
                    </div>
                  </motion.div>

                  {/* Tab Navigation */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex gap-2 border-b border-gray-200"
                  >
                    {[
                      { id: "overview", label: "📋 Tổng Quan", icon: "📋" },
                      { id: "features", label: "✨ Tính Năng", icon: "✨" },
                      { id: "technical", label: "⚙️ Kỹ Thuật", icon: "⚙️" },
                      { id: "results", label: "🎯 Kết Quả", icon: "🎯" },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-3 font-semibold text-sm border-b-2 transition ${
                          activeTab === tab.id
                            ? "border-blue-600 text-blue-600"
                            : "border-transparent text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </motion.div>

                  {/* Tab Content */}
                  <motion.div
                    variants={tabVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.3 }}
                    key={activeTab}
                  >
                    {/* Overview Tab */}
                    {activeTab === "overview" && (
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <Award className="w-5 h-5 text-blue-600" />
                            Mô Tả Chi Tiết
                          </h3>
                          <p className="text-gray-700 leading-relaxed">{project.description}</p>
                        </div>
                      </div>
                    )}

                    {/* Features Tab */}
                    {activeTab === "features" && (
                      <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <Zap className="w-5 h-5 text-yellow-500" />
                          Các Tính Năng Chính
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {project.features.map((feature, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                              className="flex items-start p-4 bg-gradient-to-r from-blue-50 to-transparent rounded-lg border border-blue-200 hover:border-blue-400 transition"
                            >
                              <ChevronRight className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technical Tab */}
                    {activeTab === "technical" && (
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Code2 className="w-5 h-5 text-green-600" />
                            Công Nghệ Sử Dụng
                          </h3>
                          <div className="flex flex-wrap gap-3 mb-6">
                            {project.technologies.map((tech, i) => (
                              <motion.span
                                key={i}
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: i * 0.05 }}
                                className="px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 text-sm font-bold rounded-full border border-green-300 hover:shadow-md transition"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        <div className="p-6 bg-orange-50 border-2 border-orange-200 rounded-lg">
                          <h4 className="text-lg font-bold text-orange-900 mb-3 flex items-center gap-2">
                            🎯 Thách Thức & Giải Pháp
                          </h4>
                          <p className="text-orange-800 leading-relaxed">{project.challenges}</p>
                        </div>
                      </div>
                    )}

                    {/* Results Tab */}
                    {activeTab === "results" && (
                      <div className="space-y-4">
                        <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-lg">
                          <h4 className="text-lg font-bold text-green-900 mb-3 flex items-center gap-2">
                            ✨ Kết Quả Đạt Được
                          </h4>
                          <p className="text-green-800 leading-relaxed">{project.outcome}</p>
                        </div>

                        {/* Team Members */}
                        {project.teamMembers && project.teamMembers.length > 0 && (
                          <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                              <Users className="w-5 h-5 text-purple-600" />
                              Thành Viên Đội ({project.teamMembers.length})
                            </h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                              {project.teamMembers.map((member, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: i * 0.05 }}
                                  className="p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg text-sm font-semibold text-gray-800 text-center border border-purple-200 hover:border-purple-400 hover:shadow-md transition"
                                >
                                  {member}
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>

              {/* Footer with Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="border-t border-gray-200 bg-gray-50 p-6 flex gap-3"
              >
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg hover:scale-105 transition transform font-semibold"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Xem Live
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:shadow-lg hover:scale-105 transition transform font-semibold"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                )}
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const AcademicComponent: React.FC = () => {
  const academicName = import.meta.env.VITE_ACADEMIC_NAME;
  const academicCourse = import.meta.env.VITE_ACADEMIC_COURSE;
  const academicGPA = import.meta.env.VITE_ACADEMIC_GPA;

  return (
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
        <p className="font-semibold text-blue-300">{academicName}</p>
        <p className="text-gray-400">{academicCourse}</p>
        <p className="text-gray-400">{academicGPA}</p>
      </div>
    </motion.div>
  );
};

export default AcademicComponent;

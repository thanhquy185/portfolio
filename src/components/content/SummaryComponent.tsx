import { BriefcaseBusiness, FolderKanban, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

type SummaryComponentProps = {
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

const SummaryComponent: React.FC<SummaryComponentProps> = ({
  itemVariants,
}) => {
  const summaryProject = import.meta.env.VITE_SUMMARY_PROJECT;
  const summaryYear = import.meta.env.VITE_SUMMARY_YEAR;
  const summaryExperience = import.meta.env.VITE_SUMMARY_EXPERIENCE;

  return (
    <motion.section variants={itemVariants}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.25 }}
          className="relative overflow-hidden rounded-2xl border border-gray-200
                 bg-white p-7 shadow-sm hover:shadow-xl transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div
              className="w-11 h-11 rounded-xl bg-blue-100
                        flex items-center justify-center text-blue-600"
            >
              <FolderKanban className="w-5 h-5" />
            </div>
            <span className="text-4xl font-black text-gray-900">
              {summaryProject}+
            </span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mt-6">Dự án</h3>
          <p className="text-sm text-gray-500 mt-1">Cá nhân & nhóm</p>
          <div className="mt-5 h-1.5 rounded-full bg-gray-100 overflow-hidden">
            <div className="h-full w-[75%] rounded-full bg-blue-600" />
          </div>
        </motion.div>
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.25 }}
          className="relative overflow-hidden rounded-2xl border border-gray-200
                 bg-white p-7 shadow-sm hover:shadow-xl transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div
              className="w-11 h-11 rounded-xl bg-green-100
                        flex items-center justify-center text-green-600"
            >
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="text-4xl font-black text-gray-900">
              {summaryYear}+
            </span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mt-6">
            Năm học lập trình
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Liên tục học hỏi & phát triển
          </p>
          <div className="mt-5 flex gap-1">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className={`h-1.5 flex-1 rounded-full ${
                  item <= summaryYear ? "bg-green-500" : "bg-gray-100"
                }`}
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.25 }}
          className="relative overflow-hidden rounded-2xl border border-gray-200
             bg-white p-7 shadow-sm hover:shadow-xl transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div
              className="w-11 h-11 rounded-xl bg-purple-100
                 flex items-center justify-center text-purple-600"
            >
              <BriefcaseBusiness className="w-5 h-5" />{" "}
            </div>
            <span className="text-4xl font-black text-gray-900">
              {summaryExperience}+
            </span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mt-6">
            Năm kinh nghiệm
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Kinh nghiệm làm việc thực tế
          </p>
          <div className="mt-5 flex items-center gap-1.5">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className={`h-1.5 flex-1 rounded-full ${
                  item <= summaryExperience ? "bg-purple-500" : "bg-gray-100"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SummaryComponent;

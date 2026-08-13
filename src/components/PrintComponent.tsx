import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

const PrintComponent: React.FC = () => {
  const printScore = import.meta.env.VITE_PRINT_SCORE;

  const handlePrintCV = () => {
    window.print();
  };
  const handlePrintTranscript = () => {
    window.open(printScore, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed bottom-8 inset-x-0 z-40 flex justify-center print:hidden"
    >
      <div
        className="flex items-center gap-2 p-2 bg-white/90
                      backdrop-blur-md rounded-full shadow-xl
                      border border-gray-200"
      >
        <button
          onClick={handlePrintCV}
          className="flex items-center gap-2 px-6 py-3
                     bg-blue-600 text-white rounded-full
                     hover:bg-blue-700 transition-all duration-300
                     hover:scale-105 font-semibold"
        >
          <Download className="w-5 h-5" />
          Tải CV
        </button>
        <button
          onClick={handlePrintTranscript}
          className="flex items-center gap-2 px-6 py-3
                     text-gray-700 rounded-full
                     hover:bg-gray-100 transition-all duration-300
                     font-semibold"
        >
          <FileText className="w-5 h-5" />
          Xem bảng điểm
        </button>
      </div>
    </motion.div>
  );
};

export default PrintComponent;

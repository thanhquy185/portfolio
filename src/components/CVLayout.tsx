import { motion } from "framer-motion";
import { Download } from "lucide-react";
import CVSidebar from "./CV/CVSidebar";
import CVMainContent from "./CV/CVMainContent";

export default function CVLayout() {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="h-full w-full"
      >
        {/* Grid: Sidebar 1 : Content 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-screen bg-white">
          {/* Sidebar - 1 column */}
          <div className="lg:col-span-1 bg-gray-900 text-white overflow-y-auto">
            <CVSidebar />
          </div>

          {/* Main Content - 1 column */}
          <div className="lg:col-span-1 bg-white p-8 lg:p-12 overflow-y-auto">
            <CVMainContent />
          </div>
        </div>
      </motion.div>

      {/* Download Button - Absolute center bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 print:hidden"
      >
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-semibold"
        >
          <Download className="w-5 h-5" />
          Tải CV
        </button>
      </motion.div>

      <style>{`
        @media print {
          body {
            background: white;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}

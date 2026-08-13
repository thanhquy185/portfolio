import SidebarComponent from "./SidebarComponent";
import ContentComponent from "./ContentComponent";
import { motion } from "framer-motion";

const MainContentComponent: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="h-full w-full"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 min-h-screen">
        <div className="bg-gray-900 text-white">
          <SidebarComponent />
        </div>
        <div className="col-span-2 bg-white p-8 lg:p-12">
          <ContentComponent />
        </div>
      </div>
    </motion.div>
  );
};

export default MainContentComponent;

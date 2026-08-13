import { motion } from "framer-motion";

const InfoComponent: React.FC = () => {
  const infoFullname = import.meta.env.VITE_INFO_FULLNAME;
  const infoDesc = import.meta.env.VITE_INFO_DESC;
  const infoRole = import.meta.env.VITE_INFO_ROLE;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="text-center mb-8"
    >
      <h1 className="text-3xl font-bold text-white mb-2">{infoFullname}</h1>
      <div className="h-1 w-12 bg-blue-500 mx-auto mb-4"></div>
      <p className="text-blue-300 font-semibold text-lg">{infoDesc}</p>
      <p className="text-gray-400 text-sm">{infoRole}</p>
    </motion.div>
  );
};

export default InfoComponent;

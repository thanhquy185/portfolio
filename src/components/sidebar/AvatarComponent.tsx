import { motion } from "framer-motion";

const AvatarComponent: React.FC = () => {
  const avatarSrc = import.meta.env.VITE_AVATAR_SRC;
  const avatarAlt = import.meta.env.VITE_AVATAR_ALT;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center mb-8"
    >
      <img
        src={avatarSrc}
        alt={avatarAlt}
        className="w-40 h-40 rounded-full border-4 border-blue-500 object-cover shadow-lg"
      />
    </motion.div>
  );
};

export default AvatarComponent;

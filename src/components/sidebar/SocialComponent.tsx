import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialComponent: React.FC = () => {
  const socialFacebook = import.meta.env.VITE_SOCIAL_FACEBOOK;
  const socialGithub = import.meta.env.VITE_SOCIAL_GITHUB;
  const socialLinkedin = import.meta.env.VITE_SOCIAL_LINKEDIN;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mb-8 flex space-x-4 justify-center"
    >
      <a
        href={socialFacebook}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-gray-800 rounded-full transition hover:bg-gray-700"
        title="Facebook"
      >
        <FaFacebook className="w-5 h-5 text-[#0866FF]" />
      </a>
      <a
        href={socialGithub}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-gray-800 rounded-full transition hover:bg-gray-700"
        title="GitHub"
      >
        <FaGithub className="w-5 h-5 text-white" />
      </a>
      <a
        href={socialLinkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-gray-800 rounded-full transition hover:bg-gray-700"
        title="LinkedIn"
      >
        <FaLinkedin className="w-5 h-5 text-[#0A66C2]" />
      </a>
    </motion.div>
  );
};

export default SocialComponent;

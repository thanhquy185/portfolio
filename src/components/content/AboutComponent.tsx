import TitleComponent from "./TitleComponent";
import { motion } from "framer-motion";

type AboutComponentProps = {
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

const AboutComponent: React.FC<AboutComponentProps> = ({ itemVariants }) => {
  const aboutDesc = import.meta.env.VITE_ABOUT_DESC;

  return (
    <motion.section variants={itemVariants}>
      <TitleComponent title="Giới thiệu" />
      <p className="text-gray-700 leading-relaxed text-lg">{aboutDesc}</p>
    </motion.section>
  );
};

export default AboutComponent;

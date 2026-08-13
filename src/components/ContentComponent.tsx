import SummaryComponent from "./content/SummaryComponent";
import AboutComponent from "./content/AboutComponent";
import ProjectsComponent from "./content/ProjectsComponent";
import ExperiencesComponent from "./content/ExperiencesComponent";
import SkillsComponent from "./content/SkillsComponent";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ContentComponent: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-8"
    >
      <SummaryComponent itemVariants={itemVariants} />
      <AboutComponent itemVariants={itemVariants} />
      <ProjectsComponent itemVariants={itemVariants} />
      <ExperiencesComponent itemVariants={itemVariants} />
      <SkillsComponent itemVariants={itemVariants} />
    </motion.div>
  );
};

export default ContentComponent;

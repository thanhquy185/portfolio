import { motion } from "framer-motion";

type SkillComponentProps = {
  name: string;
  description: string;
};

const SkillComponent: React.FC<SkillComponentProps> = ({
  name,
  description,
}) => {
  return (
    <motion.div
      whileHover={{ x: 6 }}
      transition={{ duration: 0.2 }}
      className="py-6 flex flex-col md:flex-row md:items-start md:gap-12
                 group transition-all"
    >
      <h3 className="text-lg font-bold text-gray-900 md:w-56 flex-shrink-0">
        {name}
      </h3>
      <p className="text-gray-600 leading-relaxed mt-2 md:mt-0 max-w-2xl">
        {description}
      </p>
    </motion.div>
  );
};

export default SkillComponent;

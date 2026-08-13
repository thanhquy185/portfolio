import TitleComponent from "./TitleComponent";
import SkillComponent from "./SkillComponent";
import { motion } from "framer-motion";

type SkillsComponentProps = {
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

const SkillsComponent: React.FC<SkillsComponentProps> = ({ itemVariants }) => {
  return (
    <motion.section variants={itemVariants}>
      <TitleComponent title="Năng lực" />
      <div className="divide-y divide-gray-200 border-y border-gray-200">
        <SkillComponent
          name="Phát tiển Web"
          description="Có thể xây dựng website từ giao diện đến backend và cơ sở dữ liệu,
            đồng thời kết nối các thành phần thông qua API"
        />
        <SkillComponent
          name="Backend"
          description="Xây dựng API, xử lý các chức năng của hệ thống, đăng nhập, phân
            quyền và các nghiệp vụ của ứng dụng"
        />
        <SkillComponent
          name="Cơ sở dữ liệu"
          description="Thiết kế bảng dữ liệu, viết truy vấn và xử lý dữ liệu phù hợp với
            yêu cầu của ứng dụng"
        />
        <SkillComponent
          name="Tinh thần học hỏi"
          description="Chủ động học hỏi, chịu khó tìm hiểu và sẵn sàng tiếp cận những kiến thức, công nghệ mới."
        />
        <SkillComponent
          name="Làm việc nhóm"
          description="Làm việc cùng các thành viên trong nhóm, phân chia công việc, sử
            dụng Git và cùng phát triển dự án"
        />
      </div>
    </motion.section>
  );
};

export default SkillsComponent;

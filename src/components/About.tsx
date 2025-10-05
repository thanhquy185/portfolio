import { motion } from "framer-motion";
import { GraduationCap, Target, Users, Sparkles } from "lucide-react";
import React from "react";

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      color: "text-blue-600",
      title: "Học vấn",
      desc: "Sinh viên Công nghệ Thông tin với nền tảng về lập trình, cơ sở dữ liệu và phát triển phần mềm.",
    },
    {
      icon: Users,
      color: "text-purple-600",
      title: "Kỹ năng mềm",
      desc: "Thích làm việc nhóm, cởi mở học hỏi và luôn sẵn sàng tiếp nhận công nghệ mới.",
    },
    {
      icon: Sparkles,
      color: "text-yellow-500",
      title: "Sở thích",
      desc: "Yêu thích khám phá công nghệ, thiết kế UI/UX và xây dựng ứng dụng hữu ích cho cộng đồng.",
    },
    {
      icon: Target,
      color: "text-red-600",
      title: "Mục tiêu",
      desc: "Trở thành một lập trình viên fullstack, không ngừng cải thiện bản thân và đóng góp cho các dự án ý nghĩa.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Ảnh / Avatar */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.img
            src="/images/others/about-image.png"
            alt="About me"
            className="w-80 h-80 rounded-2xl object-cover"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Nội dung */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Giới Thiệu Về Tôi
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Xin chào 👋, tôi là một sinh viên CNTT với niềm đam mê trong việc
            xây dựng ứng dụng web hiện đại. Tôi yêu thích việc học hỏi công nghệ
            mới, giải quyết vấn đề và mang lại trải nghiệm tốt nhất cho người
            dùng.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
              >
                <div className="flex-shrink-0">
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-base text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 px-6 z-10">
        {/* Ảnh cá nhân */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0"
        >
          <img
            src="/src/images/others/avatar.jpg" // đổi thành ảnh của bạn
            alt="avatar"
            className="w-60 h-60 md:w-76 md:h-76 rounded-full border-4 border-purple-500 shadow-lg object-cover"
          />
        </motion.div>

        {/* Thông tin */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left max-w-xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">
            Trần Thanh Quy
          </h1>
          <p className="text-lg md:text-xl text-purple-300 font-medium mb-2">
            Sinh viên Công nghệ Thông tin - Trường Đại học Sài Gòn
          </p>
          <p className="text-md text-gray-300 mb-6">GPA: 3.65 / 4.00 - 8.79 / 10.00 (hiện tại)</p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 mb-8"
          >
            Là sinh viên, tôi không ngừng rèn luyện để xây dựng sản phẩm công
            nghệ sáng tạo và hữu ích.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Xem Dự Án
            </button>
            <button className="px-8 py-3 border border-gray-400 text-gray-300 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Liên Hệ
            </button>
            <button className="px-8 py-3 rounded-full font-semibold text-white bg-green-600 hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg">
              Tải CV
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-10 text-white">
            <div className="text-center md:text-left">
              <p className="text-4xl font-bold">5+</p>
              <p className="text-sm text-gray-400">Dự án cá nhân & nhóm</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-4xl font-bold">2+</p>
              <p className="text-sm text-gray-400">Năm học lập trình</p>
            </div>
            {/* <div className="text-center md:text-left">
              <p className="text-4xl font-bold">850</p>
              <p className="text-sm text-gray-400">TOEIC</p>
            </div> */}
          </div>
        </motion.div>
      </div>

      {/* Icon scroll down */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10"
      >
        <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce" />
      </motion.div>
    </section>
  );
}

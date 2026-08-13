import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactComponent: React.FC = () => {
  const contactPhone = import.meta.env.VITE_CONTACT_PHONE;
  const contactMail = import.meta.env.VITE_CONTACT_MAIL;
  const contactLocation = import.meta.env.VITE_CONTACT_LOCATION;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-8 space-y-3 text-sm"
    >
      <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition">
        <Phone className="w-5 h-5 flex-shrink-0 text-blue-500" />
        <span>{contactPhone}</span>
      </div>
      <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition">
        <Mail className="w-5 h-5 flex-shrink-0 text-blue-500" />
        <span className="truncate">{contactMail}</span>
      </div>
      <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition">
        <MapPin className="w-5 h-5 flex-shrink-0 text-blue-500" />
        <span>{contactLocation}</span>
      </div>
    </motion.div>
  );
};

export default ContactComponent;

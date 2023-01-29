import { motion } from "framer-motion";


const OtherInfo = ({ formData, setFormData, page, setPage, x, setX }) => {
  return (
    <motion.div
      initial={{ scale: 0.4 }}
      animate={{ 
        rotate: 360,
        scale: 1.5 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20 }}
      className="card"
    >
      <div className="discount_code">DISCOUNT_CODE!</div>
      
    </motion.div>
  );
};

export default OtherInfo;

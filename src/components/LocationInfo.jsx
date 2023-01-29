import { motion } from "framer-motion";


const LocationInfo = ({ formData, setFormData, page, setPage, x, setX }) => {

  return (
    <motion.div
      initial={{ x: x}}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className="card"
    >
      <div className="step-title">It's ok, click to get a surprise!</div>

      <img src='Radish-square.png'></img>
      
      <button
        onClick={() => {
          setPage(page + 1);
          setX(1000);
        }}
      >
        thanks T_T
      </button>
      <br />
      
    </motion.div>
  );
};

export default LocationInfo;

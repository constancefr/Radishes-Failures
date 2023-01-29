import { motion } from "framer-motion";
import handleChange from "../App.js";


const PersonalInfo = ({ formData, setFormData, page, setPage, x, setX }) => {

  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className="card"
    >
      <div className="step-title">Please submit a proof of failure (transcript, exam paper covered in red...)</div>

      <input type="file" onChange={handleChange}/>

      <button
        onClick={() => {
          setPage(page + 1);
          setX(1000);
        }}
      >
        Upload
      </button>
      <br/>
      {/* <button
        onClick={() => {
          setPage(page - 1);
          setX(-1000);
        }}
      >
        Previous
      </button> */}
    </motion.div>
  );
};

export default PersonalInfo
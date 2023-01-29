import { motion } from "framer-motion";

  const SignUp = ({ formData, setFormData, page, setPage, x, setX }) => {
    return (
      <motion.div
        initial={{ x: x }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="card"
      >
        <div className="step-title">so sorry to hear that :( at least you didn't order UberEats!</div>

        {/* <input
          type="text"
          placeholder="Full Name"
          className="form-group"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        />
        <input
          type="text"
          className="form-group"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
        <input
          type="text"
          className="form-group"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        /> */}

        <button
          onClick={() => {
            setPage(page + 1);
            setX(1000);
          }}
        >
          Get a free meal!
        </button>
      </motion.div>
    );
  };

  export default SignUp;

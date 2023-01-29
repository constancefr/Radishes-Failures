import "./App.css";
import { useState } from "react";
import SignUp from "./components/SignUp";
import PersonalInfo from "./components/PersonalInfo";
import LocationInfo from "./components/LocationInfo";
import OtherInfo from "./components/OtherInfo";

import axios from 'axios';

function App() {
  const [page, setPage] = useState(0);

  const [x, setX] = useState(0);

  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    password: "",
    nickname: "",
    email: "",
    address: "",
    nationality: "",
    zipcode: "",
    highestQualification: "",
    occupation: "",
    about: "",
  });

  const componentList = [
    <SignUp
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,
    <PersonalInfo
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,
    <LocationInfo
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,
    <OtherInfo
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,
  ];

  const [file, setFile] = useState()

  function handleChange(event) {
    setFile(event.target.files[0])
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    const url = 'http://localhost:3000/uploadFile';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });

  }

  return (
    <div className="App">
      {/* <div className="progress-bar">
        {
          <div
            style={{
              width:
                page === 0
                  ? "25%"
                  : page === 1
                  ? "50%"
                  : page === 2
                  ? "75%"
                  : "100%",
            }}
          ></div>
        }
      </div> */}

      <div className="body">{componentList[page]}</div>
    </div>
  );
}

export default App;

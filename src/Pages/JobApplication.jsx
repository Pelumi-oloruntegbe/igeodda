import {React, useState} from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
// import Success from "../component/Success"


const JobApplication = () => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleCheckboxChange = (event) => {
    setAcceptedTerms(event.target.checked);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    setShowModal(true);
  };

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center">
        <div className="flex flex-col p-6 rounded-md bg-[#DBF7FD] w-fit gap-4">
          <span className="flex gap-4">
            <span className="flex flex-col">
              <span className="text-xs font-light opacity-70">First Name</span>
              <input type="text" className=" w-72 p-2 rounded-md" />
            </span>
            <span className="flex flex-col">
              <span className="text-xs font-light opacity-70">Last Name</span>
              <input type="text" className=" w-72 p-2 rounded-md" />
            </span>
          </span>
          <span className="flex gap-4">
            <span className="flex flex-col">
              <span className="text-xs font-light opacity-70">
                Email Address
              </span>
              <input type="text" className=" w-72 p-2 rounded-md" />
            </span>
            <span className="flex flex-col">
              <span className="text-xs font-light opacity-70">
                Phone Number
              </span>
              <input type="text" className=" w-72 p-2 rounded-md" />
            </span>
          </span>
          <span className="flex gap-4">
            <span className="flex flex-col w-full">
              <span className="text-xs font-light opacity-70">
                Cover Letter
              </span>
              <input type="text" className="w-full h-32 p-2 rounded-md" />
            </span>
          </span>
          <span className="flex flex-col mt-6">
            <span className="text-xs font-light opacity-70">
              *Upload CV/Resume
            </span>
            <div className="flex">
              <input
                type="file"
                onChange={handleFileChange}
                className="p-0 bg-white rounded-lg font-light text-sm"
                id="file"
              />
            </div>
            <span className="text-xs mt-4">
              File type should not be larger than 12MB. Supported file types:
              doc. docx. pdf.
            </span>
            <form onSubmit={handleFormSubmit}>
              <label className="flex items-center mt-4">
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                I agree to the
                <span className="text-[#0DCAF0] ml-1">
                  {" "}
                  terms and conditions
                </span>
              </label>
              <button
                type="submit"
                className="text-center bg-[#0DCAF0] rounded-md w-fit px-4 py-2 cursor-pointer text-white mt-4"
              >
                Apply Now
              </button>
            </form>
          </span>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobApplication;

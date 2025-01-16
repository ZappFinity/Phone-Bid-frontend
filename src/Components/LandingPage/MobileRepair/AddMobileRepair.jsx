import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import End from "../End";
import { useLocation } from "react-router-dom";

function AddMobileRepair() {
  const location = useLocation();
  const [mobile_name, setMobileName] = useState("");
  const [issue, setIssue] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [device_type, setDeviceType] = useState("");
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    if (location.state && location.state.mobileType) {
      setDeviceType(location.state.mobileType);
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!mobile_name || !issue || !phone || !email){
      setWarning("Field Required");
      return;
    }

    try {
      let item = { mobile_name, issue, phone, email, device_type };
      const tokenData = localStorage.getItem("token");
      if (!tokenData) {
        alert('Login to submit mobile repairing');
        return;
      }
      const token = JSON.parse(tokenData);
      let url = `http://127.0.0.1:8000/api/mobile-repairing/store`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(item),
      });

      const result = await response.json();
      if (result.success === true) {
        console.log(result);
        alert("Booking Successfully");
        window.location.reload();
      } else {
        alert("Booking Failed");
      }
      console.log("Post successful:", result);

      setMobileName("");
      setIssue("");
      setEmail("");
      setPhone("");
    } catch (error) {
      console.error("Error fetching booking data:", error);
    }
  };

  const handleCancel = () => {
    setMobileName("");
    setIssue("");
    setEmail("");
    setPhone("");
  };

  return (
    <>
      <Navbar />
      <div className="greyColor d-flex justify-content-center">
        <div className="container py-5 col-md-8">
        <h3 className="mb-4">Mobile Repair Form</h3>
          <div
            className="card card-custom p-3"
            style={{
              boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "1.5rem",
              width: "100%",
            }}
          >
            <div className="card-body d-flex flex-column gap-2">
              <div className="col-8 mx-auto mb-3">
                <label className="pb-2">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="name@gmail.com"
                  aria-label="Mobile Name"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                 {warning && !email && <p style={{ color: 'red' }}>Email Required </p>}
              </div>
              <div className="col-8 mx-auto mb-3">
                <label className="pb-2">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="03333578657"
                  aria-label="Mobile Name"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                 {warning && !phone && <p style={{ color: 'red' }}>Phone Required </p>}
              </div>
              <div className="col-8 mx-auto mb-3">
                <label className="pb-2">Mobile Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="iPhone"
                  aria-label="Mobile Name"
                  value={mobile_name}
                  onChange={(e) => setMobileName(e.target.value)}
                />
                 {warning && !mobile_name && <p style={{ color: 'red' }}>Mobile Name Required </p>}
              </div>
              <div className="col-8 mx-auto">
                <label className="pb-2">Issue With Mobile</label>
                <textarea
                  placeholder="Describe the issue"
                  className="form-control"
                  aria-label="Issue with Mobile"
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                />
                 {warning && !issue && <p style={{ color: 'red' }}>Issue Required </p>}

              </div>
              <div className="d-flex flex-row justify-content-around mt-3">
                <button
                type="submit"
                  className="btn px-4"
                  style={{
                    backgroundColor: "#52AB98",
                    color: "white",
                  }}
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                <button
                  className="btn btn-primary px-4"
                  style={{
                    borderRadius: "1px solid #52AB98",
                  }}
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <End />
    </>
  );
}

export default AddMobileRepair;

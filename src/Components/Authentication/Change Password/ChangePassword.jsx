import React, {useState} from 'react'
import Navbar from '../../LandingPage/Navbar'
import End from '../../LandingPage/End'

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      setError("New password and confirm password don't match");
      return;
    }

    try {
      const tokenData = localStorage.getItem('token');
      if (!tokenData) {
        setError('Token is missing');
        return;
      }
      const token = JSON.parse(tokenData);
      
      const response = await fetch('http://127.0.0.1:8000/api/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          current_password: currentPassword,
          new_password: newPassword,
          confirm_password: confirmPassword
        }),
      });
      console.log(response);
      if (response.ok) {
        setSuccess(true);
        setError('');
        // all states should be reset here
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to change password');
      }
    } catch (error) {
      setError('Network error');
    }
  };

  return (
    <>
    <Navbar/>
    <div style={{ backgroundColor: "#e9ecef" }}>
    <div className='pt-5 pb-5 '>
      <h4 className='offset-3 mb-3 '>Change Password</h4>
      <div className="bg-white pt-3 offset-3 pb-2 p-5"
          style={{ width: "45%", height: "100%" }}>
            <h5 className='offset-2 mb-3'>Change your password below</h5>
            <form onSubmit={handleSubmit}>
              <div className="d-flex flex-column offset-2 col-sm-9 bd-highlight mb-3 ">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Current Password"
                  value={currentPassword}
                  onChange={(e) => handleChange(e, setCurrentPassword)}
                />
                <input
                  type="password"
                  className="form-control mt-3"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => handleChange(e, setNewPassword)}
                />
                <input
                  type="password"
                  className="form-control mt-3"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => handleChange(e, setConfirmPassword)}
                />
              </div>
              <div className="d-flex justify-content-center pt-4 pb-4 ">
                <button
                  type="submit"
                  className="btn px-5"
                  style={{ backgroundColor: "#52AB98", color: "white" }}
                >
                  Reset Password
                </button>
              </div>
            </form>
            {error && <div className="text-danger text-center">{error}</div>}
            {success && <div className="text-success text-center">Password changed successfully!</div>}
      </div>
    </div>
    </div>
    <End/>
      
    </>
  )
}

export default ChangePassword

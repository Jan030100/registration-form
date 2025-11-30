import { useState } from "react";
import reg from './assets/reg.svg';

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateAll = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) newErrors.email = "Invalid email format";
    }

    if (!password.trim()) newErrors.password = "Password is required";
    if (!confirmPassword.trim()) newErrors.confirmPassword = "Confirm your password";

    if (password && confirmPassword && password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateAll();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Registration Successful!");
    }
  };

  const clearError = (field) => {
    if (!errors[field]) return;
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[field];
      return copy;
    });
  };

  return (
    <div className="wrapper">

  
      <div className="left-img">
        <img src={reg} alt="reg" />
      </div>



      <div className="container">
        <form onSubmit={handleSubmit} className="form" noValidate>
          <h2>Registration Form</h2>
          <p className="subtitle">Join us today and start your journey with us.</p>

          <div className="field">
            <label className="label">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => { setName(e.target.value); clearError("name"); }}
            />
            <p className={`error ${errors.name ? "visible" : "hidden"}`}>
              {errors.name || " "}
            </p>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <input
              type="email"
         placeholder="Enter your email"
              value={email}
       onChange={(e) => { setEmail(e.target.value); clearError("email"); }}
            />
            <p className={`error ${errors.email ? "visible" : "hidden"}`}>
              {errors.email || " "}
            </p>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <input
       type="password"
              placeholder="Create your password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); clearError("password"); }}
            />
            <p className={`error ${errors.password ? "visible" : "hidden"}`}>
              {errors.password || " "}
            </p>
  </div>

          <div className="field">
            <label className="label">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => { setConfirmPassword(e.target.value); clearError("confirmPassword"); }}
            />
            <p className={`error ${errors.confirmPassword ? "visible" : "hidden"}`}>
              {errors.confirmPassword || " "}
            </p>
          </div>

          <button type="submit">Register</button>
        </form>
      </div>

    </div>
  );
}

export default RegisterForm;
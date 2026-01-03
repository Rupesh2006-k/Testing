import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isLogin } from "../../features/AuthSlice";
import axios from "axios";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.mobile ||
      !formData.password
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      const result = await axios.post(
        "http://localhost:3000/api/user/auth/register",
        formData,
        { withCredentials: true }
      );
      dispatch(isLogin(result.data.data));
      navigate("/main/");
    } catch (err) {
      const message =
        err?.response?.data?.message || err?.message || String(err);
      console.error("Registration failed:", message, err);
      alert(`Registration failed: ${message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {[
        { label: "Name", name: "name", type: "text" },
        { label: "Email", name: "email", type: "email" },
        { label: "Mobile", name: "mobile", type: "text" },
        { label: "Password", name: "password", type: "password" },
      ].map((field) => (
        <div key={field.name}>
          <label className="block mb-1 font-medium">{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            className="w-full border border-zinc-700 p-2 rounded bg-zinc-800 text-zinc-100
                       focus:outline-none focus:ring-2 focus:ring-amber-400"
            {...(field.name === "password"
              ? { autoComplete: "current-password" }
              : {})}
            required
          />
        </div>
      ))}

      <button
        type="submit"
        className="w-full py-2 rounded bg-gradient-to-r from-amber-400 to-amber-500
                   text-zinc-900 font-semibold hover:from-amber-500 hover:to-amber-600
                   transition-colors"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;

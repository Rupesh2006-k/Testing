import React from "react";
import RegisterForm from "../components/auth/RegisterForm";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen p-8 bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-950 text-zinc-100">
      <div className="bg-zinc-900 p-8 rounded-xl shadow-xl w-full max-w-md border border-zinc-700">
        <h2 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent 
                       bg-gradient-to-r from-amber-400 to-amber-200">
          Register
        </h2>

        <RegisterForm />

        <p className="text-center mt-4 text-zinc-400">
          Already have an account?{" "}
          <span
            className="text-amber-400 cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;

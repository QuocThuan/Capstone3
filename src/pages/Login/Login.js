import React from "react";
import FormLogin from "../../Components/FormLogin/FormLogin";
import LoginAnimation from "../../Components/LoginAnimation/LoginAnimation.js";

const Login = () => {
  return (
    <div className="bg-gray-100 grid grid-cols-12 h-screen">
      <div className="col-span-7">
        <LoginAnimation />
      </div>
      <div className="col-span-5">
        <FormLogin />
      </div>
    </div>
  );
};

export default Login;

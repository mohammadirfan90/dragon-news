import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Login with</h2>
      <div className="flex flex-col gap-3">
        <button className="btn btn-outline btn-secondary">
          <FaGoogle size={18} />
          Login with Google
        </button>
        <button className="btn btn-outline btn-primary">
          <FaGithub size={18} />
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

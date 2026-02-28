import React from "react";
import { Link } from "react-router";

const LoginBtn = () => {
  return (
    <div>
      <Link to="/auth/login" class="btn btn-neutral">
        Login
      </Link>
    </div>
  );
};

export default LoginBtn;

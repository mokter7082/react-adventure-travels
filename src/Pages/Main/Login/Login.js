import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const { signWithGoogle, setLoading } = useAuth();
  const handleGoogleLogin = () => {
    signWithGoogle()
      .then((result) => {
        history.push(location.state?.from || "/");
      })
      .finally(() => setLoading(false));
  };
  return (
    <div className="text-center" style={{ marginTop: "70px" }}>
      <h2 className="text-successtext-center my-5">Please Login here</h2>
      <button onClick={handleGoogleLogin} className="btn btn-warning">
        SignUp with Google
      </button>
    </div>
  );
};

export default Login;

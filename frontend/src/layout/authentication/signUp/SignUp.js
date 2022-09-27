import React, { useRef, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import AuthenticationForm from "../../../utils/AuthenticationForm";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      navigate("/", { replace: true });
    } catch {
      setError("Failed to sign up");
    }
    setLoading(false);
  };

  return (
    <>
      <AuthenticationForm
        error={error}
        submitHandler={submitHandler}
        emailRef={emailRef}
        passwordRef={passwordRef}
        passwordConfirmRef={passwordConfirmRef}
        loading={loading}
        title="Sign Up"
      />
    </>
  );
}

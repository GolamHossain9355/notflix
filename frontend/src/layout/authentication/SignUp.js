import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import AuthenticationForm from "../../utils/authForm/AuthenticationForm";
import { createProfile } from "../../utils/api";

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

    const abortController = new AbortController();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);

      await createProfile(abortController.signal, {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
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

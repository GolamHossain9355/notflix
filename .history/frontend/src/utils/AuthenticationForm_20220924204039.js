import React from "react";
import "../layout/signIn/signIn.css";
import Header from "../layout/header/Header";

export default function AuthenticationForm({
  error,
  submitHandler,
  emailRef,
  passwordRef,
  passwordConfirmRef,
  loading,
  title,
}) {
  return (
    <>
      <Header />
      <div className="auth-container-outside">
        <div className="auth-container-inside">
          <h1>{title}</h1>
          <h2>{error}</h2>
          <form onSubmit={submitHandler}>
            <div className="auth-form-inputs">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                ref={emailRef}
                required
              />
              <span className="msg">Valid Email</span>
            </div>
            <div className="auth-form-inputs">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                ref={passwordRef}
                required
              />
              <span className="msg">Valid Pa</span>
            </div>
            {title === "Sign Up" && (
              <div>
                <label htmlFor="password-confirm">Confirm Password:</label>
                <input
                  type="password"
                  name="password-confirm"
                  id="password-confirm"
                  ref={passwordConfirmRef}
                  required
                />
                <span className="msg">Valid Email</span>
              </div>
            )}
            <button type="submit" disabled={loading}>
              {title}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

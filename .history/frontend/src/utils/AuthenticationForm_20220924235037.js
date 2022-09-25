import React from "react";
import { Link } from "react-router-dom";
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
      <div className="auth-page-container">
        <div className="auth-form-container">
          <h1 className="auth-title">{title}</h1>
          <h2 className={'auth-error-title ${}'}>{error}</h2>
          <form className="auth-form" onSubmit={submitHandler}>
            <div className="auth-form-inputs">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                ref={emailRef}
                required
              />
            </div>
            <div className="auth-form-inputs">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                ref={passwordRef}
                required
              />
            </div>
            {title === "Sign Up" && (
              <div className="auth-form-inputs">
                <label htmlFor="password-confirm">Confirm Password</label>
                <input
                  type="password"
                  name="password-confirm"
                  id="password-confirm"
                  ref={passwordConfirmRef}
                  required
                />
              </div>
            )}
            <button className="auth-button" type="submit" disabled={loading}>
              {title}
            </button>
            {title === "Sign In" && (
              <div className="auth-alternate">
                Need an account?{" "}
                <Link className="auth-alternate-link" to="/sign-up">
                  Sign Up
                </Link>
              </div>
            )}
            {title === "Sign Up" && (
              <div className="auth-alternate">
                Already have an account?{" "}
                <Link className="auth-alternate-link" to="/sign-in">
                  Sign In
                </Link>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
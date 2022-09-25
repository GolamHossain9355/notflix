import React from "react";

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
      <h1>{title}</h1>
      <h2>{error}</h2>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" ref={emailRef} required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            ref={passwordRef}
            required
          />
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
          </div>
        )}
        <br />
        <button type="submit" disabled={loading}>
          {title}
        </button>
      </form>
    </>
  );
}

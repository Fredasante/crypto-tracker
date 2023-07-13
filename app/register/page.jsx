"use client";

import Link from "next/link";

const Register = () => {
  return (
    <div className="login-container">
      <div className="form-wrapper">
        <h2>Sign Up</h2>
        <form>
          <div className="form-control">
            <input type="text" name="username" required />
            <label>Username</label>
          </div>
          <div className="form-control">
            <input type="email" name="email" required />
            <label>Email</label>
          </div>
          <div className="form-control">
            <input type="password" name="password" required />
            <label>Password</label>
          </div>
          <button type="submit">Sign Up</button>
          <div className="form-help">
            <div className="remember-me">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            <a href="#">Need help?</a>
          </div>
        </form>
        <p>
          Already have an account? <Link href="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

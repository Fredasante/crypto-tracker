"use client";

import Link from "next/link";

const Login = () => {
  return (
    <div className="login-container">
      <div className="form-wrapper">
        <h2>Sign In</h2>
        <form>
          <div className="form-control">
            <input type="text" name="email" required />
            <label>Email</label>
          </div>
          <div className="form-control">
            <input type="password" name="password" required />
            <label>Password</label>
          </div>
          <button type="submit">Sign In</button>
          <div className="form-help">
            <div className="remember-me">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            <a href="#">Need help?</a>
          </div>
        </form>
        <p>
          New to Cosmic Crypto? <Link href="/register">Sign up now</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

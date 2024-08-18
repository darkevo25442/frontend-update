'use client';

import { useEffect, useState } from 'react';
import styles from './SignUpPage.module.css';

export default function SignUpPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
        <br/><br/><br/>
         <title>Sign Up</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      <div
        className={`d-flex align-items-center justify-content-center ${styles.pageBackground}`}
      >
        <br /><br />
        <div
          className={`card text-bg-dark p-4 ${styles.cardContainer} ${
            isVisible ? styles.slideIn : ''
          }`}
        >
          <div className="card-header text-center">
            <h3>Sign Up</h3>
          </div>
          <div className="card-body">
            <form className="row g-3">
              <div className="col-md-12">
                <label htmlFor="inputEmail4" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="inputPassword4"className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Your password"
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="inputConfirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputConfirmPassword"
                  placeholder="ConfirmPassword"
                />
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="gridCheck"
                  >
                    Check me out
                  </label>
                </div>
              </div>
              <center>
                <div className="d-grid">
                  <button
                    type="submit"
                    className={`btn btn-primary ${styles.btn}`}
                  >
                    Sign Up
                  </button>
                </div>
              </center>
              <p className="text-center">
                "Already have an account?"
                <a href="/signin" className="text-primary">
                  Sign In
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

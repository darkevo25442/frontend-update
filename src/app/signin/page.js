'use client';

import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from './SignInPage.module.css';

export default function SignInPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
        <title>Sign In</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      <div
        className={`d-flex align-items-center justify-content-center ${styles.pageBackground}`}
      >
        <div
          className={`card text-bg-dark p-4 ${styles.cardContainer} ${
            isVisible ? styles.slideIn : ''
          }`}
        >
          <div className="card-header text-center">
            <h3>Sign In</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter your username"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="d-grid">
                <button type="submit" className={`btn btn-primary ${styles.btn}`}>
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

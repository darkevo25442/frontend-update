import Head from 'next/head';

export default function SignInPage() {
  return (
    <>
      <Head>
        <title>Sign In</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: '#6f2c91',
          minHeight: '100vh',
          padding: '20px',
        }}
      >
        <div className="card text-bg-dark p-4" style={{ maxWidth: '400px', width: '100%' }}>
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
                <button type="submit" className="btn btn-primary">
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

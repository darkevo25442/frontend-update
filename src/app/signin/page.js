export default function Page() {
    return (
        <>
        <title>Sign Up</title>
        <br/><br/><br/>
        <div className="container" style={{ backgroundColor: '#6f2c91', minHeight: '65vh', padding: '80px', minWidth: '100vw' }}>
        <br/><br/><br/>
            <div className="card" class="text-bg-dark p-3">
            <center>
            <div className="card-header" class="text-bg-dark p-3">
            Sign In
            </div>
            </center>
                <div className="card-body">
                    <div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">Username</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter your user name" />
                    </div>
                        <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter your password" />
                        <div className="col-12">
                                <br/>
                                <button type="submit" className="btn btn-primary">Sign In</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
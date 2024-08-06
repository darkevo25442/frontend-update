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
                Sign Up
            </div>
            </center>
                <div class="card-body">
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="???@gmail.com" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">City</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputState" className="form-label">State</label>
                            <select id="inputState" className="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputZip" className="form-label">Zip</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" htmlFor="gridCheck">
                                Check me out
                            </label>
                            </div>
                        </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </div>
                    </form>
                </div>
        </div>
        </div>
        </>
    )
}
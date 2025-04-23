function LoginView() {


    return (
        <div>
            <div className="calculators">
            <h1 className="title">Heron's Formula</h1>
            <form className="login" id="herons" onSubmit={(event) => { calculateArea(event) }}>
                <label htmlFor="a">First Name</label>
                <input type="text" name="sideA" id="a" onChange={(event) => { Number(setSideA(event.target.value)) }} required />
                <label htmlFor="b">Last Name</label>
                <input type="text" name="sideB" id="b" onChange={(event) => { Number(setSideB(event.target.value)) }} required />
                <label htmlFor="c">Email</label>
                <input type="email" name="sideC" id="c" onChange={(event) => { Number(setSideC(event.target.value)) }} required />
                <label htmlFor="c">Password</label>
                <input type="password" name="sideC" id="c" onChange={(event) => { Number(setSideC(event.target.value)) }} required />
                <label htmlFor="c">Confirm Password</label>
                <input type="password" name="sideC" id="c" onChange={(event) => { Number(setSideC(event.target.value)) }} required />
                <input type="submit" value="Calculate" className="submit-button" id="herons-submit" />
            </form>
        </div>
        </div>
    );
}

export default LoginView
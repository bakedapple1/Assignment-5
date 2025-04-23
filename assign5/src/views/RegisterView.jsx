import { useState } from "react";

function RegisterView() {
    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const [confPass, setConfPass] = useState("");

    function createAccount(event, userInfo, confPass) {
        event.preventDefault();
        



    }


    return (
        <div className="register">
            <h1 className="register-label">Sign Up</h1>
            <form className="register-form" id="register-form" onSubmit={(event) => { createAccount(event) }}>
                <label htmlFor="reg-first-name">First Name</label>
                <input type="text" name="reg-first-name" id="reg-first-name" value={firstName} onChange={(event) => { setUserInfo((prev) => ({...prev, firstName: event.target.value})) }} required />
                <label htmlFor="reg-last-name">Last Name</label>
                <input type="text" name="reg-last-name" id="reg-last-name" value={lastName} onChange={(event) => { setUserInfo({...userInfo, lastName: event.target.value}) }} required />
                <label htmlFor="reg-email">Email</label>
                <input type="email" name="reg-email" id="reg-email" value={email} onChange={(event) => { setUserInfo({...userInfo, email: event.target.value}) }} required />
                <label htmlFor="reg-pass">Password</label>
                <input type="password" name="reg-pass" id="reg-pass" onChange={(event) => { setUserInfo({...userInfo, password: event.target.value}) }} required />
                <label htmlFor="reg-conf-pass">Confirm Password</label>
                <input type="password" name="reg-conf-pass" id="reg-conf-pass" onChange={(event) => { setConfPass(event.target.value) }} required />
                <input type="submit" value="Register" className="submit-button" id="reg-submit" />
            </form>
        </div>
    );
}

export default RegisterView
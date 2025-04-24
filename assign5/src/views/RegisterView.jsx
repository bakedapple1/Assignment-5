import { useState } from "react";
import { useStoreContext } from "../context";
import Header from "../components/Header";
import "./RegisterView.css";

function RegisterView() {
    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confPass: '',
    });

    const { setUserData } = useStoreContext();

    function createAccount(event, userInfo) {
        event.preventDefault();

        if (userInfo.password !== userInfo.confPass) {
            alert("Passwords do not match!");
            setUserInfo((prev) => ({ ...prev, password: '', confPass: '' }));
        } else {
            setUserData((prevData) => prevData.set(userInfo));
        }
    }

    return (
        <div className="register-view">
            <Header />
            <div className="register">
                <h1 className="register-label">Sign Up</h1>
                <form className="register-form" id="register-form" onSubmit={(event) => { createAccount(event, userInfo) }}>
                    <label htmlFor="reg-first-name">First Name</label>
                    <input type="text" name="reg-first-name" id="reg-first-name" value={userInfo.firstName} onChange={(event) => { setUserInfo((prev) => ({ ...prev, firstName: event.target.value })) }} required />
                    <label htmlFor="reg-last-name">Last Name</label>
                    <input type="text" name="reg-last-name" id="reg-last-name" value={userInfo.lastName} onChange={(event) => { setUserInfo((prev) => ({ ...prev, lastName: event.target.value })) }} required />
                    <label htmlFor="reg-email">Email</label>
                    <input type="email" name="reg-email" id="reg-email" value={userInfo.email} onChange={(event) => { setUserInfo((prev) => ({ ...prev, email: event.target.value })) }} required />
                    <label htmlFor="reg-pass">Password</label>
                    <input type="password" name="reg-pass" id="reg-pass" value={userInfo.password} onChange={(event) => { setUserInfo((prev) => ({ ...prev, password: event.target.value })) }} required />
                    <label htmlFor="reg-conf-pass">Confirm Password</label>
                    <input type="password" name="reg-conf-pass" id="reg-conf-pass" value={userInfo.confPass} onChange={(event) => { setUserInfo((prev) => ({ ...prev, confPass: event.target.value })) }} required />
                    <input type="submit" value="Register" className="submit-button" id="reg-submit" />
                </form>
            </div>
        </div>
    );
}

export default RegisterView
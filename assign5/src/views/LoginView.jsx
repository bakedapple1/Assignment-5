import { useStoreContext } from "../context";

function LoginView() {
    const { userData } = useStoreContext();

    function checkLogin(event) {
        event.preventDefault();
        
        const userInfo = userData.entrySeq().map([key, value]);
    }

    return (
        <div className="login-view">
        <Header />
        <div className="login">
            <h1 className="login-label">Sign Up</h1>
            <form className="login-form" id="login-form" onSubmit={(event) => { checkLogin(event, userInfo) }}>
                <label htmlFor="log-first-name">First Name</label>
                <label htmlFor="log-email">Email</label>
                <input type="email" name="log-email" id="log-email" value={userInfo.email} onChange={(event) => { setUserInfo((prev) => ({ ...prev, email: event.target.value })) }} required />
                <label htmlFor="log-pass">Password</label>
                <input type="password" name="log-pass" id="log-pass" value={userInfo.password} onChange={(event) => { setUserInfo((prev) => ({ ...prev, password: event.target.value })) }} required />
                <input type="submit" value="Log In" className="submit-button" id="log-submit" />
            </form>
        </div>
    </div>
    );
}

export default LoginView
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
    const navigate = useNavigate();

    return (
        <div className="nav-bar">
            <div className="logo" onClick={() => navigate(`/`)}>
                BingeBerry
            </div>

            <div className="buttons">
                <button className="sign-up" onClick={() => navigate(`/register`)}>
                    Sign up
                </button>
                <button className="log-in" onClick={() => navigate(`/login`)}>
                    Log in
                </button>
            </div>
        </div>
    );
}

export default Header;
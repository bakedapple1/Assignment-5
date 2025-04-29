import HeroBanner from "../assets/Hero banner.png";
import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate();

    return (
        <div className="hero" onClick={() => navigate(`/movies`)}>
            <label className="hero-label" htmlFor="hero-poster">ALL-YOU-CAN-BINGE</label>
            <img id="hero-poster" className="hero-poster" src={HeroBanner} />
        </div>
    );
}

export default Hero;
import HeroBanner from "../assets/Hero banner.png";

function Hero() {

    return (
        <div className="hero">
            <label className="hero-label" htmlFor="hero-poster">ALL-YOU-CAN-BINGE</label>
            <img id="hero-poster" className="hero-poster" src={HeroBanner} />
        </div>
    );
}

export default Hero;
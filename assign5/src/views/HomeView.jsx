import "./HomeView.css";
import Featured from "../components/Featured.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";

function HomeView() {
    return (
        <div>
            <Header />
            <Hero />
            <Featured />
            <Footer />
        </div>
    );
}

export default HomeView
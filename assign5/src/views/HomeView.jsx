import "./HomeView.css";
import Feature from "./components/Featured.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";

function HomeView() {
    return (
        <div>
            <Header />
            <Hero />
            <Feature />
            <Footer />
        </div>
    );
}

export default HomeView;
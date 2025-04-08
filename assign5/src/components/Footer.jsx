import axios from "axios";
import { useState, useEffect } from "react";

function Footer() {

    useEffect(() => {
        async function getData() {
            setMovies((await axios.get(`https://api.themoviedb.org/3/movie/${location}?api_key=${import.meta.env.VITE_TMDB_KEY}`)).data.results);
        };

        getData();
    }, [location]);

    return (
        <>
            <hr />
            <div class="footer">
                <div class="footer-links">
                    <a id="github" href="https://github.com/bakedapple1/Assignment-2" target="_blank">GitHub</a>
                    <a id="license"
                        href="https://preview.redd.it/what-are-some-funny-license-plates-youve-seen-in-ottawa-v0-w3pu1v029tub1.jpg?width=640&crop=smart&auto=webp&s=2fa076cb07306240e492631ca6178d3e9bcce591"
                        target="_blank">Licence Agreement</a>
                    <a id="privacy" href="https://youtu.be/dQw4w9WgXcQ" target="_blank">Privacy Policy</a>
                </div>

                <div class="footer-text">
                    <p id="credit">Web Design: Daniel C</p>
                    <p id="copyright">© BingBerry 2025</p>
                </div>
            </div>
        </>
    );
}

export default Footer;
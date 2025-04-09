function Feature() {

    return (
        <div className="featured-section">
            <h1 className="featured-header">Featured</h1>

            <div className="featured-movies">
                <div id="mov1" className="mov">
                    <img id="mov-poster-1" className="poster" src="Images\Paddington.jpg" />
                    <p id="mov-label-1" className="mov-label">Paddington in Peru</p>
                </div>

                <div id="mov2" className="mov">
                    <img id="mov-poster-2" className="poster" src="Images\Ne Zha.jpg" />
                    <p id="mov-label-2" className="mov-label">Ne Zha 2</p>
                </div>

                <div id="mov3" className="mov">
                    <img id="mov-poster-3" className="poster" src="Images\Happy Death Day.jpg" />
                    <p id="mov-label-3" className="mov-label">Happy Death Day 2U</p>
                </div>

                <div id="mov4" className="mov">
                    <img id="mov-poster-4" className="poster" src="Images\Barbie.jpg" />
                    <p id="mov-label-4" className="mov-label">Barbie</p>
                </div>

                <div id="mov5" className="mov">
                    <img id="mov-poster-5" className="poster" src="Images\Oppenheimer.jpg" />
                    <p id="mov-label-5" className="mov-label">Oppenheimer</p>
                </div>

                <div id="mov6" className="mov">
                    <img id="mov-poster-6" className="poster" src="Images\Titanic.jpg" />
                    <p id="mov-label-6" className="mov-label">Titanic</p>
                </div>
            </div>
        </div>
    );
}

export default Feature;
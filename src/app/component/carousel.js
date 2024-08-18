import styles from "./carousel.module.css";

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <div className="d-flex justify-content-center">
                            <iframe 
                                className={styles.video}
                                src="https://www.youtube.com/embed/jRLuWFPYGzc" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <div className="d-flex justify-content-center">
                            <iframe 
                                className={styles.video}
                                src="https://www.youtube.com/embed/Bfe08q9jer8" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <div className="d-flex justify-content-center">
                            <iframe 
                                className={styles.video}
                                src="https://www.youtube.com/embed/qRZIGiPXIaQ" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
                <div className={styles.caption}>
                MAJO NO TABITABI
            </div>
            </div>
        </div>
    );
}

import './styles.css';

const Home = () => {

    return (
        <>
            <div className="home-container">
                <div className="home-card">
                    <div className="home-name-container">
                        <h1>
                            ASSOCIAÇÃO ESPÍRITA SEARA DE JESUS
                        </h1>
                    </div>
                    <div className="home-opening-container">
                        <p>
                            Horário de funcionamento - <b>2024</b>
                        </p>
                    </div>
                    <div className="home-wednesday-container">
                        <p>
                            <b>Quarta-feira:</b> das 19h às 20h30.
                        </p>
                    </div>
                    <div className="home-saturday-container">
                        <p>
                            <b>Sábado:</b> das 19h às 20h30.
                        </p>
                    </div>
                    <div className="home-lecture-container">
                        <p>
                            Palestra pública
                        </p>
                    </div>
                    <div className="home-helpcare-container">
                        <p>
                            Tratamento médico-espiritual
                        </p>
                    </div>
                    <div className="home-phone-container">
                        <p>
                            Cel.: (11) 9.9691-3012
                        </p>
                    </div>
                </div>
            </div>
        </>
    );

};

export default Home;
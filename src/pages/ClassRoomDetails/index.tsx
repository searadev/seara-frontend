import './styles.css';
import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';

const ClassRoomDetails = () => {
    return (
        <div className="classroom-details-container">
            <div className="base-card classroom-details-card">
                <div className="goback-container">
                    <ArrowIcon />
                    <h2>VOLTAR</h2>
                </div>
                <div className="classroom-content-container">
                    <div className="classroom-text-container">
                    <iframe width="1050" height="720" src="https://www.youtube.com/embed/WsEv01p3GXU" title="Como inserir vídeo do YouTube no seu site HTML (Embed)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                    </div>
                    <div>
                        <div className="classroom-data-container">
                            <h1>11/11/11</h1>
                            <h1>-</h1>
                            <h1>24ª Aula – Jesus; Anunciação, Nascimento, Família, Vida Dos 12 Aos 30</h1>
                        </div>                    
                    </div>
                </div>                
            </div>            
        </div>
    );
}

export default ClassRoomDetails;
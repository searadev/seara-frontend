import './styles.css';
import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import { Link } from 'react-router-dom';

const ClassRoomDetails = () => {
    return (
        <div className="classroom-details-container">
            <div className="base-card classroom-details-card">
                <Link to="/classroom">
                <div className="goback-container">
                    <ArrowIcon />
                    <h2>VOLTAR</h2>
                </div>
                </Link>
                <div>
                    <div className="ratio ratio-16x9 classroom-vide-container">
                        <iframe src="https://www.youtube.com/embed/WsEv01p3GXU" title="Como inserir vídeo do YouTube no seu site HTML (Embed)"></iframe>
                    </div>
                    <div className="classroom-data-container">                        
                        <h1>11/11/11</h1>
                        <h1>-</h1>
                        <h1>24ª Aula – Jesus; Anunciação, Nascimento, Família, Vida Dos 12 Aos 30</h1>                                         
                    </div>
                </div>                
            </div>            
        </div>
    );
}

export default ClassRoomDetails;
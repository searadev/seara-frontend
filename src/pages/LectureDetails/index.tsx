import './styles.css';
import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import { Link } from 'react-router-dom';

const LectureDetails = () => {
    return (
        <div className="lecture-details-container">            
            <div className="base-card lecture-details-card">
                <Link to="/lecture">
                <div className="goback-container">
                    <ArrowIcon />
                    <h2>VOLTAR</h2>
                </div>
                </Link>
                <div>
                    <div className="ratio ratio-16x9 lecture-vide-container">
                        <iframe src="https://www.youtube.com/embed/WsEv01p3GXU" title="Como inserir vídeo do YouTube no seu site HTML (Embed)"></iframe>
                    </div>
                    <div>
                        <div className="lecture-data-container">
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

export default LectureDetails;
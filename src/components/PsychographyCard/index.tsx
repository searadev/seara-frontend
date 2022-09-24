import { Psychography } from 'types/psychography';
import './styles.css';

type Props = {
    psychography: Psychography;
}

const PsychographyCard = ({ psychography } : Props) => {

    return (
        <div className="base-card psychography-card">            
            <div className="psychography-body-container">
                <p>{psychography.title}</p>
            </div>
            <div className="psychography-botton-container">
                <h1>{psychography.fullName}</h1>
            </div>
        </div>
    );
}

export default PsychographyCard;
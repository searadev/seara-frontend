import { PsychographyDto } from 'types/psychographyDto';
import './styles.css';

type Props = {
    psychographyDto: PsychographyDto;
}

const PsychographyCard = ({ psychographyDto } : Props) => {

    return (
        <div className="base-card2 psychography-card">            
            <div className="psychography-body-container">
                <p>{psychographyDto.title}</p>
            </div>
            <div className="psychography-botton-container">
                <h1>{psychographyDto.fullName}</h1>
            </div>
        </div>
    );
}

export default PsychographyCard;
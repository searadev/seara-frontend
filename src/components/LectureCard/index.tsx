import { Lecture } from 'types/lecture';
import './styles.css';

type Props = {
    lecture: Lecture;
}

const LectureCard = ({ lecture } : Props) => {

    return (
        <div className="base-card lecture-card">
            <div className="lecture-top-container">
                <p>{lecture.title}</p>
            </div>
            <div className="lecture-body-container">
                <p>{lecture.date}</p>
            </div>            
        </div>
    );
}

export default LectureCard;
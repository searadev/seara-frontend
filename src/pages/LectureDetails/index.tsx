import './styles.css';
import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import { Link } from 'react-router-dom';
import { Lecture } from 'types/lecture';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from 'util/requests';

const LectureDetails = () => {

    const [lecture, setLecture] = useState<Lecture>();

    useEffect(() => {
        axios.get(BASE_URL + "/lectures/1")
        .then(response => {
            setLecture(response.data);
        });
    }, []);

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
                        <iframe src={lecture?.url} title={lecture?.title}></iframe>
                    </div>
                    <div>
                        <div className="lecture-data-container">
                            <h1>{lecture?.date}</h1>
                            <h1>-</h1>
                            <h1>{lecture?.title}</h1>
                        </div>                    
                    </div>
                </div>                
            </div>            
        </div>
    );
}

export default LectureDetails;
import './styles.css';
import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import { Link } from 'react-router-dom';
import { ClassRoom } from 'types/classroom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from 'util/requests';

const ClassRoomDetails = () => {

    const [classroom, setClassroom] = useState<ClassRoom>();

    useEffect(() => {
        axios.get(BASE_URL + "/classes/1")
        .then(response => {
            setClassroom(response.data);
        });
    }, []);

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
                        <iframe src={classroom?.url} title={classroom?.title}></iframe>
                    </div>
                    <div className="classroom-data-container">                        
                        <h1>{classroom?.date}</h1>
                        <h1>-</h1>
                        <h1>{classroom?.title}</h1>                                         
                    </div>
                </div>                
            </div>            
        </div>
    );
}

export default ClassRoomDetails;
import axios from "axios";
import LectureCard from "components/LectureCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Lecture } from "types/lecture";
import { AxiosParams } from "types/vendor/axios";
import { SpringPage } from "types/vendor/spring";
import { BASE_URL } from "util/requests";
import './styles.css';

const Lectures = () => {

    const [page, setPage] = useState<SpringPage<Lecture>>();
        
    useEffect(() => {

    const params : AxiosParams = {
      method: 'GET',
      url: `${BASE_URL}/lectures`,
      params: {
        page: 0,
        size: 12
      },
    }

    axios(params)
    .then(response => {
      setPage(response.data);
    });

    }, []);

    return (
        <div className="container my-4 lecture-container">
          <div className="row lecture-title-container">
            <h1>Palestras</h1>
          </div>
          <div className="row">
            {page?.content.map((lecture) => {
              return (
                <div className="col-sm-6 col-lg-4 col-xl-3" key={lecture.id}>
                  <Link to="/classroom/1">
                    <LectureCard lecture={lecture}/>
                  </Link>
                </div>
              );
            })}
          </div> 
          <div className="row">
            <Pagination />
          </div>         
        </div> 
    );
  };
  
  export default Lectures;
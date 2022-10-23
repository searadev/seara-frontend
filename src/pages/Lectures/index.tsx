import axios, { AxiosRequestConfig } from "axios";
import CardLoader from "components/CardLoader";
import LectureCard from "components/LectureCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Lecture } from "types/lecture";
import { SpringPage } from "types/vendor/spring";
import { BASE_URL } from "util/requests";
import './styles.css';

const Lectures = () => {

    const [page, setPage] = useState<SpringPage<Lecture>>();
    const [isLoading, setIsLoading] = useState(false);
        
    useEffect(() => {

    const params : AxiosRequestConfig = {
      method: 'GET',
      url: "/lectures",
      baseURL: BASE_URL,
      params: {
        page: 0,
        size: 12
      },
    }

    setIsLoading(true);
      axios(params)
        .then(response => {
          setPage(response.data);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, []);

    return (
        <div className="container my-4 lecture-container">
          <div className="row lecture-title-container">
            <h1>Palestras</h1>
          </div>
          <div>
            {isLoading ? <CardLoader /> : (
              page?.content.map((lecture) => {
              return ( 
                <div className="row" key={lecture.id}>
                  <Link to={`/lecture/${lecture.id}`}>
                    <LectureCard lecture={lecture}/>
                  </Link>
                </div>
              );
            }))}
          </div> 
          <div className="row">
            <Pagination />
          </div>         
        </div> 
    );
  };
  
  export default Lectures;
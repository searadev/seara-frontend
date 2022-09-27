import axios from "axios";
import Pagination from "components/Pagination";
import PsychographyCard from "components/PsychographyCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Psychography } from "types/psychography";
import { AxiosParams } from "types/vendor/axios";
import { SpringPage } from "types/vendor/spring";
import { BASE_URL } from "util/requests";
import './styles.css';

const Psychographies = () => {

    const [page, setPage] = useState<SpringPage<Psychography>>();
      
    useEffect(() => {

      const params : AxiosParams = {
        method: 'GET',
        url: `${BASE_URL}/psychographies`,
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
        <div className="container my-4 psychography-container">
          <div className="row psychography-title-container">
            <h1>Psicografias</h1>
          </div>
          {page?.content.map((psychography) => {
            return (
              <div className="row" key={psychography.id}>
                <Link to="/psychography/1">
                  <PsychographyCard psychographyDto={psychography}/>
                </Link>
              </div>
            );
          })}
          <div className="row">
            <Pagination />
          </div>
        </div>  
    );
  };
  
  export default Psychographies;
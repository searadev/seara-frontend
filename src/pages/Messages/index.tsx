import axios from "axios";
import MessageCard from "components/MessageCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Message } from "types/message";
import { AxiosParams } from "types/vendor/axios";
import { SpringPage } from "types/vendor/spring";
import { BASE_URL } from "util/requests";

import './styles.css';

const Messages = () => {

    const [page, setPage] = useState<SpringPage<Message>>();
    
    useEffect(() => {

    const params : AxiosParams = {
      method: 'GET',
      url: `${BASE_URL}/messages`,
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
        <div className="container my-4 message-container">
          <div className="row message-title-container">
            <h1>Mensagens</h1>
          </div>
          {page?.content.map((message) => {
            return (
              <div className="row" key={message.id}>
                <Link to="/message/1">
                  <MessageCard message={message}/>
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
  
  export default Messages;
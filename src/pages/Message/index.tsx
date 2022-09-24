import MessageCard from "components/MessageCard";
import './styles.css';

const Message = () => {
    return (
        <div className="container my-4 message">
          <div className="row">
            <MessageCard />
          </div>
          <div className="row">
            <MessageCard />
          </div>
          <div className="row">
            <MessageCard />
          </div>
          <div className="row">
            <MessageCard />
          </div>
          <div className="row">
            <MessageCard />
          </div>
        </div> 
    );
  };
  
  export default Message;
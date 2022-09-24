import MessageCard from "components/MessageCard";
import Navbar from "components/Navbar";
import './styles.css';

const Message = () => {
    return (
      <>
        <Navbar />
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
      </>
    );
  };
  
  export default Message;